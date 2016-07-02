"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radioGroup = require("./radio-group");

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _radioButton = require("./radio-button");

var _radioButton2 = _interopRequireDefault(_radioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A simplified radio group.
@examples
```jsx
<Radio.Simple group="foo"
  values={["1", "2", "3"]}
  selected="1" />
```
@component Radio.Simple
@import {Radio}
*/
var RadioSimple = _react2.default.createClass({
  displayName: "RadioSimple",

  propTypes: {
    /**
    The values for the check boxes
    */
    values: _react2.default.PropTypes.array.isRequired,
    /**
    The group name
    */
    group: _react2.default.PropTypes.string.isRequired,
    /**
    The currently selected value
    */
    selected: _react2.default.PropTypes.string,
    /**
    True if we should use the alt presentation
    */
    alt: _react2.default.PropTypes.bool,
    hidden: _react2.default.PropTypes.bool
  },

  getInitialState: function getInitialState() {
    return {
      selected: ""
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== undefined) {
      this.setState({
        selected: nextProps.selected
      });
    }
  },
  _onChange: function _onChange(index) {
    this.setState({
      selected: this.props.values[index]
    });
  },
  render: function render() {
    var self = this;

    var selectedIndex = 0;
    this.props.values.forEach(function (val, index) {
      if (val === self.state.selected) {
        selectedIndex = index;
      }
    });

    return _react2.default.createElement(
      "span",
      { className: this.props.hidden ? "hide-content" : "" },
      _react2.default.createElement(
        _radioGroup2.default,
        {
          name: this.props.group,
          selected: selectedIndex,
          onChange: this._onChange },
        this.props.values.map(function (val) {
          return _react2.default.createElement(
            _radioButton2.default,
            {
              alt: self.props.alt ? self.props.alt : false,
              group: self.props.group,
              key: val
            },
            val
          );
        })
      )
    );
  }
});
/* eslint react/no-did-mount-set-state: 0 */


exports.default = {
  Button: _radioButton2.default,
  Group: _radioGroup2.default,
  Simple: RadioSimple
};