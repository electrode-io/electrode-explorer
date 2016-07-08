'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var React = require('react');
var moment = require('moment');
var assign = require('object-assign');

var FORMAT = require('./utils/format');
var asConfig = require('./utils/asConfig');
var onEnter = require('./onEnter');
var toMoment = require('./toMoment');

var isInRange = require('./utils/isInRange');

var TODAY;

function emptyFn() {}

var MonthView = React.createClass({

  displayName: 'MonthView',

  /**
   * Formats the given date in the specified format.
   * @method format
   *
   * @param  {Date/String/Moment} value
   * @param  {String} [format] If none specified, #dateFormat will be used
   *
   * @return {String}
   */

  formatAsDay: function formatAsDay(moment, dayDisplayFormat) {
    return moment.format(dayDisplayFormat || 'D');
  },

  getDefaultProps: function getDefaultProps() {
    return asConfig();
  },

  getInitialState: function getInitialState() {
    return {
      range: null
    };
  },


  getWeekStartMoment: function getWeekStartMoment(value) {
    var weekStartDay = this.weekStartDay;
    var clone = this.toMoment(value).day(weekStartDay);

    return clone;
  },

  /**
   * Returns all the days in the specified month.
   *
   * @param  {Moment/Date/Number} value
   * @return {Moment[]}
   */
  getDaysInMonth: function getDaysInMonth(value) {
    var first = this.toMoment(value).startOf('month');
    var beforeFirst = this.toMoment(value).startOf('month').add(-1, 'days');
    var start = this.getWeekStartMoment(first);
    var result = [];
    var i = 0;

    if (beforeFirst.isBefore(start)
    // and it doesn't start with a full week before and the week has at least 1 day from current month (default)
     && (this.props.alwaysShowPrevWeek || !start.isSame(first))) {
      start.add(-1, 'weeks');
    }

    for (; i < 42; i++) {
      result.push(this.toMoment(start));
      start.add(1, 'days');
    }

    return result;
  },

  render: function render() {

    var props = assign({}, this.props);

    this.toMoment = function (value, dateFormat) {
      return toMoment(value, dateFormat || props.dateFormat, { locale: props.locale });
    };

    TODAY = +this.toMoment().startOf('day');

    var dateFormat = props.dateFormat;
    var viewMoment = props.viewMoment = this.toMoment(props.viewDate, dateFormat);

    var weekStartDay = props.weekStartDay;

    if (weekStartDay == null) {
      weekStartDay = props.localeData._week ? props.localeData._week.dow : null;
    }

    this.weekStartDay = props.weekStartDay = weekStartDay;

    if (props.minDate && moment.isMoment(props.minDate)) {
      props.minDate.startOf('day');
    }

    props.minDate && (props.minDate = +this.toMoment(props.minDate, dateFormat));
    props.maxDate && (props.maxDate = +this.toMoment(props.maxDate, dateFormat));

    this.monthFirst = this.toMoment(viewMoment).startOf('month');
    this.monthLast = this.toMoment(viewMoment).endOf('month');

    if (props.date) {
      props.moment = this.props.range ? null : this.toMoment(props.date).startOf('day');
    }

    var daysInView = this.getDaysInMonth(viewMoment);

    return React.createElement(
      'div',
      { className: 'dp-table dp-month-view', onMouseLeave: props.highlightRangeOnMouseMove && this.handleViewMouseLeave },
      this.renderWeekDayNames(),
      this.renderDays(props, daysInView)
    );
  },

  handleViewMouseLeave: function handleViewMouseLeave() {
    this.state.range && this.setState({ range: null });
  },

  /**
   * Render the week number cell
   * @param  {Moment[]} days The days in a week
   * @return {React.DOM}
   */
  renderWeekNumber: function renderWeekNumber(props, days) {

    var firstDayOfWeek = days[0];
    var week = firstDayOfWeek.weeks();
    var dateTimestamp = +firstDayOfWeek;

    var weekNumberProps = {
      key: 'week',
      className: 'dp-cell dp-weeknumber',

      //week number
      week: week,

      //the days in this week
      days: days,

      date: firstDayOfWeek,
      children: week
    };

    var renderWeekNumber = props.renderWeekNumber;
    var result;

    if (renderWeekNumber) {
      result = renderWeekNumber(weekNumberProps);
    }

    if (result === undefined) {
      result = React.createElement('div', weekNumberProps);
    }

    return result;
  },

  /**
   * Render the given array of days
   * @param  {Moment[]} days
   * @return {React.DOM}
   */
  renderDays: function renderDays(props, days) {
    var nodes = days.map(function (date) {
      return this.renderDay(props, date);
    }, this);

    var len = days.length;
    var buckets = [];
    var bucketsLen = Math.ceil(len / 7);

    var i = 0;
    var weekStart;
    var weekEnd;

    for (; i < bucketsLen; i++) {

      weekStart = i * 7;
      weekEnd = (i + 1) * 7;

      buckets.push([props.weekNumbers && this.renderWeekNumber(props, days.slice(weekStart, weekEnd))].concat(nodes.slice(weekStart, weekEnd)));
    }

    return buckets.map(function (bucket, i) {
      return React.createElement(
        'div',
        { key: "row" + i, className: 'dp-week dp-row' },
        bucket
      );
    });
  },

  renderDay: function renderDay(props, date) {
    var dayText = FORMAT.day(date, props.dayFormat);
    var classes = ["dp-cell dp-day"];

    var dateTimestamp = +date;
    var mom = this.toMoment(date);
    var onClick = this.handleClick.bind(this, props, date, dateTimestamp);

    var range = this.state.range || this.props.range;
    var beforeMinDate;

    if (dateTimestamp == TODAY) {
      classes.push('dp-current');
    } else if (dateTimestamp < this.monthFirst) {
      classes.push('dp-prev');
    } else if (dateTimestamp > this.monthLast) {
      classes.push('dp-next');
    }

    if (props.minDate && date < props.minDate) {
      classes.push('dp-disabled dp-before-min');
      beforeMinDate = true;
    }

    var afterMaxDate;
    if (props.maxDate && date > props.maxDate) {
      classes.push('dp-disabled dp-after-max');
      afterMaxDate = true;
    }

    if (dateTimestamp == props.moment) {
      classes.push('dp-value');
    }

    if (range) {

      var start = mom;
      var end = moment(start).endOf('day');

      var _range = _slicedToArray(range, 2);

      var rangeStart = _range[0];
      var rangeEnd = _range[1];


      if (isInRange(start, range) || isInRange(end, range) || rangeStart && isInRange(rangeStart, [start, end]) || rangeEnd && isInRange(rangeEnd, [start, end])) {
        classes.push('dp-in-range');
      }
    }

    var weekDay = mom.day();

    if (weekDay === 0 /* Sunday */ || weekDay === 6 /* Saturday */) {
        classes.push('dp-weekend');
        props.highlightWeekends && classes.push('dp-weekend-highlight');
      }

    var renderDayProps = {
      role: 'link',
      tabIndex: 1,
      key: dayText,
      text: dayText,
      date: mom,
      moment: mom,
      className: classes.join(' '),
      style: {},
      onClick: onClick,
      onKeyUp: onEnter(onClick),
      children: dayText
    };

    if (props.range && props.highlightRangeOnMouseMove) {
      renderDayProps.onMouseEnter = this.handleDayMouseEnter.bind(this, renderDayProps);
    }

    if (beforeMinDate) {
      renderDayProps.isDisabled = true;
      renderDayProps.beforeMinDate = true;
    }
    if (afterMaxDate) {
      renderDayProps.isDisabled = true;
      renderDayProps.afterMaxDate = true;
    }

    if (typeof props.onRenderDay === 'function') {
      renderDayProps = props.onRenderDay(renderDayProps);
    }

    var defaultRenderFunction = React.DOM.div;
    var renderFunction = props.renderDay || defaultRenderFunction;

    var result = renderFunction(renderDayProps);

    if (result === undefined) {
      result = defaultRenderFunction(renderDayProps);
    }

    return result;
  },

  handleDayMouseEnter: function handleDayMouseEnter(dayProps) {
    var range = this.props.range;

    if (range && range.length == 1) {
      var _range2 = _slicedToArray(range, 1);

      var start = _range2[0];


      this.setState({
        range: [start, dayProps.date].sort(function (a, b) {
          return a - b;
        })
      });
    } else if (this.state.range) {
      this.setState({
        range: null
      });
    }
  },

  getWeekDayNames: function getWeekDayNames(props) {
    props = props || this.props;

    var names = props.weekDayNames;
    var weekStartDay = this.weekStartDay;

    if (typeof names == 'function') {
      names = names(weekStartDay, props.locale);
    } else if (Array.isArray(names)) {

      names = [].concat(names);

      var index = weekStartDay;

      while (index > 0) {
        names.push(names.shift());
        index--;
      }
    }

    return names;
  },

  renderWeekDayNames: function renderWeekDayNames() {
    var weekNumber = this.props.weekNumbers ? [this.props.weekNumberName] : [];
    var names = weekNumber.concat(this.getWeekDayNames());

    return React.createElement(
      'div',
      { className: 'dp-row dp-week-day-names' },
      names.map(function (name, index) {
        return React.createElement(
          'div',
          { key: index, className: 'dp-cell dp-week-day-name' },
          name
        );
      })
    );
  },

  handleClick: function handleClick(props, date, timestamp, event) {
    if (props.minDate && timestamp < props.minDate) {
      return;
    }
    if (props.maxDate && timestamp > props.maxDate) {
      return;
    }

    event.target.value = date;(props.onChange || emptyFn)(date, event);
  }
});

MonthView.getHeaderText = function (moment, props) {
  return toMoment(moment, null, { locale: props.locale }).format('MMMM YYYY');
};

module.exports = MonthView;