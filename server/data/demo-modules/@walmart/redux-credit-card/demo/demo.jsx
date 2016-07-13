import React from "react";
import CreditCardsWidgetExample from "raw!./examples/credit-cards-widget.example";
import CreditCardsWidget from "../src/components/credit-cards-widget";
import Playground from "component-playground";
import creditCardStore from "./mock/credit-card-store";
import mocks from "./mock/credit-cards-mock";
import errorMock from "./mock/credit-cards-error-mock";
import "./demo.styl";

const App = () => (
  <div className="component-documentation">
    <h2>Widget</h2>
    <Playground
      codeText={CreditCardsWidgetExample}
      scope={{React, CreditCardsWidget, store: creditCardStore(mocks)}}
      noRender={true}/>

    <h2>Widget with delete error</h2>
    <Playground
      codeText={CreditCardsWidgetExample}
      scope={{React, CreditCardsWidget, store: creditCardStore(errorMock)}}
      noRender={true}/>
  </div>
);

export default App;
