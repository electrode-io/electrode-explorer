import React from "react";
import tweenState from "react-tween-state";
import classNames from "classnames";

export default React.createClass({
  displayName: "Collapsable",

  mixins: [tweenState.Mixin],

  propTypes: {
    /**
     CSS class name to apply to the component container
     */
    containerClassName: React.PropTypes.string,
    /**
     CSS class name to apply to the children container
     */
    className: React.PropTypes.string,
    /**
     Children to render in the container
     */
    children: React.PropTypes.node,
    /**
     True if the collapsable area is open
     */
    isOpen: React.PropTypes.bool,
    /**
     The duration of the collasping transition (in milliseconds)
     */
    transitionDuration: React.PropTypes.number,
    /**
     The easing function for the transition
     */
    transitionTimingFunction: React.PropTypes.string,
    /**
     Event callback for when the transition is complete
     */
    transitionComplete: React.PropTypes.func,
    /**
     True if the layout is vertical
     */
    isVertical: React.PropTypes.bool,
    /**
     The collapsed height, in pixels
     */
    baseHeight: React.PropTypes.number,
    /**
     The collapsed width, in pixels
     */
    baseWidth: React.PropTypes.number,
    /**
     What CSS overflow style to apply when collapsed
     */
    overflow: React.PropTypes.string,
    hidden: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      className: "zeus-collapsable clearfix",
      isOpen: true,
      isVertical: true,
      transitionDuration: 400,
      transitionComplete: () => {},
      baseHeight: 0,
      baseWidth: 0,
      overflow: "hidden"
    };
  },

  getInitialState() {
    return {
      maxHeight: this.props.isVertical ? this.props.baseHeight : "none",
      maxWidth: this.props.isVertical ? "none" : this.props.baseWidth,
      transitioning: false
    };
  },

  _transitionComplete() {
    this.setState({transitioning: false});
    if (this.props.transitionComplete) {
      this.props.transitionComplete();
    }
  },

  componentWillReceiveProps(nextProps) {
    const base = nextProps.isVertical ?
      nextProps.baseHeight : nextProps.baseWidth;
    const max = nextProps.isVertical ?
      this.refs.interior.offsetHeight : this.refs.interior.offsetWidth;

    const tweenProp = this.props.isVertical ? "maxHeight" : "maxWidth";
    const tweenEasing = this.props.transitionTimingFunction || tweenState.easingTypes.easeInQuad;

    this.setState({transitioning: true});
    this.tweenState(tweenProp, {
      easing: tweenEasing,
      duration: this.props.transitionDuration,
      endValue: nextProps.isOpen ? max : base,
      onEnd: this._transitionComplete
    });
  },

  _isInitialRender() {
    return !this.refs.interior;
  },

  _getContentWrapperStyles() {
    const isVertical = this.props.isVertical;
    const isOpen = this.props.isOpen;
    let maxWidth = null;
    let maxHeight = null;

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
      maxWidth,
      maxHeight,
      overflow: (!this.state.transitioning && isOpen) ? "visible" : this.props.overflow
    };
  },

  render() {
    return (
      <div
        className={classNames(this.props.containerClassName, "Collapsable")}
        ref="collapsable"
        style={this._getContentWrapperStyles()}>
        <div
          {...this.props}
          style={{display: "block", boxSizing: "border-box"}}
          ref="interior">{this.props.children}</div>
      </div>
    );
  }
});
