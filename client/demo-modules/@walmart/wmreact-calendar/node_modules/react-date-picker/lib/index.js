'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');

var moment = require('moment');
var assign = require('object-assign');
var asConfig = require('./utils/asConfig');

var MonthView = require('./MonthView');
var YearView = require('./YearView');
var DecadeView = require('./DecadeView');
var Header = require('./Header');
var toMoment = require('./toMoment');

var hasOwn = function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};

var onEnter = require('./onEnter');

var Views = {
    month: MonthView,
    year: YearView,
    decade: DecadeView
};

function emptyFn() {}

var DatePicker = React.createClass({

    displayName: 'DatePicker',

    propTypes: {
        todayText: React.PropTypes.string,
        gotoSelectedText: React.PropTypes.string,

        renderFooter: React.PropTypes.func,
        onChange: React.PropTypes.func,

        date: React.PropTypes.any,
        viewDate: React.PropTypes.any
    },

    getViewOrder: function getViewOrder() {
        return this.props.viewOrder || ['month', 'year', 'decade'];
    },

    getDefaultProps: function getDefaultProps() {
        var props = assign({}, asConfig(), {
            highlightWeekends: false,
            weekNumberName: '',
            isDatePicker: true,
            navOnDateClick: true,
            highlightRangeOnMouseMove: true,
            defaultStyle: {
                boxSizing: 'border-box'
            },
            onRangeChange: function onRangeChange() {}
        });

        delete props.viewDate;
        delete props.date;

        return props;
    },

    getInitialState: function getInitialState() {
        return {
            view: this.props.defaultView,
            viewDate: this.props.defaultViewDate,
            defaultDate: this.props.defaultDate,
            defaultRange: this.props.defaultRange
        };
    },

    getViewName: function getViewName() {
        var view = this.props.view != null ? this.props.view : this.state.view;

        return view || 'month';
    },

    addViewIndex: function addViewIndex(amount) {
        var viewName = this.getViewName();

        var order = this.getViewOrder();
        var index = order.indexOf(viewName);

        index += amount;

        return index % order.length;
    },

    getNextViewName: function getNextViewName() {
        return this.getViewOrder()[this.addViewIndex(1)];
    },

    getPrevViewName: function getPrevViewName() {
        return this.getViewOrder()[this.addViewIndex(-1)];
    },

    getView: function getView() {
        var views = this.props.views || Views;
        return views[this.getViewName()] || views.month;
    },

    getViewFactory: function getViewFactory() {
        var view = this.getView();

        if (React.createFactory && view && view.prototype && typeof view.prototype.render == 'function') {
            view.__factory = view.__factory || React.createFactory(view);
            view = view.__factory;
        }

        return view;
    },

    getViewDate: function getViewDate() {
        var date = hasOwn(this.props, 'viewDate') ? this.props.viewDate : this.state.viewDate;

        date = date || this.viewMoment || this.getDate() || new Date();

        if (moment.isMoment(date)) {
            //in order to strip the locale - the date picker may have had its locale changed
            //between two render calls. If we don't strip this, moment(mom) returns a new moment
            //with the locale of mom, which is not what we want
            date = +date;
        }

        date = this.toMoment(date);

        return date;
    },

    getDate: function getDate() {
        var date;

        if (hasOwn(this.props, 'date')) {
            date = this.props.date;
        } else {
            date = this.state.defaultDate;
        }
        return date ? this.toMoment(date) : null;
    },

    getRange: function getRange() {
        var _this = this;

        var range;

        if (hasOwn(this.props, 'range')) {
            range = this.props.range;
        } else if (this.state.defaultRange) {
            range = this.state.defaultRange;
        }
        if (range) {
            return range.map(function (r) {
                return r ? _this.toMoment(r) : null;
            }) || null;
        } else {
            return null;
        }
    },

    render: function render() {

        var props = this.p = assign({}, this.props);

        this.toMoment = function (value, dateFormat) {
            return toMoment(value, dateFormat || props.dateFormat, { locale: props.locale });
        };

        var view = this.getViewFactory();

        props.date = this.getDate();
        props.range = this.getRange();

        var dateString = props.date == null ? '' : props.date.format(this.props.dateFormat);

        props.viewDate = this.viewMoment = this.getViewDate();
        props.locale = this.props.locale;
        props.localeData = moment.localeData(props.locale);

        props.renderDay = this.props.renderDay;
        props.onRenderDay = this.props.onRenderDay;

        // props.onChange  = this.handleChange
        // props.onSelect  = this.handleSelect

        var className = (this.props.className || '') + ' date-picker';

        props.style = this.prepareStyle(props);

        var viewProps = props;
        var viewProps = asConfig(props);

        viewProps.toMoment = this.toMoment;
        viewProps.highlightWeekends = this.props.highlightWeekends;
        viewProps.weekNumbers = this.props.weekNumbers;
        viewProps.weekNumberName = this.props.weekNumberName;
        viewProps.dateString = dateString;
        viewProps.localeData = props.localeData;
        viewProps.onSelect = this.handleSelect;
        viewProps.onChange = this.handleChange;
        viewProps.onWeekChange = this.props.onWeekChange;
        viewProps.renderWeekNumber = this.props.renderWeekNumber;

        viewProps.highlightRangeOnMouseMove = this.props.highlightRangeOnMouseMove;
        viewProps.range = props.range;

        return React.createElement(
            'div',
            _extends({}, this.props, { className: className, style: props.style }),
            this.renderHeader(view, props),
            React.createElement(
                'div',
                { className: 'dp-body', style: { flex: 1 } },
                view(viewProps)
            ),
            this.renderFooter(props)
        );
    },

    prepareStyle: function prepareStyle(props) {
        return assign({}, props.defaultStyle, props.style);
    },

    renderFooter: function renderFooter(props) {
        if (this.props.hideFooter) {
            return;
        }

        if (this.props.today) {
            console.warn('Please use "todayText" prop instead of "today"!');
        }
        if (this.props.gotoSelected) {
            console.warn('Please use "gotoSelectedText" prop instead of "gotoSelected"!');
        }

        var todayText = this.props.todayText || 'Today';
        var gotoSelectedText = this.props.gotoSelectedText || 'Go to selected';

        var footerProps = {
            todayText: todayText,
            gotoSelectedText: gotoSelectedText,
            gotoToday: this.gotoNow,
            gotoSelected: this.gotoSelected.bind(this, props),
            date: props.date,
            viewDate: props.viewDate
        };

        var result;
        if (typeof this.props.footerFactory == 'function') {
            result = this.props.footerFactory(footerProps);
        }

        if (result !== undefined) {
            return result;
        }

        return React.createElement(
            'div',
            { className: 'dp-footer' },
            React.createElement(
                'div',
                {
                    tabIndex: '1',
                    role: 'link',
                    className: 'dp-footer-today',
                    onClick: footerProps.gotoToday,
                    onKeyUp: onEnter(footerProps.gotoToday)
                },
                todayText
            ),
            React.createElement(
                'div',
                {
                    tabIndex: '1',
                    role: 'link',
                    className: 'dp-footer-selected',
                    onClick: footerProps.gotoSelected,
                    onKeyUp: onEnter(footerProps.gotoSelected)
                },
                gotoSelectedText
            )
        );
    },

    gotoNow: function gotoNow() {
        this.gotoDate(+new Date());
    },

    gotoSelected: function gotoSelected(props) {
        this.gotoDate(props.date || +new Date());
    },

    gotoDate: function gotoDate(value) {

        this.setView('month');

        this.setViewDate(value);
    },

    getViewColspan: function getViewColspan() {
        var map = {
            month: 5,
            year: 2,
            decade: 2
        };

        return map[this.getViewName()];
    },

    renderHeader: function renderHeader(view, props) {

        if (this.props.hideHeader) {
            return;
        }

        props = props || this.props;

        var viewDate = this.getViewDate();
        var headerText = this.getView().getHeaderText(viewDate, props);

        var colspan = this.getViewColspan();
        var prev = this.props.navPrev;
        var next = this.props.navNext;

        return React.createElement(
            Header,
            {
                prevText: prev,
                nextText: next,
                colspan: colspan,
                onPrev: this.handleNavPrev,
                onNext: this.handleNavNext,
                onChange: this.handleViewChange
            },
            headerText
        );
    },

    handleRenderDay: function handleRenderDay(date) {
        return (this.props.renderDay || emptyFn)(date) || [];
    },

    handleViewChange: function handleViewChange() {
        this.setView(this.getNextViewName());
    },

    /**
     * Use this method to set the view.
     *
     * @param {String} view 'month'/'year'/'decade'
     *
     * It calls onViewChange, and if the view is uncontrolled, also sets it is state,
     * so the datepicker gets re-rendered view the new view
     *
     */
    setView: function setView(view) {

        if (typeof this.props.onViewChange == 'function') {
            this.props.onViewChange(view);
        }

        if (this.props.view == null) {
            this.setState({
                view: view
            });
        }
    },

    setViewDate: function setViewDate(moment) {

        moment = this.toMoment(moment);

        var fn = this.props.onViewDateChange;

        if (typeof fn == 'function') {

            var text = moment.format(this.props.dateFormat);
            var view = this.getViewName();

            fn(text, moment, view);
        }

        if (!hasOwn(this.props, 'viewDate')) {
            this.setState({
                viewDate: moment
            });
        }
    },

    getNext: function getNext() {
        var current = this.getViewDate();
        var toMoment = this.toMoment;

        return {
            month: function month() {
                return toMoment(current).add(1, 'month');
            },
            year: function year() {
                return toMoment(current).add(1, 'year');
            },
            decade: function decade() {
                return toMoment(current).add(10, 'year');
            }
        }[this.getViewName()]();
    },

    getPrev: function getPrev() {
        var current = this.getViewDate();
        var toMoment = this.toMoment;

        return {
            month: function month() {
                return toMoment(current).add(-1, 'month');
            },
            year: function year() {
                return toMoment(current).add(-1, 'year');
            },
            decade: function decade() {
                return toMoment(current).add(-10, 'year');
            }
        }[this.getViewName()]();
    },

    handleNavigation: function handleNavigation(direction, event) {
        var viewMoment = direction == -1 ? this.getPrev() : this.getNext();

        this.setViewDate(viewMoment);

        if (typeof this.props.onNav === 'function') {
            var text = viewMoment.format(this.props.dateFormat);
            var view = this.getViewName();

            this.props.onNav(text, viewMoment, view, direction, event);
        }
    },

    handleNavPrev: function handleNavPrev(event) {
        this.handleNavigation(-1, event);
    },

    handleNavNext: function handleNavNext(event) {
        this.handleNavigation(1, event);
    },

    handleChange: function handleChange(date, event) {
        date = this.toMoment(date);

        if (this.props.navOnDateClick) {
            var viewDate = this.toMoment(this.getViewDate());

            //it's not enough to compare months, since the year can change as well
            //
            //also it's ok to hardcode the format here
            var viewMonth = viewDate.format('YYYY-MM');
            var dateMonth = date.format('YYYY-MM');

            if (dateMonth > viewMonth) {
                this.handleNavNext(event);
            } else if (dateMonth < viewMonth) {
                this.handleNavPrev(event);
            }
        }

        var text = date.format(this.props.dateFormat);

        if (!hasOwn(this.props, 'date')) {
            this.setState({
                defaultDate: text
            });
        }

        ;(this.props.onChange || emptyFn)(text, date, event);

        if (this.p.range) {
            this.handleRangeChange(date, event);
        }
    },

    handleRangeChange: function handleRangeChange(mom) {
        var _this2 = this;

        var range = this.p.range;

        if (range.length < 2) {
            range = [].concat(_toConsumableArray(range), [mom]);
        } else {
            range = [mom];
        }

        range.sort(function (a, b) {
            return a - b;
        });

        if (!this.props.range) {
            this.setState({
                defaultRange: range
            });
        }

        var rangeText = range.map(function (date) {
            return date.format(_this2.props.dateFormat);
        });

        this.props.onRangeChange(rangeText, range, event);
    },


    handleSelect: function handleSelect(date, event) {
        var viewName = this.getViewName();

        var property = {
            decade: 'year',
            year: 'month'
        }[viewName];

        var value = date.get(property);
        var viewMoment = this.toMoment(this.getViewDate()).set(property, value);
        var view = this.getPrevViewName();

        this.setViewDate(viewMoment);

        this.setView(view);

        if (typeof this.props.onSelect === 'function') {
            var text = viewMoment.format(this.props.dateFormat);
            this.props.onSelect(text, viewMoment, view, event);
        }
    }

});

