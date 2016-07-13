import React, { PropTypes } from "react";
import classNames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";

/**
 A controller component for zooming. Contains a zoom in,
 zoom out, an optional reset button.
 ```jsx
 <div style={{position:"relative", height: 200}}>
 <ZoomControlButtons
 fullyZoomedOut={true}
 fullyZoomedIn={false}
 enableReset={true}/>
 </div>
 ```
 @import {ZoomControlButtons}
 @flags noVisibleRender
 @component ZoomControlButtons
 @playground
 ZoomControlButtons
 ```
 <div style={{position:"relative", height: 200}}>
 <ZoomControlButtons
 fullyZoomedOut={true}
 fullyZoomedIn={false}
 enableReset={true}/>
 </div>
 ```
 */

export const _getZoomInButtonClasses = (fullyZoomedIn) => {
  return classNames("ZoomControlButtons-zoomin",
    {"disabled": fullyZoomedIn});
};

export const _getZoomOutButtonClasses = (fullyZoomedOut) => {
  return classNames("ZoomControlButtons-zoomout",
    {"disabled": fullyZoomedOut});
};

export const _getResetButtonClasses = (fullyZoomedOut, enableReset) => {
  return classNames("ZoomControlButtons-reset",
    {
      "disabled": fullyZoomedOut,
      "hide-content": !enableReset
    });
};

export const _getZoomControlsClasses = (enableReset, className) => {
  return classNames("ZoomControlButtons-container", {
    "ZoomControlButtons--resetenabled": enableReset
  }, className);
};

const ZoomControlButtons = (props) => {
  // deconstruct props with default values
  const {
    zoomInClick = () => {},
    zoomOutClick = () => {},
    resetClick = () => {},
    fullyZoomedOut = true,
    fullyZoomedIn = false,
    enableReset = false,
    resetButtonLabel = "Reset",
    className = ""
  } = props;

  return (
    <div className={_getZoomControlsClasses(enableReset, className)}>
      <Button inverse={true} onClick={zoomInClick}
        className={_getZoomInButtonClasses(fullyZoomedIn)}>
        <Icon name="zoom" size={1}/>
      </Button>
      <Button inverse={true}
        onClick={zoomOutClick}
        className={_getZoomOutButtonClasses(fullyZoomedOut)}>
        <Icon name="zoom-out" size={1}/>
      </Button>
      <Button inverse={true}
        onClick={resetClick}
        className={_getResetButtonClasses(fullyZoomedOut, enableReset)}>
        {resetButtonLabel}
      </Button>
    </div>
  );
};

ZoomControlButtons.propTypes = {
  /**
   Callback handler for zoomIn button click event
   */
  "zoomInClick": PropTypes.func,
  /**
   Callback handler for zoomOut button click event
   */
  "zoomOutClick": PropTypes.func,
  /**
   Callback handler for reset button click event
   */
  "resetClick": PropTypes.func,
  /**
   Boolean indicating if a component is fullyZoomedIn
   */
  "fullyZoomedOut": PropTypes.bool,
  /**
   Boolean indicating if a component is fullyZoomedIn
   */
  "fullyZoomedIn": PropTypes.bool,
  /**
   When set to true, display a reset button
   */
  "enableReset": PropTypes.bool,
  /**
   Label for the optional reset button.
   */
  "resetButtonLabel": PropTypes.string,
  /**
   Additional css classNames passed into the component.
   */
  "className": PropTypes.string
};

export default ZoomControlButtons;
