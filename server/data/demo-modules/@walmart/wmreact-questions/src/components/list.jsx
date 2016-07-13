import React from "react";

import { Paginator } from "@walmart/wmreact-interactive";
import { Layout, MediaSelector } from "@walmart/wmreact-layout";

import Question from "./question";

/**
@private
*/
export default class List extends React.Component {
  _renderQuestions() {
    return this.props.questions.length ?
        this.props.questions.map((question, index) => {
          return <Question key={index} question={question} />;
        }) : null;
  }

  _renderListFooter() {
    return (
      <div className="qa-list-footer">
        <Layout large={2}>
          <Paginator.PaginatorList total={this.props.pagination.total} current={0}/>
          <MediaSelector>
            <div hiddenBelow="medium" className="text-right">
              <p className="copy-mini no-margin">
                {this.props.pagination.currentSpan} of {this.props.pagination.total} questions
              </p>
            </div>
          </MediaSelector>
        </Layout>
      </div>
    );
  }

  render() {
    return (
      <div className="qa-list">
        {this._renderQuestions()}
        {this._renderListFooter()}
      </div>
    );
  }
}

List.propTypes = {
  questions: React.PropTypes.array,
  pagination: React.PropTypes.object
};

List.defaultProps = {
  questions: [],
  pagination: {}
};

List.displayName = "QuestionList";
