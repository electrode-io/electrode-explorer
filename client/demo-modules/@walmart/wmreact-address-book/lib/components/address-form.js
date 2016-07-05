"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _usStates = require("../enums/us-states");

var _usStates2 = _interopRequireDefault(_usStates);

var _addressValidationMessage = require("./address-validation-message");

var _addressValidationMessage2 = _interopRequireDefault(_addressValidationMessage);

var _addressBookActionButtons = require("./address-book-action-buttons");

var _addressBookActionButtons2 = _interopRequireDefault(_addressBookActionButtons);

var _checkbox = require("./form/checkbox");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _i18n = require("../utils/i18n");

var _i18n2 = _interopRequireDefault(_i18n);

var _isUndefined = require("lodash/isUndefined");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _floatingField = require("@walmart/wmreact-stateless-fields/lib/components/floating-field");

var _floatingField2 = _interopRequireDefault(_floatingField);

var _selectField = require("@walmart/wmreact-stateless-fields/lib/components/select-field");

var _selectField2 = _interopRequireDefault(_selectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLUMN_CLASS = "Grid-col u-size-1-2-m address-form-main-column address-form-main-column-";
var FIRST_COLUMN_CLASS = COLUMN_CLASS + "alpha";
var SECOND_COLUMN_CLASS = COLUMN_CLASS + "omega";

exports.default = _react2.default.createClass({
  displayName: "Common-AddressForm",

  propTypes: {
    fields: _react.PropTypes.object.isRequired,

    handleSubmit: _react.PropTypes.func.isRequired,

    actions: _react.PropTypes.object,
    onCancel: _react.PropTypes.func,
    onContinue: _react.PropTypes.func,

    countries: _react.PropTypes.array.isRequired,
    hideCountry: _react.PropTypes.bool,
    showFormButtons: _react.PropTypes.bool,
    hideCancelButton: _react.PropTypes.bool,
    hideActionButtons: _react.PropTypes.bool,

    embedded: _react.PropTypes.bool,
    loading: _react.PropTypes.bool,

    alert: _react.PropTypes.object,
    invalid: _react.PropTypes.bool,
    submitFailed: _react.PropTypes.bool,

    addressSnapshot: _react.PropTypes.object,

    isAddressModified: _react.PropTypes.bool.isRequired,

    invalidAddressError: _react.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      hideCountry: false
    };
  },
  onCancelEdit: function onCancelEdit() {
    this.props.actions.cancelEdit();
  },
  renderStateAndPostalCode: function renderStateAndPostalCode() {
    var _props$fields = this.props.fields;
    var state = _props$fields.state;
    var postalCode = _props$fields.postalCode;


    return _react2.default.createElement(
      "div",
      { className: "Grid" },
      _react2.default.createElement(
        "div",
        { className: "Grid-col u-size-3-6 state-validation-marker" },
        _react2.default.createElement(
          _selectField2.default,
          (0, _extends3.default)({}, state, {
            label: (0, _i18n2.default)("State"),
            "data-automation-id": "address-form-state"
          }),
          _usStates2.default.map(function (_ref, index) {
            var code = _ref.code;
            var name = _ref.name;
            return _react2.default.createElement(
              "option",
              { value: code, key: index },
              name
            );
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "Grid-col u-size-2-6 u-offset-1-6" },
        _react2.default.createElement(_floatingField2.default, (0, _extends3.default)({
          "data-automation-id": "address-form-postalCode",
          label: (0, _i18n2.default)("ZIP Code"),
          maxLength: "5"
        }, postalCode))
      )
    );
  },
  renderUserInfo: function renderUserInfo() {
    var _props$fields2 = this.props.fields;
    var firstName = _props$fields2.firstName;
    var lastName = _props$fields2.lastName;
    var phone = _props$fields2.phone;


    return _react2.default.createElement(
      "div",
      { className: FIRST_COLUMN_CLASS },
      _react2.default.createElement(_floatingField2.default, (0, _extends3.default)({
        autoFocus: true,
        label: (0, _i18n2.default)("First Name"),
        maxLength: "25",
        "data-automation-id": "address-form-firstName",
        "data-tealeaf-id": "COAC2ShpAddrFirstName"
      }, firstName)),
      _react2.default.createElement(_floatingField2.default, (0, _extends3.default)({
        label: (0, _i18n2.default)("Last Name"),
        maxLength: "25",
        "data-automation-id": "address-form-lastName",
        "data-tealeaf-id": "COAC2ShpAddrLastName"
      }, lastName)),
      _react2.default.createElement(_floatingField2.default, (0, _extends3.default)({
        label: (0, _i18n2.default)("Phone"),
        instructions: (0, _i18n2.default)("Ex: (415) 444 - 5555"),
        maxLength: "16",
        type: "tel",
        "data-automation-id": "address-form-shippingPhone"
      }, phone))
    );
  },
  renderManualAddress: function renderManualAddress() {
    var _props$fields3 = this.props.fields;
    var addressLineOne = _props$fields3.addressLineOne;
    var addressLineTwo = _props$fields3.addressLineTwo;
    var city = _props$fields3.city;


    return _react2.default.createElement(
      "div",
      { className: SECOND_COLUMN_CLASS },
      _react2.default.createElement(_floatingField2.default, (0, _extends3.default)({
        label: (0, _i18n2.default)("Street address"),
        maxLength: "25",
        "data-automation-id": "address-form-addressLineOne",
        tealeafId: "COAC2ShpAddrAddress1"
      }, addressLineOne)),
      _react2.default.createElement(_floatingField2.default, (0, _extends3.default)({
        label: (0, _i18n2.default)("Apt, suite, bldg, c/o (optional)"),
        maxLength: "25",
        "data-automation-id": "address-form-addressLineTwo",
        tealeafId: "COAC2ShpAddrAddress2"
      }, addressLineTwo)),
      _react2.default.createElement(_floatingField2.default, (0, _extends3.default)({
        label: (0, _i18n2.default)("City"),
        maxLength: "25",
        "data-automation-id": "address-form-city",
        tealeafId: "COAC2ShpAddrCity"
      }, city)),
      this.renderStateAndPostalCode()
    );
  },
  renderAlert: function renderAlert() {
    var _props = this.props;
    var invalidAddressError = _props.invalidAddressError;
    var isAddressModified = _props.isAddressModified;
    var invalid = _props.invalid;
    var submitFailed = _props.submitFailed;
    var alert = this.props.alert;


    if (!alert && isAddressModified) {
      alert = { alertType: invalidAddressError.alertType, message: invalidAddressError.message };
    } else if (!alert && invalid && submitFailed) {
      alert = { alertType: "error", message: "Please correct the errors below." };
    }

    return alert ? _react2.default.createElement(_alert2.default, {
      alertType: alert.alertType,
      message: alert.message,
      isBlock: true,
      isAboveForm: true
    }) : null;
  },
  renderFormButtons: function renderFormButtons() {
    var _props2 = this.props;
    var loading = _props2.loading;
    var handleSubmit = _props2.handleSubmit;
    var hideCancelButton = _props2.hideCancelButton;
    var submitEdit = _props2.actions.submitEdit;

    var checkboxClass = "Grid-col u-size-1-2-m option option-form-control " + "address-form-preferred-address-wrapper pull-left";

    var cancelFormClass = "cancel-address-form btn btn-link btn-block-max-s " + "btn-fake-link-large cancel-btn pull-right-s";

    var isDefault = this.props.fields.isDefault;


    return _react2.default.createElement(
      "div",
      { className: "Grid address-form-input-group" },
      _react2.default.createElement(
        _checkbox2.default,
        (0, _extends3.default)({
          automationId: "address-form-set-as-preferred",
          tealeafId: "COAC2ShpAddrDefaultChkBox",
          className: checkboxClass
        }, isDefault),
        (0, _i18n2.default)("Set as my preferred address")
      ),
      _react2.default.createElement(
        "div",
        { className: "Grid-col u-size-1-2-m address-book-action-buttons" },
        _react2.default.createElement(
          "div",
          { className: "form-buttons" },
          _react2.default.createElement(
            _button2.default,
            {
              "data-automation-id": "address-form-submit",
              tealeafId: "COAC2ShpAddrUseThisAddrBtn",
              onClick: handleSubmit(submitEdit),
              className: "btn-block-max-s save-address pull-right-s",
              disabled: loading,
              spinner: loading
            },
            (0, _i18n2.default)("Save Address")
          ),
          !hideCancelButton && _react2.default.createElement(
            _button2.default,
            {
              "data-automation-id": "address-form-on-cancel",
              tealeafId: "COAC2ShpAddrCancelBtn",
              fakelink: true,
              onClick: this.onCancelEdit,
              className: cancelFormClass,
              disabled: loading
            },
            (0, _i18n2.default)("Cancel")
          )
        )
      )
    );
  },
  renderAddressFormInputs: function renderAddressFormInputs() {
    return _react2.default.createElement(
      "div",
      { className: "Grid address-form-input-group" },
      _react2.default.createElement(
        "div",
        { className: "Grid-col" },
        this.renderAlert(),
        _react2.default.createElement(
          "div",
          { className: "Grid" },
          this.renderUserInfo(),
          this.renderManualAddress()
        )
      )
    );
  },
  render: function render() {
    var _props3 = this.props;
    var embedded = _props3.embedded;
    var invalidAddressError = _props3.invalidAddressError;
    var isAddressModified = _props3.isAddressModified;
    var onCancel = _props3.onCancel;
    var actions = _props3.actions;
    var onContinue = _props3.onContinue;
    var loading = _props3.loading;
    var handleSubmit = _props3.handleSubmit;
    var addressSnapshot = _props3.addressSnapshot;

    // dont want to break checkout specific use case but My account will be passing these props

    var _props4 = this.props;
    var showFormButtons = _props4.showFormButtons;
    var hideActionButtons = _props4.hideActionButtons;


    var showAvsError = invalidAddressError && !isAddressModified;

    if ((0, _isUndefined2.default)(showFormButtons)) {
      showFormButtons = !embedded && !showAvsError;
    }
    if ((0, _isUndefined2.default)(hideActionButtons)) {
      hideActionButtons = !embedded && showAvsError;
    }

    var componentClass = (0, _classnames2.default)("Common-AddressForm", "address-book-enabled-element", {
      "address-col-inner address-col-flyout": !embedded,
      "address-book-embedded-form": embedded
    });

    if (invalidAddressError && invalidAddressError.responseCode === "STREET_NUMBER_UNMATCHED") {
      showFormButtons = false;
    }

    var formContent = showAvsError ? _react2.default.createElement(_addressValidationMessage2.default, (0, _extends3.default)({}, this.props, {
      onContinue: onContinue,
      embedded: embedded,
      loading: loading,
      invalidAddressError: invalidAddressError,
      actions: actions,
      address: addressSnapshot,
      alert: this.renderAlert()
    })) : this.renderAddressFormInputs();

    return _react2.default.createElement(
      "div",
      { className: componentClass },
      _react2.default.createElement(
        "div",
        { className: embedded ? "" : "address-col-flyout-inner" },
        _react2.default.createElement(
          "form",
          { className: "delivery-identity accordion-form" },
          formContent,
          showFormButtons && this.renderFormButtons()
        ),
        !hideActionButtons && _react2.default.createElement(_addressBookActionButtons2.default, {
          onCancel: onCancel,
          onContinue: handleSubmit(this.props.actions.submitEdit)
        })
      )
    );
  }
});