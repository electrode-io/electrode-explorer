/* @flow */
/* eslint func-style: 0 */

const _getByProperty = function (node: Object, propName: string): any {
  for (const i in node) {
    if (node.hasOwnProperty(i) && node[i].Property === propName) {
      return node[i];
    }
  }
  return null;
};

const _getByAttribute = function (node: Object, attrName: string): any {
  for (const i in node) {
    if (node.hasOwnProperty(i) && node[i].Attribute === attrName) {
      return node[i];
    }
  }
  return null;
};

const _getValues = function (node: Object): any {
  const names = [];
  for (const i in node) {
    if (node.hasOwnProperty(i)) {
      names.push(node[i].DisplayName);
    }
  }
  return names;
};

const _buildMap = function (node: Object): any {
  const map = {};
  for (const i in node) {
    if (node.hasOwnProperty(i)) {
      map[node[i].DisplayName] = node[i].Value[0];
    }
  }
  return map;
};

export default function (productData: any): Object {
  const out = {attributes: []};
  const compAttributes = _getByAttribute(productData, "compare_attributes") &&
    _getByAttribute(productData, "compare_attributes").Child || [];

  compAttributes.forEach((attr) => {
    const attrValue = {
      category: attr.DisplayName,
      value: attr.Value && attr.Value[0] && _getValues(attr.Value[0])
    };
    out.attributes.push(attrValue);
  });

  // when Terra is ready with IDML data, it will flatten this data
  // so that we can get rid of the `unsafe` nested data fetch
  out.brand = _getByAttribute(productData, "brand").Value[0][0].Value[0];

  const items = _getByAttribute(productData, "items") &&
    _getByAttribute(productData, "items").Child || {};
  const products = [];
  for (const i in items) {
    if (items.hasOwnProperty(i)) {
      const features = {};
      for (let j = 0; j < compAttributes.length; j++) {
        Object.assign(features, _buildMap(
          _getByAttribute(items[i].Child, compAttributes[j].Attribute).Value[0]
        ));
      }

      // may subject to change when Terra is ready
      const info = {
        id: _getByProperty(items[i].Value[0], "item_id").Value[0],
        title: _getByProperty(items[i].Value[0], "title").Value[0],
        url: _getByProperty(items[i].Value[0], "url").Value[0],
        features
      };
      products.push(info);
    }
  }
  out.products = products;

  return out;
}
