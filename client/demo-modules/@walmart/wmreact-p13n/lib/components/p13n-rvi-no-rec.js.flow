import React, { PropTypes } from "react";
import P13NCarousel from "./p13n-carousel";
import classnames from "classnames";

const P13NRecommendationRviNoRec = (props) => {
  const classNames = classnames("slick-module",
    "module-p13n-recommendations",
    "js-module-p13n-recommendations",
    "p13n-rvi-norec",
    "js-p13n-rvi-norec",
    "ResponsiveContainer",
    "module-p13n-recommendations-parent-none"
  );
  const {irsData, products, handleClick} = props;

  return (
    <div className={classNames}>
      <P13NCarousel
        moduleTitle={irsData && irsData.moduleTitle}
        products={products}
        handleClick={handleClick}
      />
    </div>
  );
};

P13NRecommendationRviNoRec.propTypes = {
  "irsData": PropTypes.object,
  "products": PropTypes.array,
  "handleClick": PropTypes.func
};

P13NRecommendationRviNoRec.displayName = "P13NRecommendationRviNoRec";

export default P13NRecommendationRviNoRec;
