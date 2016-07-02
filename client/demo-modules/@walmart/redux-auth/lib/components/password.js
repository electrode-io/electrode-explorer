"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _field = require("./field");

var _field2 = _interopRequireDefault(_field);

var _commonHelpers = require("../common/helpers");

var _walmartWmreactInteractive = require("@walmart/wmreact-interactive");

var canShowHide = function canShowHide() {
  var field = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return field.value;
};

var Password = (function (_React$Component) {
  _inherits(Password, _React$Component);

  function Password(props) {
    _classCallCheck(this, Password);

    _get(Object.getPrototypeOf(Password.prototype), "constructor", this).call(this, props);
    this.state = { show: false };
  }

  _createClass(Password, [{
    key: "_toggle",
    value: function _toggle() {
      this.setState(Object.assign({}, this.state, { show: !this.state.show }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _props = this.props;
      var field = _props.field;

      var props = _objectWithoutProperties(_props, ["field"]);

      return _react2["default"].createElement(
        _field2["default"],
        _extends({ field: field
        }, props, {
          type: this.state.show ? "text" : "password",
          className: "show-hide" }),
        canShowHide(field) && _react2["default"].createElement(
          "div",
          { className: "show-hide-toggle js-pw-show-hide-toggle copy-mini" },
          _react2["default"].createElement(
            _walmartWmreactInteractive.Button,
            { fakelink: true, onClick: function () {
                return _this._toggle();
              } },
            this.state.show ? (0, _commonHelpers.i18n)("Hide") : (0, _commonHelpers.i18n)("Show")
          )
        )
      );
    }
  }]);

  return Password;
})(_react2["default"].Component);

exports["default"] = Password;

Password.propTypes = {
  field: _react.PropTypes.object
};
module.exports = exports["default"];