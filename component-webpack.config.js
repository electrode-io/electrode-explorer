"use strict";

const config = require("@walmart/electrode-archetype-react-component/config/webpack/webpack.config");

module.exports = Object.assign(config, {
  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    },
    {
      "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom"
      }
    }
  ],
  plugins: []
});
