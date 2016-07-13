/* @flow */
/* eslint-disable no-unused-vars */

export const shouldDisplayError = (props:Object):bool => props.error && props.touched;
export const shouldDisplayValid = (props:Object):bool => false;

