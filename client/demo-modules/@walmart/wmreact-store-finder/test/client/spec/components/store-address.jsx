import React from "react";

import ReactDOM from "react-dom";

describe("StoreAddress", () => {
  let StoreAddress;
  let container;
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      StoreAddress = require("src/components/store-address");
      container = document.createElement("div");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);
    });

    it("should render into the document", () => {
      component = ReactDOM.render(
        <StoreAddress />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
