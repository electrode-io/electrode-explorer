"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radonSelect = require("radon-select");

var _radonSelect2 = _interopRequireDefault(_radonSelect);

var _fireDataEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-data-event");

var _fireDataEvent2 = _interopRequireDefault(_fireDataEvent);

var _chooserOption = require("./chooser-option");

var _chooserOption2 = _interopRequireDefault(_chooserOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
Chooser component, this component is a shim or proxy component around `RadonSelect`
@examples
Here is a simple example:

```jsx
<Chooser
  placeholderText="Select an option">
  <Chooser.Option value="Demo1">Demo 1</Chooser.Option>
  <Chooser.Option value="Demo2">Demo 2</Chooser.Option>
</Chooser>
```
@import Chooser
@component Chooser
@synonym dropdown
@synonym drop-down
@synonym select
@playground
Chooser
```
<div>
  <h4>Simple chooser</h4>
  <Chooser chooserName="chooser1"
    placeholderText="Select an option">
    <Chooser.Option value="Demo1">Demo 1</Chooser.Option>
    <Chooser.Option value="Demo2">Demo 2</Chooser.Option>
  </Chooser>
  <h4>Chooser with React element as children</h4>
  <Chooser chooserName="chooser2"
    placeholderText="Select an option">
    <Chooser.Option value="Demo1"><h1 style={{margin:"0px"}}>Demo1</h1></Chooser.Option>
    <Chooser.Option value="Demo2"><h1 style={{margin:"0px"}}>Demo 2</h1></Chooser.Option>
  </Chooser>
</div>
```
*/
var Chooser = _react2.default.createClass({
  displayName: "Chooser",

  propTypes: {
    children: function children(props, propName) {
      if (!props[propName] || !Array.isArray(props[propName])) {
        return new Error("children must be an array of Chooser.Option");
      }

      for (var child in props[propName]) {
        if (!props[propName][child] || props[propName][child].type.displayName !== "Chooser.Option") {
          return new Error("children must be an array of Chooser.Option");
        }
      }
    },

    /**
    Name of the chooser
    */
    chooserName: _react2.default.PropTypes.string.isRequired,
    /**
    The default value
    */
    defaultValue: _react2.default.PropTypes.string,
    /**
    The text that shows up when no items are selected.
    */
    placeholderText: _react2.default.PropTypes.string,
    /**
    Passed though to RadonSelect, time in MS before the typeahead appears. Default 1000
    */
    typeaheadDelay: _react2.default.PropTypes.number,
    /**
    Style property, adds chooser-fixed-width class to component.
    */
    fixedWidth: _react2.default.PropTypes.string,
    /**
    Style property, adds chooser-alt class to component.
    */
    isAlt: _react2.default.PropTypes.bool,
    /**
    Style property, adds chooser-block class to component.
    */
    isBlock: _react2.default.PropTypes.bool,
    /**
    Style property, adds chooser-rounded class to component.
    */
    isRounded: _react2.default.PropTypes.bool,
    /**
    Style property, adds chooser-rounded and chooser-rounded-mini class to component.
    */
    isMini: _react2.default.PropTypes.bool,
    /**
    Whether or not the component is enabled.
    */
    disabled: _react2.default.PropTypes.bool,
    /**
    Called on a change.
    */
    onChange: _react2.default.PropTypes.func,
    /**
    Called on focus.
    */
    onBlur: _react2.default.PropTypes.func,
    className: _react2.default.PropTypes.string,
    /**
    An automation ID for magellan
    */
    automationId: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool,
    /**
    An ID for TeaLeaf
    */
    tealeafId: _react2.default.PropTypes.string
  },

  contextTypes: {
    analytics: _react2.default.PropTypes.object
  },

  getValue: function getValue() {
    return this.refs.radonSelect.getValue();
  },
  setValue: function setValue(val) {
    this.refs.radonSelect.setValue(val);
  },
  _onChange: function _onChange(value) {
    (0, _fireDataEvent2.default)(this, "onChange", { value: value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  },
  _onBlur: function _onBlur() {
    (0, _fireDataEvent2.default)(this, "onBlur", {});
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  },


  /* eslint max-statements:0 */
  render: function render() {
    var chooserStyle = {};
    var currentOptionStyle = {
      border: "1px solid #c2cfd6",
      height: "30px"
    };
    // borderRadius: any
    var chooserClassNames = [this.props.className, "chooser"];

    if (this.props.fixedWidth) {
      chooserClassNames.push("chooser-fixed-width");
      chooserStyle.width = this.props.fixedWidth;
    }

    if (this.props.isAlt) {
      chooserClassNames.push("chooser-alt");
    }

    if (this.props.isBlock) {
      chooserClassNames.push("chooser-block");
    }

    if (this.props.isRounded) {
      currentOptionStyle.height = "38px";
      currentOptionStyle.borderRadius = "4px";
      chooserClassNames.push("chooser-rounded");
    }

    if (this.props.isMini) {
      chooserClassNames.push("chooser-rounded chooser-rounded-mini");
      currentOptionStyle.height = "26px";
      currentOptionStyle.borderRadius = "4px";
    }

    var _props = this.props;
    var onChange = _props.onChange;
    var onBlur = _props.onBlur;
    var automationId = _props.automationId;
    var tealeafId = _props.tealeafId;

    var otherProps = _objectWithoutProperties(_props, ["onChange", "onBlur", "automationId", "tealeafId"]);

    return _react2.default.createElement(
      "span",
      { className: this.hidden ? "hide-content" : "",
        "data-automation-id": automationId,
        "data-tl-id": tealeafId },
      _react2.default.createElement(
        _radonSelect2.default,
        _extends({}, otherProps, {
          onChange: this._onChange,
          onBlur: this._onBlur,
          ref: "radonSelect",
          className: chooserClassNames.join(" "),
          openClassName: "active",
          focusClassName: "focused",
          disabledClassName: "disabled",
          listClassName: "chooser-option-list rendered",
          currentOptionClassName: "chooser-option-current",
          hiddenSelectClassName: "visuallyhidden",
          style: chooserStyle,
          currentOptionStyle: currentOptionStyle,
          selectName: this.props.chooserName + "_select"
        }),
        this.props.children
      )
    );
  }
});

Chooser.Option = _chooserOption2.default;

exports.default = Chooser;