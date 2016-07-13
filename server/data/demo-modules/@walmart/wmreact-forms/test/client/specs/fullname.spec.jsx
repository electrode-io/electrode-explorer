import React from "react";
import ReactDOM from "react-dom";

import CreditCardFullNameField from "src/components/fullname";

describe("CreditCardFullNameField", () => {
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
        React.createElement(CreditCardFullNameField),
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
