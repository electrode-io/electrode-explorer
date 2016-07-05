import React from "react";

import { Icon, Copy } from "@walmart/wmreact-base";
import { Button } from "@walmart/wmreact-interactive";
import { Separator } from "@walmart/wmreact-containers";
import { Layout } from "@walmart/wmreact-layout";
import { Collapsable } from "@walmart/wmreact-layout";

import Answer from "./answer";

/**
@private
*/
export default class Question extends React.Component {
  constructor() {
    super();
    this._answerToggle = this._answerToggle.bind(this);
    this.state = {
      active: false
    };
  }

  _answerToggle() {
    this.setState({
      active: this.state.active ? false : true
    });
  }

  _renderQuestionColumn() {
    return (
      <div className="qa-question-column">
        <Button fakelink={true} onClick={this._answerToggle}>
          <h3>
            {this.props.question.questionSummary}
            {this.state.active ?
              <Icon name="caret-up" size={1}/> :
              <Icon name="caret-down" size={1}/>}
          </h3>
        </Button>
        <Collapsable isOpen={this.state.active}>
          <div className="qa-question-data">
            <Copy.Small>
              by
              <strong className="answer-user">
                {this.props.question.userNickname}
              </strong>
              <span className="answer-date">
                {this.props.question.submissionDate}
              </span>
            </Copy.Small>
            <div className="qa-answers">
              <ul>
                {this.props.question.answers.map((answer, index) => {
                  return <Answer answer={answer} key={index} />;
                })}
              </ul>
            </div>
          </div>
        </Collapsable>
      </div>
    );
  }

  _renderDataColumn() {
    return (
      <div className="qa-data-column">
        <Button fakelink={true} onClick={this._answerToggle}>
          {this.props.question.totalAnswersCount} answers
        </Button>
        <p className="copy-small no-margin muted">
          Last answer: {this.props.question.lastAnswerDate}
        </p>
        <Collapsable isOpen={this.state.active}>
          <div>
            <Button inverse={true}>Answer this question</Button>
          </div>
        </Collapsable>
      </div>
    );
  }

  render() {
    return (
      <div className="qa-question">
        <Layout large-sizes={[8, 4]} padded={true}>
          {this._renderQuestionColumn()}
          {this._renderDataColumn()}
        </Layout>
        <Separator />
      </div>
    );
  }
}

Question.propTypes = {
  question: React.PropTypes.object
};

Question.defaultProps = {
  question: {}
};

Question.displayName = "Question";
