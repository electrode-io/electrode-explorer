import generateTileProps, {
  _setUidProp,
  _setFlagProp,
  _setImageProp,
  _setTitleProps,
  _setSubmapProps,
  _buildPriceProp,
  _setPriceProps,
  _setSubmapOrPriceProps,
  _setStarsProp
} from "src/helpers/generate-tile-props";

describe("generateTileProps", () => {
  describe("helper functions", () => {
    describe("_setUidProp", () => {
      it("should set uid to empty string if no id", () => {
        expect(_setUidProp()).to.eq("");
      });

      it("should set uid from productId if present", () => {
        expect(_setUidProp({ productId: "ABC" })).to.eq("ABC");
      });
    });

    describe("_setFlagProp", () => {
      it("should add 'Low in Stock' flag when quantity is below the lowQuantityThreshold", () => {
        expect(_setFlagProp({}, 2, 1)).to.have.length(0);
        expect(_setFlagProp({}, 1, 2)[0].type).to.eq("lowstock");
      });

      it("should add 'Rollback' flag when isRollback is true", () => {
        expect(_setFlagProp({ isRollback: true }, 2, 1)[0].type).to.eq("rollback");
      });

      it("should add 'Clearance' flag when isClearance is true", () => {
        expect(_setFlagProp({ isClearance: true }, 2, 1)[0].type).to.eq("clearance");
      });

      it("should add 'ReducedPrice' flag when isReducedPrice is true", () => {
        expect(_setFlagProp({ isReducedPrice: true }, 2, 1)[0].type).to.eq("reduced");
      });

      it("should add 'Special Buy' flag when isSpecialBuy is true", () => {
        expect(_setFlagProp({ isSpecialBuy: true }, 2, 1)[0].type).to.eq("specialbuy");
      });
    });

    describe("_setImageProp", () => {
      const src = "foo.jpg";

      it("should should return correct size image for non mobile device", () => {
        expect(_setImageProp(src, false, false)).to.eq(`${src}?odnWidth=144&odnHeight=144`);
      });

      it("should should return correct size image for mobile device", () => {
        const isMobile = true;
        const vertical = false;
        expect(_setImageProp(src, {isMobile, vertical}, false)).to
          .eq(`${src}?odnWidth=120&odnHeight=120`);
      });

      it("should should return placeholder image lazyLoadImage is true", () => {
        expect(_setImageProp(src, false, true)).to.not.match(new RegExp(src));
      });
    });

    it("_setTitleProps should return correct Tile props", () => {
      const title = "Foo";
      const maxTitleLines = 1;
      expect(_setTitleProps(title, maxTitleLines)).to.eql({ title, maxTitleLines });
      expect(_setTitleProps(title, 0)).to.eql({ title: null });
    });

    it("_setSubmapProps should return correct Tile props", () => {
      expect(_setSubmapProps("CART", "right", false)).to.eql({
        isSubmap: true,
        submapMessage: "See details in cart",
        showSubmapFlyout: true,
        submapFlyoutCheckout: false,
        submapFlyoutPosition: "right"
      });
    });

    describe("_buildPriceProp", () => {
      it("should return expected object for from price", () => {
        const expectedOutput = { fromPrice: { currency: "$", price: 1.99, type: "from"} };
        expect(_buildPriceProp(1.99, true)).to.eql(expectedOutput);
      });

      it("should return expected object for no from price", () => {
        const expectedOutput = { price: { currency: "$", price: 3.65} };
        expect(_buildPriceProp(3.65, false)).to.eql(expectedOutput);
      });
    });

    describe("_setPriceProps", () => {
      describe("currentPrice present", () => {
        let priceInput;

        beforeEach(() => {
          priceInput = { currentPrice: 90.00 };
        });

        it("currentPrice should be set to price when present", () => {
          expect(_setPriceProps(priceInput).price.price).to.eq(90.00);
        });

        describe("comparisonPrice present", () => {
          beforeEach(() => {
            priceInput.comparisonPrice = 100.00;
          });

          it("wasPrice and savings should be be added if savings is large enough", () => {
            const priceProp = _setPriceProps(priceInput).price;
            expect(priceProp.wasPrice).to.eq(100.00);
            expect(priceProp.savingsPrice).to.eq(10.00);
          });

          it("listPrice should be added instead of wasPrice if isStrikeThrough is true", () => {
            priceInput.isStrikeThrough = true;
            const priceProp = _setPriceProps(priceInput).price;
            expect(priceProp.listPrice).to.eq(100.00);
            expect(priceProp.savingsPrice).to.eq(10.00);
          });

          it("wasPrice and savings should not be added if savings is too small", () => {
            priceInput.currentPrice = 99.00;
            const priceProp = _setPriceProps(priceInput).price;
            expect(priceProp.wasPrice).to.be.undefined;
            expect(priceProp.savings).to.be.undefined;
          });
        });
      });

      it("fromPrice should be set when present", () => {
        expect(_setPriceProps({ fromPrice: 5.55 }).fromPrice.price).to.eq(5.55);
      });

      describe("minPrice and maxPrice present", () => {
        it("should set fromPrice when minPrice is less than maxPrice", () => {
          expect(_setPriceProps({ minPrice: 1.00, maxPrice: 2.00 }).fromPrice.price).to.eq(1.00);
        });

        it("should set price when minPrice is equal to maxPrice", () => {
          expect(_setPriceProps({ minPrice: 1.00, maxPrice: 1.00 }).price.price).to.eq(1.00);
        });

        it("should not set price when minPrice is greater than maxPrice", () => {
          expect(_setPriceProps({ minPrice: 2.00, maxPrice: 1.00 })).to.be.undefined;
        });
      });

      it("should not set price when all prices are missing", () => {
        expect(_setPriceProps({})).to.be.undefined;
      });
    });

    describe("_setSubmapOrPriceProps", () => {
      it("should set submap props for checkout submap type", () => {
        const newProps = _setSubmapOrPriceProps({ currentPrice: 10.00, submapType: "CHECKOUT" });
        expect(newProps.isSubmap).to.be.true;
        expect(newProps.submapFlyoutCheckout).to.be.true;
        expect(newProps.price).to.be.undefined;
      });

      it("should set submap props for cart submap type", () => {
        const newProps = _setSubmapOrPriceProps({ currentPrice: 10.00, submapType: "CART" });
        expect(newProps.isSubmap).to.be.true;
        expect(newProps.submapFlyoutCheckout).to.be.false;
        expect(newProps.price).to.be.undefined;
      });

      it("should not set submap props for no submap type", () => {
        const newProps = _setSubmapOrPriceProps({ currentPrice: 10.00 });
        expect(newProps.isSubmap).to.be.undefined;
        expect(newProps.submapFlyoutCheckout).to.be.undefined;
        expect(newProps.price.price).to.eq(10.00);
      });

      describe("user logged in", () => {
        it("should change submap props for checkout submap type to cart", () => {
          const newProps = _setSubmapOrPriceProps({ currentPrice: 10.00, submapType: "CHECKOUT" },
            "right", true);
          expect(newProps.isSubmap).to.be.true;
          expect(newProps.submapFlyoutCheckout).to.be.false;
          expect(newProps.price).to.be.undefined;
        });

        it("should not set submap props for cart submap type", () => {
          const newProps = _setSubmapOrPriceProps({ currentPrice: 10.00, submapType: "CART" },
            "right", true);
          expect(newProps.isSubmap).to.be.undefined;
          expect(newProps.submapFlyoutCheckout).to.be.undefined;
          expect(newProps.price.price).to.eq(10.00);
        });
      });
    });

    describe("_setStarsProps", () => {
      it("should set stars props when rating and totalRatings are greater than 0", () => {
        expect(_setStarsProp({ rating: "3.5", totalRatings: "20" })).to
          .eql({ total: 5, average: 3.5, countNode: 20 });
      });

      it("should not set stars props when rating and totalRatings are 0", () => {
        expect(_setStarsProp({ rating: "0.0", totalRatings: "0" })).to.be.undefined;
      });
    });
  });

  it("should set flags prop if showFlags is true", () => {
    expect(generateTileProps({ productData: { flags: { isRollback: true } }, showFlags: true })
      .flags).to.have.length(1);
  });

  it("should set title prop if productNameLines is greater than 0", () => {
    expect(generateTileProps({ productData: { productName: "Foo" }, productNameLines: 1 }).title)
      .to.eq("Foo");
  });

  it("should set price prop if showPrice is true", () => {
    expect(generateTileProps({ productData: { price: { currentPrice: 1.99 } }, showPrice: true })
      .price.price).to.eq(1.99);
  });

  it("should set stars prop if showRatings is true", () => {
    expect(generateTileProps({ productData: { ratings: { rating: "3.5", totalRatings: "20" } },
      showRatings: true }).stars.countNode).eq(20);
  });

  it("should set quantityLeft prop if showQuantityLeft is true", () => {
    expect(generateTileProps({ productData: { quantity: 100 }, showQuantityLeft: true })
      .quantityLeft).to.eq(100);
  });

  it("should set offerShippingPassEligible prop", () => {
    expect(generateTileProps({ productData: { isShippingPassEligible: true },
      showShippingPass: true }).offerShippingPassEligible).to.be.true;
  });
});
