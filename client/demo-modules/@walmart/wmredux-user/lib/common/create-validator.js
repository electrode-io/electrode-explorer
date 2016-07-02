"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (validators) {
  var validateAll = function validateAll(arr, value) {
    var allValues = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    if (!Array.isArray(arr)) {
      if (!arr.validate(value, allValues)) {
        return arr.message;
      }
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var validator = _step.value;

        if (!validator.validate(value, allValues)) {
          return validator.message;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return null;
  };

  return function () {
    var values = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return Object.keys(values).filter(function (key) {
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