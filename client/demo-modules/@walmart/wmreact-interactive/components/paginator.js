"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _paginatorList = require("./paginator-list");

var _paginatorList2 = _interopRequireDefault(_paginatorList);

var _paginatorHairline = require("./paginator-hairline");

var _paginatorHairline2 = _interopRequireDefault(_paginatorHairline);

var _paginatorCarousel = require("./paginator-carousel");

var _paginatorCarousel2 = _interopRequireDefault(_paginatorCarousel);

var _fireStatelessUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event");

var _fireStatelessUiEvent2 = _interopRequireDefault(_fireStatelessUiEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Paginators group
@examples
```jsx
<Paginator total={5} current={0}/>
```
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@component Paginator
@import {Paginator}
@playground
Paginators
```
<Paginator total={5} current={0}/>
```
*/

/* eslint react/prop-types: 0, space-infix-ops: 0 */
var Paginator = function Paginator(props, context) {
  var _fireAnalyticsEvent = function _fireAnalyticsEvent(type, event) {
    var extras = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    (0, _fireStatelessUiEvent2.default)(props, context, event, { eventType: type, extras: extras });
  };

  var _onPaginatorClick = function _onPaginatorClick(index, event) {
    _fireAnalyticsEvent("onPaginatorClick", event, { index: index });
    props.onClick(index);
  };

  var _onPrevious = function _onPrevious(event) {
    _fireAnalyticsEvent("onPrevious", event);
    event.preventDefault();
    props.onClick(props.previous >= 0 ? props.previous : props.current - 1);
  };

  var _onNext = function _onNext(event) {
    _fireAnalyticsEvent("onNext", event);
    event.preventDefault();
    props.onClick(props.next || props.current + 1);
  };

  var prev = props.previous >= 0 || props.current > 0 ? _react2.default.createElement(
    "a",
    { className: "paginator-btn paginator-btn-prev", onClick: function onClick(e) {
        return _onPrevious(e);
      } },
    _react2.default.createElement(
      "span",
      { className: "visuallyhidden" },
      "Previous"
    )
  ) : null;

  var next = props.next || props.current + 1 < props.total ? _react2.default.createElement(
    "a",
    { className: "paginator-btn paginator-btn-next", onClick: function onClick(e) {
        return _onNext(e);
      } },
    _react2.default.createElement(
      "span",
      { className: "visuallyhidden" },
      "Next"
    )
  ) : null;

  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)("paginator", props.hidden ? "hide-content" : "") },
    prev,
    _react2.default.createElement(_paginatorList2.default, {
      total: props.total,
      current: props.current,
      pages: props.pages,
      onClick: function onClick(index, event) {
        return _onPaginatorClick(index, event);
      } }),
    next
  );
};

Paginator.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

Paginator.PaginatorList = _paginatorList2.default;
Paginator.Hairline = _paginatorHairline2.default;
Paginator.Carousel = _paginatorCarousel2.default;

exports.default = Paginator;