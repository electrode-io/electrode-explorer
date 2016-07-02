import React, { PropTypes } from "react";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import Stars from "@walmart/wmreact-product-descriptors/lib/components/stars";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import ProductBrand from "./product-brand";
import ProductLegalBadge from "./product-legal-badge";

const DISPLAY_ABOVE_M = "hide-content display-inline-block-m";
const SIDE_PADDING = "prod-PaddingRight--xs prod-PaddingLeft--xs";
const COMMON_CLASSES = classNames(DISPLAY_ABOVE_M, SIDE_PADDING, "copy-mini");
/**
 The secondary product info comp display the
 - Reviews stars
 - Review count
 - Q&A link
 - brand name
 - and walmart numver
 For example this is how we use this component.
 ```jsx
 <ProductSecondaryInformation total={5} average={4}
 count={3} brandName="Vizio" legalBadgeLabel="PG-13"/>
 ```
 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductSecondaryInformation}
 @flags noVisibleRender
 @component ProductSecondaryInformation
 @playground
 ProductSecondaryInformation
 ```
 <ProductSecondaryInformation total={5} average={4}
 count={3} brandName="Vizio" legalBadgeLabel="PG-13"/>
 ```
 */

const _renderReviews = ({
  total = 5,
  average = 0,
  count = 0,
  onStarsClick = () => {},
  onReviewsClick = () => {},
  starsSize = "medium",
  emptyReviewLabel = "Write a review",
  reviewsLabel = "reviews" }) => {
  const countLabel = count === 0 ? emptyReviewLabel : `${count} ${reviewsLabel}`;
  return (
    <div className="display-inline-block valign-middle">
      <Stars
        onCountClick={(ev) => { onReviewsClick(ev); }}
        onStarsClick={(ev) => { onStarsClick(ev); }}
        size={starsSize}
        countNode={countLabel}
        {...{total, average, count}} />
    </div>
  );
};

const _renderQandA = ({ qAndALabel = "Q&A", onQAndAClick = () => {} }) => {
  return (
    <div className={classNames(COMMON_CLASSES, "valign-middle")}>
      <Button block fakelink={true} onClick={(ev) => { onQAndAClick(ev); }}>{qAndALabel}</Button>
    </div>
  );
};

const _renderBrand = ({ brandName }) => {
  if (!isEmpty(brandName)) {
    return (
      <div className={COMMON_CLASSES}>
        By: <ProductBrand name={brandName}/>
      </div>
    );
  }
};

const _renderLegalBadge = ({legalBadgeLabel}) => {
  return (
    <div className={COMMON_CLASSES}>
      {legalBadgeLabel ? <ProductLegalBadge badgeLabel={legalBadgeLabel}/> : ""}
    </div>
  );
};

const ProductSecondaryInformation = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={classNames("prod-ProductSecondaryInformation", className)}>
      {_renderReviews(rest)}
      {_renderQandA(rest)}
      {_renderBrand(rest)}
      {_renderLegalBadge(rest)}
    </div>
  );
};

ProductSecondaryInformation.propTypes = {
  /**
    Any additional style classes
  */
  className: PropTypes.string,
  /**
    Legal badge label.
  */
  legalBadgeLabel: PropTypes.string,
  /**
    The brand name.
  */
  brandName: PropTypes.string,
  /**
    Q & A label. Defaults to Q&A
  */
  qAndALabel: PropTypes.string,
  /**
    On click callback handler for Q&A button
  */
  onQAndAClick: PropTypes.func,
  /**
    Size of the reviews star component. Defaults to medium.
  */
  starsSize: PropTypes.oneOf(["small", "medium", "large"]),
  /**
    Label to render when review count is 0. Defaults to Write a review.
  */
  emptyReviewLabel: PropTypes.string,
  /**
    Click handler for stars.
  */
  onStarsClick: PropTypes.func,
  /**
    Click handler for reviews count
  */
  onReviewsClick: PropTypes.func,
  /**
    The total number of stars (e.g. 5, 10)
  */
  total: PropTypes.number,
  /**
    The average number of stars (e.g. 3)
  */
  average: PropTypes.number,
  /**
    Label for the reviews count section. Defaults to reviews
  */
  reviewsLabel: PropTypes.string,
  /**
    The count of reviews
  */
  count: PropTypes
};

export default ProductSecondaryInformation;
