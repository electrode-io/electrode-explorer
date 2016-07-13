"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = require("../actions/action-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var bizToolsMob = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  var result = void 0;

  var actionModified = {
    type: action.type
  };

  if (action.payload === undefined) {
    actionModified.payload = null;
  } else {
    actionModified.payload = action.payload;
  }

  switch (actionModified.type) {
    case _actionTypes.RENDER_BIZ_TOOLS_MOBILE:
      result = (0, _extends3.default)({}, bizToolsMob, {
        renderBusinessTools: actionModified.payload
      });

      break;

    case _actionTypes.INDEX_SUPER_DEPT_MOBILE:
      result = (0, _extends3.default)({}, bizToolsMob, {
        superDeptIndex: actionModified.payload
      });

      break;

    case _actionTypes.RENDER_DEPT_MOBILE:
      result = (0, _extends3.default)({}, bizToolsMob, {
        renderDept: actionModified.payload
      });

      break;

    case _actionTypes.INDEX_DEPT_MOBILE:
      result = {
        renderBusinessTools: bizToolsMob.renderBusinessTools,
        superDeptIndex: bizToolsMob.superDeptIndex,
        renderDept: bizToolsMob.renderDept,
        deptIndex: actionModified.payload,
        btoolsIndex: bizToolsMob.btoolsIndex
      };

      break;

    case _actionTypes.BTOOLS_INDEX_MOBILE:
      result = (0, _extends3.default)({}, bizToolsMob, {
        btoolsIndex: actionModified.payload
      });

      break;

    default:
      result = {
        renderBusinessTools: false,
        superDeptIndex: null,
        renderDept: false,
        deptIndex: null,
        btoolsIndex: null
      };

      break;
  }

  return result;
};