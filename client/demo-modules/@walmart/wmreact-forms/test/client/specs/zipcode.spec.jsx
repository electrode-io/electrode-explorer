import React from "react";
import ReactDOM from "react-dom";

import Zipcode from "src/components/zipcode";

describe("Zipcode", () => {
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
        <Zipcode />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
