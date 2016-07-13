"use strict";

exports.__esModule = true;

var _messageError = require("./message-error");

var _messageError2 = _interopRequireDefault(_messageError);

var _messageSuccess = require("./message-success");

var _messageSuccess2 = _interopRequireDefault(_messageSuccess);

var _messageWarning = require("./message-warning");

var _messageWarning2 = _interopRequireDefault(_messageWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Error: _messageError2.default,
  Success: _messageSuccess2.default,
  Warning: _messageWarning2.default
};