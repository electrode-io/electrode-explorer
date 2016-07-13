import React from "react";
import {mount} from "enzyme";
import SignUp from "src/components/sign-up";

describe("SignUp", () => {
  it("should render", () => {
    const wrapper = mount(<SignUp
      fields={{password: {}}}
      initializeForm={() => {}}/>);

    expect(wrapper.length).to.equal(1);
  });
});
