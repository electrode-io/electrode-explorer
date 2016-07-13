import React from "react";
import errorMessageMap from "../error-message-map.json";
import Alert from "@walmart/wmreact-forms/lib/components/alert";

const AlertErrors = (props) => {
  const {errorCodes, errorMessages, className, ...rest} = props;
  const allErrorMessages = Object.assign({}, errorMessageMap, errorMessages);
  const errors = errorCodes
    .filter((errorCode) => !!allErrorMessages[errorCode])
    .map((errorCode) => allErrorMessages[errorCode]);

  if (errorCodes.length !== errors.length) {
    errors.push(allErrorMessages.unknown);
  }

  const AlertComponent = props.alertComponent || Alert;
  return (<div className={className}>{
    errors.map((error, index) => <AlertComponent key={index} {...error} isBlock {...rest}/>)
  }</div>);
};


AlertErrors.propTypes = {
  errorCodes: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  errorMessages: React.PropTypes.object,
  className: React.PropTypes.string
};

export default AlertErrors;
