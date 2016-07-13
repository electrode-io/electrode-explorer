"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactContainers = require("@walmart/wmreact-containers");

var _wmreactInteractive = require("@walmart/wmreact-interactive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = function validate(val) {
  if (!val) {
    return false;
  }

  var isPostalNumber = /^[\d-]*$/.test(val);
  var isValidPostalcode = /(^\d{5}(\-\d{4})?$)/.test(val);
  var isCity = /^[a-zA-Z][a-zA-Z\s\-,]*$/.test(val);

  return isCity || isValidPostalcode && isPostalNumber;
};

var defaultState = {
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

var Store = function (_Component) {
  (0, _inherits3.default)(Store, _Component);

  function Store(props) {
    (0, _classCallCheck3.default)(this, Store);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    var selectedStores = props.selectedStores;


    var isOnlineOnly = selectedStores && selectedStores.length === 1 && selectedStores[0] === "-1";

    var isStoreAllSelected = selectedStores && selectedStores.length === 5 || false;

    _this.state = (0, _assign2.default)(defaultState, {
      selectedStores: selectedStores,
      isOnlineOnly: isOnlineOnly,
      isStoreAllSelected: isStoreAllSelected
    });
    return _this;
  }

  Store.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState({
      selectedStores: nextProps.selectedStores
    });
  };

  Store.prototype.fetchStoreLocation = function fetchStoreLocation(ev) {
    ev.preventDefault();

    var loc = this.refs.userLocation.value;
    var onFetchStores = this.props.onFetchStores;


    if (validate(loc)) {
      // fetching the stores with user input
      onFetchStores({ location: loc });

      this.setState(defaultState);
      this.refs.userLocation.value = null;
    } else {
      this.setState({
        isInvalidLocation: true,
        isLocationVisible: false
      });
    }
  };

  Store.prototype._onEnterPressed = function _onEnterPressed(e) {
    e.preventDefault();

    if (e.keyCode === 13) {
      this.fetchStoreLocation();
    }
  };

  Store.prototype._onToggleSelectedStore = function _onToggleSelectedStore(e) {
    var selectedStore = e.target.value;
    var selectedStores = this.state.selectedStores;
    var onFetchPreso = this.props.onFetchPreso;


    var storesArr = selectedStores;

    if (storesArr.indexOf(selectedStore) > -1) {
      storesArr.splice(storesArr.indexOf(selectedStore), 1);
    } else {
      storesArr.push(selectedStore);
    }

    this.setState({
      isStoreAllSelected: selectedStores.length === 5,
      selectedStores: storesArr,
      isOnlineOnly: false
    }, function () {
      onFetchPreso({
        isStoreAllSelected: selectedStores.length === 5,
        selectedStores: storesArr
      });
    });
  };

  Store.prototype._onToggleSelectedAllStore = function _onToggleSelectedAllStore() {
    var isStoreAllSelected = this.state.isStoreAllSelected;
    var _props = this.props;
    var nearbyStores = _props.nearbyStores;
    var onFetchPreso = _props.onFetchPreso;


    var storesArr = [];
    var state = {
      isOnlineOnly: false,
      isStoreAllSelected: !isStoreAllSelected
    };

    if (!isStoreAllSelected) {
      nearbyStores.forEach(function (val) {
        return storesArr.push("" + val.id);
      });
    }

    state.selectedStores = storesArr;

    this.setState(state, function () {
      onFetchPreso({
        isStoreAllSelected: !isStoreAllSelected,
        selectedStores: storesArr
      });
    });
  };

  Store.prototype._onToggleOnlineOnly = function _onToggleOnlineOnly() {
    var isOnlineOnly = this.state.isOnlineOnly;
    var onFetchPreso = this.props.onFetchPreso;

    this.setState({
      selectedStores: [],
      isStoreAllSelected: false,
      isOnlineOnly: !isOnlineOnly
    }, function () {
      onFetchPreso({
        isOnlineOnly: !isOnlineOnly
      });
    });
  };

  Store.prototype.setLocationVisible = function setLocationVisible(ev) {
    ev.preventDefault();
    this.setState({ isLocationVisible: !this.state.isLocationVisible });
  };

  Store.prototype._getStoreList = function _getStoreList() {
    var _this2 = this;

    var _state = this.state;
    var isOnlineOnly = _state.isOnlineOnly;
    var selectedStores = _state.selectedStores;
    var nearbyStores = this.props.nearbyStores;

    var storeList = [];

    if (nearbyStores && nearbyStores.length) {
      nearbyStores.forEach(function (val, index) {
        var isChecked = !isOnlineOnly && selectedStores.indexOf("" + val.id) > -1;

        storeList.push(_react2.default.createElement(
          "label",
          { className: "option option-small", key: index },
          _react2.default.createElement("input", {
            type: "checkbox",
            value: val.id,
            checked: isChecked,
            onChange: _this2._onToggleSelectedStore.bind(_this2)
          }),
          _react2.default.createElement(
            "div",
            { className: "option-content" },
            val.address.city,
            " - ",
            val.address.address1
          )
        ));
      }, this);
    }

    return storeList;
  };

  Store.prototype._getCurrentLocation = function _getCurrentLocation() {
    var locationJsx = void 0;
    var isLocationVisible = this.state.isLocationVisible;


    if (!isLocationVisible) {
      locationJsx = _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement(
          "span",
          { className: "store-zipcode" },
          this.props.location
        ),
        _react2.default.createElement(
          "a",
          { href: "#", onClick: this.setLocationVisible.bind(this) },
          "Edit"
        )
      );
    } else {
      locationJsx = _react2.default.createElement(
        "div",
        { className: "input-wrapper" },
        _react2.default.createElement("input", {
          type: "text",
          className: "form-control form-control-mini",
          ref: "userLocation",
          onKeyUp: this._onEnterPressed.bind(this)
        }),
        _react2.default.createElement(
          _wmreactInteractive.Button,
          { mini: true, onClick: this.fetchStoreLocation.bind(this) },
          "Go"
        )
      );
    }

    return locationJsx;
  };

  Store.prototype._getStoresScreen = function _getStoresScreen() {
    var _state2 = this.state;
    var isOnlineOnly = _state2.isOnlineOnly;
    var isStoreAllSelected = _state2.isStoreAllSelected;
    var isInvalidLocation = _state2.isInvalidLocation;


    var currentLocation = this._getCurrentLocation();
    var storeList = this._getStoreList();

    return _react2.default.createElement(
      "div",
      { className: "store-availability-content" },
      isInvalidLocation ? _react2.default.createElement(
        "span",
        { className: "error-message" },
        "Please enter a valid city, state or zip code."
      ) : null,
      _react2.default.createElement(
        "label",
        { className: "option option-small store-availability-editable" },
        _react2.default.createElement("input", {
          type: "checkbox",
          value: "all",
          checked: !isOnlineOnly && isStoreAllSelected,
          onChange: this._onToggleSelectedAllStore.bind(this)
        }),
        _react2.default.createElement(
          "div",
          { className: "option-content" },
          "Store availability near"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "store-location-display" },
        currentLocation
      ),
      _react2.default.createElement(
        "div",
        { className: "spinner-backdrop spinner-page-load hide-content" },
        _react2.default.createElement("div", { className: "spinner" })
      ),
      _react2.default.createElement(
        "div",
        { className: "block-list module" },
        storeList
      ),
      _react2.default.createElement(
        "label",
        { className: "option option-small store-show-online" },
        _react2.default.createElement("input", {
          type: "checkbox",
          value: "onlineonly",
          checked: isOnlineOnly,
          onChange: this._onToggleOnlineOnly.bind(this)
        }),
        _react2.default.createElement(
          "div",
          { className: "option-content" },
          "Show online only"
        )
      )
    );
  };

  Store.prototype._getWelcomeScreen = function _getWelcomeScreen() {
    var isInvalidLocation = this.state.isInvalidLocation;


    return _react2.default.createElement(
      "div",
      { className: "enter-zipcode" },
      _react2.default.createElement(
        "span",
        null,
        "Search your store by entering a zip code or your city or state."
      ),
      _react2.default.createElement(
        "form",
        null,
        _react2.default.createElement("input", {
          type: "text",
          className: "form-control form-control-mini",
          ref: "userLocation"
        }),
        _react2.default.createElement(
          _wmreactInteractive.Button,
          { mini: true, onClick: this.fetchStoreLocation.bind(this) },
          "Go"
        )
      ),
      isInvalidLocation ? _react2.default.createElement(
        "span",
        { className: "error-message" },
        "Please enter a valid city, state or zip code."
      ) : null
    );
  };

  Store.prototype.render = function render() {
    var location = this.props.location;


    return _react2.default.createElement(
      _wmreactContainers.Flyout,
      {
        trigger: _react2.default.createElement(
          _wmreactInteractive.Button,
          { dropdown: true },
          "Store availability"
        ),
        closeOnClickOut: true,
        direction: "bottom",
        size: location ? "extrawide" : "narrow" },
      _react2.default.createElement(
        "div",
        { className: "desktop-bar-store" },
        location ? this._getStoresScreen() : this._getWelcomeScreen()
      )
    );
  };

  return Store;
}(_react.Component);

exports.default = Store;


Store.displayName = "SearchUtilBarStoreAvailability";

Store.propTypes = {
  // location could be number or string
  location: _react.PropTypes.any,
  selectedStores: _react.PropTypes.array,
  nearbyStores: _react.PropTypes.array,
  onFetchStores: _react.PropTypes.func,
  onFetchPreso: _react.PropTypes.func
};