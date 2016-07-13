import React from "react";
import { shallow } from "enzyme";

import MiniStoryTile from "src/components/helper-components/mini-story-tile";
import MiniStoryStackable from "src/components/tempo-components/mini-story-stackable";
import props from "../../test-data/ministory-test-data.js";

describe("<MiniStoryStackable />", () => {
  let wrapper;
  let component;

  beforeEach(() => {
    component = shallow(<MiniStoryStackable moduleData={props} />);
    wrapper = component.find(".MiniStoryStackable");
  });

  it("should render", () => {
    const wrapperGrid = wrapper.find(".Grid.MiniStoryStackable-grid.Grid--gutters");

    expect(wrapper).to.shallowly.haveClass("MiniStoryStackable");
    expect(wrapperGrid).to.shallowly.have.length(1);
    expect(component).to.be.ok;

    component.setProps({ isMobile: false });
    expect(component).to.be.ok;
  });

  it("should have correct # of MiniStoryTiles with proper props", () => {
    const tilesWrapper = wrapper.find(MiniStoryTile);
    expect(tilesWrapper).to.shallowly.have.length(7);
  });

  it("should not have header if headerTextLink object is null", () => {
    props.configs.headerTextLink = null;
    component = shallow(<MiniStoryStackable moduleData={props} />);
    wrapper = component.find(".MiniStoryStackable");
    const moduleHeader = wrapper.find(".ModuleHeader-heading");
    expect(moduleHeader).to.shallowly.have.length(0);
  });
});
