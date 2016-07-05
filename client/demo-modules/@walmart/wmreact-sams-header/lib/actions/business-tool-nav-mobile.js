"use strict";

exports.__esModule = true;
exports.btoolsIndexMobile = exports.indexDeptMobile = exports.renderDeptMobile = exports.indexSuperDeptMobile = exports.renderBizToolsMobile = undefined;

var _reduxActions = require("redux-actions");

var _actionTypes = require("../actions/action-types");

var renderBizToolsMobile = exports.renderBizToolsMobile = (0, _reduxActions.createAction)(_actionTypes.RENDER_BIZ_TOOLS_MOBILE);
var indexSuperDeptMobile = exports.indexSuperDeptMobile = (0, _reduxActions.createAction)(_actionTypes.INDEX_SUPER_DEPT_MOBILE);
var renderDeptMobile = exports.renderDeptMobile = (0, _reduxActions.createAction)(_actionTypes.RENDER_DEPT_MOBILE);
var indexDeptMobile = exports.indexDeptMobile = (0, _reduxActions.createAction)(_actionTypes.INDEX_DEPT_MOBILE);
var btoolsIndexMobile = exports.btoolsIndexMobile = (0, _reduxActions.createAction)(_actionTypes.BTOOLS_INDEX_MOBILE);