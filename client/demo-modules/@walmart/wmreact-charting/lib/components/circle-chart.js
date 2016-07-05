"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _color = require("color");

var _color2 = _interopRequireDefault(_color);

var _reactTweenState = require("react-tween-state");

var _reactTweenState2 = _interopRequireDefault(_reactTweenState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PathGroup = _react2.default.createClass({
  displayName: "PathGroup",

  mixins: [_reactTweenState2.default.Mixin],

  propTypes: {
    path: _react2.default.PropTypes.string,
    percentage: _react2.default.PropTypes.number,
    color: _react2.default.PropTypes.string,
    strokeWidth: _react2.default.PropTypes.number,
    size: _react2.default.PropTypes.number
  },

  getInitialState: function getInitialState() {
    var pathArray = this.props.path.split(",");
    var dashArray = (100 - pathArray[6]) * 100 - pathArray[1].split(" ")[0] * (pathArray[7] - pathArray[1].split(" ")[0]);
    return {
      dashArray: dashArray,
      dashOffset: dashArray - 1
    };
  },
  componentDidMount: function componentDidMount() {
    this.tweenState("dashOffset", {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: 500,
      endValue: this.state.dashArray * this._getInversePercentage()
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps() {
    this.tweenState("dashOffset", {
      easing: _reactTweenState2.default.easingTypes.easeOutSine,
      duration: 500,
      endValue: this.state.dashArray * this._getInversePercentage()
    });
  },
  _getInversePercentage: function _getInversePercentage() {
    var percentage = this.props.percentage;

    if (percentage === 0) {
      percentage = 1;
    }

    if (percentage === 100) {
      percentage = 99;
    }

    return (100 - percentage) * 0.01;
  },
  render: function render() {
    var background = new _color2.default(this.props.color);
    var foreground = new _color2.default(this.props.color);

    var backgroundStyle = {
      fill: "none",
      stroke: background.darken(0.3).hexString(),
      strokeWidth: this.props.strokeWidth
    };

    var foregroundStyle = {
      fill: "none",
      stroke: foreground.hexString(),
      strokeLinecap: "round",
      strokeWidth: this.props.strokeWidth - 5,
      strokeDasharray: this.state.dashArray,
      strokeDashoffset: this.getTweeningValue("dashOffset")
    };

    return _react2.default.createElement(
      "g",
      null,
      _react2.default.createElement("circle", {
        cx: "100",
        cy: "100",
        r: this.props.size,
        style: backgroundStyle }),
      _react2.default.createElement("path", {
        d: this.props.path,
        style: foregroundStyle })
    );
  }
});

var CircleChart = function (_React$Component) {
  (0, _inherits3.default)(CircleChart, _React$Component);

  function CircleChart() {
    (0, _classCallCheck3.default)(this, CircleChart);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  /* eslint-disable max-params */
  /* Requires refactor, max-params should be 3, this is 4 */

  CircleChart.prototype._generatePath = function _generatePath(size, value, total, R) {
    var alpha = 360 / total * value;
    var a = (90 - alpha) * Math.PI / 180;
    var x = size + R * Math.cos(a);
    var y = size - R * Math.sin(a);
    var center = void 0;
    var path = void 0;

    if (total === value) {
      path = "M" + size + "," + (size - R) + " A" + R + "," + R + "," + 0 + "," + 1 + "," + 1 + "," + (size - 0.01) + "," + size - R;
    } else {
      if (alpha > 180) {
        center = 1;
      } else {
        center = 0;
      }
      path = "M" + size + "," + (size - R) + " A" + R + "," + R + "," + 0 + "," + center + "," + 1 + "," + x + "," + y;
    }
    return path;
  };
  /* eslint-enable max-params */


  CircleChart.prototype.renderData = function renderData() {
    var self = this;
    var circleSize = 74;
    var strokeWidth = 60 / this.props.data.length;
    return _react2.default.createElement(
      "svg",
      { height: this.props.height, width: this.props.width, viewBox: "0 0 200 200" },
      this.props.data.map(function (d, index) {
        var path = _react2.default.createElement(PathGroup, {
          key: index,
          path: self._generatePath(100, 99, 100, circleSize),
          percentage: d.percentage,
          size: circleSize,
          color: d.color,
          strokeWidth: strokeWidth
        });

        circleSize -= strokeWidth + 2;

        return path;
      })
    );
  };

  CircleChart.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: "circle-chart" },
      this.renderData()
    );
  };

  return CircleChart;
}(_react2.default.Component);

CircleChart.displayName = "CircleChart";

CircleChart.propTypes = {
  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  data: _react2.default.PropTypes.array.isRequired
};

CircleChart.defaultProps = {
  width: 200,
  height: 200,
  data: []
};

module.exports = CircleChart;