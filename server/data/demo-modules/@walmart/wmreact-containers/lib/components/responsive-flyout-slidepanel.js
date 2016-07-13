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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _flyoutMagic = require("./flyout-magic");

var _flyoutMagic2 = _interopRequireDefault(_flyoutMagic);

var _slidepanel = require("./slidepanel");

var _slidepanel2 = _interopRequireDefault(_slidepanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
ResponsiveFlyoutSlidePanel renders flyout for desktop and slidepanel for mobile
@examples
```jsx
<ResponsiveFlyoutSlidePanel
  flyoutDirection="right"
  flyoutSize="wide"
  trigger={(<span className="HelpFlyout-trigger">
          <i className="wmicon wmicon-help hide-content-max-m"></i>
          <span className="hide-content-m">Help trigger mobile</span>
        </span>)}
>
  <div>Flyout content goes here</div>
</ResponsiveFlyoutSlidePanel>

**/

var ResponsiveFlyoutSlidePanel = function (_Component) {
  (0, _inherits3.default)(ResponsiveFlyoutSlidePanel, _Component);

  function ResponsiveFlyoutSlidePanel() {
    (0, _classCallCheck3.default)(this, ResponsiveFlyoutSlidePanel);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ResponsiveFlyoutSlidePanel.prototype._toggleSlidePanel = function _toggleSlidePanel() {
    var slidePanel = this.refs.jsSlidePanel;
    slidePanel.toggleSlidePanel();
  };

  ResponsiveFlyoutSlidePanel.prototype._renderSlidePanel = function _renderSlidePanel(props) {
    var className = props.className;
    var slidepanelClassName = props.slidepanelClassName;
    var other = (0, _objectWithoutProperties3.default)(props, ["className", "slidepanelClassName"]);

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)({ "hide-content-m": !props.slidepanelOnly }) },
      _react2.default.createElement(
        "div",
        { className: "trigger", onClick: this._toggleSlidePanel.bind(this) },
        props.trigger
      ),
      _react2.default.createElement(
        _slidepanel2.default,
        (0, _extends3.default)({}, other, {
          ref: "jsSlidePanel",
          direction: "bottom",
          className: slidepanelClassName
        }),
        props.children
      )
    );
  };

  ResponsiveFlyoutSlidePanel.prototype._renderFlyout = function _renderFlyout(props) {
    var className = props.className;
    var flyoutClassName = props.flyoutClassName;
    var other = (0, _objectWithoutProperties3.default)(props, ["className", "flyoutClassName"]);

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)({ "hide-content-max-m": !props.flyoutOnly }) },
      _react2.default.createElement(
        _flyoutMagic2.default,
        (0, _extends3.default)({}, other, {
          className: flyoutClassName,
          active: props.showFlyout,
          padded: true,
          fixed: true,
          direction: props.flyoutDirection,
          size: props.flyoutSize
        }),
        props.children
      )
    );
  };

  ResponsiveFlyoutSlidePanel.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("responsive-flyout-slidepanel", this.props.className) },
      !this.props.slidepanelOnly && this._renderFlyout(this.props),
      !this.props.flyoutOnly && this._renderSlidePanel(this.props)
    );
  };

  return ResponsiveFlyoutSlidePanel;
}(_react.Component);

exports.default = ResponsiveFlyoutSlidePanel;


ResponsiveFlyoutSlidePanel.displayName = "ResponsiveFlyoutSlidePanel";

ResponsiveFlyoutSlidePanel.propTypes = {
  className: _react.PropTypes.string,
  /**
   classes for flyout
   */
  flyoutClassName: _react.PropTypes.string,
  /**
  classes for slidepanel
  */
  slidepanelClassName: _react.PropTypes.string,
  /**
   element that will spawn modal onClick
   */
  trigger: _react.PropTypes.element,
  /**
   Only Render Flyout, disable slidepanel
   */
  flyoutOnly: _react.PropTypes.bool,
  /**
   Only Render slidepanel, disable flyout
   */
  slidepanelOnly: _react.PropTypes.bool,
  /**
   Used to hide and show flyout on page load
   */
  showFlyout: _react.PropTypes.bool,
  /**
   direction for flyout only
  */
  flyoutDirection: _react2.default.PropTypes.oneOf(["left", "right", "top", "bottom", "center"]),
  /**
   size for flyout only
  */
  flyoutSize: _react2.default.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),
  /**
   flyout/slidepanel content
  */
  children: _react.PropTypes.node.isRequired
};

ResponsiveFlyoutSlidePanel.defaultProps = {
  showFlyout: false,
  flyoutDirection: "right",
  flyoutSize: "wide",
  className: "",
  trigger: _react2.default.createElement(
    "span",
    { className: "HelpFlyout-trigger" },
    _react2.default.createElement("i", { className: "wmicon wmicon-help" })
  )
};