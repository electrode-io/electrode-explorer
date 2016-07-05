// note: this code is more or less @walmart/wmreact-credit-card-info
// should be merged in some way in the future

import React, { Component, PropTypes } from "react";
import classNames from "classnames";

const cards = [
  {className: "walmart-credit-card", cardProp: "walmart", cardType: "WMUSGESTORECARD"},
  {className: "walmart-mastercard", cardProp: "walmartMastercard", cardType: "WMMASTERCARD"},
  {className: "mastercard", cardProp: "mastercard", cardType: "MASTERCARD"},
  {className: "visa", cardProp: "visa", cardType: "VISA"},
  {className: "american-express", cardProp: "americanExpress", cardType: "AMEX"},
  {className: "discover", cardProp: "discover", cardType: "DISCOVER"}
];

class CreditCardIcons extends Component {
  renderCardIcon(card, index) {
    const classes = classNames(
      card.className,
      "payment-option",
      { "payment-inactive": (this.props.cardType !== card.cardType) }
    );

    return <div key={index} className={classes}></div>;
  }

  render() {
    const cardsMarkup = cards.map(this.renderCardIcon, this);

    return (
      <div>
        {cardsMarkup}
      </div>
    );
  }
}

CreditCardIcons.propTypes = {
  cardType: PropTypes.string
};

CreditCardIcons.defaultProps = {
  cardType: ""
};

export default CreditCardIcons;
