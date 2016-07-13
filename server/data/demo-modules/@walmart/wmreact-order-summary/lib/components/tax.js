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

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _price = require("./price");

var _price2 = _interopRequireDefault(_price);

var _postalCodeForm = require("./postal-code-form");

var _postalCodeForm2 = _interopRequireDefault(_postalCodeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tax = function (_React$Component) {
  (0, _inherits3.default)(Tax, _React$Component);

  function Tax(props, context) {
    (0, _classCallCheck3.default)(this, Tax);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

    _this._hideFlyout = _this._hideFlyout.bind(_this);
    _this._toggleFlyout = _this._toggleFlyout.bind(_this);
    _this._updatePostalCode = _this._updatePostalCode.bind(_this);

    _this.state = {
      flyoutActive: false,
      submitPending: false
    };
    return _this;
  }

  Tax.prototype._updatePostalCode = function _updatePostalCode(postalCode) {
    var _this2 = this;

    var onTaxZipCodeChanged = this.props.onTaxZipCodeChanged;

    this.setState({ submitPending: true }, function () {
      if (onTaxZipCodeChanged) {
        onTaxZipCodeChanged(postalCode, function (response) {
          _this2._onPostalCodeChangeResponse(response);
        });
      }
    });
  };

  Tax.prototype._onPostalCodeChangeResponse = function _onPostalCodeChangeResponse(response) {
    var postalCodeForm = this.refs.postalCodeForm;

    if (response.success) {
      this.setState({ submitPending: false, flyoutActive: false });
    } else {
      this.setState({ submitPending: false });
      postalCodeForm.invalidate({ zipCodeField: "Please enter a valid zip code." });
    }
  };

  Tax.prototype._hideFlyout = function _hideFlyout() {
    this._toggleFlyout(false);
  };

  Tax.prototype._toggleFlyout = function _toggleFlyout(active) {
    this.setState({ flyoutActive: active });
  };

  Tax.prototype._renderFlyout = function _renderFlyout() {
    var _props = this.props;
    var taxPostalCode = _props.taxPostalCode;
    var onTaxZipCodeChanged = _props.onTaxZipCodeChanged;
    var automation = _props.automation;
    var tealeaf = _props.tealeaf;
    var flyout = _props.flyout;


    var flyoutTrigger = _react2.default.createElement(
      _button2.default,
      { className: "flyout-trigger", fakelink: true,
        "data-automation-id": automation.changeZipCode, "data-tl-id": tealeaf.changeZipCode },
      taxPostalCode ? "Change" : "Calculate tax"
    );

    var flyoutClassNames = (0, _classnames2.default)("OrderSummary-flyout OrderSummary-flyout--tax", !onTaxZipCodeChanged ? "visuallyhidden" : "");

    return _react2.default.createElement(
      "div",
      { className: flyoutClassNames },
      _react2.default.createElement(
        _flyout2.default,
        {
          direction: flyout.direction || "left",
          trigger: flyoutTrigger,
          onActiveChange: this._toggleFlyout,
          active: this.state.flyoutActive,
          closeOnClickOut: !this.state.submitPending
        },
        _react2.default.createElement(_postalCodeForm2.default, {
          ref: "postalCodeForm",
          postalCode: taxPostalCode,
          onSubmit: this._updatePostalCode,
          onCancel: this._hideFlyout,
          loading: this.state.submitPending,
          automation: automation.form,
          tealeaf: tealeaf.form })
      )
    );
  };

  Tax.prototype.render = function render() {
    var postalCode = void 0;
    var price = void 0;

    var _props2 = this.props;
    var className = _props2.className;
    var taxPostalCode = _props2.taxPostalCode;
    var taxTotal = _props2.taxTotal;
    var taxLabel = _props2.taxLabel;
    var taxCalculated = _props2.taxCalculated;
    var automation = _props2.automation;


    var componentClassName = (0, _classnames2.default)("OrderSummary-Tax OrderSummary-line clearfix", className);

    if (taxPostalCode) {
      postalCode = _react2.default.createElement(
        "span",
        { className: "OrderSummary-label-line2" },
        _react2.default.createElement(
          "span",
          { "data-automation-id": automation.baseOnZipCode },
          "Based on ",
          taxPostalCode
        ),
        " ",
        this._renderFlyout()
      );

      if (taxCalculated) {
        price = _react2.default.createElement(_price2.default, (0, _extends3.default)({}, this.props, { price: taxTotal, automationId: automation.price }));
      } else {
        price = _react2.default.createElement(
          "span",
          { className: "OrderSummary-Price OrderSummary-Price--light",
            "data-automation-id": automation.price },
          "Not Calculated"
        );
      }
    } else {
      price = _react2.default.createElement(
        "span",
        { className: "OrderSummary-Price", "data-automation-id": automation.price },
        this._renderFlyout()
      );
    }

    return _react2.default.createElement(
      "div",
      { className: componentClassName },
      _react2.default.createElement(
        "span",
        { className: "OrderSummary-label" },
        _react2.default.createElement(
          "span",
          { "data-automation-id": automation.label },
          taxLabel
        ),
        postalCode
      ),
      price
    );
  };

  return Tax;
}(_react2.default.Component);

Tax.defaultProps = {
  className: "",
  taxTotal: 0,
  taxLabel: "Est. Tax",
  taxPostalCode: null,
  taxCalculated: true,
  onTaxZipCodeChanged: null,
  flyout: {},
  automation: {
    label: "order-summary-tax-label",
    price: "order-summary-tax-amount",
    baseOnZipCode: "order-summary-tax-base-on-zip",
    changeZipCode: "order-summary-tax-change-zip"
  },
  tealeaf: {
    changeZipCode: "order-summary-tax-change-zip"
  }
};

Tax.displayName = "OrderSummary.Tax";

Tax.propTypes = {
  className: _react.PropTypes.string,
  taxTotal: _react.PropTypes.number.isRequired,
  taxLabel: _react.PropTypes.string.isRequired,
  taxPostalCode: _react.PropTypes.string,
  taxCalculated: _react.PropTypes.bool,
  onTaxZipCodeChanged: _react.PropTypes.func,
  automation: _react.PropTypes.shape({
    label: _react.PropTypes.string,
    price: _react.PropTypes.string,
    baseOnZipCode: _react.PropTypes.string,
    changeZipCode: _react.PropTypes.string,
    form: _postalCodeForm2.default.propTypes.automation
  }),
  tealeaf: _react.PropTypes.shape({
    changeZipCode: _react.PropTypes.string,
    form: _postalCodeForm2.default.propTypes.tealeaf
  }),
  flyout: _react.PropTypes.shape({
    direction: _react.PropTypes.string
  })
};

exports.default = Tax;