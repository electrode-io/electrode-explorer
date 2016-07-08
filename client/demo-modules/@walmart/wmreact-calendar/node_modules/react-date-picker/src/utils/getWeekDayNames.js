'use strict'

var moment = require('moment')

var DEFAULT_WEEK_START_DAY = moment().startOf('week').format('d') * 1

module.exports = function getWeekDayNames(startDay, locale){

	var weekDays

	if (locale){
		var data = moment.localeData(locale)

		weekDays = data && data._weekdaysShort? data._weekdaysShort: weekDays
	}

	weekDays = (weekDays || moment.weekdaysShort()).concat()

	var names = weekDays
    var index = startDay == null? DEFAULT_WEEK_START_DAY: startDay

    while (index > 0){
        names.push(names.shift())
        index--
    }

    return names
}