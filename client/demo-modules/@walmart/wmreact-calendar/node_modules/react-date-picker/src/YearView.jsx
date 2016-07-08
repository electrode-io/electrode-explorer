'use strict'

var React  = require('react')
var moment = require('moment')

var FORMAT   = require('./utils/format')
var asConfig = require('./utils/asConfig')
var toMoment = require('./toMoment')
var onEnter  = require('./onEnter')
var assign   = require('object-assign')
var isInRange = require('./utils/isInRange')

var TODAY

function emptyFn(){}

var YearView = React.createClass({

    displayName: 'YearView',

    getDefaultProps: function() {

        return asConfig()
    },

    /**
     * Returns all the days in the specified month.
     *
     * @param  {Moment/Date/Number} value
     * @return {Moment[]}
     */
    getMonthsInYear: function(value){
        var start = moment(value).startOf('year')
        var result = []
        var i = 0

        for (; i < 12; i++){
            result.push(moment(start))
            start.add(1, 'month')
        }

        return result
    },

    render: function() {

        TODAY = +moment().startOf('day')

        var props = assign({}, this.props)

        var viewMoment = props.viewMoment = moment(this.props.viewDate)

        if (!this.props.range){
            props.moment = moment(props.date).startOf('month')
        }

        var monthsInView = this.getMonthsInYear(viewMoment)

        return (
            <div className="dp-table dp-year-view">
                {this.renderMonths(props, monthsInView)}
            </div>
        )
    },

    /**
     * Render the given array of days
     * @param  {Moment[]} days
     * @return {React.DOM}
     */
    renderMonths: function(props, days) {
        var nodes      = days.map(function(date){
            return this.renderMonth(props, date)
        }, this)
        var len        = days.length
        var buckets    = []
        var bucketsLen = Math.ceil(len / 4)

        var i = 0

        for ( ; i < bucketsLen; i++){
            buckets.push(nodes.slice(i * 4, (i + 1) * 4))
        }

        return buckets.map(function(bucket, i){
            return <div key={"row" + i} className="dp-row">{bucket}</div>
        })
    },

    renderMonth: function(props, date) {
        var monthText = FORMAT.month(date, props.monthFormat)
        var classes = ["dp-cell dp-month"]

        var dateTimestamp = +date

        if (props.range){
          const start = date
          const end = moment(start).endOf('month')

          const [rangeStart, rangeEnd] = props.range

          if (
            isInRange(start, props.range) ||
            isInRange(end, props.range) ||
            rangeStart && isInRange(rangeStart, [start, end]) ||
            rangeEnd && isInRange(rangeEnd, [start, end])
          ){
            classes.push('dp-in-range')
          }
        }

        if (dateTimestamp == props.moment){
            classes.push('dp-value')
        }
        var onClick = this.handleClick.bind(this, props, date)

        return (
            <div
                tabIndex="1"
                role="link"
                key={monthText}
                className={classes.join(' ')}
                onClick={onClick}
                onKeyUp={onEnter(onClick)}
            >
                {monthText}
            </div>
        )
    },

    handleClick: function(props, date, event) {
        event.target.value = date

        ;(props.onSelect || emptyFn)(date, event)
    }
})

YearView.getHeaderText = function(moment, props) {
    return toMoment(moment, null, { locale: props.locale }).format('YYYY')
}

module.exports = YearView
