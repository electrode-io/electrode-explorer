import React, {PropTypes} from "react";
import classnames from "classnames";

export const rawMarkup = (shortDescriptionMarkup) => {
  return {__html: shortDescriptionMarkup};
};

const ShortDescription = (props) => {
  const {
    shortDescriptionMarkup,
    className
  } = props;

  return (
    <div className={classnames("ProductPage-short-description", className)}>
      <div className="ProductPage-short-description-header">About this item</div>
      <div className="ProductPage-short-description-body"
        dangerouslySetInnerHTML={rawMarkup(shortDescriptionMarkup)}/>
        <a href="#about" className="ProductPage-read-more-link"> Read more.... </a>
    </div>
  );
};

ShortDescription.displayName = "ShortDescription";

ShortDescription.propTypes = {

  /**
   * Short description markup
   */
  shortDescriptionMarkup: PropTypes.string,
  className: PropTypes.string
};

export default ShortDescription;

