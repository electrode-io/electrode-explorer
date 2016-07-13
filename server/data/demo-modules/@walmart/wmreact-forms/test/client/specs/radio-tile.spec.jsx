import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

import RadioTile from "src/components/radio-tile";

describe("RadioTile", () => {
  let container;
  let component;
  let sandbox;

  describe("Mounting", () => {
    beforeEach(() => {
      sandbox = sinon.sandbox.create();

      container = document.createElement("div");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);

      sandbox.restore();
    });

    it("should render into the document", () => {
      component = ReactDOM.render(
        React.createElement(RadioTile, {groupName: "foo"}, [
          React.createElement(RadioTile.tile, {key: 0}),
          React.createElement(RadioTile.tile, {key: 1}),
          React.createElement(RadioTile.tile, {key: 2})
        ]),
        container
      );
      expect(component.isMounted()).to.be.true;
    });

    it("should render tile into the document", () => {
      component = ReactDOM.render(
        <RadioTile.tile aside={true} footer={true} checked={true} />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });

    it("should set a radio-tile-valign class if props.alignment exists", () => {
      component = ReactDOM.render(
        <RadioTile.tile alignment="center" />,
        container
      );

      const foundComponent = TestUtils.findRenderedDOMComponentWithClass(component,
                                "radio-tile-valign-center");

      expect(foundComponent).to.exist;
    });

    it("should return no-op onClick if no props.onClick is provided", () => {
      component = ReactDOM.render(
        <RadioTile.tile />,
        container
      );

      expect(component.props.onClick()).to.equal(undefined);
    });

    it("should return no-op onChange if no props.onChange is provided", () => {
      component = ReactDOM.render(
        <RadioTile.tile />,
        container
      );

      expect(component.props.onChange()).to.equal(undefined);
    });
  });
});
