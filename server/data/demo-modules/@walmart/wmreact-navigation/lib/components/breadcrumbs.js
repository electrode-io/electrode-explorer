"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Breadcrumbs control.
@examples
```jsx
<Breadcrumbs automationId="demo-breadcrumbs">
  <a>Breadcrumb 1</a>
  <a>Breadcrumb 2</a>
  <a>Breadcrumb 3</a>
</Breadcrumbs>
```
@component Breadcrumbs
@import {Breadcrumbs}
@playground
Breadcrumbs
```
<Breadcrumbs automationId="demo-breadcrumbs">
  <a>Breadcrumb 1</a>
  <a>Breadcrumb 2</a>
  <a>Breadcrumb 3</a>
</Breadcrumbs>
```
*/
exports.default = _react2.default.createClass({
  displayName: "Breadcrumbs",

  mixins: [_react2.default.PureRenderMixin],

  propTypes: {
    /**
    True if we should apply the mini CSS
    */
    mini: _react2.default.PropTypes.bool,
    /**
    Optional automation ID
    */
    automationId: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
    hidden: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      mini: false
    };
  },
  render: function render() {
    var self = this;
    var count = _react2.default.Children.count(this.props.children) - 1;
    var children = _react2.default.Children.map(this.props.children, function (child, index) {
      var automationId = self.props.automationId ? self.props.automationId : "breadcrumb";
      automationId += "-item-" + index;

      return _react2.default.createElement(
        "li",
        { key: index,
          "data-automation-id": automationId,
          className: "breadcrumb " + (index === count ? "active" : ""),
          itemType: "http://data-vocabulary.org/Breadcrumb" },
        child
      );
    });

    return _react2.default.createElement(
      "nav",
      { className: this.props.hidden ? "hide-content" : "",
        "data-automation-id": this.props.automationId },
      _react2.default.createElement(
        "ol",
        { className: "breadcrumb-list " + (this.props.mini ? "breadcrumb-list-mini" : "") },
        children
      )
    );
  }
});