import {
  _setOffToFalse,
  _setTileOptionProps,
  _getItemTileHeight,
  _getCategoryTileHeight,
  _isTileVisible
} from "src/helpers/tempo-tile-carousel-helpers";

describe("Tempo Tile Carousel Helpers", () => {
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
