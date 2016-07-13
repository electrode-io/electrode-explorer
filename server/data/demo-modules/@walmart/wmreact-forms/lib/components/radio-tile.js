"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _radioTileTile = require("./radio-tile-tile");

var _radioTileTile2 = _interopRequireDefault(_radioTileTile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cloneElement = _react2.default.cloneElement;

/**
A radio tile group component.
@examples
```jsx
<RadioTile groupName="demo">
  <RadioTile.tile rounded={true} groupName="demo">
    Tile 1
  </RadioTile.tile>
  <RadioTile.tile rounded={true} groupName="demo">
    Tile 2
  </RadioTile.tile>
</RadioTile>
```
@component RadioTile
@import {RadioTile}
@playground
RadioTile
```
<RadioTile groupName="demo">
  <RadioTile.tile rounded={true} groupName="demo">
    Tile 1
  </RadioTile.tile>
  <RadioTile.tile rounded={true} groupName="demo">
    Tile 2
  </RadioTile.tile>
</RadioTile>
```
*/
var TileGroup = _react2.default.createClass({
  displayName: "TileGroup",

  propTypes: {
    /**
    The name of the group
    */
    groupName: _react2.default.PropTypes.string.isRequired,
    className: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
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
      automationId: "radio-tile",
      tealeafId: "radio-tile"
    };
  },
  _renderRadio: function _renderRadio(child, index) {
    var automationId = this.props.automationId + "-option-" + index;
    var tealeafId = this.props.tealeafId + "-option-" + index;

    return cloneElement(child, {
      automationId: automationId,
      tealeafId: tealeafId,
      groupName: this.props.groupName
    });
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)(this.props.className, this.props.hidden ? "hide-content" : "") },
      _react2.default.Children.map(this.props.children, this._renderRadio)
    );
  }
});

TileGroup.tile = _radioTileTile2.default;

exports.default = TileGroup;