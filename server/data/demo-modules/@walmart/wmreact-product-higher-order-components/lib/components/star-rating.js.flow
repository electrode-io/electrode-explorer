/* @flow */
import React, {PropTypes} from "react";
import clientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
import Stars from "@walmart/wmreact-product-descriptors/lib/components/stars";
import Link from "@walmart/wmreact-base/lib/components/link";
import isNumber from "lodash/isNumber";

/**
 Star Ratings component or Write Review link if no reviews.
 @examples
 ```jsx
 <div>
     <StarRating total={5} average={3} count={10} />
 </div>
 ```
 @import {StarRating}
 @component StarRating
 @playground
 StarRating
 ```
 <div>
    <StarRating total={5} average={3} count={10} />
 </div>
 ```
*/

const NONE = 0;
const ITEM_TYPE = "//schema.org/AggregateRating";
const ITEM_PROP = "aggregateRating";
const WRITE_REVIEW_LINK = "Write a review";
const WRITE_REVIEW_ROOT_URL = "/reviews/write-review?productId=";
const SEE_ALL_REVIEWS_ROOT_URL = "/reviews/product/";

const StarRating = (props) => {
  const {
    usItemId = "",
    average = NONE,
    total = NONE,
    count = NONE,
    ...rest
  } = props;

  let _renderStarRatingOrLink;

  const _getReviewsLink = (id) => {
    if (clientWidth.isBelowBreakPoint("medium", true) && id) {
      return SEE_ALL_REVIEWS_ROOT_URL + id;
    }
    return "#reviews";
  };

  const _getWriteReviewsLink = (id) => {
    if (id) {
      return WRITE_REVIEW_ROOT_URL + id;
    }
    return "#reviews";
  };


  const _getSize = () => {
    if (clientWidth.isBelowBreakPoint("medium", true)) {
      return "small";
    } else {
      return "medium";
    }
  };

  if (isNumber(average) && average > 0) {
    _renderStarRatingOrLink = (
      <span id="star-ratings" itemProp={ITEM_PROP} itemScope={true} itemType={ITEM_TYPE}>
        <Link className="star-ratings" href={_getReviewsLink(usItemId)}>
           <Stars total={total}
             average={average}
             count={count}
             size={_getSize()}/>
        </Link>
      </span>
    );
  } else {
    _renderStarRatingOrLink = (
      <Link className="write-review-link" href={_getWriteReviewsLink(usItemId)}>
        {WRITE_REVIEW_LINK}
      </Link>
    );
  }

  return (
    <div>
      {_renderStarRatingOrLink}
    </div>
  );
};

StarRating.propTypes = {
  /**
  Product us item id
  */
  usItemId: PropTypes.string,
  /**
  The total number of stars (e.g. 5, 10)
  */
  total: PropTypes.number.isRequired,
  /**
  The average number of stars (e.g. 3)
  */
  average: PropTypes.number.isRequired,
  /**
  The count of reviews
  */
  count: PropTypes.number
};

export default StarRating;

