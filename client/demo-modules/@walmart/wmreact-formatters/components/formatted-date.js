"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fmtDifference = function fmtDifference(v, singular, plural) {
  v = Math.floor(v);
  return v + " " + (v === 1 ? singular : plural) + " ago";
};
var secondsAgo = function secondsAgo(d) {
  return d < 60 ? fmtDifference(d, "second", "seconds") : null;
};
var minutesAgo = function minutesAgo(d) {
  return d < 3600 ? fmtDifference(d / 60, "minute", "minutes") : null;
};
var hoursAgo = function hoursAgo(d) {
  return d < 24 * 3600 ? fmtDifference(d / 3600, "hour", "hours") : null;
};
var daysAgo = function daysAgo(d) {
  return d <= 10 * 24 * 3600 ? fmtDifference(d / (24 * 3600), "day", "days") : null;
};
var weeksAgo = function weeksAgo(d) {
  return d <= 50 * 24 * 3600 ? fmtDifference(d / (7 * 24 * 3600), "week", "weeks") : null;
};
var monthsAgo = function monthsAgo(d) {
  return d <= 300 * 24 * 3600 ? fmtDifference(d / (30 * 24 * 3600), "month", "months") : null;
};

var FormattedDate = _react2.default.createClass({
  displayName: "FormattedDate",
  mixins: [_react2.default.PureRenderMixin],

  propTypes: {
    value: _react2.default.PropTypes.any.isRequired,
    currentDate: _react2.default.PropTypes.any,
    strategies: _react2.default.PropTypes.array,
    fallbackFormatter: _react2.default.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      currentDate: new Date(),
      strategies: [secondsAgo, minutesAgo, hoursAgo, daysAgo, weeksAgo, monthsAgo],
      fallbackFormatter: function fallbackFormatter(d) {
        return d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
      }
    };
  },
  render: function render() {
    var currentDate = this.props.currentDate ? this.props.currentDate : new Date();
    var ds = Math.floor((currentDate - this.props.value) / 1000);
    var str = this.props.fallbackFormatter ? this.props.fallbackFormatter(this.props.value) : "";
    var strategies = this.props.strategies ? this.props.strategies : [];
    for (var _iterator = strategies, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var strategy = _ref;

      var f = strategy(ds);
      if (f !== null) {
        str = f;
        break;
      }
    }
    return _react2.default.createElement(
      "span",
      this.props,
      str
    );
  }
});

FormattedDate.secondsAgo = secondsAgo;
FormattedDate.minutesAgo = minutesAgo;
FormattedDate.hoursAgo = hoursAgo;
FormattedDate.daysAgo = daysAgo;
FormattedDate.weeksAgo = weeksAgo;
FormattedDate.monthsAgo = monthsAgo;

exports.default = FormattedDate;