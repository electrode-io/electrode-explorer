import SignUp from "src/components/connected/sign-up";
import SignUpForm from "@walmart/wmreact-member-register/lib/components/sign-up";
import { mountAndGetInnerPropsFor } from "./helpers";

describe("Sign up component", () => {
  const mountAndGetInnerProps = mountAndGetInnerPropsFor(SignUp, SignUpForm);
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("when sign up is called", () => {
    let onSubmit;

    beforeEach(() => {
      onSubmit = sandbox.spy();
      const {onSignUp} = mountAndGetInnerProps({onSubmit});
      onSignUp();
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
