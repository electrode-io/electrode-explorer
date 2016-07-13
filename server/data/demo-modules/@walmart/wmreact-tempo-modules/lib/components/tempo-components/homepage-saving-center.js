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

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

Displaying Savings Center links with icons

```jsx
<HomepageSavingCenter moduleData={ HomepageSavingCenterData } />
```
@import {HomepageSavingCenter}
@component HomepageSavingCenter
@playground
HomepageSavingCenter
*/

var _renderLinks = exports._renderLinks = function _renderLinks(tiles, dataAutomationId) {
  var linkArray = tiles.map(function (tile, index) {
    var _tile$link = tile.link;
    var title = _tile$link.title;
    var value = _tile$link.clickThrough.value;
    var linkText = _tile$link.linkText;
    var uid = _tile$link.uid;
    var _tile$image = tile.image;
    var alt = _tile$image.alt;
    var height = _tile$image.height;
    var src = _tile$image.src;
    var width = _tile$image.width;


    return _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({
        className: "HomepageSavingCenter-link u-size-1 u-size-1-4-m pull-left font-semibold",
        href: value
      }, (0, _automationIdUtils.getDataAutomationIdPair)("HomepageSavingCenter-link-" + index, dataAutomationId), {
        alt: title,
        key: index,
        "data-uid": uid }),
      _react2.default.createElement(_image2.default, {
        className: "HomepageSavingCenter-image",
        alt: alt,
        height: height,
        src: src,
        width: width }),
      linkText
    );
  });
  return linkArray;
};

var HomepageSavingCenter = function HomepageSavingCenter(props) {
  var _props$moduleData = props.moduleData;
  var moduleId = _props$moduleData.moduleId;
  var type = _props$moduleData.type;
  var _props$moduleData$con = _props$moduleData.configs;
  var tiles = _props$moduleData$con.tiles;
  var title = _props$moduleData$con.title;
  var dataAutomationId = props.dataAutomationId;

  var automationId = dataAutomationId + "-HomepageSavingCenter";

  return _react2.default.createElement(
    _collectorContext2.default,
    { moduleId: moduleId },
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        "data-module": type,
        "data-module-id": moduleId,
        className: "ResponsiveContainer HomepageSavingCenter"
      }, (0, _automationIdUtils.getDataAutomationIdPair)("HomepageSavingCenter", dataAutomationId)),
      _react2.default.createElement(_moduleHeader2.default, {
        headerTitle: title,
        dataAutomationId: automationId
      }),
      _renderLinks(tiles, dataAutomationId)
    )
  );
};

HomepageSavingCenter.displayName = "HomepageSavingCenter";

HomepageSavingCenter.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains the header text, as well as the link text and URLs.
   */
  moduleData: _react.PropTypes.shape({
    moduleId: _react.PropTypes.string,
    type: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      title: _react.PropTypes.string,
      tiles: _react.PropTypes.arrayOf(_react2.default.PropTypes.shape({
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
    }).isRequired
  }).isRequired,
  /**
   Automation ID base string
   */
  dataAutomationId: _react.PropTypes.string
};

HomepageSavingCenter.defaultProps = {
  moduleData: {
    moduleId: "",
    type: "",
    configs: {
      title: "",
      tiles: [{
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

exports.default = HomepageSavingCenter;