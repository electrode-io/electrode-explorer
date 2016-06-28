"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _moment = require("moment/moment");

var _moment2 = _interopRequireDefault(_moment);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 This component will be removed! It is meant to be replaced.
 By ReactIntl
 */

var FormattedDate = function (_React$Component) {
  (0, _inherits3.default)(FormattedDate, _React$Component);

  function FormattedDate() {
    (0, _classCallCheck3.default)(this, FormattedDate);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  FormattedDate.prototype._getComponentClasses = function _getComponentClasses(className) {
    return (0, _classnames2.default)("FormattedDate", className);
  };

  FormattedDate.prototype.render = function render() {
    var _props = this.props;
    var value = _props.value;
    var format = _props.format;
    var timezone = _props.timezone;
    var className = _props.className;
    var rest = (0, _objectWithoutProperties3.default)(_props, ["value", "format", "timezone", "className"]);

    if (process.env.NODE_ENV !== "production") {
      /*eslint-disable*/
      console.warn("You are using a component not intended for use in production.");
      /*eslint-enable*/
    }

    var timezoneOffset = 0;
    if (timezone === "UTC") {
      // this is the different in timezone from
      // UTC. Moment assumes the users timezone
      // is where the epoch time is from.
      timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
    }
    var formattedDate = (0, _moment2.default)(value + timezoneOffset).format(format);

    return _react2.default.createElement(
      "span",
      (0, _extends3.default)({ className: this._getComponentClasses(className) }, rest),
      formattedDate
    );
  };

  return FormattedDate;
}(_react2.default.Component);

FormattedDate.propTypes = {
  value: _react2.default.PropTypes.number.isRequired,
  format: _react2.default.PropTypes.string.isRequired,
  timezone: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string
};

FormattedDate.defaultProps = {
  timezone: "UTC",
  className: ""
};

exports.default = FormattedDate;