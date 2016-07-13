"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/no-did-mount-set-state: 0 */


var __incrId = 0;

/**
A radio compnent.
@examples
```jsx
<Radio.Button group="demo">
  Radio 1
</Radio.Button>
```
@component Radio.Button
@import {Radio}
*/
exports.default = _react2.default.createClass({
  displayName: "Radio",
  mixins: [_react2.default.PureRenderMixin],

  propTypes: {
    /**
    True if this is in alt style
    */
    alt: _react2.default.PropTypes.bool,
    /**
    The id of the control
    */
    id: _react2.default.PropTypes.string,
    /**
    The group name
    */
    group: _react2.default.PropTypes.string.isRequired,
    /**
    The change callback
    */
    onChange: _react2.default.PropTypes.func,
    /**
    The click handler
    */
    onClick: _react2.default.PropTypes.func,
    /**
    True if the input is checked
    */
    checked: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
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
      alt: false,
      id: "",
      onChange: function onChange() {},
      onClick: function onClick() {
        var isChecked = !this.props.checked;
        this.setState({
          checked: isChecked
        });
      },

      checked: false,
      automationId: "radio-button",
      tealeafId: "radio-button"
    };
  },
  getInitialState: function getInitialState() {
    return {
      checked: this.props.checked || false,
      id: "radio-" + __incrId++
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== undefined) {
      this.setState({
        checked: nextProps.checked
      });
    }
  },
  render: function render() {
    var extras = {
      "radio-alt": this.props.alt
    };
    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("radio", extras, this.props.hidden ? "hide-content" : ""),
        "data-automation-id": this.props.automationId,
        "data-tl-id": this.props.tealeafId },
      _react2.default.createElement("input", {
        type: "radio",
        name: this.props.group,
        id: this.state.id,
        onChange: this.props.onChange,
        onClick: this.props.onClick,
        checked: this.state.checked }),
      _react2.default.createElement(
        "label",
        { htmlFor: this.state.id },
        this.props.children
      )
    );
  }
});