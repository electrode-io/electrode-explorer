"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxForm = require("redux-form");

var _lodash = require("lodash");

var _addressValidationStatus = require("./enums/address-validation-status");

var _addressValidationStatus2 = _interopRequireDefault(_addressValidationStatus);

var _addressBookDefaultConfiguration = require("./address-book-default-configuration");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkIsAddressModified = function checkIsAddressModified(invalidAddressError) {
  var errorCode = (invalidAddressError || {}).responseCode;

  return errorCode === _addressValidationStatus2.default.CITY_MODIFIED || errorCode === _addressValidationStatus2.default.STATE_MODIFIED || errorCode === _addressValidationStatus2.default.POSTALCODE_MODIFIED;
};

var configureMapStateToProps = function configureMapStateToProps(options) {
  return function (state) {
    var _state$addressBook = state.addressBook;
    var invalidAddressError = _state$addressBook.invalidAddressError;
    var loading = _state$addressBook.loading;


    return _extends({}, state.addressBookForm, {
      invalidAddressError: invalidAddressError,
      countries: options.countries,
      hideCountry: options.hideCountry,
      showFormButtons: options.showFormButtons,
      hideCancelButton: options.hideCancelButton,
      hideActionButtons: options.hideActionButtons,
      loading: loading,
      isAddressModified: checkIsAddressModified(invalidAddressError),
      addressSnapshot: (0, _lodash.get)((0, _reduxForm.getValues)(state.addressBookForm), "addressBookForm")
    });
  };
};

var configureAddressFormCreator = function configureAddressFormCreator() {
  return function (_ref) {
    var AddressFormComponent = _ref.AddressFormComponent;
    var countries = _ref.countries;
    var hideCountry = _ref.hideCountry;
    var showFormButtons = _ref.showFormButtons;
    var hideCancelButton = _ref.hideCancelButton;
    var hideActionButtons = _ref.hideActionButtons;
    var _ref$initialValues = _ref.initialValues;
    var initialValues = _ref$initialValues === undefined ? {} : _ref$initialValues;
    var _ref$fields = _ref.fields;
    var fields = _ref$fields === undefined ? _addressBookDefaultConfiguration.addressFormFields : _ref$fields;
    var _ref$validator = _ref.validator;
    var validator = _ref$validator === undefined ? (0, _addressBookDefaultConfiguration.addressFormValidator)() : _ref$validator;

    var options = { countries: countries, hideCountry: hideCountry, showFormButtons: showFormButtons, hideCancelButton: hideCancelButton, hideActionButtons: hideActionButtons };

    var connectedAddressForm = (0, _reduxForm.reduxForm)({
      initialValues: initialValues,
      fields: fields,
      form: "addressBookForm",
      validate: validator,
      reduxMountPoint: "addressBookForm"
    }, configureMapStateToProps(options))(AddressFormComponent);

    return connectedAddressForm;
  };
};

exports.default = configureAddressFormCreator;