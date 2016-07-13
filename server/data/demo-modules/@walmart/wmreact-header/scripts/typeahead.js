/*eslint-disable*/
/**
 * Walmart common search typeahead
 * This component is designed specifically for one situation
 * and values file size and performance
 * over reusability in other situations
 *
 * typeAheadUrl is configurable via CCM from react APP's
 * As we dont have a non prod url for this service we will be using prod as default.
 * If any app which is PCI compliance like creditcard, myaccount are good.
 * In future is grocery or any other tenant want to pass a diffrent value via ccm for typeahead service url.
 * Then they should be able to do it easily.
 */
(function () {
  var DEFAULT_API_URL = "//www.walmart.com/search/autocomplete/v1/";
  var AUTOCOMPLETE_API_URL = (window._wml && window._wml.typeAheadUrl) ? window._wml.typeAheadUrl : DEFAULT_API_URL;
  var OVERRIDE_QUERY = "override";
  var TYPEAHEAD_DELAY = 100;
  var MENU_HIDE_DELAY = 200;
  var CATEGORY_ALL_ID = 0;
  var SEARCH_PARAM_QUERY = "query=";
  var SEARCH_PARAM_CATEGORY = "cat_id=";
  var SEARCH_PARAM_TYPEAHEAD = "typeahead=";
  var FORM_ID = "global-search-form";
  var DROPDOWN_ID = "global-search-dropdown";
  var INPUT_ID = "global-search-input";
  var CLEAR_ID = "global-search-clear";
  var catId;
  var supportInputEvent = "oninput" in document.createElement("input");
  var $form;
  var $input;
  var $dropdown;
  var $clearButton;
  var $firstScript;
  var currentQuery = "";
  var $utilityElement = document.createElement("div");
  var $suggestions;
  var highlighted = -1;
  var currentResult;
  var cached = {};
  var userInput = "";

  function init() {
    reset();
    // we need to recalculate dom in case
    // everything is replaced by react
    $form = el(FORM_ID);
    $input = el(INPUT_ID);
    $dropdown = el(DROPDOWN_ID);
    $clearButton = el(CLEAR_ID);
    $firstScript = document.getElementsByTagName("script")[0];

    if (!$input) {
      return;
    }
    var KEY_UP = 38;
    var KEY_DOWN = 40;
    var KEY_ENTER = 13;
    var KEY_ESCAPE = 27;

    var onInput = debounce(function () {
      currentQuery = trim(this.value.toLowerCase());
      if (currentQuery) {
        show($clearButton);
        getSuggestions(currentQuery);
      } else {
        hide($clearButton);
        hide($dropdown);
      }
    }, TYPEAHEAD_DELAY);

    // if the form resets
    on($form, "reset", function () {
      currentQuery = "";
      $input.focus(); // this takes care of hiding dropdown
    });
    // try to fire suggestion on key up or on focus
    on($input, supportInputEvent ? "input" : "keyup", onInput);
    on($input, "focus", onInput);
    // blur happens just before the click event in the dropdown
    // we have to hide the dropdown a fraction later so link works
    on($input, "blur", debounce(function () {
      $input.value = currentQuery;
      hide($dropdown);
    }, MENU_HIDE_DELAY));
    // highlight row onmouseover
    on($dropdown, "mouseover", function (ev) {
      if ($suggestions && $suggestions.length) {
        for(var i = 0; i < $suggestions.length; i++) {
          if (itselfOrDescendantOf(ev.target, $suggestions[i])) {
            highLightRow(i);
          }
        }
      }
    });
    // if we don't hover at the dropdown suggestions
    on($dropdown, "mouseout", function () {
      highLightRow(-1);
    });
    // highlight row up/down key, hide dropdown on esc key
    on($input, "keydown", function(ev) {
      var newHighlight;
      if ($suggestions && $suggestions.length) {
        if (currentQuery) {
          show($dropdown);
        }
        ev.keyCode = ev.keyCode || ev.which;
        if (ev.keyCode === KEY_DOWN) {
          ev.preventDefault();
          newHighlight = highlighted + 1;
          if (newHighlight > $suggestions.length - 1) {
            newHighlight = -1;
          }
          highLightRow(newHighlight, OVERRIDE_QUERY);
        } else if (ev.keyCode === KEY_UP) {
          ev.preventDefault();
          newHighlight = highlighted - 1;
          if (newHighlight < -1) {
            newHighlight = $suggestions.length - 1;
          }
          highLightRow(newHighlight, OVERRIDE_QUERY);
        } else if (ev.keyCode === KEY_ENTER) {
          // if a row is highlighted
          if ($suggestions[highlighted]) {
            ev.preventDefault(); // prevent form submit
            top.location.href = currentResult[highlighted].href;
          }
        } else if (ev.keyCode === KEY_ESCAPE) {
          hide($dropdown);
        }
      }
    });
  }
  // note: in normal cases we should not re-init
  // this reset is for situations where
  // react blows away our original dom
  // and replace with a new equivalent
  function reset() {
    currentResult = null;
    highlighted = -1;
    catId = CATEGORY_ALL_ID;
    $input = null;
    $dropdown = null;
    $clearButton = null;
    $firstScript = null;
    $suggestions = null;
  }

  function show($el) {
    $el.className = trim(
      $el.className.replace(/hide-content/g, "display-block"));
  }

  function hide($el) {
    $el.className = trim(
      $el.className.replace(/display-block/g, "hide-content"));
  }

  // a very optimized version of $.closest conceptually
  // for our very specific use case
  function itselfOrDescendantOf($currentEl, $ancestor) {
    while($currentEl) {
      if ($currentEl === $ancestor) {
        return true;
      }
      $currentEl = $currentEl.parentNode;
    }
    return false;
  }

  // intelligently getting typeahead result here
  // using JS memory cache whenever possible
  // else fetch from server via JSON-P
  function getSuggestions(query) {
    if (!query) {
      return;
    }
    if (cached[query]) {
      // immediately render
      typeahead(cached[query]);
    } else {
      // load data from server
      // the JSON-P result will call render for us
      // if JSONP request returns error, don't do anything specific
      // for this case. In the future, it may need to display "no match"
      // depending on UI or requirements.
      window._lload(getScriptUrl(query));
    }
  }
  // get the api url based on query and category id
  function getScriptUrl(query) {
    userInput = query;
    if (query) {
      return AUTOCOMPLETE_API_URL + catId + "/" +
        encodeURIComponent(query)
          .replace(/\./g, "%2E")
          .replace(/'/g, "%27")
          .replace(/\//g, "%2F")
          .replace(/%/g, "_");
    }
  }
  // cross-browser event listener
  // not everything is normalized, just what we need
  function on(element, event, callback) {
    if (element.addEventListener) {
      element.addEventListener(event, callback, false);
    } else {
      element.attachEvent("on" + event, function (ev) {
        ev = ev || window.event;
        ev.target = ev.target || ev.srcElement;
        ev.keyCode = ev.keyCode || ev.which;
        return (callback.call(element, ev));
      });
    }
  }
  // string trimming for older browsers
  function trim(val) {
    return val.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }

  function el(id) {
    return document.getElementById(id);
  }

  // this is the version directly from underscore
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * buildSearchLink
   * - if query is not empty, category is ALL, goto url /search/?query=iphone&cat_id=0
   * - if query is not empty , category is not ALL, goto url /search/?query=iphone&cat_id=3944
   * - if query is empty, category is not ALL, goto url e.g. /cp/3944
   */
  function buildSearchLink(query, categoryId, typeahead) {
    var href = "";
    categoryId = categoryId || catId;
    var hasNonDefaultCat = categoryId !== CATEGORY_ALL_ID;
    // string trim
    if (query) {
      href = "/search/?" + SEARCH_PARAM_QUERY +
        encodeURIComponent(query);
      if (hasNonDefaultCat) {
        href += "&" + SEARCH_PARAM_CATEGORY + categoryId
      }
      if (typeahead) {
        href += "&" + SEARCH_PARAM_TYPEAHEAD + typeahead;
      }
    } else if (hasNonDefaultCat) {
      href += "/cp/" + categoryId;
    }
    return href;
  }

  // prevent pure html from reaching the UI
  function sanitize(value) {
    value = value || "";

    if (value) {
      if ("innerText" in $utilityElement) {
        $utilityElement.innerText = value;
      }
      else {
        $utilityElement.textContent = value;
      }
      value = $utilityElement.innerHTML;
    }

    return value;
  }

  function escapeRegexChars(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  function buildRow(row, currentQuery) {
    // need to sanitize data here
    var category = sanitize(row.category);
    var href = row.href;
    var label = sanitize(row.value);
    // doing highlight here
    label = label.replace(new RegExp("(" + escapeRegexChars(currentQuery) + ")", "g"),
      "<strong>$&</strong>");

    var html = "<div class='header-Typeahead-row" +
      (category ? " header-Typeahead-row-category" : "") + "'>";

    if (category) {
      html +=
        "<a href='" + href + "'>" +
        "<span class='header-Typeahead-category-label'>" + label + "</span>" +
        " in " + category +
        "</a>";
    } else {
      html += "<a href='" + href + "'>" + label + "</a>";
    }

    html += "</div>";
    return html;
  }

  function flattenResults(json, query) {
    var data = [];
    var results = json.R;
    var i;
    var j;
    var k;
    var topResults;
    var categoryResults;
    for (i = 0; i < results.length; i++) {
      if (i === 0 && results[i] instanceof Array) { //top search w cat
        topResults = results[i];
        for (j = 0; j < topResults.length; j++) { //top results
          if (j === 0) { //top search
            data.push({
              value: topResults[0],
              href: buildSearchLink(topResults[0], null, query)
            });
          } else if (j === 1) { //category
            categoryResults = topResults[j];
            for (k = 0; k < categoryResults.length; k++) { //category result
              data.push({
                value: topResults[0],
                href: buildSearchLink(topResults[0], categoryResults[k][1], query),
                category: categoryResults[k][0],
                categoryID: categoryResults[k][1]
              });
            }
          }
        }
      } else {
        data.push({
          value: results[i],
          href: buildSearchLink(results[i], null, query)
        });
      }
    }
    return data;
  }

  function highLightRow(index, overrideQuery) {
    overrideQuery = overrideQuery === OVERRIDE_QUERY;
    if ($suggestions && $suggestions.length) {
      if (highlighted !== -1) {
        $suggestions[highlighted].className = trim(
          $suggestions[highlighted].className
            .replace(/is-hovered/g, ""));
      }
      if (index !== -1) {
        $suggestions[index].className += " is-hovered";
        if (overrideQuery) {
          $input.value = currentResult[index].value;
        }
      } else if (overrideQuery) {
        $input.value = currentQuery;
      }

      highlighted = index;
    }
  }

  function typeahead(data) {
    var html = "";
    cached[data.Q] = data;
    // if we have data from currentQuery don't render others
    if (data.Q !== currentQuery && cached[currentQuery]) {
      return; // do not render if we have correct data already
    }

    data = flattenResults(data, userInput);
    currentResult = data;

    if (data.length === 0) {
      hide($dropdown);
    } else {
      show($dropdown);
    }

    for (var i = 0; i < data.length; i++) {
      html += buildRow(data[i], currentQuery);
    }
    $dropdown.innerHTML = html;
    // reset highlighting
    highlighted = -1;
    // reset suggestion rows, turn nodelist to array
    try {
      $suggestions = Array.prototype.slice.call($dropdown.children);
    } catch (e) {
      // IE surprise
      var childrenLength = $dropdown.children.length;
      $suggestions = [];
      for (var j = 0; j < childrenLength; j++) {
        $suggestions.push($dropdown.children[j]);
      }
    }
  }

  // others can define config values before loading typeahead
  // in window.__TYPEAHEAD.props
  window.typeaheadResult = window.typeaheadResult || typeahead;
  typeahead.init = init;

  // we return $input to compare to react's dom to make sure
  // our dom is not blown away, check is done in react lifecycle
  typeahead.getInput = function () {
    return $input;
  };


  typeahead.setCatId = function(id) {
    if (catId !== id) {
      catId = id;
      // blow away our cached result
      cached = {};
      // requery with new category
      getSuggestions(currentQuery);
      if ($input) {
        $input.focus();
      }
    }
  };

  // if our dom got blown all away by React
  // and we are forced to re-render
  typeahead.reRenderLastState= function() {
    $input.value = currentQuery;
    if (currentQuery && cached[currentQuery]) {
      typeahead(cached[currentQuery]);
    }
  };

  // make this a module
  if (typeof exports !== "undefined" &&
    typeof module !== "undefined" && module.exports) {
    typeahead.buildRow = buildRow;
    typeahead.buildSearchLink = buildSearchLink;
    typeahead.reset = reset;
    typeahead.flattenResults = flattenResults;
    typeahead.getScriptUrl = getScriptUrl;
    typeahead.getSuggestions = getSuggestions;
    typeahead.sanitize = sanitize;
    typeahead.trim = trim;
    module.exports = typeahead;
  } else {
    init();
  }
})();
