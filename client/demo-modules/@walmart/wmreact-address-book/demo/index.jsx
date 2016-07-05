import React, {Component} from "react";
import {createStore, applyMiddleware, bindActionCreators, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {
  createAddressBookWidget,
  addressBookReducer,
  addressBookFormReducer
} from "@walmart/redux-address-book";
import {usOptions} from "./address-book-options";
import {regionCodes} from "../src/locale/region-codes";

// Import Address Book presentational components
import {AddressBook} from "../src/index";

// Create a store
const finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore);

const store = finalCreateStore(combineReducers({
  // place all your other reducers here:
  // ...
  addressBook: addressBookReducer,
  addressBookForm: addressBookFormReducer
}));

const UsAddressBookWidget = createAddressBookWidget(AddressBook, store, usOptions);

// Bind AddressBook action creators to store dispatch method
const configuredUsAddressBookActions = bindActionCreators(
  UsAddressBookWidget.addressBookActions,
  store.dispatch
);

// Drop the created container component where you need it
export default class App extends Component {
  constructor(props) {
    super(props);

    configuredUsAddressBookActions.loadAddresses();

    this.state = {
      countries: [{value: regionCodes.US.value, label: regionCodes.US.name}],
      defaultCountryCode: regionCodes.US.value
    };
  }

  render() {
    // Create a high-order AddressBook component bound to the store
    const AddressBookContainer = UsAddressBookWidget.AddressBookContainer;

    return (
      <div className="component-documentation demo checkout-address-book">
        <AddressBookContainer
          countries={this.state.countries}
          defaultCountryCode={this.state.defaultCountryCode}
          isGuest={false}
          isVisible
          onCancel={() => {}}
          onContinue={() => {}}
          showFormWhenEmpty />
      </div>
    );
  }
}
