import ForgotPassword from "src/components/connected/forgot-password";
import {mountAndGetInnerPropsFor} from "./helpers";

import {
  CaptchaForgotPassword as ForgotPasswordForm
} from "src/components/connected/captcha-sign-in";

describe("ConnectedForgotPassword", () => {
  const mountAndGetInnerProps = mountAndGetInnerPropsFor(ForgotPassword, ForgotPasswordForm);
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    sandbox.restore();
  });

  describe("when forgot password is called", () => {
    let onSubmit;

    beforeEach(() => {
      onSubmit = sandbox.spy();
      const {onForgotPassword} = mountAndGetInnerProps({onSubmit});
      onForgotPassword();
    });

    it("should call onSubmit", () => {
      expect(onSubmit).to.have.been.called;
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
