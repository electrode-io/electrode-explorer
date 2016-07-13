/* @flow */
import React from "react";
import ReactDOM from "react-dom";
import assign from "object-assign";
import tweenState from "react-tween-state";

/**
The content section of a Tabber
@component Tabber.Content
@import {Tabber}
@references Tabber
*/
export default React.createClass({
  displayName: "Tabber.Content",

  mixins: [tweenState.Mixin],

  propTypes: {
    /**
    True if we should adjust to auto height
    */
    autoHeight: React.PropTypes.bool,
    /**
    True if this is the active tab
    */
    activeTab: React.PropTypes.number,
    /**
    The easing function we should use on opening
    */
    easingType: React.PropTypes.string,
    /**
    The speed of the height change
    */
    autoHeightSpeed: React.PropTypes.number,
    style: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },

  getInitialState(): Object {
    return {
      currentHeight: null,
      animating: false
    };
  },

  getDefaultProps(): Object {
    return {
      autoHeight: false,
      autoHeightSpeed: 400,
      easingType: "easeInOutQuad"
    };
  },

  componentDidMount(): void {
    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      currentHeight: this._getHeight()
    });
  },

  componentDidUpdate(prevProps: Object): void {
    if (this.props.autoHeight && this.props.activeTab !== prevProps.activeTab) {
      this.setState({ // eslint-disable-line react/no-did-update-set-state
        animating: true
      }, this._startTween);
    }
  },

  cancelAnimation(): void {
    if (this.getTweeningValue("currentHeight") === this.state.currentHeight) {
      this.setState({
        animating: false
      });
    }
  },

  _startTween(): void {
    this.tweenState("currentHeight", {
      easing: tweenState.easingTypes[this.props.easingType],
      duration: this.props.autoHeightSpeed,
      endValue: this._getHeight(),
      onEnd: this.cancelAnimation
    });
  },

  _displayActive(section: ReactElement, i: number): ?ReactElement {
    if (this.props.activeTab !== i || !section) {
      return null;
    }

    return React.cloneElement(section, {
      ref: "activeTab"
    });
  },

  _getHeight(): number {
    if (!this.refs.activeTab) {
      return 0;
    }

    return ReactDOM.findDOMNode(this.refs.activeTab).offsetHeight || 0;
  },

  _getStyle(): Object {
    return assign(
      {},
      this.props.style,
      this.state.currentHeight && this.state.animating && {
        height: this.getTweeningValue("currentHeight"),
        overflow: "hidden"
      }
    );
  },

  render(): ReactElement {
    return (
      <div className={this.props.className} style={this._getStyle()}>
        {React.Children.map(this.props.children, this._displayActive, this)}
      </div>
    );
  }
});
