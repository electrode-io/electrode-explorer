"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
A seperator component.
@examples
```jsx
<Separator/>
```

And some variations:

```jsx
<Separator type="heavy"/>
<Separator type="alt"/>
<Separator type="dotted"/>
```
@component Separator
@import {Separator}
@playground
Separator
```
<div>
  <Separator/>
  <Separator type="heavy"/>
  <Separator type="alt"/>
  <Separator type="dotted"/>
</div>
```
*/

var Separator = function (_Component) {
  _inherits(Separator, _Component);

  function Separator() {
    _classCallCheck(this, Separator);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Separator).apply(this, arguments));
  }

  _createClass(Separator, [{
    key: "render",
    value: function render() {
      var classes = _defineProperty({
        "separator": true
      }, "separator-" + this.props.type, true);

      return _react2.default.createElement("hr", { className: (0, _classnames2.default)(classes, this.props.hidden ? "hide-content" : "") });
    }
  }]);

  return Separator;
}(_react.Component);

Separator.displayName = "Separator";

Separator.propTypes = {
  /**
  The type of separator
  */
  type: _react.PropTypes.oneOf(["normal", "heavy", "alt", "dotted"]),
  hidden: _react.PropTypes.bool
};

Separator.defaultProps = {
  type: "normal",
  hidden: false
};

exports.default = Separator;