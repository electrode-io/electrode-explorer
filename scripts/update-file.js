"use strict";

const Fs = require("fs");
const Path = require("path");

module.exports = (filename, manipulation) => {

  const fullPath = Path.join(__dirname, `./server/data/${file}`);
  Fs.readFile(fullPath, (err, data) => {
    if (err) {
      throw err;
    }

    let repoData = {};

    try {
      repoData = JSON.parse(data);
    } catch (err) {
      console.log(err);
      throw new Error("Error parsing repo data file");
    }

    repoData = manipulation(repoData);

    if (repoData) {
      Fs.writeFileSync(fullPath, JSON.stringify(repoData));
    }

  });

};
