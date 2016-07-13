"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTweenState = require("react-tween-state");

var _reactTweenState2 = _interopRequireDefault(_reactTweenState);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Provides a collapsing layout.
@examples
```jsx
<Collapsable>
   Foo
</Collapsable>
```
@import {Collapsable}
@flags noVisibleRender
@component Collapsable
@playground
Collapsable
!noRenderFalse!
```
var CollapsableExample = React.createClass({
  getInitialState() {
    return {
      open: false
    }
  },
  expandToggle() {
    this.setState({
      open: this.state.open ? false : true
    })
  },
  render() {
  return (
      <div>
        <Collapsable isOpen={this.state.open}>
          <div>
            <p style={{margin: 0}}>Hi!</p>
          </div>
        </Collapsable>
        <a href="javascript:void(0)" onClick={this.expandToggle}>
          {this.state.open ? 'Collapse' : 'Expand'}
        </a>
      </div>
    )
  }
});

React.render(<CollapsableExample/>, mountNode);
```
*/
exports.default = _react2.default.createClass({
  displayName: "Collapsable",

  mixins: [_reactTweenState2.default.Mixin],

  propTypes: {
    /**
     CSS class name to apply to the component container
     */
    containerClassName: _react2.default.PropTypes.string,
    /**
     CSS class name to apply to the children container
     */
    className: _react2.default.PropTypes.string,
    /**
     Children to render in the container
     */
    children: _react2.default.PropTypes.node,
    /**
     True if the collapsable area is open
     */
    isOpen: _react2.default.PropTypes.bool,
    /**
     The duration of the collasping transition (in milliseconds)
     */
    transitionDuration: _react2.default.PropTypes.number,
    /**
     The easing function for the transition
     */
    transitionTimingFunction: _react2.default.PropTypes.string,
    /**
     Event callback for when the transition is complete
     */
    transitionComplete: _react2.default.PropTypes.func,
    /**
     True if the layout is vertical
     */
    isVertical: _react2.default.PropTypes.bool,
    /**
     The collapsed height, in pixels
     */
    baseHeight: _react2.default.PropTypes.number,
    /**
     The collapsed width, in pixels
     */
    baseWidth: _react2.default.PropTypes.number,
    /**
     What CSS overflow style to apply when collapsed
     */
    overflow: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: "zeus-collapsable clearfix",
      isOpen: true,
      isVertical: true,
      transitionDuration: 400,
      transitionComplete: function transitionComplete() {},
      baseHeight: 0,
      baseWidth: 0,
      overflow: "hidden"
    };
  },
  getInitialState: function getInitialState() {
    return {
      maxHeight: this.props.isVertical ? this.props.baseHeight : "none",
      maxWidth: this.props.isVertical ? "none" : this.props.baseWidth,
      transitioning: false
    };
  },
  _transitionComplete: function _transitionComplete() {
    this.setState({ transitioning: false });
    if (this.props.transitionComplete) {
      this.props.transitionComplete();
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var base = nextProps.isVertical ? nextProps.baseHeight : nextProps.baseWidth;
    var max = nextProps.isVertical ? this.refs.interior.offsetHeight : this.refs.interior.offsetWidth;

    var tweenProp = this.props.isVertical ? "maxHeight" : "maxWidth";
    var tweenEasing = this.props.transitionTimingFunction || _reactTweenState2.default.easingTypes.easeInQuad;

    this.setState({ transitioning: true });
    this.tweenState(tweenProp, {
      easing: tweenEasing,
      duration: this.props.transitionDuration,
      endValue: nextProps.isOpen ? max : base,
      onEnd: this._transitionComplete
    });
  },
  _isInitialRender: function _isInitialRender() {
    return !this.refs.interior;
  },
  _getContentWrapperStyles: function _getContentWrapperStyles() {
    var isVertical = this.props.isVertical;
    var isOpen = this.props.isOpen;
    var maxWidth = null;
    var maxHeight = null;

    if (this._isInitialRender() || this.state.transitioning === false) {
      // if it's the initial render, we can't rely on interior or tweening values
      // to show or hide without any tweening
      maxWidth = !isVertical && !isOpen ? this.props.baseWidth : "none";
      maxHeight = isVertical && !isOpen ? this.props.baseHeight : "none";
    } else {
      maxWidth = !isVertical ? this.getTweeningValue("maxWidth") || this.props.baseWidth : "none";
      maxHeight = isVertical ? this.getTweeningValue("maxHeight") || this.props.baseHeight : "none";
    }

    return {
      position: "relative",
      boxSizing: "border-box",
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      overflow: !this.state.transitioning && isOpen ? "visible" : this.props.overflow
    };
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      {
        className: (0, _classnames2.default)(this.props.containerClassName, "Collapsable"),
        ref: "collapsable",
        style: this._getContentWrapperStyles(),
        ariaHidden: this.props.isOpen },
      _react2.default.createElement(
        "div",
        (0, _extends3.default)({}, this.props, {
          style: { display: "block", boxSizing: "border-box" },
          ref: "interior" }),
        this.props.children
      )
    );
  }
});