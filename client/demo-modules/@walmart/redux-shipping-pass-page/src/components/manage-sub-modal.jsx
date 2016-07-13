import React from "react";

import Button from "@walmart/wmreact-interactive/lib/components/button";
import Copy from "@walmart/wmreact-base/lib/components/copy";
import Modal from "@walmart/wmreact-containers/lib/components/modal";
import RadioTile from "@walmart/wmreact-forms/lib/components/radio-tile";
import SlidePanel from "@walmart/wmreact-containers/lib/components/slidepanel";

import WrappedCreditCard from "./wrapped-credit-card";
import { CreditCardsWidget } from "@walmart/redux-credit-card";

import * as constants from "../redux/types/constants";

class ManageSubModal extends React.Component {
  constructor() {
    super();
    this.state = { active: false, selectedCardID: undefined };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ active: !this.state.active, selectedCardID: undefined });
  }

  _renderText() {
    const { cardSprite, cardStatus, piHash } = this.props;

    return (
      <div>
        <h1 className="heading-a modal-heading">
          Manage payment
        </h1>
        <Copy>
          <span className="font-semibold">ShippingPass subscription</span> payment method:
        </Copy>
        <div>
          {(cardStatus !== constants.UNAVAILABLE) && <div className="card-spacing">
            <span className={`payment-option ${cardSprite}`}></span>
            {' '}Ending in <span className="font-semibold">{piHash}{' '}</span>
          </div>}
          {(cardStatus === constants.EXPIRED)
            ? <Copy className="u-textRed font-semibold">This card has expired</Copy>
            : (cardStatus === "UNAVAILABLE")
            && <Copy className="u-textRed font-semibold">
                There is no card for this subscription payment.
              </Copy>
          }
        </div>
        <Copy className="cc-widget-spacing">{(cardStatus === constants.UNAVAILABLE)
        ? "Please choose a card"
        : "Please edit the card, choose a different card"}
        , or add a new card.</Copy>
      </div>
    );
  }

  _renderUpdatePayment(block) {
    const { selectedCardID } = this.state;
    const { cardType: type, piHash: lastFour } = this.props;
    const groupName = `creditCards-${block ? "block" : ""}`;

    return (
      /*eslint no-unused-expressions:0*/
      <div>
        {this._renderText()}
        <RadioTile groupName={groupName}>
          <CreditCardsWidget
            store={this.context.store}
            fetchInitialData
            showExpiredLabel
            usePrimaryButtons={false}
            floatingLabels
            tile={
              (props) => {
                let selected;
                if (selectedCardID) {
                  selected = selectedCardID;
                } else if (props.cardType === type &&
                  props.lastFour === lastFour) {
                  selected = props.id;
                }

                return (
                  <WrappedCreditCard
                    {...props}
                    key={props.id}
                    groupName={groupName}
                    checked={selected === props.id}
                    onSelected={() => this.setState({selectedCardID: props.id})}
                  />
                );
              }
            }
          />
        </RadioTile>
        <Button
          block={block}
          className="pull-right update-button"
          data-automation-id="continueButtons"
          onClick={() => {
            selectedCardID && this.props.updatePaymentPref(selectedCardID);
            this.toggle();
          }}
        >
          Continue
        </Button>
      </div>
    );
  }

  _renderSlidePanel() {
    return (
      <SlidePanel
        ref="slidePanel"
        active={this.state.active}
        onClose={this.toggle}
        direction="left"
        className="hide-content-s">
          {this._renderUpdatePayment(true)}
      </SlidePanel>
    );
  }

  _renderModal() {
    return (
      <div className="hide-content-max-s">
        <Modal
          ref="cancelModal"
          active={this.state.active}
          fixed={this.props.fixed}
          padded={this.props.padded}
          onClose={this.toggle}
          className="cancel-modal-body">
          {this._renderUpdatePayment()}
        </Modal>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.active && this._renderSlidePanel()}
        {this._renderModal()}
      </div>
    );
  }
}

ManageSubModal.propTypes = {
  cardSprite: React.PropTypes.string,
  cardStatus: React.PropTypes.string,
  cardType: React.PropTypes.string,
  fixed: React.PropTypes.bool,
  padded: React.PropTypes.bool,
  piHash: React.PropTypes.string,
  renewalDate: React.PropTypes.string,
  logo: React.PropTypes.any,
  updatePaymentPref: React.PropTypes.func
};

ManageSubModal.contextTypes = {
  store: React.PropTypes.any
};

export default ManageSubModal;
