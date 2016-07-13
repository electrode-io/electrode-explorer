/* @flow */

import React from "react";
import classNames from "classnames";

/**
 * Enhance a component to give a `hidden` property as required by a large number
 * of electrode bits. Note that the component being passed into this _must_
 * support the `className` prop (which is standard for a lot of DOM components).
 *
 * @param {React.Component} Component Component to make hideable.
 * @returns {React.Component} New component.
 */
const hideable = (Component : React.Component) : React.Component =>
  (props) => (
    <Component
      className={classNames(props.className, {"hide-content": props.hidden})}
      {...props}
    />
  );

export default hideable;
