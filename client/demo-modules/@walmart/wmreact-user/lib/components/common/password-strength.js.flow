import React from "react";
import classnames from "classnames";

import computeStrength from "../../util/password-strength";

export default (props) => {
  const {strength, level, percentage} = computeStrength(props.strength);
  if (percentage) {
    const classes = classnames("strength-bar",
      `strength-bar-${strength}`,
      `password-strength-${percentage}`);

    return (
      <div className="strength-bar">
        <div className={classes}/>
        <div className="password-hint">Password strength: {level}</div>
      </div>
    );
  }
  return <span />;
};
