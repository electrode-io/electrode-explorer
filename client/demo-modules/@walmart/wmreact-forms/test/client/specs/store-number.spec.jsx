import React from "react";
import ReactDOM from "react-dom";

import StoreNumber from "src/components/store-number";

describe("StoreNumber", () => {
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
        <StoreNumber />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
