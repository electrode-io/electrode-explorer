import React, { PropTypes } from "react";
import classNames from "classnames";

export const HistogramBar = (props) => {
  const {
    count,
    totalReviewCount,
    ratingValue,
    onRatingClicked,
    active,
    className
  } = props;

  const meterWidth = `${(count / totalReviewCount) * 100}%`;

  const classes = classNames(
    className,
    "RatingFilter",
    { "is-greyed": count === 0 },
    { "active": active && count !== 0 }
  );

  const _onRatingClicked = function () {
    onRatingClicked(ratingValue);
  };

  return (
    <div className={classes} onClick={_onRatingClicked}>
      <div className="MeterInline">{ratingValue} stars</div>
      <div className="Meter Histogram">
        <span className="MeterBar" style={{width: meterWidth}}></span>
      </div>
      <span>{count}</span>
    </div>
  );
};

HistogramBar.displayName = "Histogram.Bar";

HistogramBar.propTypes = {
  /**
   * Count of ratings for the particular rating value
   */
  count: PropTypes.number.isRequired,
  /**
   * Total number of reviews for the item
   */
  totalReviewCount: PropTypes.number.isRequired,
  /**
   * The star rating value
   */
  ratingValue: PropTypes.number.isRequired,
  /**
   * Callback to execute when the rating bar is clicked
   */
  onRatingClicked: PropTypes.func,
  /**
   * The current rating bar whose reviews are shown. If none, then all reviews are shown
   */
  active: PropTypes.boolean,
  /**
   Additional css classes that can be applied to the element.
   */
  className: React.PropTypes.string
};
