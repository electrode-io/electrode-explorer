"use strict";

exports.__esModule = true;
exports.ActionStatusAdapter = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _actionStatus = require("../enums/action-status");

var _actionStatus2 = _interopRequireDefault(_actionStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* flow */

var ActionStatusAdapter = exports.ActionStatusAdapter = function () {
  function ActionStatusAdapter() {
    (0, _classCallCheck3.default)(this, ActionStatusAdapter);
  }

  ActionStatusAdapter.prototype.adapt = function adapt(product, addToCartStatus) {
    // Add To Cart components should always get the `IN_PROGRESS` status, but
    // should only get `ADDED_TO_CART` or `ADD_TO_CART_ERROR` if they're the
    // latest result.
    var productId = product.usItemId;
    var placementId = product.placementId;
    var request = (0, _get2.default)(addToCartStatus.requestsById, placementId + "." + productId);
    var isLatestResult = addToCartStatus.latestResultId === placementId + "-" + productId;
    if (isLatestResult || (0, _get2.default)(request, "status") === _actionStatus2.default.IN_PROGRESS) {
      return request.status;
    }
  };

  return ActionStatusAdapter;
}();