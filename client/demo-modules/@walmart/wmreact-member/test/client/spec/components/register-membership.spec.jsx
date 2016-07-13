import React from "react";
import {mount} from "enzyme";
import RegisterMembership from "src/components/register-membership";

describe("RegisterMembership", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const wrapper = mount(<RegisterMembership
      headerTitle={"Create your online account"}
      promoText={"Get a $10 gift card if you sign in or register today"}
      digitText={"13 or 17 digit number on the back of your membership card"}
      matchText={"Must match information we have on file"}
      alreadyMemberText={"Already have an account"}
      error={{message: "Something doesn't match.  Can you try again?"}}
    />);

    expect(wrapper.length).to.equal(1);
  });
});
