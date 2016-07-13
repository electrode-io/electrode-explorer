"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _inherits3.default)(Separator, _Component);

  function Separator() {
    (0, _classCallCheck3.default)(this, Separator);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Separator.prototype.render = function render() {
    var _classes;

    var classes = (_classes = {
      "separator": true
    }, _classes["separator-" + this.props.type] = true, _classes);

    return _react2.default.createElement("hr", { className: (0, _classnames2.default)(classes, this.props.hidden ? "hide-content" : "") });
  };

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