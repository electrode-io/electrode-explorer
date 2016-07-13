import React from "react";
import {mount} from "enzyme";
import SignIn from "src/components/sign-in";

describe("SignIn", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const wrapper = mount(<SignIn
      fields={{}}
      captcha={{inProgress: false}}
      initializeForm={() => {}}/>);

    expect(wrapper.length).to.equal(1);
  });


  it("should submit when captcha gets available", () => {
    const spy = sandbox.spy();
    const wrapper = mount(<SignIn
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

  it("should show message with email when we are doing recaptcha flow", () => {
    const wrapper = mount(<SignIn
      fields={{email: {}}}
      captcha={{isBot: 1}}
      initializeForm={() => {}}
      handleResponse={() => {}}
    />);

    expect(wrapper.find(".bot-email-message").length).to.equal(1);
  });
  it("should not show message with email when we are not doing recaptcha flow", () => {
    const wrapper = mount(<SignIn
      fields={{}}
      captcha={{}}
      initializeForm={() => {}}
      handleResponse={() => {}}
    />);

    expect(wrapper.find(".bot-email-message").length).to.equal(0);
  });
});
