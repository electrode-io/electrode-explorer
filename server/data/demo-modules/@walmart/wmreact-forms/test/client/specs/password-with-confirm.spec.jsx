/* eslint max-len:0 */
import React from "react";
import ReactDOM from "react-dom";

import PasswordWithConfirmField from "src/components/password-with-confirm";

describe("PasswordWithConfirmField", () => {
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
        React.createElement(PasswordWithConfirmField),
        container
      );
      expect(component.isMounted()).to.be.true;
    });

    it("should get the value of the password1 field", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      component.setValue("foobar");
      expect(component.getValue()).to.equal("foobar");
    });

    it("should set the value of both password1 and password2 on `setValue()`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyPassword1SetValue = sandbox.spy(component.refs.password1, "setValue");
      const spyPassword2SetValue = sandbox.spy(component.refs.password2, "setValue");

      component.setValue("foobar");
      expect(spyPassword1SetValue.calledWithExactly("foobar")).to.be.true;
      expect(spyPassword2SetValue.calledWithExactly("foobar")).to.be.true;

      expect(component.refs.password1.getValue()).to.equal("foobar");
      expect(component.refs.password2.getValue()).to.equal("foobar");

      component.refs.password1.setValue.restore();
      component.refs.password2.setValue.restore();
    });

    it("should clear the value of both password1 and password2 on `clearValue()`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyPassword1ClearValue = sandbox.spy(component.refs.password1, "clearValue");
      const spyPassword2ClearValue = sandbox.spy(component.refs.password2, "clearValue");

      component.setValue("foobar");
      component.clearValue();

      expect(spyPassword1ClearValue).to.have.been.called;
      expect(spyPassword2ClearValue).to.have.been.called;

      expect(component.refs.password1.getValue()).to.equal("");
      expect(component.refs.password2.getValue()).to.equal("");

      component.refs.password1.clearValue.restore();
      component.refs.password2.clearValue.restore();
    });

    it("should return if password is valid on `isValid()`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyPassword1IsValid = sandbox.spy(component.refs.password1, "isValid");
      const spyPassword2IsValid = sandbox.spy(component.refs.password2, "isValid");
      const spyPasswordsMatch = sandbox.spy(component, "passwordsMatch");

      component.setValue("foobar");
      const isPasswordValid = component.isValid();

      expect(spyPassword1IsValid).to.have.been.called;
      expect(spyPassword2IsValid).to.have.been.called;
      expect(spyPasswordsMatch).to.have.been.called;

      expect(isPasswordValid).to.be.true;

      component.refs.password1.isValid.restore();
      component.refs.password2.isValid.restore();
      component.passwordsMatch.restore();
    });

    it("should test if password1 and password2 match on `passwordsMatch()`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      component.refs.password1.setValue("foobar");
      component.refs.password2.setValue("barfoo");

      expect(component.passwordsMatch()).to.be.false;

      component.refs.password1.setValue("foobar");
      component.refs.password2.setValue("foobar");

      expect(component.passwordsMatch()).to.be.true;
    });

    it("should be valid if passwords match on `validate(isFormValidate)`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyPassword1Validate = sandbox.spy(component.refs.password1, "validate");
      const spyPassword2Validate = sandbox.spy(component.refs.password2, "validate");

      component.refs.password1.setValue("foobar");
      component.refs.password2.setValue("foobar");

      const isValid = component.validate("foobar");

      expect(spyPassword1Validate.calledWithExactly("foobar")).to.be.true;
      expect(spyPassword2Validate.calledWithExactly("foobar")).to.be.true;
      expect(isValid).to.be.true;

      component.refs.password1.validate.restore();
      component.refs.password2.validate.restore();
    });

    it("should not be valid if passwords don't match on `validate(isFormValidate)`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyPassword1Validate = sandbox.spy(component.refs.password1, "validate");
      const spyPassword2Validate = sandbox.spy(component.refs.password2, "validate");
      const spySetInvalidBecauseOfPasswordMismatch = sandbox.spy(component,
                    "_setInvalidBecauseOfPasswordMismatch");

      component.refs.password1.setValue("foobar");
      component.refs.password2.setValue("boofar");

      const isValid = component.validate("foobar");

      expect(spyPassword1Validate.calledWithExactly("foobar")).to.be.true;
      expect(spyPassword2Validate.calledWithExactly("foobar")).to.be.true;
      expect(spySetInvalidBecauseOfPasswordMismatch).to.have.been.called;
      expect(isValid).to.be.false;

      component.refs.password1.validate.restore();
      component.refs.password2.validate.restore();
      component._setInvalidBecauseOfPasswordMismatch.restore();
    });

    it("should invalidate with a message on `invalidate(message)`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyPassword1Invalidate = sandbox.spy(component.refs.password1, "invalidate");
      const spyPassword2Invalidate = sandbox.spy(component.refs.password2, "invalidate");

      component.refs.password1.setValue("foobar");
      component.refs.password2.setValue("barfoo");

      component.invalidate("These passwords don't match!");

      expect(spyPassword1Invalidate).to.have.been.called;
      expect(spyPassword2Invalidate.calledWithExactly("These passwords don't match!"))
                        .to.be.true;

      component.refs.password1.invalidate.restore();
      component.refs.password2.invalidate.restore();
    });

    it("should reset the password1 and password2 on `resetInput()`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyPassword1ResetInput = sandbox.spy(component.refs.password1, "resetInput");
      const spyPassword2ResetInput = sandbox.spy(component.refs.password2, "resetInput");

      component.setValue("foobar");

      expect(component.refs.password1.getValue()).to.equal("foobar");
      expect(component.refs.password2.getValue()).to.equal("foobar");

      component.resetInput();

      expect(spyPassword1ResetInput).to.have.been.called;
      expect(spyPassword2ResetInput).to.have.been.called;

      expect(component.refs.password1.getValue()).to.equal("");
      expect(component.refs.password2.getValue()).to.equal("");

      component.refs.password1.resetInput.restore();
      component.refs.password2.resetInput.restore();
    });

    it("should check current password matches other on `_checkIfCurrentPasswordMatchesOther()`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyPasswordsMatch = sandbox.spy(component, "passwordsMatch");
      const spySetInvalidBecauseOfPasswordMismatch = sandbox.spy(component,
                  "_setInvalidBecauseOfPasswordMismatch");

      component.refs.password1.setValue("foobar");
      component.refs.password2.setValue("barfoo");

      component._checkIfCurrentPasswordMatchesOther(component.refs.password1,
                  component.refs.password2);

      expect(spyPasswordsMatch).to.have.been.called;
      expect(spySetInvalidBecauseOfPasswordMismatch).to.have.been.called;

      component.passwordsMatch.restore();
      component._setInvalidBecauseOfPasswordMismatch.restore();
    });

    it("should clear validation if password matches other on `_checkIfCurrentPasswordMatchesOther()`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyPasswordsMatch = sandbox.spy(component, "passwordsMatch");
      const spyClearValidation = sandbox.spy(component, "clearValidation");
      const spySetInvalidBecauseOfPasswordMismatch = sandbox.spy(component,
                  "_setInvalidBecauseOfPasswordMismatch");


      component.refs.password1.setValue("foobar");
      component.refs.password2.setValue("foobar");

      component._checkIfCurrentPasswordMatchesOther(component.refs.password1,
                  component.refs.password2);

      expect(spyPasswordsMatch).to.have.been.called;
      expect(spyClearValidation).to.have.been.called;
      expect(spySetInvalidBecauseOfPasswordMismatch).to.not.have.been.called;

      component.passwordsMatch.restore();
      component._setInvalidBecauseOfPasswordMismatch.restore();
      component.clearValidation.restore();
    });

    it("should not trigger passwordMatches or clearValidation if no other value", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyPasswordsMatch = sandbox.spy(component, "passwordsMatch");
      const spyClearValidation = sandbox.spy(component, "clearValidation");

      component.refs.password1.setValue("foobar");
      component.refs.password2.setValue("");

      component._checkIfCurrentPasswordMatchesOther(component.refs.password1,
                  component.refs.password2);

      expect(spyPasswordsMatch).to.not.have.been.called;
      expect(spyClearValidation).to.not.have.been.called;

      component.passwordsMatch.restore();
      component.clearValidation.restore();
    });

    it("should not trigger clearValidation if `current.validate()` returns false", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyPasswordsMatch = sandbox.spy(component, "passwordsMatch");
      const spyClearValidation = sandbox.spy(component, "clearValidation");

      component.refs.password1.setValue("foobar");
      component.refs.password2.setValue("barfoo");

      component._checkIfCurrentPasswordMatchesOther(component.refs.password1,
                  component.refs.password2);

      expect(spyPasswordsMatch).to.have.been.called;
      expect(spyClearValidation).to.not.have.been.called;

      component.passwordsMatch.restore();
      component.clearValidation.restore();
    });

    it("should check password match on `_onChange1()`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyCheckIfCurrentPasswordMatchesOther = sandbox.spy(component,
                "_checkIfCurrentPasswordMatchesOther");

      component.setValue("foobar");
      component._onChange1();

      expect(spyCheckIfCurrentPasswordMatchesOther.calledWithExactly(
        component.refs.password1, component.refs.password2)).to.be.true;

      component._checkIfCurrentPasswordMatchesOther.restore();
    });


    it("should check password match on `_onChange2()`", () => {
      component = ReactDOM.render(
        <PasswordWithConfirmField />,
        container
      );

      const spyCheckIfCurrentPasswordMatchesOther = sandbox.spy(component,
                "_checkIfCurrentPasswordMatchesOther");

      component.setValue("foobar");
      component._onChange2();

      expect(spyCheckIfCurrentPasswordMatchesOther.calledWithExactly(
        component.refs.password2, component.refs.password1)).to.be.true;

      component._checkIfCurrentPasswordMatchesOther.restore();
    });
  });
});
