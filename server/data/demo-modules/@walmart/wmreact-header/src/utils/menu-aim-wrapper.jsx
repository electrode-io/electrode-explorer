/* @flow */
import React from "react";
import ReactMenuAim from "react-menu-aim";

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

const MenuAimWrapper = React.createClass({
  mixins: [ReactMenuAim],

  displayName: "MenuAimWrapper",

  propTypes: {
    /**
    Style class to add
    */
    className: React.PropTypes.string,
    /**
    Children components to render
    */
    children: React.PropTypes.any.isRequired
  },

  componentWillMount(): void {
    this.initMenuAim({
      delay: 300,
      tolerance: 50
    });
  },

  render(): ReactElement {
    return (
      <div className={this.props.className} onMouseLeave={this.handleMouseLeaveMenu}>
        {this.props.children}
      </div>
    );
  }
});

export default MenuAimWrapper;
