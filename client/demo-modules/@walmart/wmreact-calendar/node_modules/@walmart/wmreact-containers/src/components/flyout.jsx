/* @flow */
/* global document */
/*eslint indent: [2, 2, {"SwitchCase": 1}]*/

import React, {Component} from "react";

import ReactDOM from "react-dom";

import classNames from "classnames";

import map from "lodash/map";

import Button from "@walmart/wmreact-interactive/lib/components/button";
import Icon from "@walmart/wmreact-base/lib/components/icon";

import { isTouchDevice } from "@walmart/react-utils";

const cloneElement = React.cloneElement;

/**
A flyout container.
@examples
```jsx
<Flyout triggerText="Fly it out!" direction="top">
  <h1>It flew out!</h1>
</Flyout>
```
@component Flyout
@import {Flyout}
@playground
Flyout
```
<Flyout triggerText="Fly it out!" direction="top">
  <h1>It flew out!</h1>
</Flyout>
```
*/

class Flyout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active || false,
      mt: null,
      ml: null
    };

    this._documentClick = this._documentClick.bind(this);
    this._onStateChangeCallback = this._onStateChangeCallback.bind(this);
    this._onCloseButtonClick = this._onCloseButtonClick.bind(this);
    this._resetDocumentClickHandlers = this._resetDocumentClickHandlers.bind(this);
    this._handleLinkNav = this._handleLinkNav.bind(this);
    this._onTrigger = this._onTrigger.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
    this._positionFlyout = this._positionFlyout.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this._documentClick);
    document.removeEventListener("touchstart", this._documentClick);
  }

  componentDidMount() {
    this._positionFlyout();
  }

  componentWillReceiveProps(nextProps: Object): void {
    /**
     * Ideally this component would be stateless and the `active` prop would
     * be the only way to change the flyout state. But `setState` is used
     * heavily in this component and using only props would break too much.
     * For now, update the `active` state only if the prop is set and
     * not equal to the current `active` state.
     */
    const isControlled = this.props.active !== null;

    if (isControlled && nextProps.active !== this.state.active) {
      this.setState({active: nextProps.active});
    }
  }

  _isTouchDevice() {
    return isTouchDevice(window);
  }

  _documentClick(e: Object): void {
    const {closeOnClickOut} = this.props;
    const {flyout} = this.refs;

    if (closeOnClickOut) {
      const foundNode = ReactDOM.findDOMNode(flyout);

      /**
       * This is necessary for detecting clicks inside of a deeply nested child.
       * Provides null-safety for PhantomJS testing.
       * @param {object} path DOM path
       * @returns {array} Classnames of node
       */
      const getClassNames = (path) => path ? map(path, (node) => node.className) : [];

      const nodeClasses = getClassNames(e.path);

      if (
        foundNode &&
        e.target !== foundNode &&
        foundNode.contains(e.target) !== true &&
        !nodeClasses.join().match("flyout-modal")
      ) {
        this.setState({active: false}, () => {
          if (this.props.onActiveChange) {
            this.props.onActiveChange(this.state.active);
          }
        });
      }
    }
  }

  _resetDocumentClickHandlers(active): void {
    if (active) {
      document.addEventListener("click", this._documentClick);
      document.addEventListener("touchstart", this._documentClick);
    } else {
      document.removeEventListener("click", this._documentClick);
      document.removeEventListener("touchstart", this._documentClick);
    }
  }

  _onStateChangeCallback(): void {
    const {onActiveChange} = this.props;
    const {active} = this.state;
    onActiveChange(active);
    this._resetDocumentClickHandlers(active);
    this._positionFlyout();
  }

  _onCloseButtonClick(ev: Object): void {
    this._handleLinkNav(ev);
    this.setState({active: !this.state.active}, this._onStateChangeCallback);
  }

  _onTrigger(ev: Object): void {
    this._handleLinkNav(ev);

    this.setState({active: !this.state.active}, () => {
      this._onStateChangeCallback();
      this.props.onTriggerElementClick(ev);
    });
  }

  _handleLinkNav(e: Object) {
    e.preventDefault();
    const href = e.currentTarget.href || e.target.href;
    if (href && this.props.disableTouchLinksOnly && !this._isTouchDevice()) {
      this._navigateWindow(href);
    }
  }

  _navigateWindow(url) {
    window.location = url;
  }

  _positionFlyout() {
    const modal = ReactDOM.findDOMNode(this.refs.modal);
    const flyout = ReactDOM.findDOMNode(this.refs.flyout);
    const {direction, size, align} = this.props;
    const newState = {};
    if (direction === "left" || direction === "right" ||
        direction === "center") {
      newState.mt = (Math.round(modal.offsetHeight / 2)) * -1;
    }
    if (size === "fluid" || align === "center") {
      newState.ml = (Math.round(modal.offsetWidth / 2)) * -1;
    }
    if (align === "bottom" && direction === "center") {
      const modalHt = Math.round(modal.offsetHeight);
      const btnHt = Math.round(flyout.offsetHeight);
      if (btnHt <= modalHt) {
        newState.mt = (modalHt - btnHt) * -1;
      }
      newState.ml = (Math.round(modal.offsetWidth / 2)) * -1;
    }
    this.setState(newState);
  }

  _mouseEnter() {
    if (this.props.hover && !this._isTouchDevice()) {
      this.setState({active: true}, () => {
        this._positionFlyout();
        if (this.props.onActiveChange) {
          this.props.onActiveChange(this.state.active);
        }
      });
    }
  }

  _mouseLeave() {
    if (this.props.hover && !this._isTouchDevice()) {
      this.setState({active: false}, () => {
        if (this.props.onActiveChange) {
          this.props.onActiveChange(this.state.active);
        }
      });
    }
  }

  _addDirectionAndAlign(): Object {
    const extras = {};

    extras[`flyout-${this.props.direction}`] = true;
    extras[`flyout-align-${this.props.align}`] = true;

    return extras;
  }

  _renderCloseButton(closeButton: boolean): ReactElement {
    if (closeButton) {
      return (
        <button className="flyout-close" type="button" onClick={this._onCloseButtonClick}>
          <Icon.Remove />
          <span className="visuallyhidden">Close</span>
        </button>
      );
    }
  }

  _getBackdrop() {
    const classes = classNames(
      "flyout-backdrop",
      {
        "display-block": this.state.active
      }
    );
    if (this.props.hover) {
      return (
        <div className={classes}>
        </div>
      );
    }
    return null;
  }

  _renderTrigger({triggerText, trigger}): ReactElement {
    // by default we will render the trigger element as a button.
    let triggerEl = (<Button onClick={this._onTrigger} onMouseEnter={this._mouseEnter}
      className="flyout-trigger">{triggerText}</Button>);

    // if a custom trigger element is passed
    if (trigger) {
      // clone the element
      triggerEl = cloneElement(trigger, {
        onClick: this._onTrigger,
        onMouseEnter: this._mouseEnter,
        className: classNames(trigger.props.className, "flyout-trigger")
      });
    }

    // return the new triggerEl
    return triggerEl;
  }

  render(): ReactElement {
    const modalExtras = {};
    const modalFluid = {};

    if (this.props.size === "fluid") {
      modalFluid["flyout-fluid"] = true;
    } else {
      modalExtras[`flyout-modal-${this.props.size}`] = true;
    }

    if (this.props.block) {
      modalFluid["flyout-block"] = true;
    }

    const backdrop = this._getBackdrop();

    const classes = classNames(
      "flyout",
      this._addDirectionAndAlign(),
      this.props.hidden ? "hide-content" : "",
      this.props.className,
      modalFluid
    );

    return (
      <div className={classes} ref="flyout" onMouseLeave={this._mouseLeave}>
        {backdrop}
        {this._renderTrigger(this.props)}
        <div className={classNames("flyout-modal", modalExtras)}
          ref="modal"
          style={{
            display: this.state.active ? "block" : "none",
            marginTop: this.state.mt,
            marginLeft: this.state.ml
          }}>
          {this._renderCloseButton(this.props.closeButton)}
          {this.props.children}
        </div>
      </div>
    );
  }
}

