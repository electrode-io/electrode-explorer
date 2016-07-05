"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _config = require("../config");

var _formTokens = require("./internals/form-tokens.json");

var _formTokens2 = _interopRequireDefault(_formTokens);

var _cardInfoFields = require("./internals/card-info-fields");

var _cardInfoFields2 = _interopRequireDefault(_cardInfoFields);

var _addressFields = require("./internals/address-fields");

var _addressFields2 = _interopRequireDefault(_addressFields);

var _addressValidationMessage = require("./address-validation-message");

var _addressValidationMessage2 = _interopRequireDefault(_addressValidationMessage);

var _alertErrors = require("./alert-errors");

var _alertErrors2 = _interopRequireDefault(_alertErrors);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _trim = require("lodash/fp/trim");

var _trim2 = _interopRequireDefault(_trim);

var _isString = require("lodash/isString");

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultActions = function DefaultActions(_ref) {
  var primary = _ref.primary;
  var onSave = _ref.onSave;
  var loading = _ref.loading;
  var isInitial = _ref.isInitial;
  var onCancel = _ref.onCancel;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _button2.default,
      {
        primary: primary,
        className: "last btn-block-max-s save-btn pull-right-s",
        automationId: "save-cc",
        onClick: onSave,
        spinner: loading,
        disabled: loading
      },
      (0, _config.i18n)(_formTokens2.default.save)
    ),
    !isInitial && _react2.default.createElement(
      _button2.default,
      {
        automationId: "cancel-save-cc",
        className: "btn-block-max-s cancel-btn btn-link btn-fake-link-large",
        onClick: onCancel,
        disabled: loading },
      (0, _config.i18n)(_formTokens2.default.cancel)
    )
  );
};

DefaultActions.propTypes = {
  onCancel: _react2.default.PropTypes.func,
  onSave: _react2.default.PropTypes.func,
  loading: _react2.default.PropTypes.bool,
  isInitial: _react2.default.PropTypes.bool,
  primary: _react2.default.PropTypes.bool
};

