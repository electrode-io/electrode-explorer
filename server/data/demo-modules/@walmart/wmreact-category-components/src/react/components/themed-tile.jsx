import React, { Component, PropTypes } from "react";
import { getTempoModuleAutomationId } from "@walmart/category-utils";

/**
Themed tile Component to be used along with product tiles in product carousels
@examples
```jsx
<ThemedTile
  url: "//www.walmart.com",
  imageUrl: "//some-background-image.png"
/>

<ThemedTile
  url: "//www.walamrt.com",
  imageUrl: "//some-background-image.png",
  button: {
    textColor: "#f2f2f2",
    color: "#333",
    text: "Shop Now"
  }
/>
```
@component ThemedTile
@import {ThemedTile}
@playground
ThemedTile
```
<ThemedTile
  url="//www.walamrt.com"
  imageUrl="//some-background-image.png"
/>

<ThemedTile
  url="//www.walmart.com"
  imageUrl="//some-background-image.png"
  button={{
    textColor: "#f2f2f2",
    bolor: "#333",
    text: "Shop Now"
  }}
/>
```
*/

export default class ThemedTile extends Component {

  /**
    * Renders the button
    * @param {String} url target clickthrough url
    * @param {Object} button  button configuration
    * @returns {ReactElement} button ReactElement
    */
  _renderButton(url, button) {
    if (!button) { return null; }

    const { color, textColor, text } = button;

    const inlineStyle = {
      backgroundColor: color,
      color: textColor
    };

    return (
      <div className="button-wrapper">
        <a
          href={url}
          className="btn btn-primary"
          type="button"
          style={inlineStyle}
        >{text}</a>
      </div>
    );
  }

  /**
    * Renders the overlay link for the tile.
    * @param {String} url target clickthrough url
    * @returns {ReactElement} overlay link ReactElement
    */
  _renderOverlayLink(url) {
    return (
      <a
        className="Tile-linkOverlay"
        href={url}
        tabIndex="-1"
        aria-hidden="true"
      ></a>
    );
  }

  render() {
    const { imageUrl, url, button, moduleType } = this.props;
    const inlineStyle = {};

    if (imageUrl) {
      inlineStyle.backgroundImage = `url(${imageUrl})`;
    }

    return (
      <div className="Tile Tile-themed"
        style={inlineStyle}
        {...getTempoModuleAutomationId(moduleType, process)}>
        {this._renderOverlayLink(url)}
        {this._renderButton(url, button)}
      </div>
    );
  }
}

ThemedTile.displayName = "ThemedTile";

ThemedTile.propTypes = {
  /**
  Background image source for the tile.
  */
  imageUrl: PropTypes.string,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
  target clickThrough url
  */
  url: PropTypes.string.isRequired,
  /**
  Theme Button with custom background and text color
  */
  button: PropTypes.shape({
    /**
    Theme button background color
    */
    color: PropTypes.string.isRequired,
    /**
    Theme Button text color
    */
    textColor: PropTypes.string.isRequired,
    /**
    Button text
    */
    text: PropTypes.string.isRequired
  })
};

ThemedTile.defaultProps = {
  moduleType: "ThemedTile"
};
