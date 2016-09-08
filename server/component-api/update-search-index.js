"use strict";

const Path = require("path");
const fs = require("fs");
const Promise = require("bluebird");
const readFile = Promise.promisify(fs.readFile);
const Chalk = require("chalk");

const CreateSearchStrings = require("../search-api/create-search-strings");

const IndexPath = Path.join(__dirname, "../../data/search-index.json");

const UpdateSearchIndex = (moduleName, subModules, server, keywords) => {

  let searchIndex = {};

  return readFile(IndexPath)
    .then((data) => {
      searchIndex = JSON.parse(data);

      searchIndex[moduleName] = (keywords || []).concat(subModules);

      // Directly update server app stored value so that it's available immediately
      server.settings.app.searchIndex = searchIndex;
      server.settings.app.searchStrings = CreateSearchStrings(searchIndex);

      // Write to file to persist data
      fs.writeFileSync(IndexPath, JSON.stringify(searchIndex));
      console.log(Chalk.green(`Successfully wrote search index to ${IndexPath}`));
    })
    .catch(() => {});
};

module.exports = UpdateSearchIndex;
