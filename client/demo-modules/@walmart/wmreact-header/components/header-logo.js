"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  Walmart Logo component for use in the header.
  ```jsx
    <HeaderLogo shippingPass={true} />
  ```
  @import {HeaderLogo}
  @flags noVisibleRender
  @component HeaderLogo
  @playground
  HeaderLogo
*/

var HeaderLogo = function HeaderLogo(props) {
  var shippingPass = props.shippingPass;
  var dataAutomationId = props.dataAutomationId;


  var _showShippingPass = function _showShippingPass() {
    if (shippingPass) {
      return _react2.default.createElement("span", (0, _extends3.default)({
        className: "header-Logo-shippingPass"
      }, (0, _automationIdUtils.getDataAutomationIdPair)("shippingPass", dataAutomationId)));
    }
  };

  return _react2.default.createElement(
    _link2.default,
    (0, _extends3.default)({
      href: "/",
      className: "header-Logo display-block"
    }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
    _showShippingPass({ shippingPass: shippingPass, dataAutomationId: dataAutomationId }),
    _react2.default.createElement(
      "span",
      { className: "visuallyhidden" },
      "Walmart. Save Money. Live Better."
    )
  );
};

HeaderLogo.displayName = "HeaderLogo";

HeaderLogo.propTypes = {
  /**
  shippingPass means there is another
  shippingPass logo under the primary logo
  */
  shippingPass: _react.PropTypes.bool,
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string
};

HeaderLogo.defaultProps = {
  shippingPass: false,
  dataAutomationId: "header-Logo"
};

exports.default = HeaderLogo;