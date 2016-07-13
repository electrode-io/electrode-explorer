"use strict";

exports.__esModule = true;


var Helper = {
  pluralize: function pluralize(count, singular, plural) {
    return count !== 1 ? plural : singular;
  }
};

exports.default = Helper.pluralize;