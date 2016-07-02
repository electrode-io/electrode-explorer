"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _masker = require("../masker");

var _masker2 = _interopRequireDefault(_masker);

var _validators = require("../validators");

var _validators2 = _interopRequireDefault(_validators);

var _maskMap = require("../maps/mask-map");

var _maskMap2 = _interopRequireDefault(_maskMap);

var _cloneDeep = require("lodash/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _fireDataEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-data-event");

var _fireDataEvent2 = _interopRequireDefault(_fireDataEvent);

var _fireUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-ui-event");

var _fireUiEvent2 = _interopRequireDefault(_fireUiEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global setTimeout */
/* eslint-disable no-invalid-this */


module.exports = _react2.default.createClass({
  displayName: "Input",
  propTypes: {
    inputName: _react2.default.PropTypes.string.isRequired,
    validationType: function validationType(props, propName) {
      // If it's not a function and not a string that corresponds to a validator, it's not valid
      if (typeof props[propName] !== "function" && typeof _validators2.default[props[propName]] === "undefined") {
        return new Error("validationType must be a function or a validator name");
      }
    },

    validationParams: _react2.default.PropTypes.any,
    isRequiredField: _react2.default.PropTypes.bool,
    errorLabel: _react2.default.PropTypes.string,
    defaultValue: _react2.default.PropTypes.string,
    placeholderText: _react2.default.PropTypes.string,
    inputType: _react2.default.PropTypes.string,
    mask: _react2.default.PropTypes.string,
    isDisabled: _react2.default.PropTypes.bool,
    isLocked: _react2.default.PropTypes.bool,
    lockedClassName: _react2.default.PropTypes.string,
    isMini: _react2.default.PropTypes.bool,
    showPlaceholder: _react2.default.PropTypes.bool,
    automationId: _react2.default.PropTypes.string,
    tealeafId: _react2.default.PropTypes.string,
    className: _react2.default.PropTypes.string,
    onChange: _react2.default.PropTypes.func,
    onBlur: _react2.default.PropTypes.func,
    onFocus: _react2.default.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      inputName: "",
      validationType: "legaltext",
      isRequiredField: true,
      errorLabel: "",
      defaultValue: "",
      placeholderText: "",
      inputType: "text",
      isDisabled: false,
      isLocked: false,
      lockedClassName: "",
      isMini: false,
      showPlaceholder: false,
      automationId: undefined,
      tealeafId: undefined
    };
  },

  contextTypes: {
    analytics: _react2.default.PropTypes.object
  },
  cleanState: function cleanState() {
    if (this.props.isLocked) {
      return {
        hasBlurred: false,
        val: this.props.defaultValue,
        isValid: true,
        errorMessage: ""
      };
    }

    var val = this.props.defaultValue || "";

    if ((val || !this.props.showPlaceholder) && this.props.mask) {
      var el = {
        value: val,
        selectionStart: 0
      };

      var mask = (0, _masker2.default)(el, {
        pattern: this.getMask()
      });

      val = mask.value;
    }

    return {
      hasBlurred: false,
      val: val,
      isValid: true,
      errorMessage: ""
    };
  },
  getInitialState: function getInitialState() {
    return this.cleanState();
  },
  isValid: function isValid() {
    return this.state.isValid;
  },
  getValue: function getValue() {
    return this.state.val;
  },
  setValue: function setValue(newVal, shouldMask) {
    (0, _fireDataEvent2.default)(this, "setValue", {
      value: newVal,
      shouldMask: shouldMask
    });
    if (shouldMask && this.props.mask) {
      var el = {
        value: newVal,
        selectionStart: 0
      };
      var mask = (0, _masker2.default)(el, {
        pattern: this.getMask()
      });

      newVal = mask.value;
    }

    this.setState({
      val: newVal
    });
  },
  clearValue: function clearValue() {
    (0, _fireDataEvent2.default)(this, "clearValue", {});
    var mask = void 0;

    if (this.props.mask) {
      var el = {
        value: "",
        selectionStart: 0
      };
      mask = (0, _masker2.default)(el, {
        pattern: this.getMask()
      });
    }

    this.setState({
      val: mask ? mask.value : ""
    });
  },
  getMask: function getMask() {
    if (_maskMap2.default[this.props.mask]) {
      return _maskMap2.default[this.props.mask];
    } else {
      return this.props.mask;
    }
  },
  onFocus: function onFocus(ev) {
    var _this = this;

    (0, _fireUiEvent2.default)(this, ev);
    if (this.props.onFocus) {
      this.props.onFocus(ev);
    }

    if (this.props.mask) {
      (function () {
        var mask = (0, _masker2.default)(_this.refs.input, {
          pattern: _this.getMask()
        });

        // if we were skipping the mask to show the placeholder, now apply it
        if (mask.count === 0 && _this.props.showPlaceholder) {
          _this.onChange();
        }

        var self = _this;
        setTimeout(function () {
          self.refs.input.setSelectionRange(mask.cursor.start, mask.cursor.end);
        }, 0);
      })();
    }
  },

  /* eslint-disable max-statements */
  validate: function validate() {
    var validation = {};
    var isValid = true;
    var errorLabel = this.props.errorLabel;
    var validationParams = this.props.validationParams;

    // If not required (and is still empty) and form called validate, return true
    if (!this.props.isRequiredField && this.state.val === "") {
      return isValid;
    }

    // If the field has been locked return true
    if (this.props.isLocked) {
      return isValid;
    }

    var mask = {};
    if (this.props.mask) {
      mask = (0, _masker2.default)(this.refs.input, {
        pattern: this.getMask()
      });
    }

    // If required and empty, show required message and is not valid
    if (this.props.isRequiredField && (this.props.mask ? mask.count === 0 : this.state.val === "")) {
      validation = _validators2.default.required;
      isValid = false;
      // If not required validate from a string or a function, see propTypes
    } else if (typeof this.props.validationType === "string") {
        var _validation;

        // If the params are not already in an array put them in one for spread syntax
        if (!Array.isArray(this.props.validationParams)) {
          validationParams = [this.props.validationParams];
        }

        validation = _validators2.default[this.props.validationType];
        isValid = (_validation = validation).validate.apply(_validation, [this.state.val].concat(validationParams));

        if (errorLabel) {
          validation.message = errorLabel;
        }
      } else {
        isValid = this.props.validationType(this.state.val);

        if (errorLabel) {
          validation.message = errorLabel;
        }
      }

    this.setState({
      hasBlurred: true,
      isValid: isValid,
      errorMessage: validation.message
    });

    if (!isValid) {
      (0, _fireDataEvent2.default)(this, "validate-fail", { errorMessage: validation.message });
    }

    return isValid;
  },

  /* eslint-enable max-statements */
  // Used for server error invalidation
  invalidate: function invalidate(message) {
    (0, _fireDataEvent2.default)(this, "invalidate", { message: message });

    // Reset hasBlurred so that typing doesn't immediately clear server message
    var state = {
      isValid: false,
      hasBlurred: false
    };

    if (message) {
      state.errorMessage = message;
    }

    this.setState(state);
  },
  clearValidation: function clearValidation() {
    (0, _fireDataEvent2.default)(this, "clearValidation", {});
    this.setState({
      isValid: true,
      hasBlurred: false
    });
  },
  resetInput: function resetInput() {
    (0, _fireDataEvent2.default)(this, "resetInput", {});
    this.clearValidation();
    this.clearValue();
  },
  onBlur: function onBlur(ev) {
    (0, _fireUiEvent2.default)(this, ev);

    if (this.props.mask) {
      var mask = (0, _masker2.default)(this.refs.input, {
        pattern: this.getMask()
      });
      if (mask.count === 0) {
        this.setState({ val: "" }, this.validate.bind(this, false));
        return;
      }
    }

    if (this.props.onBlur) {
      this.props.onBlur(ev);
    }

    if (!this.state.hasBlurred) {
      this.setState({
        hasBlurred: true
      }, this.validate.bind(this, false));
    } else {
      this.validate();
    }
  },
  onChange: function onChange(ev) {
    var _this2 = this;

    if (ev !== undefined) {
      (0, _fireUiEvent2.default)(this, ev);
    } else {
      (0, _fireDataEvent2.default)(this, "onChange", {});
    }

    // ev references dissapear after setState
    // so we cache the whole object to pass to setState callback
    var cachedEv = (0, _cloneDeep2.default)(ev);

    if (this.props.mask) {
      (function () {

        var mask = (0, _masker2.default)(_this2.refs.input, {
          pattern: _this2.getMask()
        });

        _this2.setState({
          val: mask.value
        }, function () {
          if (_this2.props.onChange) {
            _this2.props.onChange(cachedEv);
          }
          _this2.refs.input.setSelectionRange(mask.cursor.start, mask.cursor.end);

          if (!_this2.state.hasBlurred) {
            return;
          }

          _this2.validate();
        });
      })();
    } else {

      this.setState({
        val: ev.target.value
      }, function () {
        if (this.props.onChange) {
          this.props.onChange(cachedEv);
        }
        if (!this.state.hasBlurred) {
          return;
        }

        this.validate();
      });
    }
  },
  render: function render() {
    if (this.props.isLocked) {
      return _react2.default.createElement(
        "div",
        { className: "validation-group" },
        _react2.default.createElement(
          "span",
          {
            "data-automation-id": this.props.automationId,
            "data-tl-id": this.props.tealeafId,
            className: this.props.lockedClassName
          },
          this.state.val
        )
      );
    }

    return _react2.default.createElement(
      "div",
      { className: "validation-group" },
      _react2.default.createElement("input", (0, _extends3.default)({}, this.props, {
        ref: "input",
        name: this.props.inputName,
        className: (0, _classnames2.default)(this.props.className, "form-control", {
          "form-control-mini": this.props.isMini,
          "error": !this.state.isValid
        }),
        "data-automation-id": this.props.automationId,
        "data-tl-id": this.props.tealeafId,
        type: this.props.inputType,
        disabled: this.props.isDisabled ? "disabled" : "",
        value: this.state.val,
        placeholder: this.props.placeholderText,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onFocus: this.onFocus })),
      this.state.isValid ? "" : _react2.default.createElement(
        "i",
        { className: "validation-marker validation-marker-error" },
        _react2.default.createElement(
          "span",
          { className: "visuallyhidden" },
          "Help"
        )
      ),
      this.state.isValid ? "" : _react2.default.createElement(
        "p",
        { className: "error-label" },
        this.state.errorMessage
      )
    );
  }
});

// JSX gets compiled to lib