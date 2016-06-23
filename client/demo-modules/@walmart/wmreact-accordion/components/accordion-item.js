"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _collapsable = require("@walmart/wmreact-layout/lib/components/collapsable");

var _collapsable2 = _interopRequireDefault(_collapsable);

var _fireUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-ui-event");

var _fireUiEvent2 = _interopRequireDefault(_fireUiEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
The container class for the accordion items.
@import Accordion
@component Accordion.Item
@references Accordion
@playground
```
<Accordion.Item title="Step 1">
  <h1>First Step Content</h1>
</Accordion.Item>
```
*/
exports.default = _react2.default.createClass({
  displayName: "Accordion.Item",

  contextTypes: {
    analytics: _react2.default.PropTypes.object
  },

  propTypes: {
    /**
    The title
    */
    title: _react2.default.PropTypes.string.isRequired,
    /**
    The index if you want to set the number manually
    */
    index: _react2.default.PropTypes.number,
    /**
    True if this is the active accordion item
    */
    active: _react2.default.PropTypes.bool,
    /**
    True if the item is open
    */
    open: _react2.default.PropTypes.bool,
    /**
    An optional title button if you want to use a button instead of text
    */
    titleButton: _react2.default.PropTypes.node,
    /**
    Optional extra material in the title area if you want it.
    */
    titleExtra: _react2.default.PropTypes.node,
    /**
    The edit button if you want one
    */
    editButton: _react2.default.PropTypes.node,
    /**
    An event callback for a click on the title bar.
    */
    onClick: _react2.default.PropTypes.func.isRequired,
    /**
    Set to true if this step has been completed.
    */
    completed: _react2.default.PropTypes.bool,
    /**
    Title for when the step is completed.
    */
    titleCompleted: _react2.default.PropTypes.node,
    children: _react2.default.PropTypes.node,
    /**
    An optional automation ID
    */
    automationId: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      active: true,
      index: null,
      titleButton: null,
      titleExtra: null,
      open: false,
      onClick: function onClick() {}
    };
  },
  _onClick: function _onClick(event) {
    (0, _fireUiEvent2.default)(this, event);
    this.props.onClick(event);
  },
  _renderHeader: function _renderHeader() {
    if (!this.props.completed) {

      var wrapperClasses = (0, _classnames2.default)("clearfix zeus-accordion-header", { "zeus-pickup-header-expanded": this.props.active });

      var headerNumberClasses = (0, _classnames2.default)("zeus-accordion-number", this.props.active ? "zeus-accordion-number-active" : "zeus-accordion-number-inactive");

      var headingClasses = (0, _classnames2.default)("zeus-header-title", { "zeus-accordion-inactive": !this.props.active });

      return _react2.default.createElement(
        "div",
        { className: wrapperClasses },
        _react2.default.createElement(
          "div",
          { className: "zeus-block zeus-accordion-header-title zeus-accordion-header-icon-text" },
          _react2.default.createElement(
            "b",
            { className: headerNumberClasses },
            this.props.index
          ),
          _react2.default.createElement(
            _heading2.default.H4,
            { className: headingClasses },
            this.props.title
          )
        )
      );
    } else {
      return _react2.default.createElement(
        "div",
        { className: "clearfix zeus-accordion-header" },
        _react2.default.createElement(
          "div",
          { className: "zeus-block zeus-accordion-header-title zeus-accordion-header-icon-text" },
          _react2.default.createElement(
            "b",
            { className: "zeus-accordion-number zeus-accordion-check" },
            _react2.default.createElement("i", { className: "wmicon wmicon-ok" })
          ),
          _react2.default.createElement(
            _heading2.default.H4,
            { className: "zeus-header-title zeus-header-title-completed" },
            this.props.titleCompleted
          ),
          this.props.titleExtra
        ),
        _react2.default.createElement(
          "span",
          { className: "zeus-edit-accordion" },
          this.props.editButton
        )
      );
    }
  },
  render: function render() {
    var classes = (0, _classnames2.default)("clearfix zeus-accordion-item zeus-content", { "zeus-expanded": this.props.open });

    return _react2.default.createElement(
      "li",
      { onClick: this._onClick,
        className: this.props.hidden ? "hide-content" : "",
        "data-automation-id": this.props.automationId },
      this._renderHeader(),
      _react2.default.createElement(
        _collapsable2.default,
        {
          ref: "accordionContent",
          isOpen: this.props.open,
          className: classes },
        this.props.children
      )
    );
  }
});