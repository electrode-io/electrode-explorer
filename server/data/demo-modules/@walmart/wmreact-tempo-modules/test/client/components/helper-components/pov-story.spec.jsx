import React from "react";
import { shallow } from "enzyme";

import POVStory from "src/components/helper-components/pov-story";
import ClickThroughImage from "src/components/helper-components/click-through-image-map";
import props from "../../test-data/pov-story-data.js";

describe("<POVStory />", () => {
  let component;
  let wrapper;
  let testProp;
  let clickThrough;

  beforeEach(() => {
    testProp = props;
    component = shallow(<POVStory {...testProp}/>);
    clickThrough = component.find(ClickThroughImage);
    wrapper = component.find(".PovStory");
  });

  it("should render", () => {
    expect(wrapper).to.shallowly.haveClass("PovStory");
    expect(component).to.be.ok;
  });

  it("should return desktop size if isMobile=false mobileImage={key: value}", () => {
    const imageSize = ({
      height: "300",
      width: "1364"
    });
    expect(clickThrough).to.shallowly.have.props("imageSize").deep.equal(imageSize);
  });

  it("should return mobile size if isMobile isMobile=true mobileImage={key: value}", () => {
    component = shallow(<POVStory {...testProp} isMobile={true} />);
    clickThrough = component.find(ClickThroughImage);
    const imageSize = ({
      height: "178",
      width: "809"
    });
    expect(clickThrough).to.shallowly.have.props("imageSize").deep.equal(imageSize);
  });

  it("should return desktop size if isMobile=true mobileImage=null", () => {
    testProp.story.mobileImage = null;
    component = shallow(<POVStory {...testProp}/>);
    clickThrough = component.find(ClickThroughImage);
    const imageSize = ({
      height: "300",
      width: "1364"
    });
    expect(clickThrough).to.shallowly.have.props("imageSize").deep.equal(imageSize);
  });

  it("should return desktop size if isMobile=true mobileImage=null", () => {
    testProp.story.mobileImage = null;
    component = shallow(<POVStory {...testProp} isMobile={true} />);
    clickThrough = component.find(ClickThroughImage);
    const imageSize = ({
      height: "300",
      width: "1364"
    });
    expect(clickThrough).to.shallowly.have.props("imageSize").deep.equal(imageSize);
  });
});
