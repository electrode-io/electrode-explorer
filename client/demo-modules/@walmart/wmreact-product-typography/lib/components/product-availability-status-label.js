"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _availabilityStatus = require("../enums/availability-status");

var _availabilityStatus2 = _interopRequireDefault(_availabilityStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 This is a label that displays the Availability
 status of an item
 For example this is how we use this component.

 ```jsx
 <ProductAvailabilityStatusLabel
   availabilityStatus="OUT_OF_STOCK"
 />
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductAvailabilityStatusLabel}
 @component ProductAvailabilityStatusLabel
 @playground
 ProductAvailabilityStatusLabel
 ```
 <div>
  <ProductAvailabilityStatusLabel
    availabilityStatus="OUT_OF_STOCK"
  />
 </div>
 ```
 */

exports.default = function (props) {
  var _getStatusLabel = function _getStatusLabel() {
    var OUT_OF_STOCK = _availabilityStatus2.default.OUT_OF_STOCK;
    var RETIRED = _availabilityStatus2.default.RETIRED;
    var availabilityStatus = props.availabilityStatus;

    if (availabilityStatus === OUT_OF_STOCK) {
      return "Out of stock";
    } else if (availabilityStatus === RETIRED) {
      return "No longer available";
    } else {
      return "";
    }
  };

  var statusClassNames = (0, _classnames2.default)("copy-mini", "display-block-xs", "font-bold", "u-textBlack");
  return _react2.default.createElement(
    "span",
    { className: statusClassNames },
    _getStatusLabel()
  );
};