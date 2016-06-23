"use strict";

exports.__esModule = true;
exports.getRect = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _dom = require("flowtip/lib/dom");

var _dom2 = _interopRequireDefault(_dom);

var _closeButton = require("./close-button");

var _closeButton2 = _interopRequireDefault(_closeButton);

var _hideable = require("./hideable");

var _hideable2 = _interopRequireDefault(_hideable);

var _outsideClick = require("./outside-click");

var _outsideClick2 = _interopRequireDefault(_outsideClick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a new FlowTip component with the appropriate content and tail
 * elements for Walmart-style flyouts. This new FlowTip component can be
 * used to then display a flyout.
 */
var FlowTip = (0, _dom2.default)(function (_ref) {
  var children = _ref.children;
  var region = _ref.region;
  var style = _ref.style;
  var width = _ref.width;
  return _react2.default.createElement(
    "div",
    { className: "flowtip-flyout-modal flowtip-flyout-modal-" + region, style: (0, _extends3.default)({
        width: width
      }, style) },
    children
  );
}, function (_ref2) {
  var children = _ref2.children;
  var region = _ref2.region;
  var style = _ref2.style;
  return _react2.default.createElement(
    "div",
    { className: "flowtip-flyout-caret flowtip-flyout-caret-" + region, style: style },
    children
  );
});

/**
 * Object of the width presets to their numerical values.
 * @type {Object}
 */

/*eslint indent: [2, 2, {"SwitchCase": 1}]*/

var widths = {
  narrow: 248,
  width: 308,
  extrawide: 388,
  fluid: "auto"
};

/**
 * Map of flyout sizes to actual widths.
 * @param {String} size Size keyword.
 * @returns {Number} Actual width.
 */
var getWidth = function getWidth(size) {
  return widths[size] || widths.narrow;
};

var wrap = function wrap(Trigger) {
  if (typeof Trigger === "function") {
    return function (_Component) {
      (0, _inherits3.default)(TriggerWrapper, _Component);

      function TriggerWrapper() {
        (0, _classCallCheck3.default)(this, TriggerWrapper);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
      }

      TriggerWrapper.prototype.render = function render() {
        return _react2.default.createElement(Trigger, this.props);
      };

      return TriggerWrapper;
    }(_react.Component);
  } else {
    // TODO: Deprecate this.
    return function (_Component2) {
      (0, _inherits3.default)(TriggerWrapper, _Component2);

      function TriggerWrapper() {
        (0, _classCallCheck3.default)(this, TriggerWrapper);
        return (0, _possibleConstructorReturn3.default)(this, _Component2.apply(this, arguments));
      }

      TriggerWrapper.prototype.render = function render() {
        var _this3 = this;

        return _react2.default.cloneElement(Trigger, (0, _extends3.default)({}, this.props, {
          onClick: function onClick() {
            return _this3.props.toggle();
          },
          onMouseEnter: function onMouseEnter() {
            return _this3.props.hover && _this3.props.show();
          }
        }));
      };

      return TriggerWrapper;
    }(_react.Component);
  }
};

var normalize = function normalize(_ref3) {
  var left = _ref3.left;
  var right = _ref3.right;
  var top = _ref3.top;
  var bottom = _ref3.bottom;
  return {
    left: left, top: top, width: right - left, height: bottom - top
  };
};

var getRect = exports.getRect = function getRect(target) {
  // TODO: This should use `getClientBoundingRect` for block elements and
  // `getClientRects` for `inline` or `inline-block` elements.
  //
  // `getClientRects` does not return width or height, so compute them as
  // necessary for flowtip and for finding the biggest. Other than that, it
  // works basically like `getClientBoundingRect`.
  // Get all the bounding boxes for the target.
  var rects = target.getClientRects();
  // Find the biggest one.
  var biggest = normalize(rects[0]);
  for (var i = 1; i < rects.length; ++i) {
    var rect = normalize(rects[i]);
    if (rect.width > biggest.width) {
      biggest = rect;
    }
  }
  return biggest;
};

/**
 * @component Flyout
 * @import {Flyout}
 *
@examples
```jsx
<Flyout trigger={({toggle}) => (
  <button onClick={toggle}>Show</button>
)} direction="left">Hello</Flyout>
```
 *
 */

var Flyout = function (_Component3) {
  (0, _inherits3.default)(Flyout, _Component3);

  function Flyout(props) {
    (0, _classCallCheck3.default)(this, Flyout);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, _Component3.call(this, props));

    _this4.state = {
      active: !!props.initialActive,
      target: { left: 0, right: 0, width: 0, height: 0 }
    };
    _this4.Trigger = wrap(props.trigger);
    return _this4;
  }

  /**
   * Update the the rect that the flyout points to. Use of `getClientRects`
   * allows the flyout to position itself intelligently when targeting multi-
   * line text.
   * @returns {void}
   */


  Flyout.prototype.updateTarget = function updateTarget() {
    // The target is always the trigger element as per `electrode` convention.
    var target = this.trigger;
    if (target) {
      // Use that as the target for the flyout.
      this.setState({ target: getRect(target) });
    }
  };

  /**
   * Show the flyout.
   * @returns {void}
   */


  Flyout.prototype.show = function show() {
    this.setActive(true);
  };

  /**
   * Hide the flyout.
   * @returns {void}
   */


  Flyout.prototype.hide = function hide() {
    this.setActive(false);
  };

  /**
   * Toggle the state of the flyout.
   * @returns {void}
   */


  Flyout.prototype.toggle = function toggle() {
    this.setActive(!this.state.active);
  };

  /**
   * Set the active state of the flyout.
   * @param {Boolean} active True to show flyout, false to hide.
   * @returns {void}
   */


  Flyout.prototype.setActive = function setActive(active) {
    var _this5 = this;

    this.setState({ active: active }, function () {
      if (active) {
        // Because the user might have done some scrolling or other layout
        // modification between the time _this_ component was mounted and the
        // time we open the flyout we have to make sure our positioning is
        // correct.
        _this5.updateTarget();
      }
      _this5.props.onActiveChange(active);
    });
  };

  /**
   * Render the close button if we should, otherwise `null`.
   * @returns {React.Element} The close button.
   */


  Flyout.prototype.renderCloseButton = function renderCloseButton() {
    var _this6 = this;

    if (!this.props.closeButton) {
      return null;
    }
    return _react2.default.createElement(_closeButton2.default, { onClick: function onClick() {
        return _this6.hide();
      } });
  };

  /**
   * Render the flyout backdrop if we should, otherwise `null`.
   * @returns {React.Element} The backdrop used to prevent closing when going to flyout.
   */


  Flyout.prototype.renderBackdrop = function renderBackdrop() {
    if (this.props.hover && this.state.active) {
      return _react2.default.createElement("div", { className: "flowtip-flyout-backdrop" });
    }
    return null;
  };

  /**
   * Render the flyout if we should, otherwise `null`.
   * @returns {React.Element} The flyout.
   */


  Flyout.prototype.renderFlyout = function renderFlyout() {
    var _this7 = this;

    if (!this.state.active) {
      return null;
    }
    return _react2.default.createElement(
      FlowTip,
      {
        region: this.props.direction,
        target: this.state.target,
        onReflow: function onReflow() {
          return _this7.updateTarget();
        },
        data: { width: getWidth(this.props.size) }
      },
      this.renderCloseButton(),
      this.props.children
    );
  };

  Flyout.prototype.renderTrigger = function renderTrigger() {
    var _this8 = this;

    var Trigger = this.Trigger;
    return _react2.default.createElement(Trigger, {
      ref: function ref(elem) {
        if (elem) {
          _this8.trigger = _reactDom2.default.findDOMNode(elem);
        } else {
          _this8.trigger = null;
        }
      },
      hover: this.props.hover,
      show: function show() {
        return _this8.show();
      },
      hide: function hide() {
        return _this8.hide();
      },
      toggle: function toggle() {
        return _this8.toggle();
      }
    });
  };

  Flyout.prototype.render = function render() {
    var _this9 = this;

    var _props = this.props;
    var className = _props.className;
    var style = _props.style;
    var hover = _props.hover;


    return _react2.default.createElement(
      _outsideClick2.default,
      { onClick: function onClick() {
          return _this9.hide();
        } },
      _react2.default.createElement(
        "div",
        {
          className: (0, _classnames2.default)("flowtip-flyout", className),
          style: style,
          onMouseLeave: hover ? function () {
            return _this9.hide();
          } : undefined },
        this.renderTrigger(),
        this.renderFlyout(),
        this.renderBackdrop()
      )
    );
  };

  return Flyout;
}(_react.Component);

