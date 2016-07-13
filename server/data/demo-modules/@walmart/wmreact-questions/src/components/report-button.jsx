import React from "react";

import {Button} from "@walmart/wmreact-interactive";

import classNames from "classnames";

/**
@private
*/
export default class ReportButton extends React.Component {
  render() {
    return (
      <Button
        fakelink
        className={classNames(
          "customer-review-report-btn",
          "copy-mini",
          this.props.className,
          {"pull-right": this.props.pullRight}
        )}
        fakeLink={true} {... this.props}
      >
        <i className="wmicon wmicon-flag"></i>{" "}Report
      </Button>
    );
  }
}

ReportButton.displayName = "ReportButton";

ReportButton.propTypes = {
  pullRight: React.PropTypes.bool,
  className: React.PropTypes.string
};

ReportButton.defaultProps = {
  pullRight: false
};
