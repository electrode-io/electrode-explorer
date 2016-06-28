"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P13NImage = function P13NImage(props) {
  var classNames = (0, _classnames2.default)("rvi-tile-image-link", "js-rvi-tile-image-link", {
    selected: props.selected
  });

  return _react2.default.createElement(
    "a",
    { className: classNames,
      "data-item-id": props.product.usItemId,
      onClick: props.onClick },
    _react2.default.createElement("img", { src: props.product.httpImageLink,
      alt: props.product.productName,
      className: props.classNames })
  );
};

P13NImage.propTypes = {
  "selected": _react.PropTypes.bool,
  "product": _react.PropTypes.object,
  "onClick": _react.PropTypes.func,
  "classNames": _react.PropTypes.string
};

P13NImage.defaultProps = {
  "classNames": "rvi-tile-image"
};

P13NImage.displayName = "P13NImage";

exports.default = P13NImage;