/* @flow */
import React, { PropTypes } from "react";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";

/**
 The header button toggle component. Primarily used in the mobile header to expand search or nav.

 ```jsx
 <HeaderSearchToggle onClick={() => {}} />
 ```

 @import {HeaderButtonToggle}
 @flags noVisibleRender
 @component HeaderButtonToggle
 @playground
HeaderSearchToggle
 */

const HeaderButtonToggle = (props: Object): ReactElement => {
  return (
    <Button fakelink={true} {...props}>
      <Icon className="header-HeaderPrimary-icon" name={props.name} />
    </Button>
  );
};

HeaderButtonToggle.displayName = "HeaderButtonToggle";

HeaderButtonToggle.propTypes = {
  /**
  Click handler
  */
  onClick: PropTypes.func.isRequired,
  /**
  Name of icon
  */
  name: PropTypes.string.isRequired
};

export default HeaderButtonToggle;
