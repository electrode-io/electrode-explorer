/* @flow */
import React from "react";

const fmtDifference = function (v: number, singular: string, plural: string): string {
  v = Math.floor(v);
  return `${v} ${v === 1 ? singular : plural} ago`;
};
const secondsAgo = function (d: number): ?string {
  return (d < 60) ? fmtDifference(d, "second", "seconds") : null;
};
const minutesAgo = function (d: number): ?string {
  return (d < 3600) ? fmtDifference(d / 60, "minute", "minutes") : null;
};
const hoursAgo = function (d: number): ?string {
  return (d < 24 * 3600) ? fmtDifference(d / 3600, "hour", "hours") : null;
};
const daysAgo = function (d: number): ?string {
  return (d <= 10 * 24 * 3600) ? fmtDifference(d / (24 * 3600), "day", "days") : null;
};
const weeksAgo = function (d: number): ?string {
  return (d <= 50 * 24 * 3600) ? fmtDifference(d / (7 * 24 * 3600), "week", "weeks") : null;
};
const monthsAgo = function (d: number): ?string {
  return (d <= 300 * 24 * 3600) ? fmtDifference(d / (30 * 24 * 3600), "month", "months") : null;
};

const FormattedDate = React.createClass({
  displayName: "FormattedDate",
  mixins: [React.PureRenderMixin],

  propTypes: {
    value: React.PropTypes.any.isRequired,
    currentDate: React.PropTypes.any,
    strategies: React.PropTypes.array,
    fallbackFormatter: React.PropTypes.func
  },

  getDefaultProps(): Object {
    return {
      currentDate: new Date(),
      strategies: [
        secondsAgo,
        minutesAgo,
        hoursAgo,
        daysAgo,
        weeksAgo,
        monthsAgo
      ],
      fallbackFormatter: (d) => {
        return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
      }
    };
  },

  render(): ReactElement {
    const currentDate = this.props.currentDate ? this.props.currentDate : new Date();
    const ds = Math.floor((currentDate - this.props.value) / 1000);
    let str = this.props.fallbackFormatter ? this.props.fallbackFormatter(this.props.value) : "";
    const strategies = this.props.strategies ? this.props.strategies : [];
    for (const strategy of strategies) {
      const f = strategy(ds);
      if (f !== null) {
        str = f;
        break;
      }
    }
    return (
      <span {... this.props}>
        {str}
      </span>
    );
  }
});

FormattedDate.secondsAgo = secondsAgo;
FormattedDate.minutesAgo = minutesAgo;
FormattedDate.hoursAgo = hoursAgo;
FormattedDate.daysAgo = daysAgo;
FormattedDate.weeksAgo = weeksAgo;
FormattedDate.monthsAgo = monthsAgo;

export default FormattedDate;
