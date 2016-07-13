"use strict";

exports.__esModule = true;
exports.AltImageCarousel = exports.AltImageItem = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactCarousel = require("@walmart/wmreact-carousel");

var _wmreactCarousel2 = _interopRequireDefault(_wmreactCarousel);

var _productImageSettings = require("../util/product-image-settings");

var _productImageSettings2 = _interopRequireDefault(_productImageSettings);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var desktop = _productImageSettings2.default.desktop;
var tablet = _productImageSettings2.default.tablet;

var VIDEO_MASK_IMG = "//i5.walmartimages.com/dfwrs/76316474-1f54/k2-_2b7f406f-d5a2-42ee-a13e-c26e877c5ec4.v1.png";

var AltImageItem = exports.AltImageItem = function AltImageItem(_ref) {
  var img = _ref.img;
  var isVideo = _ref.isVideo;
  var rest = (0, _objectWithoutProperties3.default)(_ref, ["img", "isVideo"]);
  return _react2.default.createElement(
    "div",
    rest,
    _react2.default.createElement(_image2.default, { className: "prod-AltImageCarousel-image", src: img.thumb }),
    isVideo && _react2.default.createElement(_image2.default, { src: VIDEO_MASK_IMG,
      className: "prod-AltImageCarousel-image prod-AltImageCarousel-videoThumb"
    })
  );
};

var AltImageCarousel = exports.AltImageCarousel = function AltImageCarousel(_ref2) {
  var handleHover = _ref2.handleHover;
  var handleClick = _ref2.handleClick;
  var activeIndex = _ref2.activeIndex;
  var lastIndex = _ref2.lastIndex;
  var images = _ref2.images;
  var hasVideo = _ref2.hasVideo;
  var videoThumb = _ref2.videoThumb;
  var handleVideoClick = _ref2.handleVideoClick;
  var onSlideChange = _ref2.onSlideChange;


  var responsive = [{
    selectors: ["large", "x-large"],
    settings: (0, _assign2.default)({}, desktop, {
      slideIndex: lastIndex
    })
  }, {
    selectors: ["medium"],
    settings: (0, _assign2.default)({}, tablet, {
      slideIndex: lastIndex
    })
  }];
  return _react2.default.createElement(
    "div",
    { className: "prod-AltImageWrapper" },
    hasVideo && _react2.default.createElement(AltImageItem, {
      isVideo: true,
      className: "prod-AltImageCarousel prod-VideoItem",
      img: { thumb: videoThumb },
      onClick: handleVideoClick
    }),
    _react2.default.createElement(
      _wmreactCarousel2.default,
      (0, _extends3.default)({ responsive: responsive }, {
        afterSlide: onSlideChange
      }),
      images.map(function (img, index) {
        var classNameSuffix = activeIndex === index ? "--active" : "";
        var className = "prod-AltImageCarousel" + classNameSuffix;
        return _react2.default.createElement(AltImageItem, (0, _extends3.default)({
          key: index
        }, { className: className, img: img }, {
          onMouseEnter: function onMouseEnter() {
            return handleHover(true, index);
          },
          onMouseLeave: function onMouseLeave() {
            return handleHover(false, index);
          },
          onClick: function onClick() {
            return handleClick(index);
          }
        }));
      })
    )
  );
};

AltImageCarousel.propTypes = {
  images: _react.PropTypes.array.isRequired,
  handleHover: _react.PropTypes.func.isRequired,
  handleClick: _react.PropTypes.func.isRequired,
  activeIndex: _react.PropTypes.number.isRequired,
  hasVideo: _react.PropTypes.bool,
  videoThumb: _react.PropTypes.string,
  handleVideoClick: _react.PropTypes.func
};

AltImageCarousel.defaultProps = {
  hasVideo: false,
  videoThumb: "",
  handleVideoClick: function handleVideoClick() {}
};

AltImageCarousel.displayName = "AltImageCarousel";