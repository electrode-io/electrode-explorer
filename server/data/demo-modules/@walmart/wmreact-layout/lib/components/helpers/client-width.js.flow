/* eslint max-len: 0, no-undef: 0, valid-jsdoc: 0 */
/*
A pretty straight port of:
https://gecgithub01.walmart.com/GlobalProducts/atlas-common/blob/master/frontend/js/common/utils/client-width.js
*/

import { canUseDOM } from "exenv";

// Breakpoints from http://walmartlabs.github.io/web-style-guide/#responsive-breakpoints
// The _.extend() below is a refactor to rely on the common global breakpoints
// object, rather than replicating breakpoint constants, but also keeping support for legacy
// keywords that are used throughout atlas based on the original version of the js.
// TODO: USFEG-1904 Search and remove all instances of these keys, replacing with
// TODO: the keys from common/breakpoints, and then remove this _.extend() block.
export const BREAKPOINTS = {
  EXTRA_SMALL: "extraSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  EXTRA_LARGE: "extraLarge"
};

const BREAKPOINTS_ENUM = {
  [BREAKPOINTS.EXTRA_SMALL]: 320,
  [BREAKPOINTS.SMALL]: 480,
  [BREAKPOINTS.MEDIUM]: 768,
  [BREAKPOINTS.LARGE]: 1024,
  [BREAKPOINTS.EXTRA_LARGE]: 1364
};

let _widthGetter = canUseDOM
  ? () => window.innerWidth
  : () => 0;

const ClientWidth = {
  breakpoints: BREAKPOINTS_ENUM,

  _setClientWidthGetter: (func) => {
    _widthGetter = func;
  },

  getClientWidth: () => {
    // *Note*: IE6 & IE7 don't have window.innerWidth
    const innerWidth = _widthGetter();

    if (innerWidth && innerWidth !== ClientWidth._getDocumentClientWidth()) {
      // Chrome doesn't always report the proper size when we resize the screen
      // So we need to select innerWidth in that case
      return _widthGetter();
    }

    return ClientWidth._getDocumentClientWidth();
  },

  _getInnerWidth: () => {
    return window.innerWidth;
  },

  _getDocumentClientWidth: () => {
    return canUseDOM ? document.documentElement.clientWidth : 0;
  },

  /**
   * Returns whether the browser width is less than the break point passed in
   *
   * @param  {String||Number}  breakPoint This is the break point that you're comparing against
   *                                      the browser width. Valid examples inlcude "large", 1024,
   *                                      "1024" and "1024px".
   *
   * @param  {Boolean}   maxWidth This will calculate breakpoint values based on max-width values
   *                     as per style guide (optional).
   *
   * @return {Boolean}
   */
  isBelowBreakPoint: (breakPoint, maxWidth) => {
    let breakPointValue = breakPoint;
    if (BREAKPOINTS_ENUM[breakPoint]) {
      breakPointValue = BREAKPOINTS_ENUM[breakPoint];

      if (maxWidth) {
        breakPointValue--;
      }

    } else if (parseInt(breakPoint, 10)) {
      breakPointValue = parseInt(breakPoint, 10);

    } else {
      throw new Error("Breakpoint not valid");
    }

    return breakPointValue >= ClientWidth.getClientWidth();
  },

  /**
   * Returns the current active breakpoint.
   * @return {string} current active breakpoint
   */
  getCurrentBreakpoint: () => {
    const width = ClientWidth.getClientWidth();
    const bps = Object.keys(BREAKPOINTS);

    while (bps.length) {
      const bpoint = bps.pop();
      if (width >= BREAKPOINTS_ENUM[BREAKPOINTS[bpoint]]) {
        return BREAKPOINTS[bpoint];
      }
    }

    return BREAKPOINTS.EXTRA_SMALL;
  }
};

export default ClientWidth;
