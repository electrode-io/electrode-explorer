"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays the AccountFlyout in header.
It contains links, instructional texts and flyout in the header.

@import {GlobalAccountFlyout}
@flags noVisibleRender
@component GlobalAccountFlyout
@playground
Global Account Flyout
moduleData is too long please check examples
```
<GlobalAccountFlyout customerName="test"
  moduleData={{please check examples under demo}}/>
```
*/

var GlobalAccountFlyout = function GlobalAccountFlyout(props) {
  var _props$moduleData = props.moduleData;
  var type = _props$moduleData.type;
  var moduleId = _props$moduleData.moduleId;
  var _props$moduleData$con = _props$moduleData.configs;
  var loggedIn = _props$moduleData$con.loggedIn;
  var loggedOut = _props$moduleData$con.loggedOut;
  var customerName = props.customerName;
  var dataAutomationId = props.dataAutomationId;


  var _getClassNames = function _getClassNames(className, dropdown) {
    return (0, _classnames2.default)("header-GlobalAccountFlyout-link", className, {
      "dropdown-link": dropdown
    });
  };

  var _renderInstructionalText = function _renderInstructionalText(text) {
    if (text) {
      return _react2.default.createElement(
        "span",
        { className: "header-GlobalAccountFlyout-instructional display-block" },
        text
      );
    }
  };

  var _renderLink = function _renderLink(_ref, id, className) {
    var menu = _ref.menu;
    var instructionalText = _ref.instructionalText;
    var dropdown = _ref.dropdown;
    var uid = menu.uid;
    var title = menu.title;
    var linkText = menu.linkText;
    var value = menu.clickThrough.value;

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _link2.default,
        (0, _extends3.default)({
          className: _getClassNames(className, dropdown),
          "data-uid": uid,
          href: value,
          alt: title,
          key: uid
        }, (0, _automationIdUtils.getDataAutomationIdPair)(id, dataAutomationId)),
        linkText
      ),
      _renderInstructionalText(instructionalText)
    );
  };

  var _renderButton = function _renderButton(linkText, id) {
    return _react2.default.createElement(
      _button2.default,
      (0, _extends3.default)({
        className: "header-GlobalAccountFlyout-flyout-link dropdown-link font-bold display-block",
        fakelink: true
      }, (0, _automationIdUtils.getDataAutomationIdPair)(id, dataAutomationId)),
      linkText
    );
  };

  var _renderFlyoutLink = function _renderFlyoutLink(linkDetails, index) {
    var linkId = "flyout-link-" + index;
    var menu = linkDetails.menu;
    var instructionalText = linkDetails.instructionalText;

    var linkClass = "display-block";
    return _react2.default.createElement(
      "li",
      { className: "header-GlobalAccountFlyout-flyout-listItem font-normal", key: index },
      _renderLink({ menu: menu, instructionalText: instructionalText, dropdown: false }, linkId, linkClass)
    );
  };

  var _renderFlyoutWithLink = function _renderFlyoutWithLink(flyoutLink, links, infoLink) {
    var linkId = "link";
    var infoLinkId = "customerInfo-link";
    var infoLinkClass = "header-GlobalAccountFlyout-name display-block";
    var linkText = flyoutLink.linkText;

    return _react2.default.createElement(
      "div",
      null,
      _renderLink({ menu: infoLink, dropdown: false }, infoLinkId, infoLinkClass),
      _react2.default.createElement(
        _flyout2.default,
        { className: "header-GlobalAccountFlyout-flyout display-block",
          direction: "bottom",
          size: "fluid",
          hover: true,
          trigger: _renderButton(linkText, linkId) },
        _react2.default.createElement(
          "ul",
          { className: "header-GlobalAccountFlyout-flyout-list block-list no-margin" },
          links.map(function (linkDetails, index) {
            return _renderFlyoutLink(linkDetails, index);
          })
        )
      )
    );
  };

  var _renderCustomerStatus = function _renderCustomerStatus() {
    var accountKeyword = "Hello";
    var accountUrl = "/account";
    var flyoutLink = {
      "clickThrough": { "value": accountUrl },
      "linkText": "My Account"
    };
    var customerInfoLink = {
      "clickThrough": { "value": accountUrl },
      "linkText": accountKeyword + ". Sign In"
    };
    if (customerName) {
      customerInfoLink.linkText = accountKeyword + ", " + customerName;
      return _renderFlyoutWithLink(flyoutLink, loggedIn, customerInfoLink);
    } else {
      return _renderFlyoutWithLink(flyoutLink, loggedOut, customerInfoLink);
    }
  };

  return _react2.default.createElement(
    _collectorContext2.default,
    { moduleId: moduleId },
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: "header-GlobalAccountFlyout font-semibold text-right",
        "data-module": type,
        "data-module-id": moduleId
      }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
      _renderCustomerStatus()
    )
  );
};

GlobalAccountFlyout.displayName = "GlobalAccountFlyout";

GlobalAccountFlyout.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL and link text to use for the links.
  */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      loggedIn: _react.PropTypes.array,
      loggedOut: _react.PropTypes.array
    }).isRequired
  }).isRequired,
  /**
  Get customer name to check loggedIn and loogedOut status.
  */
  customerName: _react.PropTypes.string,
  /**
  Used for generating unique automation id's
  */
  dataAutomationId: _react.PropTypes.string
};

GlobalAccountFlyout.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      loggedIn: [],
      loggedOut: []
    }
  },
  customerName: "",
  dataAutomationId: "header-GlobalAccountFlyout"
};

exports.default = GlobalAccountFlyout;