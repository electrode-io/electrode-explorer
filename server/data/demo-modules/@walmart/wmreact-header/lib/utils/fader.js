"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTweenState = require("react-tween-state");

var _reactTweenState2 = _interopRequireDefault(_reactTweenState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A wrapper component for implementing a fade out or fade in.

```jsx
<Fader type="fadeOut" duration={1000}>
  <div style={{height: 50, width: 50, background: "blue"}}>
  </div>
</Fader>
```

@import {Fader}
@flags noVisibleRender
@component Fader
@playground
Fader
*/

var Fader = _react2.default.createClass({
  displayName: "Fader",

  mixins: [_reactTweenState2.default.Mixin],

  propTypes: {
    /**
    Type of fade ("fadeIn", "fadeOut", or "none")
    */
    type: _react2.default.PropTypes.oneOf(["fadeIn", "fadeOut", "none"]),
    /**
    Duration of the fade in milliseconds
    */
    duration: _react2.default.PropTypes.number,
    /**
    Callback to be executed after fade is complete
    */
    callback: _react2.default.PropTypes.func,
    /**
    Children components to render
    */
    children: _react2.default.PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      type: "none",
      duration: 1000
    };
  },
  getInitialState: function getInitialState() {
    return {
      opacity: 1
    };
  },
  _fade: function _fade(props) {
    if (props.type === "none") {
      if (props.callback) {
        clearTimeout(this.timeoutId);
        // FlowDisable: Flow throws error on instance variable declaration
        this.timeoutId = setTimeout(function () {
          props.callback();
        }, props.duration);
      }
    } else {
      this.tweenState("opacity", {
        duration: props.duration,
        endValue: props.type === "fadeIn" ? 1 : 0,
        onEnd: props.callback
      });
    }
  },
  componentDidMount: function componentDidMount() {
    this._fade(this.props);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this._fade(nextProps);
  },
  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.timeoutId);
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { style: { opacity: this.getTweeningValue("opacity") } },
      this.props.children
    );
  }
});

exports.default = Fader;