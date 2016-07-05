import React, {Component, PropTypes} from "react";

import {Flyout} from "@walmart/wmreact-containers";
import {Button} from "@walmart/wmreact-interactive";

const validate = function (val) {
  if (!val) {
    return false;
  }

  const isPostalNumber = (/^[\d-]*$/).test(val);
  const isValidPostalcode = (/(^\d{5}(\-\d{4})?$)/).test(val);
  const isCity = (/^[a-zA-Z][a-zA-Z\s\-,]*$/).test(val);

  return isCity || (isValidPostalcode && isPostalNumber);
};

const defaultState = {
  isInvalidLocation: false,
  isLocationVisible: false
};

/**
 The Store component flyout.
 For example this is how we use this component.
 ```jsx
 <Store
  nearbyStores={nearbyStores}
  selectedStores={["5435", "2486", "5884"]}
  location={location}
  onFetchStores={(location)=>{console.log(location)}}
  onFetchPreso={(event)=>{console.log(event)}}
 />
 ```
 @import {Store}
 @component Store
 @playground
 Search-Util-Bar-Store
 ```
 <Store
  nearbyStores={nearbyStores}
  selectedStores={["5435", "2486", "5884"]}
  location={location}
  onFetchStores={(location)=>{console.log(location)}}
  onFetchPreso={(event)=>{console.log(event)}}
  />
 ```
 */

export default class Store extends Component {
  constructor(props) {
    super(props);

    const {selectedStores} = props;

    const isOnlineOnly = selectedStores &&
      selectedStores.length === 1 && selectedStores[0] === "-1";

    const isStoreAllSelected = selectedStores &&
      selectedStores.length === 5 || false;

    this.state = Object.assign(defaultState, {
      selectedStores,
      isOnlineOnly,
      isStoreAllSelected
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedStores: nextProps.selectedStores
    });
  }

  fetchStoreLocation(ev) {
    ev.preventDefault();

    const loc = this.refs.userLocation.value;
    const {onFetchStores} = this.props;

    if (validate(loc)) {
      // fetching the stores with user input
      onFetchStores({location: loc});

      this.setState(defaultState);
      this.refs.userLocation.value = null;
    } else {
      this.setState({
        isInvalidLocation: true,
        isLocationVisible: false
      });
    }
  }

  _onEnterPressed(e) {
    e.preventDefault();

    if (e.keyCode === 13) {
      this.fetchStoreLocation();
    }
  }

  _onToggleSelectedStore(e) {
    const selectedStore = e.target.value;
    const {selectedStores} = this.state;
    const {onFetchPreso} = this.props;

    const storesArr = selectedStores;

    if (storesArr.indexOf(selectedStore) > -1) {
      storesArr.splice(storesArr.indexOf(selectedStore), 1);
    } else {
      storesArr.push(selectedStore);
    }

    this.setState({
      isStoreAllSelected: selectedStores.length === 5,
      selectedStores: storesArr,
      isOnlineOnly: false
    }, () => {
      onFetchPreso({
        isStoreAllSelected: selectedStores.length === 5,
        selectedStores: storesArr
      });
    });
  }

  _onToggleSelectedAllStore() {
    const {isStoreAllSelected} = this.state;
    const {nearbyStores, onFetchPreso} = this.props;

    const storesArr = [];
    const state = {
      isOnlineOnly: false,
      isStoreAllSelected: !isStoreAllSelected
    };

    if (!isStoreAllSelected) {
      nearbyStores.forEach((val) => storesArr.push(`${val.id}`));
    }

    state.selectedStores = storesArr;

    this.setState(state, () => {
      onFetchPreso({
        isStoreAllSelected: !isStoreAllSelected,
        selectedStores: storesArr
      });
    });
  }

  _onToggleOnlineOnly() {
    const {isOnlineOnly} = this.state;
    const {onFetchPreso} = this.props;
    this.setState({
      selectedStores: [],
      isStoreAllSelected: false,
      isOnlineOnly: !isOnlineOnly
    }, () => {
      onFetchPreso({
        isOnlineOnly: !isOnlineOnly
      });
    });
  }

