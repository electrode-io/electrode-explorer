"use strict";

exports.__esModule = true;
exports.voltageEncrypt = undefined;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _encrypt = require("../../vendor/voltage/encrypt");

var _littleLoader = require("little-loader");

var _littleLoader2 = _interopRequireDefault(_littleLoader);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_VOLTAGE_RETRY = 3;

var loadVoltageKey = function loadVoltageKey(retries) {
  return new _promise2.default(function (resolve, reject) {
    var win = _config2.default.getWindow();
    var onError = function onError() {
      if (retries > 0) {
        resolve(loadVoltageKey(--retries));
      } else {
        reject();
      }
    };

    (0, _littleLoader2.default)(_config2.default.getVoltageKeyUrl() + "?bust=" + new Date().getTime(), function (err) {
      if (!err && win.PIE && win.PIE.key_id) {
        resolve({ key: win.PIE.key_id.toString(), phase: win.PIE.phase.toString() });
      } else {
        onError();
      }
    });
  });
};

var voltageEncrypt = exports.voltageEncrypt = function voltageEncrypt(number, cvv) {
  return loadVoltageKey(MAX_VOLTAGE_RETRY).then(function (_ref) {
    var key = _ref.key;
    var phase = _ref.phase;

    var encryptionResult = (0, _encrypt.ProtectPANandCVV)(number, cvv, true);
    if (encryptionResult && encryptionResult.length) {
      return {
        encryptedPan: encryptionResult[0],
        encryptedCvv: encryptionResult[1],
        integrityCheck: encryptionResult[2],
        keyId: key,
        phase: phase
      };
    } else {
      throw new Error();
    }
  }).catch(function () {
    return {
      encryptedPan: number,
      encryptedCvv: cvv,
      isVoltageEncrypted: false
    };
  });
};