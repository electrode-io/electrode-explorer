import SignIn from "src/components/connected/sign-in";
import {mountAndGetInnerPropsFor} from "./helpers";

import {
  CaptchaSignIn as SignInForm
} from "src/components/connected/captcha-sign-in";

describe("ConnectedSignIn", () => {
  const mountAndGetInnerProps = mountAndGetInnerPropsFor(SignIn, SignInForm);
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("when sign in is called", () => {
    let onSubmit;

    beforeEach(() => {
      onSubmit = sandbox.spy();
      const {onSignIn} = mountAndGetInnerProps({onSubmit});
      onSignIn();
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
