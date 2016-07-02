import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

describe("State Chooser", () => {

  let StateChooser;
  let container;
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      StateChooser = require("src/components/state-chooser").default;
      container = document.createElement("div");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);
    });

    it("should render into the document", () => {
      component = ReactDOM.render(
        React.createElement(StateChooser, {chooserName: "state-chooser-test"}),
        container
      );
      expect(component.isMounted()).to.be.true;
    });

    it("should render a label if showLabel prop is true", () => {
      component = ReactDOM.render(
        React.createElement(StateChooser, {chooserName: "state-chooser-test"}),
        container
      );

      const list = TestUtils.scryRenderedDOMComponentsWithClass(
        component,
        "form-label"
      );

      expect(list[0].textContent).to.contain("State");
    });

    it("should render without a label if showLabel prop is false", () => {
      component = ReactDOM.render(
        React.createElement(StateChooser, {chooserName: "state-chooser-test", showLabel: false}),
        container
      );

      const list = TestUtils.scryRenderedDOMComponentsWithClass(
        component,
        "form-label"
      );

      expect(list[0].textContent).not.to.contain("State");
    });

    describe("getValue", () => {
      beforeEach(() => {
        component = ReactDOM.render(
          React.createElement(StateChooser, {chooserName: "state-chooser-test"}),
          container
        );
      });

      it("should return empty string when first initialized", () => {
        const value = component.getValue();
        expect(value).to.equal("");
      });

      it("should return none empty string when value has been set", () => {
        let value = component.getValue();
        expect(value).to.equal("");

        component.setValue("test");
        value = component.getValue();
        expect(value).to.equal("test");
      });
    });

    describe("with a defaultValue", () => {
      beforeEach(() => {
        component = ReactDOM.render(
          React.createElement(StateChooser, {
            chooserName: "state-chooser-test", defaultValue: "someValue"
          }),
          container
        );
      });
      it("should return the sent default value when first initialized", () => {
        const value = component.getValue();
        expect(value).to.equal("someValue");
      });
    });

    describe("renderStateOptions", () => {
      beforeEach(() => {
        component = ReactDOM.render(
          React.createElement(StateChooser, {chooserName: "state-chooser-test"}),
          container
        );
      });

      it("should return a list of Chooser Options", () => {
        const list = component.renderStateOptions();
        expect(list.length).to.equal(61);
      });
    });

    describe("onChange", () => {
      beforeEach(() => {
        component = ReactDOM.render(
          React.createElement(StateChooser, {chooserName: "state-chooser-test"}),
          container
        );
      });

      it("should change the value of chooser to equal passed in arg", () => {
        let value = component.getValue();
        expect(value).to.equal("");

        component.setValue("test");
        value = component.getValue();
        expect(value).to.equal("test");
      });
    });

    describe("validate", () => {
      it("should return true if isRequiredField is false", () => {
        component = ReactDOM.render(
          React.createElement(StateChooser, {chooserName: "state-chooser-test"}),
          container
        );

        const isValid = component.validate();
        expect(isValid).to.be.truthy;
      });

      it("should return false if isRequiredField is true and value is empty string", () => {
        component = ReactDOM.render(
          React.createElement(
            StateChooser,
            {chooserName: "state-chooser-test", isRequiredField: true}
          ),
          container
        );

        const isValid = component.validate();
        expect(isValid).to.be.falsy;
      });

      it("should return true if isRequiredField is true and value is not empty string", () => {
        component = ReactDOM.render(
          React.createElement(
            StateChooser,
            {chooserName: "state-chooser-test", isRequiredField: true}
          ),
          container
        );

        component.setValue("test");
        const isValid = component.validate();
        expect(isValid).to.be.truthy;
      });
    });
  });
});
