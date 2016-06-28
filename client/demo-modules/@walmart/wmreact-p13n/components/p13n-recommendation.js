"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _p13nCarousel = require("./p13n-carousel");

var _p13nCarousel2 = _interopRequireDefault(_p13nCarousel);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P13NRecommendation = function P13NRecommendation(props) {
  var classNames = (0, _classnames2.default)("slick-module", "module-p13n-recommendations", "js-module-p13n-recommendations", "ResponsiveContainer", "module-p13n-recommendations-parent-none");

  return _react2.default.createElement(
    "div",
    { className: classNames },
    _react2.default.createElement(_p13nCarousel2.default, {
      moduleTitle: props.irsData && props.irsData.moduleTitle,
      products: props.products,
      handleClick: props.handleClick
    })
  );
};

P13NRecommendation.propTypes = {
  "irsData": _react.PropTypes.object,
  "products": _react.PropTypes.array,
  "handleClick": _react.PropTypes.func
};

P13NRecommendation.displayName = "P13NRecommendation";

exports.default = P13NRecommendation;