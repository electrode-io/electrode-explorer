/* eslint complexity:0 */
import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

/// start imports
import ProductQuantity from "../src/components/product-quantity.jsx";
import example1 from "raw!./examples/example1.example";
/// end imports

const Index = React.createClass({
  propTypes: {
    scope: React.PropTypes.object
  },
  render() {
/// start render
    return (
      <div className="component-documentation">
        <h3 id={"ProductQuantity"}>ProductQuantity</h3>
        <Playground
          codeText={example1}
          scope={assign({React, ProductQuantity}, this.props.scope || {})}
          noRender={true}/>
      </div>
    );
/// end render
  }
});

module.exports = Index;
