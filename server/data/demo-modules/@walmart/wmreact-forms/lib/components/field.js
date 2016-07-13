"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _input = require("@walmart/wmreact-validation/lib/components/input");

var _input2 = _interopRequireDefault(_input);

var _fieldValidation = require("@walmart/wmreact-validation/lib/mixins/field-validation");

var _fieldValidation2 = _interopRequireDefault(_fieldValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A generic field.
@component Field
@import {Field}
*/
exports.default = _react2.default.createClass({
  displayName: "FormField",

  mixins: [(0, _fieldValidation2.default)("input")],

  propTypes: {
    /**
    The field label
    */
    labelText: _react2.default.PropTypes.node,
    /**
    The instruction text
    */
    instructionText: _react2.default.PropTypes.string,
    /**
    True if the field is disabled
    */
    isDisabled: _react2.default.PropTypes.bool,
    /**
    True if we should show the label
    */
    showLabel: _react2.default.PropTypes.bool,
    /**
    The optional automation ID
    */
    automationId: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool,
    /**
    The optional TeaLeaf ID
    */
    tealeafId: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      labelText: "",
      instructionText: "",
      isDisabled: false,
      showLabel: true,
      automationId: "field",
      tealeafId: "field"
    };
  },
  _getDefaultText: function _getDefaultText() {
    return this.props.showLabel && this.props.instructionText ? _react2.default.createElement(
      "span",
      { className: "form-label-instructional" },
      " " + this.props.instructionText
    ) : "";
  },
  _getLabelText: function _getLabelText() {
    return this.props.showLabel && this.props.labelText ? _react2.default.createElement(
      "span",
      { className: "form-label-text" },
      this.props.labelText
    ) : "";
  },
  render: function render() {
    var extras = {
      "disabled": this.props.isDisabled
    };

    return _react2.default.createElement(
      "label",
      { className: (0, _classnames2.default)("form-label", extras, this.props.hidden ? "hide-content" : "") },
      this._getLabelText(),
      this._getDefaultText(),
      _react2.default.createElement(_input2.default, (0, _extends3.default)({}, this.props, { ref: "input" }))
    );
  }
});