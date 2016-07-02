import React from "react";
import ReactDOM from "react-dom";

import EmailField from "src/components/email";

describe("EmailField", () => {
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
        <EmailField />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
