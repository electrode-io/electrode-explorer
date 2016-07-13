"use strict";

exports.__esModule = true;

var _reactRedux = require("react-redux");

var _ads = require("../ads");

var _ads2 = _interopRequireDefault(_ads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var ads = _ref.ads;
  return { ads: ads };
})(_ads2.default);