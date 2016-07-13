import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

import Alert from "src/components/alert";

describe("Alert", () => {
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
        <Alert />,
        container
      );
      expect(component.isMounted()).to.be.true;

      expect(TestUtils.findRenderedDOMComponentWithClass.bind(
        TestUtils.findRenderedDOMComponentWithClass, component, "alert-block"))
        .to.throw("Did not find exactly one match (found: 0) for class:alert-block");

      expect(TestUtils.findRenderedDOMComponentWithClass.bind(
        TestUtils.findRenderedDOMComponentWithClass, component, "alert-above-form"))
        .to.throw("Did not find exactly one match (found: 0) for class:alert-above-form");
    });

    it("should add 'alert-block' class if props.isBlock is present", () => {
      component = ReactDOM.render(
        <Alert isBlock={true} />,
        container
      );

      const foundComponent = TestUtils.findRenderedDOMComponentWithClass(component,
        "alert-block");
      expect(foundComponent).to.exist;
    });

    it("should add 'alert-block' class if props.isBlock is present", () => {
      component = ReactDOM.render(
        <Alert isAboveForm={true} />,
        container
      );

      const foundComponent = TestUtils.findRenderedDOMComponentWithClass(component,
        "alert-above-form");
      expect(foundComponent).to.exist;
    });
  });
});
