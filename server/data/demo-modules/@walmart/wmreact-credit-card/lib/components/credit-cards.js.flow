import React from "react";
import AddCreditCard from "./internals/add-credit-card";
import CreditCard from "./credit-card";
import CreditCardForm from "./credit-card-form";
import Layout from "@walmart/wmreact-layout/lib/components/layout";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import errorCodes from "../error-codes.json";
import Spinner from "@walmart/wmreact-containers/lib/components/spinner";
import AlertErrors from "./alert-errors";
import classNames from "classnames";
/**
 A component listing credit cards.

 Here is a simple example:

 ```jsx
 <CreditCards cards = {[{
    lastFour:"1111",
    firstName:"John",
    lastName:"Snow",
    cardExpiryDate:"2020-07-15",
    cardType:"AMEX",
    id:"1",
    addressLineOne: "860 w california ave",
    city: "sunnyvale",
    state: "CA",
    postalCode: "94086",
    phone: "8123823828"
  }]} onAdd={(card) => {}} onEdit={({id,card}) => {}} onDelete={({id}) => {}} />
 ```
 @component CreditCards
 @import {CreditCards}
 @playground
 CreditCards
 ```
 <CreditCards cards = {[{
    lastFour:"1111",
    firstName:"John",
    lastName:"Snow",
    cardExpiryDate:"2020-07-15",
    cardType:"AMEX",
    id:"1",
    addressLineOne: "860 w california ave",
    city: "sunnyvale",
    state: "CA",
    postalCode: "94086",
    phone: "8123823828"
  }]} onAdd={(card) => console.log(card)}
 onEdit={({id,card}) => console.log(card)}
 onDelete={({id}) => console.log(id)} />
 ```
 */
class CreditCards extends React.Component {
  _createOnAdd() {
    if (this.props.onAdd && this.props.onRequestEdit) {
      return () => this.props.onRequestEdit("new");
    }
  }

  _createOnEdit(card) {
    if (this.props.onEdit && this.props.onRequestEdit) {
      return () => this.props.onRequestEdit(card.id);
    }
  }

  _createOnDelete(card) {
    return this.props.onDelete && this.props.onDelete.bind(null, {id: card.id});
  }

  _createOnDeleteModeChange(card, deleteMode) {
    return this.props.onDeleteModeChange
      && this.props.onDeleteModeChange({id: card.id, deleteMode});
  }

  _save(id, data) {
    return (id === "new") ? this.props.onAdd(data) : this.props.onEdit({id, patch: data});
  }

  _renderCard(card, index) {
    const {tealeafIds, cardInDeleteMode, showExpiredLabel} = this.props;
    const {delete: errors} = this.props.errors[card.id] || {};
    const Tile = this.props.tile || CreditCard;
    return this._editable(
      <Tile {...card}
        key={card.id}
        index={index}
        tealeafIds={tealeafIds.card}
        onEdit={this._createOnEdit(card)}
        onDeleteModeChanged={(deleteMode) => this._createOnDeleteModeChange(card, deleteMode)}
        deleteMode={cardInDeleteMode === card.id}
        onDelete={this._createOnDelete(card)}
        showExpiredLabel={showExpiredLabel}
        errors={errors}/>
      , {index, ...card});
  }

  _renderAdd() {
    const {tealeafIds} = this.props;
    const AddTile = this.props.addTile || AddCreditCard;
    return this._editable((
      <AddTile onAdd={this._createOnAdd()} tealeafId={tealeafIds.addCard}/>
    ), {id: "new", loading: this.props.adding, ...this.props.defaults});
  }

  _editable(component, data) {
    const {[errorCodes.avsInvalid]: avsInvalid, edit: errors} = this.props.errors[data.id] || {};
    const {cards, bypassAvs, tealeafIds, usePrimaryButtons, alertComponent} = this.props;
    return (
      <CreditCardForm {...data}
        cardNumberEditable={this.props.cardNumberEditable}
        floatingLabels={this.props.floatingLabels}
        key={data.index}
        tealeafIds={tealeafIds.form}
        addressForm={this.props.addressForm}
        onValidationChange={this.props.onValidationChange}
        isNew={data.id === "new"}
        isInitial={cards.length === 0}
        actions={this.props.formActions}
        isEditorActive={!!this.props.cardEdited}
        inEditMode={cards.length === 0 || data.id === this.props.cardEdited}
        onSave={(formData) => this._save(data.id, formData)}
        onCancel={() => this.props.onRequestEdit(null)}
        avsError={avsInvalid}
        bypassValidation={bypassAvs}
        errors={errors}
        primary={usePrimaryButtons}
        validationDate={this.props.validationDate}
        alertComponent={alertComponent}
        onRequestClearErrors={() => this.props.onRequestClearErrors(data.id)}>
        {cards.length > 0 && component}
      </CreditCardForm>
    );
  }

