import React from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import authConfig from "../../config";

const AltMessageComponent = (props) => {
  const {
    altMessageText,
    altLinkText,
    onNewCodeRequested,
    onForgotPasswordRequested,
    fields: {email},
    automation,
    tealeaf,
    error
  } = props;

  const wrapAction = (cb) => (data) => {
    authConfig.logger.log("On Submit", {event: "submit", form: "ResendToken"});
    return cb(data);
  };
  const btnAction = error && error.code === "unregistered_email" ?
    onForgotPasswordRequested : wrapAction(onNewCodeRequested);

  return (
    <p className="no-margin">
      {altMessageText && `${altMessageText} `}
      {altLinkText &&
        <Button
          fakelink
          onClick={() => btnAction({email: email.value})}
          automationId={automation.newCodeBtnLink}
          tealeafId={tealeaf.newCodeBtnLink}>
          {altLinkText}
        </Button>}
    </p>
  );
};

export default AltMessageComponent;
