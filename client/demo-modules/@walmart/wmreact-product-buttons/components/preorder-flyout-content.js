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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _formattedDate = require("./formatted-date");

var _formattedDate2 = _interopRequireDefault(_formattedDate);

var _automationUtils = require("@walmart/automation-utils");

var _copy = require("@walmart/wmreact-base/lib/components/copy");

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CTA_PREORDER_FLYOUT_TEXT_CONTEXT = "cta_preorder_flyout_text";
var SHIP_BY_TYPE = "SHIP_BY";
var ARRIVE_BY_TYPE = "ARRIVE_BY";
var DEFAULT_PREORDER_MSG = "Preorder now, and we'll contact you when the item is ready to ship.";
/**
 A PreorderFlyoutContent component. Displayed when the product is preorder eligible.

 For example this is how we use this component.

 ```jsx
<PreorderFlyoutContent/>
 ```

 @import {PreorderFlyoutContent}
 @flags noVisibleRender
 @component PreorderFlyoutContent
 @playground
 PreorderFlyoutContent
 ```
<PreorderFlyoutContent/>
 ```
 */

var PreorderFlyoutContent = function (_React$Component) {
  (0, _inherits3.default)(PreorderFlyoutContent, _React$Component);

  function PreorderFlyoutContent() {
    (0, _classCallCheck3.default)(this, PreorderFlyoutContent);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  PreorderFlyoutContent.prototype._getComponentClasses = function _getComponentClasses(_ref) {
    var className = _ref.className;

    return (0, _classnames2.default)("prod-PreorderFlyoutContent", className);
  };

  PreorderFlyoutContent.prototype._renderFormattedDateComponent = function _renderFormattedDateComponent(_ref2) {
    var preorderDate = _ref2.preorderInfo.preorderDate;
    var autoId = _ref2.autoId;

    return _react2.default.createElement(
      _copy2.default.Small,
      null,
      _react2.default.createElement(_formattedDate2.default, (0, _extends3.default)({
        className: "font-bold",
        value: preorderDate,
        format: "dddd, MMMM Do",
        timezone: "UTC"
      }, (0, _automationUtils.getDataAutomationIdPair)(CTA_PREORDER_FLYOUT_TEXT_CONTEXT, autoId, process)))
    );
  };

  PreorderFlyoutContent.prototype._getStatusLabel = function _getStatusLabel(_ref3) {
    var _ref3$preorderInfo = _ref3.preorderInfo;
    var streetDateType = _ref3$preorderInfo.streetDateType;
    var preorderDate = _ref3$preorderInfo.preorderDate;

    if (!this._hasPreorderDate({ preorderInfo: { preorderDate: preorderDate } })) {
      return DEFAULT_PREORDER_MSG;
    }

    switch (streetDateType) {
      case SHIP_BY_TYPE:
        return "Ships on:";
      default:
        return "Arrives by:";
    }
  };

  PreorderFlyoutContent.prototype._hasPreorderDate = function _hasPreorderDate(_ref4) {
    var preorderDate = _ref4.preorderInfo.preorderDate;

    return preorderDate !== null && preorderDate !== undefined;
  };

  PreorderFlyoutContent.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: this._getComponentClasses(this.props) },
      _react2.default.createElement(
        _copy2.default.Small,
        null,
        this._getStatusLabel(this.props)
      ),
      this._hasPreorderDate(this.props) && this._renderFormattedDateComponent(this.props)
    );
  };

  return PreorderFlyoutContent;
}(_react2.default.Component);

PreorderFlyoutContent.displayName = "PreorderFlyoutContent";

PreorderFlyoutContent.propTypes = {
  /**
   Any additonal style classes
   */
  className: _react2.default.PropTypes.string,
  /**
  Used for generating unique automation id's
  */
  autoId: _react2.default.PropTypes.string,
  /**
   The date it ships and tye type of preorder it is.
   */
  preorderInfo: _react2.default.PropTypes.shape({
    streetDateType: _react2.default.PropTypes.oneOf([SHIP_BY_TYPE, ARRIVE_BY_TYPE]),
    preorderDate: _react2.default.PropTypes.number
  })
};

PreorderFlyoutContent.defaultProps = {
  className: "",
  autoId: "",
  preorderInfo: {
    streetDateType: SHIP_BY_TYPE,
    preorderDate: undefined
  }
};

exports.default = PreorderFlyoutContent;