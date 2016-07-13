import StoreAdapter from "./store-adapter";

const storeAdapter = new StoreAdapter();

export default class StoresAdapter {

  adapt(storeFinderResponse) {
    const {
      location,
      preferredStores,
      nearbyStores
    } = this._adaptStoreFinderResponse(storeFinderResponse);
    const displayPreferredStores = this._adaptStores(preferredStores, true);
    const displayNearybyStores = this._adaptStores(nearbyStores, false);
    return {
      location,
      nearbyStores: displayNearybyStores,
      preferredStores: displayPreferredStores
    };
  }

  _adaptStoreFinderResponse(storeFinderResponse) {
    if (storeFinderResponse && storeFinderResponse.stores) {
      const { location, preferredStores, nearbyStores } = storeFinderResponse.stores;
      return { location, preferredStores, nearbyStores };
    }
    return {};
  }

  _adaptStores(stores, preferred) {
    if (stores && stores.length > 0) {
      return stores.map((store) => storeAdapter.adapt(store, preferred));
    }
  }
}
