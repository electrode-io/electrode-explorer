"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A item summary container specifically for accordions.
@examples
```jsx
<Accordion>
  <Accordion.Item title="Step 1"
    titleExtra={
      <Accordion.Summary>
        <span>A summary item of step 1</span>
        <span>And another one</span>
      </Accordion.Summary>}>
    <h1>First Step Content</h1>
  </Accordion.Item>
</Accordion>
```
@import Accordion
@component Accordion.Summary
@references Accordion
@playground
```
<Accordion.Summary>
  <span>A summary item of step 1</span>
  <span>And another one</span>
</Accordion.Summary>
```
*/
exports.default = _react2.default.createClass({
  displayName: "Accordion.ItemSummary",

  propTypes: {
    /**
    True if we should add the `in-review` class
    */
    inReview: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      inReview: false
    };
  },
  _renderSummaryItem: function _renderSummaryItem(child, index) {
    return _react2.default.createElement(
      "div",
      { key: index, className: "zeus-accordion-summary-item" },
      child
    );
  },
  render: function render() {
    var summaryClasses = (0, _classnames2.default)("zeus-accordion-summary", this.props.inReview ? "in-review" : "inactive");

    return _react2.default.createElement(
      "div",
      { className: summaryClasses },
      _react2.default.Children.map(this.props.children, this._renderSummaryItem)
    );
  }
});