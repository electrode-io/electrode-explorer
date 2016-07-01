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

var _field = require("@walmart/wmreact-stateless-fields/lib/components/field");

var _field2 = _interopRequireDefault(_field);

var _floatingField = require("@walmart/wmreact-stateless-fields/lib/components/floating-field");

var _floatingField2 = _interopRequireDefault(_floatingField);

var _validators = require("@walmart/wmreact-validation/lib/validators");

var _validators2 = _interopRequireDefault(_validators);

var _isString = require("lodash/isString");

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidatedField = function (_React$Component) {
  (0, _inherits3.default)(ValidatedField, _React$Component);

  function ValidatedField(props) {
    (0, _classCallCheck3.default)(this, ValidatedField);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = (0, _extends3.default)({
      touched: !!props.value
    }, _this._error(props));
    return _this;
  }

  ValidatedField.prototype._error = function _error(_ref) {
    var isRequiredField = _ref.isRequiredField;
    var validationType = _ref.validationType;
    var value = _ref.value;
    var validationParams = _ref.validationParams;

    var validator = (0, _isString2.default)(validationType) ? _validators2.default[validationType] : validationType;
    if (!value) {
      return isRequiredField ? {
        error: "This information is required."
      } : { error: null };
    }

    if (!validator) {
      return { error: null };
    }
    return validator.validate(value, validationParams) ? { error: null } : {
      error: this.props.errorLabel || validator.message
    };
  };

  ValidatedField.prototype.validate = function validate() {
    this.setState({
      touched: true
    });
    return !this.state.error;
  };

  ValidatedField.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    this.setState(this._error(newProps));
  };

  ValidatedField.prototype.clearValidation = function clearValidation() {
    this.setState({ touched: false });
  };

  ValidatedField.prototype._onBlur = function _onBlur(ev) {
    if (this.props.value) {
      this.setState({
        touched: true
      });
    }
    this.props.onBlur(ev);
  };

  ValidatedField.prototype.render = function render() {
    var _this2 = this;

    var Component = this.props.floating ? _floatingField2.default : _field2.default;
    return _react2.default.createElement(Component, (0, _extends3.default)({
      touched: this.state.touched,
      error: this.state.error
    }, this.props, {
      onBlur: function onBlur(ev) {
        return _this2._onBlur(ev);
      }
    }));
  };

  return ValidatedField;
}(_react2.default.Component);

exports.default = ValidatedField;

ValidatedField.propTypes = {
  errorLabel: _react2.default.PropTypes.string,
  onBlur: _react2.default.PropTypes.func,
  isRequiredField: _react2.default.PropTypes.bool,
  validationType: _react2.default.PropTypes.string,
  validationParams: _react2.default.PropTypes.any,
  floating: _react2.default.PropTypes.bool,
  value: _react2.default.PropTypes.string
};
ValidatedField.defaultProps = {
  isRequiredField: true,
  onBlur: function onBlur() {}
};