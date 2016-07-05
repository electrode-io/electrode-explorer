import React from "react";

import { Separator } from "@walmart/wmreact-containers";

import List from "./list";

import QuestionsHeading from "./questions-heading";

/**
Questions manager.
@examples
```jsx
<Questions questions={demoData}/>
```
@component Questions
@import {Questions}
@playground
Questions manager
```
<Questions questions={demoData}/>
```
*/
export default class Questions extends React.Component {
  render() {
    const questions = this.props.questions;

    return (
      <div className="product-questions">
        <QuestionsHeading />
        <Separator />
        <List questions={questions.questionDetails} pagination={questions.pagination}/>
      </div>
    );
  }
}

Questions.propTypes = {
  /**
  The questions data
  */
  questions: React.PropTypes.object
};

Questions.defaultProps = {
  questions: {}
};

Questions.displayName = "Questions";
