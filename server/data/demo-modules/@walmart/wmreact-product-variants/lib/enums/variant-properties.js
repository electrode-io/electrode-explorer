"use strict";

exports.__esModule = true;
exports.VariantProperties = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _availabilityStatus = require("./availability-status");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VariantProperties = exports.VariantProperties = {
  "id": _react2.default.PropTypes.string,
  "name": _react2.default.PropTypes.string,
  "selected": _react2.default.PropTypes.bool,
  "swatchImageUrl": _react2.default.PropTypes.string,
  "status": _react2.default.PropTypes.oneOf([_availabilityStatus.IN_STOCK, _availabilityStatus.OUT_OF_STOCK, _availabilityStatus.NOT_AVAILABLE]),
  "categoryId": _react2.default.PropTypes.string,
  "productIds": _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  "availabilityStatus": _react2.default.PropTypes.string,
  "rank": _react2.default.PropTypes.number
};