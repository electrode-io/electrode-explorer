"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

var _stars = require("@walmart/wmreact-product-descriptors/lib/components/stars");

var _stars2 = _interopRequireDefault(_stars);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _isNumber = require("lodash/isNumber");

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 Star Ratings component or Write Review link if no reviews.
 @examples
 ```jsx
 <div>
     <StarRating total={5} average={3} count={10} />
 </div>
 ```
 @import {StarRating}
 @component StarRating
 @playground
 StarRating
 ```
 <div>
    <StarRating total={5} average={3} count={10} />
 </div>
 ```
*/

var NONE = 0;
var ITEM_TYPE = "//schema.org/AggregateRating";
var ITEM_PROP = "aggregateRating";
var WRITE_REVIEW_LINK = "Write a review";
var WRITE_REVIEW_ROOT_URL = "/reviews/write-review?productId=";
var SEE_ALL_REVIEWS_ROOT_URL = "/reviews/product/";

var StarRating = function StarRating(props) {
  var _props$usItemId = props.usItemId;
  var usItemId = _props$usItemId === undefined ? "" : _props$usItemId;
  var _props$average = props.average;
  var average = _props$average === undefined ? NONE : _props$average;
  var _props$total = props.total;
  var total = _props$total === undefined ? NONE : _props$total;
  var _props$count = props.count;
  var count = _props$count === undefined ? NONE : _props$count;
  var rest = (0, _objectWithoutProperties3.default)(props, ["usItemId", "average", "total", "count"]);


  var _renderStarRatingOrLink = void 0;

  var _getReviewsLink = function _getReviewsLink(id) {
    if (_clientWidth2.default.isBelowBreakPoint("medium", true) && id) {
      return SEE_ALL_REVIEWS_ROOT_URL + id;
    }
    return "#reviews";
  };

  var _getWriteReviewsLink = function _getWriteReviewsLink(id) {
    if (id) {
      return WRITE_REVIEW_ROOT_URL + id;
    }
    return "#reviews";
  };

  var _getSize = function _getSize() {
    if (_clientWidth2.default.isBelowBreakPoint("medium", true)) {
      return "small";
    } else {
      return "medium";
    }
  };

  if ((0, _isNumber2.default)(average) && average > 0) {
    _renderStarRatingOrLink = _react2.default.createElement(
      "span",
      { id: "star-ratings", itemProp: ITEM_PROP, itemScope: true, itemType: ITEM_TYPE },
      _react2.default.createElement(
        _link2.default,
        { className: "star-ratings", href: _getReviewsLink(usItemId) },
        _react2.default.createElement(_stars2.default, { total: total,
          average: average,
          count: count,
          size: _getSize() })
      )
    );
  } else {
    _renderStarRatingOrLink = _react2.default.createElement(
      _link2.default,
      { className: "write-review-link", href: _getWriteReviewsLink(usItemId) },
      WRITE_REVIEW_LINK
    );
  }

  return _react2.default.createElement(
    "div",
    null,
    _renderStarRatingOrLink
  );
};

StarRating.propTypes = {
  /**
  Product us item id
  */
  usItemId: _react.PropTypes.string,
  /**
  The total number of stars (e.g. 5, 10)
  */
  total: _react.PropTypes.number.isRequired,
  /**
  The average number of stars (e.g. 3)
  */
  average: _react.PropTypes.number.isRequired,
  /**
  The count of reviews
  */
  count: _react.PropTypes.number
};

exports.default = StarRating;