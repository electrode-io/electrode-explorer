import React from "react";
import {Stars} from "@walmart/wmreact-product-descriptors";
import classNames from "classnames";

export default class ProductRating extends React.Component {
  render(): ReactElement {
    const starClasses = classNames("stars", "stars-" + this.props.size);
    const ratingClasses = classNames(
      "search-result-product-rating",
      {"rating-longer-text": this.props.mediaRating && this.props.mediaRating.length > 6 ||
        this.props.esrb && this.props.esrb.length > 6 }
    );

    return (
      <div className={ratingClasses}>
        <div className={starClasses}>
          {this.props.customerRating && this.props.numReviews ?
            <Stars
              size={this.props.size}
              average={this.props.customerRating}
              total={5}
              count={this.props.numReviews} /> : null}
        </div>
      </div>
    );
  }
}

ProductRating.displayName = "ProductRating";
ProductRating.propTypes = {
  /**
  Customer Rating Value
  */
  customerRating: React.PropTypes.number.isRequired,
  /**
  Number of reviews
  */
  numReviews: React.PropTypes.number.isRequired,
  /**
  Media Rating Value
  */
  mediaRating: React.PropTypes.string,
  /**
  Size of rating stars
  */
  size: React.PropTypes.string,
  /**
  esrb value
  */
  esrb: React.PropTypes.string
};

ProductRating.defaultProps = {
  customerRating: 0,
  numReviews: 0
};

export default ProductRating;
