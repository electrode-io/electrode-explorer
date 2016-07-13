import {createAction} from "redux-actions";
import * as types from "./action-types";
import {cleanseAddressData} from "../utils/address-book-utils";
import defaultAddressApi from "../api/address-api";
import defaultAddressValidationApi from "../api/address-validation-api";
import isFunction from "lodash/isFunction";
import isUndefined from "lodash/isUndefined";
import {change} from "redux-form";

export default ({
  addressApi = defaultAddressApi(),
  addressValidationApi = defaultAddressValidationApi(),
  onLoading = () => null
} = {}) => {
  const configuredActions = {};

  return Object.assign(
    configuredActions,

    {
      // Bound action creators
      toggleLoading: (isLoading) => (dispatch) => {
        onLoading(isLoading);

        dispatch(configuredActions.setLoading(isLoading));
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
      submitEdit: (address, options) => {
        return (dispatch) => {
          const {bypassValidation, isGuest, onContinue, isDefault} = options;

          dispatch(configuredActions.toggleLoading(true));

          if (isUndefined(address.countryCode)) {
            address.countryCode = "USA";
          }

          const changeAddress = isDefault ? {...address, isDefault} : address;

          if (address.isDefault) {
            dispatch(configuredActions.unSelect());
          }

          return Promise.resolve()
            .then(() => {
              return !bypassValidation
                        ? addressValidationApi.validateAddress(changeAddress)
                        : null;
            })
            .then(() => {
              return (!isGuest ? addressApi.updateAddress(changeAddress) : null);
            })
            .then((newAddressData = {}) => {
              dispatch(
                configuredActions.completeEdit({
                  ...changeAddress,
                  ...cleanseAddressData(newAddressData)
                })
              );

              if (isFunction(onContinue)) {
                return onContinue(changeAddress);
              }
            })
            .then(() => {
              dispatch(configuredActions.cancelEdit());
              dispatch(configuredActions.clearError());
            })
            .catch((error) => {
              if (error.status === 401) {
                dispatch(configuredActions.onUnauthorizedError(error));
              }
              if (error.fieldName && error.updatedValue) {
                dispatch(change("addressBookForm", error.fieldName, error.updatedValue));
              }
              return dispatch(configuredActions.setError(error));
            })
            .then(() => dispatch(configuredActions.toggleLoading(false)));
        };
      },

      /**
       * Submit address deletion to the server
       *
       * @param {String} addressId an id of address to delete
       * @return {void}
       */
      submitDelete: (addressId) => (dispatch) => {
        dispatch(configuredActions.deleteConfirmed(addressId));

        addressApi.deleteAddress(addressId)
          .then(() => dispatch(configuredActions.completeDelete(addressId)))
          .catch((error) => {
            if (error.status === 401) {
              dispatch(configuredActions.onUnauthorizedError(error));
            }
            dispatch(configuredActions.setError(error));
          });
      },

      /**
       * Load address suggestions for a given postal code
       * @param {String} postalCode a postal code used to search for a suggestions
       * @return {void} promise
       */
      loadSuggestions: (postalCode) => (dispatch) => {
        dispatch(configuredActions.toggleLoading(true));

        addressValidationApi.getAddressSuggestions(postalCode)
          .then((data) => dispatch(configuredActions.updateSuggestions(data)))
          .catch((error) => dispatch(configuredActions.setError(error)))
          .then(() => dispatch(configuredActions.toggleLoading(false)));
      },

      /**
       * Load addresses
       * @return {void}
       */
      loadAddresses: () => (dispatch) => {
        addressApi.getAddresses()
          .then((addresses) => dispatch(configuredActions.updateAddresses(addresses)))
          .catch((error) => {
            if (error.status === 401) {
              dispatch(configuredActions.onUnauthorizedError(error));
            }
            dispatch(configuredActions.updateAddresses([]));
            dispatch(configuredActions.setError(error));
          });
      }
    },

    {
      select: createAction(types.ADDRESS_SELECT),
      unSelect: createAction(types.ADDRESS_UNSELECT),

      requestEdit: createAction(types.ADDRESS_REQUEST_EDIT),
      cancelEdit: createAction(types.ADDRESS_CANCEL_EDIT),
      completeEdit: createAction(types.ADDRESS_COMPLETE_EDIT),

      requestDelete: createAction(types.ADDRESS_REQUEST_DELETE),
      cancelDelete: createAction(types.ADDRESS_CANCEL_DELETE),
      deleteConfirmed: createAction(types.ADDRESS_DELETE_CONFIRMED),
      completeDelete: createAction(types.ADDRESS_COMPLETE_DELETE),

      setError: createAction(types.ADDRESS_SET_ERROR),
      clearError: createAction(types.ADDRESS_CLEAR_ERROR),

      updateAddresses: createAction(types.ADDRESS_UPDATE),
      updateSuggestions: createAction(types.ADDRESS_UPDATE_SUGGESTIONS),

      setLoading: createAction(types.ADDRESS_SET_LOADING),
      onUnauthorizedError: createAction(types.UNAUTHORIZED_ERROR),

      seeAllAddresses: createAction(types.ADDRESS_SEE_ALL_ADDRESSES)
    }
  );
};
