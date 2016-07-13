import React, { PropTypes, Component } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import ExecutionEnvironment from "exenv";

import { getCarouselDecorators }
  from "@walmart/wmreact-carousel/lib/components/carousel-decorators";
import FeaturedElementCarousel
  from "@walmart/wmreact-carousel/lib/components/featured-element-carousel";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import fireDataEvent from "@walmart/wmreact-analytics/lib/helpers/fire-data-event";

import ModuleHeader from "./module-header";
import CarouselFirstTile from "./carousel-first-tile";
import TempoItemTile from "./tempo-item-tile";
import TempoCategoryTile from "./tempo-category-tile";
import validCategoryTile from "../../helpers/category-tile-helpers";

const SLIDE_WIDTH_SMALL = { slideWidth: "136px", initialSlideWidth: 136 };
const SLIDE_WIDTH_LARGE = { slideWidth: "168px", initialSlideWidth: 168 };
const CELL_SPACING_SMALL = { cellSpacing: 8 };
const CELL_SPACING_LARGE = { cellSpacing: 12 };

const HORIZONTAL_CAROUSEL_PROPS = {
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

const VERTICAL_CAROUSEL_PROPS = {
  slidesToScroll: "auto",
  ...CELL_SPACING_LARGE
};

const PAGINATOR_STYLE = { top: 84 };

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

export const _getItemTileHeight = (tileOptionProps) => {
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

class TempoTileCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lazyLoadIndex: props.isMobile ? 6 : 8
    };
    this.analyticsIds = []; // track rendered products or categories for analytics

    this._loadTiles = this._loadTiles.bind(this);
    this._fireModuleView = this._fireModuleView.bind(this);
  }

  _renderFirstTile(
    vertical,
    { firstTile, themeButton, themeButtonColor, themeTextColor },
    automationId
  ) {
    if (firstTile && !vertical) {
      this.analyticsIds.push(null);
      const props = {
        themeButton: {
          buttonTextColor: themeTextColor,
          themeButtonColor,
          ...themeButton
        },
        dataAutomationId: `${automationId}-firstTile`,
        ...firstTile
      };

      return [<CarouselFirstTile key={0} {...props} />];
    }
  }

  _renderItemTiles(props, lazyLoadIndex, automationId, tileOptionProps) { // eslint-disable-line max-params, max-len
    const {
      moduleData: {
        configs,
        configs: {
          products
        },
        moduleId
      },
      userLoggedIn,
      lowQuantityThreshold,
      vertical,
      isMobile
    } = props;

    const tileProps = {
      userLoggedIn,
      lowQuantityThreshold,
      isMobile,
      moduleId,
      ...tileOptionProps
    };

    // reset instance variable
    this.analyticsIds = [];
    const tiles = this._renderFirstTile(vertical, configs, automationId) || [];
    let renderedTileIndex = tiles.length;

    products.forEach((product) => {
      if (product.canAddToCart) {
        this.analyticsIds.push(product.id.productId);
        if (lazyLoadIndex !== null && renderedTileIndex >= lazyLoadIndex) {
          tiles.push(null);
        } else {
          tiles.push(
            <TempoItemTile
              key={renderedTileIndex}
              dataAutomationId={`${automationId}-itemTile-${renderedTileIndex}`}
              productData={product}
              {...tileProps}
              vertical={vertical}
            />
          );
        }
        renderedTileIndex++;
      }
    });

    return tiles;
  }

  _renderCategoryTiles(props, lazyLoadIndex, automationId) {
    const {
      moduleData: {
        configs,
        configs: {
          tiles: categories,
          titleAlignment
        }
      },
      vertical,
      isMobile
    } = props;

    const tileProps = {
      titleAlignment,
      isMobile
    };

    // reset instance variable
    this.analyticsIds = [];
    const tiles = this._renderFirstTile(vertical, configs, automationId) || [];
    let renderedTileIndex = tiles.length;

    categories.forEach((category) => {
      // don't render tiles with no image or link
      if (validCategoryTile(category)) {
        this.analyticsIds.push(category.link.uid);
        if (lazyLoadIndex !== null && renderedTileIndex >= lazyLoadIndex) {
          tiles.push(null);
        } else {
          tiles.push(
            <TempoCategoryTile
              key={renderedTileIndex}
              dataAutomationId={`${automationId}-categoryTile-${renderedTileIndex}`}
              category={category}
              className={classNames({"font-semibold": vertical})}
              {...tileProps}
            />
          );
        }
        renderedTileIndex++;
      }
    });

    return tiles;
  }

  // Load all tiles once user interacts with carousel
  _loadTiles() {
    if (this.state.lazyLoadIndex !== null) {
      this.setState({ lazyLoadIndex: null });
    }
  }

  // count number of slides that are currently visible for analytics
  _getVisibleTileCount(isVertical) {
    const carouselNode = ReactDOM.findDOMNode(this.refs.carousel);
    const carouselFrameNode = carouselNode.querySelector(".slider-frame");
    const carouselTiles = carouselFrameNode.querySelectorAll(".slider-slide");
    const frameBoundingRect = carouselFrameNode.getBoundingClientRect();

    let visibleTileCount = 0;
    for (let index = 0; index < carouselTiles.length; index++) {
      const tileNode = carouselTiles.item(index);
      if (_isTileVisible(frameBoundingRect, tileNode.getBoundingClientRect(), isVertical)) {
        ++visibleTileCount;
      } else if (visibleTileCount) {
        // after all visible tiles have been counted stop iteration
        break;
      }
    }
    return visibleTileCount;
  }

  // used to stub fireDataEvent in tests
  _fireDataEventWrapper(data) {
    return fireDataEvent(this, "module_view", data);
  }

  // fire analytics event with required data on page of tiles
  _fireModuleView(index) {
    const { moduleData: { moduleId }, vertical } = this.props;
    const visibleTileCount = this._getVisibleTileCount(vertical);
    const page = Math.floor(index / visibleTileCount) + 1;
    const hasFirstTile = this.analyticsIds[0] === null;
    let idIndex = index;
    let totalResults = this.analyticsIds.length;

    // skip first tile for analytics data
    if (hasFirstTile) {
      if (index === 0) {
        idIndex = 1;
      }
      totalResults--;
    }
    const visibleResults = this.analyticsIds.slice(idIndex, index + visibleTileCount);

    const plData = {
      pn: page,
      or: visibleResults,
      ni: visibleResults.length,
      tr: totalResults
    };

    this._fireDataEventWrapper({ moduleId, plData });
  }
