import React from "react";
import GiftCardsWidgetExample from "raw!./examples/gift-cards-widget.example";
import GiftCardsWidget from "../src/components/gift-cards-widget";
import Playground from "component-playground";
import giftCardStore from "./mock/gift-card-store";

const App = () => (
  <div className="component-documentation">
    <h2>Widget</h2>
    <Playground
      codeText={GiftCardsWidgetExample}
      scope={{React, GiftCardsWidget, store: giftCardStore()}}
      noRender={true}/>
  </div>
);
export default App;
