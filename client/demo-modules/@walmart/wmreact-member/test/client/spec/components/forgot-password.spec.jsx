import React from "react";
import {mount} from "enzyme";
import ForgotPassword from "src/components/forgot-password";

describe("ForgotPassword", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const wrapper = mount(<ForgotPassword
      fields={{}}
      onSignInRequested={() => {}}
      onResetPasswordRequested={() => {}}
      initializeForm={() => {}}/>);

    expect(wrapper.length).to.equal(1);
  });

  it("should submit when captcha gets available", () => {
    const spy = sandbox.spy();
    const wrapper = mount(<ForgotPassword
      fields={{}}
      captcha={{inProgress: false}}
      initializeForm={() => {}}
      handleResponse={() => {}}
      handleSubmit={() => spy}
    />);

    wrapper.setProps({captchaAvailable: true});
    wrapper.setProps({otherProp: "bar"});

    expect(spy).to.have.been.called.once;
  });

  describe("sign-in link", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<ForgotPassword
        fields={{}}
        captcha={{}}
        initializeForm={() => {}}
        handleResponse={() => {}}
        handleSubmit={() => {}}
        onSignInRequested={() => {}}
      />);
    });
    it("should not display sign-in link on account compromise", () => {
      wrapper.setProps({compromisedErr: {code: "user_compromised"}});
      expect(wrapper.find(".remember-password").length).to.equal(0);
    });
  });
});
