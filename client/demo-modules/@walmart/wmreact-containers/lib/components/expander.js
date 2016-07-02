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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
An expandable/contractable container.
@examples
```jsx
<Expander expandText="Expand">
  <h1>Expanded!</h1>
</Expander>
```
@component Expander
@import {Expander}
@playground
Expander
```
<Expander expandText="Expand">
  <h1>Expanded!</h1>
</Expander>
```
*/

var Expander = function (_Component) {
  (0, _inherits3.default)(Expander, _Component);

  function Expander(props) {
    (0, _classCallCheck3.default)(this, Expander);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      expanded: props.expanded || false
    };
    _this._onExpand = _this._onExpand.bind(_this);
    return _this;
  }

  Expander.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.expanded) {
      this.setState({ expanded: nextProps.expanded });
    }
  };

  Expander.prototype._onExpand = function _onExpand(e) {
    e.preventDefault();
    this.setState({ expanded: !this.state.expanded });
  };

  Expander.prototype.render = function render() {
    var extras = {
      "expanded": this.state.expanded
    };

    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: (0, _classnames2.default)("expander", extras, this.props.hidden ? "hide-content" : "", this.props.className)
      }, this.props),
      _react2.default.createElement(
        "a",
        { className: "expander-toggle", href: "#", onClick: this._onExpand },
        this.props.expandText
      ),
      _react2.default.createElement(
        "div",
        { className: "expander-content module" },
        this.props.children
      )
    );
  };

  return Expander;
}(_react.Component);

Expander.displayName = "Expander";

Expander.propTypes = {
  /**
  True if the container is expanded
  */
  expanded: _react2.default.PropTypes.bool,
  /**
  The text for the expand control
  */
  expandText: _react2.default.PropTypes.node,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

Expander.defaultProps = {
  expanded: false
};

exports.default = Expander;