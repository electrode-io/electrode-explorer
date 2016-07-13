"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tableRow = require("./table-row");

var _tableRow2 = _interopRequireDefault(_tableRow);

var _tableCell = require("./table-cell");

var _tableCell2 = _interopRequireDefault(_tableCell);

var _tableBody = require("./table-body");

var _tableBody2 = _interopRequireDefault(_tableBody);

var _tableHead = require("./table-head");

var _tableHead2 = _interopRequireDefault(_tableHead);

var _tableHeader = require("./table-header");

var _tableHeader2 = _interopRequireDefault(_tableHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseClass = _react2.default.createClass({
  displayName: "BaseClass",

  propTypes: {
    light: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.string,
    colGroupClasses: _react2.default.PropTypes.array,
    striped: _react2.default.PropTypes.oneOf(["odd", "even"])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      light: false,
      colGroupClasses: []
    };
  },
  renderColumnGroupClass: function renderColumnGroupClass(columnClass, index) {
    return _react2.default.createElement("col", { className: columnClass, key: index });
  },
  renderColumnGroup: function renderColumnGroup() {
    return _react2.default.createElement(
      "colGroup",
      null,
      this.props.colGroupClasses.map(this.renderColumnGroupClass)
    );
  },
  render: function render() {
    var stripeClass = this.props.striped ? "table-striped-" + (this.props.light ? "light-" : "") + this.props.striped : "";

    var tableClasses = ["table", stripeClass, this.props.className];

    return _react2.default.createElement(
      "table",
      { className: tableClasses.join(" ") },
      this.props.colGroupClasses.length > 0 ? this.renderColumnGroup() : null,
      this.props.children
    );
  }
});

BaseClass.Row = _tableRow2.default;
BaseClass.Cell = _tableCell2.default;
BaseClass.Body = _tableBody2.default;
BaseClass.Head = _tableHead2.default;
BaseClass.Header = _tableHeader2.default;

exports.default = BaseClass;