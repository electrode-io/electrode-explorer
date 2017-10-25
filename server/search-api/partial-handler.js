"use strict";
const SUBSTRING_PARTS = 2;
module.exports = function PartialHandler(request, reply) {
  const results = [];
  const part = request.params.part;
  const matches = request.server.settings.app.searchStrings || {};

  const subMatch = matches[part.substr(0, SUBSTRING_PARTS)];

  if (subMatch) {
    const pattern = new RegExp(`^${part}`);
    const returned = {};
    subMatch.map(str => {
      if (!returned[str] && pattern.test(str)) {
        results.push(str);
        returned[str] = 1;
      }
    });
  }

  return reply(results);
};
