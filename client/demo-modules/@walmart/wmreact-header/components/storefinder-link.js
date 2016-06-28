"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _geolocate = require("@walmart/geolocate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORE_FINDER_URL = "/store/finder";

/**
 * Store Finder Link component
 * Component is used in mobile header and tries to get the location from the Browser using the
 * Geolocate library from @walmart/geolocate when clicked on it
 *
 * On resolution of the Promise, component would redirect the browser to:
 * - /store/finder?latitude=xxx&longitude=xxx - If we are able to retrieve the geolocation
 * - /store/finder - If we are not able to retrieve the geolocation
 *
 * @class StorefinderLink
 * @component StorefinderLink
 * @exports StorefinderLink
 * @import {StorefinderLink}
 *
 * @example
 * ```jsx
 * <StorefinderLink />
 * ```
 *
 * @playground
 * StorefinderLink
 * ```jsx
 * <StorefinderLink />
 * ```
 */

var StorefinderLink = function (_Component) {
  (0, _inherits3.default)(StorefinderLink, _Component);

  function StorefinderLink() {
    (0, _classCallCheck3.default)(this, StorefinderLink);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  StorefinderLink.prototype._getWindow = function _getWindow() {
    return _exenv2.default.canUseDOM ? window : undefined;
  };

  StorefinderLink.prototype._navigateToUrl = function _navigateToUrl(url) {
    var WINDOW = this._getWindow();

    if (WINDOW) {
      WINDOW.location = url;
    }
  };

  StorefinderLink.prototype._getGeolocatorInstance = function _getGeolocatorInstance() {
    return new _geolocate.Geolocate();
  };

  StorefinderLink.prototype._goToStoreFinder = function _goToStoreFinder(e) {
    var _this2 = this;

    e.preventDefault();

    var geolocation = this._getGeolocatorInstance();

    return geolocation.getCurrentLocation().then(function (location) {
      if (!location.coords && (!location.coords.latitude || !location.coords.longitude)) {
        _this2._navigateToUrl(STORE_FINDER_URL);
      }

      var _location$coords = location.coords;
      var latitude = _location$coords.latitude;
      var longitude = _location$coords.longitude;


      _this2._navigateToUrl(STORE_FINDER_URL + "?latitude=" + latitude + "&longitude=" + longitude);
    }, function () {
      _this2._navigateToUrl(STORE_FINDER_URL);
    });
  };

  StorefinderLink.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var dataAutomationId = _props.dataAutomationId;


    return _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({
        className: className,
        href: STORE_FINDER_URL,
        onClick: this._goToStoreFinder.bind(this)
      }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
      _react2.default.createElement(_icon2.default, { className: "header-HeaderPrimary-icon", name: "pin" })
    );
  };

  return StorefinderLink;
}(_react.Component);

exports.default = StorefinderLink;


StorefinderLink.displayName = "StorefinderLink";

StorefinderLink.propTypes = {
  /**
  Any additional CSS classes that need to be applied
  to the root element.
  */
  className: _react.PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string
};

StorefinderLink.defaultProps = {
  className: "",
  dataAutomationId: "header-StorefinderLink"
};