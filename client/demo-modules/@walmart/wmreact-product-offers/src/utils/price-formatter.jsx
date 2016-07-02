/* @flow */
/* eslint func-style: 0, complexity: 0, max-statements: [2, 16] */
import React from "react";
import isNumber from "lodash/isNumber";
import isString from "lodash/isString";

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
const tokenize = (str: string): ?Array<any> => { // eslint-disable-line
  // Easy case where it's already a valid JS number
  if (isNumber(str)) {
    return [str];
  } else if (!isString(str) || !str.length) {
    // The empty string or other null-like values are just treated as nothing
    return [];
  }

  // idx is the current character in the string we're processing,
  // state is the numeric state number we're in (à la finite-state machines),
  // buffer is the accumulated value of the current token,
  // tokens is a list of all tokens we've lexed so far.
  let idx = 0;
  let state = 0;
  let buffer = "";
  const tokens = [ ];

  // Check to see whether the current character matches an expression. The
  // expression can be 3 possible things:
  // - null: Returns true iff EOS
  // - regular expression: Returns true iff the current character matches
  // - string: Returns true iff the current character equals the string
  const test = (expr: any): any => {
    if (idx >= str.length) {
      return expr === null;
    } else if (expr instanceof RegExp) {
      return expr.exec(str.charAt(idx));
    } else {
      return expr === str.charAt(idx);
    }
  };

  // Transfer to a new state.
  const to = (newState: any): void => {
    state = newState;
  };

  // Eat the current character by adding it to the buffer and
  // advancing the index.
  const eat = (): void => {
    buffer += str.charAt(idx++);
  };

  // Skip the current character by just advancing the index.
  const skip = (): void => {
    idx++;
  };

  // Make the current buffer into a token and reset the buffer
  const token = (): any => {
    tokens.push(buffer);
    buffer = "";
    return tokens;
  };

  // Return an error result.
  const error = (): any => {
     // new Error({ type: err, position: idx, input: str });
    return [];
  };

  // Return the list of tokens as floats.
  const done = (): any => {
    return tokens.map(parseFloat);
  };

  // Iterative method likely safer than something purely
  // recursive since JS doesn't do tail-call optimization
  // thus could blow that stack.
  while (true) { // eslint-disable-line
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

type FormatterOptions = {
  // Determines the string displayed.
  free?: string;
  // Determines how to generated the formatted price otherwise.
  // The 'format' string includes several printf-like qualifiers representing parts of the price:
  format?: string;
  // Whether or not to display the 'FREE' text or $0.00.
  useZero?: boolean;
  // current unit. Defaults to '$'
  currencyUnit?: string;

  // The value to display if the result is zero
  zero?: string;
};

type TokenizedPrice = {
  // The absolute value of the current price, to two decimal places,
  a: string;
  // The most significant digits up to the decimal place of 'a',
  b?: any;
  // The least significant digits up to the decimal place of 'a',
  c?: string;
  // The negative symbol '-' if the price is negative, null otherwise
  n: string;
  // The currency symbol or '$' if none is provided
  z: string;
  // '$' or empty string if price not a whole number.
  d?: string;
  // The digits up to decimal if not zero, else digits after decimal with no leading zero
  e?: string;
  // The digits after decimal if digits up to decimal is zero, else cent sign
  f?: string;
};

type FormattedPrice = {
  // Digits before the decimal
  characteristic: number,
  // Digits after the decimal
  mantissa: number
}

/**
 * Returns a price broken down into it's component parts.
 *
 * @param {any} value the value
 * @param {FormatterOptions} opts the options
 * @return {TokenizedPrice} the tokenized price
 */
const formatter = function (value: any, opts: FormatterOptions): TokenizedPrice {
  // Take every token generated and apply the desired formatting to it, and then
  // if there is more than one join them with a '-' between them.
  const tokens = tokenize(value.toString());
  const token = tokens ? tokens[0] : 0;
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
    const abs = Math.abs(token).toFixed(2);
    const parts = abs.split(".");
    let i;

    // Traverse parts[0] (number before decimal) and add commas to string if necessary
    if (opts.useComma) {
      parts[0] = String(parts[0]);
      for (i = parts[0].length; i >= 0; i -= 3) {
        if (i !== 0 && i !== parts[0].length) {
          parts[0] = `${parts[0].substr(0, i)},${parts[0].substr(i)}`;
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
      f: parts[0] === "0" ? "&cent;" : (parts[1] === "00" ? "" : parts[1]) // eslint-disable-line
    };
  }
};

// See documentation for 'formatter'
export function price(val: any, opts: FormatterOptions): string {
  const fmt = formatter(val, opts || {});
  return `${fmt.n}${fmt.z}${fmt.a}`;
}

// See documentation for 'formatter'
export function displayPrice(val: any, opts: Object): string {
  const fmt = formatter(val, opts || {});

  if (opts && opts.pov) {
    return (
      <span>
        <span className="sup">{fmt.d}</span>{fmt.e}<span className="sup">{fmt.f}</span>
      </span>
    );
  } else {
    const hiddenClass = (opts && opts.hiddenClass) ? opts.hiddenClass : "visuallyhidden";
    return (
      <span>
        {fmt.n}
        <span className="sup">
            {fmt.z}
        </span>
        {fmt.b}
        <span className={hiddenClass}>
        .
        </span>
        <span className="sup">
        {fmt.c}
        </span>
      </span>
    );
  }
}

export function getFormattedPrice(val: any, opts: Object): FormattedPrice {
  const fmt: {
    b: number, // Absolute dollar value before the decimal
    c: number  // Absolute cents value after the decimal
  } = formatter(val, opts || {});

  return {
    characteristic: fmt.b,
    mantissa: fmt.c
  };
}

export function formatPPU(val: any, currencyCode: string): Object {
  if (!val) {
    return null;
  }
  currencyCode = currencyCode || "$";
  let ret;
  const p = parseFloat(val);
  if (p >= 1) {
    ret = {
      characteristic: 1,
      mantissa: p.toFixed(2) - 1
    };
  } else {
    const _price = (val * 100).toFixed(1);
    const characteristic = parseInt(_price);
    const mantissa = parseInt((_price - characteristic) * 10);
    ret = { characteristic, mantissa };
  }
  return ret;
}
