"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _states = require("../../static/states");

var _states2 = _interopRequireDefault(_states);

var _wmreactChooser = require("@walmart/wmreact-chooser");

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "StateChooser",

  propTypes: {
    chooserName: _react2.default.PropTypes.string.isRequired,
    defaultValue: _react2.default.PropTypes.oneOf(_states2.default.map(function (state) {
      return state.code;
    })),
    showLabel: _react2.default.PropTypes.bool,
    isRequiredField: _react2.default.PropTypes.bool,
    labelText: _react2.default.PropTypes.string,
    placeholderText: _react2.default.PropTypes.string,
    instructionText: _react2.default.PropTypes.string,
    isDisabled: _react2.default.PropTypes.bool,
    automationId: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool
  },

  contextTypes: {
    analytics: _react2.default.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      showLabel: true,
      isRequiredField: false,
      placeholderText: "Select",
      isDisabled: false,
      labelText: "State"
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.defaultValue || "",
      errorMessage: "",
      invalidated: false
    };
  },
  validated: function validated() {
    this.setState({
      errorMessage: "",
      invalidated: false
    });
  },
  invalidate: function invalidate() {
    this.setState({
      errorMessage: "This information is required.",
      invalidated: true
    });
  },
  validate: function validate() {
    var isValid = this.state.value && this.state.value !== "SELECT" || !this.props.isRequiredField;

    if (isValid) {
      this.validated();
    } else {
      this.invalidate();
    }

    return isValid;
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(state) {
    (0, _wmreactAnalytics.fireDataEvent)(this, "setValue", { state: state });
    this.setState({
      value: state
    }, this.validate);
  },
  renderErrorMessage: function renderErrorMessage() {
    return this.state.errorMessage ? _react2.default.createElement(
      "div",
      null,
      " ",
      _react2.default.createElement(
        "p",
        { className: "invalid-text" },
        " ",
        this.state.errorMessage,
        " "
      ),
      " "
    ) : null;
  },
  _getDefaultText: function _getDefaultText() {
    return this.props.showLabel && this.props.instructionText ? _react2.default.createElement(
      "span",
      { className: "form-label-instructional" },
      " " + this.props.instructionText
    ) : "";
  },
  renderStateOptions: function renderStateOptions() {
    var initialOpt = [_react2.default.createElement(
      _wmreactChooser.Chooser.Option,
      {
        key: "SELECT",
        value: "SELECT",
        "data-automation-id": "state-chooser-option-select"
      },
      this.props.placeholderText
    )];

    var stateOpts = _states2.default.map(function (state, index) {
      return _react2.default.createElement(
        _wmreactChooser.Chooser.Option,
        {
          key: index,
          value: state.code,
          "data-automation-id": "select-option-" + index },
        state.name
      );
    });

    return initialOpt.concat(stateOpts);
  },
  render: function render() {
    var base = {
      "disabled": this.props.isDisabled,
      "state-chooser-wrapper": true,
      "form-label": true
    };
    var chooser = {
      "empty": !this.getValue(),
      "placeholder": !this.getValue() || this.getValue() === "SELECT",
      "disabled": this.props.isDisabled,
      "invalid-border": this.state.invalidated
    };
    var errorMessage = this.renderErrorMessage();
    var stateOptions = this.renderStateOptions();

    return _react2.default.createElement(
      "label",
      {
        className: (0, _classnames2.default)(base, this.props.hidden ? "hide-content" : ""),
        "data-automation-id": this.props.automationId
      },
      this.props.showLabel ? this.props.labelText : "",
      this._getDefaultText(),
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _wmreactChooser.Chooser,
          _extends({}, this.props, {
            onBlur: this.validate,
            onChange: this.setValue,
            className: (0, _classnames2.default)(chooser),
            isRequiredField: this.props.isRequiredField
          }),
          stateOptions
        )
      ),
      errorMessage
    );
  }
});