/* @flow */
import React, {PropTypes} from "react";

import { getDataAutomationIdPair } from "@walmart/automation-utils";
import Link from "@walmart/wmreact-base/lib/components/link";

const AUTOMATION_CONTEXT = "ReviewHelpfulness";

const ReviewHelpfulness = (props) => {
  return (
    <div className={`ReviewHelpfulness ${props.className}`}>
      <div className="font-semibold">Was this review helpful?</div>
      <Link
        onClick={props.onYesClick}
        {...getDataAutomationIdPair("YesCount", AUTOMATION_CONTEXT, process)}
        className=
          "ReviewHelpfulness-link wmicon wmicon-thumbs-alt-up m-margin-ends display-block"
      >
        <span className="padding-sides">
          {`Yes (${props.yesCount})`}
        </span>
      </Link>
      <Link
        onClick={props.onNoClick}
        {...getDataAutomationIdPair("NoCount", AUTOMATION_CONTEXT, process)}
        className=
          "ReviewHelpfulness-link wmicon wmicon-thumbs-alt-down m-margin-ends display-block"
      >
        <span className="padding-sides">
          {`No (${props.noCount})`}
        </span>
      </Link>
      <Link
        onClick={props.onReportClick}
        {...getDataAutomationIdPair("Report", AUTOMATION_CONTEXT, process)}
        className=
          "ReviewHelpfulness-link wmicon wmicon-flag m-margin-ends display-block"
      >
        <span className="padding-sides">
          Report
        </span>
      </Link>
    </div>
  );
};

ReviewHelpfulness.propTypes = {
  yesCount: PropTypes.number,
  noCount: PropTypes.number,
  onYesClick: PropTypes.func.isRequired,
  onNoClick: PropTypes.func.isRequired,
  onReportClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

ReviewHelpfulness.defaultProps = {
  yesCount: 0,
  noCount: 0,
  className: ""
};

export default ReviewHelpfulness;
