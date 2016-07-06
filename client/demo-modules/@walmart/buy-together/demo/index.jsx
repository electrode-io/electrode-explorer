/* eslint complexity:0 */
import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

/// start imports
import BuyTogether from "../src/components/buy-together.jsx";
import BuyTogetherExample from "raw!./examples/buy-together.example";
/// end imports

const Index = React.createClass({
  propTypes: {
    scope: React.PropTypes.object
  },
  render() {
/// start render
    return (
      <div className="component-documentation">
        <h3 id={"BuyTogether"}>Buy Together</h3>
        <Playground
          codeText={BuyTogetherExample}
          scope={assign({React, BuyTogether}, this.props.scope || {})}
          noRender={true}/>
      </div>
    );
/// end render
  }
});

module.exports = Index;
