"use strict";

exports.__esModule = true;
exports._renderLinks = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _moduleHeader = require("../helper-components/module-header");

var _moduleHeader2 = _interopRequireDefault(_moduleHeader);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

Displaying links to the Highlighted departments with a header

```jsx
  <HighlightedDepartments moduleData={
  {
    "type":"HighlightedDepartments",
    "configs":{
      "header":"In the Spotlight",
      "links":[
        {
          "link":{
            "linkText":"Father's Day",
            "title":"Father's Day",
            "clickThrough":{
              "type":"url",
              "value":"/"
            },
            "uid":"HSlyb82-"
          },
          "uid":"5YljRMTM"
        },
        {
          "link":{
            "linkText":"Fall Savings",
            "title":"Fall Savings",
            "clickThrough":{
              "type":"url",
              "value":"/"
            },
            "uid":"I2SSPQTo"
          },
          "uid":"-MBdxI4n"
        },
        {
          "link":{
            "linkText":"Swim Shop",
            "title":"Swim Shop",
            "clickThrough":{
              "type":"url",
              "value":"/"
            },
            "uid":"4o59Sc--"
          },
          "uid":"5sUdwiTz"
        },
        {
          "link":{
            "linkText":"Back to College",
            "title":"Back to College",
            "clickThrough":{
              "type":"url",
              "value":"/"
            },
            "uid":"8_U-rz-O"
          },
          "uid":"UFXHxbNe"
        },
        {
          "link":{
            "linkText":"Back to School",
            "title":"Back to School",
            "clickThrough":{
              "type":"url",
              "value":"/"
            },
            "uid":"Qbw96gbm"
          },
          "uid":"KgZF9Pd2"
        }
      ]
    },
    "moduleId":"6bbb57c3-681e-4337-aec9-bc75168de1b4"
  }
} />
```
@import {HighlightedDepartments}
@component HighlightedDepartments
@playground
HighlightedDepartments
*/

var _renderLinks = exports._renderLinks = function _renderLinks(configs, dataAutomationId) {
  var linkArray = configs.links.map(function (linkData, index) {
    if (linkData.link) {
      var _linkData$link = linkData.link;
      var title = _linkData$link.title;
      var value = _linkData$link.clickThrough.value;
      var linkText = _linkData$link.linkText;
      var uid = _linkData$link.uid;

      return _react2.default.createElement(
        _link2.default,
        (0, _extends3.default)({
          className: "HighlightedDepartments-button u-size-1 u-size-1-4-m pull-left font-semibold",
          href: value,
          key: index
        }, (0, _automationIdUtils.getDataAutomationIdPair)("HighlightedDepartments-link-" + index, dataAutomationId), {
          alt: title,
          "data-uid": uid }),
        linkText
      );
    } else {
      return null;
    }
  });

  return linkArray;
};

var HighlightedDepartments = function HighlightedDepartments(props) {
  var _props$moduleData = props.moduleData;
  var moduleId = _props$moduleData.moduleId;
  var type = _props$moduleData.type;
  var configs = _props$moduleData.configs;
  var dataAutomationId = props.dataAutomationId;

  var automationId = dataAutomationId + "-HighlightedDepartments";

  return _react2.default.createElement(
    _collectorContext2.default,
    { moduleId: moduleId },
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        "data-module": type,
        "data-module-id": moduleId,
        className: "ResponsiveContainer HighlightedDepartments"
      }, (0, _automationIdUtils.getDataAutomationIdPair)("HighlightedDepartments", dataAutomationId)),
      _react2.default.createElement(_moduleHeader2.default, {
        headerTitle: configs.header,
        dataAutomationId: automationId
      }),
      _renderLinks(configs, dataAutomationId)
    )
  );
};

HighlightedDepartments.displayName = "HighlightedDepartments";

HighlightedDepartments.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains the header text, as well as the link text and URLs.
   */
  moduleData: _react.PropTypes.shape({
    moduleId: _react.PropTypes.string,
    type: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      header: _react.PropTypes.string,
      links: _react.PropTypes.arrayOf(_react2.default.PropTypes.shape({
        link: _react.PropTypes.shape({
          linkText: _react.PropTypes.string,
          title: _react.PropTypes.string,
          clickThrough: _react.PropTypes.shape({
            type: _react.PropTypes.string,
            value: _react.PropTypes.string
          })
        }),
        uid: _react.PropTypes.string
      }))
    })
  }).isRequired,
  /**
   Automation ID base string
   */
  dataAutomationId: _react.PropTypes.string
};

HighlightedDepartments.defaultProps = {
  moduleData: {
    moduleId: "",
    type: "",
    configs: {
      header: "",
      links: [{
        link: {
          linkText: "",
          title: "",
          clickThrough: {
            type: "",
            value: ""
          },
          uid: ""
        },
        uid: ""
      }]
    }
  },
  dataAutomationId: ""
};

exports.default = HighlightedDepartments;