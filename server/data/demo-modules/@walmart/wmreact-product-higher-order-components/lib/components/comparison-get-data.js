"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

exports.default = function (productData) {
  var out = { attributes: [] };
  var compAttributes = _getByAttribute(productData, "compare_attributes") && _getByAttribute(productData, "compare_attributes").Child || [];

  compAttributes.forEach(function (attr) {
    var attrValue = {
      category: attr.DisplayName,
      value: attr.Value && attr.Value[0] && _getValues(attr.Value[0])
    };
    out.attributes.push(attrValue);
  });

  // when Terra is ready with IDML data, it will flatten this data
  // so that we can get rid of the `unsafe` nested data fetch
  out.brand = _getByAttribute(productData, "brand").Value[0][0].Value[0];

  var items = _getByAttribute(productData, "items") && _getByAttribute(productData, "items").Child || {};
  var products = [];
  for (var i in items) {
    if (items.hasOwnProperty(i)) {
      var features = {};
      for (var j = 0; j < compAttributes.length; j++) {
        (0, _assign2.default)(features, _buildMap(_getByAttribute(items[i].Child, compAttributes[j].Attribute).Value[0]));
      }

      // may subject to change when Terra is ready
      var info = {
        id: _getByProperty(items[i].Value[0], "item_id").Value[0],
        title: _getByProperty(items[i].Value[0], "title").Value[0],
        url: _getByProperty(items[i].Value[0], "url").Value[0],
        features: features
      };
      products.push(info);
    }
  }
  out.products = products;

  return out;
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint func-style: 0 */

var _getByProperty = function _getByProperty(node, propName) {
  for (var i in node) {
    if (node.hasOwnProperty(i) && node[i].Property === propName) {
      return node[i];
    }
  }
  return null;
};

var _getByAttribute = function _getByAttribute(node, attrName) {
  for (var i in node) {
    if (node.hasOwnProperty(i) && node[i].Attribute === attrName) {
      return node[i];
    }
  }
  return null;
};

var _getValues = function _getValues(node) {
  var names = [];
  for (var i in node) {
    if (node.hasOwnProperty(i)) {
      names.push(node[i].DisplayName);
    }
  }
  return names;
};

var _buildMap = function _buildMap(node) {
  var map = {};
  for (var i in node) {
    if (node.hasOwnProperty(i)) {
      map[node[i].DisplayName] = node[i].Value[0];
    }
  }
  return map;
};