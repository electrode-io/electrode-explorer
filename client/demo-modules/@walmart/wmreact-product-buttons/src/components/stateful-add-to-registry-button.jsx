/* @flow */
import React, { PropTypes, Component } from "react";
import StatelessAddToRegistryButton from "./add-to-registry-button";
import { connect } from "react-redux";
import get from "lodash/get";
import { canUseDOM } from "exenv";
import actions from "../actions/add-to-registry";
const {
  getSignInStatus,
  onAddToRegistryClicked,
  onRegistryPromptClose
} = actions;

class StatefulAddToRegistryButton extends Component {
  constructor(props: Object): void {
    super(props);
    if (canUseDOM) {
      props.onBootstrap(props);
    }
  }
  render() {
    const {onClick, onListItemSelected, serviceResponse, ...rest} = this.props;
    const listType = serviceResponse && serviceResponse.listType;
    return (<StatelessAddToRegistryButton
      onClick={() => onClick(this.props)}
      listType={listType}
      onListItemSelected={(type) => onListItemSelected(this.props, type)}
      {...rest}/>);
  }
}

StatefulAddToRegistryButton.displayName = "StatefulAddToRegistryButton";

StatefulAddToRegistryButton.propTypes = {
  /**
  Indicates if the user is logged in or not
  */
  isSignedIn: PropTypes.bool,
  /**
  Url used to fetch registries
  */
  fetchRegistriesUrl: PropTypes.string,
  /**
  Add to registry url
  */
  addToRegistryUrl: PropTypes.string,
  /**
  Sign in page url
  */
  signInUrl: PropTypes.string,
  /**
  Registry landing page url
  */
  registryPageUrl: PropTypes.string,
  /**
  Prop that describes the current state of the button
  */
  status: PropTypes.oneOf(["INITIALIZED", "LOADING", "PROMPT"]),
  /**
  List of items
  */
  listItems: PropTypes.arrayOf(PropTypes.shape({
    /**
    Type of list or registry
    */
    type: PropTypes.string.isRequired,
    /**
    Name of the list or registry
    */
    name: PropTypes.string.isRequired
  })),
  /**
  Callback to handle list or registry selection
  */
  onListItemSelected: PropTypes.func,
  /**
  Callback to handle onClick on Add to registry button
  */
  onClick: PropTypes.func.isRequired,
  /**
  Callback to handle close of prompt
  */
  onPromptClose: PropTypes.func.isRequired,
  /**
  The first action dispatched
  */
  onBootstrap: PropTypes.func,

  /**
  offer id of the item being added to registry
  */
  offerId: PropTypes.string.isRequired,
  /**
  price of the item being added to registry
  */
  price: PropTypes.string.isRequired,
  /**
  quantity of the item being added to registry
  */
  quantity: PropTypes.string.isRequired,
  /**
  This is used to trigger click event automatically
  */
  triggerClick: PropTypes.bool,
  /**
  Service response after successful add to registry
  */
  serviceResponse: PropTypes.object
};

export const mapStateToProps = (state) => {
  const {
    addToRegistry
  } = state;
  const selectedProductId = get(state, "product.selected.product", "");
  const offerId = get(state, `product.products[${selectedProductId}].offers[0]`);
  const offer = get(state, `product.offers[${offerId}]`, {});
  const quantity = get(offer, "quantity", 1);
  const price = get(offer, "pricesInfo.priceMap.CURRENT");
  const {
    isSignedIn,
    status,
    lists,
    serviceResponse
  } = addToRegistry;
  return {
    isSignedIn,
    status,
    offerId,
    price,
    quantity,
    listItems: lists,
    serviceResponse
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onBootstrap: (props) => {
      dispatch(getSignInStatus());
      if (props.triggerClick) {
        dispatch(onAddToRegistryClicked(props));
      }
    },
    onClick: (props) => {
      if (!props.isSignedIn) {
        window.location.href = props.signInUrl;
      } else {
        dispatch(onAddToRegistryClicked(props));
      }
    },
    onPromptClose: () => {
      dispatch(onRegistryPromptClose());
    },
    onListItemSelected: (props, type) => {
      actions.addToRegistry({ type, ...props }, dispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulAddToRegistryButton);
