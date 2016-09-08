"use strict";

const Path = require("path");
const Fs = require("fs");
const Chalk = require("chalk");

const CreateSearchStrings = require("../search-api/create-search-strings");

const IndexPath = Path.join(__dirname, "../../data/search-index.json");

const UpdateSearchIndex = (moduleName, subModules, server, keywords) => {

  let searchIndex = {};

  try {
    // If the index already exists, pull it in
    searchIndex = require(IndexPath);
  } catch (err) { }

  searchIndex[moduleName] = (keywords || []).concat(subModules);

  // Directly update server app stored value so that it's available immediately
  server.settings.app.searchIndex = searchIndex;
  server.settings.app.searchStrings = CreateSearchStrings(searchIndex);

  // Write to file to persist data
  Fs.writeFile(IndexPath, JSON.stringify(searchIndex), (err) => {
    if (err) {
      return console.log(Chalk.red("Error writing search index"), err);
    }

    console.log(Chalk.green(`Successfully wrote search index to ${IndexPath}`));

  });

};

module.exports = UpdateSearchIndex;

