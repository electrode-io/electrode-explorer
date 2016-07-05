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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _widthWatcher = require("@walmart/wmreact-layout/lib/components/utils/width-watcher");

var WidthWatcher = _interopRequireWildcard(_widthWatcher);

var _separator = require("@walmart/wmreact-containers/lib/components/separator");

var _separator2 = _interopRequireDefault(_separator);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _tempoCore = require("../tempo-core");

var _globalLefthandNavMobile = require("./global-lefthand-nav-mobile");

var _globalLefthandNavMobile2 = _interopRequireDefault(_globalLefthandNavMobile);

var _globalEyebrowNavMobile = require("./global-eyebrow-nav-mobile");

var _globalEyebrowNavMobile2 = _interopRequireDefault(_globalEyebrowNavMobile);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OPEN_CLASS_NAME = "offcanvasNav-open";

/**
 An intermediate component for the header for rendering the offcanvas nav and overlay. Should be
 used inside a TempoWrapper so all modules are populated
 @examples
 ```jsx
 <OffcanvasNav userName="Foo" />
 ```
 @component OffcanvasNav
 @import {OffcanvasNav}
 @references OffcanvasNav
 @playground
 OffcanvasNav
 */

var OffcanvasNav = function (_Component) {
  (0, _inherits3.default)(OffcanvasNav, _Component);

  function OffcanvasNav(props) {
    (0, _classCallCheck3.default)(this, OffcanvasNav);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      open: false,
      deptSelected: false,
      eyebrowMenuSelected: false
    };

    _this.setOpen = _this.setOpen.bind(_this);
    _this._setClosed = _this._setClosed.bind(_this);
    _this._toggleDeptSelected = _this._toggleDeptSelected.bind(_this);
    _this._toggleEyebrowMenuSelected = _this._toggleEyebrowMenuSelected.bind(_this);

    _this.scrollTop = 0;
    _this.widthWatcher = new WidthWatcher.WidthWatcher();
    return _this;
  }

  OffcanvasNav.prototype.componentWillMount = function componentWillMount() {
    this.widthWatcher.addSubscriber(this);
  };

  OffcanvasNav.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    var nextOpen = nextState.open;
    var prevOpen = this.state.open;
    var body = window.document.body;
    // Opens the offcanvas nav by shifting the page over to the right and freezing the body at the
    // correct scroll position

    if (!prevOpen && nextOpen) {
      this.scrollTop = window.scrollY;
      body.classList.add(OPEN_CLASS_NAME);
      body.style.top = -1 * this.scrollTop + "px";
      // Closes the offcanvas nav by shifting the page back and returns to the correct scroll position
    } else if (prevOpen && !nextOpen) {
        body.classList.remove(OPEN_CLASS_NAME);
        body.style.top = null;
        window.scrollTo(0, this.scrollTop);
      }
  };

  OffcanvasNav.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.state.open) {
      this.refs.nav.scrollTop = 0;
    }
  };

  OffcanvasNav.prototype.componentWillUnmount = function componentWillUnmount() {
    this.widthWatcher.removeSubscriber(this);
  };

  // Executed by width watcher when the breakpoint changes. Used to close nav if widening screen.


  OffcanvasNav.prototype.updateWidth = function updateWidth(width) {
    if (this.state.open && (width === "large" || width === "x-large")) {
      this._setClosed();
    }
  };

  OffcanvasNav.prototype.setOpen = function setOpen() {
    this.setState({
      open: true
    });
  };

  OffcanvasNav.prototype._setClosed = function _setClosed() {
    this.setState({
      open: false
    });
  };

  OffcanvasNav.prototype._toggleDeptSelected = function _toggleDeptSelected() {
    this.setState({
      deptSelected: !this.state.deptSelected
    });
  };

  OffcanvasNav.prototype._toggleEyebrowMenuSelected = function _toggleEyebrowMenuSelected() {
    this.setState({
      eyebrowMenuSelected: !this.state.eyebrowMenuSelected
    });
  };

  // Invisible overlay to capture clicks and close the offcanvas nav when it is open


  OffcanvasNav.prototype._renderOverlay = function _renderOverlay(open) {
    if (open) {
      return _react2.default.createElement("div", (0, _extends3.default)({
        onClick: this._setClosed,
        style: { top: this.scrollTop },
        className: "header-OffcanvasNav-overlay"
      }, (0, _automationIdUtils.getDataAutomationIdPair)("overlay", "header-OffcanvasNav")));
    }
  };

  OffcanvasNav.prototype._renderUser = function _renderUser(deptSelected, eyebrowMenuSelected, userName) {
    if (deptSelected || eyebrowMenuSelected) {
      return null;
    }

    var greeting = "Hello" + (userName ? ", " + userName : ". Sign in");

    return _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({
        className: "header-OffcanvasNav-entry header-OffcanvasNav-entry--top",
        href: "/account/"
      }, (0, _automationIdUtils.getDataAutomationIdPair)("user", "header-OffcanvasNav")),
      greeting
    );
  };

  OffcanvasNav.prototype._renderSignOut = function _renderSignOut(deptSelected, eyebrowMenuSelected, userName) {
    if (!userName || deptSelected || eyebrowMenuSelected) {
      return null;
    }
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_separator2.default, null),
      _react2.default.createElement(
        _link2.default,
        (0, _extends3.default)({
          className: "header-OffcanvasNav-entry",
          href: "/account/logout"
        }, (0, _automationIdUtils.getDataAutomationIdPair)("signOut", "header-OffcanvasNav")),
        "Sign Out"
      )
    );
  };

  OffcanvasNav.prototype._renderLeftHandNav = function _renderLeftHandNav(eyebrowMenuSelected, isBot) {
    if (eyebrowMenuSelected) {
      return null;
    }
    return _react2.default.createElement(_tempoCore.TempoZone, {
      zoneName: "headerZone3",
      moduleTypeComponentMap: { GlobalLefthandNav: _globalLefthandNavMobile2.default },
      onSuperDeptClick: this._toggleDeptSelected,
      onBackClick: this._toggleDeptSelected,
      isBot: isBot });
  };

  OffcanvasNav.prototype._renderSecondaryNav = function _renderSecondaryNav(deptSelected, eyebrowMenuSelected) {
    if (deptSelected || eyebrowMenuSelected) {
      return null;
    }
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_separator2.default, null),
      _react2.default.createElement(_tempoCore.TempoZone, {
        zoneName: "headerZone4",
        inOffcanvasNav: true }),
      _react2.default.createElement(_separator2.default, null)
    );
  };

  OffcanvasNav.prototype._renderEyebrowNav = function _renderEyebrowNav(deptSelected) {
    if (deptSelected) {
      return null;
    }
    return _react2.default.createElement(_tempoCore.TempoZone, {
      zoneName: "headerZone1",
      onMenuClick: this._toggleEyebrowMenuSelected,
      onBackClick: this._toggleEyebrowMenuSelected,
      moduleTypeComponentMap: { GlobalEyebrowNav: _globalEyebrowNavMobile2.default } });
  };

  OffcanvasNav.prototype.render = function render() {
    var _props = this.props;
    var userName = _props.userName;
    var isBot = _props.isBot;
    var _state = this.state;
    var open = _state.open;
    var deptSelected = _state.deptSelected;
    var eyebrowMenuSelected = _state.eyebrowMenuSelected;


    return _react2.default.createElement(
      "div",
      { className: "hide-content-l" },
      this._renderOverlay(open),
      _react2.default.createElement(
        "nav",
        (0, _extends3.default)({
          className: "header-OffcanvasNav",
          ref: "nav"
        }, (0, _automationIdUtils.getDataAutomationIdPair)("OffcanvasNav", "header")),
        this._renderUser(deptSelected, eyebrowMenuSelected, userName),
        this._renderLeftHandNav(eyebrowMenuSelected, isBot),
        this._renderSecondaryNav(deptSelected, eyebrowMenuSelected),
        this._renderEyebrowNav(deptSelected),
        this._renderSignOut(deptSelected, userName)
      )
    );
  };

  return OffcanvasNav;
}(_react.Component);

OffcanvasNav.displayName = "OffcanvasNav";

OffcanvasNav.propTypes = {
  /**
  Check for web crawler bots.
  */
  isBot: _react.PropTypes.bool,
  /**
  First name of the user if signed in. Null otherwise.
  */
  userName: _react2.default.PropTypes.string
};

OffcanvasNav.defaultProps = {
  isBot: false,
  userName: null
};

exports.default = OffcanvasNav;