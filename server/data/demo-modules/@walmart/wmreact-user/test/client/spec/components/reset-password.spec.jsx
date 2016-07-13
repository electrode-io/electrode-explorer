import "intl";
import React from "react";
import {mount} from "enzyme";
import ResetPassword from "src/components/reset-password";

describe("ResetPassword", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const wrapper = mount(<ResetPassword
      fields={{email: {}, password: {}}}
      initializeForm={() => {}}/>);

    expect(wrapper.length).to.equal(1);
  });

  it("should request a new password when action button clicked", () => {
    const spy = sandbox.spy();
    const wrapper = mount(<ResetPassword
      fields={{email: {}, password: {}}}
      error={{code: "user_auth_fail"}}
      initializeForm={() => {}}
      onForgotPasswordRequested={spy}
    />);

    wrapper.find(".js-reset-password-link").simulate("click");
    expect(spy).to.have.been.called;
  });

  it("should request a new token when action button clicked", () => {
    const spy = sandbox.spy();
    const wrapper = mount(<ResetPassword
      fields={{email: {}, password: {}}}
      initializeForm={() => {}}
      onNewCodeRequested={spy}
    />);

    wrapper.find(".js-request-code-link").simulate("click");
    expect(spy).to.have.been.called;
  });
});
