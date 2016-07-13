/* @flow */
import React from "react";
import Cookies from "@walmart/electrode-cookies";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import SubmapModal from "./product-submap-modal";
import ProductCTAAddToCart from "./product-cta-add-to-cart";

const _renderButtonComponent = (isLoading, {onClick}) => {
  return (
    <Button primary
      spinner={isLoading}
      className="prod-ProductCTA--primary"
      onClick={onClick}
      block>
      Add to Cart
    </Button>
  );
};

const _renderSubmapModal = ({submapModalStatus, onModalClosed, onContinue}) => {
  // if the status is INACTIVE or CONTINUE, don't show the modal/slidepanel
  const active = submapModalStatus === "ACTIVE" ? true : false;
  return (
    <SubmapModal
      active={active}
      onClose={onModalClosed}
      onContinue={onContinue}
    />
  );
};

const SubmapAddToCartButton = (props) => {
  // if status is ACTIVE or INACTIVE, render ATC as a regular button
  // continuedBefore means the submap form has been submitted before
  const continuedBefore = parseInt(Cookies.get("PL")) === 1;
  const renderedComp = continuedBefore || props.submapModalStatus === "CONTINUE" ?
    <ProductCTAAddToCart {...props.addToCartProps}/> :
    _renderButtonComponent(false, props);
  return (
    <div>
      {renderedComp}
      {_renderSubmapModal(props)}
    </div>
  );
};

SubmapAddToCartButton.propTypes = {};

SubmapAddToCartButton.defaultProps = {
  submapModalStatus: "INACTIVE",
  onClick: () => {},
  onModalClosed: () => {},
  onContinue: () => {}
};

export default SubmapAddToCartButton;
