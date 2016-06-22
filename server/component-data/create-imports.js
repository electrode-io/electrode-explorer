"use strict";

const imports = [];

const extractData = (importStr) => {

  const innerMatch = importStr.match(/import ([\w]*) from "\.\.\/src\/([a-z\-\/]*)(?:\.jsx)?";/);

  if (!innerMatch) {
    return;
  }

  imports.push({
    ref: innerMatch[1],
    path: innerMatch[2]
  });

};

const createImports = (im) => {

  im.forEach(extractData);

  return imports;

};

module.exports = createImports;
