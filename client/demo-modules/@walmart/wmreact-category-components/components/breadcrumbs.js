"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _breadcrumbs = require("@walmart/wmreact-navigation/lib/components/breadcrumbs");

var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

var _categoryUtils = require("@walmart/category-utils");

var _analyticsDispatcher = require("./analytics-dispatcher");

var _analyticsDispatcher2 = _interopRequireDefault(_analyticsDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderNodes = function renderNodes(data) {
  return data.map(function (item, i) {
    return i + 1 === data.length ? _react2.default.createElement(
      "h1",
      { key: i, className: "breadcrumb-leaf", __self: undefined
      },
      item.name
    ) : _react2.default.createElement(
      "a",
      { key: i, href: item.url, __self: undefined
      },
      item.name
    );
  });
};

/**
A component for displaying category breadcrumb
@examples
```jsx
<BreadCrumbs data={[
  {
    "name": "Electronics",
    "id": "3944",
    "url": "/category/3944"
  },
  {
    "name": "TV & Video",
    "id": "3944_1060825"
  }
]} />
```
@component BreadCrumbs
@import {BreadCrumbs}
@playground
BreadCrumbs
```
<BreadCrumbs data={[
  {
    "name": "Electronics",
    "id": "3944",
    "url": "/category/3944"
  },
  {
    "name": "TV & Video",
    "id": "3944_1060825"
  }
]} />
```
*/

var BreadCrumbs = function BreadCrumbs(props) {
  var data = props.data;
  var moduleType = props.moduleType;

  return _react2.default.createElement(
    _analyticsDispatcher2.default,
    (0, _extends3.default)({}, props, {
      __self: undefined
    }),
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "CategoryBreadCrumbs"
      }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process), {
        __self: undefined
      }),
      _react2.default.createElement(
        _breadcrumbs2.default,
        {
          __self: undefined
        },
        renderNodes(data)
      )
    )
  );
};

BreadCrumbs.displayName = "BreadCrumbs";

BreadCrumbs.propTypes = {
  data: _react.PropTypes.array,
  moduleType: _react.PropTypes.string
};

BreadCrumbs.defaultProps = {
  data: [],
  moduleType: _categoryUtils.moduleTypes.BREADCRUMB
};

exports.default = BreadCrumbs;