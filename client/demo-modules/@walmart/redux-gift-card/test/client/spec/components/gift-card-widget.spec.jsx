import React from "react";
import ReactDOM from "react-dom";
import "core-js/fn/promise";

describe("Gift card widget", () => {
  let GiftCardWidget;
  let component;
  let container;

  beforeEach(() => {
    GiftCardWidget = require("src/components/gift-cards-widget").default;
    container = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it("has expected content with deep render", () => {
    component = ReactDOM.render(
      <GiftCardWidget />,
      container
    );

    expect(component).to.not.be.false;
  });
});
