"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _ads = require("@walmart/wmreact-ads/lib/components/connected/ads");

var _ads2 = _interopRequireDefault(_ads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

The WMXOMPAdController component is a wrapper component for ads

```jsx
<WMXOMPAdController
  isMobile={true}
  moduleData={WMXOMPAdControllerData}/>
```
@import {WMXOMPAdController}
@component WMXOMPAdController
@playground
WMXOMPAdController
*/

var WMXOMPAdController = function WMXOMPAdController(props) {
  var _props$moduleData = props.moduleData;
  var moduleId = _props$moduleData.moduleId;
  var placement = _props$moduleData.configs.placement;
  var isMobile = props.isMobile;
  var dataAutomationId = props.dataAutomationId;

  var adsContainer = "sponsored-container";
  var placementId = placement === "top" ? "" : "-1";
  var placementDesktopClasses = placement === "top" ? adsContainer + "-" + placement + "-wrapper hide-content-max-m" : adsContainer + "-" + placement;

  var placementMobileClasses = placement === "top" ? "" : adsContainer + "-mobile-" + placement;

  if (placement === "top" && isMobile) {
    return null;
  }

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: "WMXOMPAdController",
      "data-module-id": moduleId
    }, (0, _automationIdUtils.getDataAutomationIdPair)("WMXOMPAdController", dataAutomationId)),
    !isMobile && _react2.default.createElement(_ads2.default, {
      id: "sponsored-container-" + placement + placementId,
      className: placementDesktopClasses
    }),
    _react2.default.createElement(_ads2.default, {
      id: "sponsored-container-mobile-" + placement + placementId,
      className: placementMobileClasses
    })
  );
};

WMXOMPAdController.displayName = "WMXOMPAdController";

WMXOMPAdController.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: _react.PropTypes.shape({
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      placement: _react.PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  /**
  To add proper torbit params (width and height)
  */
  isMobile: _react.PropTypes.bool,
  /**
  Tempo module type for analytics and automation testing
  */
  dataAutomationId: _react.PropTypes.string
};

WMXOMPAdController.defaultProps = {
  isMobile: false,
  dataAutomationId: ""
};

exports.default = WMXOMPAdController;