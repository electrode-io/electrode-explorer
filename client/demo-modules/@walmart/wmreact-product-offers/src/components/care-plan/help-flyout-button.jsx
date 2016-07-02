import React, { PropTypes } from "react";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import classNames from "classnames";

const HELP_TRIGGER = (
  <span className="HelpFlyout-trigger">
    <i className="wmicon wmicon-help"></i>
  </span>
);

const HelpFlyoutButton = (props) => {
  const styles = classNames("inline-block-xs help-flyout", props.className);
  return (
    <Flyout className={styles}
      trigger={HELP_TRIGGER}
      closeButton
      size={props.size}
      direction={props.position}>
        {props.children}
    </Flyout>
  );
};

HelpFlyoutButton.displayName = "HelpFlyoutButton";

HelpFlyoutButton.propTypes = {
  /**
  Flyout poistion
  */
  position: PropTypes.string,
  /**
  Flyout size
  */
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

HelpFlyoutButton.defaultProps = {
  position: "left",
  size: "wide",
  className: ""
};

export default HelpFlyoutButton;
