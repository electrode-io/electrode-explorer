'use strict';

var getWeekDayNames = require('./utils/getWeekDayNames');

// console.log(getWeekDayNames())

module.exports = {

    //the names of week days to be displayed in month view - first should be sunday
    weekDayNames: getWeekDayNames,

    //the day to display as first day of week. defaults to 0, which is sunday
    weekStartDay: null,

    locale: null,

    //the format in which days should be displayed in month view
    dayFormat: 'D',

    //the format in which months should be displayed in year view
    monthFormat: 'MMMM',

    //the format in which years should be displayed in decade view
    yearFormat: 'YYYY',

    //text for navigating to prev period
    navPrev: '‹',

    //text for navigating to next period
    navNext: '›',

    //the view to render initially. Possible values are: 'month', 'year', 'decade'
    view: null,

    //the date to mark as selected in the date picker.
    //Can be a Date object, a moment object or a string.
    //If it's a string, it will be parsed using dateFormat
    date: null,

    minDate: null,

    maxDate: null,

    //the date where to open the picker. defaults to today if no date and no viewDate specified
    viewDate: null,

    //if the date property is given as string, it will be parsed using this format
    dateFormat: 'YYYY-MM-DD',

    onRenderDay: null,
    renderDay: null,

    alwaysShowPrevWeek: false
};