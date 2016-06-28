"use strict";

exports.__esModule = true;
exports._getNearByStoresTitle = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _storeList = require("./store-list");

var _storeList2 = _interopRequireDefault(_storeList);

var _storeListItem = require("./store-list-item");

var _storeListItem2 = _interopRequireDefault(_storeListItem);

var _storeFinderField = require("./store-finder-field");

var _storeFinderField2 = _interopRequireDefault(_storeFinderField);

var _storeFinderUtils = require("../utils/store-finder-utils");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _storesProp = require("../props/stores-prop");

var _storesProp2 = _interopRequireDefault(_storesProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFERRED_STORE_TITLE = "Your preferred store";

/**
This component is the stores near you panel. This displays preferred stores,
nearby stores and ablity to find stores at a specified location.

@import {StoreFinderPanel}
@flags noVisibleRender
@component StoreFinderPanel
@playground
StoreFinderPanel
```
<StoreFinderPanel  preferredStores={check examples} nearbyStore={check examples}
location="San Bruno"
/>
```
*/

var _getNearByStoresTitle = exports._getNearByStoresTitle = function _getNearByStoresTitle(_ref) {
  var preferredStores = _ref.preferredStores;
  var location = _ref.location;

  return preferredStores && preferredStores.length ? "Other stores near " + location : "Stores near you";
};

var StoreFinderPanel = function StoreFinderPanel(props) {
  var preferredStores = props.preferredStores;
  var nearbyStores = props.nearbyStores;
  var dataAutomationId = props.dataAutomationId;
  var location = props.location;
  var className = props.className;

  var classes = (0, _classnames2.default)("header-StoreFinderPanel font-normal", className);

  var _renderPreferredStores = function _renderPreferredStores() {
    if (preferredStores && preferredStores.length) {
      return _react2.default.createElement(
        _storeList2.default,
        { title: PREFERRED_STORE_TITLE },
        preferredStores.map(function (store, index) {
          return _react2.default.createElement(_storeListItem2.default, (0, _extends3.default)({}, store, {
            key: "pref-" + index,
            preferred: true,
            className: "header-StoreFinderPanel-preferredStore",
            dataAutomationId: dataAutomationId + "-preferredStoreListItem-" + index
          }));
        })
      );
    }
  };

  var _renderNearByStores = function _renderNearByStores() {
    if (nearbyStores && nearbyStores.length) {
      var nearbyStoresTitle = _getNearByStoresTitle(props);
      return _react2.default.createElement(
        _storeList2.default,
        { title: nearbyStoresTitle, className: "header-StoreFinderPanel-storeList" },
        nearbyStores.map(function (store, index) {
          return _react2.default.createElement(_storeListItem2.default, (0, _extends3.default)({}, store, {
            key: "near-" + index,
            className: "header-StoreFinderPanel-nearbyStore",
            dataAutomationId: dataAutomationId + "-nearyByStoreListItem-" + index
          }));
        })
      );
    }
  };

  var _renderMoreStores = function _renderMoreStores() {
    return _react2.default.createElement(
      _link2.default,
      {
        className: "font-normal header-StoreFinderPanel-moreStores",
        href: (0, _storeFinderUtils.getStoreFinderUrl)(location) },
      "See more nearby stores"
    );
  };

  var _renderStoreFinderField = function _renderStoreFinderField() {
    return _react2.default.createElement(_storeFinderField2.default, {
      className: "header-StoreFinderPanel-field",
      dataAutomationId: dataAutomationId + "-storeFinderField"
    });
  };

  return _react2.default.createElement(
    "div",
    { className: classes },
    _react2.default.createElement(
      _link2.default,
      {
        className: "font-semibold arrow-link",
        href: "/store/finder",
        dataAutomationId: dataAutomationId + "-storefinder"
      },
      "Find a store on Map"
    ),
    _renderStoreFinderField(),
    _react2.default.createElement(
      "div",
      { className: "header-StoreFinderPanel-content" },
      _renderPreferredStores(),
      _renderNearByStores(),
      _renderMoreStores()
    )
  );
};

StoreFinderPanel.displayName = "StoreFinderPanel";

StoreFinderPanel.propTypes = _storesProp2.default;

exports.default = StoreFinderPanel;