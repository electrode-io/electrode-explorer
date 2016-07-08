"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

    return _react2.default.createElement("div", (0, _extends3.default)({
      onClick: this.props._onBodyClick,
      className: (0, _classnames2.default)("modal-backdrop", extras),
      ref: "backdrop"
    }, this.props));
  }
});

exports.default = Backdrop;