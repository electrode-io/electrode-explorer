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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A fixed bar component.
@examples
```jsx
<Fixie>
   <p>Fixed when you scroll past</p>
</Fixie>
```

Fixed at the bottom:

```jsx
<Fixie fixedAtBottom={true}>
  <p>Fixed when you scroll past the bottom</p>
</Fixie>
```

Supporting replaced content when fixed

```jsx
<Fixie fixedContent={<div>Different content when fixed</div>}>
  <p>Content when not fixed</p>
</Fixie>
```

CSS mode to add a class to existing DOM rather than creating new elements. Doesn't support different
fixed content.

```jsx
<Fixie cssMode={true}>
  <p>Content fixed with CSS mode</p>
</Fixie>
```
@component Fixie
@import {Fixie}
@playground
Fixie
```
<div>
  <Fixie>
    <p>Fixed when you scroll past</p>
  </Fixie>

  <Fixie fixedAtBottom={true}>
    <p>Fixed when you scroll past the bottom</p>
  </Fixie>

  <Fixie fixedContent={<div>Different content when fixed</div>}>
    <p>Content when not fixed</p>
  </Fixie>

  <Fixie cssMode={true}>
    <p style={{ margin: 0, textAlign: "right" }}>Content fixed with CSS mode</p>
  </Fixie>
</div>
```
*/
var Fixie = function (_React$Component) {
  (0, _inherits3.default)(Fixie, _React$Component);

  function Fixie(props) {
    (0, _classCallCheck3.default)(this, Fixie);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {
      active: false
    };

    _this._checkPosition = _this._checkPosition.bind(_this);
    return _this;
  }

  Fixie.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this._checkPosition);
    window.addEventListener("resize", this._checkPosition);

    // Defer initial position check to next event loop. Prevents
    // element.getBoundingClientRect() from returning incorrect values while
    // initial render occurs.
    // Keep track of the timer so we can use `clearTimeout` on it, in case the
    // component unmounts before the timeout fires. This will prevent some
    // unnecessary work and React from issuing a warning about `setState` being
    // called on an unmounted component.
    this._initialCheckTimer = window.setTimeout(this._checkPosition, 1);
  };

  Fixie.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    // Set height on wrapper when switching to position fixed to avoid jumpiness
    if (nextProps.cssMode) {
      if (!this.state.active && nextState.active) {
        this.height = _reactDom2.default.findDOMNode(this).offsetHeight;
      } else if (this.state.active && !nextState.active) {
        this.height = null;
      }
    }
  };

  Fixie.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this._checkPosition);
    window.removeEventListener("resize", this._checkPosition);
    window.clearTimeout(this._initialCheckTimer);
  };

  Fixie.prototype._checkPosition = function _checkPosition() {
    var isActive = this.props.fixedAtBottom ? !(_reactDom2.default.findDOMNode(this).getBoundingClientRect().bottom > 0) : !(_reactDom2.default.findDOMNode(this).getBoundingClientRect().top >= 0);

    if (this.state.active !== isActive) {
      this.setState({
        active: isActive
      });
    }
  };

  Fixie.prototype._renderFixie = function _renderFixie() {
    if (!this.state.active) {
      return null;
    }

    return _react2.default.createElement(
      "div",
      { className: "fixie", ariaHidden: true },
      this.props.fixedContent ? this.props.fixedContent : this.props.children
    );
  };

  Fixie.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;
    var cssMode = _props.cssMode;
    var active = this.state.active;


    if (cssMode) {
      return _react2.default.createElement(
        "div",
        { style: { height: this.height } },
        _react2.default.createElement(
          "div",
          { className: (0, _classnames2.default)({ "fixie is-fixed": active }) },
          children
        )
      );
    } else {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: (0, _classnames2.default)({ "u-invisible": active }) },
          children
        ),
        this._renderFixie()
      );
    }
  };

  return Fixie;
}(_react2.default.Component);

Fixie.propTypes = {
  /**
   The content that should be used when fixed
   */
  fixedContent: _react2.default.PropTypes.node,
  /**
   True if it should be fixed at the bottom
   */
  fixedAtBottom: _react2.default.PropTypes.bool,
  /**
  True if Fixie should just add CSS classes instead of creating DOM elements
  */
  cssMode: _react2.default.PropTypes.bool
};

Fixie.defaultProps = {
  fixedContent: null,
  fixedAtBottom: false,
  cssMode: false
};

exports.default = Fixie;