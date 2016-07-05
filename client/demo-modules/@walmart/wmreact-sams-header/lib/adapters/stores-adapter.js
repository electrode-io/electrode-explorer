"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _storeAdapter = require("./store-adapter");

var _storeAdapter2 = _interopRequireDefault(_storeAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeAdapter = new _storeAdapter2.default();

var StoresAdapter = function () {
  function StoresAdapter() {
    (0, _classCallCheck3.default)(this, StoresAdapter);
  }

  StoresAdapter.prototype.adapt = function adapt(storeFinderResponse) {
    var _adaptStoreFinderResp = this._adaptStoreFinderResponse(storeFinderResponse);

    var location = _adaptStoreFinderResp.location;
    var preferredStores = _adaptStoreFinderResp.preferredStores;
    var nearbyStores = _adaptStoreFinderResp.nearbyStores;
    var singleLineAddr = _adaptStoreFinderResp.singleLineAddr;

    var displayPreferredStores = this._adaptStores(preferredStores, true);
    var displayNearbyStores = this._adaptStores(nearbyStores, false);
    return {
      location: location,
      nearbyStores: displayNearbyStores,
      preferredStores: displayPreferredStores,
      singleLineAddr: singleLineAddr
    };
  };

  StoresAdapter.prototype._adaptStoreFinderResponse = function _adaptStoreFinderResponse(storeFinderResponse) {
    if (storeFinderResponse && storeFinderResponse.stores) {
      var _storeFinderResponse$ = storeFinderResponse.stores;
      var location = _storeFinderResponse$.location;
      var preferredStores = _storeFinderResponse$.preferredStores;
      var nearbyStores = _storeFinderResponse$.nearbyStores;
      var singleLineAddr = _storeFinderResponse$.singleLineAddr;

      return { location: location, preferredStores: preferredStores, nearbyStores: nearbyStores, singleLineAddr: singleLineAddr };
    }
    return {};
  };

  StoresAdapter.prototype._adaptStores = function _adaptStores(stores, preferred) {
    if (stores && stores.length > 0) {
      return stores.map(function (store) {
        return storeAdapter.adapt(store, preferred);
      });
    }
  };

  return StoresAdapter;
}();

exports.default = StoresAdapter;