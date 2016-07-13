/* @flow */
import React, { PropTypes } from "react";
import { isSubscribed, isTargeted } from "../utils/shipping-pass";
import { getDataAutomationIdPair } from "@walmart/automation-utils";

export const _shippingPassEligible = (): boolean => {
  return isTargeted() || isSubscribed();
};

const ShippingPassTile = ({ shippingPassEligible, dataAutomationId }): ReactElement => {
  if (shippingPassEligible()) {
    return (
      <div className="Tile-shippingPass"
        {...getDataAutomationIdPair("shippingPass", dataAutomationId, process)}>
        <div className="Tile-shippingPass-logo"></div>
        <span className="visuallyhidden">ShippingPass</span>
      </div>
    );
  }
  return (<div></div>);
};

ShippingPassTile.displayName = "ShippingPassTile";

ShippingPassTile.propTypes = {
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string,
  shippingPassEligible: PropTypes.func
};

ShippingPassTile.defaultProps = {
  dataAutomationId: "shipping-pass-tile",
  shippingPassEligible: _shippingPassEligible
};

export default ShippingPassTile;
