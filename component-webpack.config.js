"use strict";

const config = require("@walmart/electrode-archetype-react-component/config/webpack/webpack.config");

module.exports = Object.assign(config, {
  externals: {
    react: "react"
  },
  plugins: []
});
