/* @flow */
import React from "react";
import classNames from "classnames";
import fecha from "fecha";

import { getDataAutomationIdPair } from "@walmart/automation-utils";
import Copy from "@walmart/wmreact-base/lib/components/copy";

const CTA_PREORDER_FLYOUT_TEXT_CONTEXT = "cta_preorder_flyout_text";
const SHIP_BY_TYPE = "SHIP_BY";
const ARRIVE_BY_TYPE = "ARRIVE_BY";
const DEFAULT_PREORDER_MSG = "Preorder now, and we'll contact you when the item is ready to ship.";
/**
 A PreorderFlyoutContent component. Displayed when the product is preorder eligible.

 For example this is how we use this component.

 ```jsx
<PreorderFlyoutContent/>
 ```

 @import {PreorderFlyoutContent}
 @flags noVisibleRender
 @component PreorderFlyoutContent
 @playground
 PreorderFlyoutContent
 ```
<PreorderFlyoutContent/>
 ```
 */

class PreorderFlyoutContent extends React.Component {
  _getComponentClasses({className}): string {
    return classNames("prod-PreorderFlyoutContent", className);
  }

  _renderFormattedDate({preorderInfo: {preorderDate}, autoId}): ReactElement {
    return (
      <Copy.Small>
        <span className={classNames("FormattedDate", "font-bold")}
          {...getDataAutomationIdPair(CTA_PREORDER_FLYOUT_TEXT_CONTEXT, autoId, process)}>
          {fecha.format(new Date(preorderDate), "dddd, MMMM Do")}
        </span>
      </Copy.Small>
    );
  }

  _getStatusLabel({preorderInfo: {streetDateType, preorderDate}}): string {
    if (!this._hasPreorderDate({preorderInfo: {preorderDate}})) {
      return DEFAULT_PREORDER_MSG;
    }

    switch (streetDateType) {
    case SHIP_BY_TYPE:
      return "Ships on:";
    default:
      return "Arrives by:";
    }
  }

  _hasPreorderDate({preorderInfo: {preorderDate}}): boolean {
    return preorderDate !== null && preorderDate !== undefined;
  }

  render(): ReactElement {
    return (
      <div className={this._getComponentClasses(this.props)}>
        <Copy.Small>{this._getStatusLabel(this.props)}</Copy.Small>
        {this._hasPreorderDate(this.props) && this._renderFormattedDate(this.props)}
      </div>
    );
  }
}

PreorderFlyoutContent.displayName = "PreorderFlyoutContent";

PreorderFlyoutContent.propTypes = {
  /**
   Any additonal style classes
   */
  className: React.PropTypes.string,
  /**
  Used for generating unique automation id's
  */
  autoId: React.PropTypes.string,
  /**
   The date it ships and tye type of preorder it is.
   */
  preorderInfo: React.PropTypes.shape({
    streetDateType: React.PropTypes.oneOf([SHIP_BY_TYPE, ARRIVE_BY_TYPE]),
    preorderDate: React.PropTypes.number
  })
};

PreorderFlyoutContent.defaultProps = {
  className: "",
  autoId: "",
  preorderInfo: {
    streetDateType: SHIP_BY_TYPE,
    preorderDate: undefined
  }
};

export default PreorderFlyoutContent;
