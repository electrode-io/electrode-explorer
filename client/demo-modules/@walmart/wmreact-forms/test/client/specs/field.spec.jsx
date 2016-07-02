import React from "react";
import ReactDOM from "react-dom";

import Field from "src/components/field";

describe("Field", () => {
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
        <Field />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
