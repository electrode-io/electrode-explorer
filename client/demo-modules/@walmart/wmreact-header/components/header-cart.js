"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _headerCartCount = require("./header-cart-count");

var _headerCartCount2 = _interopRequireDefault(_headerCartCount);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 A header cart icon component.
 @examples
 ```jsx
<HeaderCart totalItemsCount={100}/>
 ```
 @component HeaderCart
 @import {HeaderCart}
 @references HeaderCart
 @playground
 HeaderCart
 ```
 <HeaderCart totalItemsCount={100}/>
 ```
 */

var HeaderCart = function HeaderCart(props) {
  var dataAutomationId = props.dataAutomationId;
  var totalItemsCount = props.totalItemsCount;
  var maxCountThreshold = props.maxCountThreshold;


  var _renderCartCount = function _renderCartCount() {
    if (totalItemsCount > 0) {
      return _react2.default.createElement(_headerCartCount2.default, (0, _extends3.default)({
        totalItemsCount: totalItemsCount,
        maxCountThreshold: maxCountThreshold
      }, (0, _automationIdUtils.getDataAutomationIdPair)("count", dataAutomationId)));
    }
  };

  return _react2.default.createElement(
    _link2.default,
    (0, _extends3.default)({
      className: "header-Cart display-block text-center",
      href: "/cart"
    }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
    _react2.default.createElement(_icon2.default, { name: "cart" }),
    _renderCartCount(),
    _react2.default.createElement(
      "span",
      { className: "visuallyhidden" },
      "Items in cart"
    )
  );
};

HeaderCart.displayName = "HeaderCart";

HeaderCart.propTypes = {
  /**
  Total number of items.
   */
  totalItemsCount: _react.PropTypes.number,
  /**
  The max count value. After totalItemsCount reaches maxCountThreshold,
  the HeaderCartCount would start displaying the value as
  (maxCountThreshold+) instead of actual totalItemsCount, for e.g. if maxCountThreshold is 99
  and totalItemsCount is 100, the component would display the total as 99+ instead of 100.
  Default value for this is 99.
   */
  maxCountThreshold: _react.PropTypes.number,
  /**
  dataAutomationId for the element.
   */
  dataAutomationId: _react.PropTypes.string
};

HeaderCart.defaultProps = {
  totalItemsCount: 0,
  maxCountThreshold: 99,
  dataAutomationId: "header-Cart"
};

exports.default = HeaderCart;