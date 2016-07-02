import React from "react";
import ReactDOM from "react-dom";

import DOBField from "src/components/dob";

describe("DOBField", () => {
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
        <DOBField />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
