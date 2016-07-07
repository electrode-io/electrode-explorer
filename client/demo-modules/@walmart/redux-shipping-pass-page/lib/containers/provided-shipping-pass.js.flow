import React from "react";
import { Provider } from "react-redux";
import ConnectedShippingPass from "./connected-shipping-pass";
import createStore from "../redux/index";

class ProvidedShippingPass extends React.Component {
  constructor(props) {
    super();
    this._store = props.store || createStore();
  }

  render() {
    return (
      <Provider store={this._store}>
        <ConnectedShippingPass { ...this.props }/>
      </Provider>
    );
  }
}

ProvidedShippingPass.propTypes = {
  store: React.PropTypes.object
};

export default ProvidedShippingPass;
