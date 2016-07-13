import React, { PropTypes } from "react";
import P13NCarousel from "./p13n-carousel";
import classnames from "classnames";

const P13NRecommendation = (props) => {
  const classNames = classnames("slick-module",
    "module-p13n-recommendations",
    "js-module-p13n-recommendations",
    "ResponsiveContainer",
    "module-p13n-recommendations-parent-none"
  );

  return (
    <div className={classNames}>
      <P13NCarousel
        moduleTitle={props.irsData && props.irsData.moduleTitle}
        products={props.products}
        handleClick={props.handleClick}
      />
    </div>
  );
};

P13NRecommendation.propTypes = {
  "irsData": PropTypes.object,
  "products": PropTypes.array,
  "handleClick": PropTypes.func
};

P13NRecommendation.displayName = "P13NRecommendation";

export default P13NRecommendation;
