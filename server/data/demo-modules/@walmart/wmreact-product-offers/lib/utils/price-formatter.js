"use strict";

exports.__esModule = true;
exports.price = price;
exports.displayPrice = displayPrice;
exports.getFormattedPrice = getFormattedPrice;
exports.formatPPU = formatPPU;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isNumber = require("lodash/isNumber");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isString = require("lodash/isString");

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A well-formed tokenizer for prices; not some mishmashed string functions.
 * It handles plenty of obscure cases like '-$.2 - -$5' -> [-.2, -5].
 *
 * The failure case right now is to just fall through, but could just as well
 * throw an exception or what have you.
 *
 * @param {mixed} str The string/number to split into price tokens.
 * @return {Array} The list of price tokens found as floating point numbers.
 */
var tokenize = function tokenize(str) {
  // eslint-disable-line
  // Easy case where it's already a valid JS number
  if ((0, _isNumber2.default)(str)) {
    return [str];
  } else if (!(0, _isString2.default)(str) || !str.length) {
    // The empty string or other null-like values are just treated as nothing
    return [];
  }

  // idx is the current character in the string we're processing,
  // state is the numeric state number we're in (à la finite-state machines),
  // buffer is the accumulated value of the current token,
  // tokens is a list of all tokens we've lexed so far.
  var idx = 0;
  var state = 0;
  var buffer = "";
  var tokens = [];

  // Check to see whether the current character matches an expression. The
  // expression can be 3 possible things:
  // - null: Returns true iff EOS
  // - regular expression: Returns true iff the current character matches
  // - string: Returns true iff the current character equals the string
  var test = function test(expr) {
    if (idx >= str.length) {
      return expr === null;
    } else if (expr instanceof RegExp) {
      return expr.exec(str.charAt(idx));
    } else {
      return expr === str.charAt(idx);
    }
  };

  // Transfer to a new state.
  var to = function to(newState) {
    state = newState;
  };

  // Eat the current character by adding it to the buffer and
  // advancing the index.
  var eat = function eat() {
    buffer += str.charAt(idx++);
  };

  // Skip the current character by just advancing the index.
  var skip = function skip() {
    idx++;
  };

  // Make the current buffer into a token and reset the buffer
  var token = function token() {
    tokens.push(buffer);
    buffer = "";
    return tokens;
  };

  // Return an error result.
  var error = function error() {
    // new Error({ type: err, position: idx, input: str });
    return [];
  };

  // Return the list of tokens as floats.
  var done = function done() {
    return tokens.map(parseFloat);
  };

  // Iterative method likely safer than something purely
  // recursive since JS doesn't do tail-call optimization
  // thus could blow that stack.
  while (true) {
    // eslint-disable-line
    switch (state) {
      // This is the initial state. We are looking to tokenize
      // a price, meaning we only care about numbers. Once
      // we've found the start of an actual number we switch to
      // state 1 since the logic is now different.
      case 0:
        if (test(/[$+\s]/)) {
          // Whitespace, $, + are all ignored since they have no effect
          // on the numeric result. You can in fact have something
          // like $$$5 and all of those will be stripped. A more lenient
          // case would be to ignore anything not a '-', '.', '$' or number.
          skip();
        } else if (test("-")) {
          // The '-' in this case represents a literal negative value so
          // we add it to part of the token (as opposed to '-' being
          // used as a separator). This also lets you do stupid things
          // like --$5 - --$10. Unfortunately parseFloat doesn't handle
          // these cases so they're best avoided for now.
          eat();
        } else if (test(/[.0-9]/)) {
          // Aha we have a number! Start the actual processing.
          to(1);
        } else {
          return error("EXPECTED_PRICE_START");
        }
        break;
      // We've determined we're now looking at a number.
      case 1:
        if (test(null)) {
          // If we reach the end of the string, whatever we've
          // looked at so far is obviously a token so add that
          // to the list, and then bail out since we're done.
          token();
          return done();
        } else if (test(".")) {
          // We've found a decimal point. Obviously it's part of
          // the current token, so eat it. Transition to another
          // state since after we've found the '.' we can't have
          // any more of them. Transfer to the state dealing with
          // the part after the decimal.
          eat();
          to(2);
        } else if (test(/[0-9]/)) {
          // We've found a digit of the number. Obviously part of
          // the current token, so eat it. Stay in this state.
          eat();
        } else if (test(/[\s-]/)) {
          // We've found a separator symbol (whitespace or '-').
          // The current token is now complete, so add it to the list.
          // Since it's a separator symbol it obviously doesn't
          // belong to any token, so ignore it. Transfer to the state
          // dealing with the space in-between tokens.
          token();
          to(3);
        } else {
          return error("EXPECTED_NUMERIC");
        }
        break;
      // Looking for part after the decimal
      case 2:
        // As it turns out, sequences like $5. are valid. So if we've seen
        // a decimal and now have EOS, then that's fine. Just add the current
        // token and be done with it.
        if (test(null)) {
          token();
          return done();
        } else if (test(/[0-9]/)) {
          // Keep eating numbers in this state.
          eat();
        } else if (test(/[\s-]/)) {
          // We've found a separator symbol (whitespace or '-').
          // The current token is now complete, so add it to the list.
          // Since it's a separator symbol it obviously doesn't
          // belong to any token, so ignore it. Transfer to the state
          // dealing with the space in-between tokens.
          token();
          to(3);
        } else {
          return error("EXPECTED_INTEGER");
        }
        break;
      // after we've tokenized a number
      case 3:
        if (test(null)) {
          // Since we're just dealing with whitespace and other undesirables
          // here the current list of tokens is good enough if we've hit EOS.
          return done();
        } else if (test(/\s/)) {
          // Keep ignoring whitespace.
          skip();
        } else if (test(/-/)) {
          // So now that we're in-between tokens, a '-' is actually a separator
          // symbol and not part of a negative sign. Ignore it and go back to
          // the beginning state to start the whole process over again.
          skip();
          to(0);
        } else {
          // All other characters don't require any special treatment, so deal
          // with them back in the original state.
          to(0);
        }
        break;
    }
  }
};
/* eslint func-style: 0, complexity: 0, max-statements: [2, 16] */


