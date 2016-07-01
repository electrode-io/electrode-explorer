"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _fireStatelessUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event");

var _fireStatelessUiEvent2 = _interopRequireDefault(_fireStatelessUiEvent);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A paginator for carousels
@examples
```jsx
<Paginator.Carousel total={5} current={0}/>
```
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@component Paginator.Carousel
@import {Paginator}
@references Paginator
@playground
```
<Paginator.Carousel total={5} current={0}/>
```
*/

/* eslint no-loop-func: 0 */
var PaginatorCarousel = function PaginatorCarousel(props, context) {
  var onDotClick = props.onDotClick;
  var hidden = props.hidden;
  var className = props.className;
  var mini = props.mini;
  var positioned = props.positioned;
  var total = props.total;
  var current = props.current;
  var dataAutomationId = props.dataAutomationId;


  var _onDotClick = function _onDotClick(i, event) {
    (0, _fireStatelessUiEvent2.default)(props, context, event, { typeName: "onDotClick" });
    if (onDotClick) {
      onDotClick(i, event);
    }
  };

  var classes = (0, _classnames2.default)("carousel-paginator-list", hidden ? "hide-content" : "", className, { "carousel-paginator-list-mini": mini }, { "carousel-paginator-list-positioned": positioned });
  var dots = [];

  var _loop = function _loop(i) {
    dots.push(_react2.default.createElement(
      "li",
      { key: i,
        className: i === current ? "slick-active" : "",
        onClick: function onClick(event) {
          return _onDotClick(i, event);
        } },
      _react2.default.createElement(
        "button",
        (0, _extends3.default)({
          className: "carousel-paginator-item",
          type: "button"
        }, (0, _automationIdUtils.getDataAutomationIdPair)(i, dataAutomationId)),
        _react2.default.createElement(
          "span",
          { className: "visuallyhidden" },
          i + 1
        )
      )
    ));
  };

  for (var i = 0; i < total; i++) {
    _loop(i);
  }
  return _react2.default.createElement(
    "ul",
    { className: classes },
    dots
  );
};

PaginatorCarousel.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

exports.default = PaginatorCarousel;