Flyout.displayName = "Flyout";
Flyout.propTypes = {
  /**
  Event triggered when the flyout toggles hidden shown state.
  */
  onActiveChange: React.PropTypes.func,
  /**
  The trigger control
  */
  trigger: React.PropTypes.node,
  /**
  The trigger text if you just want a button
  */
  triggerText: React.PropTypes.node,
  /**
  The direction that the flyout should come from
  */
  direction: React.PropTypes.oneOf([
    "left",
    "right",
    "top",
    "bottom",
    "center"
  ]),
  /**
  The size of the flyout
  */
  size: React.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),
  /**
  The alignment of the flyout
  */
  align: React.PropTypes.oneOf([
    "left",
    "right",
    "center"
  ]),
  /**
  Whether to render as a block element (apply the "flyout-block" class)
  */
  block: React.PropTypes.bool,
  /**
  True if the flyout is shown. If not set, component defaults to using internal state control.
  */
  active: React.PropTypes.bool,
  /**
  True if we should render a close button within the flyout
  */
  closeButton: React.PropTypes.bool,
  /**
  True if we should close the flyout if the user clicks outside of it
  */
  closeOnClickOut: React.PropTypes.bool,
  /**
  To display on hover pass in true
  */
  hover: React.PropTypes.bool,
  /**
  To display on hover pass in true
  */
  hoverTimeout: React.PropTypes.string,
  /**
  To make the flyout toggle prevent default on touch devices only
  */
  disableTouchLinksOnly: React.PropTypes.bool,
  /**
  An additional click handler hook for the passed in trigger element
  */
  onTriggerElementClick: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

Flyout.defaultProps = {
  direction: "right",
  size: "wide",
  align: null,
  block: false,
  active: null,
  closeButton: false,
  closeOnClickOut: true,
  hover: false,
  disableTouchLinksOnly: true,
  onTriggerElementClick: () => {},
  onActiveChange: () => {}
};

export default Flyout;
