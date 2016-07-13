"use strict";

exports.__esModule = true;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isEqual = require("lodash/isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _automationUtils = require("@walmart/automation-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Store Header
@examples
```
<StoreHeader
  searchText="Camera"
  name="Mountain View store"
  address={{
    address1: "600 Showers Dr",
    city: "Mountain View",
    state: "CA",
    postalCode: "94040"
  }}
  phone="123-456-789"
  operationalHours={{
    fromDay: "Sun",
    toDay: "Sat",
    openHrs: 7,
    closingHrs: 10
  }}
  storeUrl="http://www.walmart.com/store/1"
/>
```

@component StoreHeader
@import {StoreHeader}
@playground
StoreHeader
```
<StoreHeader
  searchText="Camera"
  name="Mountain View store"
  address={{
    address1: "600 Showers Dr",
    city: "Mountain View",
    state: "CA",
    postalCode: "94040"
  }}
  phone="123-456-789"
  operationalHours={{
    fromDay: "Sun",
    toDay: "Sat",
    openHrs: 7,
    closingHrs: 10
  }}
  storeUrl="http://www.walmart.com/store/1"
/>
```
*/

var AUTOMATION_CONTEXT = "StoreHeader";

var _renderStoreName = function _renderStoreName(searchText, name, storeUrl) {
  var header = searchText + " at " + name;
  return _react2.default.createElement(
    "div",
    (0, _automationUtils.getDataAutomationIdPair)("StoreName", AUTOMATION_CONTEXT, process),
    _react2.default.createElement(
      "span",
      { className: "font-bold store-name hide-content-max-m" },
      header
    ),
    _react2.default.createElement(
      "a",
      { className: "font-bold store-name hide-content-m", href: storeUrl },
      header
    )
  );
};

var _renderStoreAddress = function _renderStoreAddress(address, phone) {
  var address2 = address.city + ", " + address.state + " " + address.postalCode;
  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("StoreAddress", AUTOMATION_CONTEXT, process), {
      className: "store-address-phone store-line" }),
    _react2.default.createElement(
      "span",
      { className: "store-address" },
      address.address1
    ),
    _react2.default.createElement(
      "span",
      { className: "store-address" },
      address2
    ),
    _react2.default.createElement(
      "span",
      { className: "store-phone" },
      phone
    )
  );
};

var _renderStoreHours = function _renderStoreHours(operationalHours) {

  if (operationalHours) {
    var _ret = function () {
      var days = void 0;
      return {
        v: _react2.default.createElement(
          "div",
          (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("StoreHours", AUTOMATION_CONTEXT, process), {
            className: "store-hours-block" }),
          _react2.default.createElement(
            "span",
            { className: "store-hours-title font-bold" },
            "Store hours"
          ),
          operationalHours.map(function (hours, index) {
            if ((0, _isEqual2.default)(hours.fromDay, hours.toDay)) {
              days = "" + hours.fromDay;
            } else {
              days = hours.fromDay + " - " + hours.toDay;
            }
            var timings = hours.openHrs + " - " + hours.closingHrs;

            return _react2.default.createElement(
              "div",
              (0, _extends3.default)({ key: index, className: "store-hours font-semibold"
              }, (0, _automationUtils.getDataAutomationIdPair)("StoreHoursDays", AUTOMATION_CONTEXT, process)),
              _react2.default.createElement(
                "span",
                { className: "store-hours-days" },
                days
              ),
              _react2.default.createElement(
                "span",
                { className: "store-hours-time" },
                timings
              )
            );
          })
        )
      };
    }();

    if ((typeof _ret === "undefined" ? "undefined" : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
  }
};

var _render24HoursFlag = function _render24HoursFlag(open24Hours) {
  if (open24Hours) {
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("24HoursFlag", AUTOMATION_CONTEXT, process), {
        className: "store-open-24-hours" }),
      "Open 24 Hours"
    );
  }
};

var StoreHeader = function StoreHeader(props) {
  var searchText = props.searchText;
  var name = props.name;
  var address = props.address;
  var phone = props.phone;
  var open24Hrs = props.open24Hrs;
  var operationalHours = props.operationalHours;
  var storeUrl = props.storeUrl;


  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("StoreHeader", AUTOMATION_CONTEXT, process), {
      className: "store-header" }),
    _react2.default.createElement(
      "div",
      { className: "store-address-block" },
      _renderStoreName(searchText, name, storeUrl),
      _renderStoreAddress(address, phone)
    ),
    _render24HoursFlag(open24Hrs),
    _renderStoreHours(operationalHours)
  );
};

StoreHeader.propTypes = {
  /**
   Search keyword for store page
   */
  searchText: _react.PropTypes.string,
  /**
   Store Name
   */
  name: _react.PropTypes.string.isRequired,
  /**
   Store Address
   */
  address: _react.PropTypes.shape({
    address1: _react.PropTypes.string.isRequired,
    city: _react.PropTypes.string.isRequired,
    state: _react.PropTypes.string.isRequired,
    postalCode: _react.PropTypes.string.isRequired
  }),
  /**
   Store Phone number
   */
  phone: _react.PropTypes.string.isRequired,
  /**
   Store Business Hours
   */
  operationalHours: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    fromDay: _react.PropTypes.string,
    toDay: _react.PropTypes.string,
    openHrs: _react.PropTypes.string,
    closingHrs: _react.PropTypes.string
  })),
  /**
   Open 24 hours
  */
  open24Hrs: _react.PropTypes.bool,
  /**
   Store URL
  */
  storeUrl: _react.PropTypes.string.isRequired
};

StoreHeader.displayName = "StoreHeader";

StoreHeader.defaultProps = {
  searchText: "",
  open24Hours: "",
  operationalHours: null,
  storeUrl: ""
};

exports.default = StoreHeader;