import React from "react/addons";

describe("Supports", () => {
  let Supports;
  let container;
  let component;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    Supports = require("src/components/supports").default;
    container = document.createElement("div");
  });

  afterEach(() => {
    React.unmountComponentAtNode(container);
    sandbox.restore();
  });

  describe("Mounting", () => {
    it("should render into the document", () => {
      component = React.render(
        React.createElement(Supports),
        container
      );
      expect(component).to.not.be.undefined;
    });
  });

  describe("props", () => {
    it("should support svg check", () => {
      component = React.render(
        <Supports svg={true}/>,
        container
      );
      expect(component).to.not.be.undefined;
    });

    it("should support canvas check", () => {
      component = React.render(
        <Supports canvas={true}/>,
        container
      );
      expect(component).to.not.be.undefined;
    });
  });
});
