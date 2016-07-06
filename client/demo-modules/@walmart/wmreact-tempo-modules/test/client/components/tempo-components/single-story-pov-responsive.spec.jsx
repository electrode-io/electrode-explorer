import React from "react";
import { shallow } from "enzyme";

import POVStory from "src/components/helper-components/pov-story";
import SingleStoryPOVResponsive from "src/components/tempo-components/single-story-pov-responsive";
import props from "../../test-data/single-story-data.js";

describe("<SingleStoryPOVResponsive />", () => {
  let wrapper;
  let component;

  beforeEach(() => {
    component = shallow(<SingleStoryPOVResponsive moduleData={props} />);
    wrapper = component.find(".SingleStoryPOVResponsive");
  });

  it("should render", () => {
    expect(wrapper).to.shallowly.haveClass("SingleStoryPOVResponsive");
    expect(component).to.be.ok;
  });

  it("should pass proper props", () => {
    component = shallow(<SingleStoryPOVResponsive moduleData={props} />);
    wrapper = component.find(".SingleStoryPOVResponsive");

    const storyWrapper = wrapper.find(POVStory);
    const story = { story: props.configs };
    expect(storyWrapper.props()).to.eql({
      ...story,
      isMobile: false,
      lazy: false,
      povIndex: "0",
      dataAutomationId: "-SingleStoryPOVResponsive"
    });
  });
});
