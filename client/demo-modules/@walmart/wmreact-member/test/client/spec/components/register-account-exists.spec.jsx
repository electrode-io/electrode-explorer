import React from "react";
import {mount} from "enzyme";
import MembershipExists from "src/components/register-account-exists";

describe("MembershipExists", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const wrapper = mount(<MembershipExists
      headerTitle="Create your online account"
      error={{message: ""}}
      fields={{email: {}, password: {}}}
    />);

    expect(wrapper.length).to.equal(1);
  });
});
