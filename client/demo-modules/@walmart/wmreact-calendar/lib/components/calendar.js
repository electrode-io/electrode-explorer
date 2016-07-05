"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDatePicker = require("react-date-picker");

var _reactDatePicker2 = _interopRequireDefault(_reactDatePicker);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calendar = function Calendar(props) {
  var icon = props.showIcon ? _react2.default.createElement("i", { className: "wmicon wmicon-calendar" }) : null;

  var formattedTriggerText = _react2.default.createElement(
    "span",
    { className: "default-trigger" },
    props.triggerText,
    icon
  );

  return _react2.default.createElement(
    _flyout2.default,
    (0, _extends3.default)({}, props, { // Must come first
      className: (0, _classnames2.default)("calendar-container", props.flyoutClassName),
      triggerText: formattedTriggerText }),
    _react2.default.createElement(_reactDatePicker2.default, (0, _extends3.default)({}, props, { // Must come first
      className: (0, _classnames2.default)("date-picker-control", props.dpClassName),
      onChange: props.onDateChange,
      date: (0, _utils.nullSafeDate)(props.date) }))
  );
};

Calendar.propTypes = {
  showIcon: _react.PropTypes.bool,
  flyoutClassName: _react.PropTypes.string,
  dpClassName: _react.PropTypes.string,
  date: _react.PropTypes.any,
  trigger: _react.PropTypes.element
};

Calendar.defaultProps = {
  initialText: "Choose date",
  showIcon: true,
  direction: "bottom",
  closeOnClickOut: true,
  dateFormat: "MM/DD/YYYY",
  navPrev: "«",
  navNext: "»",
  monthFormat: "MMM",
  weekDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
};

exports.default = Calendar;