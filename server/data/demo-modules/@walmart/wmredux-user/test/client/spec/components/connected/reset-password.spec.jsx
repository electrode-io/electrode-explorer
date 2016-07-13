import "intl";
import sinon from "sinon";
import { CaptchaResetPassword as ResetPasswordForm }
  from "src/components/connected/captcha-sign-in";
import {mountAndGetInnerPropsFor} from "./helpers";

import ResetPassword from "src/components/connected/reset-password";

describe("ConnectedResetPassword", () => {
  const mountAndGetInnerProps = mountAndGetInnerPropsFor(ResetPassword, ResetPasswordForm);
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("when reset password is called", () => {
    let onSubmit;
    beforeEach(() => {
      onSubmit = sandbox.spy();
      const {onResetPassword} = mountAndGetInnerProps({onSubmit});
      onResetPassword();
    });

    it("should call onSubmit", () => {
      expect(onSubmit).to.have.been.called;
    });
  });

  describe("when a new code is requested and the server succeeds", () => {
    let dispatch;

    beforeEach(() => {
      dispatch = sandbox.stub();
      dispatch.returns(Promise.resolve({}));

      const {onNewCodeRequested} = mountAndGetInnerProps({}, dispatch);
      return onNewCodeRequested();
    });

    it("should dispatch stop submit action", () => {
      expect(dispatch).to.have.been.calledWithMatch({type: "redux-form/STOP_SUBMIT"});
    });

    it("should clear passcode", () => {
      expect(dispatch).to.have.been.calledWithMatch({
        type: "redux-form/CHANGE",
        field: "passcode",
        value: null
      });
    });

    it("should clear password", () => {
      expect(dispatch).to.have.been.calledWithMatch({
        type: "redux-form/CHANGE",
        field: "password",
        value: null
      });
    });
  });

  describe("when a new code is requested and the server fails", () => {
    let dispatch;

    beforeEach(() => {
      dispatch = sandbox.stub();
      dispatch.returns(Promise.reject());

      const {onNewCodeRequested} = mountAndGetInnerProps({}, dispatch);
      return onNewCodeRequested().catch(() => null);
    });

    it("should dispatch stop submit action", () => {
      expect(dispatch).to.have.been.calledWithMatch({type: "redux-form/STOP_SUBMIT"});
    });
  });

  describe("when we call handleResponse for some reason", () => {
    let onSuccess;

    beforeEach(() => {
      onSuccess = sandbox.spy();

      const {handleResponse} = mountAndGetInnerProps({onSuccess});
      return handleResponse(Promise.resolve({}));
    });

    it("should call onSuccess", () => {
      expect(onSuccess).to.have.been.called;
    });
  });
});
