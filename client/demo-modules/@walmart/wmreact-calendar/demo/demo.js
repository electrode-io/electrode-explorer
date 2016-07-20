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

var _index = require("../bundle.min");

require("./demo.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Demo = function (_React$Component) {
  (0, _inherits3.default)(Demo, _React$Component);

  function Demo(props) {
    (0, _classCallCheck3.default)(this, Demo);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {
      firstDateField: null,
      secondDateField: null,
      secondFlyoutOpen: false
    };
    return _this;
  }

  Demo.prototype.handleFirstDateField = function handleFirstDateField(date) {
    this.setState({
      firstDateField: date
    });
  };

  Demo.prototype.handleSecondDateField = function handleSecondDateField(date) {
    this.setState({
      secondDateField: date,
      secondFlyoutOpen: date === this.state.date
    });
  };

  Demo.prototype.render = function render() {
    var _state = // Only second example is controlled
    this.state;
    var firstDateField = _state.firstDateField;
    var secondDateField = _state.secondDateField;
    var secondFlyoutOpen = _state.secondFlyoutOpen;

    return _react2.default.createElement(
      "div",
      { className: "demo" },
      _react2.default.createElement(
        "div",
        { className: "example" },
        "Uncontrolled example: ",
        firstDateField,
        _react2.default.createElement("br", null),
        _react2.default.createElement(_index.Calendar, {
          date: firstDateField,
          triggerText: firstDateField || "Choose date",
          onDateChange: this.handleFirstDateField.bind(this) })
      ),
      _react2.default.createElement(
        "div",
        { className: "example" },
        "Controlled example: ",
        secondDateField,
        _react2.default.createElement("br", null),
        _react2.default.createElement(_index.Calendar, {
          date: secondDateField,
          triggerText: secondDateField || "Choose date",
          onDateChange: this.handleSecondDateField.bind(this),
          active: secondFlyoutOpen })
      )
    );
  };

  return Demo;
}(_react2.default.Component);

exports.default = Demo;
