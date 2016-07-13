/**
 * Actions: StoreFinder
 */
import alt from "../alt";
import { fetchStores } from "../api/api";

class StoreFinderActions {
  constructor() {
    this.generateActions(
      "updateStores",
      "setZipCode",
      "setChangeZip",
      "setStore",
      "setShowAllStores",
      "conversionError"
    );
  }

  setStore(store) {
    this.dispatch();
    this.actions.setStore(store);
  }

  changeZip(changeZip) {
    this.dispatch();
    this.actions.setChangeZip(changeZip);
  }

  showAllStores(allStores) {
    this.dispatch();
    this.actions.setShowAllStores(allStores);
  }

  fetchStores(zipCode) {
    this.dispatch();
    fetchStores(zipCode)
      .then((datas) => {
        this.actions.updateStores(datas);
      })
      .catch((err) => {
        this.actions.fetchError(err);
      });
  }
}

export default alt.createActions(StoreFinderActions);