DatePicker.views = Views;

var PT = React.PropTypes;

DatePicker.propTypes = {
    highlightWeekends: PT.bool,

    /**
     * Function to be called when user selects a date.
     *
     * Called with the following params:
     *
     * @param {String} dateText Date formatted as string
     * @param {Moment} moment Moment.js instance
     * @param {Event} event
     *
     * @type {Function}
     */
    onChange: PT.func,

    /**
     * Function to be called when the user navigates to the next/prev month/year/decade
     *
     * Called with the following params:
     *
     * @param {String} dateText Date formatted as string
     * @param {Moment} moment Moment.js instance
     * @param {String} view The name of the current view (eg: "month")
     * @param {Number} direction 1 or -1. 1 if the right arrow, to nav to next period was pressed. -1 if the left arrow, to nav to the prev period was pressed.
     * @param {Event} event
     *
     * @type {Function}
     */
    onNav: PT.func,

    /**
     * Function to be called when the user selects a year/month.
     *
     * Called with the following params:
     *
     * @param {String} dateText Date formatted as string
     * @param {Moment} moment Moment.js instance
     * @param {String} view The name of the view displayed after following the selection. For now, either "year" or "month"
     *
     * @type {Function}
     */
    onSelect: PT.func,

    /**
     * A function that should return a React DOM for the day cell. The first param is the props object.
     * You can use this to have full control over what gets rendered for a day.
     *
     * @param {Object} dayProps The props object passed to day rendering
     *
     * @type {Function}
     */
    renderDay: PT.func,

    /**
     * A function that can manipulate the props object for a day, and SHOULD return a props object (a new one, or the same).
     * Use this for CUSTOM DAY STYLING.
     * You can use this to take full control over the styles/css classes/attributes applied to the day cell in the month view.
     *
     * @param {Object} dayProps
     * @return {Object} dayProps
     *
     * @type {Function}
     */
    onRenderDay: PT.func,

    /******************************************/
    /********** VIEW-related props ************/
    /******************************************/

    /**
     * The default view to show in the picker. This is an uncontrolled prop.
     * If none specified, the default view will be "month"
     *
     * @type {String}
     */
    defaultView: PT.string,

    /**
     * The view to show in the picker. This is a CONTROLLED prop!
     *
     * When using this controlled prop, make sure you update it when `onViewChange` function is called
     * if you want to navigate to another view, as expected.
     *
     * @type {String}
     */
    view: PT.string,

    /**
     * A function to be called when navigating to another view date.
     *
     * Called with the following params:
     *
     * @param {String} dateText Date formatted as string
     * @param {Moment} moment Moment.js instance
     * @param {String} view the name of the view displayed after the navigation occurs.
     *
     * @type {Function}
     */
    onViewDateChange: PT.func,

    /**
     * A function to be called when the view is changed.
     * If you're using the controlled `view` prop, make sure you update the `view` prop in this function if you want to navigate to another view, as expected.
     *
     * @param {String} nextView One of "month", "year", "decade"
     *
     * @type {Function}
     */
    onViewChange: PT.func,

    /**
     * Defaults to true. If specified as false, will not navigate to the date that was clicked, even if that date is in the prev/next month
     * @type {Boolean}
     */
    navOnDateClick: PT.bool,

    highlightRangeOnMouseMove: PT.bool
};

module.exports = DatePicker;