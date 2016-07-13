import React from "react";
import {Provider} from "react-redux";
import ConnectedCreditCards from "./connected-credit-cards";
import createStore from "../redux/index";

/**
 * This component is to be used if you are looking for a drop in credit-card solution
 * If you want to use your own provider, look into connected-credit-cards
 * All props you set, store excepted, will get sent on to connected-credit-cards
 */
class CreditCardWidget extends React.Component {
  constructor(props) {
    super();
    this._store = props.store || createStore();
  }

  render() {
    const {store, ...props} = this.props;
    return (
      <Provider store={this._store}>
        <ConnectedCreditCards {...props}/>
      </Provider>
    );
  }
}

CreditCardWidget.propTypes = {
  fetchInitialData: React.PropTypes.bool,
  /** if not set, the component will create its own store from redux/index */
  store: React.PropTypes.object
};

export default CreditCardWidget;
