"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _spinner = require("@walmart/wmreact-containers/lib/components/spinner");

var _spinner2 = _interopRequireDefault(_spinner);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _storeFinderPanel = require("./store-finder-panel");

var _storeFinderPanel2 = _interopRequireDefault(_storeFinderPanel);

var _storesProp = require("../props/stores-prop");

var _storesProp2 = _interopRequireDefault(_storesProp);

var _isEqual = require("lodash/isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component is the StoreFinderFlyout. This has three states.
1) On initial render, it renders as a Link
2) On hover and during loading in renders a loading Flyout
3) On service response it renders the flyout with stores near you

@import {StoreFinderFlyout}
@flags noVisibleRender
@component StoreFinderFlyout
@playground
StoreFinderFlyout
```
<StoreFinderFlyout
  storeFinderResponse={check examples}
  linkData={check examples}
  iconName="pin"
  index: 1
  linkId="id"
/>
```
*/

var StoreFinderFlyout = function (_Component) {
  (0, _inherits3.default)(StoreFinderFlyout, _Component);

  function StoreFinderFlyout(props) {
    (0, _classCallCheck3.default)(this, StoreFinderFlyout);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._onStoreFinderButtonMouseEnter = _this._onStoreFinderButtonMouseEnter.bind(_this);
    return _this;
  }

  StoreFinderFlyout.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    // do not rerender store finder flyout if the props haven't changed
    return !(0, _isEqual2.default)(nextProps.storeFinderResponse, this.props.storeFinderResponse);
  };

  StoreFinderFlyout.prototype._renderStoreFinderFlyout = function _renderStoreFinderFlyout(props) {
    var storeFinderResponse = props.storeFinderResponse;
    var rest = (0, _objectWithoutProperties3.default)(props, ["storeFinderResponse"]);
    var index = rest.index;
    var loading = storeFinderResponse.loading;
    var stores = storeFinderResponse.stores;

    return _react2.default.createElement(
      _flyout2.default,
      { className: "header-GlobalEyebrowNav-flyout text-left",
        direction: "bottom",
        size: "fluid",
        key: index,
        hover: true,
        active: true,
        trigger: this._renderStoreFinderButton(rest) },
      this._renderStoreFinderPanel(loading, stores)
    );
  };

  StoreFinderFlyout.prototype._renderStoreFinderPanel = function _renderStoreFinderPanel(loading, stores) {
    return loading ? this._renderLoadingComponent() : _react2.default.createElement(_storeFinderPanel2.default, stores);
  };

  StoreFinderFlyout.prototype._renderLoadingComponent = function _renderLoadingComponent() {
    return _react2.default.createElement(
      "div",
      { className: "header-StoreFinderPanel-spinner" },
      _react2.default.createElement(_spinner2.default, { loading: true })
    );
  };

  StoreFinderFlyout.prototype._renderStoreFinderButton = function _renderStoreFinderButton(_ref, hover) {
    var _this2 = this;

    var linkData = _ref.linkData;
    var iconName = _ref.iconName;
    var index = _ref.index;
    var onStoreFinderActive = _ref.onStoreFinderActive;
    var dataAutomationId = _ref.dataAutomationId;
    var linkText = linkData.linkText;

    return _react2.default.createElement(
      _button2.default,
      (0, _extends3.default)({
        className: "header-GlobalEyebrowNav-button dropdown-link",
        fakelink: true
      }, (0, _automationIdUtils.getDataAutomationIdPair)("link-" + index, dataAutomationId), {
        onMouseEnter: function onMouseEnter() {
          _this2._onStoreFinderButtonMouseEnter(hover, onStoreFinderActive);
        }
      }),
      _react2.default.createElement(_icon2.default, { name: iconName }),
      linkText
    );
  };

  StoreFinderFlyout.prototype._onStoreFinderButtonMouseEnter = function _onStoreFinderButtonMouseEnter(hover, onStoreFinderActive) {
    if (hover) {
      onStoreFinderActive();
    }
  };

  StoreFinderFlyout.prototype._shouldShowFlyout = function _shouldShowFlyout(response) {
    return this._isLoading(response) || this._hasStores(response) || this._serviceError(response);
  };

  StoreFinderFlyout.prototype._isLoading = function _isLoading(response) {
    return response && response.loading;
  };

  StoreFinderFlyout.prototype._hasStores = function _hasStores(response) {
    return response && response.stores && (response.stores.nearbyStores || response.stores.preferredStores);
  };

  StoreFinderFlyout.prototype._serviceError = function _serviceError(response) {
    return response && response.didInvalidate;
  };

  StoreFinderFlyout.prototype.render = function render() {
    var storeFinderResponse = this.props.storeFinderResponse;

    if (this._shouldShowFlyout(storeFinderResponse)) {
      return this._renderStoreFinderFlyout(this.props);
    }
    return this._renderStoreFinderButton(this.props, true);
  };

  return StoreFinderFlyout;
}(_react.Component);

exports.default = StoreFinderFlyout;


StoreFinderFlyout.displayName = "StoreFinderFlyout";

StoreFinderFlyout.propTypes = {
  /**
  Data used to render storefinder panel.
  This includes the loading and error states and stores data
  */
  storeFinderResponse: _react.PropTypes.shape({
    loading: _react.PropTypes.bool,
    didInvalidate: _react.PropTypes.bool,
    stores: _react.PropTypes.shape(_storesProp2.default)
  }).isRequired,
  /**
  Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL, link text, and colors to use for the links.
  */
  linkData: _react.PropTypes.object.isRequired,
  iconName: _react.PropTypes.string,
  index: _react.PropTypes.number,
  /**
  Callback that is triggered when storefinder flyout is open
  */
  onStoreFinderActive: _react.PropTypes.func,
  /**
  automation id for tests
  */
  dataAutomationId: _react.PropTypes.string
};

StoreFinderFlyout.defaultProps = {
  iconName: "pin",
  index: 0,
  onStoreFinderActive: function onStoreFinderActive() {},
  dataAutomationId: "storeFinderFlyout"
};