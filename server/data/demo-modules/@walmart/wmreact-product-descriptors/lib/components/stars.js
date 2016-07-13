"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Stars display.
@examples
```jsx
<Stars total={5} average={4} count={3}>}/>
```
@component Stars
@import {Stars}
@playground
Stars
```
<Stars total={5} average={4} count={3}/>
```
*/

var _renderReviewCount = function _renderReviewCount(_ref) {
  var _ref$automationId = _ref.automationId;
  var automationId = _ref$automationId === undefined ? "stars" : _ref$automationId;
  var countNode = _ref.countNode;
  var _ref$onCountClick = _ref.onCountClick;
  var onCountClick = _ref$onCountClick === undefined ? function () {} : _ref$onCountClick;
  var count = _ref.count;


  if (!count && !countNode) {
    return null;
  }

  var child = countNode ? _react2.default.createElement(
    "span",
    { className: "stars-reviews-count-node" },
    countNode
  ) : _react2.default.createElement(
    "span",
    { className: "stars-reviews-count" },
    "(",
    count,
    ")"
  );

  return _react2.default.createElement(
    "span",
    {
      className: "stars-reviews",
      onClick: function onClick(ev) {
        onCountClick(ev);
      },
      "data-automation-id": automationId + "-reviews" },
    child,
    _react2.default.createElement(
      "span",
      { className: "visuallyhidden" },
      "ratings"
    )
  );
};

var Stars = function Stars(props) {
  var extras = "stars-" + props.size;

  var className = props.className;
  var _props$onStarsClick = props.onStarsClick;
  var onStarsClick = _props$onStarsClick === undefined ? function () {} : _props$onStarsClick;
  var others = (0, _objectWithoutProperties3.default)(props, ["className", "onStarsClick"]);

  var automationId = props.automationId || "stars";

  var types = [];
  var avgFloor = Math.floor(props.average);
  for (var i = 0; i < props.total; i++) {
    types.push(i < avgFloor ? "star-rated" : "star-empty");
  }
  if (props.average - avgFloor > 0.4) {
    types[avgFloor] = "star-partial";
  }

  var stars = [];
  types.map(function (starClass, index) {
    stars.push(_react2.default.createElement("i", { key: "{starClass}-" + index, className: "star " + starClass,
      "data-automation-id": automationId + "-star-" + index }));
  });

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({ className: (0, _classnames2.default)("stars", extras, className, {
        "hide-content": props.hidden }) }, others),
    _react2.default.createElement(
      "span",
      { className: "stars-container", onClick: function onClick(ev) {
          onStarsClick(ev);
        } },
      stars
    ),
    _react2.default.createElement(
      "span",
      { className: "visuallyhidden",
        "data-automation-id": automationId + "-avg-rating" },
      "Average rating: ",
      props.average,
      " stars"
    ),
    _renderReviewCount(props)
  );
};

Stars.propTypes = {
  className: _react.PropTypes.string,
  /**
  The total number of stars (e.g. 5, 10)
  */
  total: _react.PropTypes.number.isRequired,
  /**
  The average number of stars (e.g. 3)
  */
  average: _react.PropTypes.number.isRequired,
  /**
  The count label.
  */
  count: _react.PropTypes.number,
  /**
    The formatted count label node. If this prop is set, the component ignores the count property.
  */
  countNode: _react.PropTypes.node,
  /**
    Click handler for count.
  */
  onCountClick: _react.PropTypes.func,
  /**
    Click handler for stars.
  */
  onStarsClick: _react.PropTypes.func,
  /**
    The display size
  */
  size: _react.PropTypes.oneOf(["small", "medium", "large"]),
  /**
  Automation id
  */
  automationId: _react.PropTypes.string,
  hidden: _react.PropTypes.bool
};

exports.default = Stars;