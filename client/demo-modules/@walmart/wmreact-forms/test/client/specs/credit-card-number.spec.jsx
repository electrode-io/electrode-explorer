import React from "react";
import ReactDOM from "react-dom";

import CreditCardNumberField from "src/components/credit-card-number";

describe("CreditCardNumberField", () => {
  let container;
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      container = document.createElement("div");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);
    });

    it("should render into the document", () => {
      component = ReactDOM.render(
        <CreditCardNumberField />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
