"use strict";

exports.__esModule = true;
exports.HistogramBar = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HistogramBar = exports.HistogramBar = function HistogramBar(props) {
  var count = props.count;
  var totalReviewCount = props.totalReviewCount;
  var ratingValue = props.ratingValue;
  var onRatingClicked = props.onRatingClicked;
  var active = props.active;
  var className = props.className;


  var meterWidth = count / totalReviewCount * 100 + "%";

  var classes = (0, _classnames2.default)(className, "RatingFilter", { "is-greyed": count === 0 }, { "active": active && count !== 0 });

  var _onRatingClicked = function _onRatingClicked() {
    onRatingClicked(ratingValue);
  };

  return _react2.default.createElement(
    "div",
    { className: classes, onClick: _onRatingClicked },
    _react2.default.createElement(
      "div",
      { className: "MeterInline" },
      ratingValue,
      " stars"
    ),
    _react2.default.createElement(
      "div",
      { className: "Meter Histogram" },
      _react2.default.createElement("span", { className: "MeterBar", style: { width: meterWidth } })
    ),
    _react2.default.createElement(
      "span",
      null,
      count
    )
  );
};

HistogramBar.displayName = "Histogram.Bar";

HistogramBar.propTypes = {
  /**
   * Count of ratings for the particular rating value
   */
  count: _react.PropTypes.number.isRequired,
  /**
   * Total number of reviews for the item
   */
  totalReviewCount: _react.PropTypes.number.isRequired,
  /**
   * The star rating value
   */
  ratingValue: _react.PropTypes.number.isRequired,
  /**
   * Callback to execute when the rating bar is clicked
   */
  onRatingClicked: _react.PropTypes.func,
  /**
   * The current rating bar whose reviews are shown. If none, then all reviews are shown
   */
  active: _react.PropTypes.boolean,
  /**
   Additional css classes that can be applied to the element.
   */
  className: _react2.default.PropTypes.string
};