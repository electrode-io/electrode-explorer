"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  Returns configs object with updated uid's for analytics.
  @examples
  import generateLeftHandNavUids from "@walmart/tempo-analytics-utils"
  const newConfigs = generateLeftHandNavUids(configs);
*/

var LHN = "LHN-";
var DEPT = "DEPT-";
var CAT = "CAT-";
var IMAGE = "IMAGE";

var generateLeftHandNavUids = function generateLeftHandNavUids(configs) {
  var updatedConfigs = (0, _assign2.default)({}, configs);
  var campaignDepartment = updatedConfigs.campaignDepartment;
  var _updatedConfigs$depar = updatedConfigs.departments;
  var departments = _updatedConfigs$depar === undefined ? [] : _updatedConfigs$depar;
  var optionalDepartment = updatedConfigs.optionalDepartment;

  var globalIndex = 1;

  if (campaignDepartment) {
    campaignDepartment.link.uid = LHN + "1-CD";
    globalIndex = 2;
  }

  if (departments.length) {
    departments.forEach(function (superDepartment, index) {
      var superDepartmentIndex = globalIndex + index;
      var superDepartmentUid = "" + LHN + superDepartmentIndex;
      var subDepartments = superDepartment.departments || [];
      superDepartment.uid = superDepartmentUid;

      if (superDepartment.link) {
        superDepartment.link.uid = superDepartmentUid + "-" + IMAGE;
      }

      if (subDepartments.length) {
        subDepartments.forEach(function (subDepartment, subIndex) {
          var _subDepartment$catego = subDepartment.categories;
          var categories = _subDepartment$catego === undefined ? [] : _subDepartment$catego;
          var department = subDepartment.department;

          var subDepartmentIndex = subIndex + 1;
          var subDepartmentUid = superDepartmentUid + "-" + DEPT + subDepartmentIndex;
          department.uid = subDepartmentUid;

          if (categories.length) {
            categories.forEach(function (cat, catIndex) {
              var category = cat.category;

              var categoryIndex = catIndex + 1;
              category.uid = subDepartmentUid + "-" + CAT + categoryIndex;
            });
          }
        });
      }
    });
  }

  if (optionalDepartment) {
    var index = globalIndex + departments.length;
    optionalDepartment.link.uid = "" + LHN + index + "-OD";
  }

  return updatedConfigs;
};

exports.default = generateLeftHandNavUids;