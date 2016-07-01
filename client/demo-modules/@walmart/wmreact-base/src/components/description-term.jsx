/* @flow */
import React from "react";

/**
Description term
@component Descriptions.Term
@import {Descriptions}
@references Descriptions
@return {ReactElement} - React element
@param {object} props Properties
*/
const DescriptionTerm = (props) => (
  <dt className={props.hidden ? "hide-content" : ""}>
    {props.children}
  </dt>
);

DescriptionTerm.displayName = "Descriptions.Term";

DescriptionTerm.propTypes = {
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

export default DescriptionTerm;
