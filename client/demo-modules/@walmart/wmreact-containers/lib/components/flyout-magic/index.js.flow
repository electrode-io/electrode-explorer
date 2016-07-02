/* @flow */
/*eslint indent: [2, 2, {"SwitchCase": 1}]*/

import React, {Component} from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import flowtip from "flowtip/lib/dom";

import CloseButton from "./close-button";
import hideable from "./hideable";
import OutsideClick from "./outside-click";

/**
 * Create a new FlowTip component with the appropriate content and tail
 * elements for Walmart-style flyouts. This new FlowTip component can be
 * used to then display a flyout.
 */
const FlowTip = flowtip(
  ({children, region, style, width}) => (
    <div className={`flowtip-flyout-modal flowtip-flyout-modal-${region}`} style={{
      width,
      ...style
    }}>
      {children}
    </div>
  ),
  ({children, region, style}) => (
    <div className={`flowtip-flyout-caret flowtip-flyout-caret-${region}`} style={style}>
      {children}
    </div>
  )
);

/**
 * Object of the width presets to their numerical values.
 * @type {Object}
 */
const widths = {
  narrow: 248,
  width: 308,
  extrawide: 388,
  fluid: "auto"
};

/**
 * Map of flyout sizes to actual widths.
 * @param {String} size Size keyword.
 * @returns {Number} Actual width.
 */
const getWidth = (size : string) : number => {
  return widths[size] || widths.narrow;
};

const wrap = (Trigger) => {
  if (typeof Trigger === "function") {
    return class TriggerWrapper extends Component {
      render() {
        return <Trigger {...this.props}/>;
      }
    };
  } else {
    // TODO: Deprecate this.
    return class TriggerWrapper extends Component {
      render() {
        return React.cloneElement(Trigger, {
          ...this.props,
          onClick: () => this.props.toggle(),
          onMouseEnter: () => this.props.hover && this.props.show()
        });
      }
    };
  }
};

const normalize = ({left, right, top, bottom}) => ({
  left, top, width: right - left, height: bottom - top
});

export const getRect = (target) => {
  // TODO: This should use `getClientBoundingRect` for block elements and
  // `getClientRects` for `inline` or `inline-block` elements.
  //
  // `getClientRects` does not return width or height, so compute them as
  // necessary for flowtip and for finding the biggest. Other than that, it
  // works basically like `getClientBoundingRect`.
  // Get all the bounding boxes for the target.
  const rects = target.getClientRects();
  // Find the biggest one.
  let biggest = normalize(rects[0]);
  for (let i = 1; i < rects.length; ++i) {
    const rect = normalize(rects[i]);
    if (rect.width > biggest.width) {
      biggest = rect;
    }
  }
  return biggest;
};

/**
 * @component Flyout
 * @import {Flyout}
 *
@examples
```jsx
<Flyout trigger={({toggle}) => (
  <button onClick={toggle}>Show</button>
)} direction="left">Hello</Flyout>
```
 *
 */
