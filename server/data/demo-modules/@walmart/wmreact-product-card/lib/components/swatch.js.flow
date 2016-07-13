/* @flow */
import React, { Component } from "react";
import {fireUIEvent} from "@walmart/wmreact-analytics";

/**
Swatch display.
@component Swatch
@import {Swatch}
@private
*/
export default class Swatch extends Component {
  _onClick(event: Object): void {
    fireUIEvent(this, event);
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  _onMouseOver(event: Object): void {
    fireUIEvent(this, event);
    if (this.props.onMouseOver) {
      this.props.onMouseOver(event);
    }
  }

  _onMouseOut(event: Object): void {
    fireUIEvent(this, event);
    if (this.props.onMouseOut) {
      this.props.onMouseOut(event);
    }
  }

  render(): ReactElement {
    return (
      <button
        className={`tile-swatch${(this.props.active ? " active" : "")}`}
        type="button"
        onClick={this._onClick.bind(this)}
        onMouseOver={this._onMouseOver.bind(this)}
        onMouseOut={this._onMouseOut.bind(this)}
        title={this.props.title}>
        <img src={this.props.image}
          alt={this.props.title}/>
      </button>
    );
  }
}

Swatch.displayName = "Swatch";

Swatch.propTypes = {
  /**
  True if active
  */
  active: React.PropTypes.bool,
  /**
  The image for the swatch
  */
  image: React.PropTypes.string,
  /**
  The title of the swatch
  */
  title: React.PropTypes.string,
  /**
  The click handler
  */
  onClick: React.PropTypes.func,
  /**
  Mouse over event handler
  */
  onMouseOver: React.PropTypes.func,
  /**
  Mouse out event handler
  */
  onMouseOut: React.PropTypes.func
};

Swatch.contextTypes = {
  analytics: React.PropTypes.object
};

