import React from "react";
import ReactDOM from "react-dom";

describe("AuthorizationContainer", () => {
  let AuthorizationContainer;
  let container;
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      AuthorizationContainer = require("src/components/authorization-container");
      container = document.createElement("div");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);
    });

    it("should render into the document", () => {
      component = ReactDOM.render(
        <AuthorizationContainer>
          <div>Hello</div>
        </AuthorizationContainer>,
        container
      );
      expect(component).to.not.be.false;
    });
  });
});
