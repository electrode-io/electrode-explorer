import React from "react";
import {mount} from "enzyme";
import AccountConfirmation from "src/components/account-confirmation";

describe("AccountConfirmation", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const wrapper = mount(<AccountConfirmation
      mainMessage="You're done!"
      detailedMessage="Your password has been changed"
      buttonMessage="Let's go shopping"
    />);

    expect(wrapper.length).to.equal(1);
  });
});
