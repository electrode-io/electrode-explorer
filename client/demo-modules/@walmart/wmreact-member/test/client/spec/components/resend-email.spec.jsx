import React from "react";
import {mount} from "enzyme";
import ResendEmail from "src/components/resend-email";

describe("ResendEmail", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const wrapper = mount(<ResendEmail
      titleText="You're almost done..."
      bodyText="Check your email for a link to reset your password"
      resendLinkText="Resend email"
    />);

    expect(wrapper.length).to.equal(1);
  });
});
