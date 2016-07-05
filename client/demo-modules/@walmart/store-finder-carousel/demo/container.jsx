import { connect } from "react-redux";

import { StoreFinderCarousel } from "../src/index";
import {
  updateZip,
  updateCurrentStore,
  toggleVisibility,
  toggleZipSearching,
  fetchStores
} from "./actions";

const mapStateToProps = (state) => {
  return {
    stores: state.stores,
    zip: state.zip,
    currentStore: state.currentStore,
    loading: state.loading,
    isVisible: state.isVisible,
    isSearchingForZip: state.isSearchingForZip
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onZipChange: (zip) => {
      dispatch(updateZip(zip));
      dispatch(toggleZipSearching());
    },
    onChange: (id) => {
      dispatch(updateCurrentStore(id));
    },
    toggleVisibility: () => {
      dispatch(toggleVisibility());
    },
    onMount: () => {
      dispatch(fetchStores());
    },
    toggleSearching: () => {
      dispatch(toggleZipSearching());
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreFinderCarousel);

export default Container;
