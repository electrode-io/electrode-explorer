"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactCarousel = require("@walmart/wmreact-carousel");

var _wmreactCarousel2 = _interopRequireDefault(_wmreactCarousel);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _mediaSelector = require("@walmart/wmreact-layout/lib/components/media-selector");

var _mediaSelector2 = _interopRequireDefault(_mediaSelector);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _productImageSettings = require("../util/product-image-settings");

var _productImageSettings2 = _interopRequireDefault(_productImageSettings);

var _altImageCarousel = require("./alt-image-carousel");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 Displays a list of product images for a given product. See below for how this component renders
 at each breakpoint.
 - breakpoint-xs: Primary image as a carousel, no center mode, no alt images
 - breakpoint-s: Primary image as a carousel, center mode, no alt images
 - breakpoint-m: Single primary image, all alt images as horizontal carousel.
  Display up to 4 carousel images per page.
 - breakpoint-l and above:  Single primary image, all alt images as vertical carousel.
  Display up to 5 carousel images per page.


 For example this is how we use this component.

 ```jsx
 <ProductImage images={imageArray}/>
 ```

 @import {ProductImage}
 @flags noVisibleRender
 @component ProductImage
 @playground
 ProductImage
 ```
 <ProductImage images={[
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-c448/" +
      "k2-_8f9cf353-40ac-44ad-9446-7f88f6ce6c53.v4.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-1f75/" +
      "k2-_92d75473-2262-4b2d-92b0-ed2a4df937de.v4.jpg",
      alt: "Test Image"
    },
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-5c41/" +
      "k2-_defcc89d-84e8-4dde-b7aa-03de2c6f1986.v1.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-6f25/" +
      "k2-_091169c1-97a9-4afc-8b26-5d766c9a92f0.v1.jpg",
      alt: "Test Image"
    },
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-c448" +
      "/k2-_8f9cf353-40ac-44ad-9446-7f88f6ce6c53.v4.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-1f75/" +
      "k2-_92d75473-2262-4b2d-92b0-ed2a4df937de.v4.jpg",
      alt: "Test Image"
    },
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-5c41/" +
      "k2-_defcc89d-84e8-4dde-b7aa-03de2c6f1986.v1.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-6f25/" +
      "k2-_091169c1-97a9-4afc-8b26-5d766c9a92f0.v1.jpg",
      alt: "Test Image"
    },
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-c448/" +
      "k2-_8f9cf353-40ac-44ad-9446-7f88f6ce6c53.v4.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-1f75/" +
      "k2-_92d75473-2262-4b2d-92b0-ed2a4df937de.v4.jpg",
      alt: "Test Image"
    },
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-5c41/" +
      "k2-_defcc89d-84e8-4dde-b7aa-03de2c6f1986.v1.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-6f25/" +
      "k2-_091169c1-97a9-4afc-8b26-5d766c9a92f0.v1.jpg",
      alt: "Test Image"
    }
  ]}/>
 ```
 */

