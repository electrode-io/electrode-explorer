const SLIDE_WIDTH_SMALL = { slideWidth: "136px", initialSlideWidth: 136 };
const SLIDE_WIDTH_LARGE = { slideWidth: "168px", initialSlideWidth: 168 };
const CELL_SPACING_SMALL = { cellSpacing: 8 };
const CELL_SPACING_LARGE = { cellSpacing: 12 };

export const HORIZONTAL_CAROUSEL_PROPS = {
  slidesToScroll: "auto",
  frameOverflow: "visible",
  responsive: [{
    selectors: ["x-small"],
    settings: {
      framePadding: "0 8px",
      ...CELL_SPACING_SMALL,
      ...SLIDE_WIDTH_SMALL
    }
  }, {
    selectors: ["small"],
    settings: {
      framePadding: "0 16px",
      ...CELL_SPACING_SMALL,
      ...SLIDE_WIDTH_SMALL
    }
  }, {
    selectors: ["medium"],
    settings: {
      framePadding: "0 16px",
      ...CELL_SPACING_SMALL,
      ...SLIDE_WIDTH_LARGE
    }
  }, {
    selectors: ["large"],
    settings: {
      framePadding: "0 20px",
      ...CELL_SPACING_LARGE,
      ...SLIDE_WIDTH_LARGE
    }
  }, {
    selectors: ["x-large"],
    settings: {
      framePadding: "0 32px",
      ...CELL_SPACING_LARGE,
      ...SLIDE_WIDTH_LARGE
    }
  }]
};

export const VERTICAL_CAROUSEL_PROPS = {
  slidesToScroll: "auto",
  ...CELL_SPACING_LARGE
};

export const PAGINATOR_STYLE = { top: 84 };

const TILE_PADDING = 8;
const TILE_IMAGE_HEIGHT = 144;
const TILE_IMAGE_MARGIN = 4;
const TILE_TEXT_LINE_HEIGHT = 18;
const TILE_PRICE_HEIGHT = 36;
const TILE_STARS_HEIGHT = 15;
const TILE_SHIPPING_PASS_HEIGHT = 15;
const TILE_BASE_HEIGHT = TILE_PADDING * 2 + TILE_IMAGE_HEIGHT + TILE_IMAGE_MARGIN;

export const _setOffToFalse = (value) => {
  return value !== "off";
};

export const _setTileOptionProps = (tileOptions) => {
  // set largest values if no tile options
  if (!tileOptions) {
    return {
      productNameLines: 2,
      showPrice: true,
      showFlags: true,
      showRatings: true,
      showShippingPass: true
    };
  }

  const { price, itemFlag, productTitle, ratingsReviews, deliveryPass } = tileOptions;

  const productNameLinesValues = {
    off: 0,
    single: 1,
    double: 2
  };

  return {
    productNameLines: productNameLinesValues[productTitle],
    showPrice: _setOffToFalse(price),
    showFlags: _setOffToFalse(itemFlag),
    showRatings: _setOffToFalse(ratingsReviews),
    showShippingPass: _setOffToFalse(deliveryPass)
  };
};

export const _getItemTileHeight = (tileOptionProps, maxCompareValues) => {
  const { productNameLines, showPrice, showRatings, showShippingPass } = tileOptionProps;
  let tileHeight = TILE_BASE_HEIGHT + TILE_TEXT_LINE_HEIGHT * productNameLines;
  if (showPrice) {
    tileHeight += TILE_PRICE_HEIGHT;
  }
  if (showRatings) {
    tileHeight += TILE_STARS_HEIGHT;
  }
  if (showShippingPass) {
    tileHeight += TILE_SHIPPING_PASS_HEIGHT;
  }
  if (maxCompareValues) {
    tileHeight += TILE_PADDING + TILE_TEXT_LINE_HEIGHT * maxCompareValues;
  }

  return tileHeight;
};

export const _getCategoryTileHeight = (titleAlignment) => {
  const titleLines = titleAlignment === "center" ? 1 : 2;
  return TILE_BASE_HEIGHT + TILE_TEXT_LINE_HEIGHT * titleLines;
};

export const _getSlideToShow = (products) => {
  // Slide to show number are required to define height of vertical carousel.
  // the numbers are for product tile or categories tile to show initially.
  return products ? 5 : 7.16;
};

// determine if a particular tile is contained inside the carousel frame
export const _isTileVisible = (frameBoundingRect, tileBoundingRect, isVertical) => {
  if (isVertical) {
    return tileBoundingRect.bottom <= frameBoundingRect.bottom &&
      tileBoundingRect.top >= frameBoundingRect.top;
  }
  return tileBoundingRect.left >= frameBoundingRect.left &&
    tileBoundingRect.right <= frameBoundingRect.right;
};
