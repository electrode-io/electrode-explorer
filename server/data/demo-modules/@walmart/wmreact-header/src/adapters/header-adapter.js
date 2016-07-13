import get from "lodash/get";

import StoresAdapter from "./stores-adapter";

const storesAdapter = new StoresAdapter();

export default class HeaderAdapter {
  constructor(state = { header: {} }) {
    this.isMobile = state.isMobile;
    this.isBot = state.isBot;
    this.header = state.header;
    this._adaptStores = this._adaptStores.bind(this);
  }

  adapt() {
    const isMobile = this.isMobile;
    const isBot = this.isBot;
    const {storeFinder, ...rest} = this.header;
    const stores = storeFinder && this._adaptStores(storeFinder.response);
    const loading = get(storeFinder, "loading", false);
    const didInvalidate = get(storeFinder, "didInvalidate", false);
    return {
      isMobile,
      isBot,
      storeFinderResponse: {
        stores,
        loading,
        didInvalidate
      },
      ...rest
    };
  }

  _adaptStores(storesData) {
    return storesAdapter.adapt(storesData);
  }
}
