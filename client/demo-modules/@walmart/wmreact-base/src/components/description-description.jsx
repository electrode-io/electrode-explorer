/* @flow */
import React from "react";

/**
Description within a descriptions block
@component Descriptions.Description
@import {Descriptions}
@references Descriptions
@return {ReactElement} - React element
@param {object} props Properties
*/
const DescriptionDescription = (props) => (
  <dd className={props.hidden ? "hide-content" : ""}>
    {props.children}
  </dd>
);

DescriptionDescription.displayName = "Descriptions.Description";

DescriptionDescription.propTypes = {
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

export default DescriptionDescription;
