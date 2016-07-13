import CancelModal from "./components/cancel-modal";
import InfoModal from "./components/info-modal";
import InfoWell from "./components/info-well";
import ShippingPassWell from "./components/shipping-pass-well";

import ConnectedShippingPass from "./containers/connected-shipping-pass";
import ProvidedShippingPass from "./containers/provided-shipping-pass";

import createStore from "./redux/index";
import rootReducer, { creditCardReducer, shippingPassReducer } from "./redux/reducers/index";
import actions from "./redux/types/actions";
import config from "./config";
import { config as creditCardConfig } from "@walmart/redux-credit-card";

import * as shippingPassActions from "./redux/action-creators/shipping-pass";

module.exports = {
  actions,
  CancelModal,
  config,
  ConnectedShippingPass,
  createStore,
  creditCardConfig,
  creditCardReducer,
  InfoModal,
  InfoWell,
  ProvidedShippingPass,
  rootReducer,
  shippingPassActions,
  shippingPassReducer,
  ShippingPassWell
};
