import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect, Provider} from "react-redux";
import configureActions from "./actions/address-book-actions";
import configureApi from "./api/address-api";
import configureAddressFormCreator from "./configure-address-form-creator";
import configureValidationApi from "./api/address-validation-api";

/**
 * Creates and configures an address book component and connects it to the provided app store
 *
 * @param {Component} AddressBookComponent a presentational Address Book component
 * @param {Object} store a store to maintain the address book state
 *   NOTE: address book expects `addressBook` attribute on the state object provided by a store
 * @param {Object} options an address book options, including API endpoint urls, etc.
 *
 * @return {Object} an Address Book Container component
 */
export default (AddressBookComponent, store, options = {}) => {
  const configuredActions = configureActions({
    onLoading: options.onLoading,

    addressApi: options.addressApi || configureApi({
      addressApiUrlPrefix: options.addressApiUrlPrefix
    }),

    addressValidationApi: options.avsApi || configureValidationApi({
      avsApiUrlPrefix: options.avsApiUrlPrefix
    })
  });
  const createAddressForm = configureAddressFormCreator();

  const mapActions = (dispatch) => ({actions: bindActionCreators(configuredActions, dispatch)});
  const mapState = (state) => state.addressBook || {};

  const ConnectedAddressBook = connect(mapState, mapActions)(AddressBookComponent);

  return {
    AddressBookContainer: class extends Component {
      render() {
        return (
          <Provider store={store}>
            <ConnectedAddressBook
              {...this.props}
              createAddressForm={createAddressForm}
            />
          </Provider>
        );
      }
    },

    addressBookActions: configuredActions
  };
};
