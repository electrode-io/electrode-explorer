/* @flow */
import React from "react";
import classNames from "classnames";

/**
A item summary container specifically for accordions.
@examples
```jsx
<Accordion>
  <Accordion.Item title="Step 1"
    titleExtra={
      <Accordion.Summary>
        <span>A summary item of step 1</span>
        <span>And another one</span>
      </Accordion.Summary>}>
    <h1>First Step Content</h1>
  </Accordion.Item>
</Accordion>
```
@import Accordion
@component Accordion.Summary
@references Accordion
@playground
```
<Accordion.Summary>
  <span>A summary item of step 1</span>
  <span>And another one</span>
</Accordion.Summary>
```
*/
export default React.createClass({
  displayName: "Accordion.ItemSummary",

  propTypes: {
    /**
    True if we should add the `in-review` class
    */
    inReview: React.PropTypes.bool,
    children: React.PropTypes.node
  },

  getDefaultProps():Object {
    return {
      inReview: false
    };
  },

  _renderSummaryItem(child:ReactElement, index:number):ReactElement {
    return (
      <div key={index} className="zeus-accordion-summary-item">
        {child}
      </div>
    );
  },

  render():ReactElement {
    const summaryClasses = classNames(
      "zeus-accordion-summary",
      this.props.inReview ? "in-review" : "inactive"
    );

    return (
      <div className={summaryClasses}>
        {React.Children.map(this.props.children, this._renderSummaryItem)}
      </div>
    );
  }
});
