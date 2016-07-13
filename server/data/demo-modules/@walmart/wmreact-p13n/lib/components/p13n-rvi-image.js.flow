import React, { PropTypes } from "react";
import classnames from "classnames";

const P13NImage = (props) => {
  const classNames = classnames("rvi-tile-image-link", "js-rvi-tile-image-link", {
    selected: props.selected
  });

  return (
    <a className={classNames}
      data-item-id={props.product.usItemId}
      onClick={props.onClick}>
      <img src={props.product.httpImageLink}
        alt={props.product.productName}
        className={props.classNames}/>
    </a>
  );
};

P13NImage.propTypes = {
  "selected": PropTypes.bool,
  "product": PropTypes.object,
  "onClick": PropTypes.func,
  "classNames": PropTypes.string
};

P13NImage.defaultProps = {
  "classNames": "rvi-tile-image"
};

P13NImage.displayName = "P13NImage";

export default P13NImage;
