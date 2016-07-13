"use strict";

exports.__esModule = true;
exports.enums = exports.ProductLegalBadge = exports.ProductSellerInfo = exports.ProductTitle = exports.ProductStoreInfoLabel = exports.ProductShortDescription = exports.ProductSecondaryInformation = exports.ProductPriceMsg = exports.ProductBrand = exports.ProductAvailabilityStatusLabel = exports.AboutItem = undefined;

var _aboutItem = require("./components/about-item");

Object.defineProperty(exports, "AboutItem", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_aboutItem).default;
  }
});

var _productAvailabilityStatusLabel = require("./components/product-availability-status-label");

Object.defineProperty(exports, "ProductAvailabilityStatusLabel", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_productAvailabilityStatusLabel).default;
  }
});

var _productBrand = require("./components/product-brand");

Object.defineProperty(exports, "ProductBrand", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_productBrand).default;
  }
});

var _productPriceMessage = require("./components/product-price-message");

Object.defineProperty(exports, "ProductPriceMsg", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_productPriceMessage).default;
  }
});

var _productSecondaryInformation = require("./components/product-secondary-information");

Object.defineProperty(exports, "ProductSecondaryInformation", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_productSecondaryInformation).default;
  }
});

var _productShortDescription = require("./components/product-short-description");

Object.defineProperty(exports, "ProductShortDescription", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_productShortDescription).default;
  }
});

var _productStoreInfoLabel = require("./components/product-store-info-label");

Object.defineProperty(exports, "ProductStoreInfoLabel", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_productStoreInfoLabel).default;
  }
});

var _productTitle = require("./components/product-title");

Object.defineProperty(exports, "ProductTitle", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_productTitle).default;
  }
});

var _productSellerInfo = require("./components/product-seller-info");

Object.defineProperty(exports, "ProductSellerInfo", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_productSellerInfo).default;
  }
});

var _productLegalBadge = require("./components/product-legal-badge");

Object.defineProperty(exports, "ProductLegalBadge", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_productLegalBadge).default;
  }
});

var _availabilityStatus = require("./enums/availability-status");

var _availabilityStatus2 = _interopRequireDefault(_availabilityStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enums = exports.enums = {
  AvailabilityStatus: _availabilityStatus2.default
};