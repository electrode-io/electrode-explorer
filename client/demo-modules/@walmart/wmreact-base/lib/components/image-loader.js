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

var _reactImageloader = require("react-imageloader");

var _reactImageloader2 = _interopRequireDefault(_reactImageloader);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Image loader that manages errors and can display a loading
image.
@examples
```jsx
<ImageLoader src="foo.jpg" size={50} />
```
@component ImageLoader
@import {ImageLoader}
@playground
```
<div>
  <ImageLoader src="http://placehold.it/1000x1000" />
</div>
```
*/

var InstrumentedImageLoader = function (_React$Component) {
  (0, _inherits3.default)(InstrumentedImageLoader, _React$Component);

  function InstrumentedImageLoader() {
    (0, _classCallCheck3.default)(this, InstrumentedImageLoader);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  InstrumentedImageLoader.prototype.render = function render() {
    var _this2 = this;

    var props = {};

    props.onError = function (event) {
      if (_this2.props.onError) {
        _this2.props.onError(event);
      }
      (0, _wmreactAnalytics.fireUIEvent)(_this2, event, { eventType: "image-loader-error" });
    };

    return _react2.default.createElement(_reactImageloader2.default, (0, _extends3.default)({}, this.props, props));
  };

  return InstrumentedImageLoader;
}(_react2.default.Component);
/* eslint prefer-const:0 */


exports.default = InstrumentedImageLoader;


InstrumentedImageLoader.propTypes = {
  onError: _react2.default.PropTypes.func
};

InstrumentedImageLoader.contextTypes = {
  analytics: _react2.default.PropTypes.object
};