var CreditCardForm = function (_React$Component) {
  (0, _inherits3.default)(CreditCardForm, _React$Component);

  function CreditCardForm(props) {
    (0, _classCallCheck3.default)(this, CreditCardForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { localError: null };
    return _this;
  }

  CreditCardForm.prototype.componentDidUpdate = function componentDidUpdate() {
    var inEditMode = this.props.inEditMode;
    var editCreditCard = this.refs.editCreditCard;

    var errors = this.state.localError ? [this.state.localError] : (0, _keys2.default)(this.props.errors || {});
    //component is focused when there are no errors
    if (inEditMode && editCreditCard && errors.length === 0) {
      _reactDom2.default.findDOMNode(editCreditCard).scrollIntoView({ behavior: "smooth" });
    }
  };

  CreditCardForm.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref2) {
    var inEditMode = _ref2.inEditMode;
    var avsError = _ref2.avsError;
    var loading = _ref2.loading;

    if (!inEditMode) {
      this.setState({ localError: null });
    }
    if ((!this.props.avsError || !this.props.avsError.corrected) && avsError && avsError.corrected) {
      this.refs.addressFields.updateWithCorrected(avsError.corrected);
    }
    if (!loading && this.props.loading && avsError && avsError.message) {
      this.refs.addressFields.updateWithAvs(avsError);
    }
  };

  CreditCardForm.prototype._creditCardProps = function _creditCardProps() {
    return this.refs.cardFields ? this.refs.cardFields.value() : {
      cardExpiryDate: this.props.cardExpiryDate,
      phone: this.props.phone,
      firstName: this.props.firstName,
      lastName: this.props.lastName
    };
  };

  CreditCardForm.prototype._addressProps = function _addressProps() {
    if (this.refs.addressFields) {
      return this.refs.addressFields.value();
    }
    return {
      postalCode: this.props.postalCode,
      addressLineOne: this.props.addressLineOne,
      addressLineTwo: this.props.addressLineTwo,
      state: this.props.state,
      city: this.props.city
    };
  };

  CreditCardForm.prototype.validate = function validate() {
    var creditCardValid = this.refs.cardFields.validate();
    var addressValid = this.refs.addressFields.validate();
    // Trigger all validations to set validation texts on all that is invalid
    return creditCardValid && addressValid;
  };

  CreditCardForm.prototype._save = function _save() {
    var bypassValidation = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
    var overrides = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var skipAvs = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    if (!bypassValidation && !this.validate()) {
      this.setState({ localError: "client_validation_failed" });
      return false;
    } else {
      this.setState({ localError: null });
    }
    var serialized = (0, _extends3.default)({}, this._addressProps(), this.refs.cardFields.value(), {
      bypassValidation: bypassValidation || skipAvs
    });

    // If the card is not new and the `creditCard` field is populated, the card
    // number had been modified. In this case we are about to delete and
    // re-create the card so the `cardType` field is required.
    if (this.props.isNew || serialized.creditCard) {
      serialized.cardType = this.refs.cardFields.state.cardType;
    }

    // Strip leading/trailing whitespace from all fields.
    // See: https://jira.walmart.com/browse/GPCC-7435
    (0, _keys2.default)(serialized).forEach(function (key) {
      serialized[key] = (0, _isString2.default)(serialized[key]) ? (0, _trim2.default)(serialized[key]) : serialized[key];
    });

    return this.props.onSave((0, _assign2.default)(serialized, overrides));
  };

  CreditCardForm.prototype._renderErrors = function _renderErrors() {
    var keys = this.state.localError ? [this.state.localError] : (0, _keys2.default)(this.props.errors || {});

    if (keys.length > 0) {

      var alertComponent = this.props.alertComponent;
      if (alertComponent) {
        return _react2.default.createElement(_alertErrors2.default, { errorCodes: keys, alertComponent: alertComponent });
      } else {
        return _react2.default.createElement(_alertErrors2.default, { errorCodes: keys });
      }
    }
    return null;
  };

  CreditCardForm.prototype._renderEditForm = function _renderEditForm() {
    var _this2 = this;

    var _props = this.props;
    var tealeafIds = _props.tealeafIds;
    var index = _props.index;
    var avsError = _props.avsError;
    var loading = _props.loading;

    var AddressForm = this.props.addressForm || _addressFields2.default;
    var Actions = this.props.actions || DefaultActions;
    var onSave = function onSave() {
      return !loading && _this2._save(false, {}, _this2.props.bypassValidation);
    };
    var showForm = !avsError || avsError.message;
    var AlertComponent = this.props.alertComponent || _alert2.default;
    return _react2.default.createElement(
      "div",
      {
        ref: "editCreditCard",
        className: (0, _classnames2.default)("edit-form-wrapper", { visuallyhidden: !showForm }) },
      _react2.default.createElement(
        "form",
        {
          className: (0, _classnames2.default)("edit-form") },
        avsError && avsError.message && _react2.default.createElement(AlertComponent, (0, _extends3.default)({}, avsError, { isBlock: true })),
        this._renderErrors(),
        _react2.default.createElement(
          _layout2.default,
          { small: 2, className: "edit-form-part" },
          _react2.default.createElement(_cardInfoFields2.default, (0, _extends3.default)({}, this._creditCardProps(), {
            cardNumberEditable: this.props.cardNumberEditable,
            floatingLabels: this.props.floatingLabels,
            cardType: this.props.cardType,
            isTemp: this.props.isTemp,
            lastFour: this.props.lastFour,
            validationDate: this.props.validationDate,
            ref: "cardFields",
            tealeafIndex: index,
            tealeafIds: tealeafIds.infoForm })),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              _heading2.default.H3,
              null,
              (0, _config.i18n)(_formTokens2.default.billingAddress)
            ),
            _react2.default.createElement(AddressForm, (0, _extends3.default)({}, this._addressProps(), {
              ref: "addressFields",
              isNew: this.props.isNew,
              tealeafIndex: index,
              floatingLabels: this.props.floatingLabels,
              tealeafIds: tealeafIds.addressForm }))
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "edit-form-actions margin-top" },
          _react2.default.createElement(Actions, (0, _extends3.default)({}, this.props, {
            onSave: onSave
          }))
        )
      )
    );
  };

  CreditCardForm.prototype._updateValidationChange = function _updateValidationChange(newAddress) {
    this.props.onValidationChange({
      id: this.props.id,
      error: {
        message: "We've updated your address. Please confirm below.",
        alertType: "warning",
        corrected: newAddress
      }
    });
  };

  CreditCardForm.prototype._renderAvsInvalid = function _renderAvsInvalid() {
    var _this3 = this;

    var _creditCardProps2 = this._creditCardProps();

    var firstName = _creditCardProps2.firstName;
    var lastName = _creditCardProps2.lastName;
    var primary = this.props.primary;


    return _react2.default.createElement(
      "div",
      { className: "edit-form-wrapper" },
      _react2.default.createElement(
        "div",
        { className: "edit-form" },
        _react2.default.createElement(_addressValidationMessage2.default, {
          loading: this.props.loading,
          primary: primary,
          onContinue: function onContinue() {
            return _this3._save(true);
          },
          address: (0, _assign2.default)({ firstName: firstName, lastName: lastName }, this._addressProps()),
          invalidAddressError: this.props.avsError,
          actions: {
            submitEdit: function submitEdit(newAddress) {
              return _this3._updateValidationChange(newAddress);
            },
            clearErrors: function clearErrors() {
              return _this3.props.onRequestClearErrors();
            }
          }
        })
      )
    );
  };

  CreditCardForm.prototype.render = function render() {
    var _props2 = this.props;
    var avsError = _props2.avsError;
    var floatingLabels = _props2.floatingLabels;

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("edit-credit-card-wrapper", { "floating-labels": floatingLabels }) },
      this.props.children && _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("padded-card", { "edit-mode": this.props.inEditMode }) },
        this.props.children
      ),
      this.props.inEditMode && this._renderEditForm(),
      this.props.inEditMode && avsError && !avsError.message && this._renderAvsInvalid()
    );
  };

  return CreditCardForm;
}(_react2.default.Component);

