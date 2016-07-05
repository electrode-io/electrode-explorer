"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _separator = require("@walmart/wmreact-containers/lib/components/separator");

var _separator2 = _interopRequireDefault(_separator);

var _stack = require("@walmart/wmreact-layout/lib/components/stack");

var _stack2 = _interopRequireDefault(_stack);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlobalAccountFlyout = function GlobalAccountFlyout(props) {
  var _props$moduleData$con = props.moduleData.configs;
  var sectionOne = _props$moduleData$con.sectionOne;
  var sectionTwo = _props$moduleData$con.sectionTwo;
  var sectionThree = _props$moduleData$con.sectionThree;
  var sectionFour = _props$moduleData$con.sectionFour;
  var customerName = props.customerName;


  var _getClassNames = function _getClassNames(className, dropdown) {
    return (0, _classnames2.default)("header-GlobalAccountFlyout-link", className, {
      "dropdown-link": dropdown
    });
  };

  var _renderLink = function _renderLink(menu, id, className) {
    var uid = menu.uid;
    var title = menu.title;
    var linkText = menu.linkText;
    var value = menu.clickThrough.value;

    return _react2.default.createElement(
      _link2.default,
      {
        className: _getClassNames(className, false),
        "data-uid": uid,
        href: value,
        alt: title,
        key: uid },
      linkText
    );
  };

  var _renderFlyoutTriggerButton = function _renderFlyoutTriggerButton(linkText, infoLink, infoLinkClass) {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _button2.default,
        {
          className: "header-GlobalAccountFlyout-flyout-link dropdown-link display-block",
          fakelink: true },
        linkText
      ),
      _renderLink(infoLink, "customerInfo-link", infoLinkClass)
    );
  };

  var _renderSignInButton = function _renderSignInButton() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _layout2.default,
        { small: 2, medium: 2, align: "left" },
        _react2.default.createElement(
          _button2.default,
          { mini: true, className: "no-user-signin-button" },
          "Sign in"
        ),
        _react2.default.createElement(
          _stack2.default,
          { className: "not-a-member" },
          _react2.default.createElement(
            _stack2.default.Fit,
            null,
            "Not a member?"
          ),
          _react2.default.createElement(
            _stack2.default.Fit,
            null,
            _react2.default.createElement(
              _link2.default,
              { className: "join-link" },
              " Join now "
            )
          )
        )
      ),
      _react2.default.createElement(_separator2.default, null)
    );
  };

  var _renderFlyoutLink = function _renderFlyoutLink(linkDetails, index, loggedIn) {
    var linkId = "flyout-link-" + index;
    var menu = linkDetails.menu;
    var showIfLoggedOut = linkDetails.showIfLoggedOut;
    var showIfLoggedIn = linkDetails.showIfLoggedIn;

    var linkClass = "display-block";
    var shouldDisplay = loggedIn && showIfLoggedIn === "true" || !loggedIn && showIfLoggedOut === "true" ? true : false;

    if (shouldDisplay) {
      return _react2.default.createElement(
        "li",
        { className: "header-GlobalAccountFlyout-flyout-listItem font-normal", key: index },
        _renderLink(menu, linkId, linkClass)
      );
    } else {
      return [];
    }
  };

  var _renderFlyoutWithLink = function _renderFlyoutWithLink(flyoutLink, infoLink, loggedIn) {

    var infoLinkClass = "header-GlobalAccountFlyout-name display-block";
    var linkText = flyoutLink.linkText;


    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _flyout2.default,
        { className: "header-GlobalAccountFlyout-flyout display-block",
          direction: "bottom",
          size: "fluid",
          hover: true,
          trigger: _renderFlyoutTriggerButton(linkText, infoLink, infoLinkClass) },
        !loggedIn ? _renderSignInButton() : [],
        _react2.default.createElement(
          "ul",
          { className: "header-GlobalAccountFlyout-flyout-list block-list no-margin" },
          sectionOne.map(function (linkDetails, index) {
            return _renderFlyoutLink(linkDetails, index, loggedIn);
          })
        ),
        _react2.default.createElement(_separator2.default, null),
        _react2.default.createElement(
          "ul",
          { className: "header-GlobalAccountFlyout-flyout-list block-list no-margin" },
          sectionTwo.map(function (linkDetails, index) {
            return _renderFlyoutLink(linkDetails, index, loggedIn);
          })
        ),
        _react2.default.createElement(_separator2.default, null),
        _react2.default.createElement(
          "ul",
          { className: "header-GlobalAccountFlyout-flyout-list block-list no-margin" },
          sectionThree.map(function (linkDetails, index) {
            return _renderFlyoutLink(linkDetails, index, loggedIn);
          })
        ),
        loggedIn ? _react2.default.createElement(_separator2.default, null) : [],
        _react2.default.createElement(
          "ul",
          { className: "header-GlobalAccountFlyout-flyout-list block-list no-margin" },
          sectionFour.map(function (linkDetails, index) {
            return _renderFlyoutLink(linkDetails, index, loggedIn);
          })
        )
      )
    );
  };

  var _renderCustomerStatus = function _renderCustomerStatus() {
    var accountUrl = "/account";
    var flyoutLink = {
      "linkText": "Your Account"
    };
    var customerInfoLink = {
      "clickThrough": { "value": accountUrl },
      "linkText": "Sign In"
    };

    if (customerName) {
      customerInfoLink.linkText = customerName;
      return _renderFlyoutWithLink(flyoutLink, customerInfoLink, true);
    } else {
      return _renderFlyoutWithLink(flyoutLink, customerInfoLink, false);
    }
  };

  return _react2.default.createElement(
    "div",
    { className: "header-GlobalAccountFlyout font-semibold text-right" },
    _renderCustomerStatus()
  );
};

GlobalAccountFlyout.displayName = "GlobalAccountFlyout";

GlobalAccountFlyout.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL and link text to use for the links.
  */
  moduleData: _react.PropTypes.shape({
    configs: _react.PropTypes.shape({
      sectionOne: _react.PropTypes.array,
      sectionTwo: _react.PropTypes.array,
      sectionThree: _react.PropTypes.array,
      sectionFour: _react.PropTypes.array
    }).isRequired
  }).isRequired,
  customerName: _react.PropTypes.string
};

GlobalAccountFlyout.defaultProps = {
  moduleData: {
    configs: {
      sectionOne: [],
      sectionTwo: [],
      sectionThree: [],
      sectionFour: []
    }
  },
  customerName: ""
};

exports.default = GlobalAccountFlyout;