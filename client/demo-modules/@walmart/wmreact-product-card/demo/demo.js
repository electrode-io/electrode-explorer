"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _electrodeDemoIndex = require("@walmart/electrode-demo-index");

var _electrodeDemoIndex2 = _interopRequireDefault(_electrodeDemoIndex);

var _productBasicInfo = require("raw!./examples/product-basic-info.example");

var _productBasicInfo2 = _interopRequireDefault(_productBasicInfo);

var _productCallToAction = require("raw!./examples/product-call-to-action.example");

var _productCallToAction2 = _interopRequireDefault(_productCallToAction);

var _productCard = require("raw!./examples/product-card.example");

var _productCard2 = _interopRequireDefault(_productCard);

var _productCardFlagList = require("raw!./examples/product-card-flag-list.example");

var _productCardFlagList2 = _interopRequireDefault(_productCardFlagList);

var _productImage = require("raw!./examples/product-image.example");

var _productImage2 = _interopRequireDefault(_productImage);

var _productInformation = require("raw!./examples/product-information.example");

var _productInformation2 = _interopRequireDefault(_productInformation);

var _productItemTile = require("raw!./examples/product-item-tile.example");

var _productItemTile2 = _interopRequireDefault(_productItemTile);

var _productSellerCard = require("raw!./examples/product-seller-card.example");

var _productSellerCard2 = _interopRequireDefault(_productSellerCard);

var _productShortInfo = require("raw!./examples/product-short-info.example");

var _productShortInfo2 = _interopRequireDefault(_productShortInfo);

var _productSwatchSelector = require("raw!./examples/product-swatch-selector.example");

var _productSwatchSelector2 = _interopRequireDefault(_productSwatchSelector);

var _productThemeTile = require("raw!./examples/product-theme-tile.example");

var _productThemeTile2 = _interopRequireDefault(_productThemeTile);

var _storeItemTile = require("raw!./examples/store-item-tile.example");

var _storeItemTile2 = _interopRequireDefault(_storeItemTile);

var _tileBrick = require("raw!./examples/tile-brick.example");

var _tileBrick2 = _interopRequireDefault(_tileBrick);

var _tile = require("raw!./examples/tile.example");

var _tile2 = _interopRequireDefault(_tile);

var _productCompetitorInfo = require("raw!./examples/product-competitor-info.example");

var _productCompetitorInfo2 = _interopRequireDefault(_productCompetitorInfo);

var _index = require("../bundle.min");

var libraryScope = _interopRequireWildcard(_index);

var _variantTypes = require("./data/variantTypes");

var _variantTypes2 = _interopRequireDefault(_variantTypes);

var _tileData = require("./data/tileData");

var _tileData2 = _interopRequireDefault(_tileData);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [{
  title: "ProductCallToAction",
  examples: [{
    type: "playground",
    code: _productCallToAction2.default,
    noRender: true
  }]
}, {
  title: "ProductCard",
  examples: [{
    type: "playground",
    code: _productCard2.default,
    noRender: true,
    extraScope: { variantTypes: _variantTypes2.default }
  }]
}, {
  title: "ProductCardFlagList",
  examples: [{
    type: "playground",
    code: _productCardFlagList2.default,
    noRender: true
  }]
}, {
  title: "ProductImage",
  examples: [{
    type: "playground",
    code: _productImage2.default,
    noRender: true
  }]
}, {
  title: "ProductSwatchSelector",
  examples: [{
    type: "playground",
    code: _productSwatchSelector2.default,
    noRender: true
  }]
}, {
  title: "ProductInformation",
  examples: [{
    type: "playground",
    code: _productInformation2.default,
    noRender: true
  }]
}, {
  title: "ProductBasicInfo",
  examples: [{
    type: "playground",
    code: _productBasicInfo2.default,
    noRender: true
  }]
}, {
  title: "ProductShortInfo",
  examples: [{
    type: "playground",
    code: _productShortInfo2.default,
    noRender: true
  }]
}, {
  title: "Tile",
  examples: [{
    type: "playground",
    code: _tile2.default,
    noRender: true
  }]
}, {
  title: "Tile.Brick",
  examples: [{
    type: "playground",
    code: _tileBrick2.default,
    noRender: true
  }]
}, {
  title: "ProductItemTile",
  examples: [{
    type: "playground",
    code: _productItemTile2.default,
    noRender: true,
    extraScope: { tileData: _tileData2.default }
  }]
}, {
  title: "ProductSellerCard",
  examples: [{
    type: "playground",
    code: _productSellerCard2.default,
    noRender: true
  }]
}, {
  title: "ProductThemeTile",
  examples: [{
    type: "playground",
    code: _productThemeTile2.default,
    noRender: true
  }]
}, {
  title: "StoreItemTile",
  examples: [{
    type: "playground",
    code: _storeItemTile2.default,
    noRender: true
  }]
}, {
  title: "ProductCompetitorInfo",
  examples: [{
    type: "playground",
    code: _productCompetitorInfo2.default,
    noRender: true
  }]
}];

var Index = function (_ElectrodeDemoIndex) {
  (0, _inherits3.default)(Index, _ElectrodeDemoIndex);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);
    return (0, _possibleConstructorReturn3.default)(this, _ElectrodeDemoIndex.call(this, props));
  }

  Index.prototype.componentDidMount = function componentDidMount() {
    this._setDemoContext(libraryScope, components);
  };

  return Index;
}(_electrodeDemoIndex2.default);

exports.default = Index;
