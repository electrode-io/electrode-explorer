"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YES = "Yes";
var NO = "No";
var MORE_INFO = "More info";
var LEGAL_CONTENT = _react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(
    "strong",
    { className: "prod-LegalContent-contentHeader display-inline-block" },
    "We need just one more thing before we add this to your cart:"
  ),
  _react2.default.createElement(
    "div",
    { className: "prod-LegalContent-content" },
    "By ordering this items, you are certifying that you are at least 17 years of age."
  )
);

var CTA_HEADING = _react2.default.createElement(
  "strong",
  { className: "prod-LegalContent-ctaHeader" },
  "Are you 17 years of age or older?"
);

var DECLINE_CONTENT = _react2.default.createElement(
  "div",
  { className: "prod-LegalContent-declineContainer" },
  _react2.default.createElement(
    "strong",
    { className: "prod-LegalContent-declineHeading prod-LegalContent-contentHeader display-inline-block" },
    "This item could not be added to your card."
  ),
  _react2.default.createElement(
    "p",
    { className: "prod-LegalContent-declineContent" },
    "Please review the rating warning displayed on the page and try again."
  )
);
/**
This component renders the content inside legal flyout.
The component also handles the case when the legal warning is declined.

 For example this is how we use this component.

 ```jsx
 <LegalFlyoutContent onAcceptClicked={() => {console.log("accept clicked")}}/>
 ```

 @import {LegalFlyoutContent}
 @flags noVisibleRender
 @component LegalFlyoutContent
 @playground
 LegalFlyoutContent
 ```
 <LegalFlyoutContent onAcceptClicked={() => {console.log("accept clicked")}}/>
 ```
 */

var LegalFlyoutContent = function (_Component) {
  (0, _inherits3.default)(LegalFlyoutContent, _Component);

  function LegalFlyoutContent() {
    (0, _classCallCheck3.default)(this, LegalFlyoutContent);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  LegalFlyoutContent.prototype._renderDeclineContent = function _renderDeclineContent() {
    return DECLINE_CONTENT;
  };

  LegalFlyoutContent.prototype._onDecline = function _onDecline() {
    this.setState({ decline: true });
  };

  LegalFlyoutContent.prototype._renderAcceptButton = function _renderAcceptButton(onAcceptClicked) {
    return _react2.default.createElement(
      "div",
      { className: "Grid-col u-size-6-12 u-size-3-12-m" },
      _react2.default.createElement(
        _button2.default,
        {
          className: "prod-LegalContent-accept",
          onClick: onAcceptClicked },
        YES
      )
    );
  };

  LegalFlyoutContent.prototype._renderDeclineButton = function _renderDeclineButton(onDeclineClicked) {
    return _react2.default.createElement(
      "div",
      { className: "Grid-col u-size-6-12 u-size-3-12-m" },
      _react2.default.createElement(
        _button2.default,
        { inverse: true,
          className: "prod-LegalContent-decline",
          onClick: onDeclineClicked },
        NO
      )
    );
  };

  LegalFlyoutContent.prototype._renderMoreInfoButton = function _renderMoreInfoButton(onMoreInfoClicked) {
    return _react2.default.createElement(
      "div",
      { className: "Grid-col u-size-6-12-m" },
      _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          className: "prod-LegalContent-moreInfo-button",
          onClick: onMoreInfoClicked },
        _react2.default.createElement(
          "p",
          { className: "copy-small prod-LegalContent-moreInfo-text" },
          MORE_INFO
        )
      )
    );
  };

  LegalFlyoutContent.prototype._renderCTASection = function _renderCTASection(_ref) {
    var onAcceptClicked = _ref.onAcceptClicked;
    var onMoreInfoClicked = _ref.onMoreInfoClicked;
    var onDeclineClicked = _ref.onDeclineClicked;

    return _react2.default.createElement(
      "div",
      null,
      CTA_HEADING,
      _react2.default.createElement(
        "div",
        { className: "prod-LegalContent-cta Grid Grid--gutters" },
        this._renderAcceptButton(onAcceptClicked),
        this._renderDeclineButton(onDeclineClicked),
        this._renderMoreInfoButton(onMoreInfoClicked)
      )
    );
  };

  LegalFlyoutContent.prototype._getContentClassNames = function _getContentClassNames(className) {
    return (0, _classnames2.default)(className, "prod-LegalContent-Container");
  };

  LegalFlyoutContent.prototype._renderLegalContent = function _renderLegalContent(_ref2) {
    var className = _ref2.className;
    var onAcceptClicked = _ref2.onAcceptClicked;
    var onMoreInfoClicked = _ref2.onMoreInfoClicked;
    var onDeclineClicked = _ref2.onDeclineClicked;

    return _react2.default.createElement(
      "div",
      { className: this._getContentClassNames(className) },
      LEGAL_CONTENT,
      this._renderCTASection({ onAcceptClicked: onAcceptClicked, onMoreInfoClicked: onMoreInfoClicked, onDeclineClicked: onDeclineClicked })
    );
  };

  LegalFlyoutContent.prototype.render = function render() {
    if (this.props.decline) {
      return this._renderDeclineContent();
    }
    return this._renderLegalContent(this.props);
  };

  return LegalFlyoutContent;
}(_react.Component);

LegalFlyoutContent.displayName = "LegalFlyoutContent";

LegalFlyoutContent.propTypes = {
  /**
  Additional class names applied to the component
  */
  className: _react.PropTypes.string,
  /**
  Prop that decides whether to render decline content or not
  */
  decline: _react.PropTypes.bool,
  /**
  Callback when yes button is clicked
  */
  onAcceptClicked: _react.PropTypes.func,
  /**
  Callback when more info is clicked
  */
  onMoreInfoClicked: _react.PropTypes.func,
  /**
  Callback when no button is clicked
  */
  onDeclineClicked: _react.PropTypes.func
};

LegalFlyoutContent.defaultProps = {
  className: "",
  decline: false,
  onAcceptClicked: function onAcceptClicked() {},
  onMoreInfoClicked: function onMoreInfoClicked() {},
  onDeclineClicked: function onDeclineClicked() {}
};

exports.default = LegalFlyoutContent;