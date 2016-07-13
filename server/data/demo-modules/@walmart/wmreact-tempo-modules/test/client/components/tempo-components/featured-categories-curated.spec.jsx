import React from "react";
import { shallow } from "enzyme";
import classNames from "classnames";

import FeaturedCategoriesCurated from "src/components/tempo-components/featured-categories-curated";
import props from "../../test-data/featured-categories-curated-test-data.js";

describe("<FeaturedCategoriesCurated />", () => {
  let wrapper;
  let component;
  let testProp;
  let instance;

  beforeEach(() => {
    testProp = props;
    component = shallow(<FeaturedCategoriesCurated moduleData={props} />);
    wrapper = component.find(".FeaturedCategoriesCurated");
    instance = component.instance();
  });

  it("should render inspirational version", () => {
    expect(wrapper).to.shallowly.haveClass("FeaturedCategoriesCurated");
    expect(wrapper).to.shallowly.have.length(1);
    expect(component).to.be.ok;
  });

  it("_toggleExpanded should toggle the expanded state", () => {
    component.setState({expanded: false});
    instance._toggleExpanded();
    expect(component).to.shallowly.have.state("expanded").to.be.true;
    instance._toggleExpanded();
    expect(component).to.shallowly.have.state("expanded").to.be.false;
  });

  it("_getButtonClasses should return proper classe with different category length", () => {
    const classes = classNames(
      "caret",
      "caret-blue",
      "font-semibold",
      "copy-mini",
      "btn",
      "btn-inverse"
    );

    expect(instance._getButtonClasses(9)).to.eql(classNames(classes, "hide-content"));
    expect(instance._getButtonClasses(10)).to.eql(classNames(classes, "hide-content-s"));
    expect(instance._getButtonClasses(12)).to.eql(classNames(classes, "hide-button-s-l"));
    expect(instance._getButtonClasses(14)).to.eql(classNames(classes, "hide-content-xl"));
    expect(instance._getButtonClasses(15)).to.eql(classNames(classes));
  });

  it("should render standard version", () => {
    component = shallow(<FeaturedCategoriesCurated moduleData={testProp} />);
    const standardVersion = component.find(".FeaturedCategoriesCurated-expander");

    expect(standardVersion).to.shallowly.have.length(1);
  });

  it("should not render standard version", () => {
    testProp.configs.displayMode = "inspirational";
    component = shallow(<FeaturedCategoriesCurated moduleData={testProp} />);
    const standardVersion = component.find(".FeaturedCategoriesCurated-expander");

    expect(standardVersion).to.shallowly.have.length(0);
  });

  it("should not render background image if it is not available", () => {
    testProp.configs.themeImage = null;
    component = shallow(<FeaturedCategoriesCurated moduleData={testProp} />);
    wrapper = component.find(".FeaturedCategoriesCurated");
    testProp.configs.themeImage = null;
    const style = {
      backgroundColor: testProp.configs.themeColor
    };

    expect(wrapper).to.shallowly.have.props("style").deep.equal(style);
  });

  it("should not render tiles that are missing an image or link", () => {
    testProp.configs.categories = [
      { image: { src: "foo.jpg" }, link: { clickThrough: {} }}, {}, {}
    ];
    component = shallow(<FeaturedCategoriesCurated moduleData={testProp} />);
    expect(component).to.shallowly.find("TempoCategoryTile").to.have.length(1);
  });
});
