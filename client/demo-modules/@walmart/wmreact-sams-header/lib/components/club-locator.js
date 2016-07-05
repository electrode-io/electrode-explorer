"use strict";

exports.__esModule = true;
exports.formatPosition = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _storeFinderPanel = require("./store-finder-panel");

var _storeFinderPanel2 = _interopRequireDefault(_storeFinderPanel);

var _clubResults = require("./club-results");

var _clubResults2 = _interopRequireDefault(_clubResults);

var _clubLocatorPopup = require("./club-locator-popup");

var _clubLocatorPopup2 = _interopRequireDefault(_clubLocatorPopup);

var _findAClub = require("./find-a-club");

var _findAClub2 = _interopRequireDefault(_findAClub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flyoutClubList = {
  maxHeight: 512
};

var ClubLocator = function (_Component) {
  (0, _inherits3.default)(ClubLocator, _Component);

  function ClubLocator(props) {
    (0, _classCallCheck3.default)(this, ClubLocator);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.onStoreFinderActive = props.onStoreFinderActive.bind(_this);
    _this.state = {
      showClubLocator: true,
      showFlyout: false,
      showFindAClub: false,
      showClubPopup: false,
      showClubList: false
    };
    _this.onStoreFinderActive({});
    return _this;
  }

  ClubLocator.prototype.extractLatLong = function extractLatLong(geo) {
    var _geo$coords = geo.coords;
    var latitude = _geo$coords.latitude;
    var longitude = _geo$coords.longitude;

    return {
      latitude: latitude,
      longitude: longitude
    };
  };

  ClubLocator.prototype.handleYourClubClick = function handleYourClubClick(e) {
    e.preventDefault();
    this.setState({
      showClubPopup: true,
      showFindAClub: false,
      showClubList: false
    });
  };

  ClubLocator.prototype.handleClosePopup = function handleClosePopup(e) {
    e.preventDefault();
    this.setState({
      showClubPopup: false
    });
  };

  ClubLocator.prototype.handleCloseFindAClub = function handleCloseFindAClub(e) {
    e.preventDefault();
    this.setState({
      showFindAClub: false
    });
  };

  ClubLocator.prototype.handleOpenClubList = function handleOpenClubList(e) {
    e.preventDefault();
    this.setState({
      showClubList: true
    });
  };

  ClubLocator.prototype.handleShowClubList = function handleShowClubList(e) {
    e.preventDefault();
    this.setState({
      showFindAClub: false,
      showClubList: true
    });
  };

  ClubLocator.prototype._renderClubListFlyout = function _renderClubListFlyout(nearbyStores, preferredStores) {
    return _react2.default.createElement(
      "div",
      { className: "fly" },
      _react2.default.createElement(
        _flyout2.default,
        {
          className: "header-GlobalEyebrowNav-flyout text-left",
          style: flyoutClubList,
          direction: "bottom",
          size: "extrawide",
          key: "123",
          hover: true,
          active: true },
        _react2.default.createElement(_storeFinderPanel2.default, {
          preferredStores: preferredStores,
          nearbyStores: nearbyStores,
          location: "San Bruno" })
      )
    );
  };

  ClubLocator.prototype._renderYourClubLocation = function _renderYourClubLocation() {
    var nearbyStores = [];
    var preferredStores = [];

    var stores = this.props.stores;


    if (stores) {
      nearbyStores = stores.nearbyStores;
      preferredStores = stores.preferredStores;
    }

    var clubLocations = null;
    if (preferredStores) {
      clubLocations = preferredStores[0].address.city.trim() + ",\n       " + preferredStores[0].address.state.trim();
    } else if (nearbyStores) {
      clubLocations = nearbyStores[0].address.city.trim() + ",\n       " + nearbyStores[0].address.state.trim();
    }

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "span",
        { className: "locator-title" },
        clubLocations
      )
    );
  };

  ClubLocator.prototype.showFindAClubFn = function showFindAClubFn(e) {
    e.preventDefault();
    this.setState({
      showFindAClub: true,
      showClubPopup: false
    });
  };

  ClubLocator.prototype.handleCloseClubList = function handleCloseClubList(e) {
    e.preventDefault();
    this.setState({
      showClubList: false
    });
  };

  ClubLocator.prototype._renderClubList = function _renderClubList() {
    var _props$stores = this.props.stores;
    var nearbyStores = _props$stores.nearbyStores;
    var singleLineAddr = _props$stores.singleLineAddr;


    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_clubResults2.default, {
        nearbyStores: nearbyStores,
        showClubList: this.state.showClubList,
        singleLineAddr: singleLineAddr,
        close: this.handleCloseClubList.bind(this)
      })
    );
  };

  ClubLocator.prototype._renderShowClubPopup = function _renderShowClubPopup(nearbyStores) {
    var nearestStore = nearbyStores[0];
    return _react2.default.createElement(
      "div",
      null,
      (0, _clubLocatorPopup2.default)({
        onShowClubClick: this.showFindAClubFn.bind(this),
        close: this.handleClosePopup.bind(this),
        clubName: nearestStore.displayName,
        clubAddress: nearestStore.address.address1
      })
    );
  };

  ClubLocator.prototype._renderClubLocator = function _renderClubLocator() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "a",
        { href: "#", onClick: this.handleYourClubClick.bind(this) },
        _react2.default.createElement(
          "span",
          { className: "locator-title" },
          "Your club"
        )
      ),
      this._renderYourClubLocation()
    );
  };

  ClubLocator.prototype._renderFindAClub = function _renderFindAClub(nearbyStores) {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_findAClub2.default, {
        nearbyStores: nearbyStores,
        onStoreFinderActive: this.onStoreFinderActive,
        close: this.handleCloseFindAClub.bind(this),
        openClubList: this.handleOpenClubList.bind(this)
      })
    );
  };

  ClubLocator.prototype.showFlyoutState = function showFlyoutState() {
    if (this.props.isUserLoggedIn) {
      this.setState({ showFlyout: true });
    }
  };

  ClubLocator.prototype.render = function render() {
    var nearbyStores = [];
    var preferredStores = null;

    var stores = this.props.stores;


    if (stores) {
      nearbyStores = stores.nearbyStores;
      preferredStores = stores.preferredStores;
    }

    return _react2.default.createElement(
      "div",
      { className: "sams-club-locator", onMouseOver: this.showFlyoutState.bind(this) },
      this.state.showClubLocator && this._renderClubLocator(),
      this.state.showClubPopup && this._renderShowClubPopup(preferredStores || nearbyStores),
      this.state.showFindAClub && this._renderFindAClub(nearbyStores),
      this.state.showClubList && this._renderClubList(),
      this.state.showFlyout ? this._renderClubListFlyout(nearbyStores, preferredStores) : null
    );
  };

  return ClubLocator;
}(_react.Component);

ClubLocator.propTypes = {
  type: _react.PropTypes.string,
  moduleId: _react.PropTypes.string,
  submitting: _react.PropTypes.bool,
  configs: _react.PropTypes.shape({ options: _react.PropTypes.array.isRequired }),
  //Releaf
  tealeaf: _react.PropTypes.shape({
    findOtherClubsBtn: _react.PropTypes.string
  }),
  isUserLoggedIn: _react.PropTypes.bool,
  preferedClub: _react.PropTypes.object,
  nearbyClub: _react.PropTypes.object,
  onStoreFinderActive: _react.PropTypes.func,
  stores: _react.PropTypes.object
};
var formatPosition = exports.formatPosition = function formatPosition(_ref) {
  var coords = _ref.coords;

  if (coords) {
    var latitude = coords.latitude;
    var longitude = coords.longitude;

    if (latitude && longitude) {
      return { latitude: latitude, longitude: longitude };
    }
  }
};

exports.default = ClubLocator;