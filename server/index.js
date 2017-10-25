"use strict";
const extendRequire = require("isomorphic-loader/lib/extend-require");
extendRequire()
  .then(() => {
    /*eslint-disable*/
    require("babel-core/register");
    require("electrode-server")(require("electrode-confippet").config, [require("electrode-static-paths")()]);
    /*eslint-enable*/
  })
  .catch((err) => {
    console.log("extendRequire failed", err.stack); // eslint-disable-line no-console
  });
