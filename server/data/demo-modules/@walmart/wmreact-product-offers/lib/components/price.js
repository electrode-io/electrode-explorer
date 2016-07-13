"use strict";

exports.__esModule = true;

var _priceBase = require("./price/price-base");

var _priceBase2 = _interopRequireDefault(_priceBase);

var _priceSuperscript = require("./price/price-superscript");

var _priceSuperscript2 = _interopRequireDefault(_priceSuperscript);

var _priceSubscript = require("./price/price-subscript");

var _priceSubscript2 = _interopRequireDefault(_priceSubscript);

var _priceOld = require("./price/price-old");

var _priceOld2 = _interopRequireDefault(_priceOld);

var _priceSave = require("./price/price-save");

var _priceSave2 = _interopRequireDefault(_priceSave);

var _priceHero = require("./price/price-hero");

var _priceHero2 = _interopRequireDefault(_priceHero);

var _priceSubmap = require("./price/price-submap");

var _priceSubmap2 = _interopRequireDefault(_priceSubmap);

var _pricePpu = require("./price/price-ppu");

var _pricePpu2 = _interopRequireDefault(_pricePpu);

var _submapFlyout = require("./price/submap-flyout");

var _submapFlyout2 = _interopRequireDefault(_submapFlyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_priceBase2.default.Sup = _priceSuperscript2.default;
_priceBase2.default.Sub = _priceSubscript2.default;
_priceBase2.default.Old = _priceOld2.default;
_priceBase2.default.Save = _priceSave2.default;
_priceBase2.default.Hero = _priceHero2.default;
_priceBase2.default.Submap = _priceSubmap2.default;
_priceBase2.default.PPU = _pricePpu2.default;
_priceBase2.default.SubmapFlyout = _submapFlyout2.default;

exports.default = _priceBase2.default;