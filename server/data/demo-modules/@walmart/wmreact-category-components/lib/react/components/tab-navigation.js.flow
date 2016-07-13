import React, { PropTypes } from "react";
import Chooser from "@walmart/wmreact-chooser/lib/components/chooser";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getTempoModuleAutomationId } from "@walmart/category-utils";

/**
 * Renders chooser from given options
 * @param {Array} options values to be displayed as option
 * @param {Number} value current selected value
 * @param {Function} onChange function to be triggered when chooser value is changed.
 * @return {ReactElement} Chooser component
 */
const _renderChooser = (options, value, onChange) => (
  <Chooser
    chooserName={options.join("-")}
    defaultValue={`${value}`}
    onChange={onChange}
  >
    { options.map((option, index) => (
        <Chooser.Option value={`${index}`} key={index}>
          {option}
        </Chooser.Option>
      ))
    }
  </Chooser>
);

/**
 * Renders button groups
 * @param {Array} options values to be displayed on each button
 * @param {Number} value current selected value
 * @param {Function} onChange function to be triggered when button is clicked
 * @return {ReactElement} tab buttons component
 */
const _renderButtonGroup = (options, value, onChange) => (
  <div className="Tab-buttons">
    { options.map((option, index) => (
        <Button
          key={index}
          badge
          badgeAlt
          active={index === value}
          onClick={() => onChange(index)}
        >
          {option}
        </Button>
      ))
    }
  </div>
);

/**
 * Tab Navigation component. It will act as navigation for Tabbed content.
 * It is capable of rendering based on device width.
 * It renders a Chooser component for smaller breakpoints and Button groups
 * for higher breakpoints
 *
 * @param {Object} passed in props
 * @return {ReactElement} TabNavigation content
 *
 * @component TabNavigation
 * @import {TabNavigation}
 * @playground
 * TabNavigation
 * ```
 * <TabNavigation
 *  options={[ " Tab1", "Tab2"]}
 *  value={1}
 * />
 * ```
 */

const TabNavigation = ({moduleType, onChange, options, value}) => (
  <div className="Tab-navigation"
    {...getTempoModuleAutomationId(moduleType, process)}>
    <span className="hide-content-m">
      {_renderChooser(options, value, onChange)}
    </span>
    <span className="hide-content-max-m">
      {_renderButtonGroup(options, value, onChange)}
    </span>
  </div>
);

TabNavigation.displayName = "TabNavigation";

TabNavigation.propTypes = {
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
  callback when chooser value is changed or any button is clicked in
  case of button group.
  */
  onChange: PropTypes.func,
  /**
  options to be rendered as chooser or as in individual buttons
  */
  options: PropTypes.array.isRequired,
  /**
  current active selection
  */
  value: PropTypes.number.isRequired
};

TabNavigation.defaultProps = {
  moduleType: "TabNavigation",
  onChange: () => {}
};

export default TabNavigation;
