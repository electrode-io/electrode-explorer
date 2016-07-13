/* @flow */
/* eslint no-unused-vars: 0 */
import React from "react";
import classNames from "classnames";

let __incrId = 0;

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
export default React.createClass({
  displayName: "Tile",

  mixins: [React.PureRenderMixin],

  propTypes: {
    /**
    The host group name
    */
    groupName: React.PropTypes.string,
    /**
    The column number
    */
    column: React.PropTypes.number,
    /**
    The alignment
    */
    alignment: React.PropTypes.string,
    /**
    True if checked
    */
    checked: React.PropTypes.bool,
    /**
    An optional footer
    */
    footer: React.PropTypes.node,
    /**
    An optional aside
    */
    aside: React.PropTypes.node,
    /**
    True if the tile is borderless
    */
    borderless: React.PropTypes.bool,
    /**
    True if the tile is flat
    */
    flat: React.PropTypes.bool,
    /**
    True if the tile is rounded
    */
    rounded: React.PropTypes.bool,
    /**
    True if the tile has a rounded top
    */
    roundedTop: React.PropTypes.bool,
    /**
    True if the tile has a rounded bottom
    */
    roundedBottom: React.PropTypes.bool,
    /**
    True if the tile is padded
    */
    padded: React.PropTypes.bool,
    /**
    Called when the component changes
    */
    onChange: React.PropTypes.func,
    /**
    Called when the component is clicked
    */
    onClick: React.PropTypes.func,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
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
    column: number;
    alignment: string;
    selected: string;
    footer: ?ReactElement;
    borderless: boolean;
    padded: boolean;
    flat: boolean;
    rounded: boolean;
    roundedTop: boolean;
    roundedBottom: boolean;
    onChange: (index: ?number) => void;
    onClick: (index: ?number) => void;
  } {
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
      onChange(index: ?number) {},
      onClick(index: ?number) {}
    };
  },

  getInitialState(): {
    id: string
  } {
    return {
      id: `radio-tile-${this.props.column}-${(__incrId++)}`
    };
  },

  render(): ReactElement {
    const aside = (this.props.aside)
      ? <span className="radio-tile-aside">{this.props.aside}</span>
      : null;

    const footer = (this.props.footer)
      ? <span className="radio-tile-footer">{this.props.footer}</span>
      : null;

    const tileClasses = {
      "radio-tile": true,
      "padding-ends": this.props.padded,
      "radio-tile-no-borders": this.props.borderless
    };
    if (this.props.alignment) {
      tileClasses[`radio-tile-valign-${this.props.alignment}`] = true;
    }

    const tileContentClasses = {
      "radio-tile-content": true,
      "radio-tile-rounded": this.props.rounded,
      "radio-tile-rounded-bottom": this.props.roundedBottom,
      "radio-tile-rounded-top": this.props.roundedTop,
      "radio-tile-flat": this.props.flat
    };

    return (
      <label className={classNames(
        tileClasses,
        this.props.hidden ? "hide-content" : "",
        this.props.className)}
        data-automation-id={this.props.automationId}
        data-tl-id={this.props.tealeafId}>
        <input
          type="radio"
          className="visuallyhidden"
          id={this.state.id}
          name={this.props.groupName}
          onChange={this.props.onChange ? this.props.onChange : () => {} }
          onClick={this.props.onClick ? this.props.onClick : () => {}}
          checked={this.props.checked}
        />
        <span className={classNames(tileContentClasses)}>
          <span className="radio-tile-header">
            <i className="radio-tile-icon"></i>
            <span className="radio-tile-primary">
              {this.props.children}
            </span>
            {aside}
          </span>
          {footer}
        </span>
      </label>
    );
  }
});
