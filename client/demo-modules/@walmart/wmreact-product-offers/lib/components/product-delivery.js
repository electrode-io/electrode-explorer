"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _month = require("../enums/month");

var _month2 = _interopRequireDefault(_month);

var _automationUtils = require("@walmart/automation-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This componet display the seller's info on the marketplace page.
```jsx
<ProductDelivery
  minDate={1458860168437}
  maxDate={1459666800000}
  isWM={true}
  storeName="Mountain View"
/>
*/

var SOONER_DATE_MSG = "Want it sooner? Choose an earlier date at checkout.";
var OUT_OF_STOCK_MSG = "Pickup not available within 50 miles";
var FREE_PICKUP = "FREE pickup";
var AUTOMATION_CONTEXT = "ProductDelivery";

var _renderSecondaryMsg = function _renderSecondaryMsg(_ref) {
  var isWM = _ref.isWM;
  var isToday = _ref.isToday;
  var storeName = _ref.storeName;
  var isUpsell = _ref.isUpsell;
  var isOOS = _ref.isOOS;
  var isResponsive = _ref.isResponsive;

  if (isWM) {
    if (isOOS) {
      return _react2.default.createElement(
        "div",
        (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("SecondaeryMsg", AUTOMATION_CONTEXT, process), {
          className: "ProductDelivery-msg ProductDelivery-store"
        }),
        _react2.default.createElement(
          "span",
          { className: "font-semibold" },
          OUT_OF_STOCK_MSG
        )
      );
    }

    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("SecondaeryMsg", AUTOMATION_CONTEXT, process), {
        className: "ProductDelivery-msg ProductDelivery-store"
      }),
      _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("display-inline-block", { "display-block-m": isResponsive }) },
        _react2.default.createElement("span", { className: "ProductDelivery-pickup-icon wmicon wmicon-store" }),
        _react2.default.createElement(
          "span",
          { className: "ProductDelivery-pickup-msg font-semibold" },
          "" + FREE_PICKUP + (isToday ? " today" : "")
        )
      ),
      storeName ? _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement(
          "span",
          { className: (0, _classnames2.default)({ "hide-content-m": isResponsive }) },
          " "
        ),
        "at ",
        _react2.default.createElement(
          "span",
          { className: "font-semibold" },
          storeName
        )
      ) : null
    );
  }
  if (isUpsell) {
    return _react2.default.createElement(
      "div",
      {
        className: (0, _classnames2.default)("ProductDelivery-msg ProductDelivery-upSell hide-content", { "display-block-m": isResponsive })
      },
      SOONER_DATE_MSG
    );
  }
};

var ProductDelivery = function ProductDelivery(props) {
  var minDate = props.minDate;
  var maxDate = props.maxDate;
  var className = props.className;
  var isResponsive = props.isResponsive;
  var isWM = props.isWM;

  var earliest = new Date(minDate);
  var latest = new Date(maxDate);
  var earliestMonth = _month2.default.english[earliest.getMonth()];
  var latestMonth = _month2.default.english[latest.getMonth()];
  var earliestDate = earliest.getDate();
  var latestDate = latest.getDate();
  var deliveryDateSubDate = earliestMonth === latestMonth ? "-" : "-" + latestMonth + " ";
  var deliveryDate = minDate === maxDate ? earliestMonth + " " + earliestDate : earliestMonth + " " + earliestDate + deliveryDateSubDate + latestDate;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("ProductDelivery", AUTOMATION_CONTEXT, process), {
      className: (0, _classnames2.default)("ProductDelivery", className, { "responsive-product-delivery": isResponsive })
    }),
    minDate && maxDate ? _react2.default.createElement(
      "div",
      (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("DeliveryDate", AUTOMATION_CONTEXT, process), {
        className: "ProductDelivery-delivery-date"
      }),
      _react2.default.createElement(
        "span",
        { className: (0, _classnames2.default)({ "hide-content-m": isResponsive }) },
        "Arrives "
      ),
      _react2.default.createElement(
        "span",
        { className: "font-semibold" },
        deliveryDate
      ),
      isWM ? _react2.default.createElement(
        "span",
        {
          className: "display-block font-semibold ProductDelivery-msg-separator" },
        "or"
      ) : null
    ) : null,
    _renderSecondaryMsg(props)
  );
};

ProductDelivery.displayName = "ProductDelivery";

ProductDelivery.propTypes = {
  /**
   if the seller is walmart
  */
  isWM: _react.PropTypes.bool,
  /**
   if walmart OOS
  */
  isOOS: _react.PropTypes.bool,
  /**
   if it can be picked up today
  */
  isToday: _react.PropTypes.bool,
  /**
   it could be shipped earlier
  */
  isUpsell: _react.PropTypes.bool,
  /**
   unix time for the earliest delivery date
  */
  minDate: _react.PropTypes.number.isRequired,
  /**
   unix time for the latest delivery date
  */
  maxDate: _react.PropTypes.number.isRequired,
  /**
   walmart store name
  */
  storeName: _react.PropTypes.string,
  /**
   Any additonal style classes
   */
  className: _react2.default.PropTypes.string
};

ProductDelivery.defaultProps = {
  isWM: false,
  isToday: false,
  isUpsell: true,
  storeName: ""
};

exports.default = ProductDelivery;