"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _selectField = require("@walmart/wmreact-stateless-fields/lib/components/select-field");

var _selectField2 = _interopRequireDefault(_selectField);

var _states = require("@walmart/wmreact-state-chooser/static/states");

var _states2 = _interopRequireDefault(_states);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _exenv = require("exenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isIE = _exenv.canUseDOM && /MSIE 9/.test(navigator.appVersion); /* global navigator */


var StateChooser = function (_Component) {
  (0, _inherits3.default)(StateChooser, _Component);

  function StateChooser(props) {
    (0, _classCallCheck3.default)(this, StateChooser);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      touched: false,
      error: props.errorLabel
    };
    return _this;
  }

  StateChooser.prototype.getValue = function getValue() {
    return this.props.value;
  };

  StateChooser.prototype.validate = function validate() {
    if (!this.props.value) {
      this.setState({
        error: this.props.errorLabel,
        touched: true
      });
      return false;
    }
    return true;
  };

  StateChooser.prototype._onChange = function _onChange(ev) {
    var _this2 = this;

    this.setState({
      error: false,
      touched: true
    }, function () {
      return _this2.validate();
    });

    this.props.onChange(ev);
  };

  StateChooser.prototype.render = function render() {
    var _this3 = this;

    var options = _states2.default;
    var value = this.props.value;


    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)({
          "select-state": true,
          "potato-ie-hackarino": isIE
        }) },
      _react2.default.createElement(
        "label",
        { className: "form-label" },
        this.props.labelText
      ),
      _react2.default.createElement(
        _selectField2.default,
        (0, _extends3.default)({
          error: this.state.error,
          touched: this.state.touched
        }, this.props, {
          onChange: function onChange(ev) {
            return _this3._onChange(ev);
          } }),
        options.map(function (_ref, index) {
          var name = _ref.name;
          var code = _ref.code;
          return _react2.default.createElement(
            "option",
            {
              key: code,
              value: code,
              selected: code === value,
              "data-automation-id": "select-state-option-" + index
            },
            name
          );
        })
      )
    );
  };

  return StateChooser;
}(_react.Component);

StateChooser.propTypes = {
  errorLabel: _react2.default.PropTypes.string,
  labelText: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};

StateChooser.defaultProps = {
  value: "",
  errorLabel: "This information is required.",
  labelText: "State",
  onChange: function onChange() {}
};

exports.default = StateChooser;