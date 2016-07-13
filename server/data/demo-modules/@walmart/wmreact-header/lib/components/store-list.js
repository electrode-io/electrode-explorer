"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORE_LIST_CLASS = "header-StoreList";

/**
This component displays a store list

@import {StoreList}
@flags noVisibleRender
@component StoreList
@playground
StoreList
```
<StoreList dataAutomationId="storeList">
  <StoreListItem id="1234" name="San Bruno" address="850 Cherry Ave" distance="13 mi"/>
  <StoreListItem id="2031" name="Union City" address="30600 Dyer st" distance="13 mi"/>
</StoreList>
/>
```
*/

var StoreList = function StoreList(props) {
  var title = props.title;
  var dataAutomationId = props.dataAutomationId;
  var className = props.className;
  var children = props.children;


  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)(STORE_LIST_CLASS, className) },
    _react2.default.createElement(
      _heading2.default.H3,
      { className: "header-StoreList-title font-normal" },
      title
    ),
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "header-StoreList-list"
      }, (0, _automationIdUtils.getDataAutomationIdPair)("storeList", dataAutomationId)),
      children
    )
  );
};

StoreList.propTypes = {
  /**
  Tile for the list
  */
  title: _react.PropTypes.string,
  /**
  dataAutomationId used for testings
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  Any additional classes
  */
  className: _react.PropTypes.string,
  /**
  children
  */
  children: _react.PropTypes.arrayOf(_react.PropTypes.node)
};

StoreList.displayName = "StoreList";

StoreList.defaultProps = {
  title: "Stores near you",
  dataAutomationId: "storeList",
  className: ""
};

exports.default = StoreList;