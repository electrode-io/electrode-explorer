"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _wmreactImageUtils = require("@walmart/wmreact-image-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IMAGE_SIZE = 300;

/**
Product theme tile.
@examples
```
<ProductThemeTile
  title="Demo theme"
  imageSrc="http://placehold.it/300X300"
  url="www.walmart.com/tp/mini-fridge"
/>
```

@component ProductThemeTile
@import {ProductThemeTile}
@playground
ProductThemeTile
```
<ProductThemeTile
  title="Demo theme"
  imageSrc="http://placehold.it/300X300"
  url="www.walmart.com/tp/mini-fridge"
/>
```
*/

var ProductThemeTile = function ProductThemeTile(props) {
  var url = props.url;
  var imageSrc = props.imageSrc;
  var title = props.title;

  return _react2.default.createElement(
    "div",
    { className: "theme-tile-container Tile" },
    _react2.default.createElement(_link2.default, { className: "Tile-linkOverlay", href: url }),
    _react2.default.createElement(_image2.default, { className: "Tile-img", size: IMAGE_SIZE,
      src: (0, _wmreactImageUtils.checkImageSrc)(imageSrc, IMAGE_SIZE, IMAGE_SIZE) }),
    _react2.default.createElement(
      "span",
      { className: "theme-tile-heading display-block pull-left font-normal" },
      title
    )
  );
};

ProductThemeTile.propTypes = {
  /**
  Image URL
  */
  imageSrc: _react2.default.PropTypes.string.isRequired,
  /**
  Theme title
  */
  title: _react2.default.PropTypes.string.isRequired,
  /**
  Theme page url
  */
  url: _react2.default.PropTypes.string.isRequired
};

exports.default = ProductThemeTile;