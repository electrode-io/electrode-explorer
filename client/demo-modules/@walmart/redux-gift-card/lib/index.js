"use strict";

module.exports = {
  GiftCardsWidget: require("./components/gift-cards-widget").default,
  ConnectedGiftCards: require("./components/connected-gift-cards").default,
  createStore: require("./redux/index").default,
  reducer: require("./redux/reducers/gift-cards").default,
  actions: require("./redux/action-creators/gift-cards")
};