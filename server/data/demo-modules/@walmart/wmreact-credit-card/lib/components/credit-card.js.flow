import React from "react";
import classNames from "classnames";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { parseDateParts, isCardExpired } from "./internals/form/utils/dates";
import tokens from "./internals/form-tokens.json";
import {i18n} from "../config";
import Spinner from "@walmart/wmreact-containers/lib/components/spinner";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import isStoreCard from "../utils/is-store-card";
import isTemporaryCard from "../utils/is-temporary-card";

const cards = {
  WMUSGESTORECARD: "walmart-credit-card",
  WMMASTERCARD: "walmart-mastercard",
  MASTERCARD: "mastercard",
  VISA: "visa",
  AMEX: "american-express",
  DISCOVER: "discover"
};

/**
 A component for displaying a single credit card.

 Here is a simple example:

 ```jsx
 <CreditCard
 onDelete={(ev) => console.log(ev)}
 onEdit={(ev) => console.log(ev)}
 cardType="VISA"
 lastFour="1111"
 firstName="John"
 lastName="Snow"
 cardExpiryDate="07/17"
 />
 ```
 @component CreditCards
 @import {CreditCards}
 @playground
 CreditCards
 ```
 <CreditCard
 onDelete={(ev) => console.log(ev)}
 onEdit={(ev) => console.log(ev)}
 cardType="VISA"
 lastFour="1111"
 firstName="John"
 lastName="Snow"
 cardExpiryDate="07/17"
 />
 ```
 */
class CreditCard extends React.Component {
  constructor() {
    super();
  }

  _toggleDeleteMode() {
    const {onDeleteModeChanged, deleteMode} = this.props;
    if (onDeleteModeChanged) {
      onDeleteModeChanged(!deleteMode);
    }
  }

  _delete() {
    this._toggleDeleteMode();
    this.props.onDelete();
  }

  _isEditable() {
    return !isTemporaryCard(this.props);
  }

  _isExpired() {
    const {month, year} = parseDateParts(this.props.cardExpiryDate);

    return isCardExpired(month, year);
  }

  _hasExpiryDate() {
    const {cardExpiryDate} = this.props;
    return cardExpiryDate && (!isStoreCard(this.props) || isTemporaryCard(this.props));
  }

  _expires() {
    const {isTemp} = this.props;
    const {day, month, year} = parseDateParts(this.props.cardExpiryDate);
    // Temp cards are supposed to be shown with the day.
    // See: https://jira.walmart.com/browse/GPCC-6009
    if (isTemp) {
      return `${month}/${day}/${year.substring(2, 4)}`;
    }
    return `${month}/${year.substring(2, 4)}`;
  }

  _renderCardBody() {
    const paymentOptionClasses = classNames(
      cards[this.props.cardType],
      "payment-option",
      `js-payment-option`,
      `js-payment-option-${this.props.index}`
    );
    const {showExpiredLabel, deleteMode} = this.props;

    return (
      <div className="inner-card-body">
        <div className={paymentOptionClasses}></div>
        <div>{i18n(tokens.cardTile.endingIn)}&nbsp;
          <span
            className="font-semibold js-last-four"
            data-automation-id={`credit-card-tile-lastFour-${this.props.index}`}>
              {this.props.lastFour}
          </span>
        </div>

        {this._renderExpiryDate()}
        <div
          className="credit-card-fullname js-credit-card-fullname"
          data-automation-id={`credit-card-tile-name-${this.props.index}`}>
          {this.props.firstName} {this.props.lastName}
        </div>
        {this._hasExpiryDate() && this._isExpired() && showExpiredLabel && !deleteMode && (
          <div
            data-automation-id={`credit-card-expired-label-${this.props.index}`}
            className="credit-card-expired-label">
            This card has expired
          </div>
        )}
      </div>
    );
  }

  _renderExpiryDate() {
    if (this._hasExpiryDate()) {
      return (
        <div>{i18n(tokens.cardTile.expires)}&nbsp;
          <span
            className="font-semibold js-expires"
            data-automation-id={`credit-card-tile-expires-${this.props.index}`}>
            {this._expires()}
          </span>
        </div>
      );
    }
    return null;
  }