/* eslint-disable  max-statements */
  render() {
    const {
      moduleData: {
        configs: {
          title,
          titleColor,
          themeColor,
          themeImage,
          seeAllLink,
          seeAllLinkHexCode,
          products,
          tiles,
          tileOptions,
          titleAlignment
        },
        moduleId,
        type
      },
      dataAutomationId,
      vertical,
      className,
      isMobile,
      zoneId
    } = this.props;

    // Don't bother rendering if no products or categories
    if ((!products || !products.length) && (!tiles || !tiles.length)) {
      return null;
    }

    const { lazyLoadIndex } = this.state;

    const wrapperProps = {
      backgroundColor: themeColor,
      backgroundImage: themeImage ? `url(${themeImage.src})` : null,
      dataModuleId: moduleId,
      dataModuleType: type,
      dataAutomationId
    };

    const newAutomationId = `${dataAutomationId}-${type}`;

    const headerProps = {
      headerTitle: title,
      headerTitleColor: titleColor,
      themeButton: {
        buttonTextColor: seeAllLinkHexCode,
        ...seeAllLink
      },
      dataAutomationId: `${newAutomationId}-header`
    };

    HORIZONTAL_CAROUSEL_PROPS.decorators = getCarouselDecorators({
      dataAutomationId: newAutomationId,
      rightBtnStyle: PAGINATOR_STYLE,
      leftBtnStyle: PAGINATOR_STYLE
    });

    VERTICAL_CAROUSEL_PROPS.decorators = getCarouselDecorators({
      dataAutomationId: newAutomationId,
      vertical
    });

    // set initial carousel props based on device type
    HORIZONTAL_CAROUSEL_PROPS.breakpoint = isMobile ? "small" : "large";

    const tempoTileClass = vertical ? "TempoTileCarousel--vertical" : "TempoTileCarousel";

    const tileOptionProps = products ? _setTileOptionProps(tileOptions) : null;
    const tileHeight = products ? _getItemTileHeight(tileOptionProps) :
      _getCategoryTileHeight(titleAlignment);

    VERTICAL_CAROUSEL_PROPS.slidesToShow = _getSlideToShow(products);

    const CAROUSEL_PROPS = vertical ? {...VERTICAL_CAROUSEL_PROPS} : {...HORIZONTAL_CAROUSEL_PROPS};

    return (
      <CollectorContext moduleId={moduleId} zoneId={zoneId} ref="carousel">
        <FeaturedElementCarousel
          className={classNames(className, tempoTileClass, `tile--height${tileHeight}`, {
            "is-loading": !ExecutionEnvironment.canUseDOM
          })}
          vertical={vertical}
          {...wrapperProps}
          {...CAROUSEL_PROPS}
          header={<ModuleHeader {...headerProps} />}
          beforeSlide={this._loadTiles}
          afterSlide={this._fireModuleView}>
          {products ?
            this._renderItemTiles(this.props, lazyLoadIndex, newAutomationId, tileOptionProps) :
            this._renderCategoryTiles(this.props, lazyLoadIndex, newAutomationId)}
        </FeaturedElementCarousel>
      </CollectorContext>
    );
  }
  /* eslint-enable  max-statements*/
}

