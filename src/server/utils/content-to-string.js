"use strict";

module.exports = (base64encodedString) =>
  new Buffer(base64encodedString, "base64").toString("ascii");
