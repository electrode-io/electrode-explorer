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

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _fader = require("../utils/fader");

var _fader2 = _interopRequireDefault(_fader);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The header marketing message component. Has links customizable by text and url which rotate with a
 fade effect with configurable timing.

 ```jsx
 <GlobalMarketingMessages fadeDuration={800} sustainDuration={5000} moduleData={
   {
     type: "GlobalMarketingMessages",
     configs: {
       messages: [
         {
           link: {
             linkText: "FREE SHIPPING on $50 orders",
             title: "FREE SHIPPING on $50 orders",
             clickThrough: {
               type: "category",
               value: "/cp/1088989"
             },
             uid: "Rm-f-ARE"
           },
           uid: "noSNifYr",
         },
         {
           link: {
             linkText: "FREE in-store pickup",
             title: "FREE in-store pickup",
             clickThrough: {
               type: "category",
               value: "/cp/1088989"
             },
             uid: "Hu2fuUAj"
           },
           uid: "rC4mqJwC"
         }, {
           link: {
             clickThrough: {
               type: "url",
               value: "http://grocery.walmart.com/usd-estore/m/home/anonymouslanding.jsp"
             },
             linkText: "FREE Walmart Grocery pickup",
             title: "FREE Walmart Grocery Pickup",
             uid: "LAtNdeIe"
           },
           uid: "tKV0zOCO"
         }
       ],
     },
     moduleId: "8600fadf-4ad5-46d5-aa3c-52c02af51ced"
   }
 }/>
 ```

 @import {GlobalMarketingMessages}
 @flags noVisibleRender
 @component GlobalMarketingMessages
 @playground
 GlobalMarketingMessages
 */

var GlobalMarketingMessages = function (_Component) {
  (0, _inherits3.default)(GlobalMarketingMessages, _Component);

  function GlobalMarketingMessages(props) {
    (0, _classCallCheck3.default)(this, GlobalMarketingMessages);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      selected: 0,
      fadeType: "none"
    };

    _this.currentCallback = 0;
    _this.callbacks = [_this._sustain, _this._fadeOut, _this._rotateMessageAndFadeIn];
    return _this;
  }

  GlobalMarketingMessages.prototype._getClassNames = function _getClassNames(className, size) {
    return (0, _classnames2.default)(className, "header-GlobalMarketingMessages font-semibold", {
      "header-GlobalMarketingMessages--medium": size === "medium",
      "header-GlobalMarketingMessages--small text-center": size === "small",
      "text-right": size !== "small"
    });
  };

  GlobalMarketingMessages.prototype._fadeOut = function _fadeOut() {
    this.setState({
      fadeType: "fadeOut"
    });
  };

  GlobalMarketingMessages.prototype._rotateMessageAndFadeIn = function _rotateMessageAndFadeIn(messageCount) {
    this.setState({
      fadeType: "fadeIn",
      selected: (this.state.selected + 1) % messageCount
    });
  };

  GlobalMarketingMessages.prototype._sustain = function _sustain() {
    this.setState({
      fadeType: "none"
    });
  };

  GlobalMarketingMessages.prototype._selectCallback = function _selectCallback() {
    // Select the next Fader callback according to the sequence:
    // sustain -> fadeOut -> rotate/fadeIn -> sustain etc.
    this.currentCallback = (this.currentCallback + 1) % this.callbacks.length;
    return this.callbacks[this.currentCallback];
  };

  GlobalMarketingMessages.prototype._generateMessages = function _generateMessages(messages) {
    var _this2 = this;

    return messages.map(function (message, index) {
      var link = message.link;

      return _react2.default.createElement(
        "li",
        { className: index !== _this2.state.selected && "hide-content", key: index },
        _react2.default.createElement(
          _link2.default,
          (0, _extends3.default)({
            className: "header-GlobalMarketingMessages-link",
            alt: link.title,
            href: link.clickThrough.value
          }, (0, _automationIdUtils.getDataAutomationIdPair)("link-" + index, _this2.props.dataAutomationId)),
          link.linkText
        )
      );
    });
  };

  GlobalMarketingMessages.prototype.render = function render() {
    var _props = this.props;
    var _props$moduleData = _props.moduleData;
    var type = _props$moduleData.type;
    var moduleId = _props$moduleData.moduleId;
    var messages = _props$moduleData.configs.messages;
    var className = _props.className;
    var size = _props.size;
    var dataAutomationId = _props.dataAutomationId;
    var fadeDuration = _props.fadeDuration;
    var sustainDuration = _props.sustainDuration;
    var fadeType = this.state.fadeType;


    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId },
      _react2.default.createElement(
        "div",
        (0, _extends3.default)({
          className: this._getClassNames(className, size),
          "data-module": type,
          "data-module-id": moduleId
        }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
        _react2.default.createElement(
          _fader2.default,
          {
            type: fadeType,
            duration: fadeType === "none" ? sustainDuration : fadeDuration,
            callback: this._selectCallback().bind(this, messages.length) },
          _react2.default.createElement(
            "ul",
            { className: "no-padding no-margin header-GlobalMarketingMessages-list" },
            this._generateMessages(messages)
          )
        )
      )
    );
  };

  return GlobalMarketingMessages;
}(_react.Component);

GlobalMarketingMessages.displayName = "GlobalMarketingMessages";

GlobalMarketingMessages.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains information on the URL,
  link text.
  */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      messages: _react.PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  /**
  True if using the version for the medium breakpoint
  */
  size: _react.PropTypes.oneOf(["small", "medium", "large"]),
  /**
  How long (in milliseconds) to fade in/out
  */
  fadeDuration: _react.PropTypes.number,
  /**
  How long (in milliseconds) at full opactiy
  */
  sustainDuration: _react.PropTypes.number,
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

GlobalMarketingMessages.defaultProps = {
  className: "",
  size: "large",
  fadeDuration: 1000,
  sustainDuration: 7000,
  dataAutomationId: "header-GlobalMarketingMessages"
};

exports.default = GlobalMarketingMessages;