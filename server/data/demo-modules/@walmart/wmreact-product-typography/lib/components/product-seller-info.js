"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _automationUtils = require("@walmart/automation-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This componet display the seller's info on the marketplace page.
```jsx
<ProductSellerInfo
  name="OJ Commerce"
  link="http://www.ojcommerce.com/"
  logo="http://cloudfront.ojcommerce.com/img/des/logo.png"
  returnPolicy=
    "https://www.walmart.com/reviews/seller/42?offerId=64CC7E13E445433BA905A9AD8696126E"
/>
*/

var AUTOMATION_CONTEXT = "ProductSellerInfo";
var DEFAULT_SOLD_AT = "Sold at";
var DEFAULT_SOLD_AND_SHIPPED_BY = "Sold & Shipped by";

var _renderLogo = function _renderLogo(_ref) {
  var isWM = _ref.isWM;
  var link = _ref.link;
  var logo = _ref.logo;
  var isResponsive = _ref.isResponsive;
  var removeLink = _ref.removeLink;

  if (!isWM && !logo || removeLink) {
    // if it's not a wm seller, and it doesn't have a logo.
    // BTW, this should be considered as a data error.
    // For now, we don't show logo
    return null;
  }
  var sellerLink = isWM ? "http://help.walmart.com/" : link;
  var backgroundImage = isWM ? "" : "url(" + logo + ")";
  var logoClassNames = (0, _classnames2.default)("hide-content", { "SellerInfo-walmart-logo": isWM,
    "display-block-m": isResponsive }, "SellerInfo-logo");

  return _react2.default.createElement(_link2.default, (0, _extends3.default)({
    href: sellerLink,
    style: { backgroundImage: backgroundImage }
  }, (0, _automationUtils.getDataAutomationIdPair)("Logo", AUTOMATION_CONTEXT, process), {
    className: logoClassNames
  }));
};

var _renderSoiMessage = function _renderSoiMessage(isWM, isSOI, isResponsive) {
  if (isWM && isSOI) {
    return _react2.default.createElement(
      "span",
      { className: (0, _classnames2.default)("SellerInfo-Soi", { "hide-content-m": isResponsive }) },
      "In-store purchase only"
    );
  }
};

var _renderSellerLink = function _renderSellerLink(sellerName, sellerLink, removeLink) {
  if (removeLink) {
    return _react2.default.createElement(
      "span",
      (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("SellerName", AUTOMATION_CONTEXT, process), {
        className: "seller-shipping-msg font-bold u-textBlue" }),
      sellerName
    );
  }

  return _react2.default.createElement(
    _link2.default,
    (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("SellerName", AUTOMATION_CONTEXT, process), {
      href: sellerLink, className: "seller-shipping-msg font-bold"
    }),
    sellerName
  );
};

var _renderReturnPolicy = function _renderReturnPolicy(_ref2) {
  var isWM = _ref2.isWM;
  var isSOI = _ref2.isSOI;
  var returnPolicy = _ref2.returnPolicy;

  var returnPolicyText = "Return policy";
  if (isWM) {
    returnPolicyText = isSOI ? "Free returns in stores" : "Free returns online and in stores";
    return _react2.default.createElement(
      "span",
      (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("ReturnPolicy", AUTOMATION_CONTEXT, process), {
        className: "SellerInfo-return-policy font-semibold"
      }),
      returnPolicyText
    );
  }
  return _react2.default.createElement(
    _link2.default,
    (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("ReturnPolicy", AUTOMATION_CONTEXT, process), {
      href: returnPolicy, className: "SellerInfo-return-policy"
    }),
    returnPolicyText
  );
};

var ProductSellerInfo = function ProductSellerInfo(props) {
  var isWM = props.isWM;
  var isSOI = props.isSOI;
  var name = props.name;
  var link = props.link;
  var removeLink = props.removeLink;
  var className = props.className;
  var returnPolicy = props.returnPolicy;
  var isResponsive = props.isResponsive;

  var isWMSoi = isWM && isSOI;
  var soldShippedBy = isWMSoi ? DEFAULT_SOLD_AT : DEFAULT_SOLD_AND_SHIPPED_BY;
  var sellerName = isWM ? "Walmart" : name;
  sellerName = isWMSoi ? "Walmart store" : sellerName;
  var sellerLink = isWM ? "http://help.walmart.com/" : link;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("ProductSellerInfo", AUTOMATION_CONTEXT, process), {
      className: (0, _classnames2.default)("SellerInfo", { "SellerInfo-responsive": isResponsive }, className)
    }),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "span",
        (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("SoldShippedBy", AUTOMATION_CONTEXT, process), {
          className: "SellerInfo-shipping-msg"
        }),
        _react2.default.createElement(
          "span",
          { className: "no-wrap" },
          soldShippedBy
        )
      ),
      _renderSellerLink(sellerName, sellerLink, removeLink),
      isWM ? _react2.default.createElement("i", {
        className: (0, _classnames2.default)("wmicon wmicon-16 wmicon-spark xxs-margin-left", { "hide-content-m": isResponsive })
      }) : null,
      _renderSoiMessage(isWM, isSOI, isResponsive)
    ),
    _react2.default.createElement(
      "div",
      { className: "logo-return-container" },
      _renderLogo(props),
      returnPolicy && _renderReturnPolicy(props)
    )
  );
};

ProductSellerInfo.displayName = "ProductSellerInfo";

ProductSellerInfo.propTypes = {
  /**
   if the seller is walmart online or store
  */
  isWM: _react.PropTypes.bool,
  /**
   store only item from walmart
  */
  isSOI: _react.PropTypes.bool,
  /**
   is pickup today
  */
  name: _react.PropTypes.string,
  /**
   seller's logo showing on the component
  */
  logo: _react.PropTypes.string,
  /**
   seller's return policy showing on the component
  */
  returnPolicy: _react.PropTypes.string,
  /**
   seller's website linking from the name and logo
  */
  link: _react.PropTypes.string,
  /**
   remove link for use in sbot
  */
  removeLink: _react.PropTypes.bool,
  /**
   Any additonal style classes
   */
  className: _react2.default.PropTypes.string
};

ProductSellerInfo.defaultProps = {};

exports.default = ProductSellerInfo;