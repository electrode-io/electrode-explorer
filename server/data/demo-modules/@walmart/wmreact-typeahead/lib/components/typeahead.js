"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radonTypeahead = require("radon-typeahead");

var _radonTypeahead2 = _interopRequireDefault(_radonTypeahead);

var _fieldValidation = require("@walmart/wmreact-validation/lib/mixins/field-validation");

var _fieldValidation2 = _interopRequireDefault(_fieldValidation);

var _field = require("@walmart/wmreact-forms/lib/components/field");

var _field2 = _interopRequireDefault(_field);

var _typeaheadListItem = require("./typeahead-list-item");

var _typeaheadListItem2 = _interopRequireDefault(_typeaheadListItem);

var _fireDataEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-data-event");

var _fireDataEvent2 = _interopRequireDefault(_fireDataEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = _react2.default.createClass({
  displayName: "TypeaheadField",

  mixins: [(0, _fieldValidation2.default)(["typeaheadField"])],

  propTypes: {
    onSelectOption: _react2.default.PropTypes.func,
    onResetVal: _react2.default.PropTypes.func,
    onArrowNavigation: _react2.default.PropTypes.func,
    onChange: _react2.default.PropTypes.func,
    list: _react2.default.PropTypes.array,
    manualMode: _react2.default.PropTypes.bool,
    hidden: _react2.default.PropTypes.bool
  },

  contextTypes: {
    analytics: _react2.default.PropTypes.object
  },

  _onSelectOption: function _onSelectOption(value) {
    (0, _fireDataEvent2.default)(this, "onSelectOption", { value: value });

    this.refs.typeaheadField.clearValidation();
    this.refs.typeaheadField.setValue(value);

    if (this.props.onSelectOption) {
      this.props.onSelectOption(value);
    }
  },
  _onArrowNavigation: function _onArrowNavigation(value) {
    (0, _fireDataEvent2.default)(this, "onArrowNavigation", { value: value });

    this.refs.typeaheadField.clearValidation();
    this.refs.typeaheadField.setValue(value);

    if (this.props.onArrowNavigation) {
      this.props.onArrowNavigation(value);
    }
  },
  _onResetVal: function _onResetVal(value) {
    (0, _fireDataEvent2.default)(this, "onResetVal", { value: value });

    this.refs.typeaheadField.clearValidation();
    this.refs.typeaheadField.setValue(value);

    if (this.props.onResetVal) {
      this.props.onResetVal(value);
    }
  },
  render: function render() {
    var _props = this.props;
    var list = _props.list;
    var manualMode = _props.manualMode;
    var onChange = _props.onChange;
    var onSelectOption = _props.onSelectOption;
    var onArrowNavigation = _props.onArrowNavigation;
    var onResetVal = _props.onResetVal;

    var restOfProps = _objectWithoutProperties(_props, ["list", "manualMode", "onChange", "onSelectOption", "onArrowNavigation", "onResetVal"]);

    return _react2.default.createElement(
      "span",
      { className: this.props.hidden ? "hide-content" : "" },
      _react2.default.createElement(_radonTypeahead2.default, {
        list: this.props.list,
        manualMode: this.props.manualMode,
        onChange: this.props.onChange,
        onArrowNavigation: this._onArrowNavigation,
        onResetVal: this._onResetVal,
        onSelectOption: this._onSelectOption,
        mainStyle: {
          position: "relative"
        },
        listClassName: "tt-dropdown-menu",
        listStyle: {
          position: "absolute",
          top: "100%",
          left: 0,
          zIndex: 100,
          width: "auto",
          minWidth: "100%",
          margin: "0 0 0 2px",
          padding: "5px 0",
          display: "block"
        },
        listItemComponent: _react2.default.createElement(_typeaheadListItem2.default, null),
        inputComponent: _react2.default.createElement(_field2.default, _extends({
          autoComplete: "off",
          ref: "typeaheadField"
        }, restOfProps)) })
    );
  }
});