import React from "react";
import classNames from "classnames";
import Layout from "@walmart/wmreact-layout/lib/components/layout";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import Spinner from "@walmart/wmreact-containers/lib/components/spinner";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import AddGiftCard from "./add-gift-card";
import GiftCard from "./gift-card";
import GiftCardForm from "./gift-card-form";

const MaxCardTile = () => {
  return (
    <div className="gift-card" data-automation-id="max-cards-reached-tile">
      <div className="card-body">
        <Heading.H5 className="no-margin">Want to add another gift card?</Heading.H5>
        <div className="max-gift-cards-description copy-small">
          You've reached the maximum number of saved gift cards.
          To add a new card, delete a card you're no longer using.
        </div>
      </div>
    </div>
  );
};

class GiftCards extends React.Component {

  _createOnDelete(card) {
    return this.props.onDelete && this.props.onDelete.bind(null, {id: card.id});
  }

  _createFetchCardHistory(card) {
    return this.props.onFetchCardHistory &&
      this.props.onFetchCardHistory.bind(null, {id: card.id});
  }

  _save(data) {
    this.props.onAdd(data);
  }

  _renderCard(card, index) {
    const {
      tealeafIds,
      loadedHistoryCardId,
      cardProps,
      cardInDeleteMode,
      onRequestDeleteMode
      } = this.props;

    const GiftCardComponent = this.props.tile || GiftCard;
    return (
      <div key={index} className="padded-card">
        <GiftCardComponent
          index={index}
          deleteMode={cardInDeleteMode === card.id}
          historyLoaded={loadedHistoryCardId === card.id}
          onDelete={this._createOnDelete(card)}
          onRequestDeleteMode={(deleteMode) => onRequestDeleteMode({id: card.id, deleteMode})}
          onFetchCardHistory={this._createFetchCardHistory(card)}
          onShowGiftCardHistory={this.props.onShowGiftCardHistory}
          tealeafIndex={index}
          tealeafIds={tealeafIds.card}
          {...card}
          {...cardProps}
        />
      </div>
    );
  }

  renderLastTile() {
    const {onAdd, showAddForm, onRequestAdd, tealeafIds, addTile, cards} = this.props;
    const AddTile = addTile || (cards.length > 4 ? MaxCardTile : AddGiftCard);

    if (onAdd) {
      return (
        <div key="last" className={classNames("padded-card", {"add-new-card": showAddForm})}>
          <AddTile onClick={() => onRequestAdd(true)} tealeafId={tealeafIds.addCard}/>
        </div>
      );
    } else {
      return null;
    }
  }

  renderSpinner() {
    const {initSpinner, fetchInitialData} = this.props;
    return initSpinner || <Spinner fixed={ fetchInitialData } loading/>;
  }

  renderForm(noCards) {
    const {
      adding,
      error,
      onRequestAdd,
      tealeafIds,
      addFormProps,
      floatingLabels,
      scrollFormIntoViewOnMount
    } = this.props;

    return (
      <GiftCardForm
        loading={adding}
        isInitial={noCards}
        onSave={(formData) => this._save(formData)}
        onCancel={() => onRequestAdd(false)}
        error={error}
        floatingLabels={floatingLabels}
        tealeafIds={tealeafIds.form}
        scrollIntoViewOnMount={scrollFormIntoViewOnMount}
        {...addFormProps}
      />
    );
  }

  renderError() {
    const {error, showAddForm, cards} = this.props;
    // Render error on top if the form is not open, else let the form render
    // the erorr inside the form, see renderForm().
    if (error && !showAddForm && cards && cards.length) {
      return (
        <Alert {...error} isBlock className="js-alert-message"/>
      );
    } else {
      return null;
    }
  }

  showAddForm() {
    const {cards, showAddForm, adding} = this.props;
    return !cards || cards && cards.length === 0 || showAddForm || adding;
  }

  renderPage() {
    const {cards, renderHeader, fullWidth} = this.props;
    const layoutOverrides = fullWidth ? {large: 4, medium: 3} : {};
    const hasCards = (cards && cards.length);
    return (
      <div className={classNames("gift-card-wrapper-inner", {"no-cards": !hasCards})}>
        {renderHeader && renderHeader(cards && cards.length > 0)}
        {this.renderError()}
        <Layout large={3} small={2} x-small={1} {...layoutOverrides} className="gift-card-wrapper">
          {cards && cards.map((c, index) => this._renderCard(c, index))}
          {cards && cards.length > 0 && this.renderLastTile()}
        </Layout>
        {this.showAddForm() && this.renderForm(!hasCards)}
      </div>
    );
  }

  render() {
    const {fetchInitialData} = this.props;
    return (
      <div className="gift-cards-wrapper" data-view-name="giftcard">
        {fetchInitialData && this.renderSpinner()}
        {!fetchInitialData && this.renderPage()}
      </div>
    );
  }
}


GiftCards.propTypes = {
  error: React.PropTypes.shape({
    message: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(["warn", "error"])
  }),
  cards: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string
  })),
  addTile: React.PropTypes.node,
  initSpinner: React.PropTypes.node,
  tile: React.PropTypes.node,
  onAdd: React.PropTypes.func,
  onDelete: React.PropTypes.func,
  onRequestAdd: React.PropTypes.func.isRequired,
  onFetchCardHistory: React.PropTypes.func,
  onShowGiftCardHistory: React.PropTypes.func.isRequired,
  cardInDeleteMode: React.PropTypes.string,
  loadedHistoryCardId: React.PropTypes.string,
  showAddForm: React.PropTypes.bool,
  renderHeader: React.PropTypes.func,
  adding: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  fullWidth: React.PropTypes.bool,
  fetchInitialData: React.PropTypes.bool,
  onRequestDeleteMode: React.PropTypes.func,
  tealeafIds: React.PropTypes.shape({
    card: React.PropTypes.object,
    addCard: React.PropTypes.string,
    form: React.PropTypes.object
  }),
  cardProps: React.PropTypes.shape({
    lastFourLabel: React.PropTypes.node,
    deleteMsg: React.PropTypes.string
  }),
  addFormProps: React.PropTypes.shape({
    showNickName: React.PropTypes.bool,
    saveBtnPrimary: React.PropTypes.bool,
    showActionsLeft: React.PropTypes.bool,
    saveGiftCardActionLabel: React.PropTypes.string
  }),
  floatingLabels: React.PropTypes.bool,
  scrollFormIntoViewOnMount: React.PropTypes.bool
};

GiftCards.defaultProps = {
  tealeafIds: {},
  addFormProps: {}
};

export default GiftCards;
