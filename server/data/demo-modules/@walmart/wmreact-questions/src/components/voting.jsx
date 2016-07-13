import React from "react";

import VoteButton from "./vote-button";
import ReportButton from "./report-button";

/**
@private
*/
export default class VotingPanel extends React.Component {
  render() {
    return (
      <div className="customer-review-voting">
        <div className="display-inline-block">
          <span className="btn-vote-heading">Was this answer helpful?</span>

          <VoteButton
            kind="up"
            count={this.props.TotalPositiveFeedbackCount} />

          <VoteButton
            kind="down"
            count={this.props.TotalNegativeFeedbackCount} />
        </div>

        <ReportButton pullRight={true} />
      </div>
    );
  }
}

VotingPanel.displayName = "VotingPanel";

VotingPanel.propTypes = {
  TotalPositiveFeedbackCount: React.PropTypes.number,
  TotalNegativeFeedbackCount: React.PropTypes.number
};

VotingPanel.defaultProps = {
  TotalPositiveFeedbackCount: 0,
  TotalNegativeFeedbackCount: 0
};

VotingPanel.VoteButton = VoteButton;
VotingPanel.ReportButton = ReportButton;
