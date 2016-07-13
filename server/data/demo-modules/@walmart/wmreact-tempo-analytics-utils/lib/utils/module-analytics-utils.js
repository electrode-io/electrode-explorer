"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globalLhnUidSwap = require("./global-lhn-uid-swap");

var _globalLhnUidSwap2 = _interopRequireDefault(_globalLhnUidSwap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLICK_THROUGH = "clickThrough"; /* eslint no-invalid-this: 0 */

/**
* Utility functions for construction of the Tempo module data to send to _bcq
*/

var OBJECT = "object";
var IMAGE_MAP = "map";
var GLOBAL_LHN = "GlobalLefthandNav";

var PAGINATION_EVENT_MAPPING = {
  "nextSlide": "nextArrow",
  "previousSlide": "previousArrow",
  "goToSlide": "dot"
};

var DL_WHITELIST = {
  MultiStoryPOVResponsive: true,
  SingleStoryPOVResponsive: true,
  ItemCarouselCurated: true,
  CategoryCarouselCurated: true,
  VerticalCategoryCarouselCurated: true,
  FeaturedCategoriesCurated: true,
  SingleItem: true,
  HighlightedDepartments: true,
  HomepageSavingsCenter: true,
  MiniStoryStackable: true
};

var ModuleAnalyticsUtils = function () {
  function ModuleAnalyticsUtils() {
    (0, _classCallCheck3.default)(this, ModuleAnalyticsUtils);
  }

  // Extract number from zone name and convert to int

  ModuleAnalyticsUtils._getZoneNumber = function _getZoneNumber(zoneName) {
    var match = zoneName.match(/zone(\d*)/i);
    if (match === null) {
      return 0;
    }
    var zoneNumber = match[1];
    if (zoneNumber) {
      return parseInt(zoneNumber);
    } else {
      return 0;
    }
  };

  // Get zones in sorted order from modules


  ModuleAnalyticsUtils._getSortedZones = function _getSortedZones(modules) {
    var _this = this;

    var zoneNames = (0, _keys2.default)(modules);
    zoneNames.sort(function (a, b) {
      return _this._getZoneNumber(a) - _this._getZoneNumber(b);
    });
    return zoneNames;
  };

  // Find link objects nested within the module configs and append to array


  ModuleAnalyticsUtils._getLinks = function _getLinks(object, links) {
    for (var property in object) {
      var subObject = object[property];
      if (subObject !== null && (typeof subObject === "undefined" ? "undefined" : (0, _typeof3.default)(subObject)) === OBJECT) {
        if (subObject.hasOwnProperty(CLICK_THROUGH)) {
          links.push(subObject);
        } else {
          this._getLinks(subObject, links);
        }
      }
    }
  };

  // generate UIDs for links in product carousel to match frontend


  ModuleAnalyticsUtils._appendProductLinks = function _appendProductLinks(products, moduleId, links) {
    if (Array.isArray(products)) {
      products.forEach(function (product) {
        var _product$id = product.id;
        var usItemId = _product$id.usItemId;
        var productId = _product$id.productId;
        var productName = product.productName;

        links.push({
          uid: moduleId + "-" + usItemId,
          id: productId,
          title: productName,
          clickThrough: {}
        });
      });
    }
  };

  // Build links analytics data for module


  ModuleAnalyticsUtils._buildModuleLinksAnalyticsData = function _buildModuleLinksAnalyticsData(configs, moduleId) {
    var links = [];
    var linkDataArray = [];
    var linkUids = [];
    var linkIndex = 0;
    var products = configs.products;


    this._getLinks(configs, links);

    if (products) {
      this._appendProductLinks(products, moduleId, links);
    }

    links.forEach(function (link) {
      var uid = link.uid;
      var id = link.id;
      var assetId = link.assetId;
      var title = link.title;
      var _link$clickThrough = link.clickThrough;
      var type = _link$clickThrough.type;
      var value = _link$clickThrough.value;

      var linkAnalyticsObject = {
        lc: linkIndex + 1,
        ai: assetId,
        nm: title,
        pi: 1
      };
      if (id) {
        linkAnalyticsObject.id = id;
      }
      linkDataArray.push(["li", uid, linkAnalyticsObject]);
      linkUids.push(uid);
      linkIndex++;

      if (type === IMAGE_MAP) {
        for (var mapIndex = 0; mapIndex < value.length; mapIndex++) {
          var mapAnalyticsObject = (0, _extends3.default)({}, linkAnalyticsObject, { lc: linkIndex + 1 });
          var mapUid = uid + "-" + mapIndex;
          linkDataArray.push(["li", mapUid, mapAnalyticsObject]);
          linkUids.push(mapUid);
          linkIndex++;
        }
      }
    });

    return { linkDataArray: linkDataArray, linkUids: linkUids };
  };

  // Build module analytics data for module


  ModuleAnalyticsUtils.buildModuleAnalyticsData = function buildModuleAnalyticsData(modules) {
    var _this2 = this;

    var moduleBcqAddDataArray = [];
    var linkBcqAddDataArray = [];
    var sortedZones = this._getSortedZones(modules);

    sortedZones.forEach(function (zoneName, index) {
      var module = modules[zoneName];
      var moduleId = module.moduleId;
      var type = module.type;
      var name = module.name;
      var version = module.version;
      var publishedDate = module.publishedDate;

      var moduleName = name ? name.substring(0, 15) : undefined; // only 15 chars are needed
      var configs = module.configs;

      var isLHN = type === GLOBAL_LHN;

      var moduleObject = {
        id: moduleId,
        ty: type,
        vr: version,
        do: index + 1,
        st: publishedDate
      };

      if (isLHN) {
        configs = (0, _globalLhnUidSwap2.default)(configs);
      } else {
        moduleObject.nm = moduleName;
        moduleObject.zn = zoneName;
      }

      var _buildModuleLinksAnal = _this2._buildModuleLinksAnalyticsData(configs, moduleId);

      var linkDataArray = _buildModuleLinksAnal.linkDataArray;
      var linkUids = _buildModuleLinksAnal.linkUids;

      // only add DL attribute for whitelisted modules

      if (DL_WHITELIST[type]) {
        moduleObject.dl = linkUids;
      }

      moduleBcqAddDataArray.push(["co", moduleId, moduleObject]);
      linkBcqAddDataArray = linkBcqAddDataArray.concat(linkDataArray);
    });

    return linkBcqAddDataArray.concat(moduleBcqAddDataArray);
  };

  //Build analytics for pagination on a tempo carousel module


  ModuleAnalyticsUtils.buildPaginationAnalytics = function buildPaginationAnalytics(type, zoneId, clickTarget) {
    var context = "Carousel_" + zoneId;
    var data = [["li", { "nm": PAGINATION_EVENT_MAPPING[type] }]];
    var url = "";
    var action = "ON_PAGINATION";
    var reportingId = "dis.pag.slc.clc";
    return ["_tagAction", context, action, reportingId, data, url, clickTarget];
  };

  return ModuleAnalyticsUtils;
}();

exports.default = ModuleAnalyticsUtils;