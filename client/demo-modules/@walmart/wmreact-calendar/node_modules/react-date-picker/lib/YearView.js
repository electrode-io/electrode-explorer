'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var React = require('react');
var moment = require('moment');

var FORMAT = require('./utils/format');
var asConfig = require('./utils/asConfig');
var toMoment = require('./toMoment');
var onEnter = require('./onEnter');
var assign = require('object-assign');
var isInRange = require('./utils/isInRange');

var TODAY;

function emptyFn() {}

var YearView = React.createClass({

    displayName: 'YearView',

    getDefaultProps: function getDefaultProps() {

        return asConfig();
    },

    /**
     * Returns all the days in the specified month.
     *
     * @param  {Moment/Date/Number} value
     * @return {Moment[]}
     */
    getMonthsInYear: function getMonthsInYear(value) {
        var start = moment(value).startOf('year');
        var result = [];
        var i = 0;

        for (; i < 12; i++) {
            result.push(moment(start));
            start.add(1, 'month');
        }

        return result;
    },

    render: function render() {

        TODAY = +moment().startOf('day');

        var props = assign({}, this.props);

        var viewMoment = props.viewMoment = moment(this.props.viewDate);

        if (!this.props.range) {
            props.moment = moment(props.date).startOf('month');
        }

        var monthsInView = this.getMonthsInYear(viewMoment);

        return React.createElement(
            'div',
            { className: 'dp-table dp-year-view' },
            this.renderMonths(props, monthsInView)
        );
    },

    /**
     * Render the given array of days
     * @param  {Moment[]} days
     * @return {React.DOM}
     */
    renderMonths: function renderMonths(props, days) {
        var nodes = days.map(function (date) {
            return this.renderMonth(props, date);
        }, this);
        var len = days.length;
        var buckets = [];
        var bucketsLen = Math.ceil(len / 4);

        var i = 0;

        for (; i < bucketsLen; i++) {
            buckets.push(nodes.slice(i * 4, (i + 1) * 4));
        }

        return buckets.map(function (bucket, i) {
            return React.createElement(
                'div',
                { key: "row" + i, className: 'dp-row' },
                bucket
            );
        });
    },

    renderMonth: function renderMonth(props, date) {
        var monthText = FORMAT.month(date, props.monthFormat);
        var classes = ["dp-cell dp-month"];

        var dateTimestamp = +date;

        if (props.range) {
            var start = date;
            var end = moment(start).endOf('month');

            var _props$range = _slicedToArray(props.range, 2);

            var rangeStart = _props$range[0];
            var rangeEnd = _props$range[1];


            if (isInRange(start, props.range) || isInRange(end, props.range) || rangeStart && isInRange(rangeStart, [start, end]) || rangeEnd && isInRange(rangeEnd, [start, end])) {
                classes.push('dp-in-range');
            }
        }

        if (dateTimestamp == props.moment) {
            classes.push('dp-value');
        }
        var onClick = this.handleClick.bind(this, props, date);

        return React.createElement(
            'div',
            {
                tabIndex: '1',
                role: 'link',
                key: monthText,
                className: classes.join(' '),
                onClick: onClick,
                onKeyUp: onEnter(onClick)
            },
            monthText
        );
    },

    handleClick: function handleClick(props, date, event) {
        event.target.value = date;(props.onSelect || emptyFn)(date, event);
    }
});

YearView.getHeaderText = function (moment, props) {
    return toMoment(moment, null, { locale: props.locale }).format('YYYY');
};

module.exports = YearView;