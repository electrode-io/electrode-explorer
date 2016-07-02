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

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

var _reactAsyncScript = require("react-async-script");

var _reactAsyncScript2 = _interopRequireDefault(_reactAsyncScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Need to investigate how to include be js as part of the build process.
//Probably has to be custom step in addtion to the webpack bundling
//until then using the cdn version to validate the functionality
/* eslint-disable max-len */
var URL = "https://i5.walmartimages.com/dfw/63fd9f59-e6da/k2-_9c753d01-f695-4c83-a753-455824bdb1fd.v11.js";
/* eslint-enable max-len */

var globalName = "cf";

var CyberFend = function (_React$Component) {
  (0, _inherits3.default)(CyberFend, _React$Component);

  function CyberFend() {
    (0, _classCallCheck3.default)(this, CyberFend);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  CyberFend.prototype.componentDidMount = function componentDidMount() {
    if (_exenv2.default.canUseDOM && !window._cf) {
      var _cf = window._cf = window._cf || [];
      _cf.push(["_setJsPost", false]);
      _cf.push(["_setJavaScriptKey", this.props.beKey]);
      _cf.push(["_setInitTime", Date.now ? Date.now() : +new Date()]);
      _cf.push(["_setSDFieldNames", "sensor-data"]);
      _cf.push(["_setEnReadDocUrl", false]);
    }
  };

  CyberFend.prototype._generateSensorData = function _generateSensorData() {
    if (!this.props.cf) {
      return "";
    }
    this.props.cf.cfsubmit();
    return this.refs.SensorData.value;
  };

  CyberFend.prototype.render = function render() {
    return _react2.default.createElement("input", { ref: "SensorData", type: "hidden", id: "sensor-data" });
  };

  return CyberFend;
}(_react2.default.Component);

CyberFend.propTypes = {
  beKey: _react.PropTypes.string.isRequired,
  cf: _react.PropTypes.shape({
    cfsubmit: _react.PropTypes.func.isRequired
  })
};

exports.default = (0, _reactAsyncScript2.default)(CyberFend, URL, {
  globalName: globalName,
  exposeFuncs: ["_generateSensorData"]
});