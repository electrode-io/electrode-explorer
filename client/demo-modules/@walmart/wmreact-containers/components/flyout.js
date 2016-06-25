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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _reactUtils = require("@walmart/react-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cloneElement = _react2.default.cloneElement;

/**
A flyout container.
@examples
```jsx
<Flyout triggerText="Fly it out!" direction="top">
  <h1>It flew out!</h1>
</Flyout>
```
@component Flyout
@import {Flyout}
@playground
Flyout
```
<Flyout triggerText="Fly it out!" direction="top">
  <h1>It flew out!</h1>
</Flyout>
```
*/

/* global document */
/*eslint indent: [2, 2, {"SwitchCase": 1}]*/

var Flyout = function (_Component) {
  (0, _inherits3.default)(Flyout, _Component);

  function Flyout(props) {
    (0, _classCallCheck3.default)(this, Flyout);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      active: props.active || false,
      mt: null,
      ml: null
    };

    _this._documentClick = _this._documentClick.bind(_this);
    _this._onStateChangeCallback = _this._onStateChangeCallback.bind(_this);
    _this._onCloseButtonClick = _this._onCloseButtonClick.bind(_this);
    _this._resetDocumentClickHandlers = _this._resetDocumentClickHandlers.bind(_this);
    _this._handleLinkNav = _this._handleLinkNav.bind(_this);
    _this._onTrigger = _this._onTrigger.bind(_this);
    _this._mouseEnter = _this._mouseEnter.bind(_this);
    _this._mouseLeave = _this._mouseLeave.bind(_this);
    _this._positionFlyout = _this._positionFlyout.bind(_this);
    return _this;
  }

  Flyout.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener("click", this._documentClick);
    document.removeEventListener("touchstart", this._documentClick);
  };

  Flyout.prototype.componentDidMount = function componentDidMount() {
    this._positionFlyout();
  };

  Flyout.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    /**
     * Ideally this component would be stateless and the `active` prop would
     * be the only way to change the flyout state. But `setState` is used
     * heavily in this component and using only props would break too much.
     * For now, update the `active` state only if the prop is set and
     * not equal to the current `active` state.
     */
    var isControlled = this.props.active !== null;

    if (isControlled && nextProps.active !== this.state.active) {
      this.setState({ active: nextProps.active });
    }
  };

  Flyout.prototype._isTouchDevice = function _isTouchDevice() {
    return (0, _reactUtils.isTouchDevice)(window);
  };

  Flyout.prototype._documentClick = function _documentClick(e) {
    var _this2 = this;

    var closeOnClickOut = this.props.closeOnClickOut;
    var flyout = this.refs.flyout;


    if (closeOnClickOut) {
      var foundNode = _reactDom2.default.findDOMNode(flyout);

      /**
       * This is necessary for detecting clicks inside of a deeply nested child.
       * Provides null-safety for PhantomJS testing.
       * @param {object} path DOM path
       * @returns {array} Classnames of node
       */
      var getClassNames = function getClassNames(path) {
        return path ? path.map((node) => node.className) : [];
      };

      var nodeClasses = getClassNames(e.path);

      if (foundNode && e.target !== foundNode && foundNode.contains(e.target) !== true && !nodeClasses.join().match("flyout-modal")) {
        this.setState({ active: false }, function () {
          if (_this2.props.onActiveChange) {
            _this2.props.onActiveChange(_this2.state.active);
          }
        });
      }
    }
  };

  Flyout.prototype._resetDocumentClickHandlers = function _resetDocumentClickHandlers(active) {
    if (active) {
      document.addEventListener("click", this._documentClick);
      document.addEventListener("touchstart", this._documentClick);
    } else {
      document.removeEventListener("click", this._documentClick);
      document.removeEventListener("touchstart", this._documentClick);
    }
  };

  Flyout.prototype._onStateChangeCallback = function _onStateChangeCallback() {
    var onActiveChange = this.props.onActiveChange;
    var active = this.state.active;

    onActiveChange(active);
    this._resetDocumentClickHandlers(active);
    this._positionFlyout();
  };

  Flyout.prototype._onCloseButtonClick = function _onCloseButtonClick(ev) {
    this._handleLinkNav(ev);
    this.setState({ active: !this.state.active }, this._onStateChangeCallback);
  };

  Flyout.prototype._onTrigger = function _onTrigger(ev) {
    var _this3 = this;

    this._handleLinkNav(ev);

    this.setState({ active: !this.state.active }, function () {
      _this3._onStateChangeCallback();
      _this3.props.onTriggerElementClick(ev);
    });
  };

  Flyout.prototype._handleLinkNav = function _handleLinkNav(e) {
    e.preventDefault();
    var href = e.currentTarget.href || e.target.href;
    if (href && this.props.disableTouchLinksOnly && !this._isTouchDevice()) {
      this._navigateWindow(href);
    }
  };

  Flyout.prototype._navigateWindow = function _navigateWindow(url) {
    window.location = url;
  };

  Flyout.prototype._positionFlyout = function _positionFlyout() {
    var modal = _reactDom2.default.findDOMNode(this.refs.modal);
    var flyout = _reactDom2.default.findDOMNode(this.refs.flyout);
    var _props = this.props;
    var direction = _props.direction;
    var size = _props.size;
    var align = _props.align;

    var newState = {};
    if (direction === "left" || direction === "right" || direction === "center") {
      newState.mt = Math.round(modal.offsetHeight / 2) * -1;
    }
    if (size === "fluid" || align === "center") {
      newState.ml = Math.round(modal.offsetWidth / 2) * -1;
    }
    if (align === "bottom" && direction === "center") {
      var modalHt = Math.round(modal.offsetHeight);
      var btnHt = Math.round(flyout.offsetHeight);
      if (btnHt <= modalHt) {
        newState.mt = (modalHt - btnHt) * -1;
      }
      newState.ml = Math.round(modal.offsetWidth / 2) * -1;
    }
    this.setState(newState);
  };

  Flyout.prototype._mouseEnter = function _mouseEnter() {
    var _this4 = this;

    if (this.props.hover && !this._isTouchDevice()) {
      this.setState({ active: true }, function () {
        _this4._positionFlyout();
        if (_this4.props.onActiveChange) {
          _this4.props.onActiveChange(_this4.state.active);
        }
      });
    }
  };

  Flyout.prototype._mouseLeave = function _mouseLeave() {
    var _this5 = this;

    if (this.props.hover && !this._isTouchDevice()) {
      this.setState({ active: false }, function () {
        if (_this5.props.onActiveChange) {
          _this5.props.onActiveChange(_this5.state.active);
        }
      });
    }
  };

  Flyout.prototype._addDirectionAndAlign = function _addDirectionAndAlign() {
    var extras = {};

    extras["flyout-" + this.props.direction] = true;
    extras["flyout-align-" + this.props.align] = true;

    return extras;
  };

  Flyout.prototype._renderCloseButton = function _renderCloseButton(closeButton) {
    if (closeButton) {
      return _react2.default.createElement(
        "button",
        { className: "flyout-close", type: "button", onClick: this._onCloseButtonClick },
        _react2.default.createElement(_icon2.default.Remove, null),
        _react2.default.createElement(
          "span",
          { className: "visuallyhidden" },
          "Close"
        )
      );
    }
  };

  Flyout.prototype._getBackdrop = function _getBackdrop() {
    var classes = (0, _classnames2.default)("flyout-backdrop", {
      "display-block": this.state.active
    });
    if (this.props.hover) {
      return _react2.default.createElement("div", { className: classes });
    }
    return null;
  };

  Flyout.prototype._renderTrigger = function _renderTrigger(_ref) {
    var triggerText = _ref.triggerText;
    var trigger = _ref.trigger;

    // by default we will render the trigger element as a button.
    var triggerEl = _react2.default.createElement(
      _button2.default,
      { onClick: this._onTrigger, onMouseEnter: this._mouseEnter,
        className: "flyout-trigger" },
      triggerText
    );

    // if a custom trigger element is passed
    if (trigger) {
      // clone the element
      triggerEl = cloneElement(trigger, {
        onClick: this._onTrigger,
        onMouseEnter: this._mouseEnter,
        className: (0, _classnames2.default)(trigger.props.className, "flyout-trigger")
      });
    }

    // return the new triggerEl
    return triggerEl;
  };

  Flyout.prototype.render = function render() {
    var modalExtras = {};
    var modalFluid = {};

    if (this.props.size === "fluid") {
      modalFluid["flyout-fluid"] = true;
    } else {
      modalExtras["flyout-modal-" + this.props.size] = true;
    }

    if (this.props.block) {
      modalFluid["flyout-block"] = true;
    }

    var backdrop = this._getBackdrop();

    var classes = (0, _classnames2.default)("flyout", this._addDirectionAndAlign(), this.props.hidden ? "hide-content" : "", this.props.className, modalFluid);

    return _react2.default.createElement(
      "div",
      { className: classes, ref: "flyout", onMouseLeave: this._mouseLeave },
      backdrop,
      this._renderTrigger(this.props),
      _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("flyout-modal", modalExtras),
          ref: "modal",
          style: {
            display: this.state.active ? "block" : "none",
            marginTop: this.state.mt,
            marginLeft: this.state.ml
          } },
        this._renderCloseButton(this.props.closeButton),
        this.props.children
      )
    );
  };

  return Flyout;
}(_react.Component);

