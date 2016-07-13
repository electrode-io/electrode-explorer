"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _electrodeUiConfig = require("@walmart/electrode-ui-config");

var _electrodeUiConfig2 = _interopRequireDefault(_electrodeUiConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The EnvironmentInfo component is used to
 display enviorment configuration settings to frontend.

 ```
 <EnvironmentInfo />
 ```

 @import {EnvironmentInfo}
 @flags noVisibleRender
 @component EnvironmentInfo
 @playground
 EnvironmentInfo
 */

var EnvironmentInfo = function (_React$Component) {
  (0, _inherits3.default)(EnvironmentInfo, _React$Component);

  function EnvironmentInfo() {
    (0, _classCallCheck3.default)(this, EnvironmentInfo);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  EnvironmentInfo.prototype.render = function render() {
    var _ref = _electrodeUiConfig2.default.ui || {};

    var node = _ref.node;
    var cloud = _ref.cloud;
    var oneOpsEnv = _ref.oneOpsEnv;
    var profile = _ref.profile;
    var applicationVersion = _ref.applicationVersion;
    var applicationSha = _ref.applicationSha;

    return _react2.default.createElement(
      "div",
      { className: "env-info ResponsiveContainer" },
      "Electrode, Comp-",
      node,
      ", DC-",
      cloud,
      ", ENV-",
      oneOpsEnv,
      ", PROF-",
      profile,
      ", VER-",
      applicationVersion,
      ", SHA-",
      applicationSha
    );
  };

  return EnvironmentInfo;
}(_react2.default.Component);

EnvironmentInfo.displayName = "EnvironmentInfo";

exports.default = EnvironmentInfo;