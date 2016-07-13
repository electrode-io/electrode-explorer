import React from "react";
import { shallow } from "enzyme";

import CarouselFirstTile from "src/components/helper-components/carousel-first-tile";

describe("<CarouselFirstTile>", () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      alt: "",
      src: "foo.png",
      clickThrough: {
        value: ""
      },
      themeButton: {},
      title: "",
      uid: "",
      dataAutomationId: ""
    };
    component = shallow(<CarouselFirstTile {...props} />);
  });

  it("should render correctly", () => {
    expect(component).to.shallowly.haveClass("CarouselFirstTile");
    expect(component).to.shallowly.have.type("div");
  });

  describe("background image", () => {
    it("should have background image if prop is present", () => {
      expect(component).to.shallowly.find(".CarouselFirstTile").have.props("style")
        .eql({ backgroundImage: "url(foo.png)" });
    });

    it("should not have background image if prop is not present", () => {
      component.setProps({ src: null });
      expect(component).to.shallowly.find(".CarouselFirstTile").have.props("style").null;
    });
  });

  describe("Theme Button", () => {
    it("should not have theme button if prop is not present", () => {
      expect(component).to.shallowly.find("ThemeButton").to.have.length(0);
    });

    it("should have theme button if prop is present", () => {
      const themeButton = { themeButton: { linkText: "foo", clickThrough: { value: "/" } } };
      component.setProps(themeButton);
      expect(component).to.shallowly.find("ThemeButton").to.have.length(1);
    });
  });
});
