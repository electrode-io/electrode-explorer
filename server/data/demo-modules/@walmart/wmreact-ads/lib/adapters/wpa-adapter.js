"use strict";

exports.__esModule = true;
exports.adapt = undefined;

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _wpaUtils = require("../utils/wpa-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adapt = exports.adapt = function adapt(results) {
  var adaptedData = {};
  if (results) {
    adaptedData.moduleTitle = (0, _get2.default)(results, "moduleTitle", "Sponsored Products");
    adaptedData.pageBeacons = (0, _get2.default)(results, "pageBeacons", {});

    adaptedData.adModule = (0, _get2.default)(results, "adModule", null);
    adaptedData.bucketId = (0, _get2.default)(results, "bucketId", null);
    adaptedData.details = (0, _get2.default)(results, "details", null);
    adaptedData.uuid = (0, _get2.default)(results, "uuid", null);
    adaptedData.relUuid = (0, _get2.default)(results, "relUuid", adaptedData.uuid);

    var adUnits = results.adUnits ? results.adUnits : [];
    adaptedData.adUnits = (0, _map2.default)(adUnits, _wpaUtils.adaptAdUnits);
  }
  return {
    adaptedData: adaptedData
  };
};