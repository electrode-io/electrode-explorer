import React from "react";
import {mount} from "enzyme";// render mount
import ReclaimEmail from "src/components/reclaim-email";
import ReactDOM from "react-dom";

describe("ReclaimEmail", () => {
  let sandbox;
  let container;
  let wrapper;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    container = document.createElement("div");
    wrapper = mount(<ReclaimEmail
      userQuestion="Use this email?"
      userMainMessage= "samantha.smith@email.com"
      userDetailedMessage="If you continue, this will be your new membershipnumber"
      btnMessage1="Yes, continue"
      btnMessage2="No, use a different email"
    />);
  });

  afterEach(() => {
    sandbox.restore();
    ReactDOM.unmountComponentAtNode(container);
  });

  // renders Reclaim Email compoennt
  it("should render", () => {
    expect(wrapper.length).to.equal(1);
  });
  // renders the specified text
  it("renders the text", () => {
    expect(wrapper.text()).to.contain("Use this email?");
    expect(wrapper.text()).to.contain("samantha.smith@email.com");
    expect(wrapper.text()).to.contain("If you continue, this will be your new membershipnumber");
  });
  //checking the no.of buttons
  it("should include two buttons", () => {
    const domNode = wrapper.component.getDOMNode();
    expect(domNode.querySelectorAll("label")).to.have.length(3);
  });
  //total no.of fields in the component
  it("checking the total no.of fields", () => {
    const domNode = wrapper.component.getDOMNode();
    expect(domNode.children.length).to.equal(5);
  });
});