CreditCardForm.propTypes = {
  cardNumberEditable: _react2.default.PropTypes.bool,
  index: _react2.default.PropTypes.number,
  isNew: _react2.default.PropTypes.bool,
  isInitial: _react2.default.PropTypes.bool,
  isEditorActive: _react2.default.PropTypes.bool,
  inEditMode: _react2.default.PropTypes.bool.isRequired,
  avsError: _react2.default.PropTypes.object,
  onRequestClearErrors: _react2.default.PropTypes.func,
  onSave: _react2.default.PropTypes.func.isRequired,
  onValidationChange: _react2.default.PropTypes.func.isRequired,
  onCancel: _react2.default.PropTypes.func.isRequired,
  actions: _react2.default.PropTypes.func,
  primary: _react2.default.PropTypes.bool,
  postalCode: _react2.default.PropTypes.string,
  addressLineOne: _react2.default.PropTypes.string,
  addressLineTwo: _react2.default.PropTypes.string,
  state: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  city: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node,
  firstName: _react2.default.PropTypes.string,
  lastName: _react2.default.PropTypes.string,
  cardExpiryDate: _react2.default.PropTypes.string,
  validationDate: _react2.default.PropTypes.object,
  lastFour: _react2.default.PropTypes.string,
  cardType: _react2.default.PropTypes.string,
  isTemp: _react2.default.PropTypes.bool,
  phone: _react2.default.PropTypes.string,
  loading: _react2.default.PropTypes.bool,
  addressForm: _react2.default.PropTypes.func,
  alertComponent: _react2.default.PropTypes.func,
  floatingLabels: _react2.default.PropTypes.bool,
  bypassValidation: _react2.default.PropTypes.bool,
  tealeafIds: _react2.default.PropTypes.shape({
    infoForm: _react2.default.PropTypes.object,
    addressForm: _react2.default.PropTypes.object,
    save: _react2.default.PropTypes.string,
    cancel: _react2.default.PropTypes.string
  }),
  errors: _react2.default.PropTypes.shape({
    delete: _react2.default.PropTypes.object,
    edit: _react2.default.PropTypes.object
  })
};

CreditCardForm.defaultProps = {
  tealeafIds: {
    save: "save",
    cancel: "cancel"
  },
  primary: true
};

exports.default = CreditCardForm;