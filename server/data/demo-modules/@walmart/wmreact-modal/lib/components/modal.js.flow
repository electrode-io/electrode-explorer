/* eslint-disable func-style */
import React, {PropTypes} from "react";
import classNames from "classnames";

import MediaSelector from "@walmart/wmreact-layout/lib/components/media-selector";
import Icon from "@walmart/wmreact-base/lib/components/icon";

const scope = "modal";
const styles = {
  xSmall: "x-small",
  small: "small",
  medium: "medium",
  large: "large",
  outer: `${scope}_outer`,
  inner: `${scope}_inner`,
  closeButton: `${scope}_close-button`
};

export default function Modal({
  onClose,
  // bordered = true,
  size = "small",
  automationId = "modal",
  closeButtonAutomationId = "modal-close-button",
  children
}) {
  return (
    <div className={classNames({
      [styles.outer]: true,
      [styles.xSmall]: size === "x-small",
      [styles.small]: size === "small",
      [styles.medium]: size === "medium",
      [styles.large]: size === "large"
    })}>
      <div className={styles.inner} data-automation-id={automationId}>
        {children}
      </div>
      {
        !!onClose &&
        <MediaSelector>
          <button
            visibleAbove="small"
            onClick={() => onClose()}
            className={styles.closeButton}
            data-automation-id={closeButtonAutomationId}
          >
            <Icon name="remove" size={1}/>
            <span className="visuallyhidden">close</span>
          </button>
        </MediaSelector>
      }
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  size: PropTypes.oneOf(["x-small", "small", "medium", "large"]),
  automationId: PropTypes.string,
  closeButtonAutomationId: PropTypes.string,
  children: PropTypes.node
};
