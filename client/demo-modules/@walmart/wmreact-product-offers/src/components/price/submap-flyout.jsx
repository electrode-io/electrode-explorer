import React, { PropTypes } from "react";

import ResponsiveFlyoutSlidePanel from
    "@walmart/wmreact-containers/lib/components/responsive-flyout-slidepanel";

const _renderSubmapContent = (checkoutContent, flyoutOnly, message) => {
  return (
    <div className="Price-submapFlyout-content font-normal">
      <h3 className={flyoutOnly ? "hide-content" : "hide-content-m"}>{message}</h3>
      <p className="Price-submapFlyout-content-cta">
        Please add this item to your cart {checkoutContent &&
          "and provide your name and email address "}to see {checkoutContent ? "our" : "the"} price.
      </p>
      <p className="Price-submapFlyout-content-info">
        Because this is below the manufacturer&rsquo;s minimum advertised price, they won&rsquo;t
          let us show it here{checkoutContent ? " and require we collect this information to verify"
          + " your interest. This will not opt you into Walmart emails and, i" : ". I"}f you
          don&rsquo;t agree it&rsquo;s a great value, you can remove it from your cart at any time.
      </p>
    </div>
  );
};

const SubmapFlyout = ({checkoutContent, position, flyoutOnly, buttonTrigger, message}) => {
  return (
    <ResponsiveFlyoutSlidePanel
      className="Price-submapFlyout display-inline-block"
      trigger={buttonTrigger}
      closeButton
      hover
      btnText="Done"
      btnClass="btn btn-block"
      flyoutDirection={position}
      flyoutSize="extrawide"
      flyoutOnly={flyoutOnly}
    >
      {_renderSubmapContent(checkoutContent, flyoutOnly, message)}
    </ResponsiveFlyoutSlidePanel>
  );
};

SubmapFlyout.displayName = "SubmapFlyout";

SubmapFlyout.propTypes = {
  /**
  True to use checkout submap flyout content. Otherwise will use cart version.
  */
  checkoutContent: PropTypes.bool,
  /**
  Position of the flyout.
  */
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  /**
  only render flyout, hide slidepanel
  */
  flyoutOnly: PropTypes.bool,
  /**
  render message as heading in slide panel
  */
  message: PropTypes.string,
  /**
  element to spawn flyout
  */
  trigger: PropTypes.element
};

SubmapFlyout.defaultProps = {
  checkoutContent: false,
  position: "right",
  flyoutOnly: true,
  messsage: "See Details in Cart",
  buttonTrigger: (<span className="HelpFlyout-trigger Price-submapFlyout-button">
      <i className="wmicon wmicon-help copy-mini font-normal"></i>
    </span>)
};

export default SubmapFlyout;
