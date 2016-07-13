"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cloneElement = _react2.default.cloneElement;

/**
A radio group compnent.
@examples
```jsx
<Radio.Group name="test">
  <Radio.Button group="demo">
    Radio 1
  </Radio.Button>
  <Radio.Button group="demo">
    Radio 2
  </Radio.Button>
</Radio.Group>
```
@component Radio.Group
@import {Radio}
@playground
Radio.Group
```
<Radio.Group name="test">
  <Radio.Button group="demo">
    Radio 1
  </Radio.Button>
  <Radio.Button group="demo">
    Radio 2
  </Radio.Button>
</Radio.Group>
```
*/

/* eslint react/no-did-mount-set-state: 0, no-unused-vars: 0 */
exports.default = _react2.default.createClass({
  displayName: "radio-group",


  propTypes: {
    name: _react2.default.PropTypes.string.isRequired,
    onChange: _react2.default.PropTypes.func,
    selected: _react2.default.PropTypes.number,
    children: _react2.default.PropTypes.node,
    automationId: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool,
    tealeafId: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onChange: function onChange(index) {},

      automationId: "radio-group",
      tealeafId: "radio-group"
    };
  },
  getInitialState: function getInitialState() {
    return {
      selected: null
    };
  },
  componentDidMount: function componentDidMount() {
    if (this.state.selected === null) {
      this.setState({ selected: this.props.selected });
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== undefined) {
      this.setState({
        selected: nextProps.selected
      });
    }
  },
  _onClick: function _onClick(index) {
    this.setState({ selected: index });
    if (this.props.onChange) {
      this.props.onChange(index);
    }
  },
  renderRadio: function renderRadio(child, index) {
    var automationId = this.props.automationId + "-option-" + index;
    var tealeafId = this.props.tealeafId + "-option-" + index;

    return cloneElement(child, {
      automationId: automationId,
      tealeafId: tealeafId,
      group: this.props.name,
      onClick: this._onClick.bind(this, index, null),
      checked: this.state.selected === index,
      key: index
    });
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: this.props.hidden ? "hide-content" : "" },
      _react2.default.Children.map(this.props.children, this.renderRadio)
    );
  }
});