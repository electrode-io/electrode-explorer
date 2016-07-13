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

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Swatch display.
@component Swatch
@import {Swatch}
@private
*/

var Swatch = function (_Component) {
  (0, _inherits3.default)(Swatch, _Component);

  function Swatch() {
    (0, _classCallCheck3.default)(this, Swatch);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Swatch.prototype._onClick = function _onClick(event) {
    (0, _wmreactAnalytics.fireUIEvent)(this, event);
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  Swatch.prototype._onMouseOver = function _onMouseOver(event) {
    (0, _wmreactAnalytics.fireUIEvent)(this, event);
    if (this.props.onMouseOver) {
      this.props.onMouseOver(event);
    }
  };

  Swatch.prototype._onMouseOut = function _onMouseOut(event) {
    (0, _wmreactAnalytics.fireUIEvent)(this, event);
    if (this.props.onMouseOut) {
      this.props.onMouseOut(event);
    }
  };

  Swatch.prototype.render = function render() {
    return _react2.default.createElement(
      "button",
      {
        className: "tile-swatch" + (this.props.active ? " active" : ""),
        type: "button",
        onClick: this._onClick.bind(this),
        onMouseOver: this._onMouseOver.bind(this),
        onMouseOut: this._onMouseOut.bind(this),
        title: this.props.title },
      _react2.default.createElement("img", { src: this.props.image,
        alt: this.props.title })
    );
  };

  return Swatch;
}(_react.Component);

exports.default = Swatch;


Swatch.displayName = "Swatch";

Swatch.propTypes = {
  /**
  True if active
  */
  active: _react2.default.PropTypes.bool,
  /**
  The image for the swatch
  */
  image: _react2.default.PropTypes.string,
  /**
  The title of the swatch
  */
  title: _react2.default.PropTypes.string,
  /**
  The click handler
  */
  onClick: _react2.default.PropTypes.func,
  /**
  Mouse over event handler
  */
  onMouseOver: _react2.default.PropTypes.func,
  /**
  Mouse out event handler
  */
  onMouseOut: _react2.default.PropTypes.func
};

Swatch.contextTypes = {
  analytics: _react2.default.PropTypes.object
};