"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _globalSocialIcons = require("@walmart/wmreact-footer/lib/components/global-social-icons");

var _globalSocialIcons2 = _interopRequireDefault(_globalSocialIcons);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays the GlobalSocialIcons with a
Higher Order Function wrapped around it called Copyright.
*/

var Copyright = function Copyright(props) {
  var _props$moduleData = props.moduleData;
  var type = _props$moduleData.type;
  var moduleId = _props$moduleData.moduleId;
  var configs = _props$moduleData.configs;


  return _react2.default.createElement(
    _collectorContext2.default,
    { moduleTypep: type },
    _react2.default.createElement(
      "div",
      { className: "sams-copyright-socialIcons-wrapper" },
      _react2.default.createElement(
        "div",
        { className: "text-copyright", "data-module": type, "data-module-id": moduleId },
        configs.copyrightText
      ),
      _react2.default.createElement(_globalSocialIcons2.default, props)
    )
  );
};
/* eslint react/prop-types: 0 */


Copyright.displayName = "Copyright";

Copyright.propTypes = {
  /**
   check mobile device
   */
  isMobile: _react.PropTypes.bool,
  /**
   Tempo module Data
   */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      icons: _react.PropTypes.array.isRequired,
      copyrightText: _react.PropTypes.string
    }).isRequired
  }).isRequired,
  /**
  Used for generating unique automation id's
  */
  autoId: _react.PropTypes.string
};

Copyright.defaultProps = {
  isMobile: false,
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      icons: [],
      copyrightText: ""
    }
  },
  autoId: ""
};

exports.default = Copyright;