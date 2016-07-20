"use strict";

const Path = require("path");
const Fs = require("fs");
const Babel = require("babel-core");
const traverse = require("babel-traverse").default;

const ProcessSubModules = (moduleName, github) => {
  const subModules = [];

  const demoFile = Path.join(__dirname, `../../client/demo-modules/${moduleName}/demo/demo.js`);
  const orgFile = Path.join(__dirname, "../data/orgs.json");

  Babel.transformFile(demoFile, { presets: ["es2015", "react"] }, (err, result) => {
    if (err) {
      console.log("error processing submodules for ", moduleName);
      return console.log(err);
    }

    const visitor = {
      enter(path) {
        if (path.node.key && path.node.key.name === "title") {
          subModules.push(path.node.value.value);
        }
      }
    };

    traverse(result.ast, visitor);

    if (subModules.length < 3) {
      // Denotes no actual submodules
      return;
    }

    try {
      const orgs = require(orgFile);

      const parts = github.split("/");

      orgs.allOrgs[parts[3]].repos[parts[4]].submodules =
        subModules.filter((sm,i)=>i);

      Fs.writeFile(orgFile, JSON.stringify(orgs), (err) => {
        if (err) {
          console.error("Could not add submodules to orgs file");
          console.log(err);
        }

        console.log(`Wrote submodules for ${parts[3]}/${parts[4]}`);
      });

    } catch (err) {
      console.error("Could not parse orgs.json");
      console.log(err);
    }

  });

};

module.exports = ProcessSubModules;