var ProductImage = function (_React$Component) {
  (0, _inherits3.default)(ProductImage, _React$Component);

  function ProductImage(props) {
    (0, _classCallCheck3.default)(this, ProductImage);


    // set initial state

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {
      mounted: false
    };
    _this._handleHeroImageClick = _this._handleHeroImageClick.bind(_this);
    return _this;
  }

  ProductImage.prototype.componentDidMount = function componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({
      mounted: true
    });
    /* eslint-enable react/no-did-mount-set-state */
  };

  ProductImage.prototype.renderHeroImageCarousel = function renderHeroImageCarousel(_ref) {
    var _this2 = this;

    var activeIndex = _ref.activeIndex;
    var handleClick = _ref.handleClick;
    var images = _ref.images;

    return _react2.default.createElement(
      _wmreactCarousel2.default,
      (0, _extends3.default)({}, _productImageSettings2.default.mobile, {
        slideIndex: activeIndex,
        afterSlide: function afterSlide(slide) {
          return handleClick(slide);
        }
      }),
      images.map(function (_ref2, index) {
        var main = _ref2.main;

        return _react2.default.createElement(
          "div",
          { key: index },
          _react2.default.createElement(_image2.default, {
            onClick: _this2._handleHeroImageClick,
            className: "prod-HeroImageCarousel-image",
            src: main })
        );
      })
    );
  };

  ProductImage.prototype.renderAltImageCarousel = function renderAltImageCarousel(_ref3) {
    var images = _ref3.images;
    var handleHover = _ref3.handleHover;
    var handleClick = _ref3.handleClick;
    var activeIndex = _ref3.activeIndex;
    var lastIndex = _ref3.lastIndex;
    var onSlideChange = _ref3.onSlideChange;
    var hasVideo = _ref3.hasVideo;
    var videoThumb = _ref3.videoThumb;

    return _react2.default.createElement(_altImageCarousel.AltImageCarousel, { images: images, handleHover: handleHover, handleClick: handleClick, activeIndex: activeIndex, lastIndex: lastIndex,
      onSlideChange: onSlideChange, hasVideo: hasVideo, videoThumb: videoThumb });
  };

  ProductImage.prototype._hasImages = function _hasImages(images) {
    return images && images.length > 0;
  };

  ProductImage.prototype._hasMainImage = function _hasMainImage(image) {
    return image && image.main && image.main !== "";
  };

  ProductImage.prototype._getPrimaryImage = function _getPrimaryImage(_ref4) {
    var images = _ref4.images;
    var primaryImage = _ref4.primaryImage;
    var activeIndex = _ref4.activeIndex;

    if (primaryImage && primaryImage !== "") {
      // if primaryImage property is set, always display it
      return primaryImage;
    } else if (this._hasImages(images) && this._hasMainImage(images[activeIndex])) {
      // else read the image from the activeIndex
      return images[activeIndex].main;
    } else {
      // if none of the images exists, return an empty string.
      // TODO: must return a static no image
      // JIRA: https://jira.walmart.com/browse/GPRDT-962
      return "";
    }
  };

  ProductImage.prototype._handleHeroImageClick = function _handleHeroImageClick() {
    var _props = this.props;
    var activeIndex = _props.activeIndex;
    var handleHeroImageClick = _props.handleHeroImageClick;

    handleHeroImageClick(activeIndex);
  };

  ProductImage.prototype.render = function render() {
    var primaryImage = this._getPrimaryImage(this.props);

    var heroImage = _react2.default.createElement(
      "div",
      { className: "prod-HeroImage" },
      _react2.default.createElement(_image2.default, { className: "prod-HeroImage-image",
        onClick: this._handleHeroImageClick,
        src: primaryImage })
    );

    var _classNames = (0, _classnames2.default)("prod-ProductImage", this.props.className);
    if (!this.state.mounted) {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: (0, _classnames2.default)(_classNames, "prod-LoadingCarousel-m") },
          heroImage
        ),
        _react2.default.createElement(
          "div",
          { className: "prod-ProductImage prod-LoadingCarousel-s" },
          _react2.default.createElement(_image2.default, {
            className: "prod-HeroImageCarousel-image",
            src: primaryImage
          })
        )
      );
    }

    return _react2.default.createElement(
      "div",
      { className: _classNames },
      _react2.default.createElement(
        _mediaSelector2.default,
        { mode: "delete" },
        _react2.default.createElement(
          _layout2.default,
          {
            visibleWidths: ["large", "x-large"],
            "large-sizes": [2, 10] },
          this.renderAltImageCarousel(this.props),
          heroImage
        ),
        _react2.default.createElement(
          "div",
          { visibleWidths: ["medium"] },
          heroImage,
          this.renderAltImageCarousel(this.props)
        ),
        _react2.default.createElement(
          _layout2.default,
          {
            visibleWidths: ["x-small", "small"],
            "large-sizes": [12] },
          this.renderHeroImageCarousel(this.props)
        )
      )
    );
  };

  return ProductImage;
}(_react2.default.Component);

ProductImage.displayName = "ProductImage";

ProductImage.propTypes = {
  /**
   An array of product alt images.
   */
  images: _react.PropTypes.array.isRequired,
  /**
   An array of product alt images.
   */
  primaryImage: _react.PropTypes.string.isRequired,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  className: _react.PropTypes.string,
  handleHover: _react.PropTypes.func,
  handleClick: _react.PropTypes.func,
  handleHeroImageClick: _react.PropTypes.func,
  onSlideChange: _react.PropTypes.func,
  activeIndex: _react.PropTypes.number,
  lastIndex: _react.PropTypes.number
};

ProductImage.defaultProps = {
  images: [],
  primaryImage: "",
  className: "",
  activeIndex: 0,
  lastIndex: 0,
  handleHover: function handleHover() {},
  handleClick: function handleClick() {},
  handleHeroImageClick: function handleHeroImageClick() {},
  onSlideChange: function onSlideChange() {}
};

exports.default = ProductImage;