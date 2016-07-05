"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _bannerImage = require("./banner-image");

var _bannerImage2 = _interopRequireDefault(_bannerImage);

var _bannerMessage = require("./banner-message");

var _bannerMessage2 = _interopRequireDefault(_bannerMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A higher-order component to determine which Banner component to display.
@examples
```jsx
<Banner />
```
@component Banner
@import {Banner}
@playground
Banner
```
<Banner />
```
*/

var Banner = function Banner(props) {
  return props.data.image || props.data.mobileImage ? _react2.default.createElement(Banner.Image, props.data) : _react2.default.createElement(Banner.Message, props.data);
};

Banner.displayName = "Banner";

Banner.propTypes = {
  data: _react.PropTypes.object.isRequired
};

// sub-components
Banner.Image = _bannerImage2.default;
Banner.Message = _bannerMessage2.default;

exports.default = Banner;