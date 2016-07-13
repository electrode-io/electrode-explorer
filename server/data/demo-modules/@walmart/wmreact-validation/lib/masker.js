"use strict";

var regexp = new RegExp("{{([^}]+)}}", "g");

var DELIM_SIZE = 4;

var regs = {
  "9": /[0-9]/,
  "a": /[A-Za-z]/,
  "*": /[A-Za-z0-9]/
};

var match = function match(pattern) {
  var matches = [];
  var found = void 0;
  /*eslint-disable no-cond-assign */
  while (found = regexp.exec(pattern)) {
    matches.push(found);
  }
  /*eslint-enable no-cond-assign */

  return matches;
};

var parse = function parse(pattern) {
  var info = { inpts: {}, chars: {} };

  var matches = match(pattern);
  var pLength = pattern.length;

  var mCount = 0;
  var iCount = 0;
  var i = 0;

  var processMatch = function processMatch(val) {
    var valLength = val.length;
    for (var j = 0; j < valLength; j++) {
      info.inpts[iCount] = val.charAt(j);
      iCount++;
    }
    mCount++;
    i += val.length + DELIM_SIZE - 1;
  };

  for (i; i < pLength; i++) {
    if (mCount < matches.length && i === matches[mCount].index) {
      processMatch(matches[mCount][1]);
    } else {
      info.chars[i - mCount * DELIM_SIZE] = pattern.charAt(i);
    }
  }

  info.mLength = i - mCount * DELIM_SIZE;
  return info;
};

var clean = function clean(val, pattern) {
  for (var char in pattern.chars) {
    val = val.replace(pattern.chars[char], "");
  }

  return val;
};

/*eslint-disable complexity, max-statements */
var mask = function mask(val, el, pattern) {
  var masked = [];
  var shifter = 0;
  var valUsed = 0;
  var nextChar = 0;
  var charCount = 0;
  var invalid = false;
  var selStart = el.selectionStart;
  var cursorPos = void 0;
  var realPos = void 0;

  realPos = {
    start: selStart,
    end: selStart
  };

  for (var i = 0; i < pattern.mLength; i++) {
    if (i in pattern.chars) {
      masked[i] = pattern.chars[i];
      shifter--;
      charCount++;
    } else if (val[i + shifter] && val[i + shifter] !== " ") {
      if (regs[pattern.inpts[i + shifter]].test(val[i + shifter])) {
        masked[i] = val[i + shifter];
        valUsed = i + 1;
      } else {
        masked[i] = " ";
        invalid = true;
      }
    } else {
      masked[i] = " ";
      if (!nextChar) {
        nextChar = i;
      }
    }
  }

  cursorPos = realPos;

  // Handle Invalid
  if (invalid) {
    return {
      value: masked.join(""),
      cursor: {
        start: selStart - 1,
        end: selStart - 1
      }
    };
  }

  // Handle End
  if (selStart >= pattern.mLength - 1) {
    cursorPos = realPos;
  }

  if (selStart + 1 < valUsed) {
    cursorPos = realPos;
  }

  // Smart jump
  if (selStart in pattern.chars) {
    while (selStart in pattern.chars) {
      selStart++;
    }
    cursorPos = {
      start: selStart,
      end: selStart
    };
  }

  // Handle insertion
  if (val.length < pattern.mLength - charCount) {
    cursorPos = realPos;
  }

  // Handle backspace on chars
  if (val.length === pattern.mLength - charCount) {
    cursorPos = realPos;
  }

  // Handle first char
  if (selStart === 1 && valUsed < 3) {
    cursorPos = {
      start: nextChar,
      end: nextChar
    };
  }

  return {
    value: masked.join(""),
    cursor: cursorPos,
    count: valUsed
  };
};
/*eslint-enable complexity, max-statements */

var masker = function masker(el, options) {
  var pattern = void 0;
  var val = void 0;

  val = el.value;

  if (options) {
    if (!options.pattern) {
      throw new Error("Masker requires a pattern to be specified!");
    }
  } else {
    throw new Error("No options supplied to masker!");
  }

  pattern = parse(options.pattern);

  val = clean(val, pattern);

  return mask(val, el, pattern);
};

module.exports = masker;