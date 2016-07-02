"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _reactResolver = require("react-resolver");

var _apiAuthorization = require("../api/authorization");

var _apiAuthorization2 = _interopRequireDefault(_apiAuthorization);

var _storesAuthorization = require("../stores/authorization");

var _storesAuthorization2 = _interopRequireDefault(_storesAuthorization);

var _constantsAuthorization = require("../constants/authorization");

var AuthorizationConnector = (0, _reactRedux.connect)(function (state) {
  return state;
})(function (props) {
  return _react2["default"].createElement(
    "div",
    null,
    _react2["default"].Children.map(props.children, function (child) {
      return _react2["default"].cloneElement(child, props);
    })
  );
});

var AuthorizationContainer = (function (_React$Component) {
  _inherits(AuthorizationContainer, _React$Component);

  function AuthorizationContainer(props) {
    _classCallCheck(this, AuthorizationContainer);

    _get(Object.getPrototypeOf(AuthorizationContainer.prototype), "constructor", this).call(this, props);
    if (props.auth) {
      _storesAuthorization2["default"].dispatch(_extends({}, props.auth, {
        type: _constantsAuthorization.UPDATE
      }));
    }
  }

  _createClass(AuthorizationContainer, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        _reactRedux.Provider,
        { store: _storesAuthorization2["default"] },
        _react2["default"].createElement(
          AuthorizationConnector,
          null,
          this.props.children
        )
      );
    }
  }]);

  return AuthorizationContainer;
})(_react2["default"].Component);

AuthorizationContainer.propTypes = {
  auth: _react2["default"].PropTypes.object,
  children: _react2["default"].PropTypes.object
};

exports["default"] = (0, _reactResolver.resolve)("auth", function () {
  var promise = (0, _apiAuthorization2["default"])();
  promise.then(function (data) {
    _storesAuthorization2["default"].dispatch(_extends({}, data, {
      type: _constantsAuthorization.UPDATE
    }));
  });
  return promise;
})(AuthorizationContainer);
module.exports = exports["default"];