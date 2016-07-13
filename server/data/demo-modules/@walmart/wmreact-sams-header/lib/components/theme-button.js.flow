import React, { PropTypes } from "react";

import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Link from "@walmart/wmreact-base/lib/components/link";

/**

 The Theme Button component has links customizable by text, color, url font weight and height.

 ```jsx
 <ThemeButton moduleData={
    {
      "themeButton": {
        "linkText": "Shop All",
        "title": "Shop All",
        "clickThrough": {
          "type": "url",
          "value": "http://www.walmart.com/browse/electronics/android-tablets/3944_1078524_1231200"
        },
        "uid": "CLAM4z1m"
      }
      buttonTextColor: null
    }
  } />
 ```
 @import {ThemeButton}
 @component ThemeButton
 @playground
 ThemeButton
 */

/**
 * returns string link text if required.
 * @param {boolean} showLinkText to show link text or not.
 * @param {string} linkText string link text.
 * @returns {string} the link text.
 */
export const _linkText = (showLinkText, linkText) => {
  if (showLinkText) {
    return linkText;
  }
  return null;
};

export const _renderArrow = (showArrow) => {
  if (showArrow) {
    return <Icon name="angle-right" size={11}/>;
  }
  return null;
};

const ThemeButton = (props) => {
  const {
    linkText,
    title,
    clickThrough,
    buttonTextColor,
    themeButtonColor,
    uid,
    className,
    showLinkText,
    showArrow,
    dataAutomationId
  } = props;

  const style = {
    color: buttonTextColor,
    backgroundColor: themeButtonColor
  };

  return (
    <Link className={className}
      href={clickThrough.value}
      style={style}
      {...getDataAutomationIdPair("button", dataAutomationId)}
      alt={title}
      data-uid={uid}>
      {_linkText(showLinkText, linkText)}
      {_renderArrow(showArrow)}
    </Link>
  );
};

ThemeButton.displayName = "ThemeButton";

ThemeButton.propTypes = {
  /**
   * sets the text of link
   */
  linkText: PropTypes.string,
  /**
   * sets title of link
   */
  title: PropTypes.string,
  /**
   * Sets the background color of the button.
   */
  themeButtonColor: PropTypes.string,
  /**
   * click through object
   */
  clickThrough: PropTypes.shape({}),
  /**
   * sets the uid
   */
  uid: PropTypes.string,
  /**
   * sets the aditional classes
   */
  className: PropTypes.string,
  /**
   * sets the color of theme button text
   */
  buttonTextColor: PropTypes.string,
  /**
   * restricts displaying link text
   */
  showLinkText: PropTypes.bool,
  /**
   * allows an arrow at end of text
   */
  showArrow: PropTypes.bool,
  /**
   Automation ID base string
   */
  dataAutomationId: PropTypes.string
};

ThemeButton.defaultProps = {
  linkText: "",
  title: "",
  clickThrough: {},
  themeButtonColor: "",
  uid: "",
  className: "",
  buttonTextColor: "",
  showLinkText: true,
  showArrow: false,
  dataAutomationId: ""
};

export default ThemeButton;
