import React, { Component, PropTypes } from "react";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import Link from "@walmart/wmreact-base/lib/components/link";
import Button from "@walmart/wmreact-interactive/lib/components/button";

class ShippingPassFlyout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flyoutOpen: false
    };
    this.onClickSeeDetailsLaunchModal = this.onClickSeeDetailsLaunchModal.bind(this);
  }

  renderTrigger(): void {
    return (<div className="ShippingPass-tile"></div>);
  }

  renderSpBody(): void {
    return (
      <div>
        <div className="ShippingPassFlyout-logo"></div>
        <div className="ShippingPassFlyout-body">
          <span className="message">
            {this.props.spTrialText}
            <span className="font-semibold"> {this.props.spNumberOfShipDays} </span>
            {this.props.spFulfillmentText}
          </span>
          <div>
            <span className="message font-semibold margin-bottom">
              {this.props.spPromotionText}</span>
          </div>
        </div>
      </div>
    );
  }

  renderSpFooter(): void {
    return (
      <div className="ShippingPassFlyout-footer">
        <Button className="button-ship"
          onClick= {this.onClickSeeDetailsLaunchModal}
          fakelink>{this.props.seeDetailsText}</Button>
        <span className="
          ShippingPassFlyout-divider
          display-inline-block
          margin-left
          margin-right divider">|</span>
        <Link href={this.props.signUpUrl}>{this.props.signUpText}</Link>
      </div>
    );
  }

  onClickSeeDetailsLaunchModal(): void {
    this.setState({
      flyoutOpen: false
    });
    this.props.onClickSeeDetails();
  }

  render(): ReactElement {
    if (this.props.showShippingPassFlyout) {
      return (
        <Flyout
          trigger={this.renderTrigger()}
          direction="right"
          className="ShippingPassFlyout-container"
          size="narrow"
          active={this.state.flyoutOpen}
          closeButton>
          {this.renderSpBody(this.props)}
          {this.renderSpFooter(this.props)}
        </Flyout>
      );
    } else {
      return (<div className="ShippingPassFlyout-logo"></div>);
    }
  }
}

ShippingPassFlyout.displayName = "ShippingPassFlyout";

ShippingPassFlyout.propTypes = {

  /**
   * Sp prop types for text on flyout
   */
  spTrialText: PropTypes.string,
  spNumberOfShipDays: PropTypes.string,
  spFulfillmentText: PropTypes.string,
  spPromotionText: PropTypes.string,

  seeDetailsText: PropTypes.string,

  signUpUrl: PropTypes.string,

  signUpText: PropTypes.string,
  /**
   * Conditions to be fulfilled to display SP flyout
   */
  showShippingPassFlyout: PropTypes.bool,
  /**
   * What to do if See details is clicked and you want to extend onClick behavior
   */
  onClickSeeDetails: PropTypes.func
};

ShippingPassFlyout.defaultProps = {
  spTrialText: "",
  spNumberOfShipDays: "",
  spFulfillmentText: "",
  spPromotionText: "",
  seeDetailsText: "",
  signUpUrl: "",
  signUpText: "",
  onClickSeeDetails: () => {/*no-op*/},
  showShippingPassFlyout: false
};

export default ShippingPassFlyout;
