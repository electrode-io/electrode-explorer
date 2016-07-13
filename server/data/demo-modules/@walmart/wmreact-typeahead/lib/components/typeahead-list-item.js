"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "TypeaheadListItem",

  propTypes: {
    onMouseEnter: _react2.default.PropTypes.func,
    onMouseLeave: _react2.default.PropTypes.func,
    selected: _react2.default.PropTypes.bool,
    query: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      hover: false
    };
  },
  toggleHover: function toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  },
  onMouseEnter: function onMouseEnter(ev) {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(ev);
    }

    this.toggleHover();
  },
  onMouseLeave: function onMouseLeave(ev) {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(ev);
    }

    this.toggleHover();
  },
  render: function render() {
    var selectedSuffix = this.props.selected || this.state.hover ? " tt-cursor" : "";
    var clsName = "tt-suggestion" + selectedSuffix;
    return _react2.default.createElement(
      "div",
      _extends({}, this.props, {
        className: clsName }),
      _react2.default.createElement(
        "span",
        {
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave,
          style: {
            display: "block",
            marginTop: 0,
            height: "35px",
            padding: "9px 0 10px",
            color: this.state.hover ? "#3da1e0" : "#888",
            fontWeight: "400",
            lineHeight: 1,
            whiteSpace: "nowrap"
          } },
        _react2.default.createElement(
          "strong",
          {
            className: "tt-highlight",
            style: { color: this.state.hover ? "#3da1e0" : "#444" } },
          this.props.query
        ),
        this.props.children.toLowerCase().slice(this.props.query.length)
      )
    );
  }
});