import React from "react";
import { shallow } from "enzyme";

import FeaturedElementCarousel from
  "@walmart/wmreact-carousel/lib/components/featured-element-carousel";
import TempoTileCarousel from "src/components/helper-components/tempo-tile-carousel";

describe("<TempoTileCarousel>", () => {
  let component;
  let instance;
  let props;
  let sandbox;

  beforeEach(() => {
    props = {
      moduleData: {
        configs: {
          tileOptions: {},
          products: [{ canAddToCart: true, id: { productId: "ABC" } }, {}]
        },
        moduleId: "1234-5678"
      },
      vertical: false,
      className: "foo"
    };
    component = shallow(<TempoTileCarousel {...props} />);
    instance = component.instance();
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("when the component renders", () => {
    it("should be a FeaturedElementCarousel with correct style class added", () => {
      expect(component).to.shallowly.find(FeaturedElementCarousel).to.shallowly.haveClass("foo");
    });

    it("should set the proper class for particular type of carousel", () => {
      expect(component).to.shallowly.find(FeaturedElementCarousel)
        .to.shallowly.haveClass("TempoTileCarousel");

      props.vertical = true;
      component = shallow(<TempoTileCarousel {...props} />);

      expect(component).to.shallowly.find(FeaturedElementCarousel)
        .to.shallowly.haveClass("TempoTileCarousel--vertical");
    });

    it("should be empty if products or categories are not there", () => {
      props.moduleData.configs.products = [];
      props.moduleData.configs.tiles = [];
      component = shallow(<TempoTileCarousel {...props} />);
      expect(component.node).to.be.null;
    });

    it("should have a background image if themeImage is there", () => {
      props.moduleData.configs.themeImage = { src: "foo.png" };
      component = shallow(<TempoTileCarousel {...props} />);
      expect(component).to.shallowly.find(FeaturedElementCarousel).to.shallowly.have
        .props("backgroundImage").eq("url(foo.png)");
    });

    it("should call _renderItemTiles if products are there", () => {
      const spy = sandbox.stub(instance, "_renderItemTiles");
      instance.render();
      expect(spy).to.have.been.called;
    });

    it("should call _renderCategoryTiles if tiles are there", () => {
      props.moduleData.configs.products = null;
      props.moduleData.configs.tiles = [{}];
      component = shallow(<TempoTileCarousel {...props} />);
      const spy = sandbox.stub(instance, "_renderCategoryTiles");
      instance.render();
      expect(spy).to.have.been.called;
    });

    describe("initial state", () => {
      it("should have lazyLoadIndex of 8 when isMobile is false", () => {
        expect(component).to.shallowly.have.state("lazyLoadIndex").eq(8);
      });

      it("should have lazyLoadIndex of 6 when isMobile is true", () => {
        props.isMobile = true;
        component = shallow(<TempoTileCarousel {...props} />);
        expect(component).to.shallowly.have.state("lazyLoadIndex").eq(6);
      });
    });

    describe("instance methods", () => {
      describe("_renderItemTiles", () => {
        it("should just return item tiles that can be added to cart if there is no first tile", () => {// eslint-disable-line max-len
          expect(instance._renderItemTiles(props)).to.have.length(1);
        });

        it("should return item tiles with first tile if present", () => {
          props.moduleData.configs.firstTile = {};
          expect(instance._renderItemTiles(props)).to.have.length(2);
        });

        it("tiles should be rendered up to the lazyLoad index", () => {
          const products = [];
          for (let i = 0; i <= 4; i++) {
            products.push({ canAddToCart: true, id: { productId: `ABC${i}` } });
          }
          props.moduleData.configs.products = products;
          const renderedProducts = instance._renderItemTiles(props, 3);

          expect(renderedProducts[2]).to.shallowly.have.type("div");
          expect(renderedProducts[3]).to.be.null;
        });
      });

      describe("_renderCategoryTiles", () => {
        it("tiles should be rendered up to the lazyLoad index that have image and link", () => {
          const tiles = [];
          for (let i = 0; i <= 4; i++) {
            tiles.push({ image: { src: "foo.jpg" }, link: { clickThrough: {} }});
          }
          tiles.push({});

          props.moduleData.configs.products = null;
          props.moduleData.configs.tileOptions = null;
          props.moduleData.configs.tiles = tiles;
          props.moduleData.configs.titleAlignment = "center";
          const renderedProducts = instance._renderCategoryTiles(props, 3);

          expect(renderedProducts[2]).to.shallowly.have.type("div");
          expect(renderedProducts[3]).to.be.null;
        });
      });

      describe("_loadTiles", () => {
        it("should set the lazyLoadIndex state to null if it isn't already", () => {
          component.setState({ lazyLoadIndex: 5 });
          instance._loadTiles();
          expect(component).to.shallowly.have.state("lazyLoadIndex").to.be.null;
        });

        it("should not call setState if lazyLoadIndex is null", () => {
          component.setState({ lazyLoadIndex: null });
          const spy = sandbox.stub(instance, "setState");
          instance._loadTiles();
          expect(spy).to.not.have.been.called;
        });
      });

      describe("_fireModuleView", () => {
        let spy;
        const expectedArg = {
          moduleId: "1234-5678",
          plData: {
            ni: 1,
            or: ["ABC"],
            pn: 1,
            tr: 1
          },
          isScroll: true
        };

        beforeEach(() => {
          spy = sandbox.stub(instance, "_fireDataEventWrapper");
        });

        it("should call _fireDataEventWrapper", () => {
          sandbox.stub(instance, "_getVisibleTileCount").returns(1);
          instance._fireModuleView(0, true);
          expect(spy).to.have.been.calledWith(expectedArg);
        });

        it("should skip first tile if present", () => {
          instance.analyticsIds.unshift(null);
          sandbox.stub(instance, "_getVisibleTileCount").returns(2);
          instance._fireModuleView(0, true);
          expect(spy).to.have.been.calledWith(expectedArg);
        });
      });

      it("_fireScrollModuleView should call _fireModuleView with index 0", () => {
        const spy = sandbox.stub(instance, "_fireModuleView");
        instance._fireScrollModuleView();
        expect(spy).to.have.been.calledWith(0);
      });
    });
  });
});
