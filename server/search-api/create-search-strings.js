"use strict";

const strings = {};
const KEY_LENGTH = 2;
const indexString = str => {
  const key = str.substr(0, KEY_LENGTH);

  if (!strings[key]) {
    strings[key] = [];
  }

  strings[key].push(str);
};

const CreateSearchStrings = index => {
  Object.keys(index).map(module => {
    const parts = module.split("/");
    const unNamespacedModule = parts[parts.length - 1];

    indexString(unNamespacedModule);
    index[module].map(str => indexString(str));
  });

  return strings;
};

module.exports = CreateSearchStrings;
