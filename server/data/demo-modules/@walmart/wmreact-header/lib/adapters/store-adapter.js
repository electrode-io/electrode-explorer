"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* An adapter that converts store service resonse to data that can be
* passed as props to Store Component
*/

var StoreAdapter = function () {
  function StoreAdapter() {
    (0, _classCallCheck3.default)(this, StoreAdapter);
  }

  StoreAdapter.prototype.adapt = function adapt(storeResponse, preferred) {
    var _adaptStoreResponse2 = this._adaptStoreResponse(storeResponse);

    var id = _adaptStoreResponse2.id;
    var distance = _adaptStoreResponse2.distance;
    var address = _adaptStoreResponse2.address;

    var name = (0, _get2.default)(address, "city", "");
    var displayAddress = (0, _get2.default)(address, "address1", "");
    var displayDistance = this._adaptDistance(distance);
    return {
      id: id,
      name: name,
      address: displayAddress,
      distance: displayDistance,
      preferred: preferred
    };
  };

  StoreAdapter.prototype._adaptDistance = function _adaptDistance(distance) {
    return distance && distance + " mi";
  };

  StoreAdapter.prototype._adaptStoreResponse = function _adaptStoreResponse(storeResponse) {
    if (storeResponse) {
      var id = storeResponse.id;
      var distance = storeResponse.distance;
      var address = storeResponse.address;

      return { id: id, distance: distance, address: address };
    }
    return {};
  };

  return StoreAdapter;
}();

exports.default = StoreAdapter;