/* @flow */
import React, { PropTypes, Component } from "react";
import StatelessAddToRegistryButton from "./add-to-registry-button";
import { connect } from "react-redux";
import ExecutionEnvironment from "exenv";
import actions from "../actions/add-to-registry";
const {
  getSignInStatus,
  onAddToRegistryClicked,
  onRegistryPromptClose,
  addToRegistry
} = actions;

class StatefulAddToRegistryButton extends Component {
  constructor(props: Object): void {
    super(props);
    if (ExecutionEnvironment.canUseDOM) {
      props.onBootstrap(props);
    }
  }
  render() {
    const {onClick, onListItemSelected, ...rest} = this.props;
    return (<StatelessAddToRegistryButton
      onClick={() => onClick(this.props)}
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
  triggerClick: PropTypes.bool
};

export const mapStateToProps = (state) => {
  return {...state};
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onBootstrap: (props) => {
      dispatch(getSignInStatus(props));
      if (props.triggerClick) {
        dispatch(onAddToRegistryClicked(props));
      }
    },
    onClick: (props) => {
      if (!props.isSignedIn) {
        window.location.href = props.signInUrl;
      }
      dispatch(onAddToRegistryClicked(props));
    },
    onPromptClose: () => {
      dispatch(onRegistryPromptClose());
    },
    onListItemSelected: (props, type) => {
      addToRegistry(props, type);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulAddToRegistryButton);
