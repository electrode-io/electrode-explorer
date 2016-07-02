import React, {PropTypes} from "react";
import uniqueId from "lodash/uniqueId";

const Checkbox = ({
  children,
  id = uniqueId(),
  className,
  automationId,
  ...props
}) => {
  const showError = props.touched && props.error;

  return (
    <div
      className={className}
      data-automation-id={automationId}
    >
      <input type="checkbox" id={id} {...props} />

      <label
        htmlFor={id}
        className={showError ? "validation-error" : ""}
      >
        {children}

        {showError &&
        <i className="validation-marker validation-marker-error">
          <span>{props.error}</span>
        </i>}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  error: PropTypes.string
};

export default Checkbox;
