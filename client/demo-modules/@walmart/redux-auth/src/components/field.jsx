import classNames from "classnames";
import React from "react";

const showFieldError = (field = {}) => {
  return field.touched && field.error;
};

export default ({label, field, children, className, ...rest}) => (
  <label className="form-label">
    {label}

    <div className="validation-group">
      <input
        type="text"
        className={classNames("form-control", className, {error: showFieldError(field)})}
        {...field}
        {...rest}
      />

      {showFieldError(field) &&
      <i className="validation-marker validation-marker-error">
        <span className="visuallyhidden">Help</span>
      </i>}

      {children}

    </div>

    {showFieldError(field) &&
    <p className="error-label">{field.error}</p>}
  </label>
);
