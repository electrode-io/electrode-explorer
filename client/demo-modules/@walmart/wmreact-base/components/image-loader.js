"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactImageloader = require("react-imageloader");

var _reactImageloader2 = _interopRequireDefault(_reactImageloader);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint prefer-const:0 */


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
  _inherits(InstrumentedImageLoader, _React$Component);

  function InstrumentedImageLoader() {
    _classCallCheck(this, InstrumentedImageLoader);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InstrumentedImageLoader).apply(this, arguments));
  }

  _createClass(InstrumentedImageLoader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = {};

      props.onError = function (event) {
        if (_this2.props.onError) {
          _this2.props.onError(event);
        }
        (0, _wmreactAnalytics.fireUIEvent)(_this2, event, { eventType: "image-loader-error" });
      };

      return _react2.default.createElement(_reactImageloader2.default, _extends({}, this.props, props));
    }
  }]);

  return InstrumentedImageLoader;
}(_react2.default.Component);

exports.default = InstrumentedImageLoader;


InstrumentedImageLoader.propTypes = {
  onError: _react2.default.PropTypes.func
};

InstrumentedImageLoader.contextTypes = {
  analytics: _react2.default.PropTypes.object
};