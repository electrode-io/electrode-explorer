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

var _collapsable = require("@walmart/wmreact-layout/lib/components/collapsable");

var _collapsable2 = _interopRequireDefault(_collapsable);

var _button = require("./button");

var _button2 = _interopRequireDefault(_button);

var _fireUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-ui-event");

var _fireUiEvent2 = _interopRequireDefault(_fireUiEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A revelear component
@examples
```jsx
<Revealer baseHeight={100} defaultOpen={false} disableClose={true}>
  Foo
</Revealer>
```
@component Revealer
@import {Revealer}
@playground
Revealer
```
<Revealer baseHeight={100} defaultOpen={false} disableClose={true}>
  <ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
    <li>Item four</li>
    <li>Item five</li>
    <li>Item six</li>
    <li>Item seven</li>
    <li>Item eight</li>
    <li>Item nine</li>
    <li>Item ten</li>
  </ul>
</Revealer>
```
*/

var Revealer = function (_React$Component) {
  (0, _inherits3.default)(Revealer, _React$Component);

  function Revealer(props) {
    (0, _classCallCheck3.default)(this, Revealer);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

    _this.state = {
      isOpen: props.defaultOpen,
      visibleToggle: props.defaultOpen && props.disableClose ? false : true,
      baseHeight: props.baseHeight,
      contentSet: false
    };
    return _this;
  }

  Revealer.prototype.componentDidMount = function componentDidMount() {
    this.normalizeHeight();
  };

  Revealer.prototype._afterAnimation = function _afterAnimation() {
    if (this.state.isOpen && this.props.disableClose) {
      this.setState({
        visibleToggle: false
      });
    }
  };

  Revealer.prototype.componentDidUpdate = function componentDidUpdate() {
    this.normalizeHeight();
  };

  Revealer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // If the content is changing, reset baseHeight and visibleToggle
    if (nextProps.children !== this.props.children) {
      this.setState({
        baseHeight: nextProps.baseHeight,
        contentSet: false,
        visibleToggle: nextProps.defaultOpen && nextProps.disableClose ? false : true
      });
    }
  };

  Revealer.prototype.normalizeHeight = function normalizeHeight() {
    // Check that our content fills the baseHeight, if not, remove toggle and
    // slim down
    var contentElement = _reactDom2.default.findDOMNode(this.refs.content);
    var contentWidth = contentElement.offsetWidth;
    var contentHeight = contentElement.offsetHeight;

    this.checkVisibilityAndResize(contentHeight, contentWidth);
  };

  Revealer.prototype.checkVisibilityAndResize = function checkVisibilityAndResize(contentHeight, contentWidth) {
    // Exit early if the element"s has no height or width, indicating that it"s
    // not visible.
    if (contentWidth === 0 && contentHeight === 0) {
      return;
    }

    if (contentHeight < this.state.baseHeight) {
      this.setState({
        baseHeight: contentHeight,
        visibleToggle: false,
        contentSet: true
      });
    }
  };

  Revealer.prototype.toggleOpen = function toggleOpen(event) {
    this.setState({
      isOpen: !this.state.isOpen
    });

    (0, _fireUiEvent2.default)(this, event, { eventType: "toggleOpen" });
  };

  Revealer.prototype.render = function render() {
    var _this2 = this;

    var buttonText = this.state.isOpen ? this.props.buttonOpenText : this.props.buttonClosedText;
    var baseHeight = this.state.contentSet ? this.state.baseHeight + 20 : // This makes up for the 20px margin-top
    this.state.baseHeight; // that was cutting off the text.

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _collapsable2.default,
        {
          containerClassName: (0, _classnames2.default)({ "is-open": this.state.isOpen }),
          baseHeight: baseHeight,
          isOpen: this.state.isOpen,
          transitionComplete: function transitionComplete() {
            return _this2._afterAnimation();
          }
        },
        _react2.default.createElement(
          "div",
          { ref: "content" },
          this.props.children
        )
      ),
      this.state.visibleToggle && _react2.default.createElement(
        "div",
        {
          className: (0, _classnames2.default)("revealer-footer", { "is-active": this.state.isOpen }, { "border": this.props.border })
        },
        _react2.default.createElement(
          _button2.default,
          {
            fakelink: this.props.fakeLink,
            inverse: this.props.inverse,
            className: (0, _classnames2.default)("caret", "caret-blue", "font-semibold", "copy-mini", { "active": this.state.isOpen }),
            onClick: function onClick(ev) {
              return _this2.toggleOpen(ev);
            }
          },
          buttonText
        )
      )
    );
  };

  return Revealer;
}(_react2.default.Component);

exports.default = Revealer;


Revealer.displayName = "Revealer";

Revealer.propTypes = {
  /**
  The base height of the container
  */
  baseHeight: _react2.default.PropTypes.number,
  /**
  True if we should display a border above the button
  */
  border: _react2.default.PropTypes.bool,
  /**
  Text to be displayed within the button when closed
  */
  buttonClosedText: _react2.default.PropTypes.string,
  /**
  Text to be displayed within the button when open
  */
  buttonOpenText: _react2.default.PropTypes.string,
  /**
  Children node to be placed in collapsable container
  */
  children: _react2.default.PropTypes.node,
  /**
  True if the revealer should start open
  */
  defaultOpen: _react2.default.PropTypes.bool,
  /**
  True the revealer should not be closeable
  */
  disableClose: _react2.default.PropTypes.bool,
  /**
  True if we should display button as a fake link
  */
  fakeLink: _react2.default.PropTypes.bool,
  /**
  True if we should display the inverse button
  */
  inverse: _react2.default.PropTypes.bool
};

Revealer.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

Revealer.defaultProps = {
  baseHeight: 100,
  border: true,
  buttonClosedText: "Show more",
  buttonOpenText: "Show less",
  defaultOpen: false,
  disableClose: false,
  fakeLink: true,
  inverse: false
};