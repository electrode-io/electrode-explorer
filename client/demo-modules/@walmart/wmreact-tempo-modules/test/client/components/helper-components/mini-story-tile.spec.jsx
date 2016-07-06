import React from "react";
import { shallow } from "enzyme";
import { Link, Image } from "@walmart/wmreact-base";

import moduleData from "../../test-data/ministory-tile-test-data.js";
import MiniStoryTile from "src/components/helper-components/mini-story-tile";

describe("<MiniStoryTile />", () => {
  let component;
  let testProps;
  let image;

  beforeEach(() => {
    testProps = moduleData;
    component = shallow(<MiniStoryTile {...testProps} />);
  });

  it("should render", () => {
    expect(component).to.be.ok;
  });

  it("should have correct classes", () => {
    expect(component).to.shallowly.haveClass("Grid-col");
    expect(component).to.shallowly.haveClass("u-size-1-3-m");
    expect(component).to.shallowly.not.haveClass("u-size-2-3-m");
    expect(component).to.shallowly.not.haveClass("hide-content-max-m");

    // set new props
    component.setProps({
      isMobileHidden: true
    });

    expect(component).to.shallowly.haveClass("hide-content-max-m");
  });

  it("should have correct Link", () => {
    const link = component.find(Link);
    expect(link).to.have.length(1);
    expect(link).to.shallowly.have.props("href")
      .equal(moduleData.spot.image.clickThrough.value);
    expect(link).to.shallowly.have.props("alt")
      .equal(moduleData.spot.image.alt);
  });

  it("should have correct image", () => {
    image = component.find(Image);
    expect(image).to.shallowly.have.length(1);
    expect(image).to.shallowly.have.props("alt")
      .equal(moduleData.spot.image.alt);
  });

  it("should have correct mobile image for 1/3", () => {
    testProps.isMobile = true;
    component = shallow(<MiniStoryTile {...testProps} />);
    image = component.find(Image);
    expect(image).to.shallowly.have.props("src")
      .equal(`${moduleData.spot.image.src}?odnWidth=364&odnHeight=210`);
  });

  it("should have correct desktop image for 1/3", () => {
    testProps.isMobile = false;
    component = shallow(<MiniStoryTile {...testProps} />);
    image = component.find(Image);
    expect(image).to.shallowly.have.props("src")
      .equal(`${moduleData.spot.image.src}?odnWidth=433&odnHeight=250`);
  });

  it("should have correct mobile image for 2/3", () => {
    testProps.isMobile = true;
    testProps.spot.image.width = "878";
    component = shallow(<MiniStoryTile {...testProps} />);
    image = component.find(Image);
    expect(image).to.shallowly.have.props("src")
      .equal(`${moduleData.spot.image.src}?odnWidth=738&odnHeight=210`);
  });

  it("should have correct desktop image for 2/3", () => {
    testProps.isMobile = false;
    testProps.spot.image.width = "878";
    component = shallow(<MiniStoryTile {...testProps} />);
    image = component.find(Image);
    expect(image).to.shallowly.have.props("src")
      .equal(`${moduleData.spot.image.src}?odnWidth=878&odnHeight=250`);
  });
});
