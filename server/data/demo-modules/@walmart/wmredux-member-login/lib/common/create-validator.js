"use strict";

exports.__esModule = true;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (validators) {
  var validateAll = function validateAll(arr, value) {
    var allValues = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    if (!Array.isArray(arr)) {
      if (!arr.validate(value, allValues)) {
        return arr.message;
      }
    }
    for (var _iterator = arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var validator = _ref;

      if (!validator.validate(value, allValues)) {
        return validator.message;
      }
    }
    return null;
  };

  return function () {
    var values = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return (0, _keys2.default)(values).filter(function (key) {
      return validators[key];
    }).reduce(function (obj, key) {
      var error = validateAll(validators[key], values[key], values);
      if (error !== null) {
        obj[key] = error;
      }
      return obj;
    }, {});
  };
};