"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _povStory = require("../helper-components/pov-story");

var _povStory2 = _interopRequireDefault(_povStory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

The SingleStory POV component has links, Images, Theme Button, dynamic pricing and theme buttons.
 * Provides link to the special Categories
 * Offers scaling and cropping on with safe zone on defined breakpoints

```jsx
<SingleStoryPOVResponsive
  isMobile={true}
  moduleData={singleStoryData}/>
```
@import {SingleStoryPOVResponsive}
@component SingleStoryPOVResponsive
@playground
SingleStoryPOVResponsive
*/

var SingleStoryPOVResponsive = function SingleStoryPOVResponsive(props) {
  var _props$moduleData = props.moduleData;
  var moduleId = _props$moduleData.moduleId;
  var type = _props$moduleData.type;
  var configs = _props$moduleData.configs;
  var isMobile = props.isMobile;
  var dataAutomationId = props.dataAutomationId;

  var automationId = dataAutomationId + "-SingleStoryPOVResponsive";

  return _react2.default.createElement(
    _collectorContext2.default,
    { moduleId: moduleId },
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: "SingleStoryPOVResponsive",
        "data-module": type,
        "data-module-id": moduleId
      }, (0, _automationIdUtils.getDataAutomationIdPair)("SingleStoryPOVResponsive", dataAutomationId)),
      _react2.default.createElement(_povStory2.default, {
        story: configs,
        povIndex: "0",
        isMobile: isMobile,
        lazy: false,
        dataAutomationId: automationId })
    )
  );
};

SingleStoryPOVResponsive.displayName = "SingleStoryPOVResponsive";

SingleStoryPOVResponsive.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: _react.PropTypes.shape({
    moduleId: _react.PropTypes.string,
    type: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      image: _react.PropTypes.Object,
      themeButton: _react.PropTypes.object,
      themeButtonColor: _react.PropTypes.string,
      buttonTextColor: _react.PropTypes.string,
      overlays: _react.PropTypes.array,
      mobileImage: _react.PropTypes.object
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

SingleStoryPOVResponsive.defaultProps = {
  isMobile: false,
  dataAutomationId: ""
};

exports.default = SingleStoryPOVResponsive;