import React from "react";
import ReactDOM from "react-dom";

import PasswordExisting from "src/components/password-existing";

describe("PasswordExisting", () => {
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
        <PasswordExisting />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
