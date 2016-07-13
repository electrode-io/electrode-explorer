import { connect } from "react-redux";
/* eslint-disable max-len */
import StoreFinderCarousel from "@walmart/store-finder-carousel/lib/components/store-finder-carousel";
/* eslint-enable max-len */

import getStateKeys from "../reducers/state-keys";

import actions from "../actions/actions";

const mapStateToProps = (state, ownProps) => {

  const {
    STORES_KEY,
    CURRENT_STORE_KEY,
    ZIP_KEY,
    IS_LOADING_KEY,
    IS_VISIBLE_KEY,
    IS_SEARCHING_FOR_ZIP_KEY
  } = getStateKeys(ownProps.stateKeyOverrides);

  return {
    stores: state[STORES_KEY],
    zip: state[ZIP_KEY],
    currentStore: state[CURRENT_STORE_KEY],
    loading: state[IS_LOADING_KEY],
    isVisible: state[IS_VISIBLE_KEY],
    isSearchingForZip: state[IS_SEARCHING_FOR_ZIP_KEY]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onZipChange: (zip) => {
      dispatch(actions.updateZip(zip));
      dispatch(actions.toggleZipSearching());
    },
    onChange: (id) => dispatch(actions.updateCurrentStore(id)),
    toggleVisibility: () => dispatch(actions.toggleVisibility()),
    _buildOnMountHandler: (zip) => () => dispatch(actions.fetchStores(zip)),
    toggleSearching: () => dispatch(actions.toggleZipSearching())
  };
};

// Our `onMount` handler needs to know the current zip in order to fetch the correct
// stores. To that end, we use `mapDispatchToProps()._buildOnMountHandler` to build
// an `onMount` prop with a closure over `propsFromState.zip`:
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  const { _buildOnMountHandler, ...dispatchProps } = propsFromDispatch;
  const onMount = _buildOnMountHandler(propsFromState.zip);
  // ^ Note that we *don't* need the configured ZIP_KEY here, because `zip` is
  // hard-coded into `propsFromState` in `mapStateToProps`.

  return {
    ...ownProps,
    ...propsFromState,
    ...dispatchProps,
    ...{ onMount }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(StoreFinderCarousel);

export default Container;
