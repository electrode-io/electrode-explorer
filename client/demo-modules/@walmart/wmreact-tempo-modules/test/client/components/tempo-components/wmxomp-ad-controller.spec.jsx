import React from "react";
import { shallow } from "enzyme";

import WMXOMPAdController from "src/components/tempo-components/wmxomp-ad-controller";
import props from "../../test-data/wmxomp-ad-controller-test-data.js";

describe("<WMXOMPAdController />", () => {
  let wrapper;
  let component;

  beforeEach(() => {
    component = shallow(<WMXOMPAdController moduleData={props} />);
    wrapper = component.find(".WMXOMPAdController");
  });

  it("should render", () => {
    expect(wrapper).to.shallowly.haveClass("WMXOMPAdController");
    expect(component).to.be.ok;
  });

  it("should check Ads when placement is middle or bottom and its not a mobile device", () => {
    expect(wrapper).to.shallowly.find(".sponsored-container-middle").to.have.length(1);
    expect(wrapper).to.shallowly.find(".sponsored-container-mobile-middle").to.have.length(1);
  });

  it("should check Ads when placement is middle or bottom and its a mobile device", () => {
    component = shallow(<WMXOMPAdController moduleData={props} isMobile/>);
    wrapper = component.find(".WMXOMPAdController");
    expect(wrapper).to.shallowly.find(".sponsored-container-middle").to.have.length(0);
    expect(wrapper).to.shallowly.find(".sponsored-container-mobile-middle").to.have.length(1);
  });

  it("should check Ads when placement is top and its not a mobile device", () => {
    props.configs.placement = "top";
    component = shallow(<WMXOMPAdController moduleData={props} />);
    wrapper = component.find(".WMXOMPAdController");
    expect(wrapper).to.shallowly.find(".sponsored-container-top-wrapper").to.have.length(1);
  });
});
