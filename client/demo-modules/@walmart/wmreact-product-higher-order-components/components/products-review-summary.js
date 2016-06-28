"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _stars = require("@walmart/wmreact-product-descriptors/lib/components/stars");

var _stars2 = _interopRequireDefault(_stars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 Basic component for a single Review component
 Ex: A user leaves a review on the product page and
 the content in that single review will be rendered.
 @examples
 ```jsx
 <div>
  <Review/>
 </div>
 */

var ReviewSummary = function ReviewSummary(props) {
  var reviewTitle = props.reviewTitle;
  var reviewText = props.reviewText;
  var rating = props.rating;
  var reviewSubmissionTime = props.reviewSubmissionTime;
  var userNickname = props.userNickname;


  var _getBadgesList = function _getBadgesList() {
    return _react2.default.createElement(
      "div",
      { className: "review-verifiedPurchaser" },
      "Verified User"
    );
  };

  return _react2.default.createElement(
    "div",
    { className: "review" },
    _react2.default.createElement(
      "div",
      { className: "review-header margin-top" },
      _react2.default.createElement(
        "div",
        { className: "Grid" },
        _react2.default.createElement(
          "div",
          { className: "Grid-col u-size-12-12-xs u-size-10-12-m" },
          _react2.default.createElement(
            "div",
            { className: "review-title" },
            reviewTitle
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "Grid-col u-size-2-12-m hide-content-xs display-inline-block-m" },
          _react2.default.createElement(
            "div",
            { className: "review-submissionTime text-right" },
            reviewSubmissionTime
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "Grid review-star-rating margin-top" },
        _react2.default.createElement(
          "div",
          { className: "Grid-col u-size-2-4-xs u-size-4-4-m  hide-content-m" },
          _react2.default.createElement(_stars2.default, { total: 5, average: rating })
        ),
        _react2.default.createElement(
          "div",
          { className: "Grid-col u-size-2-4-xs hide-content-m" },
          _react2.default.createElement(
            "div",
            { className: "review-submissionTime text-right" },
            reviewSubmissionTime
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "margin-top" },
        _react2.default.createElement(
          "div",
          { className: "arrange arrange-spaced" },
          _react2.default.createElement(
            "div",
            { className: "arrange-fit align-left review-username" },
            userNickname
          ),
          _react2.default.createElement(
            "div",
            { className: "arrange-fill align-left badge-list" },
            _getBadgesList()
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "review-body margin-top" },
      _react2.default.createElement("div", { className: "review-showBottomBorder" }),
      _react2.default.createElement(
        "div",
        { className: "review-description margin-top" },
        reviewText
      )
    )
  );
};

ReviewSummary.propTypes = {
  /**
   *  Prop Types
   */
  reviewTitle: _react.PropTypes.string,
  reviewText: _react.PropTypes.string,
  rating: _react.PropTypes.number,
  reviewSubmissionTime: _react.PropTypes.string,
  userNickname: _react.PropTypes.string
};

ReviewSummary.defaultProps = {};

exports.default = ReviewSummary;