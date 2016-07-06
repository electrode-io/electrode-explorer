import React from "react";
import BannerMessage from "src/components/tempo-components/banner-message";
import { shallow } from "enzyme";

describe("<BannerMessage />", () => {
  let component;
  let props;
  let instance;

  describe("when the component is rendered", () => {
    beforeEach(() => {
      props = {
        moduleData: {
          configs: {
            height: "large",
            themeColor: "black",
            themeButton: {
              linkText: "someText"
            }
          }
        }
      };
      component = shallow(<BannerMessage {...props}/>);
      instance = component.instance();
    });

    it("_getClassNames should append className to classes", () => {
      expect(instance._getClassNames(props.moduleData.configs.height))
        .to.equal("BannerMessage BannerMessage--large");
    });

    it("should return true if string is empty", () => {
      expect(instance._isEmpty("")).to.be.true;
    });

    it("should return false if string is not", () => {
      expect(instance._isEmpty(props.moduleData.configs.themeButton.linkText)).to.be.false;
    });

    it("_renderIcon should return icon with class names in it with link text", () => {
      expect(instance._renderIcon(props.moduleData.configs.themeButton.linkText))
        .containJSX("i");

      expect(instance._renderIcon(props.moduleData.configs.themeButton.linkText))
        .to.shallowly.find(".BannerMessage-subHeader-linkArrow").to.have.length(1);
    });

    describe("when the _renderIcon is called with null link", () => {
      beforeEach(() => {
        props = {
          moduleData: {
            configs: {
              height: "large",
              themeColor: "black",
              themeButton: {
                linkText: ""
              }
            }
          }
        };
        component = shallow(<BannerMessage {...props}/>);
        instance = component.instance();
      });

      it("_renderIcon should not return icon with class names in it", () => {
        expect(instance._renderIcon(props.moduleData.configs))
          .not.containJSX("i");
      });
    });

    it("_renderThemeButton should render the theme button component", () => {
      expect(instance._renderThemeButton(props.moduleData.configs))
        .containJSX("a");
    });

    describe("_renderThemeButton is called with themeButton null", () => {
      beforeEach(() => {
        props = {
          moduleData: {
            configs: {
              height: "large",
              themeColor: "black"
            }
          }
        };
        component = shallow(<BannerMessage {...props}/>);
        instance = component.instance();
      });

      it("_renderThemeButton should not render the theme button component", () => {
        expect(instance._renderThemeButton(props.moduleData.configs))
          .not.containJSX("a");
      });
    });

    it("_processTextDate should return current date", () => {
      const date = new Date();
      const currentDate =
        `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`;
      expect(instance._processTextDate("\|date\|"))
        .to.equal(currentDate);
    });

    it("_renderLink should return the fake link", () => {
      expect(instance._renderLink(props.moduleData.configs))
        .containJSX("span");

      expect(instance._renderLink(props.moduleData.configs))
        .to.shallowly.find(".display-inline-block-m").to.have.length(1);
    });

    describe("subtext with small height", () => {
      beforeEach(() => {
        props = {
          moduleData: {
            configs: {
              height: "small",
              themeColor: "black",
              secondaryText1: "Your Hottest values for |date|.",
              secondaryColor1: "#FFFFFF",
              secondaryFontWeight1: "regular",
              themeButton: {
                linkText: "someText"
              }
            }
          }
        };
        component = shallow(<BannerMessage {...props}/>);
        instance = component.instance();
      });

      it("_renderSubText should have sub-header-only if header is not available", () => {
        expect(instance._renderSubText(props.moduleData.configs))
          .to.shallowly.find(".BannerMessage-subHeaderOnly").to.have.length(1);
      });

      it("_renderSubText should be inline block if height=small on each resolution", () => {
        expect(instance._renderSubText(props.moduleData.configs))
          .to.shallowly.find(".display-inline-block").to.have.length(3);
      });
    });

    describe("subtext with large height", () => {
      beforeEach(() => {
        props = {
          moduleData: {
            configs: {
              height: "large",
              themeColor: "black",
              secondaryText1: "Your Hottest values for |date|.",
              secondaryColor1: "#FFFFFF",
              secondaryFontWeight1: "regular",
              themeButton: {
                linkText: "someText"
              }
            }
          }
        };
        component = shallow(<BannerMessage {...props}/>);
        instance = component.instance();
      });

      it("_renderSubText should inline block if the height=small on each resolution", () => {
        expect(instance._renderSubText(props.moduleData.configs))
          .to.shallowly.haveClass("display-inline-block-m");
      });
    });

    describe("large banner", () => {
      beforeEach(() => {
        props = {
          moduleData: {
            configs: {
              height: "large",
              themeColor: "black",
              secondaryText1: "Your Hottest values for |date|.",
              secondaryColor1: "#FFFFFF",
              secondaryFontWeight1: "regular",
              themeButton: {
                linkText: "someText"
              }
            }
          }
        };
        component = shallow(<BannerMessage {...props}/>);
        instance = component.instance();
      });

      it("_renderSubText should be inline block till m screen if the heigh is large", () => {
        expect(instance._renderSubText(props.moduleData.configs))
          .to.shallowly.haveClass("display-inline-block-m");
      });
    });

    describe("Header Text for large Banner", () => {
      beforeEach(() => {
        props = {
          moduleData: {
            configs: {
              height: "large",
              themeColor: "black",
              headerText1: "Daily ",
              headerColor1: "#A1D7F8",
              headerFontWeight1: "bold",
              secondaryText1: "Your Hottest values for |date|.",
              secondaryColor1: "#FFFFFF",
              secondaryFontWeight1: "regular",
              themeButton: {
                linkText: "someText"
              }
            }
          }
        };
        component = shallow(<BannerMessage {...props}/>);
        instance = component.instance();
      });

      it("when _renderBannerMessageHeader is called headerText should initialize", () => {
        expect(instance._renderBannerMessageHeader(props.moduleData.configs))
          .to.shallowly.find(".BannerMessage-headerText").to.have.length(1);
      });

      it("_renderBannerMessageHeader should have font semibold if it is large banner", () => {
        expect(instance._renderBannerMessageHeader(props.moduleData.configs))
          .to.shallowly.find(".font-semibold").to.have.length(1);
      });
    });

    describe("Header Text for small Banner", () => {
      beforeEach(() => {
        props = {
          moduleData: {
            configs: {
              height: "small",
              themeColor: "black",
              headerText1: "Daily ",
              headerColor1: "#A1D7F8",
              headerFontWeight1: "bold",
              secondaryText1: "Your Hottest values for |date|.",
              secondaryColor1: "#FFFFFF",
              secondaryFontWeight1: "regular",
              themeButton: {
                linkText: "someText"
              }
            }
          }
        };
        component = shallow(<BannerMessage {...props}/>);
        instance = component.instance();
      });

      it("should display block if it is small and have secondarty text", () => {
        expect(instance._renderBannerMessageHeader(props.moduleData.configs))
          .to.shallowly.haveClass("display-block");
      });
    });

    describe("Header Text for small Banner without secondary text", () => {
      beforeEach(() => {
        props = {
          moduleData: {
            configs: {
              height: "small",
              themeColor: "black",
              headerText1: "Daily ",
              headerColor1: "#A1D7F8",
              headerFontWeight1: "bold",
              themeButton: {
                linkText: "someText"
              }
            }
          }
        };
        component = shallow(<BannerMessage {...props}/>);
        instance = component.instance();
      });

      it("should display inline block without secondarty text", () => {
        expect(instance._renderBannerMessageHeader(props.moduleData.configs))
          .to.shallowly.haveClass("display-inline-block-m");
      });
    });

    describe("message segment", () => {
      beforeEach(() => {
        props = {
          moduleData: {
            configs: {
              height: "small",
              themeColor: "black",
              headerText1: "Daily ",
              headerColor1: "#A1D7F8",
              headerFontWeight1: "bold",
              themeButton: {
                linkText: "someText"
              }
            }
          }
        };
        component = shallow(<BannerMessage {...props}/>);
        instance = component.instance();
      });

      it("should create a message node if text found", () => {
        expect(instance._renderMessageSegment("header", 1, props.moduleData.configs))
          .containJSX("span");
      });

      it("should not create a message node if text found", () => {
        expect(instance._renderMessageSegment("header", 2, props.moduleData.configs))
          .not.containJSX("span");
      });

      it("should have font class based on response", () => {
        expect(instance._renderMessageSegment("header", 1, props.moduleData.configs))
          .to.shallowly.haveClass("font-bold");
      });

    });
  });
});
