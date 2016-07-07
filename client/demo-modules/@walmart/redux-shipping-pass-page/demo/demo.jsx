import React from "react";
import ProvidedShippingPassExample from "raw!./examples/shipping-pass-widget.example";
import ProvidedShippingPass from "../src/containers/provided-shipping-pass";
import Playground from "component-playground";
import shippingPassStore from "./mock/shipping-pass-store";

import "./demo.styl";

import Config from "../src/config";

Config.init({
  basePath: "http://dev.walmart.com:3000/account",
  apiPath: "/electrode/account/api"
});

const App = () => (
  <div className="component-documentation">
    <h2>Widget</h2>
    <Playground
      codeText={ProvidedShippingPassExample}
      scope={{React, ProvidedShippingPass, store: shippingPassStore()}}
      noRender={true}/>
  </div>
);

export default App;
