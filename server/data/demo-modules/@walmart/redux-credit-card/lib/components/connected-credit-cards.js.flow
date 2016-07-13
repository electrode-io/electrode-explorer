import React from "react";
import {connect} from "react-redux";
import {CreditCards} from "@walmart/wmreact-credit-card";
import {
  getCards, addCard, editCard, deleteCard, requestEditCard,
  requestClearErrors, setTruncate, changeDeleteMode, validationError
} from "../redux/action-creators/credit-cards";

class ConnectedCreditCards extends React.Component {
  componentWillMount() {
    this.props.getCards();
  }

  render() {
    return <CreditCards {...this.props} />;
  }
}

ConnectedCreditCards.propTypes = {
  getCards: React.PropTypes.func.isRequired
};

export default connect(
  ({creditCards}, {truncate}) => ({...creditCards, truncate: creditCards.truncate && !!truncate}),
  (dispatch, props) => ({
    onAdd: (card) => dispatch(addCard(card)),
    onValidationChange: (cardInfo) => dispatch(validationError(cardInfo)),
    onEdit: (cardInfo) => dispatch(editCard(cardInfo)),
    onDeleteModeChange: (cardInfo) => dispatch(changeDeleteMode(cardInfo)),
    onDelete: (idObj) => dispatch(deleteCard(idObj)),
    onRequestEdit: (id) => dispatch(requestEditCard(id)),
    onRequestClearErrors: (id) => dispatch(requestClearErrors(id)),
    onShowAllCards: props.truncate
      ? () => dispatch(setTruncate(false))
      : undefined,
    getCards: props.fetchInitialData
      ? () => dispatch(getCards())
      : () => null
  })
)(ConnectedCreditCards);
