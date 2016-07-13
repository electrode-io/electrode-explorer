"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require("redux-actions");

var _actionTypes = require("./action-types");

var types = _interopRequireWildcard(_actionTypes);

var _addressBookUtils = require("../utils/address-book-utils");

var _addressApi = require("../api/address-api");

var _addressApi2 = _interopRequireDefault(_addressApi);

var _addressValidationApi = require("../api/address-validation-api");

var _addressValidationApi2 = _interopRequireDefault(_addressValidationApi);

var _isFunction = require("lodash/isFunction");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isUndefined = require("lodash/isUndefined");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _reduxForm = require("redux-form");

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$addressApi = _ref.addressApi;
  var addressApi = _ref$addressApi === undefined ? (0, _addressApi2.default)() : _ref$addressApi;
  var _ref$addressValidatio = _ref.addressValidationApi;
  var addressValidationApi = _ref$addressValidatio === undefined ? (0, _addressValidationApi2.default)() : _ref$addressValidatio;
  var _ref$onLoading = _ref.onLoading;
  var onLoading = _ref$onLoading === undefined ? function () {
    return null;
  } : _ref$onLoading;

  var configuredActions = {};

  return Object.assign(configuredActions, {
    // Bound action creators
    toggleLoading: function toggleLoading(isLoading) {
      return function (dispatch) {
        onLoading(isLoading);

        dispatch(configuredActions.setLoading(isLoading));
      };
    },

    /**
     * Submit address modifications to the server. Address submission is a multi-step process:
     *   1. Toggling the loading state,
     *   2. Validating an address through the AVS (if not bypassValidation flag set),
     *   3. Updating an address book (if operating in non-guest mode),
     *   4. Executing the callback, if provided,
     *   5. Handling errors and clearing up the loading state.
     *
     * @param {Object} address an address to submit
     * @param {Object} options submission options, including:
     *    options.isGuest {Boolean} a flag indicating that address book is used in guest mode
     *    options.bypassValidation {Boolean} a flag indicating that AVS call shouldn't be made
     *    options.onContinue {Function} a callback to be called when sequence of address update
     *      operations is succeeded
     * @return {void} promise
     */
    submitEdit: function submitEdit(address, options) {
      return function (dispatch) {
        var bypassValidation = options.bypassValidation;
        var isGuest = options.isGuest;
        var onContinue = options.onContinue;
        var isDefault = options.isDefault;


        dispatch(configuredActions.toggleLoading(true));

        if ((0, _isUndefined2.default)(address.countryCode)) {
          address.countryCode = "USA";
        }

        var changeAddress = isDefault ? _extends({}, address, { isDefault: isDefault }) : address;

        if (address.isDefault) {
          dispatch(configuredActions.unSelect());
        }

        return _bluebird2.default.resolve().then(function () {
          return !bypassValidation ? addressValidationApi.validateAddress(changeAddress) : null;
        }).then(function () {
          return !isGuest ? addressApi.updateAddress(changeAddress) : null;
        }).then(function () {
          var newAddressData = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

          dispatch(configuredActions.completeEdit(_extends({}, changeAddress, (0, _addressBookUtils.cleanseAddressData)(newAddressData))));

          if ((0, _isFunction2.default)(onContinue)) {
            return onContinue(changeAddress);
          }
        }).then(function () {
          dispatch(configuredActions.cancelEdit());
          dispatch(configuredActions.clearError());
        }).catch(function (error) {
          if (error.status === 401) {
            dispatch(configuredActions.onUnauthorizedError(error));
          }
          if (error.fieldName && error.updatedValue) {
            dispatch((0, _reduxForm.change)("addressBookForm", error.fieldName, error.updatedValue));
          }
          return dispatch(configuredActions.setError(error));
        }).then(function () {
          return dispatch(configuredActions.toggleLoading(false));
        });
      };
    },

    /**
     * Submit address deletion to the server
     *
     * @param {String} addressId an id of address to delete
     * @return {void}
     */
    submitDelete: function submitDelete(addressId) {
      return function (dispatch) {
        dispatch(configuredActions.deleteConfirmed(addressId));

        addressApi.deleteAddress(addressId).then(function () {
          return dispatch(configuredActions.completeDelete(addressId));
        }).catch(function (error) {
          if (error.status === 401) {
            dispatch(configuredActions.onUnauthorizedError(error));
          }
          dispatch(configuredActions.setError(error));
        });
      };
    },

    /**
     * Load address suggestions for a given postal code
     * @param {String} postalCode a postal code used to search for a suggestions
     * @return {void} promise
     */
    loadSuggestions: function loadSuggestions(postalCode) {
      return function (dispatch) {
        dispatch(configuredActions.toggleLoading(true));

        addressValidationApi.getAddressSuggestions(postalCode).then(function (data) {
          return dispatch(configuredActions.updateSuggestions(data));
        }).catch(function (error) {
          return dispatch(configuredActions.setError(error));
        }).then(function () {
          return dispatch(configuredActions.toggleLoading(false));
        });
      };
    },

    /**
     * Load addresses
     * @return {void}
     */
    loadAddresses: function loadAddresses() {
      return function (dispatch) {
        addressApi.getAddresses().then(function (addresses) {
          return dispatch(configuredActions.updateAddresses(addresses));
        }).catch(function (error) {
          if (error.status === 401) {
            dispatch(configuredActions.onUnauthorizedError(error));
          }
          dispatch(configuredActions.updateAddresses([]));
          dispatch(configuredActions.setError(error));
        });
      };
    }
  }, {
    select: (0, _reduxActions.createAction)(types.ADDRESS_SELECT),
    unSelect: (0, _reduxActions.createAction)(types.ADDRESS_UNSELECT),

    requestEdit: (0, _reduxActions.createAction)(types.ADDRESS_REQUEST_EDIT),
    cancelEdit: (0, _reduxActions.createAction)(types.ADDRESS_CANCEL_EDIT),
    completeEdit: (0, _reduxActions.createAction)(types.ADDRESS_COMPLETE_EDIT),

    requestDelete: (0, _reduxActions.createAction)(types.ADDRESS_REQUEST_DELETE),
    cancelDelete: (0, _reduxActions.createAction)(types.ADDRESS_CANCEL_DELETE),
    deleteConfirmed: (0, _reduxActions.createAction)(types.ADDRESS_DELETE_CONFIRMED),
    completeDelete: (0, _reduxActions.createAction)(types.ADDRESS_COMPLETE_DELETE),

    setError: (0, _reduxActions.createAction)(types.ADDRESS_SET_ERROR),
    clearError: (0, _reduxActions.createAction)(types.ADDRESS_CLEAR_ERROR),

    updateAddresses: (0, _reduxActions.createAction)(types.ADDRESS_UPDATE),
    updateSuggestions: (0, _reduxActions.createAction)(types.ADDRESS_UPDATE_SUGGESTIONS),

    setLoading: (0, _reduxActions.createAction)(types.ADDRESS_SET_LOADING),
    onUnauthorizedError: (0, _reduxActions.createAction)(types.UNAUTHORIZED_ERROR),

    seeAllAddresses: (0, _reduxActions.createAction)(types.ADDRESS_SEE_ALL_ADDRESSES)
  });
};