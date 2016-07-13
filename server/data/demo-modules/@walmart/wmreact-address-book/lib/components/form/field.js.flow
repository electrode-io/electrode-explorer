import React, {PropTypes} from "react";
import classNames from "classnames";

// TODO: WARNING: this class is using the deprecated style guide and must be revised soon
const Field = ({label,
  touched,
  invalid,
  error,
  mini,
  labelInstruction,
  automationId,
  tealeafId,
  ...props}) => {
  const showError = touched && invalid;

  const inputCx = classNames({
    error: showError,
    "form-control": true,
    "form-control-mini": mini
  });

  const validationGroupCx = classNames({
    "validation-group": true,
    "validation-group-mini": mini
  });

  const labelCx = label ? "form-label" : null;

  return (
    <label className={labelCx} data-automation-id={automationId}>
      {label}
      {labelInstruction &&
        <span className="form-label-instructional">{labelInstruction}</span>}
      <div className={validationGroupCx}>
        <input
          type="text"
          data-tl-id={tealeafId}
          className={inputCx}
          {...props}
        />

        {showError &&
        <i className="validation-marker validation-marker-error">
          <span className="visuallyhidden">Help</span>
        </i>}
      </div>

      {showError && <p className="error-label">{error}</p>}
    </label>
  );
};

Field.propTypes = {
  mini: PropTypes.bool,
  touched: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelInstruction: PropTypes.string,
  automationId: PropTypes.string,
  tealeafId: PropTypes.string
};

Field.defaultProps = {
  touched: false,
  invalid: false,
  automationId: "field",
  tealeafId: "field"
};

export default Field;
