"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactTweenState = require("react-tween-state");

var _reactTweenState2 = _interopRequireDefault(_reactTweenState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
The content section of a Tabber
@component Tabber.Content
@import {Tabber}
@references Tabber
*/
exports.default = _react2.default.createClass({
  displayName: "Tabber.Content",

  mixins: [_reactTweenState2.default.Mixin],

  propTypes: {
    /**
    True if we should adjust to auto height
    */
    autoHeight: _react2.default.PropTypes.bool,
    /**
    True if this is the active tab
    */
    activeTab: _react2.default.PropTypes.number,
    /**
    The easing function we should use on opening
    */
    easingType: _react2.default.PropTypes.string,
    /**
    The speed of the height change
    */
    autoHeightSpeed: _react2.default.PropTypes.number,
    style: _react2.default.PropTypes.string,
    className: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node
  },

  getInitialState: function getInitialState() {
    return {
      currentHeight: null,
      animating: false
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      autoHeight: false,
      autoHeightSpeed: 400,
      easingType: "easeInOutQuad"
    };
  },
  componentDidMount: function componentDidMount() {
    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      currentHeight: this._getHeight()
    });
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (this.props.autoHeight && this.props.activeTab !== prevProps.activeTab) {
      this.setState({ // eslint-disable-line react/no-did-update-set-state
        animating: true
      }, this._startTween);
    }
  },
  cancelAnimation: function cancelAnimation() {
    if (this.getTweeningValue("currentHeight") === this.state.currentHeight) {
      this.setState({
        animating: false
      });
    }
  },
  _startTween: function _startTween() {
    this.tweenState("currentHeight", {
      easing: _reactTweenState2.default.easingTypes[this.props.easingType],
      duration: this.props.autoHeightSpeed,
      endValue: this._getHeight(),
      onEnd: this.cancelAnimation
    });
  },
  _displayActive: function _displayActive(section, i) {
    if (this.props.activeTab !== i || !section) {
      return null;
    }

    return _react2.default.cloneElement(section, {
      ref: "activeTab"
    });
  },
  _getHeight: function _getHeight() {
    if (!this.refs.activeTab) {
      return 0;
    }

    return _reactDom2.default.findDOMNode(this.refs.activeTab).offsetHeight || 0;
  },
  _getStyle: function _getStyle() {
    return (0, _objectAssign2.default)({}, this.props.style, this.state.currentHeight && this.state.animating && {
      height: this.getTweeningValue("currentHeight"),
      overflow: "hidden"
    });
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: this.props.className, style: this._getStyle() },
      _react2.default.Children.map(this.props.children, this._displayActive, this)
    );
  }
});