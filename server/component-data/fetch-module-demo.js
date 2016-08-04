"use strict";

const Path = require("path");
const execFile = require("child_process").execFile;
const processSubModules = require("./process-submodules");

const saveModuleDemo = (meta, majorVersion) => {

  const moduleName = meta.name;
  const command = [Path.join(__dirname, "../../scripts/install-module.sh"), moduleName];

  if (majorVersion) {
    command.push(majorVersion);
  }

  execFile("bash", command, (error) => {
    if (error) {
      console.log(`npm install failed for this module, error:\n${error}`);
      throw error;
    }

    console.log(`${moduleName}: npm install finished.`);

    processSubModules(moduleName, meta.github);
  });

};

module.exports = saveModuleDemo;
