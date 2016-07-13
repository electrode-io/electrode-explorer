import React from "react";
import {mount} from "enzyme";
import ExpiredLink from "src/components/expired-link";

describe("ExpiredLink", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const wrapper = mount(<ExpiredLink
      notification="Your request has expired."
      userMessage="Still need to change your password?"
      btnMessage1="Change password"
      btnMessage2="Continue shopping"
    />);

    expect(wrapper.length).to.equal(1);
  });
});
