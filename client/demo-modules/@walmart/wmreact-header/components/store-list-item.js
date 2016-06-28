"use strict";

exports.__esModule = true;
exports._getStoreLink = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _storeProp = require("../props/store-prop");

var _storeProp2 = _interopRequireDefault(_storeProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORE_URL_PREFIX = "/store/";

/**
This component displays store information like name, address and distance from
user's location

@import {StoreListItem}
@flags noVisibleRender
@component StoreListItem
@playground
StoreListItem
```
<StoreListItem id="1234" name="San Bruno" address="850 Cherry Ave"
distance="13 mi"/>
/>
```
*/

var _getStoreLink = exports._getStoreLink = function _getStoreLink(storeId) {
  return "" + STORE_URL_PREFIX + storeId;
};

var StoreListItem = function StoreListItem(props) {
  var address = props.address;
  var distance = props.distance;
  var dataAutomationId = props.dataAutomationId;
  var id = props.id;
  var name = props.name;
  var preferred = props.preferred;


  var _renderStar = function _renderStar() {
    return preferred && _react2.default.createElement(_icon2.default.Star, null);
  };

  var _renderSmallCopy = function _renderSmallCopy(text) {
    var className = (0, _classnames2.default)("copy-small", "header-StoreListItem-text", "no-margin");
    return _react2.default.createElement(
      "span",
      { className: className },
      text
    );
  };

  var _renderName = function _renderName() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _link2.default,
        (0, _extends3.default)({
          className: "header-StoreListItem-name font-normal",
          href: _getStoreLink(id)
        }, (0, _automationIdUtils.getDataAutomationIdPair)("storeLink", dataAutomationId)),
        _react2.default.createElement(
          "span",
          { className: "display-inline-block" },
          _renderStar(),
          name
        )
      )
    );
  };

  var _renderAddress = function _renderAddress() {
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: "Grid-col u-size-10-12 header-StoreListItem-address"
      }, (0, _automationIdUtils.getDataAutomationIdPair)("storeAddress", dataAutomationId)),
      _renderSmallCopy(address)
    );
  };

  var _renderDistance = function _renderDistance() {
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: "Grid-col u-size-2-12 header-StoreListItem-distance text-right"
      }, (0, _automationIdUtils.getDataAutomationIdPair)("storeDistance", dataAutomationId)),
      _renderSmallCopy(distance)
    );
  };

  return _react2.default.createElement(
    "div",
    { className: "header-StoreListItem" },
    _renderName(),
    _react2.default.createElement(
      "div",
      { className: "text-left Grid" },
      _renderAddress(),
      _renderDistance()
    )
  );
};

StoreListItem.propTypes = _storeProp2.default;

StoreListItem.displayName = "StoreListItem";

StoreListItem.defaultProps = {
  dataAutomationId: "storeListItem",
  preferred: false
};

exports.default = StoreListItem;