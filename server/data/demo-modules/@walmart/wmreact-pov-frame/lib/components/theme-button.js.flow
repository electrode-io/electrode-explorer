import React, {PropTypes} from "react";
import classnames from "classnames";
import Link from "@walmart/wmreact-base/lib/components/link";

/** Themable button for POVs.
@param {Object} props React props for the component
@returns {ReactElement} Image link component
*/
const ThemeButton = ({
    themeButtonColor,
    buttonAlignment,
    buttonTextColor,
    linkText,
    clickThrough
  }) => {

  if (!linkText) { return <span />; }

  const classes = classnames(
    "btn hide-content-max-m display-inline-block-m pov-theme-button",
    `pov-theme-button-${buttonAlignment}`
  );

  const style = {
    backgroundColor: themeButtonColor,
    color: buttonTextColor
  };

  return (
    <Link
      className={classes}
      href={clickThrough.value}
      style={style}
    >{linkText}</Link>
  );
};

ThemeButton.displayName = "POVFrame.ThemeButton";

ThemeButton.propTypes = {
  /**
  Button Alignment wrt POV Container. (left, center, right)
  */
  buttonAlignment: PropTypes.oneOf(["left", "center", "right"]),
  /**
  Text to show on Button.
  */
  linkText: PropTypes.string.isRequired,
  /**
  Target url link.
  */
  clickThrough: PropTypes.shape({
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }),
  /**
  Button Text color.
  */
  buttonTextColor: PropTypes.string,
  /**
  Button background color.
  */
  themeButtonColor: PropTypes.string,
  /**
  identifier used in analytics.
  */
  uid: PropTypes.string,
  /**
  identifier used in analytics.
  */
  assetId: PropTypes.string
};

ThemeButton.defaultProps = {
  buttonAlignment: "",
  themeButtonColor: "",
  buttonTextColor: ""
};

export default ThemeButton;
