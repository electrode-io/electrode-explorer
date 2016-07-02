import React from "react";
import {connect} from "react-redux";
import {GiftCards} from "@walmart/wmreact-gift-card";
import {
  getCards,
  addCard,
  deleteCard,
  onRequestAddCard,
  fetchCardHistory,
  onShowGiftCardHistory,
  onRequestDeleteMode
} from "../redux/action-creators/gift-cards";

class ConnectedGiftCards extends React.Component {
  componentWillMount() {
    this.props.getCards();
  }

  render() {
    return <GiftCards {...this.props} />;
  }
}

ConnectedGiftCards.propTypes = {
  getCards: React.PropTypes.func
};

export default connect(
  ({giftCards}) => giftCards,
  (dispatch, {
    fetchInitialData,
    onDelete = deleteCard,
    onAdd = addCard,
    historyEnabled = true
  }) => ({
    onAdd: (card) => dispatch(onAdd(card)),
    onDelete: (idObj) => dispatch(onDelete(idObj)),
    onRequestDeleteMode: ({id, deleteMode}) => dispatch(onRequestDeleteMode({id, deleteMode})),
    onFetchCardHistory: (historyEnabled
      ? ((idObj) => dispatch(fetchCardHistory(idObj)))
      : undefined),
    onShowGiftCardHistory: (card) => dispatch(onShowGiftCardHistory(card)),
    onRequestAdd: (showAddForm) => dispatch(onRequestAddCard(showAddForm)),
    getCards: fetchInitialData
      ? () => dispatch(getCards())
      : () => null
  })
)(ConnectedGiftCards);
