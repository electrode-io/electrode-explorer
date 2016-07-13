import React from "react";

import { Copy } from "@walmart/wmreact-base";
import VotingPanel from "./voting";

/**
@private
*/
export default class Answer extends React.Component {
  render() {
    const answer = this.props.answer;

    return (
      <li>
        <Copy>{answer.answerText}</Copy>
        <Copy.Small>
          by
          <strong className="answer-user">
            {answer.userNickname}
          </strong>
          <span className="answer-date">
            {answer.submissionTime}
          </span>
        </Copy.Small>
        <VotingPanel
          TotalPositiveFeedbackCount={answer.positiveVoteCount}
          TotalNegativeFeedbackCount={answer.negativeVoteCount} />
      </li>
    );
  }
}

Answer.propTypes = {
  answer: React.PropTypes.object
};

Answer.defaultProps = {
  answer: {}
};

Answer.displayName = "Answer";
