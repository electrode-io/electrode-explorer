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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chooser = require("@walmart/wmreact-chooser/lib/components/chooser");

var _chooser2 = _interopRequireDefault(_chooser);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AUTOMATION_CONTEXT = "ProductQuantity";
var AUTOMATION_LABEL = "Label";
var AUTOMATION_DROPDOWN = "Dropdown";

/**
 The quantity dropdown field for the product page.

 For example this is how we use this component.

 ```jsx
 <ProductQuantity label="Quantity: " quantityOptions={[1, 2, 3, 4, 5]}/>
 ```

 @import {ProductQuantity}
 @flags noVisibleRender
 @component ProductQuantity
 @playground
 ProductQuantity
 ```
 <ProductQuantity label="Quantity: " quantityOptions={[1, 2, 3, 4, 5]}/>
 ```
 */

var ProductQuantity = function (_Component) {
  (0, _inherits3.default)(ProductQuantity, _Component);

  function ProductQuantity() {
    (0, _classCallCheck3.default)(this, ProductQuantity);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ProductQuantity.prototype._getQuantityLabelField = function _getQuantityLabelField() {
    if (!(0, _isEmpty2.default)(this.props.label)) {
      return _react2.default.createElement(
        "span",
        (0, _extends3.default)({
          className: "font-semibold"
        }, (0, _automationIdUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, AUTOMATION_LABEL, process)),
        this.props.label
      );
    }
  };

  ProductQuantity.prototype._getQuantityValue = function _getQuantityValue(qtyVal) {
    return qtyVal.toString();
  };

  ProductQuantity.prototype._getQuantityOptions = function _getQuantityOptions() {
    var _this2 = this;

    var quantityOptions = this.props.quantityOptions;


    return quantityOptions.map(function (qtyVal, index) {
      var qtyValStr = _this2._getQuantityValue(qtyVal);
      return _react2.default.createElement(
        _chooser2.default.Option,
        { key: index, value: qtyValStr },
        qtyValStr
      );
    });
  };

  ProductQuantity.prototype.render = function render() {
    var _this3 = this;

    var clz = (0, _classnames2.default)("prod-ProductQuantity", this.props.className);
    return _react2.default.createElement(
      "span",
      { className: clz },
      this._getQuantityLabelField(),
      _react2.default.createElement(
        _chooser2.default,
        {
          onChange: function onChange(qtyStr) {
            _this3.props.onChange(parseInt(qtyStr, 10));
          },
          chooserName: this.props.label,
          automationId: (0, _automationIdUtils.getDataAutomationId)(AUTOMATION_CONTEXT, AUTOMATION_DROPDOWN) },
        this._getQuantityOptions()
      )
    );
  };

  return ProductQuantity;
}(_react.Component);

ProductQuantity.displayName = "ProductQuantity";

ProductQuantity.propTypes = {
  /**
   Event callback when selected quantity changes
   */
  "onChange": _react.PropTypes.func,
  /**
   An array of quantity options/values.
   */
  "quantityOptions": _react.PropTypes.array,
  /**
   The label for the quantity field
   */
  "label": _react.PropTypes.string,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  "className": _react.PropTypes.string
};

ProductQuantity.defaultProps = {
  "onChange": function onChange() {/*no-op*/},
  "quantityOptions": [1],
  "label": "Quantity : ",
  "className": ""
};

exports.default = ProductQuantity;