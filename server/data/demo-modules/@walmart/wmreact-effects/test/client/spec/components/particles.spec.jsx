import React from "react";
import ReactDOM from "react-dom";


describe("Particles", () => {

  let Particles;
  let container;
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      Particles = require("src/components/particles").default;
      container = document.createElement("div");
    });

    afterEach(() => {
      React.unmountComponentAtNode(container);
    });

    it("should render into the document", () => {
      component = ReactDOM.render(
        <Particles />,
        container
      );
      expect(component).to.not.be.null;
    });
  });
});
