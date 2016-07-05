/* @flow */
import React, { PropTypes } from "react";
import classNames from "classnames";

/**
Stars display.
@examples
```jsx
<Stars total={5} average={4} count={3}>}/>
```
@component Stars
@import {Stars}
@playground
Stars
```
<Stars total={5} average={4} count={3}/>
```
*/

const _renderReviewCount = ({
    automationId = "stars",
    countNode,
    onCountClick = () => {},
    count
  }) => {

  if (!count && !countNode) {
    return null;
  }

  const child = countNode
    ? (<span className="stars-reviews-count-node">{countNode}</span>)
    : (<span className="stars-reviews-count">({count})</span>);

  return (
    <span
      className="stars-reviews"
      onClick={(ev) => { onCountClick(ev); }}
      data-automation-id={`${automationId}-reviews`}>
      {child}
      <span className="visuallyhidden">ratings</span>
    </span>
  );
};

const Stars = (props) => {
  const extras = `stars-${props.size}`;

  const {
    className,
    onStarsClick = () => {},
    ...others
  } = props;
  const automationId = props.automationId || "stars";

  const types = [];
  const avgFloor = Math.floor(props.average);
  for (let i = 0; i < props.total; i++) {
    types.push(i < avgFloor ? "star-rated" : "star-empty");
  }
  if (props.average - avgFloor > 0.4) {
    types[avgFloor] = "star-partial";
  }

  const stars = [];
  types.map((starClass, index) => {
    stars.push((
      <i key={`{starClass}-${index}`} className={`star ${starClass}`}
        data-automation-id={`${automationId}-star-${index}`}>
      </i>
    ));
  });

  return (
    <div className={classNames("stars", extras, className, {
      "hide-content": props.hidden})} {...others}>
      <span className="stars-container" onClick={(ev) => {
        onStarsClick(ev);
      }}>
        {stars}
      </span>
      <span className="visuallyhidden"
        data-automation-id={`${automationId}-avg-rating`}>
        Average rating: {props.average} stars
      </span>
      {_renderReviewCount(props)}
    </div>
  );
};

Stars.propTypes = {
  className: PropTypes.string,
  /**
  The total number of stars (e.g. 5, 10)
  */
  total: PropTypes.number.isRequired,
  /**
  The average number of stars (e.g. 3)
  */
  average: PropTypes.number.isRequired,
  /**
  The count label.
  */
  count: PropTypes.number,
  /**
    The formatted count label node. If this prop is set, the component ignores the count property.
  */
  countNode: PropTypes.node,
  /**
    Click handler for count.
  */
  onCountClick: PropTypes.func,
  /**
    Click handler for stars.
  */
  onStarsClick: PropTypes.func,
  /**
    The display size
  */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
  Automation id
  */
  automationId: PropTypes.string,
  hidden: PropTypes.bool
};

export default Stars;
