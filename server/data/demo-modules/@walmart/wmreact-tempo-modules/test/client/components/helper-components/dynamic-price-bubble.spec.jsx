import React from "react";
import { shallow } from "enzyme";
import classnames from "classnames";

import props from "../../test-data/dynamic-price-data.js";
import DynamicPriceBubble,
  { _populatePrice, _renderWasPrice } from "src/components/helper-components/dynamic-price-bubble";

describe("<DynamicPrice />", () => {
  let component;
  let testProps;
  let wrapper;

  beforeEach(() => {
    testProps = props;
    component = shallow(<DynamicPriceBubble {...testProps} />);
    wrapper = component.find(".DynamicPriceBubble");
  });

  afterEach(() => {
    component = null;
    testProps = null;
  });

  it("should render", () => {
    const dynamicPriceText = component.find(".DynamicPriceBubble-text");
    const dynamicPrice = component.find(".DynamicPriceBubble-price");

    expect(wrapper).to.shallowly.have.length(1);
    expect(dynamicPriceText).to.shallowly.have.length(1);
    expect(dynamicPrice).to.shallowly.have.length(1);
    expect(component).to.be.ok;
  });

  it("rollback should render proper", () => {
    testProps.overlay.priceDisplay = "Rollback";
    component = shallow(<DynamicPriceBubble {...testProps} />);
    const dynamicPriceRollback = component.find(".DynamicPriceBubble--rollback");

    expect(dynamicPriceRollback).to.shallowly.have.length(1);
  });

  it("should render proper manual price class", () => {
    testProps.overlay.bubbleText = "text";
    component = shallow(<DynamicPriceBubble {...testProps} />);
    const dynamicPriceManual = component.find(".DynamicPriceBubble-text--manual");
    const classes = classnames(
      "DynamicPriceBubble-text",
      "DynamicPriceBubble-text--manual",
      "DynamicPriceBubble-text--small",
      "hide-content-max-m"
    );

    expect(dynamicPriceManual).to.shallowly.have.props("className")
      .eql(classes);
  });

  it("should render proper locations", () => {
    testProps.overlay.priceDisplay = "from";
    component = shallow(<DynamicPriceBubble {...testProps} />);
    wrapper = component.find(".DynamicPriceBubble");
    const classes = classnames(
      "DynamicPriceBubble",
      "u-borderRadiusFull",
      "DynamicPriceBubble-x-2",
      "DynamicPriceBubble-y-1"
    );

    expect(wrapper).to.shallowly.have.props("className")
      .eql(classes);

    testProps.overlay.priceDisplay = "from";
    testProps.overlay.location = null;
    component = shallow(<DynamicPriceBubble {...testProps} />);
    wrapper = component.find(".DynamicPriceBubble");

    expect(wrapper).to.shallowly.have.props("className")
      .not.eql(classes);
  });

  it("should render rollback class with bubble if price dispaly is Rollback", () => {
    testProps.overlay.priceDisplay = "Rollback";
    testProps.overlay.location = "B3";
    component = shallow(<DynamicPriceBubble {...testProps} />);
    wrapper = component.find(".DynamicPriceBubble");
    const classes = classnames(
      "DynamicPriceBubble",
      "u-borderRadiusFull",
      "DynamicPriceBubble-x-2",
      "DynamicPriceBubble-y-1",
      "DynamicPriceBubble--rollback"
    );

    expect(wrapper).to.shallowly.have.props("className")
      .eql(classes);
  });

  it("should have pass from from price if current price is not available", () => {
    testProps.overlay.products[1].price.currentPrice = null;
    const price = testProps.overlay.products[1].price.fromPrice = 11.99;
    const wasPrice = 0;
    component = shallow(<DynamicPriceBubble {...testProps} />);

    expect(_populatePrice(testProps.overlay.products, testProps.overlay.manualPrice))
      .to.eql({
        price,
        wasPrice
      });
  });

  it("should have pass from min price if current price is not available", () => {
    testProps.overlay.products[1].price.currentPrice = null;
    testProps.overlay.products[1].price.fromPrice = null;
    const price = testProps.overlay.products[1].price.minPrice = 11.99;
    const wasPrice = 0;
    component = shallow(<DynamicPriceBubble {...testProps} />);

    expect(_populatePrice(testProps.overlay.products, testProps.overlay.manualPrice))
      .to.eql({
        price,
        wasPrice
      });
  });

  it("should have pass from manual price if current price is not available", () => {
    testProps.overlay.products[1].price.currentPrice = null;
    testProps.overlay.products[1].price.fromPrice = null;
    testProps.overlay.products[1].price.minPrice = null;
    const price = parseFloat(testProps.overlay.manualPrice);
    const wasPrice = 0;
    component = shallow(<DynamicPriceBubble {...testProps} />);

    expect(_populatePrice(testProps.overlay.products, testProps.overlay.manualPrice))
      .to.eql({
        price,
        wasPrice
      });
  });

  it("should return the was price", () => {
    testProps.overlay.products[1].price.comparisonPrice = 12.99;

    expect(_renderWasPrice(testProps.overlay.products[1].price.comparisonPrice, "was", true))
      .containJSX("span");
  });

  it("should not return the was price if price display is null", () => {

    expect(_renderWasPrice(12.99, null, true))
      .not.containJSX("span");
  });

  it("should not return the was price if price display is null", () => {

    expect(_renderWasPrice(null, "was", false))
      .not.containJSX("span");
  });

  it("should not return the was price if price display is null", () => {
    expect(_renderWasPrice(null, null, false))
      .not.containJSX("span");
  });

  it("should return the was price", () => {
    testProps.overlay.products[1].price.comparisonPrice = null;
    component = shallow(<DynamicPriceBubble {...testProps} />);
    const dynamicPriceTextWas = component.find(".DynamicPriceBubble-text--was");
    expect(dynamicPriceTextWas).to.shallowly.have.length(0);
  });

  it("should not pass values if product is not available", () => {
    testProps.overlay.products = null;
    const price = parseFloat(testProps.overlay.manualPrice);
    const wasPrice = 0;
    expect(_populatePrice(testProps.overlay.products, testProps.overlay.manualPrice))
      .to.eql({
        price,
        wasPrice
      });
  });

  it("should not render dynamic price if manual price and product price is not there", () => {
    testProps.overlay.products = null;
    testProps.overlay.manualPrice = null;
    component = shallow(<DynamicPriceBubble {...testProps} />);
    wrapper = component.find(".DynamicPriceBubble");
    expect(wrapper).to.shallowly.have.length(0);
  });
});
