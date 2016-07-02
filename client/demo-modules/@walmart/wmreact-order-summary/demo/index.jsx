import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import OrderSummary from "../src/components/order-summary.jsx";

import exampleZero from "raw!./examples/example-zero.example";
import exampleOne from "raw!./examples/example-one.example";
import exampleMinimal from "raw!./examples/example-minimal.example";
import exampleComplete from "raw!./examples/example-complete.example";
import exampleCompleteLineItems from "raw!./examples/example-complete-line-items.example";

const ZipCodeHandler = {
  onZipCodeChanged(zipCode, callback) {
    if (zipCode === "95014") {
      window.setTimeout(() => { callback({ success: false }); }, 3000);
    } else {
      window.setTimeout(() => { callback({ success: true }); }, 3000);
    }
  }
};

class Index extends React.Component {
  render() {
    const playgroundScope = assign({React, OrderSummary, ZipCodeHandler}, this.props.scope || {});

    return (
      <div className="component-documentation">
        <h3 id={"OrderSummary"}>OrderSummary - Zero</h3>
        <Playground
          codeText={exampleZero}
          scope={playgroundScope}
          noRender={true}/>

        <h3 id={"OrderSummary"}>OrderSummary - One</h3>
        <Playground
          codeText={exampleOne}
          scope={playgroundScope}
          noRender={true}/>

        <h3 id={"OrderSummary"}>OrderSummary - Minimal</h3>
        <Playground
          codeText={exampleMinimal}
          scope={playgroundScope}
          noRender={true}/>

        <h3 id={"OrderSummary"}>OrderSummary - Complete</h3>
        <Playground
          codeText={exampleComplete}
          scope={playgroundScope}
          noRender={true}/>

        <h3 id={"OrderSummary"}>OrderSummary - Complete with Line Items</h3>
        <Playground
          codeText={exampleCompleteLineItems}
          scope={playgroundScope}
          noRender={true}/>
      </div>
    );
  }
}

Index.propTypes = {
  scope: React.PropTypes.object
};

module.exports = Index;
