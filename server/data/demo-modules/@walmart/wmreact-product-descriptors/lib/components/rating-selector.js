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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component allows a user to select a certain "star" rating.
It is used on the "write a review" page

```jsx
<div style={{height: 100}}>
  <RatingSelector />
</div>
```

@import {RatingSelector}
@component RatingSelector
@playground
RatingSelector
```
<div style={{height: 100}}>
  <RatingSelector />
</div>

```
*/

var RatingSelector = function (_React$Component) {
  (0, _inherits3.default)(RatingSelector, _React$Component);

  function RatingSelector(props) {
    (0, _classCallCheck3.default)(this, RatingSelector);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {
      selectedRating: 0,
      hoverRating: 0
    };
    _this._handleClick = _this._handleClick.bind(_this);
    _this._handleMouseOver = _this._handleMouseOver.bind(_this);
    _this._handleMouseOut = _this._handleMouseOut.bind(_this);
    return _this;
  }

  RatingSelector.prototype._handleClick = function _handleClick(clickedRating) {
    var _this2 = this;

    var handleClick = this.props.handleClick;

    this.setState({
      selectedRating: clickedRating,
      hoverRating: 0
    }, function () {
      handleClick(_this2.state.selectedRating);
    });
  };

  RatingSelector.prototype._handleMouseOver = function _handleMouseOver(selectedRating) {
    this.setState({
      hoverRating: selectedRating
    });
  };

  RatingSelector.prototype._handleMouseOut = function _handleMouseOut() {
    this.setState({
      hoverRating: 0
    });
  };

  RatingSelector.prototype._renderStarButtons = function _renderStarButtons(activeRating) {
    return [_react2.default.createElement("button", {
      className: (0, _classnames2.default)("ratingButton", {
        "ratingButton--selected": activeRating >= 1,
        "ratingButton--unselected": activeRating < 1
      }, "display-inline-block"),
      key: 1,
      onClick: this._handleClick.bind(null, 1),
      onMouseOver: this._handleMouseOver.bind(null, 1),
      onMouseOut: this._handleMouseOut }), _react2.default.createElement("button", {
      className: (0, _classnames2.default)("ratingButton", {
        "ratingButton--selected": activeRating >= 2,
        "ratingButton--unselected": activeRating < 2
      }, "display-inline-block"),
      key: 2,
      onClick: this._handleClick.bind(null, 2),
      onMouseOver: this._handleMouseOver.bind(null, 2),
      onMouseOut: this._handleMouseOut }), _react2.default.createElement("button", {
      className: (0, _classnames2.default)("ratingButton", {
        "ratingButton--selected": activeRating >= 3,
        "ratingButton--unselected": activeRating < 3
      }, "display-inline-block"),
      key: 3,
      onClick: this._handleClick.bind(null, 3),
      onMouseOver: this._handleMouseOver.bind(null, 3),
      onMouseOut: this._handleMouseOut }), _react2.default.createElement("button", {
      className: (0, _classnames2.default)("ratingButton", {
        "ratingButton--selected": activeRating >= 4,
        "ratingButton--unselected": activeRating < 4
      }, "display-inline-block"),
      key: 4,
      onClick: this._handleClick.bind(null, 4),
      onMouseOver: this._handleMouseOver.bind(null, 4),
      onMouseOut: this._handleMouseOut }), _react2.default.createElement("button", {
      className: (0, _classnames2.default)("ratingButton", {
        "ratingButton--selected": activeRating >= 5,
        "ratingButton--unselected": activeRating < 5
      }, "display-inline-block"),
      key: 5,
      onClick: this._handleClick.bind(null, 5),
      onMouseOver: this._handleMouseOver.bind(null, 5),
      onMouseOut: this._handleMouseOut })];
  };

  RatingSelector.prototype._renderRatingText = function _renderRatingText(activeRating) {
    var ratingText = void 0;
    var ratingTextMap = {
      1: "Poor",
      2: "Fair",
      3: "Average",
      4: "Good",
      5: "Excellent"
    };
    ratingText = ratingTextMap[activeRating];
    var ratingTextClass = "ratingText--" + ratingText;
    return _react2.default.createElement(
      "span",
      { className: (0, _classnames2.default)("ratingText", ratingTextClass, "display-inline-block", "font-semibold") },
      ratingText
    );
  };

  RatingSelector.prototype.render = function render() {
    var buttons = void 0;
    var activeRating = void 0;
    var ratingText = void 0;

    activeRating = !this.state.hoverRating ? this.state.selectedRating : this.state.hoverRating;

    buttons = this._renderStarButtons(activeRating);
    ratingText = this._renderRatingText(activeRating);

    return _react2.default.createElement(
      "div",
      null,
      buttons,
      ratingText
    );
  };

  return RatingSelector;
}(_react2.default.Component);

RatingSelector.displayName = "RatingSelector";

RatingSelector.propTypes = {
  handleClick: _react.PropTypes.func
};

RatingSelector.defaultProps = {
  handleClick: function handleClick() {}
};

exports.default = RatingSelector;