import React from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Copy from "@walmart/wmreact-base/lib/components/copy";
import Well from "@walmart/wmreact-containers/lib/components/well";
import Separator from "@walmart/wmreact-containers/lib/components/separator";
import Option from "@walmart/wmreact-forms/lib/components/option";
import Button from "@walmart/wmreact-interactive/lib/components/button";

import CancelModal from "./cancel-modal";
import ManageSubModal from "./manage-sub-modal";

const cards = {
  WMUSGESTORECARD: "walmart-credit-card",
  WMMASTERCARD: "walmart-mastercard",
  MASTERCARD: "mastercard",
  VISA: "visa",
  AMEX: "american-express",
  DISCOVER: "discover"
};

class ShippingPassWell extends React.Component {

  _renderHeader() {
    const {renewalDate, trialStatus} = this.props;

    return (
      <h1 className="heading-c well-heading">
        You're getting FREE unlimited shipping until {trialStatus ? " your trial ends " : " "}
        <span className="font-semibold">{renewalDate}</span>
      </h1>
    );
  }

  _renderFlow() {
    const {
      autoRenew,
      cardInfo,
      cardStatus,
      link,
      logo,
      price,
      renewalDate,
      trialStatus,
      updateAutoRenew,
      updatePaymentPref
    } = this.props;

    const cardSprite = cards[cardInfo.type];

    const CardCopy = () => (
      <div>
        <Copy.Small>
          Need to cancel? Contact our <Link href={link}> Help Center</Link>
        </Copy.Small>
        <Separator />
        <Copy>
          On {renewalDate} we'll charge your card {price} to continue for another year.
        </Copy>
        <div>
          {(cardStatus === "EXPIRED")
            ? <Copy className="u-textRed font-semibold">This card has expired</Copy>
            : (cardStatus === "UNAVAILABLE") &&
            <Copy className="u-textRed font-semibold">
              Please add a payment method to continue.
            </Copy>
          }
          {(cardStatus === "UNAVAILABLE")
          ? <Button
            fakelink={true}
            onClick={() => this.refs.manageSubModal.toggle()}>
              Add card
            </Button>
          : <div className="card-spacing">
              <span className={`payment-option ${cardSprite}`}></span>
              {' '}Ending in <span className="font-bold">{cardInfo.digits}{' '}</span>
              <Button
                fakelink={true}
                onClick={() => this.refs.manageSubModal.toggle()}>
                  Change
              </Button>
            </div>
          }
        </div>
      </div>
    );

    return (
      <div>
        {this._renderHeader()}
        <div className="option-form-control">
          <Option
            checkboxName="subscribedCheckbox"
            data-automation-id="subscribedCheckbox"
            checked={autoRenew}
            onChange={
              () => autoRenew ? this.refs.cancelModal.toggle() : updateAutoRenew(!autoRenew)
            }>
              Automatically renew subscription
          </Option>
        </div>
        {autoRenew && <CardCopy />}
        <CancelModal
          ref="cancelModal"
          data-automation-id="cancelModalButton"
          cancel={() => updateAutoRenew(!autoRenew)}
          renewalDate={renewalDate}
          logo={logo}
          trial={trialStatus}
          padded={true}/>
        <ManageSubModal
          ref="manageSubModal"
          data-automation-id="manageSubModalButton"
          cardSprite={cardSprite}
          cardType={cardInfo.type}
          piHash={cardInfo.digits}
          updatePaymentPref={updatePaymentPref}
          renewalDate={renewalDate}
          logo={logo}
          cardStatus={cardStatus}
          fixed={false}
          padded={true}/>
      </div>
    );
  }

  _renderTrialFlow() {
    const {
      autoRenew,
      cardInfo,
      logo,
      price,
      renewalDate,
      trialStatus,
      updateAutoRenew
    } = this.props;

    const DiscontinueCopy = () => (
      <div className="option-form-control">
        <Option
          checkboxName="trialCheckbox"
          data-automation-id="trialCheckbox"
          onCheckedChange={() => updateAutoRenew(!autoRenew)}>
            Continue <em>Shipping</em>Pass for one full year
        </Option>
      </div>
    );

    return (
      <div>
        {this._renderHeader()}
        {autoRenew ? (
          <div>
            <Separator />
            <Copy.Small>
              After your FREE trial ends we'll charge your card {price} to continue for a year.
            </Copy.Small>
            <Copy.Small>
              <span className={`payment-option ${cards[cardInfo.type]}`}></span>
              Ending in <strong>{' '}{cardInfo.digits}</strong>
            </Copy.Small>
            <Copy.Small>
            Need to end your subscription?{' '}
              <Button
                fakelink={true}
                onClick={() => this.refs.cancelModal.toggle()}>
                  Cancel
              </Button>
              {' '}before your FREE trial ends and pay nothing.
            </Copy.Small>
            <CancelModal
              ref="cancelModal"
              data-automation-id="cancelModalButton"
              cancel={() => updateAutoRenew(!autoRenew)}
              renewalDate={renewalDate}
              logo={logo}
              trialStatus={trialStatus}
              fixed={true}
              padded={true}/>
          </div>
          ) : <DiscontinueCopy />}
      </div>
    );
  }

  render() {
    const {loading, trialStatus} = this.props;

    return (
      /*eslint no-nested-ternary:0*/
      <Well
        padded={true}
        below={false}>
          {loading
            ? <div className="spinner-backdrop spinner-well"><div className="spinner" /></div>
            : trialStatus
            ? this._renderTrialFlow()
            : this._renderFlow()
          }
      </Well>
    );
  }
}

ShippingPassWell.propTypes = {
  autoRenew: React.PropTypes.bool,
  cardInfo: React.PropTypes.object,
  cardStatus: React.PropTypes.string,
  error: React.PropTypes.bool,
  getSubscriptionStatus: React.PropTypes.func,
  link: React.PropTypes.string,
  loading: React.PropTypes.bool,
  logo: React.PropTypes.any,
  price: React.PropTypes.string,
  renewalDate: React.PropTypes.string,
  trialStatus: React.PropTypes.bool,
  updateAutoRenew: React.PropTypes.func,
  updatePaymentPref: React.PropTypes.func
};

ShippingPassWell.defaultProps = {
  price: "$49",
  link: "http://help.walmart.com/app/answers/detail/a_id/778"
};

export default ShippingPassWell;
