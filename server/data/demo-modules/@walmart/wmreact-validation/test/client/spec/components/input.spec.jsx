import React from "react";
import TestUtils from "react-addons-test-utils";

import Input from "src/components/input";

describe("Input", () => {
  let container;
  let component;

  beforeEach(() => {
    container = document.createElement("div");
  });

  afterEach(() => {
    React.unmountComponentAtNode(container);
  });

  describe("Mounting", () => {
    it("should render into the document", () => {
      component = React.render(
        <Input />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });

  describe("#render", () => {
    it("should render a span if props.isLocked is present", () => {
      component = React.render(
        <Input isLocked />,
        container
      );

      const found = TestUtils.scryRenderedDOMComponentsWithTag(
        component,
        "span");

      expect(found.length === 1).to.be.true;
    });
  });

  describe("#isValid", () => {
    it("should return true if state.isValid is true", () => {
      component = React.render(
        <Input isLocked />,
        container
      );

      component.setState({
        isValid: true
      });

      expect(component.isValid()).to.be.true;

      component.setState({
        isValid: false
      });

      expect(component.isValid()).to.be.false;
    });
  });

  describe("#getValue", () => {
    it("should return the value", () => {
      component = React.render(
        <Input />,
        container
      );

      component.setState({
        val: "foo"
      });

      expect(component.getValue()).to.equal("foo");
    });
  });

  describe("#setValue", () => {
    it("should set the value to the value passed in if not shouldMask", () => {
      component = React.render(
        <Input />,
        container
      );

      component.setValue("foo");

      expect(component.state.val).to.equal("foo");
    });

    it("should set the value to the value passed in if props.mask is present but not shouldMask", () => {
      component = React.render(
        <Input mask />,
        container
      );

      component.setValue("foo");

      expect(component.state.val).to.equal("foo");
    });

    it("should set the value to mask value if props.mask is present and shouldMask", () => {
      component = React.render(
        <Input mask="creditcard" />,
        container
      );

      component.setValue("9999999999999999", true);

      expect(component.state.val).to.equal("9999 9999 9999 9999");
    });

    it("should not re-apply the default value when value cleared and mask is used", () => {
      component = React.render(
        <Input mask="{{9}}" defaultValue="1"/>,
         container
      );

      component.setValue("");
      component.onBlur({});

      expect(component.state.val).to.not.equal("1");
    });

    it("should display a validation error when clearing the field if required", () => {
      component = React.render(
        <Input mask="{{9}}" isRequiredField/>,
        container
      );

      component.setValue("");
      component.onBlur({});

      expect(component.state.isValid).to.be.false;
    });
  });
});
