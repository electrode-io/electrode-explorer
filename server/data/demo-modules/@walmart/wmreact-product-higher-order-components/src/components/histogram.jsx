import React, { PropTypes } from "react";
import classNames from "classnames";

import { HistogramBar } from "./histogram-bar";

const Histogram = (props) => {
  const {
    className
  } = props;
  return (
    <div className={classNames("ReviewHistogram hide-content-max-s", className)}>
        {props.children}
    </div>
  );
};

Histogram.propTypes = {
  /**
   * Custom classes for customizing this component
   */
  className: PropTypes.string,
  /**
   * Children to render in container
   */
  children: React.PropTypes.node
};

Histogram.Bar = HistogramBar;

export default Histogram;
