/**
 * Stores: Store Finder
 */
import alt from "../alt";
import StoreFinderActions from "../actions/store-finder";

class StoreFinderStore {
  constructor() {
    // Auto-magically bind to methods with `onACTION` or `ACTION`.
    // See: http://alt.js.org/docs/createStore/#storemodelbindactions
    this.bindActions(StoreFinderActions);

    // TODO: Switch to immutable-js + alt integration.
    this.stores = [];
    this.error = null;
    this.zipCode = "";
    this.changeZip = true;
    this.searchPending = false;
    this.showAllStores = false;
    this.selectedStore = {};
  }

  onUpdateStores(stores) {
    this.stores = stores;
    this.searchPending = false;
  }

  onFetchStores() {
    // Empty out errors.
    this.error = null;
    this.searchPending = true;
    // **Note**: _Could_ empty out stores during fetch with following:
    // this.stores = [];
  }

  onSetShowAllStores(showAllStores) {
    this.showAllStores = showAllStores;
  }

  onSetStore(store) {
    this.selectedStore = store;
  }

  onSetChangeZip(changeZip) {
    this.changeZip = changeZip;
  }

  onSetSearchPending(searchPending) {
    this.searchPending = searchPending;
  }

  onSetZipCode(zipCode) {
    this.zipCode = zipCode;
  }

  onFetchError(err) {
    this.error = err.message || err.toString();
  }
}

export default alt.createStore(StoreFinderStore, "StoreFinderStore");
