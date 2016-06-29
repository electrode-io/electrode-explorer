"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _errorMessageMap = require("../error-message-map.json");

var _errorMessageMap2 = _interopRequireDefault(_errorMessageMap);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertErrors = function AlertErrors(props) {
  var errorCodes = props.errorCodes;
  var errorMessages = props.errorMessages;
  var className = props.className;
  var rest = (0, _objectWithoutProperties3.default)(props, ["errorCodes", "errorMessages", "className"]);

  var allErrorMessages = (0, _assign2.default)({}, _errorMessageMap2.default, errorMessages);
  var errors = errorCodes.filter(function (errorCode) {
    return !!allErrorMessages[errorCode];
  }).map(function (errorCode) {
    return allErrorMessages[errorCode];
  });

  if (errorCodes.length !== errors.length) {
    errors.push(allErrorMessages.unknown);
  }

  return _react2.default.createElement(
    "div",
    { className: className },
    errors.map(function (error, index) {
      return _react2.default.createElement(_alert2.default, (0, _extends3.default)({ key: index }, error, { isBlock: true }, rest));
    })
  );
};

AlertErrors.propTypes = {
  errorCodes: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string).isRequired,
  errorMessages: _react2.default.PropTypes.object,
  className: _react2.default.PropTypes.string
};

exports.default = AlertErrors;