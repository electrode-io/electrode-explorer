"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@private
*/
var Backdrop = _react2.default.createClass({
  displayName: "Backdrop",

  propTypes: {
    active: _react2.default.PropTypes.bool,
    _onBodyClick: _react2.default.PropTypes.func,
    onClick: _react2.default.PropTypes.func
  },
  getInitialState: function getInitialState() {
    return {
      active: false
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      active: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.setState({ active: nextProps.active });
    }
  },
  _onBodyClick: function _onBodyClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  },
  render: function render() {
    var extras = {
      "active": this.state.active
    };

    return _react2.default.createElement("div", _extends({
      onClick: this.props._onBodyClick,
      className: (0, _classnames2.default)("modal-backdrop", extras),
      ref: "backdrop"
    }, this.props));
  }
});

exports.default = Backdrop;