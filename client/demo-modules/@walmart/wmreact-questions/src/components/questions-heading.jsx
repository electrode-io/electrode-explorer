import React from "react";

import { Copy } from "@walmart/wmreact-base";
import { Button } from "@walmart/wmreact-interactive";
import { Layout, MediaSelector } from "@walmart/wmreact-layout";

import SortChooser from "./sort-chooser";

/**
@private
*/
export default class QuestionsHeading extends React.Component {
  _renderQuestionButton() {
    return (
      <Button>Ask A Question</Button>
    );
  }

  _renderSortChooser() {
    const options = [
      {id: "totalAnswerCount", title: "Number of answers"},
      {id: "mostRecentQuestions", title: "Most recent questions"},
      {id: "mostRecentAnswers", title: "Most recent answers"}
    ];

    return (
      <SortChooser options={options} className="qa-sortby"/>
    );
  }

  render() {
    return (
      <div className="qa-header">
        <MediaSelector>
          <Layout large={2} visibleAbove="medium">
            <div>
              <h3 className="heading-a no-margin">Customer Q&A</h3>
              <Copy>Get specific details about this product from customers who own it.</Copy>
            </div>
            <div className="text-right">
              {this._renderQuestionButton()}
              {this._renderSortChooser()}
            </div>
          </Layout>
          <Layout small={1} hiddenAbove="medium">
            <div>
              {this._renderQuestionButton()}
            </div>
            <div>
              {this._renderSortChooser()}
            </div>
          </Layout>
        </MediaSelector>
      </div>
    );
  }
}

QuestionsHeading.displayName = "QuestionsHeading";
