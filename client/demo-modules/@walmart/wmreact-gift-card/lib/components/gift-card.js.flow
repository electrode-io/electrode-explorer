import React from "react";
import classNames from "classnames";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Image from "@walmart/wmreact-base/lib/components/image";
import Stack from "@walmart/wmreact-layout/lib/components/stack";
import Spinner from "@walmart/wmreact-containers/lib/components/spinner";
import Modal from "@walmart/wmreact-containers/lib/components/modal";
import Price from "@walmart/wmreact-product-offers/lib/components/price/price-base";
import HistoryDetails from "./history-details";

class GiftCard extends React.Component {
  componentDidUpdate({historyLoaded}) {
    if (!historyLoaded && this.props.historyLoaded) {
      this.refs.modal.show();
      this.props.onShowGiftCardHistory();
    }
  }

  _toggleDeleteMode() {
    const {onDeleteModeChanged, onRequestDeleteMode} = this.props;

    onDeleteModeChanged(!this.props.deleteMode);
    onRequestDeleteMode(!this.props.deleteMode);
  }

  _delete() {
    this.props.onDelete();
  }

  _hasHistory() {
    return (this.props.history && this.props.history.length > 0);
  }

  renderHistoryModal() {
    return (this._hasHistory()) && (
        <Modal ref="modal" fixed className="history-modal-gc">
          <HistoryDetails {...this.props} onClose={() => {
            this.refs.modal.hide();
          }}/>
        </Modal>
      );
  }

  _renderCommonInformation() {
    return (
      <div>
        <div
          className="gift-card-fullname"
          data-automation-id={`gift-card-fullname-${this.props.index}`}>
          {this.props.label}
        </div>
        <div
          className="gift-card-last-four"
          data-automation-id={`gift-card-last-four-label-${this.props.index}`}>
              Gift card ending<br/>
                  <span>in </span>
          <span
            className="font-semibold"
            data-automation-id={`gift-card-last-four-${this.props.index}`}>
              {this.props.lastFour}
          </span>
        </div>
      </div>
    );
  }

  _deleteConfirmation() {
    const {tealeafIds, tealeafIndex, loading} = this.props;
    const className = classNames(
      "gift-card js-gift-card-tile confirm-delete",
      this.props.className);

    return (
      <div className={className}>
          Are you sure you want to delete this gift card?
        {this._renderCommonInformation()}
        {this._renderBalance()}
        <div className="gift-card-actions">
          <Button
            disabled={loading}
            spinner={loading}
            mini
            automationId={`submit-delete-gift-card-${this.props.index}`}
            tealeafId={`${tealeafIds.deleteConfirmDelete}${tealeafIndex}`}
            onClick={() => this._delete()}
            ref="confirm-delete">
            Delete
          </Button>
          <Button
            fakelink
            disabled={loading}
            automationId={`cancel-delete-gift-card-${this.props.index}`}
            tealeafId={`${tealeafIds.deleteConfirmCancel}${tealeafIndex}`}
            onClick={() => this._toggleDeleteMode()}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  _renderActions() {
    const {tealeafIds, tealeafIndex} = this.props;
    return (
      <div className="pull-right m-margin-top">
        {this.props.onDelete &&
          <Button
            fakelink
            automationId={`delete-gift-card-${this.props.index}`}
            tealeafId={`${tealeafIds.delete}${tealeafIndex}`}
            onClick={() => this._toggleDeleteMode()}
            ref="delete-action">
            Delete
          </Button>
        }
      </div>
    );
  }

  _renderBalance() {
    return (
      <div
        data-automation-id={`gift-card-balance-label-${this.props.index}`}
        className={classNames({"zero-balance": this.props.balance === 0})}>
          <span>Balance </span>
        <Price price={this.props.balance}
          className="balance"
          data-automation-id={`gift-card-balance-${this.props.index}`}/>
      </div>
    );
  }

  _showModal() {
    if (!this._hasHistory()) {
      this.props.onFetchCardHistory();
    } else {
      this.refs.modal.show();
    }
  }

  _viewMode() {
    /*eslint-disable max-len*/
    const imgUri = "//i5.walmartimages.com/dfw/63fd9f59-1dc2/k2-_11ab371b-85f0-4439-a979-9d401ed07429.v1.png";
    const {onFetchCardHistory, loading} = this.props;
    /*eslint-enable max-len*/
    return (
      <div className={classNames("gift-card js-gift-card-tile", this.props.className)}>
        {loading && <Spinner loading/>}
        {this.renderHistoryModal()}
        <Image
          alt="Gift card"
          className="payment-option"
          src={imgUri}/>
        <div className="card-body">
          {this._renderCommonInformation()}
          {this.props.showBalance && this._renderBalance()}
          {this.props.children}
          <Stack>
            <Stack.Fill>{onFetchCardHistory && (
              <div className="gift-card-history">
                <Button
                  fakelink
                  automationId="open-gift-card-history"
                  onClick={() => this._showModal()}
                  ref="view-history">
                  View card history
                </Button>
              </div>
            )}</Stack.Fill>
            <Stack.Fit>{this._renderActions()}</Stack.Fit>
          </Stack>
        </div>
      </div>
    );
  }

  render() {
    return !this.props.loading && this.props.deleteMode ?
      this._deleteConfirmation() :
      this._viewMode();
  }
}

GiftCard.propTypes = {
  id: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  label: React.PropTypes.string.isRequired,
  lastFour: React.PropTypes.string.isRequired,
  balance: React.PropTypes.number.isRequired,
  currency: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  history: React.PropTypes.array,
  historyLoaded: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  onDelete: React.PropTypes.func,
  onFetchCardHistory: React.PropTypes.func,
  onShowGiftCardHistory: React.PropTypes.func.isRequired,
  /* deprecated, this state should be used from the reducer instead */
  onDeleteModeChanged: React.PropTypes.func,
  onRequestDeleteMode: React.PropTypes.func,
  showBalance: React.PropTypes.bool,
  tealeafIndex: React.PropTypes.number,
  tealeafIds: React.PropTypes.shape({
    delete: React.PropTypes.string,
    deleteConfirmDelete: React.PropTypes.string,
    deleteConfirmCancel: React.PropTypes.string
  }),
  deleteMode: React.PropTypes.bool,
  children: React.PropTypes.node
};

GiftCard.defaultProps = {
  tealeafIds: {
    delete: "delete",
    deleteConfirmDelete: "confirm-delete",
    deleteConfirmCancel: "confirm-cancel"
  },
  onDeleteModeChanged: () => {},
  onRequestDeleteMode: () => {},
  showBalance: true
};
export default GiftCard;
