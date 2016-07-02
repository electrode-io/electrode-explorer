/* @flow */
import React from "react";
import classNames from "classnames";

const cloneElement = React.cloneElement;

import RadioTileTile from "./radio-tile-tile";

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
const TileGroup = React.createClass({
  displayName: "TileGroup",

  propTypes: {
    /**
    The name of the group
    */
    groupName: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    /**
    An optional automation ID
    */
    automationId: React.PropTypes.string,
    hidden: React.PropTypes.bool,
    /**
    An optional TeaLeaf ID
    */
    tealeafId: React.PropTypes.string
  },

  getDefaultProps(): {
    automationId: string,
    tealeafId: string
  } {
    return {
      automationId: "radio-tile",
      tealeafId: "radio-tile"
    };
  },

  _renderRadio(child: ReactElement, index: number): ReactElement {
    const automationId = `${this.props.automationId}-option-${index}`;
    const tealeafId = `${this.props.tealeafId}-option-${index}`;

    return cloneElement(child, {
      automationId,
      tealeafId,
      groupName: this.props.groupName
    });
  },

  render(): ReactElement {
    return (
      <div className={classNames(
        this.props.className,
        this.props.hidden ? "hide-content" : ""
      )}>
        {React.Children.map(this.props.children, this._renderRadio)}
      </div>
    );
  }
});

TileGroup.tile = RadioTileTile;

export default TileGroup;
