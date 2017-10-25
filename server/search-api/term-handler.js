"use strict";

/* eslint-disable max-statements */
/* eslint-disable max-params */

const doSearch = (term, key, pool, omitMatches) => {
  const pattern = new RegExp(`^(${pool.join("|")})$`, "g");
  const m = term.match(pattern);

  const matchesObj = { module: key };

  if (!omitMatches) {
    matchesObj.matches = m;
  } else {
    matchesObj.isModule = true;
  }

  return m && matchesObj;
};

module.exports = function TermHandler(request, reply) {
  const term = request.params.term;

  if (!term) {
    return reply({ err: "No search term specified" });
  }

  const results = { term };

  const searchIndex = request.server.settings.app.searchIndex || {};

  const moduleKeys = Object.keys(searchIndex);
  const mkLength = moduleKeys.length;
  let leftPointer = 0;
  let rightPointer = mkLength - 1;

  results.matched = [];

  while (leftPointer < mkLength && rightPointer > leftPointer) {
    const leftKey = moduleKeys[leftPointer];
    const rightKey = moduleKeys[rightPointer];

    [leftKey, rightKey].map(key => {
      [doSearch(term, key, searchIndex[key]), doSearch(term, key, key.split("/"), true)].map(
        matches => matches && results.matched.push(matches)
      );
    });

    ++leftPointer;
    --rightPointer;
  }

  results.count = results.matched.length;

  return reply(results);
};
