"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _globalFooterItem = require("./global-footer-item");

var _globalFooterItem2 = _interopRequireDefault(_globalFooterItem);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays the GlobalSocialIcons

@import {GlobalSocialIcons}
@flags noVisibleRender
@component GlobalSocialIcons
@playground
Global Social Icons
```
<GlobalSocialIcons moduleData={
  {
   "type":"GlobalSocialIcons",
   "configs":{
      "icons": [
        {
          "link": {
            "linkText": "facebook",
            "title": "facebook",
            "clickThrough": {
              "type": "url",
              "value": "https://www.facebook.com/walmart"
            },
            "uid": "iyoJypJ2"
          },
          "uid": "5uh7ZTD-"
        }
     ]
   },
   "module_id":"640e8519-fda6-4bf3-aae5-caa0574a2345"
  }
}/>
```
@return {ReactElement} Element tree
@param {object} props Props
*/

/* eslint react/prop-types: 0 */
var GlobalSocialIcons = function GlobalSocialIcons(props) {
  var isMobile = props.isMobile;
  var autoId = props.autoId;
  var heading = props.heading;
  var _props$moduleData = props.moduleData;
  var type = _props$moduleData.type;
  var moduleId = _props$moduleData.moduleId;
  var configs = _props$moduleData.configs;


  var _getHeading = function _getHeading() {
    return _react2.default.createElement(
      _heading2.default.H5,
      {
        className: "footer-GlobalSocialIcons--heading hide-content display-inline-block-xl" },
      heading
    );
  };

  var _renderLinkIcons = function _renderLinkIcons(linkDetails, index) {
    var link = linkDetails.link;

    var linkSuffix = "link-" + index;
    return _react2.default.createElement(_globalFooterItem2.default, { link: link, icon: true, className: "display-inline-block",
      newTab: true, key: index, autoId: autoId + "-" + linkSuffix });
  };

  return _react2.default.createElement(
    _collectorContext2.default,
    { moduleType: type },
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "footer-GlobalSocialIcons", "data-module": type, "data-module-id": moduleId
      }, (0, _automationIdUtils.getDataAutomationIdPair)(autoId, "")),
      !isMobile && !(0, _isEmpty2.default)(heading) && _getHeading(heading),
      _react2.default.createElement(
        "div",
        { className: "footer-GlobalSocialIcons--list display-inline-block" },
        configs.icons.map(_renderLinkIcons)
      )
    )
  );
};

GlobalSocialIcons.displayName = "GlobalSocialIcons";

GlobalSocialIcons.propTypes = {
  /**
   check mobile device
   */
  isMobile: _react.PropTypes.bool,
  /*
  heading to display before Icons
  */
  heading: _react.PropTypes.string,
  /**
   Tempo module Data
   */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      icons: _react.PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  /**
  Used for generating unique automation id's
  */
  autoId: _react.PropTypes.string
};

GlobalSocialIcons.defaultProps = {
  isMobile: false,
  heading: "Stay Connected",
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      icons: []
    }
  },
  autoId: ""
};

exports.default = GlobalSocialIcons;