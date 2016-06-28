"use strict";

exports.__esModule = true;
exports.default = layoutHelper;

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _mapColumns = require("../utils/map-columns");

var _mapColumns2 = _interopRequireDefault(_mapColumns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint func-style: 0 */
function layoutHelper(options) {
  var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  var cMap = (0, _mapColumns2.default)(options, "sizes");
  var coMap = (0, _mapColumns2.default)(options, "offsets");

  var classes = [];
  classes.push("Grid-col");
  for (var k in cMap) {
    classes.push("u-size-" + cMap[k][index % cMap[k].length] + "-12" + k);
  }
  for (var _k in coMap) {
    classes.push("u-offset-" + coMap[_k][index % coMap[_k].length] + "-12" + _k);
  }

  var extras = (0, _classnames2.default)({
    "valign-top": options.vertical === "top",
    "valign-middle": options.vertical === "middle",
    "valign-bottom": options.vertical === "bottom"
  });
  if (extras.length > 0) {
    classes.push(extras);
  }

  return classes;
}