TempoTileCarousel.displayName = "TempoTileCarousel";

TempoTileCarousel.propTypes = {
  /**
  * Data coming from Tempo and IRO via Quimby to Apply to the Module
  */
  moduleData: PropTypes.shape({
    configs: PropTypes.shape({
      title: PropTypes.string,
      titleColor: PropTypes.string,
      themeColor: PropTypes.string,
      themeImage: PropTypes.object,
      firstTile: PropTypes.object,
      themeButton: PropTypes.object,
      themeButtonColor: PropTypes.string,
      themeTextColor: PropTypes.string,
      seeAllLink: PropTypes.object,
      seeAllLinkHexCode: PropTypes.string,
      tileOptions: PropTypes.object,
      products: PropTypes.array,
      tiles: PropTypes.array,
      titleAlignment: PropTypes.string
    }).isRequired,
    moduleId: PropTypes.string,
    type: PropTypes.string
  }).isRequired,
  /**
  * Whether or not user is logged in. Used in tiles for submap logic.
  */
  userLoggedIn: PropTypes.bool,
  /**
  * Threshold at which to display the low quantity flag in item tiles.
  */
  lowQuantityThreshold: PropTypes.number,
  /**
  * Whether or not the carousel is vertical.
  */
  vertical: PropTypes.bool,
  /**
  * Whether or not the device has type mobile.
  */
  isMobile: PropTypes.bool,
  /**
  * ID used to identify the component in automation tests.
  */
  dataAutomationId: PropTypes.string,
  /**
  * Any additional classes to add for styling purposes
  */
  className: PropTypes.string,

  /**
  * Zone ID for analytics
  */
  zoneId: PropTypes.number
};

TempoTileCarousel.defaultProps = {
  userLoggedIn: false,
  lowQuantityThreshold: 7,
  vertical: false,
  isMobile: false,
  dataAutomationId: "",
  className: "",
  zoneId: 0
};

TempoTileCarousel.contextTypes = {
  analytics: PropTypes.object
};

export default TempoTileCarousel;
