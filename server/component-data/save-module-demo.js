"use strict";

const Path = require("path");
const getStyles = require("./get-styles");
const parseDir = require("./parse-dir");
const ensureDirectoryExists = require("./utils/ensure-directory-exists");
const execFile = require("child_process").execFile;

const saveModuleDemo = (moduleName) => {

  execFile("bash", [Path.join(__dirname, "../../install-module.sh"), moduleName], (error) => {
    if (error) {
      console.log(`npm install failed for this module, error:\n${error}`);
    }

    console.log(`${moduleName}: npm install finished.`);

    const demoModules = Path.join(__dirname, "../../client/demo-modules");

    ensureDirectoryExists(demoModules);

    // Handle namespaced modules by splitting on /
    // If module is not namespaced, it will be at index 0
    const moduleNameParts = moduleName.split("/");

    // Ensures a directory structure of demo-modules/@NAMESPACE/MODULE_NAME for namespaced
    // modules, demo-modules/MODULE_NAME for non-namespaced modules
    const directory = Path.join(demoModules, "/", moduleNameParts[0]);
    ensureDirectoryExists(directory);

    if (moduleNameParts.length > 1) {
      ensureDirectoryExists(Path.join(directory, "/", moduleNameParts[1]));
    }

    const moduleBase = Path.join(__dirname, "../../node_modules/", moduleName);

    getStyles(moduleName, "", Path.join(moduleBase, "/src/styles"));

    parseDir(moduleName, "", Path.join(moduleBase, "/lib"));

  });

};

module.exports = saveModuleDemo;
