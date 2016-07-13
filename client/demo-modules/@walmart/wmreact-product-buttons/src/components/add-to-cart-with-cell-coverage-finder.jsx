/* @flow */
import React from "react";
import classNames from "classnames";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import ZipCodeSearch from "./zipcode-search";
import ProductCTAAddToCart from "./product-cta-add-to-cart";
import {
  CELL_COVERAGE_FINDER_PROMPTED,
  CELL_COVERAGE_FINDER_CLOSED,
  CELL_COVERAGE_FINDER_LOADING
} from "../enums/cell-coverage-action-status";
import clientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
import Button from "@walmart/wmreact-interactive/lib/components/button";

import CellCoverageFinderPropTypes from "./cell-coverage-finder-proptypes";

const DEFAULT_HEADING = "See if this device will work in your area.";

const _renderCellCoverageForm = ({
  status = CELL_COVERAGE_FINDER_PROMPTED,
  zipCode = "",
  onLocationUpdate,
  heading = DEFAULT_HEADING,
  searchButtonLabel = "Check"
}) => {
  const spinner = status === CELL_COVERAGE_FINDER_LOADING;
  return (
    <div className={classNames("prod-ProductCellCoverageFinder-form")}>
      <div className="xs-margin-ends prod-ProductCellCoverageFinder-heading">
        <div dangerouslySetInnerHTML={{ __html: heading}}/>
      </div>
      <ZipCodeSearch
        zipCode={zipCode}
        spinner={spinner}
        searchButtonLabel={searchButtonLabel}
        onLocationUpdate={onLocationUpdate}/>
    </div>
  );
};

const _renderButtonComponent = () => {
  return (<Button primary className="prod-ProductCTA--primary" block>Add to Cart</Button>);
};

const _renderAsFlyout = (props) => {
  const { onFlyoutClosed = () => {}, onClick = () => {}, ...rest } = props;
  const direction = clientWidth.isBelowBreakPoint("medium") ? "top" : "left";
  return (
    <Flyout direction={direction}
      size="wide"
      closeButton
      closeOnClickOut={false}
      className="display-block prod-ProductCellCoverageFinder-flyout"
      onActiveChange={onFlyoutClosed}
      onTriggerElementClick={onClick}
      trigger={_renderButtonComponent()}
      active>
        {_renderCellCoverageForm(rest)}
    </Flyout>
  );
};

const CellCoverageFinderCTA = (props) => {
  const { status = CELL_COVERAGE_FINDER_PROMPTED, addToCartProps } = props;
  switch (status) {
  case CELL_COVERAGE_FINDER_CLOSED:
    return (<ProductCTAAddToCart {...addToCartProps}/>);
  case CELL_COVERAGE_FINDER_LOADING:
  default:
    return _renderAsFlyout(props);
  }
};

CellCoverageFinderCTA.propTypes = CellCoverageFinderPropTypes;

export default CellCoverageFinderCTA;
