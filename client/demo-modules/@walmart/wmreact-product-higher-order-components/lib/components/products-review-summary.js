"use strict";

exports.__esModule = true;
exports.BADGE_HTML = exports.BADGE_VALUES = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _stars = require("@walmart/wmreact-product-descriptors/lib/components/stars");

var _stars2 = _interopRequireDefault(_stars);

var _textTruncate = require("@walmart/wmreact-product-typography/lib/components/text-truncate");

var _textTruncate2 = _interopRequireDefault(_textTruncate);

var _revealer = require("@walmart/wmreact-interactive/lib/components/revealer");

var _revealer2 = _interopRequireDefault(_revealer);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 Basic component for a single Review component
 Ex: A user leaves a review on the product page and
 the content in that single review will be rendered.
 @examples
 ```jsx
 <div>
 <ReviewSummary/>
 </div>
 */

var BADGE_VALUES = exports.BADGE_VALUES = {
  "top1Contributor": "trophy",
  "top10Contributor": "star",
  "top25Contributor": "star",
  "top50Contributor": "star",
  "top100Contributor": "star",
  "top500Contributor": "star",
  "top1000Contributor": "star",
  "VerifiedPurchaser": "ok",
  "SRIncentivizedReviewYes": "comment",
  "kidschoice2013": "comment",
  "kidschoice2014": "comment",
  "kidschoice2015": "comment",
  "kidschoice2016": "comment",
  "Walmart associate": "user",
  "Affiliation id: staff": "user",
  "BackedbyMom": "spark"
};

var BADGE_HTML = exports.BADGE_HTML = {
  "top1Contributor": "#1 contributer",
  "top10Contributor": "Top 10 contributer",
  "top25Contributor": "Top 25 contributer",
  "top50Contributor": "Top 50 contributer",
  "top100Contributor": "Top 100 contributer",
  "top500Contributor": "Top 500 contributer",
  "top1000Contributor": "Top 1000 contributer",
  "VerifiedPurchaser": "Verified purchaser",
  "SRIncentivizedReviewYes": "Spark reviewer - <span class=\"review-badge-light\">received free product</span>",
  "kidschoice2013": "Kids voted - <span class=\"review-badge-light\">here are their top picks</span>",
  "kidschoice2014": "Kids voted - <span class=\"review-badge-light\">here are their top picks</span>",
  "kidschoice2015": "Kids voted - <span class=\"review-badge-light\">here are their top picks</span>",
  "kidschoice2016": "Kids voted - <span class=\"review-badge-light\">here are their top picks</span>",
  "Walmart associate": "Walmart associate",
  "Affiliation id: staff": "Staff sparks",
  "BackedbyMom": "Walmart Moms"
};

var ReviewSummary = function ReviewSummary(props) {
  var reviewTitle = props.reviewTitle;
  var reviewText = props.reviewText;
  var reviewUrl = props.reviewUrl;
  var rating = props.rating;
  var reviewSubmissionTime = props.reviewSubmissionTime;
  var userNickname = props.userNickname;
  var badgeList = props.badgeList;


  var _getBadgesList = function _getBadgesList() {
    return _react2.default.createElement(
      "div",
      null,
      badgeList.map(function (badge) {
        if (BADGE_HTML[badge] && BADGE_VALUES[badge]) {
          return _react2.default.createElement(
            "div",
            { className: "review-badge display-inline-block" },
            _react2.default.createElement(_icon2.default, { name: BADGE_VALUES[badge], size: 1 }),
            "  ",
            _react2.default.createElement("span", { dangerouslySetInnerHTML: { __html: BADGE_HTML[badge] } })
          );
        } else {
          return _react2.default.createElement(
            "div",
            { className: "review-badge display-inline-block" },
            _react2.default.createElement(_icon2.default, { name: "user", size: 1 }),
            _react2.default.createElement("span", { dangerouslySetInnerHTML: { __html: BADGE_HTML[badge] } })
          );
        }
      })
    );
  };

  var _renderReview = function _renderReview() {
    return _react2.default.createElement(
      "div",
      { className: "review-body margin-top" },
      _react2.default.createElement("div", { className: "review-showBottomBorder" }),
      _react2.default.createElement(
        "div",
        { className: "review-description margin-top" },
        _react2.default.createElement(
          _revealer2.default,
          {
            buttonOpenText: "Read less",
            buttonClosedText: "Read more" },
          reviewText
        )
      )
    );
  };

  var _renderReviewPage = function _renderReviewPage() {
    return _react2.default.createElement(
      "div",
      { className: "review-body margin-top" },
      _react2.default.createElement("div", { className: "review-showBottomBorder" }),
      _react2.default.createElement(
        "div",
        { className: "arrange arrange-spaced arrange-middle" },
        _react2.default.createElement(
          "div",
          { className: "review-description arrange-fill margin-top" },
          _react2.default.createElement(_textTruncate2.default, { text: reviewText, line: 3 })
        ),
        _react2.default.createElement(
          "div",
          { className: "arrange-fit" },
          _react2.default.createElement(
            "a",
            { href: reviewUrl },
            _react2.default.createElement("i", { className: "paginator-hairline-btn paginator-hairline-btn-next trigger-arrow" })
          )
        )
      )
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
          { className: "Grid-col u-size-2-4-xs u-size-3-12-m  align-left" },
          _react2.default.createElement(_stars2.default, { total: 5, average: rating })
        ),
        _react2.default.createElement(
          "div",
          { className: "Grid-col u-size-2-4-xs u-size-9-12-m hide-content-m" },
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
          { className: "Grid" },
          _react2.default.createElement(
            "div",
            { className: "Grid-col u-size-2-6-xs u-size-1-6-m review-username" },
            userNickname
          ),
          _react2.default.createElement(
            "div",
            { className: "Grid-col u-size-4-6-xs u-size-5-6-m" },
            _getBadgesList()
          )
        )
      )
    ),
    _clientWidth2.default.isBelowBreakPoint("medium") ? _renderReviewPage() : _renderReview()
  );
};

ReviewSummary.propTypes = {
  /**
   *  Prop Types
   */
  reviewId: _react.PropTypes.number,
  reviewTitle: _react.PropTypes.string,
  reviewText: _react.PropTypes.string,
  reviewUrl: _react.PropTypes.string,
  rating: _react.PropTypes.number,
  reviewSubmissionTime: _react.PropTypes.string,
  userNickname: _react.PropTypes.string,
  badgeList: _react.PropTypes.array
};

ReviewSummary.defaultProps = {};

exports.default = ReviewSummary;