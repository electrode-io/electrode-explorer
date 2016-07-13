"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __incrId = 0;

// see: https://gecgithub01.walmart.com/react/zeus-components#methods
var customValidationMixin = function customValidationMixin() {
  return {
    setValue: function setValue(checked) {
      this.setState({
        checked: checked
      });
    },
    getValue: function getValue() {
      return this.state.checked;
    },
    clearValue: function clearValue() {
      var originalValue = typeof this.props.defaultChecked !== "undefined" ? this.props.defaultChecked : false;

      this.setState({
        checked: originalValue
      });
    },
    invalidate: function invalidate(message) {
      var state = {
        isValid: false,
        errorMessage: null
      };
      if (typeof message === "string") {
        state.errorMessage = message;
      }
      this.setState(state);
    },
    clearValidation: function clearValidation() {
      this.setState({
        isValid: true
      });
    },
    resetInput: function resetInput() {
      this.clearValidation();
      this.clearValue();
    }
  };
};

/**
A checkbox (or option).
@examples
```jsx
<Option
  checkboxName="demo">
  Click me
</Option>
```
@component Option
@import {Option}
@synonym checkbox
@playground
Option
```
<Option
  checkboxName="demo">
  Click me
</Option>
```
*/
exports.default = _react2.default.createClass({
  displayName: "Option",

  mixins: [customValidationMixin()],

  propTypes: {
    idName: _react2.default.PropTypes.string,
    /**
    Called when the check state changes
    */
    onCheckedChange: _react2.default.PropTypes.func,
    /**
    The name of the checkbox
    */
    checkboxName: _react2.default.PropTypes.string.isRequired,
    /**
    True if disabled
    */
    disabled: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
    /**
    True if the input defaults to checked.
    */
    defaultChecked: _react2.default.PropTypes.bool,
    /**
    The optional automation ID.
    */
    automationId: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool,
    /**
    The optional TeaLeaf ID.
    */
    tealeafId: _react2.default.PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      isValid: true,
      checked: this.props.defaultChecked ? this.props.defaultChecked : false,
      id: this.props.idName || "checkbox-" + __incrId++
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      automationId: "option",
      tealeafId: "option",
      idName: ""
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.defaultChecked
    });
  },
  _handleChange: function _handleChange(ev) {
    var _this = this;

    this.setState({
      checked: ev.target.checked
    }, function () {
      if (_this.props.onCheckedChange) {
        _this.props.onCheckedChange(_this.state.checked);
      }
    });
  },
  render: function render() {
    var marker = this.state.isValid ? null : _react2.default.createElement(_icon2.default.ValidationMarker, { error: this.state.errorMessage });

    var _props = this.props;
    var children = _props.children;
    var other = (0, _objectWithoutProperties3.default)(_props, ["children"]);


    if (this.props.disabled) {
      other["aria-disabled"] = true;
    }
    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("option", this.props.hidden ? "hide-content" : ""),
        "data-automation-id": this.props.automationId },
      _react2.default.createElement("input", (0, _extends3.default)({
        type: "checkbox",
        name: this.props.checkboxName,
        id: this.state.id,
        "data-tl-id": this.props.tealeafId,
        checked: this.state.checked,
        onChange: this._handleChange
      }, other)),
      _react2.default.createElement(
        "label",
        {
          htmlFor: this.state.id,
          className: this.state.isValid ? "" : "validation-error" },
        this.props.children,
        marker
      )
    );
  }
});