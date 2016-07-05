/* @flow */
import React, { PropTypes } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**
  Walmart Logo component for use in the header.
  ```jsx
    <HeaderLogo shippingPass={true} />
  ```
  @import {HeaderLogo}
  @flags noVisibleRender
  @component HeaderLogo
  @playground
  HeaderLogo
*/

const HeaderLogo = (props: Object): ReactElement => {
  const { shippingPass, dataAutomationId } = props;

  const _showShippingPass = (): ?ReactElement => {
    if (shippingPass) {
      return (
        <span
          className="header-Logo-shippingPass"
          {...getDataAutomationIdPair("shippingPass", dataAutomationId)} />
      );
    }
  };

  return (
    <Link
      href="/"
      className="header-Logo display-block"
      {...getDataAutomationIdPair(dataAutomationId, "")}>
      {_showShippingPass({ shippingPass, dataAutomationId })}
      <span className={"visuallyhidden"}>Walmart. Save Money. Live Better.</span>
    </Link>
  );
};

HeaderLogo.displayName = "HeaderLogo";

HeaderLogo.propTypes = {
  /**
  shippingPass means there is another
  shippingPass logo under the primary logo
  */
  shippingPass: PropTypes.bool,
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string
};

HeaderLogo.defaultProps = {
  shippingPass: false,
  dataAutomationId: "header-Logo"
};

export default HeaderLogo;
