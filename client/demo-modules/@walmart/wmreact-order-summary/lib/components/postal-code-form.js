"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _arrange = require("@walmart/wmreact-layout/lib/components/arrange");

var _arrange2 = _interopRequireDefault(_arrange);

var _zipcode = require("@walmart/wmreact-forms/lib/components/zipcode");

var _zipcode2 = _interopRequireDefault(_zipcode);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _formValidation = require("@walmart/wmreact-validation/lib/mixins/form-validation");

var _formValidation2 = _interopRequireDefault(_formValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostalCodeForm = _react2.default.createClass({
  displayName: "OrderSummary.PostalCodeForm",

  mixins: [(0, _formValidation2.default)(["zipCodeField"])],

  propTypes: {
    className: _react.PropTypes.string,
    postalCode: _react.PropTypes.string,
    onSubmit: _react.PropTypes.func.isRequired,
    onCancel: _react.PropTypes.func.isRequired,
    loading: _react.PropTypes.bool,
    automation: _react.PropTypes.shape({
      input: _react.PropTypes.string,
      submit: _react.PropTypes.string,
      cancel: _react.PropTypes.string
    }),
    tealeaf: _react.PropTypes.shape({
      input: _react.PropTypes.string,
      submit: _react.PropTypes.string,
      cancel: _react.PropTypes.string
    })
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: "",
      postalCode: "",
      loading: false,
      automation: {
        input: "order-summary-tax-flyout-input",
        submit: "order-summary-tax-flyout-calculate",
        cancel: "order-summary-tax-flyout-cancel"
      },
      tealeaf: {
        input: "order-summary-tax-flyout-input",
        submit: "order-summary-tax-flyout-calculate",
        cancel: "order-summary-tax-flyout-cancel"
      }
    };
  },
  _onSubmit: function _onSubmit(ev) {
    ev.preventDefault();

    if (this.validate()) {
      this.props.onSubmit(this.refs.zipCodeField.getValue());
    }
  },
  _onCancel: function _onCancel(ev) {
    ev.preventDefault();
    this.props.onCancel();
  },
  componentWillUpdate: function componentWillUpdate() {
    var postalCode = this.props.postalCode;

    // Internally the zip code field keeps its value as a state which means
    // setting defaultValue prop on the component only sets the initial value
    // of the state. But we want to make sure the value in the field is always
    // the same as the value we have here so we always call setValue on the
    // component to force its internal value to update.

    this.refs.zipCodeField.setValue(postalCode);
  },
  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var postalCode = _props.postalCode;
    var loading = _props.loading;
    var automation = _props.automation;
    var tealeaf = _props.tealeaf;


    var componentClassName = (0, _classnames2.default)("OrderSummary-PostalCodeForm", className);

    return _react2.default.createElement(
      "form",
      { className: componentClassName, onSubmit: this._onSubmit },
      _react2.default.createElement(_zipcode2.default, {
        ref: "zipCodeField",
        showLabel: false,
        isDisabled: loading,
        defaultValue: postalCode,
        automationId: automation.input,
        tealeafId: tealeaf.input }),
      _react2.default.createElement(
        _arrange2.default,
        { spaced: true },
        _react2.default.createElement(
          _arrange2.default.Fit,
          null,
          _react2.default.createElement(
            _button2.default,
            { type: "submit", spinner: loading, disabled: loading,
              "data-automation-id": automation.submit, tealeafId: tealeaf.submit },
            "Calculate"
          )
        ),
        _react2.default.createElement(
          _arrange2.default.Fill,
          null,
          _react2.default.createElement(
            _button2.default,
            { onClick: this._onCancel, fakelink: true, disabled: loading,
              "data-automation-id": automation.cancel, tealeafId: tealeaf.cancel },
            "Cancel"
          )
        )
      )
    );
  }
});

exports.default = PostalCodeForm;