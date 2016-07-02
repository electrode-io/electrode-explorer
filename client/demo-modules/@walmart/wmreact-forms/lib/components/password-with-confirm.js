"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _field = require("./field");

var _field2 = _interopRequireDefault(_field);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: normally, we would use the fieldValidationMixin from
//       react-validation, but that assumes a single field,
//       so a custom implementation of that mixin's API is here.
//       see: https://gecgithub01.walmart.com/react/zeus-components#methods
var customFieldValidationMixin = function customFieldValidationMixin() {
  return {
    getValue: function getValue() {
      return this.refs.password1.getValue();
    },
    setValue: function setValue(val) {
      this.refs.password1.setValue(val);
      this.refs.password2.setValue(val);
    },
    clearValue: function clearValue() {
      this.refs.password1.clearValue();
      this.refs.password2.clearValue();
    },
    isValid: function isValid() {
      return this.refs.password1.isValid() && this.refs.password2.isValid() && this.passwordsMatch();
    },
    passwordsMatch: function passwordsMatch() {
      return this.refs.password1.getValue() === this.refs.password2.getValue();
    },
    validate: function validate(isFormValidate) {
      var result = this.refs.password1.validate(isFormValidate) && this.refs.password2.validate(isFormValidate);

      if (!this.passwordsMatch()) {
        result = false;
        this._setInvalidBecauseOfPasswordMismatch();
      }
      return result;
    },
    invalidate: function invalidate(message) {
      // Using the second field to show the error.
      this.refs.password1.invalidate();
      this.refs.password2.invalidate(message);
    },
    _setInvalidBecauseOfPasswordMismatch: function _setInvalidBecauseOfPasswordMismatch() {
      this.setState({
        isValid: false
      });
    },
    clearValidation: function clearValidation() {
      this.refs.password1.clearValidation();
      this.refs.password2.clearValidation();
      this.setState({
        isValid: true
      });
    },
    resetInput: function resetInput() {
      this.refs.password1.resetInput();
      this.refs.password2.resetInput();
    }
  };
};

/**
Password with confirm field.
@examples
```jsx
<PasswordWithConfirmation />
```
@component PasswordWithConfirmation
@import {PasswordWithConfirmation}
@mixin fieldValidationMixin
@playground
```
<PasswordWithConfirmation />
```
*/

// This "field" is a dual field password intented for account creation scenarios.
// Forms that use this field can treat it as a single field.

exports.default = _react2.default.createClass({
  displayName: "passwordWithConfirmField",
  mixins: [customFieldValidationMixin()],

  propTypes: {
    /**
    The number of columns
    */
    cols: _react2.default.PropTypes.number,
    /**
    True if we should use the confirm label
    */
    useConfirmLabel: _react2.default.PropTypes.bool,
    /**
    True if we should use the password label
    */
    usePasswordLabel: _react2.default.PropTypes.bool,
    /**
    True if we should use the password place holder
    */
    usePasswordPlaceHolder: _react2.default.PropTypes.bool,
    /**
    True if we should use the confirm place holder
    */
    useConfirmPlaceHolder: _react2.default.PropTypes.bool,
    /**
    Called back when the value changes
    */
    onChange: _react2.default.PropTypes.func,
    /**
    True if the component is hidden
    */
    hidden: _react2.default.PropTypes.bool,
    /**
    The optional automation ID
    */
    automationId: _react2.default.PropTypes.string,
    /**
    The optional TeaLeaf ID
    */
    tealeafId: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      cols: 2,
      useConfirmLabel: true,
      usePasswordLabel: true,
      useConfirmPlaceHolder: false,
      usePasswordPlaceHolder: false,
      automationId: "password",
      tealeafId: "password"
    };
  },
  getInitialState: function getInitialState() {
    return {
      isValid: true
    };
  },
  _checkIfCurrentPasswordMatchesOther: function _checkIfCurrentPasswordMatchesOther(passwordRefCurrent, passwordRefOther) {
    var current = passwordRefCurrent;
    var other = passwordRefOther;
    var otherVal = other.getValue();
    if (otherVal.length) {
      if (this.passwordsMatch()) {
        var valid = current.validate();
        if (valid) {
          this.clearValidation();
        }
      } else {
        this._setInvalidBecauseOfPasswordMismatch();
      }
    }
  },
  _onChange1: function _onChange1() {
    this._checkIfCurrentPasswordMatchesOther(this.refs.password1, this.refs.password2);
    if (this.props.onChange) {
      this.props.onChange.apply(this, arguments);
    }
  },
  _onChange2: function _onChange2() {
    this._checkIfCurrentPasswordMatchesOther(this.refs.password2, this.refs.password1);
    if (this.props.onChange) {
      this.props.onChange.apply(this, arguments);
    }
  },
  render: function render() {
    var _props = this.props;
    var onChange = _props.onChange;
    var automationId = _props.automationId;
    var props = (0, _objectWithoutProperties3.default)(_props, ["onChange", "automationId"]);
    // NOTE: below, automationId appears *after* props because we need to override the
    // id locally -- we'd otherwise end up with two fields with the same automationId.

    var pwAutomationId = this.props.automationId + "-entry";
    var confirmAutomationId = this.props.automationId + "-confirm";
    var pwTeaLeafId = this.props.tealeafId + "-entry";
    var confirmTeaLeafId = this.props.tealeafId + "-confirm";
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _layout2.default,
        { small: this.props.cols, padded: true, hidden: !!this.props.hidden },
        _react2.default.createElement(_field2.default, (0, _extends3.default)({
          ref: "password1",
          inputName: "password1",
          labelText: this.props.usePasswordLabel ? "Password" : "",
          placeholderText: this.props.usePasswordPlaceHolder ? "Password" : "",
          inputType: "password",
          validationType: "password",
          onChange: this._onChange1
        }, props, {
          automationId: pwAutomationId || "",
          tealeafId: pwTeaLeafId || "" })),
        _react2.default.createElement(_field2.default, (0, _extends3.default)({
          ref: "password2",
          inputName: "password2",
          labelText: this.props.useConfirmLabel ? "Re-enter password" : "",
          placeholderText: this.props.useConfirmPlaceHolder ? "Re-enter password" : "",
          inputType: "password",
          validationType: "password",
          onChange: this._onChange2
        }, props, {
          automationId: confirmAutomationId,
          tealeafId: confirmTeaLeafId }))
      ),
      this.state.isValid ? null : _react2.default.createElement(
        "p",
        { className: "error-label" },
        "passwords need to match"
      )
    );
  }
});