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

/**
A slide panel.
@examples
```jsx
var SlidePanelExample = React.createClass({
  _toggleSlidePanel() {
    var slidePanel = this.refs.jsSlidePanel;
    slidePanel.toggleSlidePanel();
  },
  render() {
    return(<div>
      <button type="button" onClick={this._toggleSlidePanel} >Open Slide Panel</button>
      <SlidePanel ref="jsSlidePanel" direction="right">
        &nbsp;Slide panel content goes here.
      </SlidePanel>
      </div>)
  }
});

React.render(<SlidePanelExample/>, mountNode);
```
@component SlidePanel
@import {SlidePanel}
@playground
SlidePanel
!noRenderFalse!
```
var SlidePanelExample = React.createClass({
  _toggleSlidePanel() {
    var slidePanel = this.refs.jsSlidePanel;
    slidePanel.toggleSlidePanel();
  },
  render() {
    return(<div>
      <button type="button" onClick={this._toggleSlidePanel} >Open Slide Panel</button>
      <SlidePanel ref="jsSlidePanel" direction="right" onClose={() => console.log("foo")}>
        &nbsp;Slide panel content goes here.
      </SlidePanel>
      </div>)
  }
});

React.render(<SlidePanelExample/>, mountNode);
```
*/

var SlidePanel = function (_Component) {
  (0, _inherits3.default)(SlidePanel, _Component);

  function SlidePanel(props) {
    (0, _classCallCheck3.default)(this, SlidePanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      active: props.active
    };

    _this.toggleSlidePanel = _this.toggleSlidePanel.bind(_this);
    return _this;
  }

  SlidePanel.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      this.setState({ active: nextProps.active });
    }
  };

  SlidePanel.prototype._getDefaultHeader = function _getDefaultHeader() {
    return _react2.default.createElement(
      _button2.default,
      { fakelink: true, onClick: this.toggleSlidePanel },
      "Back"
    );
  };

  SlidePanel.prototype._getComponentClasses = function _getComponentClasses(_ref) {
    var className = _ref.className;
    var direction = _ref.direction;
    var active = _ref.active;

    var directionClass = "slidepanel-slide-from-" + direction;
    return (0, _classnames2.default)("slidepanel", directionClass, className, {
      "slidepanel--open": active
    });
  };

  // Toggles the slide panel open and closed


  SlidePanel.prototype.toggleSlidePanel = function toggleSlidePanel() {
    var _this2 = this;

    this.setState({
      active: !this.state.active
    }, function () {
      // when the slide panel is closed, call
      // the onClose callback handler.
      if (!_this2.state.active) {
        _this2.props.onClose();
      }
    });
  };

  SlidePanel.prototype._getSlidePanelStyles = function _getSlidePanelStyles(_ref2) {
    var backgroundColor = _ref2.backgroundColor;

    return { backgroundColor: backgroundColor };
  };

  SlidePanel.prototype.render = function render() {
    var _props = this.props;
    var header = _props.header;
    var children = _props.children;
    var className = _props.className;
    var direction = _props.direction;
    var active = this.state.active;

    return _react2.default.createElement(
      "div",
      { style: this._getSlidePanelStyles(this.props),
        className: this._getComponentClasses({
          className: className, direction: direction, active: active
        }) },
      _react2.default.createElement(
        "div",
        { className: "slidepanel-header padding" },
        header ? header : this._getDefaultHeader()
      ),
      _react2.default.createElement(
        "div",
        { className: "slidepanel-body" },
        children
      )
    );
  };

  return SlidePanel;
}(_react.Component);

SlidePanel.displayName = "SlidePanel";

SlidePanel.propTypes = {
  /*
    True if the SlidePanel is open
  */
  active: _react.PropTypes.bool,
  /**
    The direction of the panel
  */
  direction: _react.PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /**
    The background color
  */
  backgroundColor: _react.PropTypes.string,
  /**
    The header of the panel
  */
  header: _react.PropTypes.any,
  /**
  Children
  */
  children: _react.PropTypes.any,
  /**
    Set callback on Component
  */
  onClose: _react.PropTypes.func,
  /**
    Any additional style classes
  */
  className: _react.PropTypes.string
};

SlidePanel.defaultProps = {
  active: false,
  direction: "right",
  backgroundColor: "#fff",
  onClose: function onClose() {},
  className: ""
};

exports.default = SlidePanel;