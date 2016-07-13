/* @flow */
import React, { PropTypes } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import HelpFlyoutButton from "./help-flyout-button";
import Price from "../price";
import isEmpty from "lodash/isEmpty";
import toArray from "lodash/toArray";

const HEADING = (
  <span className="CarePlan-heading CarePlan-font CarePlan-margin-right">
    Protect your purchase with a <span className="font-semibold"> Care Plan</span>
  </span>
);
const HELP_TEXT = `Get protected: cover costly repairs with a Product Care Plan.
    Our plans protect above and beyond the manufacturer’s warranty and cover failures,
    including those due to normal wear and tear.`;

const _renderHelpText = (learnMoreLink): ReactElement => {
  return (
    <p className="no-margin CarePlan-help-text copy-small">
      {HELP_TEXT}
      <Link className="CarePlan-link" href={learnMoreLink} target="_blank">
        Learn more
      </Link>
    </p>
  );
};

const _renderHeader = ({flyoutPosition, flyoutSize, learnMoreLink}): ReactElement => {
  const flyoutProps = {
    position: flyoutPosition || "left",
    size: flyoutSize || "wide"
  };
  return (
    <div className="CarePlan-header margin-bottom">
      {HEADING}
      <HelpFlyoutButton className="CarePlan-help" {...flyoutProps}>
        {_renderHelpText(learnMoreLink)}
      </HelpFlyoutButton>
    </div>
  );
};

const _renderUnselectedExperience = (carePlans, onCarePlanSelected): ReactElement => {
  return (carePlans.map((carePlan, index) => {
    return (
      <div key={index} className="CarePlan-option CarePlan-font">
        <span className="CarePlan-add CarePlan-link"
          onClick={() => onCarePlanSelected(carePlan.offerId)}>
          <i className="wmicon font-bold wmicon-16 wmicon-add"/>
        </span>
        <span>
          Add <span className="font-semibold">{carePlan.duration}-Year</span> Protection
          <Price className="font-semibold CarePlan-margin-left"
            price={carePlan.price.price}
            currency={carePlan.price.currencyUnitSymbol}/>
        </span>
      </div>
    );
  }));
};

const _renderSelectedExperience = (selectedPlan, onCarePlanUnselected): ReactElement => {
  return (
    <div className="CarePlan-font CarePlan-selection">
      <span className="CarePlan-margin-right CarePlan-selected">
        <i className="wmicon font-semibold wmicon-16 wmicon-ok"/>
      </span>
      <span>
        <span className="font-semibold">{selectedPlan.duration}-Year</span> Protection
        +
        <Price className="font-semibold CarePlan-margin-left"
          price={selectedPlan.price.price}
          currency="$"/>
        <Link
          className="CarePlan-link CarePlan-remove"
          onClick={() => onCarePlanUnselected()}>
          Remove
        </Link>
      </span>
    </div>
  );
};

const _renderCarePlans = (props): ReactElement => {
  const {
    carePlans,
    selectedPlan,
    onCarePlanSelected,
    onCarePlanUnselected
  } = props;
  return !isEmpty(selectedPlan) && !isEmpty(carePlans[selectedPlan])
    ? _renderSelectedExperience(carePlans[selectedPlan], onCarePlanUnselected)
    : _renderUnselectedExperience(toArray(carePlans), onCarePlanSelected);
};

const CarePlan = (props) => {
  const styles = `CarePlan ${props.className}`;
  return (
    <div className={styles}>
      {_renderHeader(props)}
      {_renderCarePlans(props)}
    </div>
  );
};

CarePlan.displayName = "CarePlan";

CarePlan.propTypes = {
  /**
  Position of the help flyout
  */
  flyoutPosition: PropTypes.string,
  /**
  Size of the help flyout
  */
  flyoutSize: PropTypes.string,
  className: PropTypes.string,
  /**
  Url to care plan details page
  */
  learnMoreLink: PropTypes.string,
  /**
  offerId of the care plan selected
  */
  selectedPlan: PropTypes.string,
  /**
  Care plan options to be rendered
  */
  carePlans: PropTypes.object,
  /**
  callback executed when a care plan is selected
  */
  onCarePlanSelected: PropTypes.func,
  /**
  callback executed when a care plan is unselected
  */
  onCarePlanUnselected: PropTypes.func
};

CarePlan.defaultProps = {
  learnMoreLink: "#",
  onCarePlanSelected: () => {},
  onCarePlanUnselected: () => {},
  status: "UNSELECTED",
  flyoutPosition: "left",
  flyoutSize: "wide",
  className: ""
};

export default CarePlan;
