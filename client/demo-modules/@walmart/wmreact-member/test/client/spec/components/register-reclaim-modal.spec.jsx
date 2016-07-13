import React from "react";
import {mount} from "enzyme";
import RegisterReclaimModal from "src/components/register-reclaim-modal";

describe("RegisterReclaimModal", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const wrapper = mount(<RegisterReclaimModal
      userMessage="You've already created an online account."
      btnMessage="Let's go shopping"
    />);

    expect(wrapper.length).to.equal(1);
  });
});
