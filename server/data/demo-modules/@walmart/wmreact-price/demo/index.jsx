/* eslint complexity:0 */
import React from "react";
import Playground from "component-playground";

/// start imports
import Price from "../src/components/price.jsx";
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
        <h3 id={"Price"}>Price</h3>
        <Playground
          codeText={example1}
          scope={Object.assign({React, Price}, this.props.scope || {})}
          noRender={true}/>
      </div>
    );
    /// end render
  }
});

module.exports = Index;
