"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(SlidePanel, _Component);

  function SlidePanel(props) {
    _classCallCheck(this, SlidePanel);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SlidePanel).call(this, props));

    _this.state = {
      active: props.active
    };

    _this.toggleSlidePanel = _this.toggleSlidePanel.bind(_this);
    return _this;
  }

  _createClass(SlidePanel, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active !== this.props.active) {
        this.setState({ active: nextProps.active });
      }
    }
  }, {
    key: "_getDefaultHeader",
    value: function _getDefaultHeader() {
      return _react2.default.createElement(
        _button2.default,
        { fakelink: true, onClick: this.toggleSlidePanel },
        "Back"
      );
    }
  }, {
    key: "_getComponentClasses",
    value: function _getComponentClasses(_ref) {
      var className = _ref.className;
      var direction = _ref.direction;
      var active = _ref.active;

      var directionClass = "slidepanel-slide-from-" + direction;
      return (0, _classnames2.default)("slidepanel", directionClass, className, {
        "slidepanel--open": active
      });
    }

    // Toggles the slide panel open and closed

  }, {
    key: "toggleSlidePanel",
    value: function toggleSlidePanel() {
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
    }
  }, {
    key: "_getSlidePanelStyles",
    value: function _getSlidePanelStyles(_ref2) {
      var backgroundColor = _ref2.backgroundColor;

      return { backgroundColor: backgroundColor };
    }
  }, {
    key: "render",
    value: function render() {
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
    }
  }]);

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