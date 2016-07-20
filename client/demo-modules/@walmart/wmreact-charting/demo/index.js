"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _componentPlayground = require("component-playground");

var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _circleChart = require("../bundle.min").CircleChart;

var _circleChart2 = _interopRequireDefault(_circleChart);

var _circleChart3 = require("raw!./examples/circle-chart.example");

var _circleChart4 = _interopRequireDefault(_circleChart3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = _react2.default.createClass({
  displayName: "Index",

  propTypes: {
    scope: _react2.default.PropTypes.object
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: "component-documentation" },
      _react2.default.createElement(_componentPlayground2.default, { codeText: _circleChart4.default,
        scope: (0, _objectAssign2.default)({ React: _react2.default, CircleChart: _circleChart2.default }, this.props.scope || {}),
        noRender: false })
    );
  }
});

module.exports = Index;