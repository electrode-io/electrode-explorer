import React from "react";
import {mount} from "enzyme";
import MultipleEmails from "src/components/multiple-emails";

describe("MultipleEmails", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const wrapper = mount(<MultipleEmails
      greeting="Hi Kelly,"
      subject="We show that there are multiple email addresses associated with your account."
      emailAddress={["kelly.lastname@email.com", "kelly_bry@email.com"]}
      buttonMessage="Continue"
      emailFooter="Questions? Call us at 1.888.746.7726"
    />);

    expect(wrapper.length).to.equal(1);
  });
});
