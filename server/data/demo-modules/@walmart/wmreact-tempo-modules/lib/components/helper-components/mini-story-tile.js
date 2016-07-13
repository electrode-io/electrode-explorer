"use strict";

exports.__esModule = true;
exports._getTorbitUrl = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _wmreactImageUtils = require("@walmart/wmreact-image-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Torbit Image sizes
// Mobile Image Dimensions
var MOBILE_WIDTH_SMALLER = "364";
var MOBILE_WIDTH_LARGER = "738";
var MOBILE_HEIGHT_ALL = "210";

// Desktop Image Dimensions
var DESKTOP_WIDTH_SMALLER = "433";
var DESKTOP_WIDTH_LARGER = "878";
var DESKTOP_HEIGHT_ALL = "250";

/**
Ministory tile
@examples
@component MiniStoryTile
@import {MinistoryStackable.Tile}
@playground
MiniStoryTile
```
<MiniStoryTile
isMobile={false}
isMobileHidden={false}
spot={{
  image: {
    alt: "ph"
    clickThrough: {
      type: "url",
      value: "/"
    },
    src: "http://ll-us-i5.wal.co/dfw/4ff9c6c9-4f61/k2-_d7c7f588-ff11-41de-89a4-e6188bec9a0d.v1.jpg",
    title: "ph",
    width: "433"
  }
}}
/>
```
*/
/**
 * @param  {String} imageUrl image source url
 * @param  {boolean} isMobile whether mobile or desktop
 * @param  {boolean} isSmallerWidth whether oneThird or twoThird
 * @returns {string} Image url with torbit size
 */
var _getTorbitUrl = exports._getTorbitUrl = function _getTorbitUrl(imageUrl, isMobile, isSmallerWidth) {
  var imageWidth = void 0;

  var imageHeight = isMobile ? MOBILE_HEIGHT_ALL : DESKTOP_HEIGHT_ALL;

  if (isSmallerWidth) {
    imageWidth = isMobile ? MOBILE_WIDTH_SMALLER : DESKTOP_WIDTH_SMALLER;
  } else {
    imageWidth = isMobile ? MOBILE_WIDTH_LARGER : DESKTOP_WIDTH_LARGER;
  }

  return (0, _wmreactImageUtils.checkImageSrc)(imageUrl, imageHeight, imageWidth);
};

var MiniStoryTile = function MiniStoryTile(props) {
  var _props$spot$image = props.spot.image;
  var width = _props$spot$image.width;
  var src = _props$spot$image.src;
  var title = _props$spot$image.title;
  var alt = _props$spot$image.alt;
  var uid = _props$spot$image.uid;
  var value = _props$spot$image.clickThrough.value;
  var isMobile = props.isMobile;
  var isMobileHidden = props.isMobileHidden;
  var dataAutomationId = props.dataAutomationId;

  var isSmallerWidth = width === DESKTOP_WIDTH_SMALLER;
  var torbitImageUrl = _getTorbitUrl(src, isMobile, isSmallerWidth);

  var gridClasses = (0, _classnames2.default)("Grid-col", { "u-size-1-2 u-size-1-3-m": isSmallerWidth,
    "u-size-2-3-m": !isSmallerWidth,
    "hide-content-max-m": isMobileHidden
  });

  return _react2.default.createElement(
    "div",
    { className: gridClasses },
    _react2.default.createElement(
      "div",
      { className: "MiniStoryStackable-imageWrapper" },
      _react2.default.createElement(
        _link2.default,
        (0, _extends3.default)({
          "data-uid": uid,
          href: value,
          alt: title
        }, (0, _automationIdUtils.getDataAutomationIdPair)("link", dataAutomationId)),
        _react2.default.createElement(_image2.default, {
          className: "img-hide-alt MiniStoryStackable-image display-block",
          alt: alt,
          src: torbitImageUrl
        })
      )
    )
  );
};

MiniStoryTile.displayName = "MinistoryTile";

MiniStoryTile.propTypes = {
  /**
  story spot image object
  */
  spot: _react.PropTypes.object.isRequired,
  /**
  To load proper image sizes based on mobile or desktop
  */
  isMobile: _react.PropTypes.bool,
  /**
  Should be hidden or visible?
  */
  isMobileHidden: _react.PropTypes.bool,
  /**
   Automation ID base string
   */
  dataAutomationId: _react.PropTypes.string
};

MiniStoryTile.defaultProps = {
  isMobile: true,
  isMobileHidden: false,
  dataAutomationId: ""
};

exports.default = MiniStoryTile;