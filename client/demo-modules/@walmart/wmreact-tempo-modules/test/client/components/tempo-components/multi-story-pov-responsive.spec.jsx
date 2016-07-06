import React from "react";
import { shallow } from "enzyme";

import Carousel from "@walmart/wmreact-carousel";
import POVStory from "src/components/helper-components/pov-story";
import MultiStoryPOVResponsive from "src/components/tempo-components/multi-story-pov-responsive";
import props from "../../test-data/multi-story-pov-data.js";

describe("<MultiStoryPOVResponsive />", () => {
  let wrapper;
  let component;
  let instance;
  let sandbox;

  beforeEach(() => {
    component = shallow(<MultiStoryPOVResponsive moduleData={props} />);
    wrapper = component.find(".MultiStoryPOVResponsive");
    instance = component.instance();
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    expect(wrapper).to.shallowly.have.length(1);
    expect(component).to.be.ok;
  });

  it("should have only 1 pov story", () => {
    const povStory = wrapper.find(POVStory);
    expect(povStory).to.shallowly.have.length(1);
  });

  it("should have correct initialSlideWidth value for desktop", () => {
    const DESKTOP_IMAGE_WIDTH = 1364;
    const carousel = component.find(Carousel);
    expect(carousel).to.shallowly.have.props("initialSlideWidth")
      .to.eql(DESKTOP_IMAGE_WIDTH);
  });

  it("should have correct initialSlideWidth value for mobile", () => {
    const MOBILE_IMAGE_WIDTH = 878;
    component = shallow(<MultiStoryPOVResponsive moduleData={props} isMobile={true}/>);
    const carousel = component.find(Carousel);
    expect(carousel).to.shallowly.have.props("initialSlideWidth")
      .to.eql(MOBILE_IMAGE_WIDTH);
  });

  it("componentDidMount should call _fireModuleView", () => {
    const spy = sandbox.stub(instance, "_fireModuleView");
    instance.componentDidMount();
    expect(spy).to.have.been.called;
  });

  describe("_fireModuleView", () => {
    let spy;

    beforeEach(() => {
      spy = sandbox.stub(instance, "_fireDataEventWrapper");
    });

    it("should track viewed slides", () => {
      sandbox.stub(instance, "_isVisible").returns(true);
      instance._fireModuleView(0);
      expect(instance.moduleViewFired).to.have.length(1);
      instance._fireModuleView(1);
      expect(instance.moduleViewFired).to.have.length(2);
      instance._fireModuleView(1);
      expect(spy).to.have.been.calledTwice;
    });

    it("should not fire event if not visible", () => {
      sandbox.stub(instance, "_isVisible").returns(false);
      instance._fireModuleView(0);
      expect(spy).to.not.have.been.called;
    });
  });

  describe("_loadStories", () => {
    it("should set the lazyLoadIndex state to null if it isn't already", () => {
      component.setState({ lazyLoadIndex: 5 });
      instance._loadStories();
      expect(component).to.shallowly.have.state("lazyLoadIndex").to.be.null;
    });

    it("should not call setState if lazyLoadIndex is null", () => {
      component.setState({ lazyLoadIndex: null });
      const spy = sandbox.stub(instance, "setState");
      instance._loadStories();
      expect(spy).to.not.have.been.called;
    });
  });
});
