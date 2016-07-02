import classNames from "classnames";
import React from "react";
import uniqueId from "lodash/utility/uniqueId";

const showFieldError = (field = {}) => {
  return field.touched && field.error;
};

export default ({children, id = uniqueId(), field, ...rest}) => {
  return (
    <div className="option">
      <input type="checkbox" id={id} {...field} {...rest}/>

      <label
        htmlFor={id}
        className={classNames("form-control", {error: showFieldError(field)})}>

        {children}

        {showFieldError(field) &&
        <i className="validation-marker validation-marker-error">
          <span className="visuallyhidden">{field.error}</span>
        </i>}
      </label>
    </div>
  );
};
