import React from "react";
import ReactDOM from "react-dom";

import Phone from "src/components/phone";

describe("Phone", () => {
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
        <Phone />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
