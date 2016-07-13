/* @flow */
import React, { PropTypes, Component } from "react";
import classNames from "classnames";

import Flyout from "./flyout-magic";
import SlidePanel from "./slidepanel";

/**
ResponsiveFlyoutSlidePanel renders flyout for desktop and slidepanel for mobile
@examples
```jsx
<ResponsiveFlyoutSlidePanel
  flyoutDirection="right"
  flyoutSize="wide"
  trigger={(<span className="HelpFlyout-trigger">
          <i className="wmicon wmicon-help hide-content-max-m"></i>
          <span className="hide-content-m">Help trigger mobile</span>
        </span>)}
>
  <div>Flyout content goes here</div>
</ResponsiveFlyoutSlidePanel>

**/

export default class ResponsiveFlyoutSlidePanel extends Component {

  _toggleSlidePanel() {
    const slidePanel = this.refs.jsSlidePanel;
    slidePanel.toggleSlidePanel();
  }

  _renderSlidePanel(props): ReactElement {
    const {className, slidepanelClassName, ...other} = props;
    return (
      <div className={classNames({"hide-content-m": !props.slidepanelOnly})}>
        <div className="trigger" onClick={this._toggleSlidePanel.bind(this)}>{props.trigger}</div>
        <SlidePanel
          {...other}
          ref="jsSlidePanel"
          direction="bottom"
          className={slidepanelClassName}
        >
          {props.children}
        </SlidePanel>
      </div>
    );
  }

  _renderFlyout(props): ReactElement {
    const {className, flyoutClassName, ...other} = props;
    return (
      <div className={classNames({"hide-content-max-m": !props.flyoutOnly})}>
        <Flyout
          {...other}
          className={flyoutClassName}
          active={props.showFlyout}
          padded={true}
          fixed={true}
          direction={props.flyoutDirection}
          size={props.flyoutSize}
        >
          {props.children}
        </Flyout>
      </div>
    );
  }

  render(): ReactElement {
    return (
      <div className={classNames("responsive-flyout-slidepanel", this.props.className)}>
        {!this.props.slidepanelOnly && this._renderFlyout(this.props)}
        {!this.props.flyoutOnly && this._renderSlidePanel(this.props)}
      </div>
    );
  }
}

ResponsiveFlyoutSlidePanel.displayName = "ResponsiveFlyoutSlidePanel";

ResponsiveFlyoutSlidePanel.propTypes = {
  className: PropTypes.string,
  /**
   classes for flyout
   */
  flyoutClassName: PropTypes.string,
  /**
  classes for slidepanel
  */
  slidepanelClassName: PropTypes.string,
  /**
   element that will spawn modal onClick
   */
  trigger: PropTypes.element,
  /**
   Only Render Flyout, disable slidepanel
   */
  flyoutOnly: PropTypes.bool,
  /**
   Only Render slidepanel, disable flyout
   */
  slidepanelOnly: PropTypes.bool,
  /**
   Used to hide and show flyout on page load
   */
  showFlyout: PropTypes.bool,
  /**
   direction for flyout only
  */
  flyoutDirection: React.PropTypes.oneOf([
    "left",
    "right",
    "top",
    "bottom",
    "center"
  ]),
  /**
   size for flyout only
  */
  flyoutSize: React.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),
  /**
   flyout/slidepanel content
  */
  children: PropTypes.node.isRequired
};

ResponsiveFlyoutSlidePanel.defaultProps = {
  showFlyout: false,
  flyoutDirection: "right",
  flyoutSize: "wide",
  className: "",
  trigger: (
      <span className="HelpFlyout-trigger">
        <i className="wmicon wmicon-help"></i>
      </span>
    )
};
