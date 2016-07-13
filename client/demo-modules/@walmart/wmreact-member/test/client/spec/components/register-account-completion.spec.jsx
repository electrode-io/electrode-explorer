import React from "react";
import {mount} from "enzyme";
import CompleteAccountRegistered from "src/components/register-account-completion";

describe("CompleteAccountRegistered", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const wrapper = mount(<CompleteAccountRegistered
      headerTitle="Create your online account"
      digitText="13 or 17 digit number on the back of your membership card"
      matchText="Your password must be between 6 and 12 characters"
      emailText={{}}
      error={{}}
      fields={{password: {}}}
    />);

    expect(wrapper.length).to.equal(1);
  });
});
