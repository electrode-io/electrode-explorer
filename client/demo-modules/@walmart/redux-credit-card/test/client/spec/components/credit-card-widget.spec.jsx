import React from "react";
import ReactDOM from "react-dom";

describe("Credit card widget", () => {
  let CreditCardWidget;
  let component;
  let container;

  beforeEach(() => {
    CreditCardWidget = require("src/components/credit-cards-widget").default;
    container = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it("has expected content with deep render", () => {
    component = ReactDOM.render(
      <CreditCardWidget />,
      container
    );

    expect(component).to.not.be.false;
  });
});
