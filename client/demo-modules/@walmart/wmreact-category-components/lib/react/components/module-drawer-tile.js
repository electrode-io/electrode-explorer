"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _imageUtils = require("@walmart/wmreact-image-utils/lib/utils/image-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IMAGE_SIZE = 144;

var _renderHeading = function _renderHeading(displayTitle, title, url) {
  return !(displayTitle && title) ? null : _react2.default.createElement(
    "div",
    { className: "ModuleDrawerTile-heading" },
    _react2.default.createElement(
      "a",
      { className: "ModuleDrawerTile-heading-link", href: url },
      _react2.default.createElement(
        "span",
        null,
        title
      )
    )
  );
};

/**
A component for displaying a tile containing an image and optionally a title.
@examples
```jsx
<ModuleDrawerTile
  title="TVs",
  url="/browse/electronics/tvs/3944_1060825_447913",
  alt="TVs",
  imageUrl="//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
    "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg",
  categoryId="3944_1060825_447913",
  assetId="b5f4c3d0-d357-11e4-8430-9bb6eb04884d",
  uid="2TXEZx_h" />
```
@component ModuleDrawerTile
@import {ModuleDrawerTile}
@playground
ModuleDrawerTile
```
<ModuleDrawerTile
  title="TVs",
  url="/browse/electronics/tvs/3944_1060825_447913",
  alt="TVs",
  imageUrl="//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
    "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg",
  categoryId="3944_1060825_447913",
  assetId="b5f4c3d0-d357-11e4-8430-9bb6eb04884d",
  uid="2TXEZx_h" />
```
*/

var ModuleDrawerTile = function ModuleDrawerTile(_ref) {
  var displayTitle = _ref.displayTitle;
  var imageUrl = _ref.imageUrl;
  var url = _ref.url;
  var alt = _ref.alt;
  var title = _ref.title;

  // TODO: Replace Image with TorbitImage
  // JIRA: https://jira.walmart.com/browse/CDSFE-1981
  return _react2.default.createElement(
    "div",
    { className: "ModuleDrawerTile" },
    _react2.default.createElement(
      "a",
      { className: "ModuleDrawerTile-link", href: url },
      _react2.default.createElement(_image2.default, {
        src: (0, _imageUtils.checkImageSrc)(imageUrl, IMAGE_SIZE, IMAGE_SIZE),
        className: "ModuleDrawerTile-image",
        imgAlt: alt,
        lazy: true })
    ),
    _renderHeading(displayTitle, title, url)
  );
};

ModuleDrawerTile.displayName = "ModuleDrawer.Tile";

ModuleDrawerTile.propTypes = {
  /**
  Boolean value indicating if title should be displayed
  */
  displayTitle: _react.PropTypes.bool,
  /**
  Image alt text
  */
  alt: _react.PropTypes.string,
  /**
  Image URL
  */
  imageUrl: _react.PropTypes.string.isRequired,
  /**
  Popular category page title
  */
  title: _react.PropTypes.string,
  /**
  Popular category page URL
  */
  url: _react.PropTypes.string.isRequired
};

ModuleDrawerTile.defaultProps = {
  displayTitle: true,
  alt: "",
  title: ""
};

exports.default = ModuleDrawerTile;