"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _fireStatelessUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event");

var _fireStatelessUiEvent2 = _interopRequireDefault(_fireStatelessUiEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderPageLink = function renderPageLink(page, selected, _onClick2) {
  return _react2.default.createElement(
    "li",
    { key: page },
    _react2.default.createElement(
      "a",
      {
        className: selected ? "active" : "",
        onClick: function onClick(event) {
          return _onClick2(page, event);
        } },
      page + 1
    )
  );
};
/* eslint react/prop-types: 0 */


var renderGap = function renderGap(key) {
  return _react2.default.createElement("li", { key: "gap_" + key, className: "paginator-list-gap" });
};

/**
List for a paginator
@examples
```jsx
<Paginator.PaginatorList total={5} current={0}/>
```
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@component Paginator.PaginatorList
@import {Paginator}
@references Paginator
@playground
```
<Paginator.PaginatorList total={5} current={0}/>
```
*/
var PaginatorList = function PaginatorList(props, context) {
  var _onClick = function _onClick(index, event) {
    (0, _fireStatelessUiEvent2.default)(props, context, event);

    if (event) {
      event.preventDefault();
    }
    props.onClick(index || 0, event);
  };

  var pageLinks = [];
  if (props.pages) {
    pageLinks = props.pages.map(function (page, index) {
      return page.gap ? renderGap(index) : renderPageLink(page.page - 1, page.selected, _onClick);
    });
  } else {
    var beginning = Math.max(props.current - 5, 0);
    var end = Math.min(props.current + 5, props.total);

    if (beginning > 1) {
      pageLinks.push(renderPageLink(0, props.current === 0, _onClick));
      pageLinks.push(renderGap(0));
    }
    for (var i = beginning; i < end; i++) {
      pageLinks.push(renderPageLink(i, props.current === i, _onClick));
    }
    if (end < props.total - 2) {
      pageLinks.push(renderGap(props.total - 1));
      pageLinks.push(renderPageLink(props.total - 1, props.current === props.total, _onClick));
    }
  }

  return _react2.default.createElement(
    "ul",
    { className: (0, _classnames2.default)("paginator-list", props.hidden ? "hide-content" : "") },
    pageLinks
  );
};

PaginatorList.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

exports.default = PaginatorList;