/* @flow */
import React, { PropTypes } from "react";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Arrange from "@walmart/wmreact-layout/lib/components/arrange";


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

const HeaderButtonToggle = (props: Object): ReactElement => (

    <Button fakelink={true} {...props}>
      <Arrange>
        <Arrange.Fit>
         <Icon className="header-HeaderPrimary-icon pull-left" name={props.name} />
        </Arrange.Fit>
        <Arrange.Fit>
          <div className="buttonText"> Menu </div>
        </Arrange.Fit>
      </Arrange>
    </Button>

);

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
