"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _option = require("./option");

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A simplified component that makes building a set of components easy.
@examples
```jsx
<Options
  choices={[{
    label: "one",
    checked: true
  }, {
    label: "two",
    checked: false
  }, {
    label: "three",
    checked: false
  }, {
    label: "four",
    checked: false
  }]}
  onChange={(checkedOptions, index) => {
    let checked = checkedOptions
      .filter((choice) => choice.checked)
      .map((choice) => choice.label);

    console.log(checked); // Check your console
    console.log('index changed:', index);
  }} />
```
@component Options
@import {Options}
@synonym checkbox
@playground
Options
```
<Options
  choices={[{
    label: "one",
    checked: true
  }, {
    label: "two",
    checked: false
  }, {
    label: "three",
    checked: false
  }, {
    label: "four",
    checked: false
  }]}
  onChange={(checkedOptions, index) => {
    let checked = checkedOptions
      .filter((choice) => choice.checked)
      .map((choice) => choice.label);

    console.log(checked); // Check your console
    console.log('index changed:', index);
  }} />
```
*/
var Options = _react2.default.createClass({
  displayName: "Options",

  propTypes: {
    /**
    The choices. Which is an array of `label` and `checked`
    */
    choices: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
      label: _react2.default.PropTypes.string,
      checked: _react2.default.PropTypes.bool
    })),
    /**
    Called when the radio selection changes
    */
    onChange: _react2.default.PropTypes.func,
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
      automationId: "options",
      tealeafId: "options",
      idName: ""
    };
  },
  getInitialState: function getInitialState() {
    return {
      choices: this.props.choices ? this.props.choices : []
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      choices: nextProps.choices
    });
  },
  _onCheckboxChange: function _onCheckboxChange(idx, isChecked) {
    var _this = this;

    var selection = this.state.choices[idx];
    var newChoices = this.state.choices.slice();
    newChoices[idx] = { label: selection.label, checked: isChecked };

    this.setState({ choices: newChoices }, function () {
      if (_this.props.onChange) {
        _this.props.onChange(_this.state.choices, idx);
      }
    });
  },
  getCheckedOptions: function getCheckedOptions() {
    return this.state.choices;
  },
  render: function render() {
    var _this2 = this;

    return _react2.default.createElement(
      "div",
      null,
      this.state.choices.map(function (choice, idx) {
        var onCheckboxChange = function onCheckboxChange(val) {
          return _this2._onCheckboxChange(idx, val);
        };
        var automationId = _this2.props.automationId + "-option-" + idx;
        var tealeafId = _this2.props.tealeafId + "-option-" + idx;
        return _react2.default.createElement(
          _option2.default,
          {
            automationId: automationId,
            tealeafId: tealeafId,
            checkboxName: choice.label,
            idName: choice.idName,
            defaultChecked: choice.checked,
            onCheckedChange: onCheckboxChange,
            key: idx },
          choice.label
        );
      })
    );
  }
});

exports.default = Options;