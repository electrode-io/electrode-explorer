"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _histogramBar = require("./histogram-bar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Histogram = function Histogram(props) {
  var className = props.className;

  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)("ReviewHistogram hide-content-max-s", className) },
    props.children
  );
};

Histogram.propTypes = {
  /**
   * Custom classes for customizing this component
   */
  className: _react.PropTypes.string,
  /**
   * Children to render in container
   */
  children: _react2.default.PropTypes.node
};

Histogram.Bar = _histogramBar.HistogramBar;

exports.default = Histogram;