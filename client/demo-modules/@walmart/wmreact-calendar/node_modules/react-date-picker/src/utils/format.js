'use strict'

var CONFIG   = require('../config')
var toMoment = require('../toMoment')

function f(mom, format){
    return toMoment(mom).format(format)
}

module.exports = {
    day: function(mom, format) {
        return f(mom, format || CONFIG.dayFormat)
    },

    month: function(mom, format) {
        return f(mom, format || CONFIG.monthFormat)
    },

    year: function(mom, format) {
        return f(mom, format || CONFIG.yearFormat)
    }
}