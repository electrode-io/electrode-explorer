"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _p13nUtils = require("../utils/p13n-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P13NZoneAdapter = function () {
  function P13NZoneAdapter(state, ownProps) {
    (0, _classCallCheck3.default)(this, P13NZoneAdapter);

    this.page = ownProps.page;
    this.placementId = (0, _p13nUtils.getPlacementSuffix)(ownProps.placementId);
    this.irsData = ownProps.irsData ? ownProps.irsData : (0, _get2.default)(state, "recommendationMap.irsDataMap." + this.placementId);
  }

  /**
   * Adapt the state to return the props necessary for P13N
   * @returns {{products: *}} the Product Collection props
   */


  P13NZoneAdapter.prototype.adapt = function adapt() {
    var recommendedProducts = this.irsData.recommendedProducts;
    return { "products": recommendedProducts };
  };

  return P13NZoneAdapter;
}();

exports.default = P13NZoneAdapter;