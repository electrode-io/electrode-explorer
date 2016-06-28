"use strict";

exports.__esModule = true;
exports.MerchantModule = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _brand = require("./brand");

var _customHtml = require("./custom-html");

var _fiveUp = require("./five-up");

var _oneGiantItem = require("./one-giant-item");

var _threeUp = require("./three-up");

var _topNonItem = require("./top-non-item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MerchantModule = exports.MerchantModule = function MerchantModule(_ref) {
  var merchandisingModules = _ref.merchandisingModules;

  var mapObject = function mapObject(object, callback) {
    return (0, _keys2.default)(object).map(function (key) {
      return callback(key, object[key]);
    });
  };
  var components = mapObject(merchandisingModules, function (key, value) {
    if (key === "Brand") {
      var brandData = value[0].metadata;
      return _react2.default.createElement(_brand.Brand, {
        IMAGE: brandData.IMAGE,
        IMAGE_URL: brandData.IMAGE_URL,
        MERCH_RULE_TITLE: brandData.MERCH_RULE_TITLE,
        IMAGE_HEIGHT: brandData.IMAGE_HEIGHT });
    } else if (key === "TopNonItem") {
      var topNonItemData = value[0].metadata;
      return _react2.default.createElement(_topNonItem.TopNonItem, {
        size: "60",
        TEXT: topNonItemData.TEXT,
        URL: topNonItemData.URL,
        TITLE: topNonItemData.TITLE,
        IMAGE: topNonItemData.IMAGE,
        URL2: topNonItemData.URL2,
        TITLE2: topNonItemData.TITLE2,
        URL3: topNonItemData.URL3,
        TITLE3: topNonItemData.TITLE3 });
    } else if (key === "Top") {
      var topComponent = value.map(function (index) {
        var topData = index;
        if (topData.metadata.MERCH_RULE_STYLE_NAME === "3FeaturedCategories") {
          var threeUpData = topData.metadata;
          return _react2.default.createElement(_threeUp.ThreeUp, {
            size: "100",
            MERCH_RULE_ID: threeUpData.MERCH_RULE_ID,
            MESSAGE_PART1: threeUpData.MESSAGE_PART1,
            PART1_URL: threeUpData.PART1_URL,
            IMAGE1: threeUpData.IMAGE1,
            MESSAGE_PART2: threeUpData.MESSAGE_PART2,
            PART2_URL: threeUpData.PART2_URL,
            IMAGE2: threeUpData.IMAGE2,
            MESSAGE_PART3: threeUpData.MESSAGE_PART3,
            PART3_URL: threeUpData.PART3_URL,
            IMAGE3: threeUpData.IMAGE3 });
        } else if (topData.metadata.MERCH_RULE_STYLE_NAME === "5FeaturedCategories") {
          var fiveUpData = topData.metadata;
          return _react2.default.createElement(_fiveUp.FiveUp, {
            size: "100",
            MERCH_RULE_ID: fiveUpData.MERCH_RULE_ID,
            MESSAGE_PART1: fiveUpData.MESSAGE_PART1,
            PART1_URL: fiveUpData.PART1_URL,
            IMAGE1: fiveUpData.IMAGE1,
            MESSAGE_PART2: fiveUpData.MESSAGE_PART2,
            PART2_URL: fiveUpData.PART2_URL,
            IMAGE2: fiveUpData.IMAGE2,
            MESSAGE_PART3: fiveUpData.MESSAGE_PART3,
            PART3_URL: fiveUpData.PART3_URL,
            IMAGE3: fiveUpData.IMAGE3,
            MESSAGE_PART4: fiveUpData.MESSAGE_PART4,
            PART4_URL: fiveUpData.PART4_URL,
            IMAGE4: fiveUpData.IMAGE4,
            MESSAGE_PART5: fiveUpData.MESSAGE_PART5,
            PART5_URL: fiveUpData.PART5_URL,
            IMAGE5: fiveUpData.IMAGE5 });
        } else if (topData.metadata.MERCH_RULE_STYLE_NAME === "Html") {
          var customData = topData.metadata;
          return _react2.default.createElement(_customHtml.CustomHtml, {
            fontLib: customData.fontLib,
            MERCH_RULE_ID: customData.MERCH_RULE_ID,
            MERCH_RULE_CONTENT_HEIGHT: customData.MERCH_RULE_CONTENT_HEIGHT,
            HTML: customData.HTML });
        } else if (topData.metadata.MERCH_RULE_STYLE_NAME === "TopOneGiantItem") {
          var topGaintItemData = topData.featuredItem;
          return _react2.default.createElement(_oneGiantItem.OneGiantItem, {
            type: "oneup",
            featuredItem: topGaintItemData });
        }
      });
      return topComponent;
    } else {
      return false;
    }
  });

  return _react2.default.createElement(
    "div",
    null,
    components
  );
};
MerchantModule.displayName = "MerchantModule";

MerchantModule.propTypes = {
  merchandisingModules: _react2.default.PropTypes.object
};

MerchantModule.defaultProps = {
  merchandisingModules: {}
};