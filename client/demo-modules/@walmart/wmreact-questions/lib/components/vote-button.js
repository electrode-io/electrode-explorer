"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _walmartWmreactInteractive = require("@walmart/wmreact-interactive");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

/**
@private
*/

var VoteButton = (function (_React$Component) {
  _inherits(VoteButton, _React$Component);

  function VoteButton() {
    _classCallCheck(this, VoteButton);

    _get(Object.getPrototypeOf(VoteButton.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(VoteButton, [{
    key: "_renderCount",
    value: function _renderCount() {
      if (!this.props.count) {
        return null;
      }

      return _react2["default"].createElement(
        "span",
        { className: "btn-vote-count xxs-margin-left" },
        "(",
        this.props.count,
        ")"
      );
    }
  }, {
    key: "render",
    value: function render() {
      var buttonText = this.props.kind === "up" ? "Yes" : "No";

      var className = this.props.className;

      return _react2["default"].createElement(
        "span",
        { className: "btn-vote-section" },
        _react2["default"].createElement(
          _walmartWmreactInteractive.Button,
          {
            className: (0, _classnames2["default"])("btn-vote", className)
          },
          _react2["default"].createElement("i", {
            className: (0, _classnames2["default"])({
              "btn-vote-up": this.props.kind === "up",
              "btn-vote-down": this.props.kind === "down"
            })
          }),
          _react2["default"].createElement(
            "span",
            { className: "xxs-margin-left" },
            buttonText
          )
        ),
        this._renderCount()
      );
    }
  }]);

  return VoteButton;
})(_react2["default"].Component);

exports["default"] = VoteButton;

VoteButton.displayName = "VoteButton";

VoteButton.propTypes = {
  count: _react2["default"].PropTypes.number,
  kind: _react2["default"].PropTypes.oneOf(["up", "down"]),
  className: _react2["default"].PropTypes.string
};
module.exports = exports["default"];