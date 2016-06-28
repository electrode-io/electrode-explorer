"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-unused-vars: 0 */


var __incrId = 0;

/**
A radio tile component for use within a radio group.
@examples
```jsx
<RadioTile.tile rounded={true} groupName="demo">
  Tile 1
</RadioTile.tile>
```
@component RadioTile.tile
@import {RadioTile}
*/
exports.default = _react2.default.createClass({
  displayName: "Tile",

  mixins: [_react2.default.PureRenderMixin],

  propTypes: {
    /**
    The host group name
    */
    groupName: _react2.default.PropTypes.string,
    /**
    The column number
    */
    column: _react2.default.PropTypes.number,
    /**
    The alignment
    */
    alignment: _react2.default.PropTypes.string,
    /**
    True if checked
    */
    checked: _react2.default.PropTypes.bool,
    /**
    An optional footer
    */
    footer: _react2.default.PropTypes.node,
    /**
    An optional aside
    */
    aside: _react2.default.PropTypes.node,
    /**
    True if the tile is borderless
    */
    borderless: _react2.default.PropTypes.bool,
    /**
    True if the tile is flat
    */
    flat: _react2.default.PropTypes.bool,
    /**
    True if the tile is rounded
    */
    rounded: _react2.default.PropTypes.bool,
    /**
    True if the tile has a rounded top
    */
    roundedTop: _react2.default.PropTypes.bool,
    /**
    True if the tile has a rounded bottom
    */
    roundedBottom: _react2.default.PropTypes.bool,
    /**
    True if the tile is padded
    */
    padded: _react2.default.PropTypes.bool,
    /**
    Called when the component changes
    */
    onChange: _react2.default.PropTypes.func,
    /**
    Called when the component is clicked
    */
    onClick: _react2.default.PropTypes.func,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.string,
    /**
    An optional automation ID
    */
    automationId: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool,
    /**
    An optional TeaLeaf ID
    */
    tealeafId: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      column: 0,
      alignment: "",
      selected: "",
      footer: null,
      borderless: false,
      padded: false,
      flat: false,
      rounded: false,
      roundedTop: false,
      roundedBottom: false,
      onChange: function onChange(index) {},
      onClick: function onClick(index) {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      id: "radio-tile-" + this.props.column + "-" + __incrId++
    };
  },
  render: function render() {
    var aside = this.props.aside ? _react2.default.createElement(
      "span",
      { className: "radio-tile-aside" },
      this.props.aside
    ) : null;

    var footer = this.props.footer ? _react2.default.createElement(
      "span",
      { className: "radio-tile-footer" },
      this.props.footer
    ) : null;

    var tileClasses = {
      "radio-tile": true,
      "padding-ends": this.props.padded,
      "radio-tile-no-borders": this.props.borderless
    };
    if (this.props.alignment) {
      tileClasses["radio-tile-valign-" + this.props.alignment] = true;
    }

    var tileContentClasses = {
      "radio-tile-content": true,
      "radio-tile-rounded": this.props.rounded,
      "radio-tile-rounded-bottom": this.props.roundedBottom,
      "radio-tile-rounded-top": this.props.roundedTop,
      "radio-tile-flat": this.props.flat
    };

    return _react2.default.createElement(
      "label",
      { className: (0, _classnames2.default)(tileClasses, this.props.hidden ? "hide-content" : "", this.props.className),
        "data-automation-id": this.props.automationId,
        "data-tl-id": this.props.tealeafId },
      _react2.default.createElement("input", {
        type: "radio",
        className: "visuallyhidden",
        id: this.state.id,
        name: this.props.groupName,
        onChange: this.props.onChange ? this.props.onChange : function () {},
        onClick: this.props.onClick ? this.props.onClick : function () {},
        checked: this.props.checked
      }),
      _react2.default.createElement(
        "span",
        { className: (0, _classnames2.default)(tileContentClasses) },
        _react2.default.createElement(
          "span",
          { className: "radio-tile-header" },
          _react2.default.createElement("i", { className: "radio-tile-icon" }),
          _react2.default.createElement(
            "span",
            { className: "radio-tile-primary" },
            this.props.children
          ),
          aside
        ),
        footer
      )
    );
  }
});