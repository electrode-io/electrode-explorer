"use strict";

const Fs = require("fs");

module.exports = (path) => {

  try {

    // Try to stat the directory
    Fs.statSync(path);

  } catch (err) {

    // Error indicates it doesn't exist
    // So we create it
    Fs.mkdirSync(path);

  }

};

