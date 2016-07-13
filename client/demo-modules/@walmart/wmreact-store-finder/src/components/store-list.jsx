import React from "react";

import { Button } from "@walmart/wmreact-interactive";
import { RadioTile } from "@walmart/wmreact-forms";

import StoreAddress from "./store-address";

import AltContainer from "alt/AltContainer";

import StoreFinderActions from "../actions/store-finder";
import StoreFinderStore from "../stores/store-finder";

/**
@private
*/
const StoreListTiles = React.createClass({
  displayName: "StoreList.Tiles",

  propTypes: {
    column: React.PropTypes.number,
    flat: React.PropTypes.bool,
    groupName: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    rounded: React.PropTypes.bool,
    roundedBottom: React.PropTypes.bool,
    roundedTop: React.PropTypes.bool,
    selectedStore: React.PropTypes.object,
    stores: React.PropTypes.array,
    showAllStores: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      column: 0,
      flat: false,
      onClick() {},
      rounded: false,
      roundedBottom: false,
      roundedTop: false,
      showAllStores: false,
      stores: []
    };
  },

  render() {
    const self = this;
    const storeList = this.props.showAllStores ?
      this.props.stores : this.props.stores.slice(0, 3);

    return (
      <RadioTile groupName={this.props.groupName}>
        {
          storeList.map((store, index) => {
            return (
              <RadioTile.tile
                column={self.props.column}
                key={index}
                flat={self.props.flat}
                rounded={self.props.rounded}
                roundedTop={self.props.roundedTop}
                roundedBottom={self.props.roundedBottom}
                onClick={self.props.onClick.bind(null, store, "Pickup")}
                checked={self.props.selectedStore.id === store.id}>
                <StoreAddress
                  storeName={store.storeType.displayName}
                  phoneNumber={store.phone}
                  state={store.address.state}
                  city={store.address.city}
                  addressLine1={store.address.address1}
                  addressLine2={store.address.address2}
                  postalCode={store.address.postalCode}
                  storeNumber={store.id} />
              </RadioTile.tile>
            );
          })
        }
      </RadioTile>
    );
  }
});

/**
@private
*/
const StoreListWrapper = React.createClass({
  displayName: "StoreListWrapper",

  propTypes: {
    column: React.PropTypes.number,
    flat: React.PropTypes.bool,
    groupName: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    rounded: React.PropTypes.bool,
    roundedBottom: React.PropTypes.bool,
    roundedTop: React.PropTypes.bool,
    selectedStore: React.PropTypes.object,
    showAllStores: React.PropTypes.bool,
    stores: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      column: 0,
      flat: false,
      rounded: false,
      roundedBottom: false,
      roundedTop: false,
      showAllStores: false
    };
  },

  toggleShowAllStores() {
    StoreFinderActions.showAllStores(!this.props.showAllStores);
  },

  onClick(store) {
    if (this.props.onClick) {
      this.props.onClick(store);
    }
    StoreFinderActions.setStore(store);
  },

  renderList() {
    return (
      <StoreListTiles
        groupName={this.props.groupName}
        column={this.props.column}
        flat={this.props.flat}
        rounded={this.props.rounded}
        roundedTop={this.props.roundedTop}
        roundedBottom={this.props.roundedBottom}
        showAllStores={this.props.showAllStores}
        stores={this.props.stores}
        onClick={this.onClick}
        selectedStore={this.props.selectedStore} />
    );
  },

  renderShowLink() {
    return (this.props.showAllStores || this.props.stores.length === 0) ? null : (
      <div className="padding-sides padding-ends show-all-wrapper">
        <Button fakelink={true}
          onClick={this.toggleShowAllStores}>
          See all pickup options
        </Button>
      </div>
    );
  },

  render() {
    return (
      <div className="pickup-wrapper">
        {this.renderList()}
        {this.renderShowLink()}
      </div>
    );
  }
});

/**
@private
*/
const base = React.createClass({
  displayName: "StoreList",

  render() {
    return (
      <AltContainer store={StoreFinderStore}>
        <StoreListWrapper {... this.props}/>
      </AltContainer>
    );
  }
});

base.Tiles = StoreListTiles;
base.Wrapper = StoreListWrapper;

export default base;
