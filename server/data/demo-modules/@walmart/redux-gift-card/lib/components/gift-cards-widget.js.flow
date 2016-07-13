import React from "react";
import {Provider} from "react-redux";
import ConnectedGiftCards from "./connected-gift-cards";
import createStore from "../redux/index";

class GiftCardWidget extends React.Component {
  constructor(props) {
    super();
    this._store = props.store || createStore();
  }

  render() {
    return (
      <Provider store={this._store}>
        <ConnectedGiftCards {...this.props}/>
      </Provider>
    );
  }
}

GiftCardWidget.propTypes = {
  fetchInitialData: React.PropTypes.bool,
  store: React.PropTypes.object
};

GiftCardWidget.defaultProps = {
  fetchInitialData: true
};

export default GiftCardWidget;
