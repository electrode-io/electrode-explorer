const Fs = require("fs");
const Path = require("path");

const getStyles = (moduleName, dirName, path) => {
  // Grab stylesheets, check for dependent stylesheets & install & copy
  // require them in component.jsx render? Want to keep them separate per
  // component in case of version differences
  console.log("getStyles called correctly");
};

module.exports = getStyles;
