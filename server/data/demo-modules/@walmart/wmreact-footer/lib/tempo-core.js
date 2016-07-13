"use strict";

exports.__esModule = true;
exports.mapQuimbyStateToProps = exports.quimbyDataReducer = exports.getQuimbyDataAction = exports.TempoWrapper = exports.TempoZone = undefined;

var _wmreactTempoCore = require("@walmart/wmreact-tempo-core");

var _applyConfigToTempoCo = (0, _wmreactTempoCore.applyConfigToTempoCore)({ pageType: "global_footer", enrich: "0" }); // This file is now the entry point into `@walmart/wmreact-tempo-core`
// applyConfigToTempoCore returns all of the exported tempo-core pieces with the passed in config.
// runtime options will take precedence over this config.


var TempoZone = _applyConfigToTempoCo.TempoZone;
var TempoWrapper = _applyConfigToTempoCo.TempoWrapper;
var getQuimbyDataAction = _applyConfigToTempoCo.getQuimbyDataAction;
var quimbyDataReducer = _applyConfigToTempoCo.quimbyDataReducer;
var mapQuimbyStateToProps = _applyConfigToTempoCo.mapQuimbyStateToProps;
exports.TempoZone = TempoZone;
exports.TempoWrapper = TempoWrapper;
exports.getQuimbyDataAction = getQuimbyDataAction;
exports.quimbyDataReducer = quimbyDataReducer;
exports.mapQuimbyStateToProps = mapQuimbyStateToProps;