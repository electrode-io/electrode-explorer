"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable max-len*/

/**
A component for displaying a single image banner that is responsive
@examples
```jsx
const data = {
  backgroundColor: "#ddd",
  mobileImage: {
    clickThrough: {
      value: "http://walmart.com"
    },
    title: "Image",
    src: "http://i5.walmartimages.com/dfw/4ff9c6c9-a732/k2-_3965685c-a835-4eee-b0c9-3154910191f9.v1.jpg",
    alt: "Image"
  }
};

React.render(<Banner.Image {...data} />, mountNode);
```
@component Banner.Image
@import {Banner}
@references Banner
@playground
```
const data = {
  backgroundColor: "#ddd",
  mobileImage: {
    clickThrough: {
      value: "http://walmart.com"
    },
    title: "Image",
    src: "http://i5.walmartimages.com/dfw/4ff9c6c9-a732/k2-_3965685c-a835-4eee-b0c9-3154910191f9.v1.jpg",
    alt: "Image"
  }
};

React.render(<Banner.Image {...data} />, mountNode);
```
*/

/*eslint-enable max-len*/

var BannerImage = function BannerImage(_ref) {
  var image = _ref.image;
  var mobileImage = _ref.mobileImage;
  var moduleType = _ref.moduleType;
  var backgroundColor = _ref.backgroundColor;

  image = mobileImage || image;
  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({ className: "BannerImage",
      style: { backgroundColor: backgroundColor }
    }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process), {
      __self: undefined
    }),
    !!image && _react2.default.createElement(
      "a",
      { href: image.clickThrough.value, title: image.title, __self: undefined
      },
      _react2.default.createElement("img", {
        className: "BannerImage-image",
        src: image.src,
        alt: image.alt,
        hidefocus: "true", __self: undefined
      })
    )
  );
};

BannerImage.displayName = "Banner.Image";

BannerImage.propTypes = {
  backgroundColor: _react.PropTypes.string,
  image: _react.PropTypes.object,
  mobileImage: _react.PropTypes.object,
  moduleType: _react.PropTypes.string
};

BannerImage.defaultProps = {
  backgroundColor: "",
  image: null,
  mobileImage: null,
  moduleType: _categoryUtils.moduleTypes.VALUE_OF_DAY_MESSAGING
};

exports.default = BannerImage;