import React from "react";
import ThemeButton, {
  _linkText,
  _renderArrow
} from "src/components/helper-components/theme-button";
import { shallow } from "enzyme";
import Link from "@walmart/wmreact-base/lib/components/link";

describe("<ThemeButton />", () => {
  let component;
  let props;
  component = shallow(<ThemeButton {...props}/>);

  it("should mount the component correctly", () => {
    expect(component).to.be.defined;
  });

  describe("<ThemeButton /> with text link paramenter", () => {
    beforeEach(() => {
      props = {
        themeButton: {
          linkText: "Shop All",
          title: "Shop All",
          clickThrough: {
            type: "url",
            value: "http://www.walmart.com/browse/3944_1078524_1231200"
          },
          uid: "CLAM4z1m"
        }
      };
      component = shallow(<ThemeButton {...props}/>);
    });

    it("should not display link text", () => {
      expect(_linkText(false, props.themeButton.linkText))
        .to.not.equal("Shop All");
    });

    it("should not display arrow", () => {
      expect(_renderArrow(false)).to.be.null;
    });
  });

  describe("<ThemeButton /> without text link paramenter", () => {
    beforeEach(() => {
      props = {
        buttonTextColor: "#222",
        themeButtonColor: "#333",
        themeButton: {
          linkText: "Shop All",
          title: "Shop All",
          clickThrough: {
            type: "url",
            value: "http://www.walmart.com/browse/3944_1078524_1231200"
          },
          uid: "CLAM4z1m"
        }
      };
      component = shallow(<ThemeButton {...props}/>);
    });

    it("link should initialize", () => {
      const link = component.find(Link);
      expect(link).to.shallowly.have.length(1);
    });

    it("should display link text", () => {
      expect(_linkText(true, props.themeButton.linkText))
        .to.equal("Shop All");
    });

    it("should display arrow", () => {
      expect(_renderArrow(true)).to.shallowly.have.type("i");
    });
  });
});
