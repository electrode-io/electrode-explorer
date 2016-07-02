"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _stars = require("@walmart/wmreact-product-descriptors/lib/components/stars");

var _stars2 = _interopRequireDefault(_stars);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _productBrand = require("./product-brand");

var _productBrand2 = _interopRequireDefault(_productBrand);

var _productLegalBadge = require("./product-legal-badge");

var _productLegalBadge2 = _interopRequireDefault(_productLegalBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DISPLAY_ABOVE_M = "hide-content display-inline-block-m";
var SIDE_PADDING = "prod-PaddingRight--xs prod-PaddingLeft--xs";
var COMMON_CLASSES = (0, _classnames2.default)(DISPLAY_ABOVE_M, SIDE_PADDING, "copy-mini");
/**
 The secondary product info comp display the
 - Reviews stars
 - Review count
 - Q&A link
 - brand name
 - and walmart numver
 For example this is how we use this component.
 ```jsx
 <ProductSecondaryInformation total={5} average={4}
 count={3} brandName="Vizio" legalBadgeLabel="PG-13"/>
 ```
 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductSecondaryInformation}
 @flags noVisibleRender
 @component ProductSecondaryInformation
 @playground
 ProductSecondaryInformation
 ```
 <ProductSecondaryInformation total={5} average={4}
 count={3} brandName="Vizio" legalBadgeLabel="PG-13"/>
 ```
 */

var _renderReviews = function _renderReviews(_ref) {
  var _ref$total = _ref.total;
  var total = _ref$total === undefined ? 5 : _ref$total;
  var _ref$average = _ref.average;
  var average = _ref$average === undefined ? 0 : _ref$average;
  var _ref$count = _ref.count;
  var count = _ref$count === undefined ? 0 : _ref$count;
  var _ref$onStarsClick = _ref.onStarsClick;

  var _onStarsClick = _ref$onStarsClick === undefined ? function () {} : _ref$onStarsClick;

  var _ref$onReviewsClick = _ref.onReviewsClick;
  var onReviewsClick = _ref$onReviewsClick === undefined ? function () {} : _ref$onReviewsClick;
  var _ref$starsSize = _ref.starsSize;
  var starsSize = _ref$starsSize === undefined ? "medium" : _ref$starsSize;
  var _ref$emptyReviewLabel = _ref.emptyReviewLabel;
  var emptyReviewLabel = _ref$emptyReviewLabel === undefined ? "Write a review" : _ref$emptyReviewLabel;
  var _ref$reviewsLabel = _ref.reviewsLabel;
  var reviewsLabel = _ref$reviewsLabel === undefined ? "reviews" : _ref$reviewsLabel;

  var countLabel = count === 0 ? emptyReviewLabel : count + " " + reviewsLabel;
  return _react2.default.createElement(
    "div",
    { className: "display-inline-block valign-middle" },
    _react2.default.createElement(_stars2.default, (0, _extends3.default)({
      onCountClick: function onCountClick(ev) {
        onReviewsClick(ev);
      },
      onStarsClick: function onStarsClick(ev) {
        _onStarsClick(ev);
      },
      size: starsSize,
      countNode: countLabel
    }, { total: total, average: average, count: count }))
  );
};

var _renderQandA = function _renderQandA(_ref2) {
  var _ref2$qAndALabel = _ref2.qAndALabel;
  var qAndALabel = _ref2$qAndALabel === undefined ? "Q&A" : _ref2$qAndALabel;
  var _ref2$onQAndAClick = _ref2.onQAndAClick;
  var onQAndAClick = _ref2$onQAndAClick === undefined ? function () {} : _ref2$onQAndAClick;

  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)(COMMON_CLASSES, "valign-middle") },
    _react2.default.createElement(
      _button2.default,
      { block: true, fakelink: true, onClick: function onClick(ev) {
          onQAndAClick(ev);
        } },
      qAndALabel
    )
  );
};

var _renderBrand = function _renderBrand(_ref3) {
  var brandName = _ref3.brandName;

  if (!(0, _isEmpty2.default)(brandName)) {
    return _react2.default.createElement(
      "div",
      { className: COMMON_CLASSES },
      "By: ",
      _react2.default.createElement(_productBrand2.default, { name: brandName })
    );
  }
};

var _renderLegalBadge = function _renderLegalBadge(_ref4) {
  var legalBadgeLabel = _ref4.legalBadgeLabel;

  return _react2.default.createElement(
    "div",
    { className: COMMON_CLASSES },
    legalBadgeLabel ? _react2.default.createElement(_productLegalBadge2.default, { badgeLabel: legalBadgeLabel }) : ""
  );
};

var ProductSecondaryInformation = function ProductSecondaryInformation(props) {
  var className = props.className;
  var rest = (0, _objectWithoutProperties3.default)(props, ["className"]);

  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)("prod-ProductSecondaryInformation", className) },
    _renderReviews(rest),
    _renderQandA(rest),
    _renderBrand(rest),
    _renderLegalBadge(rest)
  );
};

ProductSecondaryInformation.propTypes = {
  /**
    Any additional style classes
  */
  className: _react.PropTypes.string,
  /**
    Legal badge label.
  */
  legalBadgeLabel: _react.PropTypes.string,
  /**
    The brand name.
  */
  brandName: _react.PropTypes.string,
  /**
    Q & A label. Defaults to Q&A
  */
  qAndALabel: _react.PropTypes.string,
  /**
    On click callback handler for Q&A button
  */
  onQAndAClick: _react.PropTypes.func,
  /**
    Size of the reviews star component. Defaults to medium.
  */
  starsSize: _react.PropTypes.oneOf(["small", "medium", "large"]),
  /**
    Label to render when review count is 0. Defaults to Write a review.
  */
  emptyReviewLabel: _react.PropTypes.string,
  /**
    Click handler for stars.
  */
  onStarsClick: _react.PropTypes.func,
  /**
    Click handler for reviews count
  */
  onReviewsClick: _react.PropTypes.func,
  /**
    The total number of stars (e.g. 5, 10)
  */
  total: _react.PropTypes.number,
  /**
    The average number of stars (e.g. 3)
  */
  average: _react.PropTypes.number,
  /**
    Label for the reviews count section. Defaults to reviews
  */
  reviewsLabel: _react.PropTypes.string,
  /**
    The count of reviews
  */
  count: _react.PropTypes
};

exports.default = ProductSecondaryInformation;