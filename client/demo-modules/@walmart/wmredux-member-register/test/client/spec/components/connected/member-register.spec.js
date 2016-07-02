import MemberRegister from "src/components/connected/member-register";
import { RegisterMembership } from "@walmart/wmreact-member-register";
import { mountAndGetInnerPropsFor } from "./helpers";

describe("Register membership component", () => {
  const mountAndGetInnerProps = mountAndGetInnerPropsFor(MemberRegister,
    RegisterMembership);
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
      const {onMemberRegister} = mountAndGetInnerProps({onSubmit});
      onMemberRegister();
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
