"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = collectorWrapper;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventsWrapper = require("./events-wrapper");

var _eventsWrapper2 = _interopRequireDefault(_eventsWrapper);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function collectorWrapper() {
  var eventsToWrap = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return function (WrappedComponent) {
    var withRef = options.withRef;

    withRef = withRef || false;

    var Connect = function (_React$Component) {
      (0, _inherits3.default)(Connect, _React$Component);

      function Connect() {
        (0, _classCallCheck3.default)(this, Connect);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
      }

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2.default)(withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } as the second argument of the analyticsWrapper() call.");

        return this.refs.wrappedInstance;
      };

      Connect.prototype.render = function render() {
        var ref = withRef ? "wrappedInstance" : null;
        var props = {};
        for (var k in this.props) {
          if (eventsToWrap[k] === undefined) {
            props[k] = this.props[k];
          }
        }
        return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, (0, _eventsWrapper2.default)(this, eventsToWrap), props, { ref: ref }));
      };

      return Connect;
    }(_react2.default.Component);

    Connect.contextTypes = {
      analytics: _react2.default.PropTypes.object
    };

    return Connect;
  };
}
/* eslint func-style: 0 */