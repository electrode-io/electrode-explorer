/* @flow */

import React from "react";
import classNames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";

const _sequenceNames = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth"
];

const _countNames = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six"
];

const Bar = ({width}) => {
  return (
    <div className="infograph-bar">
      <span
        style={{width: `${width}%`}}
        className="infograph-bar-progress">
      </span>
    </div>
  );
};

const Footprint = ({label, index, last, active}) => {
  let item = "footprints-item-";
  item += last ? "last" : _sequenceNames[index];
  const cName = classNames(
    "infograph-footprint",
    item,
    {active}
  );
  return (
    <div
      className={cName}
      key={index}>
      <div className="infograph-point">
        <Icon className="infograph-ok" name="ok"/>
      </div>
      <span className="infograph-label">{label}</span>
    </div>
  );
};

const Footprints = ({labels, completed}) => {
  const cName = `infograph-${_countNames[labels.length]}-footprints`;
  return (
    <div className={cName}>
      {labels.map((label, index) => (
        <Footprint
          label={label}
          index={index}
          key={label}
          active={index === completed - 1}
          last={index === labels.length - 1}
        />
      ))}
    </div>
  );
};

const StaticInfograph = ({completedPercentage, labels, completed}) => {
  if (!completedPercentage) {
    const sectionWidth = 100 / (labels.length - 1);
    completed = completed || 1;
    completedPercentage = sectionWidth * Math.max(completed - 1, 0);
  }
  return (
    <div className="infograph-container">
      <div className="infograph">
        <Bar width={completedPercentage}/>
        <Footprints labels={labels} completed={completed}/>
      </div>
    </div>
  );
};

StaticInfograph.propTypes = {
  /**
   Labels to use for the step points
   */
  labels: React.PropTypes.array.isRequired,
  /**
   The number of items completed
   */
  completed: React.PropTypes.number,
  /**
   The percentage completed
   */
  completedPercentage: React.PropTypes.number
};


export default StaticInfograph;
