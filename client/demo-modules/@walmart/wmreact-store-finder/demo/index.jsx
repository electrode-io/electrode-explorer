/* eslint new-cap:0 no-unused-vars:0 */
import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import StoreFinder from "../src/components/store-finder";
import StoreFinderApi from "../src/api/api";

StoreFinderApi.setDemoData(require("../src/demo/data"));

const storeFinderExample = require("raw!./examples/store-finder.example");

const Index = React.createClass({
  propTypes: {
    scope: React.PropTypes.object
  },
  render() {
    return (
      <div className="component-documentation">
        <h3>Store Finder</h3>
        <Playground
          codeText={storeFinderExample}
          scope={assign({React, StoreFinder}, this.props.scope || {})}
          noRender={true}/>
      </div>
    );
  }
});

module.exports = Index;
