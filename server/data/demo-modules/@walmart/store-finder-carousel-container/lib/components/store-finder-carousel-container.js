"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _reactRedux = require("react-redux");

var _storeFinderCarousel = require("@walmart/store-finder-carousel/lib/components/store-finder-carousel");

var _storeFinderCarousel2 = _interopRequireDefault(_storeFinderCarousel);

var _stateKeys = require("../reducers/state-keys");

var _stateKeys2 = _interopRequireDefault(_stateKeys);

var _actions = require("../actions/actions");

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable max-len */

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var _getStateKeys = (0, _stateKeys2.default)(ownProps.stateKeyOverrides);

  var STORES_KEY = _getStateKeys.STORES_KEY;
  var CURRENT_STORE_KEY = _getStateKeys.CURRENT_STORE_KEY;
  var ZIP_KEY = _getStateKeys.ZIP_KEY;
  var IS_LOADING_KEY = _getStateKeys.IS_LOADING_KEY;
  var IS_VISIBLE_KEY = _getStateKeys.IS_VISIBLE_KEY;
  var IS_SEARCHING_FOR_ZIP_KEY = _getStateKeys.IS_SEARCHING_FOR_ZIP_KEY;


  return {
    stores: state[STORES_KEY],
    zip: state[ZIP_KEY],
    currentStore: state[CURRENT_STORE_KEY],
    loading: state[IS_LOADING_KEY],
    isVisible: state[IS_VISIBLE_KEY],
    isSearchingForZip: state[IS_SEARCHING_FOR_ZIP_KEY]
  };
};
/* eslint-disable max-len */


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onZipChange: function onZipChange(zip) {
      dispatch(_actions2.default.updateZip(zip));
      dispatch(_actions2.default.toggleZipSearching());
    },
    onChange: function onChange(id) {
      return dispatch(_actions2.default.updateCurrentStore(id));
    },
    toggleVisibility: function toggleVisibility() {
      return dispatch(_actions2.default.toggleVisibility());
    },
    _buildOnMountHandler: function _buildOnMountHandler(zip) {
      return function () {
        return dispatch(_actions2.default.fetchStores(zip));
      };
    },
    toggleSearching: function toggleSearching() {
      return dispatch(_actions2.default.toggleZipSearching());
    }
  };
};

// Our `onMount` handler needs to know the current zip in order to fetch the correct
// stores. To that end, we use `mapDispatchToProps()._buildOnMountHandler` to build
// an `onMount` prop with a closure over `propsFromState.zip`:
var mergeProps = function mergeProps(propsFromState, propsFromDispatch, ownProps) {
  var _buildOnMountHandler = propsFromDispatch._buildOnMountHandler;
  var dispatchProps = (0, _objectWithoutProperties3.default)(propsFromDispatch, ["_buildOnMountHandler"]);

  var onMount = _buildOnMountHandler(propsFromState.zip);
  // ^ Note that we *don't* need the configured ZIP_KEY here, because `zip` is
  // hard-coded into `propsFromState` in `mapStateToProps`.

  return (0, _extends3.default)({}, ownProps, propsFromState, dispatchProps, { onMount: onMount });
};

var Container = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(_storeFinderCarousel2.default);

exports.default = Container;