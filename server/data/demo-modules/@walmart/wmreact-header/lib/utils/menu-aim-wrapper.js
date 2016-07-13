"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactMenuAim = require("react-menu-aim");

var _reactMenuAim2 = _interopRequireDefault(_reactMenuAim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A wrapper component for using the behavior from the react-menu-aim mixin which allows
for easier navigation through a dropdown down menu by detecting the mouse direction to infer the
user's intent. Assign a ref to wrapper and use the exposed handleMouseEnterRow(index, handler) when
selecting a menu item.
https://github.com/jasonslyvia/react-menu-aim

```jsx
MenuAimExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selected: null};
    this._setSelected = this._setSelected.bind(this);
  }

  _setSelected(index) {
    this.setState({selected: index});
  }


  _selectRow(index) {
    this.refs.handleMouseEnterRow(index, this._setSelected)
  }

  render() {
    return (
      <MenuAimWrapper ref="menuAim">
        <ul class="menu">
          <li onMouseEnter={this._selectRow(0)}></li>
          <li onMouseEnter={this._selectRow(1)}></li>
        </ul>
        <Submenu selectedMenu={this.state.selected} />
      </MenuAimWrapper>
    );
  }
}
```

@import {MenuAimWrapper}
@flags noVisibleRender
@component MenuAimWrapper
@playground
MenuAimWrapper
*/

var MenuAimWrapper = _react2.default.createClass({
  mixins: [_reactMenuAim2.default],

  displayName: "MenuAimWrapper",

  propTypes: {
    /**
    Style class to add
    */
    className: _react2.default.PropTypes.string,
    /**
    Children components to render
    */
    children: _react2.default.PropTypes.any.isRequired
  },

  componentWillMount: function componentWillMount() {
    this.initMenuAim({
      delay: 300,
      tolerance: 50
    });
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: this.props.className, onMouseLeave: this.handleMouseLeaveMenu },
      this.props.children
    );
  }
});

exports.default = MenuAimWrapper;