"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _textTruncate = require("@walmart/wmreact-product-typography/lib/components/text-truncate");

var _textTruncate2 = _interopRequireDefault(_textTruncate);

var _wmreactImageUtils = require("@walmart/wmreact-image-utils");

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Tempo Featured Category Tile
@examples
@component TempoCategoryTile
@import {TempoCategoryTile}
@playground
TempoCategoryTile
```
<TempoCategoryTile
lazy={false}
category = {
  image: {
    assetName: "pop-cat.jpg",
    height: "150",
    assetId: "979ef190-cea5-11e5-8d67-95f4e54a0dde",
    src: "some-image.jpg",
    width: "150",
    size: "8999",
    contentType: "image/jpeg",
    alt: "Wall Art",
    title: "Wall Art",
    uid: "c49vzR0p"
  },
  itemId: null,
  link: {
    clickThrough: {
      type: "url",
      value: "/"
    },
    linkText: "Wall Art",
    title: "Wall Art",
    uid: "f8zCNFYd"
  },
  uid: "Xf_LGiNx"
}
/>
```
*/

var TempoCategoryTile = function TempoCategoryTile(props) {
  var _props$category = props.category;
  var image = _props$category.image;
  var _props$category$link = _props$category.link;
  var value = _props$category$link.clickThrough.value;
  var linkText = _props$category$link.linkText;
  var title = _props$category$link.title;
  var uid = _props$category$link.uid;
  var productImageSrc = _props$category.productImageSrc;
  var className = props.className;
  var hiddenClasses = props.hiddenClasses;
  var lazy = props.lazy;
  var titleAlignment = props.titleAlignment;
  var dataAutomationId = props.dataAutomationId;
  var isMobile = props.isMobile;
  var mobileImageSize = props.mobileImageSize;

  var tileClasses = (0, _classnames2.default)("TempoCategoryTile", className, hiddenClasses);

  var imageSize = isMobile || className === "font-semibold" ? mobileImageSize : 144;
  var contentClass = (0, _classnames2.default)("TempoCategoryTile-tile-content", "TempoCategoryTile-tile-linkText", "text-" + titleAlignment);

  //making one line false for featured categories curated link text.
  var isOneLineLinkText = titleAlignment === "center" && mobileImageSize !== 90;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({ className: tileClasses
    }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId)),
    _react2.default.createElement(
      "div",
      { className: "TempoCategoryTile-tile display-inline-block" },
      _react2.default.createElement(_image2.default, {
        className: "TempoCategoryTile-tile-img",
        alt: image && image.alt || title,
        height: imageSize,
        width: imageSize,
        src: (0, _wmreactImageUtils.checkImageSrc)(productImageSrc || image && image.src, imageSize, imageSize),
        lazy: lazy
      }),
      linkText && _react2.default.createElement(
        "div",
        { className: contentClass },
        _react2.default.createElement(_textTruncate2.default, { line: isOneLineLinkText ? 1 : 2, text: linkText, raf: false })
      ),
      _react2.default.createElement(_link2.default, (0, _extends3.default)({
        className: "TempoCategoryTile-tile-overlay",
        title: title,
        href: value,
        "data-uid": uid
      }, (0, _automationIdUtils.getDataAutomationIdPair)("link", dataAutomationId)))
    )
  );
};

TempoCategoryTile.displayName = "TempoCategoryTile";

TempoCategoryTile.propTypes = {
  category: _react.PropTypes.shape({
    image: _react.PropTypes.shape({
      height: _react.PropTypes.string,
      src: _react.PropTypes.string,
      width: _react.PropTypes.string,
      title: _react.PropTypes.string,
      alt: _react.PropTypes.string
    }),
    link: _react.PropTypes.shape({
      clickThrough: _react.PropTypes.shape({
        type: _react.PropTypes.string,
        value: _react.PropTypes.string
      }),
      linkText: _react.PropTypes.string,
      title: _react.PropTypes.string,
      uid: _react.PropTypes.string
    }),
    productImageSrc: _react.PropTypes.string
  }).isRequired,
  /**
  * Additional classes for styling
  */
  className: _react.PropTypes.string,
  /**
  * to hide tile
  */
  hiddenClasses: _react.PropTypes.string,
  /**
  * Don't load image initially?
  */
  lazy: _react.PropTypes.bool,
  /**
  * Automation ID
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  * Number of lines to trunctate the title to.
  */
  titleAlignment: _react.PropTypes.oneOf(["center", "right", "left"]),
  /**
  * True if on mobile device
  */
  isMobile: _react.PropTypes.bool,
  /**
  * Width/height to use for mobile image
  */
  mobileImageSize: _react.PropTypes.number
};

TempoCategoryTile.defaultProps = {
  className: "",
  hiddenClasses: "",
  lazy: false,
  dataAutomationId: "",
  titleAlignment: "center",
  isMobile: false,
  mobileImageSize: 120
};

exports.default = TempoCategoryTile;