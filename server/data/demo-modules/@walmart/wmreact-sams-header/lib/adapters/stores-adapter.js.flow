import StoreAdapter from "./store-adapter";

const storeAdapter = new StoreAdapter();

export default class StoresAdapter {

  adapt(storeFinderResponse) {
    const {
      location,
      preferredStores,
      nearbyStores,
      singleLineAddr
    } = this._adaptStoreFinderResponse(storeFinderResponse);
    const displayPreferredStores = this._adaptStores(preferredStores, true);
    const displayNearbyStores = this._adaptStores(nearbyStores, false);
    return {
      location,
      nearbyStores: displayNearbyStores,
      preferredStores: displayPreferredStores,
      singleLineAddr
    };
  }

  _adaptStoreFinderResponse(storeFinderResponse) {
    if (storeFinderResponse && storeFinderResponse.stores) {
      const {
        location,
        preferredStores,
        nearbyStores,
        singleLineAddr
      } = storeFinderResponse.stores;
      return { location, preferredStores, nearbyStores, singleLineAddr };
    }
    return {};
  }

  _adaptStores(stores, preferred) {
    if (stores && stores.length > 0) {
      return stores.map((store) => storeAdapter.adapt(store, preferred));
    }
  }
}
