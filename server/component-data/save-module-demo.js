"use strict";

const Path = require("path");
const getStyles = require("./get-styles");
const parseDir = require("./parse-dir");
const ensureDirectoryExists = require("./utils/ensure-directory-exists");

const saveModuleDemo = (moduleName) => {

  const spawn = require("child_process").spawn;
  const npmi = spawn("npm", ["i", moduleName]);

  npmi.on("close", (code) => {

    if (code) {
      return console.log(`npm install failed for this module, code: ${code}`);
    }

    console.log(`${moduleName}: npm install finished with code ${code}`);

    const demoModules = Path.join(__dirname, "../../client/demo-modules");

    ensureDirectoryExists(demoModules);

    // Handle namespaced modules by splitting on /
    // If module is not namespaced, it will be at index 0
    const moduleNameParts = moduleName.split("/");

    // Ensures a directory structure of demo-modules/@NAMESPACE/MODULE_NAME for namespaced
    // modules, demo-modules/MODULE_NAME for non-namespaced modules
    moduleNameParts.forEach((identifier) =>
      ensureDirectoryExists(Path.join(demoModules, "/", identifier)));

    const moduleBase = Path.join(__dirname, "../../node_modules/", moduleName);

    getStyles(moduleName, "", Path.join(moduleBase, "/src/styles"));

    parseDir(moduleName, "", Path.join(moduleBase, "/lib"));

  });

};

module.exports = saveModuleDemo;
