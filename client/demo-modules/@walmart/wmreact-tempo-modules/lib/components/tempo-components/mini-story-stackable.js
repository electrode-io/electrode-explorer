"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _miniStoryTile = require("../helper-components/mini-story-tile");

var _miniStoryTile2 = _interopRequireDefault(_miniStoryTile);

var _moduleHeader = require("../helper-components/module-header");

var _moduleHeader2 = _interopRequireDefault(_moduleHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
The MiniStory Stackable component has links, Images, Module Header and Theme Button.
 * Provides link to the special Categories
 * Offers scaling and cropping on with safe zone on defined breakpoints
 * Provides ModuleHeader and BannerMessage
 * Includes dropping the spot to align on smaller breakpoints.

```jsx
<MiniStoryStackable
  isMobile={true}
  moduleData={miniStoryData}/>
```
@import {MiniStoryStackable}
@component MiniStoryStackable
@playground
MiniStoryStackable
*/

var MiniStoryStackable = function MiniStoryStackable(props) {
  var _getSpots = function _getSpots(row, isMobile, dataAutomationId) {
    var lastRowIndex = row.length - 1;
    var miniStoryTiles = [];

    for (var rowIndex = 0; rowIndex <= lastRowIndex; rowIndex++) {
      var isLastRow = rowIndex === lastRowIndex;
      var lastSpotIndex = row[rowIndex].spot.length - 1;

      for (var spotIndex = 0; spotIndex <= lastSpotIndex; spotIndex++) {
        var isLastSpot = spotIndex === lastSpotIndex;
        var isSpotHiddenEligible = isLastRow && isLastSpot && rowIndex % 2 === 0;
        var _automationId = dataAutomationId + "-row-" + rowIndex + "-spot-" + spotIndex;

        miniStoryTiles.push(_react2.default.createElement(_miniStoryTile2.default, {
          key: rowIndex + "-" + spotIndex,
          spot: row[rowIndex].spot[spotIndex],
          isMobile: isMobile,
          isMobileHidden: isSpotHiddenEligible,
          dataAutomationId: _automationId
        }));
      }
    }
    return miniStoryTiles;
  };

  var _props$moduleData = props.moduleData;
  var moduleId = _props$moduleData.moduleId;
  var type = _props$moduleData.type;
  var _props$moduleData$con = _props$moduleData.configs;
  var headerTextLink = _props$moduleData$con.headerTextLink;
  var headerButtonLink = _props$moduleData$con.headerButtonLink;
  var row = _props$moduleData$con.row;
  var isMobile = props.isMobile;
  var dataAutomationId = props.dataAutomationId;

  var automationId = dataAutomationId + "-MiniStoryStackable";

  return _react2.default.createElement(
    _collectorContext2.default,
    { moduleId: moduleId },
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "ResponsiveContainer MiniStoryStackable",
        "data-module": type,
        "data-module-id": moduleId
      }, (0, _automationIdUtils.getDataAutomationIdPair)("MiniStoryStackable", dataAutomationId)),
      headerTextLink && _react2.default.createElement(_moduleHeader2.default, {
        headerTitle: headerTextLink.linkText,
        themeButton: headerButtonLink,
        dataAutomationId: automationId
      }),
      _react2.default.createElement(
        "div",
        { className: "Grid Grid--gutters MiniStoryStackable-grid" },
        _getSpots(row, isMobile, automationId)
      )
    )
  );
};

MiniStoryStackable.displayName = "MiniStoryStackable";

MiniStoryStackable.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: _react.PropTypes.shape({
    moduleId: _react.PropTypes.string,
    type: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      headerTextLink: _react.PropTypes.shape({
        linkText: _react.PropTypes.string
      }),
      headerButtonLink: _react.PropTypes.shape({
        linkText: _react.PropTypes.string
      }),
      row: _react.PropTypes.array.isRequired
    })
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

MiniStoryStackable.defaultProps = {
  isMobile: false,
  dataAutomationId: ""
};

exports.default = MiniStoryStackable;