  _renderActions() {
    const {tealeafIds} = this.props;
    const editClasses = classNames({last: !this.props.onDelete}, "cc-edit-action");
    return (
      <div className="credit-card-actions">
        {this.props.onEdit && this._isEditable() &&
        <Button
          fakelink
          onClick={() => this.props.onEdit()}
          automationId={`edit-credit-card-${this.props.index}`}
          tealeafId={`${tealeafIds.edit}${this.props.index}`}
          className={editClasses}>{i18n(tokens.edit)}</Button>}
        {this.props.onDelete &&
        <Button
          fakelink
          automationId={`delete-credit-card-${this.props.index}`}
          tealeafId={`${tealeafIds.delete}${this.props.index}`}
          onClick={() => this._toggleDeleteMode()}
          className="last cc-delete-action" >{i18n(tokens.delete)}</Button>}
      </div>
    );
  }

  _deleteConfirmation() {
    const {tealeafIds} = this.props;
    return (
      <div className={classNames("credit-card", this.props.className)}>
        <div className="confirm-delete">
          <Heading.H5>{i18n(tokens.deleteCardConfirmation)}</Heading.H5>
          {this._renderCardBody()}
          <div className="credit-card-full-actions">
            <Button
              automationId={`submit-delete-credit-card-${this.props.index}`}
              tealeafId={`${tealeafIds.deleteConfirmDelete}${this.props.index}`}
              onClick={() => this._delete()}
              ref={(ref) => { this._confirmDelete = ref; }}
              className="cc-confirm-delete">{i18n(tokens.delete)}</Button>
            <Button
              fakelink
              automationId={`cancel-delete-credit-card-${this.props.index}`}
              tealeafId={`${tealeafIds.deleteConfirmCancel}${this.props.index}`}
              onClick={() => this._toggleDeleteMode()}
              className="cc-cancel-delete">{i18n(tokens.cancel)}</Button>
          </div>
        </div>
      </div>
    );
  }

  _viewMode() {
    const changing = this.props.loading || this.props.deleting;
    const classes = {"is-expired": this._hasExpiryDate() && this._isExpired()};
    return (
      <div
        className={classNames("credit-card", classes, this.props.className)}>
        {this.props.deleting && <Spinner loading/>}
        <div className="card-body">
          {this._renderCardBody()}
          {this.props.children}
          {!changing && this._renderActions()}
        </div>
      </div>
    );
  }

  render() {
    return this.props.deleteMode ?
      this._deleteConfirmation() :
      this._viewMode();
  }
}

CreditCard.supportedCardTypes = Object.keys(cards);

CreditCard.propTypes = {
  index: React.PropTypes.number.isRequired,
  // note: duplicated to work properly with electrode-docgen
  cardType: React.PropTypes.oneOf([
    "WMUSGESTORECARD", "WMMASTERCARD", "MASTERCARD", "VISA", "AMEX", "DISCOVER"
  ]).isRequired,
  isTemp: React.PropTypes.bool,
  cardExpiryDate: React.PropTypes.string.isRequired,
  lastFour: React.PropTypes.string.isRequired,
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
  onDeleteModeChanged: React.PropTypes.func,
  /** when set, the delete action will be enabled*/
  onDelete: React.PropTypes.func,
  /** when set, the edit action will be enabled*/
  onEdit: React.PropTypes.func,
  className: React.PropTypes.string,
  loading: React.PropTypes.bool,
  deleting: React.PropTypes.bool,
  deleteMode: React.PropTypes.bool,
  tealeafIds: React.PropTypes.shape({
    edit: React.PropTypes.string,
    delete: React.PropTypes.string,
    deleteConfirmDelete: React.PropTypes.string,
    deleteConfirmCancel: React.PropTypes.string
  }),
  children: React.PropTypes.node,
  showExpiredLabel: React.PropTypes.bool
};

CreditCard.defaultProps = {
  deleteMode: false,
  tealeafIds: {
    edit: "edit",
    delete: "delete",
    deleteConfirmDelete: "confirm-delete",
    deleteConfirmCancel: "confirm-cancel"
  }
};

export default CreditCard;
