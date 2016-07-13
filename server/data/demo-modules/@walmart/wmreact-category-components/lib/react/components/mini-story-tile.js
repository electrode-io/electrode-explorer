"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _wmreactImageUtils = require("@walmart/wmreact-image-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Torbit Image sizes
// Mobile Image Dimensions
var MOBILE_WIDTH_SMALLER = 364;
var MOBILE_WIDTH_LARGER = 738;
var MOBILE_HEIGHT_ALL = 210;

// Desktop Image Dimensions
var DESKTOP_WIDTH_SMALLER = 433;
var DESKTOP_WIDTH_LARGER = 878;
var DESKTOP_HEIGHT_ALL = 250;

/*eslint-disable max-len */
/**
Ministory tile
@examples
```jsx
<MinistoryTile
  uid="JC7k1RuY",
  assetId="3201753",
  url="http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
  imageUrl="http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
  width=433,
  alt="Windows 10"
/>
```
@component MinistoryTile
@import {MinistoryStackable.Tile}
@playground
MinistoryTile
```
<MinistoryTile
  uid="JC7k1RuY",
  assetId="3201753",
  url="http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
  imageUrl="http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
  width=433,
  alt="Windows 10"
/>
```
*/
/*eslint-enable max-len */

var MinistoryTile = function (_Component) {
  (0, _inherits3.default)(MinistoryTile, _Component);

  function MinistoryTile() {
    (0, _classCallCheck3.default)(this, MinistoryTile);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  /**
   * @param  {String} imageUrl image source url
   * @param  {boolean} isMobile whether mobile or desktop
   * @param  {boolean} isSmallerWidth whether oneThird or twoThird
   * @return {String} torbitized Image url
   */

  MinistoryTile.prototype._getTorbitUrl = function _getTorbitUrl(imageUrl, isMobile, isSmallerWidth) {
    var imageHeight = void 0;
    var imageWidth = void 0;

    imageHeight = isMobile ? MOBILE_HEIGHT_ALL : DESKTOP_HEIGHT_ALL;

    if (isSmallerWidth) {
      imageWidth = isMobile ? MOBILE_WIDTH_SMALLER : DESKTOP_WIDTH_SMALLER;
    } else {
      imageWidth = isMobile ? MOBILE_WIDTH_LARGER : DESKTOP_WIDTH_LARGER;
    }

    return (0, _wmreactImageUtils.checkImageSrc)(imageUrl, imageHeight, imageWidth);
  };

  MinistoryTile.prototype.render = function render() {
    var _props = this.props;
    var spot = (0, _objectWithoutProperties3.default)(_props, []);
    var isMobile = _props.isMobile;
    var isHidden = _props.isHidden;

    var isSmallerWidth = spot.width === DESKTOP_WIDTH_SMALLER;
    var torbitImageUrl = this._getTorbitUrl(spot.imageUrl, isMobile, isSmallerWidth);

    var gridClasses = (0, _classnames2.default)({
      "Grid-col": true,
      "u-size-1-2 u-size-1-3-m": isSmallerWidth,
      "u-size-2-3-m": !isSmallerWidth,
      "hide-content-max-m": isHidden
    });

    return _react2.default.createElement(
      "div",
      { className: gridClasses },
      _react2.default.createElement(
        "div",
        { className: "ministory-stackable-image-wrapper" },
        _react2.default.createElement(
          _link2.default,
          { href: spot.url, title: spot.title || spot.alt },
          _react2.default.createElement(_image2.default, {
            className: "img-hide-alt ministory-stackable-image",
            alt: spot.alt,
            src: torbitImageUrl
          })
        )
      )
    );
  };

  return MinistoryTile;
}(_react.Component);

exports.default = MinistoryTile;


MinistoryTile.displayName = "MinistoryTile";

MinistoryTile.propTypes = {
  /**
  Image url
  */
  imageUrl: _react.PropTypes.string.isRequired,
  /**
  image width: 433 => oneThird, 878 => twoThird
  */
  width: _react.PropTypes.number.isRequired,
  /**
  target url
  */
  url: _react.PropTypes.string.isRequired,
  /**
  image title
  */
  title: _react.PropTypes.string,
  /**
  image alt text
  */
  alt: _react.PropTypes.string,
  /**
  To load proper image sizes based on mobile or desktop
  */
  isMobile: _react.PropTypes.bool,
  /**
  Should be hidden or visible?
  */
  isHidden: _react.PropTypes.bool
};

MinistoryTile.defaultProps = {
  isMobile: true,
  isHidden: false,
  alt: "",
  title: ""
};