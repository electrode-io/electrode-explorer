'use strict';

var CONFIG = require('../config');
var toMoment = require('../toMoment');

function f(mom, format) {
    return toMoment(mom).format(format);
}

module.exports = {
    day: function day(mom, format) {
        return f(mom, format || CONFIG.dayFormat);
    },

    month: function month(mom, format) {
        return f(mom, format || CONFIG.monthFormat);
    },

    year: function year(mom, format) {
        return f(mom, format || CONFIG.yearFormat);
    }
};