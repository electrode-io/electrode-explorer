import React from "react";

import ReactDOM from "react-dom";

describe("StoreFinder", () => {
  let StoreFinder;
  let container;
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      StoreFinder = require("src/components/store-finder");
      container = document.createElement("div");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);
    });

    it("should render into the document", () => {
      component = ReactDOM.render(
        <StoreFinder />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
