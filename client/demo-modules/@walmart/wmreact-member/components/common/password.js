"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _field = require("./field");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canShowHide = function canShowHide() {
  var field = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return field.value;
};

var Password = function (_React$Component) {
  (0, _inherits3.default)(Password, _React$Component);

  function Password(props) {
    (0, _classCallCheck3.default)(this, Password);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { show: false };
    return _this;
  }

  Password.prototype._toggle = function _toggle(ev) {
    ev.preventDefault();
    this.setState((0, _assign2.default)({}, this.state, { show: !this.state.show }));
  };

  Password.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var field = _props.field;
    var props = (0, _objectWithoutProperties3.default)(_props, ["field"]);
    var showAutomationId = _props.showAutomationId;
    var hideAutomationId = _props.hideAutomationId;
    var showTealeafId = _props.showTealeafId;
    var hideTealeafId = _props.hideTealeafId;


    var isShow = this.state.show;
    var _props$autoComplete = props.autoComplete;
    var autoComplete = _props$autoComplete === undefined ? "off" : _props$autoComplete;

    return _react2.default.createElement(
      _field2.default,
      (0, _extends3.default)({
        field: field
      }, props, {
        autoComplete: this.state.show ? "off" : autoComplete,
        type: this.state.show ? "text" : "password",
        triggerIEHack: true,
        className: "show-hide input-field" }),
      canShowHide(field) && _react2.default.createElement(
        "div",
        { className: "show-hide-toggle js-pw-show-hide-toggle copy-mini" },
        _react2.default.createElement(
          _button2.default,
          {
            fakelink: true,
            onMouseDown: function onMouseDown(ev) {
              return _this2._toggle(ev);
            },
            automationId: !isShow ? showAutomationId : hideAutomationId,
            tealeafId: !isShow ? showTealeafId : hideTealeafId
          },
          isShow ? "HIDE" : "SHOW"
        )
      )
    );
  };

  return Password;
}(_react2.default.Component);

exports.default = Password;

Password.propTypes = {
  field: _react.PropTypes.object,
  showAutomationId: _react.PropTypes.string,
  hideAutomationId: _react.PropTypes.string,
  showTealeafId: _react.PropTypes.string,
  hideTealeafId: _react.PropTypes.string
};

Password.defaultProps = {
  showAutomationId: "password-show-btn",
  hideAutomationId: "password-hide-btn",
  showTealeafId: "password-show-btn",
  hideTealeafId: "password-hide-btn"
};