Flyout.displayName = "Flyout";
Flyout.propTypes = {
  /**
  Event triggered when the flyout toggles hidden shown state.
  */
  onActiveChange: _react2.default.PropTypes.func,
  /**
  The trigger control
  */
  trigger: _react2.default.PropTypes.node,
  /**
  The trigger text if you just want a button
  */
  triggerText: _react2.default.PropTypes.node,
  /**
  The direction that the flyout should come from
  */
  direction: _react2.default.PropTypes.oneOf(["left", "right", "top", "bottom", "center"]),
  /**
  The size of the flyout
  */
  size: _react2.default.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),
  /**
  The alignment of the flyout
  */
  align: _react2.default.PropTypes.oneOf(["left", "right", "center"]),
  /**
  Whether to render as a block element (apply the "flyout-block" class)
  */
  block: _react2.default.PropTypes.bool,
  /**
  True if the flyout is shown. If not set, component defaults to using internal state control.
  */
  active: _react2.default.PropTypes.bool,
  /**
  True if we should render a close button within the flyout
  */
  closeButton: _react2.default.PropTypes.bool,
  /**
  True if we should close the flyout if the user clicks outside of it
  */
  closeOnClickOut: _react2.default.PropTypes.bool,
  /**
  To display on hover pass in true
  */
  hover: _react2.default.PropTypes.bool,
  /**
  To display on hover pass in true
  */
  hoverTimeout: _react2.default.PropTypes.string,
  /**
  To make the flyout toggle prevent default on touch devices only
  */
  disableTouchLinksOnly: _react2.default.PropTypes.bool,
  /**
  An additional click handler hook for the passed in trigger element
  */
  onTriggerElementClick: _react2.default.PropTypes.func,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

Flyout.defaultProps = {
  direction: "right",
  size: "wide",
  align: null,
  block: false,
  active: null,
  closeButton: false,
  closeOnClickOut: true,
  hover: false,
  disableTouchLinksOnly: true,
  onTriggerElementClick: function onTriggerElementClick() {},
  onActiveChange: function onActiveChange() {}
};

exports.default = Flyout;