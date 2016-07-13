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

var _fireDataEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-data-event");

var _fireDataEvent2 = _interopRequireDefault(_fireDataEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Utility component which fires a data event containing the full Tempo response when inserted as a
* child in a TempoWrapper component.
* Usage:
* <TopLevelComponent>
*   <TempoWrapper>
*     <TempoAnalyticsCollector />
*     <TempoZone />
*   </TempoWrapper>
* </TopLevelComponent>
*/

/*eslint-disable no-unused-vars */ // Disabling because React has to be in context for JSX

var TempoAnalyticsCollector = function (_Component) {
  (0, _inherits3.default)(TempoAnalyticsCollector, _Component);

  function TempoAnalyticsCollector() {
    (0, _classCallCheck3.default)(this, TempoAnalyticsCollector);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  // fire data event when the component is mounted with all the Tempo data

  TempoAnalyticsCollector.prototype.componentDidMount = function componentDidMount() {
    (0, _fireDataEvent2.default)(this, "tempo", this.context.allModules);
  };

  TempoAnalyticsCollector.prototype.render = function render() {
    return null;
  };

  return TempoAnalyticsCollector;
}(_react.Component);

TempoAnalyticsCollector.displayName = "TempoAnalyticsCollector";

TempoAnalyticsCollector.contextTypes = {
  allModules: _react.PropTypes.object,
  analytics: _react.PropTypes.object
};

exports.default = TempoAnalyticsCollector;