class Flyout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: !!props.initialActive,
      target: {left: 0, right: 0, width: 0, height: 0}
    };
    this.Trigger = wrap(props.trigger);
  }

  /**
   * Update the the rect that the flyout points to. Use of `getClientRects`
   * allows the flyout to position itself intelligently when targeting multi-
   * line text.
   * @returns {void}
   */
  updateTarget() : void {
    // The target is always the trigger element as per `electrode` convention.
    const target = this.trigger;
    if (target) {
      // Use that as the target for the flyout.
      this.setState({target: getRect(target)});
    }
  }

  /**
   * Show the flyout.
   * @returns {void}
   */
  show() : void {
    this.setActive(true);
  }

  /**
   * Hide the flyout.
   * @returns {void}
   */
  hide() : void {
    this.setActive(false);
  }

  /**
   * Toggle the state of the flyout.
   * @returns {void}
   */
  toggle() : void {
    this.setActive(!this.state.active);
  }

  /**
   * Set the active state of the flyout.
   * @param {Boolean} active True to show flyout, false to hide.
   * @returns {void}
   */
  setActive(active) : void {
    this.setState({active}, () => {
      if (active) {
        // Because the user might have done some scrolling or other layout
        // modification between the time _this_ component was mounted and the
        // time we open the flyout we have to make sure our positioning is
        // correct.
        this.updateTarget();
      }
      this.props.onActiveChange(active);
    });
  }

  /**
   * Render the close button if we should, otherwise `null`.
   * @returns {React.Element} The close button.
   */
  renderCloseButton() : React.Element {
    if (!this.props.closeButton) {
      return null;
    }
    return (
      <CloseButton onClick={() => this.hide()}/>
    );
  }

  /**
   * Render the flyout backdrop if we should, otherwise `null`.
   * @returns {React.Element} The backdrop used to prevent closing when going to flyout.
   */
  renderBackdrop() : React.Element {
    if (this.props.hover && this.state.active) {
      return <div className="flowtip-flyout-backdrop"></div>;
    }
    return null;
  }

  /**
   * Render the flyout if we should, otherwise `null`.
   * @returns {React.Element} The flyout.
   */
  renderFlyout() : React.Element {
    if (!this.state.active) {
      return null;
    }
    return (
      <FlowTip
        region={this.props.direction}
        target={this.state.target}
        onReflow={() => this.updateTarget()}
        data={{width: getWidth(this.props.size)}}
      >
        {this.renderCloseButton()}
        {this.props.children}
      </FlowTip>
    );
  }

  renderTrigger() : React.Element {
    const Trigger = this.Trigger;
    return (
      <Trigger
        ref={(elem) => {
          if (elem) {
            this.trigger = ReactDOM.findDOMNode(elem);
          } else {
            this.trigger = null;
          }
        }}
        hover={this.props.hover}
        show={() => this.show()}
        hide={() => this.hide()}
        toggle={() => this.toggle()}
      />
    );
  }

  render() : React.Element {
    const { className, style, hover } = this.props;

    return (
      <OutsideClick onClick={() => this.hide()}>
        <div
          className={classNames("flowtip-flyout", className)}
          style={style}
          onMouseLeave={hover ? () => this.hide() : undefined }>
          {this.renderTrigger()}
          {this.renderFlyout()}
          {this.renderBackdrop()}
        </div>
      </OutsideClick>
    );
  }
}

Flyout.propTypes = {
  /**
   * Event triggered when the flyout toggles hidden shown state.
   */
  onActiveChange: React.PropTypes.func,

  /**
   * The trigger control. Should be a component that will recieve flyout
   * actions `show`, `hide` and `toggle`.
   */
  trigger: React.PropTypes.func,

  /**
   * The direction that the flyout should come from. Note that this is merely
   * the preferred direction of the flyout. This direction can change depending
   * on layout constraints.
   */
  direction: React.PropTypes.oneOf([
    "left",
    "right",
    "top",
    "bottom"
  ]),

  /**
   * The size of the flyout. This is just some preset value that maps to a real
   * width.
   */
  size: React.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),

  /**
   * True if we should render a close button within the flyout.
   */
  closeButton: React.PropTypes.bool,

  /**
   * True if the flyout should open on mouse enter and close on mouse leave.
   */
  hover: React.PropTypes.bool,

  /**
   * CSS class name to apply to the flyout.
   */
  className: React.PropTypes.string,

  /**
   * Styles to apply to the flyout.
   */
  style: React.PropTypes.object,

  /**
   * The initial active state of the flyout.
   */
  initialActive: React.PropTypes.boolean,

  /**
   * Contents of the flyout.
   */
  children: React.PropTypes.node
};

Flyout.defaultProps = {
  direction: "right",
  size: "wide",
  closeButton: false,
  hover: false,
  initialActive: false,
  onActiveChange: () => {},
  trigger: () => (<span>TRIGGER MISSING</span>)
};

Flyout.displayName = "Flyout";

export default hideable(Flyout);
