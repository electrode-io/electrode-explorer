"use strict";

exports.__esModule = true;

var _flagBase = require("./flag-base");

var _flagBase2 = _interopRequireDefault(_flagBase);

var _flagRollback = require("./flag-rollback");

var _flagRollback2 = _interopRequireDefault(_flagRollback);

var _flagClearance = require("./flag-clearance");

var _flagClearance2 = _interopRequireDefault(_flagClearance);

var _flagReduced = require("./flag-reduced");

var _flagReduced2 = _interopRequireDefault(_flagReduced);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_flagBase2.default.Rollback = _flagRollback2.default;
_flagBase2.default.Clearance = _flagClearance2.default;
_flagBase2.default.Reduced = _flagReduced2.default;

exports.default = _flagBase2.default;