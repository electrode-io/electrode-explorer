"use strict";

const Path = require("path");
const execFile = require("child_process").execFile;

const saveModuleDemo = (moduleName) => {

  execFile("bash", [Path.join(__dirname, "../../install-module.sh"), moduleName], (error) => {
    if (error) {
      console.log(`npm install failed for this module, error:\n${error}`);
      throw error;
    }

    console.log(`${moduleName}: npm install finished.`);

    execFile("bash", [Path.join(__dirname, "../../post-install-module.sh"), moduleName], (error) => {
      if (error) {
        console.log(`copying files failed for this module, error:\n${error}`);
        throw error;
      }
    });

  });

};

module.exports = saveModuleDemo;
