import React from "react";
import ReactDOM from "react-dom";

import Firstname from "src/components/firstname";

describe("Firstname", () => {
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
        <Firstname />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