  render() {
    const errors = Object.assign({}, this.props.errors.delete, this.props.errors.fetch);
    const cardIds = this.props.cards.map((card) => card.id);
    const {fetchInitialData, initSpinner, loading, fullWidth} = this.props;
    const cards = this.props.cards
      .sort((cardA, cardB) => {
        if (cardA.isDefault !== cardB.isDefault) {
          return (!!cardB.isDefault - !!cardA.isDefault);
        }
        return cardIds.indexOf(cardA.id) - cardIds.indexOf(cardB.id);
      })
      .slice(0, this.props.truncate && this.props.onShowAllCards ? 5 : this.props.cards.length)
      .map((card, index) => this._renderCard(card, index));
    const noCards = cards.length === 0;
    const layoutOverrides = fullWidth ? {large: 4, medium: 3} : {};
    const wrapperClasses = {"no-cards": noCards, "full-width": fullWidth};

    return (
      <div className={classNames("credit-cards-wrapper", wrapperClasses)}>
        {!fetchInitialData && this.props.renderHeader && this.props.renderHeader(noCards)}
        {fetchInitialData && initSpinner || loading && <Spinner fixed={fetchInitialData} loading/>}
        {!fetchInitialData && <AlertErrors errorCodes={Object.keys(errors)}/>}
        {!fetchInitialData && <Layout
          large={3}
          small={2}
          x-small={1}
          {...layoutOverrides}
          className="credit-card-wrapper">
          {cards}
          {this.props.onAdd && this._renderAdd()}
        </Layout>}
        {!fetchInitialData && this.props.truncate
          && this.props.onShowAllCards && this.props.cards.length > 5
          ? (
            <Button
              automationId="show-hide-cc"
              fakelink
              className="see-more"
              onClick={this.props.onShowAllCards}
            >
              See all saved credit and debit cards
            </Button>
          )
          : null}
      </div>
    );
  }
}


CreditCards.propTypes = {
  /**
   contains all cards you wish to show
   */
  cards: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired
  })),
  /**
   when set, will enable adding new cards by showing the add-new tile
   */
  onAdd: React.PropTypes.func,
  /**
   when set, will enable the edit of the cards
   */
  onEdit: React.PropTypes.func,
  /**
   when set, will enable the delete button on the cards
   */
  onDelete: React.PropTypes.func,
  /** required when either add or edit is to be used */
  onRequestEdit: React.PropTypes.func,
  onDeleteModeChange: React.PropTypes.func,
  cardInDeleteMode: React.PropTypes.string,
  /** use in combination with onRequestEdit */
  cardEdited: React.PropTypes.string,
  /** errors in the form of {cardId: {error_name: "details"}} */
  errors: React.PropTypes.object,
  /** clear errors by id, onRequestClearErrors(cardId) */
  onRequestClearErrors: React.PropTypes.func,
  onValidationChange: React.PropTypes.func,
  cardNumberEditable: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  fetchInitialData: React.PropTypes.bool,
  renderHeader: React.PropTypes.func,
  adding: React.PropTypes.bool,
  initSpinner: React.PropTypes.node,
  validationDate: React.PropTypes.object,
  truncate: React.PropTypes.bool,
  onShowAllCards: React.PropTypes.func,
  /* default values to populate the add form with */
  defaults: React.PropTypes.object,
  bypassAvs: React.PropTypes.bool,
  tile: React.PropTypes.node,
  addTile: React.PropTypes.node,
  addressForm: React.PropTypes.func,
  alertComponent: React.PropTypes.func,
  fullWidth: React.PropTypes.bool,
  tealeafIds: React.PropTypes.shape({
    card: React.PropTypes.object,
    form: React.PropTypes.object,
    addCard: React.PropTypes.string
  }),
  formActions: React.PropTypes.func,
  usePrimaryButtons: React.PropTypes.bool,
  showExpiredLabel: React.PropTypes.bool,
  floatingLabels: React.PropTypes.bool
};

CreditCards.defaultProps = {
  tealeafIds: {},
  errors: {},
  truncate: false,
  usePrimaryButtons: true,
  defaults: {},
  bypassAvs: false,
  cards: []
};

export default CreditCards;
