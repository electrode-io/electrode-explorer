import React from "react";
import ReactDOM from "react-dom";

import Lastname from "src/components/lastname";

describe("Lastname", () => {
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
        <Lastname />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
