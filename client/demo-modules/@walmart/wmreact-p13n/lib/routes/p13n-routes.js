"use strict";

exports.__esModule = true;
/****
 * Module: `p13n-routes.js`
 */

var irsPath = exports.irsPath = "/api/p13n";

var getIrsPluginPath = exports.getIrsPluginPath = function getIrsPluginPath(basePath) {
  return basePath !== "/" ? "" + basePath + irsPath : irsPath;
};