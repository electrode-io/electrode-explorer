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

var _tempoCore = require("@walmart/wmreact-header/lib/tempo-core");

var _globalLefthandNavMobile = require("./global-lefthand-nav-mobile");

var _globalLefthandNavMobile2 = _interopRequireDefault(_globalLefthandNavMobile);

var _businessToolsNavMobile = require("./business-tools-nav-mobile");

var _businessToolsNavMobile2 = _interopRequireDefault(_businessToolsNavMobile);

var _memberServicesNavMobile = require("./member-services-nav-mobile");

var _memberServicesNavMobile2 = _interopRequireDefault(_memberServicesNavMobile);

var _globalEyebrowNavMobile = require("./global-eyebrow-nav-mobile");

var _globalEyebrowNavMobile2 = _interopRequireDefault(_globalEyebrowNavMobile);

var _globalAccountNavMobile = require("./global-account-nav-mobile");

var _globalAccountNavMobile2 = _interopRequireDefault(_globalAccountNavMobile);

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
      businessToolsSelected: false,
      memberServicesSelected: false,
      accountSelected: false
    };

    _this.setOpen = _this.setOpen.bind(_this);
    _this._setClosed = _this._setClosed.bind(_this);
    _this._toggleDeptSelected = _this._toggleDeptSelected.bind(_this);
    _this._toggleBusinessToolsSelected = _this._toggleBusinessToolsSelected.bind(_this);
    _this._toggleMemberServicesSelected = _this._toggleMemberServicesSelected.bind(_this);
    _this._toggleAccountSelected = _this._toggleAccountSelected.bind(_this);
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
      // Closes the offcanvas nav by shifting the page back and returns to the correct
      // scroll position
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

  OffcanvasNav.prototype._toggleBusinessToolsSelected = function _toggleBusinessToolsSelected() {
    this.setState({
      businessToolsSelected: !this.state.businessToolsSelected

    });
  };

  OffcanvasNav.prototype._toggleMemberServicesSelected = function _toggleMemberServicesSelected() {
    this.setState({
      memberServicesSelected: !this.state.memberServicesSelected

    });
  };

  OffcanvasNav.prototype._toggleAccountSelected = function _toggleAccountSelected() {
    this.setState({
      accountSelected: !this.state.accountSelected

    });
  };

  OffcanvasNav.prototype._clearToggles = function _clearToggles() {
    this.setState({});
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

  OffcanvasNav.prototype._signInRequest = function _signInRequest() {
    return _react2.default.createElement(
      "div",
      { className: "hamburger greeting" },
      "Hello!",
      _react2.default.createElement(
        "a",
        { className: "pull-right hamburger signIn", href: "/account/login" },
        "Sign in"
      )
    );
  };

  OffcanvasNav.prototype._signedIn = function _signedIn(_ref) {
    var userName = _ref.userName;

    return _react2.default.createElement(
      "div",
      { className: "pull-right hamburger find-a-club" },
      "Hi " + userName
    );
  };

  OffcanvasNav.prototype._renderUser = function _renderUser(_ref2, userName) {
    var deptSelected = _ref2.deptSelected;
    var businessToolsSelected = _ref2.businessToolsSelected;
    var memberServicesSelected = _ref2.memberServicesSelected;
    var accountSelected = _ref2.accountSelected;

    if (!deptSelected && !businessToolsSelected && !memberServicesSelected && !accountSelected) {
      var greeting = userName ? this._signedIn(userName) : this._signInRequest();
      return _react2.default.createElement(
        "div",
        (0, _extends3.default)({ className: "header-OffcanvasNav-entry"
        }, (0, _automationIdUtils.getDataAutomationIdPair)("user", "header-OffcanvasNav")),
        greeting
      );
    }
  };

  OffcanvasNav.prototype._cLSignedIn = function _cLSignedIn() {
    return _react2.default.createElement(
      "div",
      { className: "header-OffcanvasNav-entry" },
      "Your club",
      _react2.default.createElement(
        "div",
        null,
        "Sunnyvale",
        _react2.default.createElement(
          "a",
          { className: "pull-right hamburger find-a-club", href: "club-locator" },
          "Change"
        )
      )
    );
  };

  OffcanvasNav.prototype._cLNotSignedIn = function _cLNotSignedIn() {
    return _react2.default.createElement(
      "div",
      { className: "header-OffcanvasNav-entry" },
      "Your club",
      _react2.default.createElement(
        "a",
        { className: "pull-right hamburger find-a-club", href: "club-locator" },
        "Find a club"
      )
    );
  };

  OffcanvasNav.prototype._renderSignOut = function _renderSignOut(deptSelected, userName) {
    if (userName && !deptSelected) {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_separator2.default, null),
        _react2.default.createElement(
          _link2.default,
          (0, _extends3.default)({
            className: "header-OffcanvasNav-entry hamburger find-a-club",
            href: "/account/logout"
          }, (0, _automationIdUtils.getDataAutomationIdPair)("signOut", "header-OffcanvasNav")),
          "Sign Out"
        )
      );
    }
  };

  OffcanvasNav.prototype._renderNavLinks = function _renderNavLinks(_ref3) {
    var deptSelected = _ref3.deptSelected;
    var businessToolsSelected = _ref3.businessToolsSelected;
    var memberServicesSelected = _ref3.memberServicesSelected;
    var accountSelected = _ref3.accountSelected;

    if (!deptSelected && !businessToolsSelected && !memberServicesSelected && !accountSelected) {
      return _react2.default.createElement(_tempoCore.TempoZone, {
        zoneName: "nav_links_zone",
        inOffcanvasNav: true });
    }
  };

  OffcanvasNav.prototype._renderMemberServices = function _renderMemberServices(_ref4) {
    var deptSelected = _ref4.deptSelected;
    var businessToolsSelected = _ref4.businessToolsSelected;
    var accountSelected = _ref4.accountSelected;

    if (!deptSelected && !businessToolsSelected && !accountSelected) {
      return _react2.default.createElement(_tempoCore.TempoZone, {
        zoneName: "nav_flyout_3_zone",
        inOffcanvasNav: true,
        moduleTypeComponentMap: { MemberServicesNav: _memberServicesNavMobile2.default },
        onMenuLinkClick: this._toggleMemberServicesSelected
      });
    }
  };

  OffcanvasNav.prototype._renderBusinessTools = function _renderBusinessTools(_ref5) {
    var deptSelected = _ref5.deptSelected;
    var memberServicesSelected = _ref5.memberServicesSelected;
    var accountSelected = _ref5.accountSelected;

    if (!memberServicesSelected && !deptSelected && !accountSelected) {
      return _react2.default.createElement(_tempoCore.TempoZone, {
        zoneName: "nav_flyout_2_zone",
        inOffcanvasNav: true,
        moduleTypeComponentMap: { BusinessToolsNav: _businessToolsNavMobile2.default },
        onBusinessToolsClick: this._toggleBusinessToolsSelected,
        onBackClick: this._toggleBusinessToolsSelected,
        bizToolsMob: this.props.bizToolsMob,
        renderBizToolsMobile: this.props.renderBizToolsMobile,
        indexSuperDeptMobile: this.props.indexSuperDeptMobile,
        renderDeptMobile: this.props.renderDeptMobile,
        indexDeptMobile: this.props.indexDeptMobile,
        btoolsIndexMobile: this.props.btoolsIndexMobile
      });
    }
  };

  OffcanvasNav.prototype._renderEyebrowNav = function _renderEyebrowNav(_ref6) {
    var deptSelected = _ref6.deptSelected;
    var businessToolsSelected = _ref6.businessToolsSelected;
    var memberServicesSelected = _ref6.memberServicesSelected;
    var accountSelected = _ref6.accountSelected;

    if (!deptSelected && !memberServicesSelected && !businessToolsSelected && !accountSelected) {
      return _react2.default.createElement(_tempoCore.TempoZone, {
        zoneName: "eyebrow_zone",
        inOffcanvasNav: true,
        moduleTypeComponentMap: { GlobalEyebrowNav: _globalEyebrowNavMobile2.default }
      });
    }
  };

  OffcanvasNav.prototype._renderGlobalLeftHandNav = function _renderGlobalLeftHandNav(_ref7) {
    var businessToolsSelected = _ref7.businessToolsSelected;
    var memberServicesSelected = _ref7.memberServicesSelected;
    var accountSelected = _ref7.accountSelected;

    if (!memberServicesSelected && !businessToolsSelected && !accountSelected) {
      return _react2.default.createElement(_tempoCore.TempoZone, {
        zoneName: "nav_flyout_1_zone",
        moduleTypeComponentMap: { GlobalLefthandNav: _globalLefthandNavMobile2.default },
        onSuperDeptClick: this._toggleDeptSelected,
        onBackClick: this._toggleDeptSelected });
    }
  };

  OffcanvasNav.prototype._renderClubLocator = function _renderClubLocator(_ref8) {
    var deptSelected = _ref8.deptSelected;
    var businessToolsSelected = _ref8.businessToolsSelected;
    var memberServicesSelected = _ref8.memberServicesSelected;
    var accountSelected = _ref8.accountSelected;
    var userName = _ref8.userName;

    if (!deptSelected && !businessToolsSelected && !memberServicesSelected && !accountSelected) {
      var closestClub = userName ? this._cLSignedIn() : this._cLNotSignedIn();
      return _react2.default.createElement(
        "div",
        null,
        closestClub
      );
    }
  };

  OffcanvasNav.prototype._renderGlobalAccountNav = function _renderGlobalAccountNav(_ref9) {
    var businessToolsSelected = _ref9.businessToolsSelected;
    var memberServicesSelected = _ref9.memberServicesSelected;
    var deptSelected = _ref9.deptSelected;

    if (!memberServicesSelected && !businessToolsSelected && !deptSelected) {
      return _react2.default.createElement(_tempoCore.TempoZone, {
        zoneName: "your_accont_zone",
        moduleTypeComponentMap: { CloneGlobalAccountFlyout: _globalAccountNavMobile2.default },
        onAccountLinkClick: this._toggleAccountSelected,
        onBackClick: this._toggleAccountSelected });
    }
  };

  OffcanvasNav.prototype._renderSeperator = function _renderSeperator(_ref10) {
    var businessToolsSelected = _ref10.businessToolsSelected;
    var memberServicesSelected = _ref10.memberServicesSelected;
    var accountSelected = _ref10.accountSelected;
    var deptSelected = _ref10.deptSelected;

    if (!memberServicesSelected && !businessToolsSelected && !accountSelected && !deptSelected) {
      return _react2.default.createElement(_separator2.default, null);
    }
  };

  OffcanvasNav.prototype.render = function render() {
    var userName = this.props.userName;
    var open = this.state.open;


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
        this._renderUser(this.state, userName),
        this._renderGlobalLeftHandNav(this.state),
        this._renderSeperator(this.state),
        this._renderBusinessTools(this.state),
        this._renderMemberServices(this.state),
        this._renderSeperator(this.state),
        this._renderNavLinks(this.state),
        this._renderSeperator(this.state),
        this._renderGlobalAccountNav(this.state),
        this._renderClubLocator(this.state),
        this._renderSeperator(this.state),
        this._renderEyebrowNav(this.state),
        this._renderSignOut(this.state)
      )
    );
  };

  return OffcanvasNav;
}(_react.Component);

OffcanvasNav.displayName = "OffcanvasNav";

OffcanvasNav.propTypes = {
  userName: _react2.default.PropTypes.string,
  bizToolsMob: _react2.default.PropTypes.object.isRequired,
  renderBizToolsMobile: _react2.default.PropTypes.func.isRequired,
  indexSuperDeptMobile: _react2.default.PropTypes.func.isRequired,
  renderDeptMobile: _react2.default.PropTypes.func.isRequired,
  indexDeptMobile: _react2.default.PropTypes.func.isRequired,
  btoolsIndexMobile: _react2.default.PropTypes.func.isRequired
};

OffcanvasNav.defaultProps = {
  userName: null
};

exports.default = OffcanvasNav;