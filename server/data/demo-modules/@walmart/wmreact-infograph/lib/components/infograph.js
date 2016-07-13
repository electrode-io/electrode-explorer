"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTweenState = require("react-tween-state");

var _reactTweenState2 = _interopRequireDefault(_reactTweenState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _sequenceNames = ["first", "second", "third", "fourth", "fifth", "sixth"];

var _countNames = ["", "one", "two", "three", "four", "five", "six"];

/**
Infograph component.
@examples
```jsx
<Infograph
  labels={["One", "Two", "Three", "Four", "Five"]}
  completed={2} />
```
@component Infograph
@import {Infograph}
@synonym progress
@playground
Simple
```
<div>
  <div style={{margin:50}}>
    <Infograph
      labels={["One", "Two", "Three", "Four", "Five"]}
      completed={2} />
  </div>
  <div style={{margin:50}}>
    <Infograph
      labels={["One", "Two", "Three", "Four"]}
      completed={1} />
  </div>
  <div style={{margin:50}}>
    <Infograph
      labels={["One", "Two", "Three", "Four", "Five", "Six"]}
      completed={6} />
  </div>
</div>
```
@playground
Animated
!noRenderFalse!
```
var InfographExample = React.createClass({
  getInitialState() {
    return {
      percent: 20
    }
  },
  changePercentage() {
    var pct = Math.random() * 100.0;
    this.setState({
      percent: Math.min(100, Math.max(10, pct))
    });
  },
  render() {
    return (
      <div>
        <div style={{margin:50}}>
          <Infograph
            labels={["One", "Two", "Three", "Four", "Five"]}
            completedPercent={this.state.percent} />
        </div>
        <a href="javascript:void(0)" onClick={this.changePercentage}>
          Change Percentage
        </a>
      </div>
    )
  }
});

React.render(<InfographExample/>, mountNode);
```
*/
var Infograph = _react2.default.createClass({
  displayName: "Infograph",

  mixins: [_reactTweenState2.default.Mixin],

  propTypes: {
    /**
    Labels to use for the step points
    */
    labels: _react2.default.PropTypes.array.isRequired,
    /**
    The number of items completed
    */
    completed: _react2.default.PropTypes.number,
    /**
    The percentage completed
    */
    completedPercent: _react2.default.PropTypes.number,
    /**
    The animation speed in milliseconds
    */
    animationSpeed: _react2.default.PropTypes.number,
    /**
    The animation easing
    */
    animationEasing: _react2.default.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      labels: [],
      completed: null,
      completedPercent: null,
      animationSpeed: 500,
      animationEasing: _reactTweenState2.default.easingTypes.easeInOutQuad
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.tweenState("completedPercent", {
      easing: this.props.animationEasing,
      duration: this.props.animationSpeed,
      startValue: this.state.completedPercent,
      endValue: nextProps.completedPercent
    });
  },
  getInitialState: function getInitialState() {
    return {
      completedPercent: this.props.completedPercent
    };
  },
  renderBar: function renderBar() {
    var width = this.getTweeningValue("completedPercent");
    if (!width) {
      var sectionWidth = 100 / (this.props.labels.length - 1);
      var completed = this.props.completed || 1;
      width = sectionWidth * Math.max(completed - 1, 0);
    }
    return _react2.default.createElement(
      "div",
      { className: "infograph-bar" },
      _react2.default.createElement("span", {
        style: { width: width + "%" },
        className: "infograph-bar-progress" })
    );
  },
  getCompleted: function getCompleted() {
    var comp = this.props.completed;
    if (!comp) {
      var sectionWidth = 100 / (this.props.labels.length - 1);
      comp = Math.floor(this.getTweeningValue("completedPercent") / sectionWidth) + 1;
      comp = Math.min(this.props.labels.length, Math.max(1, comp));
      if (this.getTweeningValue("completedPercent") >= 100.0) {
        comp = this.props.labels.length;
      }
    }
    return comp;
  },
  renderFootprint: function renderFootprint(label, index) {
    var item = "footprints-item-";
    item += index < this.props.labels.length - 1 ? _sequenceNames[index] : "last";
    var cName = (0, _classnames2.default)("infograph-footprint", item, {
      "active": this.getCompleted() - 1 === index
    });
    return _react2.default.createElement(
      "div",
      {
        className: cName,
        key: index },
      _react2.default.createElement(
        "div",
        { className: "infograph-point" },
        _react2.default.createElement(_icon2.default, { className: "infograph-ok", name: "ok" })
      ),
      _react2.default.createElement(
        "span",
        { className: "infograph-label" },
        label
      )
    );
  },
  renderFootprints: function renderFootprints() {
    var cName = "infograph-" + _countNames[this.props.labels.length] + "-footprints";
    var self = this;
    return _react2.default.createElement(
      "div",
      { className: cName },
      this.props.labels.map(function (label, index) {
        return self.renderFootprint(label, index);
      })
    );
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: "infograph-container" },
      _react2.default.createElement(
        "div",
        { className: "infograph" },
        this.renderBar(),
        this.renderFootprints()
      )
    );
  }
});

exports.default = Infograph;