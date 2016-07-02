import React from "react";
import ReactDOM from "react-dom";

import Option from "src/components/option";

describe("Option", () => {
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
        <Option defaultChecked={true} checkboxName="myCheckbox">
          Click Me
        </Option>,
        container
      );
      expect(component.isMounted()).to.be.true;
      component.setValue(true);
      component.getValue();
      component.clearValue();
      component.invalidate("foo");
      component.clearValidation();
      component.resetInput();
    });

    it("should set child input to aria-disabled if props.disabled exists", () => {
      component = ReactDOM.render(
        <Option disabled={true} checkboxName="myCheckbox">
          Click Me
        </Option>,
        container
      );

      const inputChild = component.getDOMNode().children[0];

      expect(inputChild.getAttribute("aria-disabled")).to.equal("true");
    });

    it("should not set child input to aria-disabled if props.disabled exists", () => {
      component = ReactDOM.render(
        <Option checkboxName="myCheckbox">
          Click Me
        </Option>,
        container
      );

      const inputChild = component.getDOMNode().children[0];

      expect(inputChild.getAttribute("aria-disabled")).to.be.null;
    });

    it("should set state on `_handleChange()`", () => {
      component = ReactDOM.render(
        <Option checkboxName="myCheckbox">
          Click Me
        </Option>,
        container
      );

      const spySetState = sandbox.spy(component, "setState");

      const fakeEvent = { target: { checked: false } };
      component._handleChange(fakeEvent);

      expect(spySetState).to.have.been.called;
      expect(component.state.checked).to.be.false;

      component.setState.restore();
    });
  });
});
