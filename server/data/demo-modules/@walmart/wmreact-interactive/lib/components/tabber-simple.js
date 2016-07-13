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

var _button = require("./button");

var _button2 = _interopRequireDefault(_button);

var _tabberControl = require("./tabber-control");

var _tabberControl2 = _interopRequireDefault(_tabberControl);

var _tabberControls = require("./tabber-controls");

var _tabberControls2 = _interopRequireDefault(_tabberControls);

var _tabberContent = require("./tabber-content");

var _tabberContent2 = _interopRequireDefault(_tabberContent);

var _tabberSection = require("./tabber-section");

var _tabberSection2 = _interopRequireDefault(_tabberSection);

var _tabber = require("./tabber");

var _tabber2 = _interopRequireDefault(_tabber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A simple Tabber wrapper
@examples
```jsx
<Tabber.Simple>
  <div title="Foo">
    Foo!
  </div>
  <div title="Bar">
    Bar!
  </div>
</Tabber.Simple>
```
@component Tabber.Simple
@import {Tabber}
@references Tabber
@playground
Tabber.Simple
```
<Tabber.Simple>
  <div title="Foo">
    Foo!
  </div>
  <div title="Bar">
    Bar!
  </div>
</Tabber.Simple>
```
*/

var Simple = function (_React$Component) {
  (0, _inherits3.default)(Simple, _React$Component);

  function Simple() {
    (0, _classCallCheck3.default)(this, Simple);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Simple.prototype.render = function render() {
    return _react2.default.createElement(
      _tabber2.default,
      { activeTabClass: "active", initialActiveTab: this.props.initialActiveTab || 0 },
      _react2.default.createElement(
        _tabberControls2.default,
        null,
        _react2.default.Children.map(this.props.children, function (child, index) {
          return _react2.default.createElement(
            _tabberControl2.default,
            { key: "control" + index },
            _react2.default.createElement(
              _button2.default,
              { badge: true, badgeAlt: true, className: index > 0 ? "m-margin-left" : "" },
              child.props.title
            )
          );
        })
      ),
      _react2.default.createElement(
        _tabberContent2.default,
        { className: "m-margin-top", autoHeight: true },
        _react2.default.Children.map(this.props.children, function (child, index) {
          return _react2.default.createElement(
            _tabberSection2.default,
            { key: index },
            child
          );
        })
      )
    );
  };

  return Simple;
}(_react2.default.Component);
/* eslint global-strict:0, react/no-multi-comp:0 */


exports.default = Simple;


Simple.propTypes = {
  /**
  The number of the initially active tab
  */
  initialActiveTab: _react2.default.PropTypes.number,
  children: _react2.default.PropTypes.node
};

_tabber2.default.Simple = Simple;