"use strict";

exports.__esModule = true;
exports.OneGiantItem = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _itemRowListView = require("@walmart/wmreact-search-product-grid-container/lib/components/item-row-list-view");

var _itemRowListView2 = _interopRequireDefault(_itemRowListView);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The one giant item merchant module component.
 For example this is how we use this component.
 ```jsx
 <OneGiantItem
   type="oneup"
   featuredItem={featuredItem}
 />
 ```
 @import {OneGiantItem}
 @component OneGiantItem
 @playground
OneGiantItem
 ```
 <OneGiantItem
   type="oneup"
   featuredItem={featuredItem}
 />
 ```
 */

var OneGiantItem = exports.OneGiantItem = function OneGiantItem(_ref) {
  var type = _ref.type;
  var featuredItem = _ref.featuredItem;

  var isSponsoredProduct = type === "sponsoredproduct";

  var classes = (0, _classnames2.default)({
    "merchant-module": true,
    "merchant-module-one-giant-item": type === "oneup",
    "merchant-module-sponsored-product": isSponsoredProduct
  });

  // if the item is not available and is not put, don't display
  return _react2.default.createElement(
    "div",
    { className: classes },
    isSponsoredProduct ? _react2.default.createElement(
      "div",
      { className: "one-giant-item-header" },
      _react2.default.createElement(
        "p",
        { className: "one-giant-item-title" },
        "Featured Item "
      )
    ) : null,
    featuredItem ? _react2.default.createElement(_itemRowListView2.default, { data: featuredItem }) : null
  );
};

OneGiantItem.displayName = "MerchantModuleOneGiantItem";

OneGiantItem.defaultProps = {
  type: "",
  featuredItem: {}
};

OneGiantItem.propTypes = {
  type: _react2.default.PropTypes.string,
  featuredItem: _react2.default.PropTypes.object
};