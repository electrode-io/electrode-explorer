"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Provides a mechanism to percolate more context information down
into the subtree.
@examples
```jsx
<CollectorContext productId={123213}>
  <YourApp />
</CollectorContext>
```
@component CollectorContext
@import {CollectorContext}
*/

var CollectorContext = function (_React$Component) {
  (0, _inherits3.default)(CollectorContext, _React$Component);

  function CollectorContext(props) {
    (0, _classCallCheck3.default)(this, CollectorContext);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
  }

  CollectorContext.prototype.getChildContext = function getChildContext() {
    var analytics = this.context.analytics;
    // do nothing if no analytics hooked up

    if (analytics !== undefined) {
      var _props = this.props;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ["children"]);

      return {
        analytics: (0, _extends3.default)({}, analytics, {
          context: (0, _extends3.default)({}, analytics.context, props)
        })
      };
    }
  };

  CollectorContext.prototype.render = function render() {
    return this.props.children;
  };

  return CollectorContext;
}(_react2.default.Component);
/* eslint prefer-const: 0 */


exports.default = CollectorContext;


CollectorContext.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

CollectorContext.childContextTypes = {
  analytics: _react2.default.PropTypes.object
};

CollectorContext.propTypes = {
  children: _react2.default.PropTypes.object
};