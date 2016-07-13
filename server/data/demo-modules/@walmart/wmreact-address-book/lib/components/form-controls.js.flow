import classNames from "classnames";
import React from "react";
import uniqueId from "lodash/uniqueId";

const showFieldError = (field = {}) => {
  return field.touched && field.error;
};

export const TextField = ({label, field, ...props}) => (
  <label className="form-label">
    {label}

    <div className="validation-group">
      <input
        type="text"
        className={classNames("form-control", {error: showFieldError(field)})}
        {...field}
        {...props}
      />

      {showFieldError(field) &&
      <i className="validation-marker validation-marker-error">
        <span className="visuallyhidden">Help</span>
      </i>}
    </div>

    {showFieldError(field) && <p className="error-label">{field.error}</p>}
  </label>
);

export const Checkbox = ({
  children,
  id = uniqueId(),
  className,
  automationId,
  field,
  ...rest
}) => {
  return (
    <div
      className={classNames("option", className)}
      data-automation-id={automationId}
    >
      <input type="checkbox" id={id} {...field} {...rest} />

      <label
        htmlFor={id}
        className={showFieldError(field) ? "validation-error" : ""}>

        {children}

        {showFieldError(field) &&
        <i className="validation-marker validation-marker-error">
          <span className="visuallyhidden">{field.error}</span>
        </i>}
      </label>
    </div>
  );
};

export const Select = ({
  label,
  children,
  field,
  className,
  id = uniqueId(),
  ...props
}) => {
  return (
    <div>
      <label className="label" htmlFor={id}>{label}</label>

      <div className="validation-group">
        {showFieldError(field) &&
        <i className="validation-marker validation-marker-error">
          <span className="visuallyhidden">{field.error}</span>
        </i>}

        <select
          id={id}
          className={classNames(className, "form-control", showFieldError(field) ? "error" : "")}
          {...field}
          {...props}
        >
          {children}
        </select>

        {showFieldError(field) &&
        <p className="error-label">{field.error}</p>}
      </div>
    </div>
  );
};

export const Option = ({children, ...props}) => {
  return (
    <option {...props}>
      {children}
    </option>
  );
};
