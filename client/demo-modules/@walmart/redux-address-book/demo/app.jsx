import React, {Component} from "react";
import {createStore, applyMiddleware, bindActionCreators, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {createAddressBookWidget, addressBookReducer} from "../src/index";
import options from "./address-book-options";

// Import Address Book presentational components
import {AddressBook} from "@walmart/wmreact-address-book";

// Create a store
const finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore);

const store = finalCreateStore(combineReducers({
  // place all your other reducers here:
  // ...
  addressBook: addressBookReducer
}));

const {
  AddressBookContainer,
  addressBookActions
} = createAddressBookWidget(AddressBook, store, options);

// Bind AddressBook action creators to store dispatch method
const actions = bindActionCreators(addressBookActions, store.dispatch);

// Drop the created container component where you need it
export default class App extends Component {
  componentWillMount() {
    actions.loadAddresses();
  }

  render() {
    const countries = {
      GBR: "United Kingdom",
      DEU: "Germany",
      FRA: "France"
    };

    return (
      <div className="demo checkout-address-book">
        <AddressBookContainer
          countries={countries}
          defaultCountryCode="GBR"
          isGuest={false}
          isVisible
          onCancel={() => {}}
          onContinue={() => {}}
          showFormWhenEmpty />
      </div>
    );
  }
}
