import React, { PropTypes } from "react";
import classNames from "classnames";

import ThemeButton from "./theme-button";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**

The Module Header component has a title and a ThemeButton (CTA). Both are optional

```jsx
  <ModuleHeader
    headerTitle="My Header"
    themeButton={
      {
        linkText: "Shop All",
        title: "Shop All",
        clickThrough: {
          type: "url",
          value: "something"
        },
        uid: "CLAM4z1m",
        className: "BannerMessage--button"
      }
    }
  />
```
@import {ModuleHeader}
@component ModuleHeader
@playground
ModuleHeader
*/

export const ModuleHeader = (props) => {
  const {
    headerTitleColor,
    headerTitle,
    showArrow,
    themeButton,
    dataAutomationId
  } = props;

  const _renderHeader = () => {
    if (headerTitle) {
      const classes = classNames(
        "ModuleHeader-heading",
        "display-inline-block",
        {"ModuleHeader-heading-fullWidth": themeButton}
      );

      return (
        <h5
          className={classes}
          style={headerTitleColor ? { color: headerTitleColor } : {}}
          {...getDataAutomationIdPair("ModuleHeader-title", dataAutomationId)}
        >
          {headerTitle}
        </h5>
      );
    }
  };

  const _renderThemeButton = () => {
    if (themeButton && themeButton.linkText) {
      return (
        <ThemeButton
          {...themeButton}
          showArrow={showArrow}
          dataAutomationId={dataAutomationId}
          className="ModuleHeader-button display-inline-block pull-right"
        />
      );
    }
  };

  const classes = themeButton && themeButton.linkText
    ? "ModuleHeader ModuleHeader-withButton"
    : "ModuleHeader";

  return (
    <div className={classes}>
      {_renderHeader()}
      {_renderThemeButton()}
    </div>
  );
};

ModuleHeader.displayName = "ModuleHeader";

ModuleHeader.propTypes = {
  /**
   * The header text
   */
  headerTitle: PropTypes.string,
  /**
   * The color of the header text
   */
  headerTitleColor: PropTypes.string,
  /**
   * Allows an arrow in the theme-button link
   */
  showArrow: PropTypes.bool,
  /**
   * The themeButton props
   */
  themeButton: PropTypes.object,
  /**
   Automation ID base string
   */
  dataAutomationId: PropTypes.string
};

ModuleHeader.defaultProps = {
  headerTitle: "",
  headerTitleColor: "",
  showArrow: true,
  themeButton: {},
  dataAutomationId: ""
};

export default ModuleHeader;