Flyout.propTypes = {
  /**
   * Event triggered when the flyout toggles hidden shown state.
   */
  onActiveChange: _react2.default.PropTypes.func,

  /**
   * The trigger control. Should be a component that will recieve flyout
   * actions `show`, `hide` and `toggle`.
   */
  trigger: _react2.default.PropTypes.func,

  /**
   * The direction that the flyout should come from. Note that this is merely
   * the preferred direction of the flyout. This direction can change depending
   * on layout constraints.
   */
  direction: _react2.default.PropTypes.oneOf(["left", "right", "top", "bottom"]),

  /**
   * The size of the flyout. This is just some preset value that maps to a real
   * width.
   */
  size: _react2.default.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),

  /**
   * True if we should render a close button within the flyout.
   */
  closeButton: _react2.default.PropTypes.bool,

  /**
   * True if the flyout should open on mouse enter and close on mouse leave.
   */
  hover: _react2.default.PropTypes.bool,

  /**
   * CSS class name to apply to the flyout.
   */
  className: _react2.default.PropTypes.string,

  /**
   * Styles to apply to the flyout.
   */
  style: _react2.default.PropTypes.object,

  /**
   * The initial active state of the flyout.
   */
  initialActive: _react2.default.PropTypes.boolean,

  /**
   * Contents of the flyout.
   */
  children: _react2.default.PropTypes.node
};

Flyout.defaultProps = {
  direction: "right",
  size: "wide",
  closeButton: false,
  hover: false,
  initialActive: false,
  onActiveChange: function onActiveChange() {},
  trigger: function trigger() {
    return _react2.default.createElement(
      "span",
      null,
      "TRIGGER MISSING"
    );
  }
};

Flyout.displayName = "Flyout";

exports.default = (0, _hideable2.default)(Flyout);