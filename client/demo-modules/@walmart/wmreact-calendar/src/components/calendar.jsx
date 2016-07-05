import React, { PropTypes } from "react";
import DatePicker from "react-date-picker";
import classNames from "classnames";

import Flyout from "@walmart/wmreact-containers/lib/components/flyout";

import { nullSafeDate } from "../utils";

const Calendar = (props) => {
  const icon = props.showIcon ? (
    <i className="wmicon wmicon-calendar"></i>
  ) : null;

  const formattedTriggerText = (
    <span className="default-trigger">
      {props.triggerText}{icon}
    </span>
  );

  return (
    <Flyout
      {...props} // Must come first
      className={classNames("calendar-container", props.flyoutClassName)}
      triggerText={formattedTriggerText}>
        <DatePicker
          {...props} // Must come first
          className={classNames("date-picker-control", props.dpClassName)}
          onChange={props.onDateChange}
          date={nullSafeDate(props.date)}/>
    </Flyout>
  );
};

Calendar.propTypes = {
  showIcon: PropTypes.bool,
  flyoutClassName: PropTypes.string,
  dpClassName: PropTypes.string,
  date: PropTypes.any,
  trigger: PropTypes.element
};

Calendar.defaultProps = {
  initialText: "Choose date",
  showIcon: true,
  direction: "bottom",
  closeOnClickOut: true,
  dateFormat: "MM/DD/YYYY",
  navPrev: "«",
  navNext: "»",
  monthFormat: "MMM",
  weekDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
};

export default Calendar;
