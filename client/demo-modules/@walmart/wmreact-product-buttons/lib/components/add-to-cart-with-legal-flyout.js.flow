/* @flow */
import React, { Component } from "react";
import Tray from "@walmart/wmreact-containers/lib/components/tray";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import LegalFlyoutContent from "./product-legal-flyout-content";
import MoreInfoModal from "./legal-more-info-modal";
import ProductCTAAddToCart from "./product-cta-add-to-cart";
import LegalPromptProptype from "./legal-prompt-proptype";

class LegalAddToCartButton extends Component {

  constructor(props) {
    super(props);
    this._onFlyoutClosed = this._onFlyoutClosed.bind(this);
    this._onAcceptClicked = this._onAcceptClicked.bind(this, props);
  }

  _renderButtonComponent(isLoading, onClick): ReactElement {
    return (
      <Button primary
        spinner={isLoading}
        className="prod-ProductCTA--primary"
        onClick={onClick}
        block>
        Add to Cart
      </Button>
    );
  }

  _onAcceptClicked({addToCartProps, onAcceptClicked}): void {
    if (addToCartProps && addToCartProps.onAddToCart) {
      addToCartProps.onAddToCart();
    }
    onAcceptClicked();
  }

  _renderDeclineContent(): ReactElement {
    return (
      <div className="prod-LegalATC-decline">
        <strong className="prod-LegalATC-decline-heading">
          This item could not be added to your cart.
        </strong>
        <p className="prod-LegalATC-decline-content">
          Please review the rating warning displayed on the page and try again.
        </p>
      </div>
    );
  }

  _renderLegalPromptContent({
      onDeclineClicked,
      onMoreInfoClicked
    }): ReactElement {
    return (<LegalFlyoutContent
      onAcceptClicked={this._onAcceptClicked}
      onDeclineClicked={onDeclineClicked}
      onMoreInfoClicked={onMoreInfoClicked}
      />);
  }

  _renderAsTray(props, content): ReactElement {
    return (
      <div className="hide-content-s prod-LegalContent-tray">
        {this._renderButtonComponent(true)}
        <Tray isOpen hideButtons onCancel={props.onFlyoutClosed}>
          <div>
            <button className="flyout-close" type="button" onClick={props.onFlyoutClosed}>
              <Icon.Remove />
              <span className="visuallyhidden">Close</span>
            </button>
            {content}
          </div>
        </Tray>
      </div>
    );
  }

  _onFlyoutClosed(active: boolean) : void {
    if (!active) {
      this.props.onFlyoutClosed();
    }
  }

  _renderAsFlyout(props, content): ReactElement {
    return (
      <div className="hide-content-max-s">
        <Flyout direction="left"
          size="extrawide"
          closeButton
          className="display-block prod-LegalContent-flyout"
          onActiveChange={this._onFlyoutClosed}
          trigger={this._renderButtonComponent(true)}
          active>
            {content}
        </Flyout>
      </div>
    );
  }

  _renderPrompt(props, content): ReactElement {
    return (
      <div>
        {this._renderAsTray(props, content)}
        {this._renderAsFlyout(props, content)}
      </div>
    );
  }

  render(): ReactElement {
    const { legalPromptStatus, addToCartProps, onClick } = this.props;
    switch (legalPromptStatus) {
    case "ACCEPTED":
      return (<ProductCTAAddToCart {...addToCartProps}/>);
    case "NOT_YET_ACCEPTED":
      return this._renderButtonComponent(false, onClick);
    case "MORE_INFO":
      return (
        <div>
          {this._renderButtonComponent(false)}
          <MoreInfoModal active onClose={this.props.onMoreInfoClosed}/>
        </div>
      );
    case "PROMPT": {
      const legalConent = this._renderLegalPromptContent(this.props);
      return this._renderPrompt(this.props, legalConent);
    }
    case "DECLINE":
      const declineContent = this._renderDeclineContent();
      return this._renderPrompt(this.props, declineContent);
    }
  }
}

LegalAddToCartButton.propTypes = LegalPromptProptype;

LegalAddToCartButton.defaultProps = {
  legalPromptStatus: "ACCEPTED",
  onClick: () => {},
  onMoreInfoClicked: () => {},
  onMoreInfoClosed: () => {},
  onAcceptClicked: () => {},
  onDeclineClicked: () => {},
  onFlyoutClosed: () => {}
};

export default LegalAddToCartButton;
