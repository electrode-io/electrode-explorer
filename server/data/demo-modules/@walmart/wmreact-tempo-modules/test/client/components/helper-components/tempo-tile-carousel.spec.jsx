import React from "react";
import { shallow } from "enzyme";

import FeaturedElementCarousel from
  "@walmart/wmreact-carousel/lib/components/featured-element-carousel";

import TempoTileCarousel, { _setOffToFalse, _setTileOptionProps, _getItemTileHeight,
  _getCategoryTileHeight, _isTileVisible } from
  "src/components/helper-components/tempo-tile-carousel";

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

    describe("helper methods", () => {
      it("_setOffToFalse should convert the string 'off' to boolean false", () => {
        expect(_setOffToFalse("off")).to.be.false;
      });

      describe("_setTileOptionProps", () => {
        it("should convert Tempo tile options to correct Tile props", () => {
          const tempoOptions = {
            price: "on",
            itemFlag: "off",
            ratingsReviews: "on",
            deliveryPass: "off",
            productTitle: "single"
          };
          const expectedProps = {
            productNameLines: 1,
            showPrice: true,
            showFlags: false,
            showRatings: true,
            showShippingPass: false
          };
          expect(_setTileOptionProps(tempoOptions)).to.eql(expectedProps);
        });

        it("should return default Tile props if no Tempo tile options present", () => {
          const expectedProps = {
            productNameLines: 2,
            showPrice: true,
            showFlags: true,
            showRatings: true,
            showShippingPass: true
          };
          expect(_setTileOptionProps()).to.eql(expectedProps);
        });
      });

      describe("_getItemTileHeight", () => {
        let tileOptionProps;
        const baseHeight = 164;

        beforeEach(() => {
          tileOptionProps = {
            productNameLines: 0,
            showPrice: false,
            showRatings: false,
            showShippingPass: false
          };
        });

        it("should return base height if all options are off", () => {
          expect(_getItemTileHeight(tileOptionProps)).eq(baseHeight);
        });

        it("should return correct height with productNameLines set to 2", () => {
          tileOptionProps.productNameLines = 2;
          expect(_getItemTileHeight(tileOptionProps)).eq(baseHeight + 36);
        });

        it("should return correct height with showPrice on", () => {
          tileOptionProps.showPrice = true;
          expect(_getItemTileHeight(tileOptionProps)).eq(baseHeight + 36);
        });

        it("should return correct height with showRatings on", () => {
          tileOptionProps.showRatings = true;
          expect(_getItemTileHeight(tileOptionProps)).eq(baseHeight + 15);
        });

        it("should return correct height with showShippingPass on", () => {
          tileOptionProps.showShippingPass = true;
          expect(_getItemTileHeight(tileOptionProps)).eq(baseHeight + 15);
        });
      });

      describe("_getCategoryTileHeight", () => {
        const baseHeight = 164;

        it("should return correct height for center aligned title", () => {
          expect(_getCategoryTileHeight("center")).to.eq(baseHeight + 18);
        });

        it("should return correct height for non center aligned title", () => {
          expect(_getCategoryTileHeight("left")).to.eq(baseHeight + 36);
        });
      });

      describe("_isTileVisible", () => {
        const frameBoundingRect = { left: 100, right: 400, bottom: 400, top: 100 };

        it("should correctly determine if a tile is visible in a horizontal carousel", () => {
          expect(_isTileVisible(frameBoundingRect, { left: 150, right: 200 }, false)).to.be.true;
          expect(_isTileVisible(frameBoundingRect, { left: 50, right: 450 }, false)).to.be.false;
        });

        it("should correctly determine if a tile is visible in a vertical carousel", () => {
          expect(_isTileVisible(frameBoundingRect, { top: 150, bottom: 200 }, true)).to.be.true;
          expect(_isTileVisible(frameBoundingRect, { top: 50, bottom: 450 }, true)).to.be.false;
        });
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
          }
        };

        beforeEach(() => {
          spy = sandbox.stub(instance, "_fireDataEventWrapper");
        });

        it("should call _fireDataEventWrapper", () => {
          sandbox.stub(instance, "_getVisibleTileCount").returns(1);
          instance._fireModuleView(0);
          expect(spy).to.have.been.calledWith(expectedArg);
        });

        it("should skip first tile if present", () => {
          instance.analyticsIds.unshift(null);
          sandbox.stub(instance, "_getVisibleTileCount").returns(2);
          instance._fireModuleView(0);
          expect(spy).to.have.been.calledWith(expectedArg);
        });
      });
    });
  });
});
