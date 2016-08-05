"use strict";

const Path = require("path");
const execFile = require("child_process").execFile;
const processSubModules = require("./process-submodules");

const saveModuleDemo = (meta, server, keywords) => {

  const moduleName = meta.name;

  execFile("bash", [Path.join(__dirname, "../../scripts/install-module.sh"), moduleName], (error) => {
    if (error) {
      console.log(`npm install failed for this module, error:\n${error}`);
      throw error;
    }

    console.log(`${moduleName}: npm install finished.`);

    execFile("bash", [Path.join(__dirname, "../../scripts/post-install-module.sh"), moduleName], (error) => {
      if (error) {
        console.log(`post processing failed for this module, error:\n${error}`);
        throw error;
      }

      processSubModules(moduleName, meta.github, server, keywords);

      console.log(`${moduleName}: webpack finished.`);
    });

  });

};

module.exports = saveModuleDemo;
