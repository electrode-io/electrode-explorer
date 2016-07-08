'use strict';

module.exports = function onKeyUp(fn) {
  return function (event) {
    if (event.key == 'Enter') {
      fn(event);
    }
  };
};