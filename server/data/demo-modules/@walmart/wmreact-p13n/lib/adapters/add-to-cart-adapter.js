"use strict";

exports.__esModule = true;
exports.AddToCartAdapter = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddToCartAdapter = exports.AddToCartAdapter = function () {
  function AddToCartAdapter() {
    (0, _classCallCheck3.default)(this, AddToCartAdapter);
  }

  AddToCartAdapter.prototype.adapt = function adapt(product, quantity) {
    // If `SP` cookie is `s` => pass `SHIP_RULE_3`
    // If `SP` cookie is `t` => pass `SHIP_RULE_4`
    // For any other value of `SP` cookie => `SHIP_RULE_1`
    var shipMethodDefaultRule = "";
    switch (_electrodeCookies2.default.get("SP")) {
      case "s":
        shipMethodDefaultRule = "SHIP_RULE_3";
        break;
      case "t":
        shipMethodDefaultRule = "SHIP_RULE_4";
        break;
      default:
        shipMethodDefaultRule = "SHIP_RULE_1";
        break;
    }

    var item = {
      id: product.usItemId,
      offerId: product.offerId,
      quantity: quantity,
      placementId: product.placementId,
      configId: product.configId,
      shipMethodDefaultRule: shipMethodDefaultRule
    };
    return item;
  };

  return AddToCartAdapter;
}(); /* flow */