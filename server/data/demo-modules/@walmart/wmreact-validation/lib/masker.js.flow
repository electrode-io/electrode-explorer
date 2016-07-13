const regexp = new RegExp("{{([^}]+)}}", "g");

const DELIM_SIZE = 4;

const regs = {
  "9": /[0-9]/,
  "a": /[A-Za-z]/,
  "*": /[A-Za-z0-9]/
};

const match = (pattern) => {
  const matches = [];
  let found;
  /*eslint-disable no-cond-assign */
  while (found = regexp.exec(pattern)) {
    matches.push(found);
  }
  /*eslint-enable no-cond-assign */

  return matches;
};

const parse = (pattern) => {
  const info = { inpts: {}, chars: {} };

  const matches = match(pattern);
  const pLength = pattern.length;

  let mCount = 0;
  let iCount = 0;
  let i = 0;

  const processMatch = (val) => {
    const valLength = val.length;
    for (let j = 0; j < valLength; j++) {
      info.inpts[iCount] = val.charAt(j);
      iCount++;
    }
    mCount++;
    i += (val.length + DELIM_SIZE - 1);
  };

  for (i; i < pLength; i++) {
    if (mCount < matches.length && i === matches[mCount].index) {
      processMatch(matches[mCount][1]);
    } else {
      info.chars[i - (mCount * DELIM_SIZE)] = pattern.charAt(i);
    }
  }

  info.mLength = i - (mCount * DELIM_SIZE);
  return info;
};

const clean = (val, pattern) => {
  for (const char in pattern.chars) {
    val = val.replace(pattern.chars[char], "");
  }


  return val;

};

/*eslint-disable complexity, max-statements */
const mask = (val, el, pattern) => {
  const masked = [];
  let shifter = 0;
  let valUsed = 0;
  let nextChar = 0;
  let charCount = 0;
  let invalid = false;
  let selStart = el.selectionStart;
  let cursorPos;
  let realPos;

  realPos = {
    start: selStart,
    end: selStart
  };

  for (let i = 0; i < pattern.mLength; i++) {
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
  if (val.length < (pattern.mLength - charCount)) {
    cursorPos = realPos;
  }

  // Handle backspace on chars
  if (val.length === (pattern.mLength - charCount)) {
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

const masker = (el, options) => {
  let pattern;
  let val;

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