/**
 * Returns a price broken down into it's component parts.
 *
 * @param {any} value the value
 * @param {FormatterOptions} opts the options
 * @return {TokenizedPrice} the tokenized price
 */
var formatter = function formatter(value, opts) {
  // Take every token generated and apply the desired formatting to it, and then
  // if there is more than one join them with a '-' between them.
  var tokens = tokenize(value.toString());
  var token = tokens ? tokens[0] : 0;
  if (token === 0 && tokens.length === 1) {
    if (opts.useZero) {
      return {
        b: opts.zero,
        c: "",
        z: ""
      };
    }

    return {
      b: "0",
      c: "00",
      z: "$"
    };
  } else {
    var abs = Math.abs(token).toFixed(2);
    var parts = abs.split(".");
    var i = void 0;

    // Traverse parts[0] (number before decimal) and add commas to string if necessary
    if (opts.useComma) {
      parts[0] = String(parts[0]);
      for (i = parts[0].length; i >= 0; i -= 3) {
        if (i !== 0 && i !== parts[0].length) {
          parts[0] = parts[0].substr(0, i) + "," + parts[0].substr(i);
        }
      }
    }

    return {
      a: abs,
      b: parts[0],
      c: parts[1],
      n: token < 0 ? "-" : "",
      z: opts.currencyUnit || "$",
      d: parts[1] === "00" ? "$" : "",
      e: parts[0] === "0" ? parts[1].replace(/^[0]+/g, "") : parts[0],
      f: parts[0] === "0" ? "&cent;" : parts[1] === "00" ? "" : parts[1] // eslint-disable-line
    };
  }
};

// See documentation for 'formatter'
function price(val, opts) {
  var fmt = formatter(val, opts || {});
  return "" + fmt.n + fmt.z + fmt.a;
}

// See documentation for 'formatter'
function displayPrice(val, opts) {
  var fmt = formatter(val, opts || {});

  if (opts && opts.pov) {
    return _react2.default.createElement(
      "span",
      null,
      _react2.default.createElement(
        "span",
        { className: "sup" },
        fmt.d
      ),
      fmt.e,
      _react2.default.createElement(
        "span",
        { className: "sup" },
        fmt.f
      )
    );
  } else {
    var hiddenClass = opts && opts.hiddenClass ? opts.hiddenClass : "visuallyhidden";
    return _react2.default.createElement(
      "span",
      null,
      fmt.n,
      _react2.default.createElement(
        "span",
        { className: "sup" },
        fmt.z
      ),
      fmt.b,
      _react2.default.createElement(
        "span",
        { className: hiddenClass },
        "."
      ),
      _react2.default.createElement(
        "span",
        { className: "sup" },
        fmt.c
      )
    );
  }
}

function getFormattedPrice(val, opts) {
  var fmt = formatter(val, opts || {});

  return {
    characteristic: fmt.b,
    mantissa: fmt.c
  };
}

function formatPPU(val, currencyCode) {
  if (!val) {
    return null;
  }
  currencyCode = currencyCode || "$";
  var ret = void 0;
  var p = parseFloat(val);
  if (p >= 1) {
    ret = {
      characteristic: 1,
      mantissa: p.toFixed(2) - 1
    };
  } else {
    var _price = (val * 100).toFixed(1);
    var _characteristic = parseInt(_price);
    var _mantissa = parseInt((_price - _characteristic) * 10);
    ret = { characteristic: _characteristic, mantissa: _mantissa };
  }
  return ret;
}