  setLocationVisible(ev) {
    ev.preventDefault();
    this.setState({isLocationVisible: !this.state.isLocationVisible});
  }

  _getStoreList() {
    const {isOnlineOnly, selectedStores} = this.state;
    const {nearbyStores} = this.props;
    const storeList = [];

    if (nearbyStores && nearbyStores.length) {
      nearbyStores.forEach((val, index) => {
        const isChecked = !isOnlineOnly && selectedStores.indexOf(`${val.id}`) > -1;

        storeList.push(
          <label className="option option-small" key={index}>
            <input
              type="checkbox"
              value={val.id}
              checked={isChecked}
              onChange={this._onToggleSelectedStore.bind(this)}
              />
            <div className="option-content">
              {val.address.city} - {val.address.address1}
            </div>
          </label>
        );
      }, this);
    }

    return storeList;
  }

  _getCurrentLocation() {
    let locationJsx;
    const {isLocationVisible} = this.state;

    if (!isLocationVisible) {
      locationJsx = (
        <span>
          <span className="store-zipcode">{this.props.location}</span>
          <a href="#" onClick={this.setLocationVisible.bind(this)}>Edit</a>
        </span>
      );
    } else {
      locationJsx = (
        <div className="input-wrapper">
          <input
            type="text"
            className="form-control form-control-mini"
            ref="userLocation"
            onKeyUp={this._onEnterPressed.bind(this)}
            />
          <Button mini={true} onClick={this.fetchStoreLocation.bind(this)}>Go</Button>
        </div>
      );
    }

    return locationJsx;
  }

  _getStoresScreen() {
    const {isOnlineOnly, isStoreAllSelected, isInvalidLocation} = this.state;

    const currentLocation = this._getCurrentLocation();
    const storeList = this._getStoreList();

    return (
      <div className="store-availability-content">
        {isInvalidLocation ?
          <span className="error-message">
            Please enter a valid city, state or zip code.
          </span> : null}
        <label className="option option-small store-availability-editable">
          <input
            type="checkbox"
            value="all"
            checked={!isOnlineOnly && isStoreAllSelected}
            onChange={this._onToggleSelectedAllStore.bind(this)}
            />
          <div className="option-content">
            Store availability near
          </div>
        </label>

        <div className="store-location-display">
          {currentLocation}
        </div>

        <div className="spinner-backdrop spinner-page-load hide-content">
          <div className="spinner"></div>
        </div>

        <div className="block-list module">
          {storeList}
        </div>

        <label className="option option-small store-show-online">
          <input
            type="checkbox"
            value="onlineonly"
            checked={isOnlineOnly}
            onChange={this._onToggleOnlineOnly.bind(this)}
            />
          <div className="option-content">
            Show online only
          </div>
        </label>
      </div>
    );
  }

  _getWelcomeScreen() {
    const {isInvalidLocation} = this.state;

    return (
      <div className="enter-zipcode">
        <span>Search your store by entering a zip code or your city or state.</span>
        <form>
          <input
            type="text"
            className="form-control form-control-mini"
            ref="userLocation"
            />
          <Button mini={true} onClick={this.fetchStoreLocation.bind(this)}>Go</Button>
        </form>
        {isInvalidLocation ?
          <span className="error-message">Please enter a valid city, state or zip code.</span>
          : null}
      </div>
    );
  }

  render() {
    const {location} = this.props;

    return (
      <Flyout
        trigger={<Button dropdown={true}>Store availability</Button>}
        closeOnClickOut={true}
        direction="bottom"
        size={location ? "extrawide" : "narrow"}>
        <div className="desktop-bar-store">
          {location ? this._getStoresScreen() : this._getWelcomeScreen()}
        </div>
      </Flyout>
    );
  }
}

Store.displayName = "SearchUtilBarStoreAvailability";

Store.propTypes = {
  // location could be number or string
  location: PropTypes.any,
  selectedStores: PropTypes.array,
  nearbyStores: PropTypes.array,
  onFetchStores: PropTypes.func,
  onFetchPreso: PropTypes.func
};
