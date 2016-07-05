"use strict";

/****
 * Module: `wpa-routes.js`
 */

module.exports = {
  wpaPath: "/api/wpa",

  getWpaPluginPath: function getWpaPluginPath(basePath) {
    return basePath !== "/" ? "" + basePath + this.wpaPath : this.wpaPath;
  }
};