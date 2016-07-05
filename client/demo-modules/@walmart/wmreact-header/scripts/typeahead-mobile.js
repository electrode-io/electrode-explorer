/*eslint-disable*/
/**
 * Mweb Typeahead inline script is created for the new mweb design & experience
 * https://confluence.walmart.com/display/LABSPOLSEA/Mobile+Typeahead
 *
 * ## Product & UX Requirement
 * - Improve the typeahead user experience for mobile web by providing personalized and topical
 *  search assist capabilities
 * - Make it fast by reducing the end to end latency by 50%
 *
 * ## Frontend Changes
 * - For walmart.com mweb, replace existing twitter typeahead with a lightweight, customizable
 * simple typeahead widget with 0 dependencies and build with modern standards (IE10+)
 * - Service protocol change from JSONP to JSON to fix the existing timeout error
 * - Typeahead data schema change to support personalized data (trending & recnet) and prefetch
 * functionality
 * - Typeahead widget API & template is customizable enough for different design requirement and
 * changes
 * - Provide flexible API and custom Events in widget lifecycle to support new features: e.g.
 * analytics and trending links
 * - Inline Typeahead script for mweb to get the typeahead interaction time closer to its render
 * time
 *
 * ## Typeahead & DataAdapter Usage
 * var typeahead = new Typeahead({
 *    input: $searchInput,
 *    menu: $(".typeahead-suggest", $searchList s),
 *    rate: SERVICE_DEBOUNCE_RATE,
 *    adapter: new DataAdapter({
 *      url: "/search/autocomplete/v3/?",
 *      timeout: 150,
 *      transform: function(data) {return data;}
 *    })
 * });
 *
 * - Typeahead Events
 * TA.empty   - Typeahead input is cleared and menu is empty
 * TA.select  - User made a selection
 * TA.render  - Typeahead menu renders
 *
 * SHOULD ONLY RUN ON MOBILE DEVICES
 * Supported by IE10+ and modern mobile browser, for unsupported browsers script will
 * exit immediately.
 */
(function () {
  var SERVICE_ROOT = "//www.walmart.com/search",
    SERVICE_AUTOCOMPLETE_ENDPOINT = "/autocomplete/v1",
    SERVICE_ENDPOINT = (window._wml && window._wml.typeAheadUrl) ?
      window._wml.typeAheadUrl : SERVICE_ROOT + SERVICE_AUTOCOMPLETE_ENDPOINT,
    SERVICE_DEBOUNCE_RATE = 100,
    SEARCH_ROOT = SERVICE_ROOT + "/?",
    SEARCH_PARAM_QUERY = "query",
    SEARCH_PARAM_CATEGORY = "cat_id",
    CATEGORY_ALL_TEXT = "all Departments",
    CATEGORY_ALL_ID = "0",
    ENTRY_ATLAS = "MWEB_TYPEAHEAD",
    HISTORY_KEY = "typeahead",
    HISTORY_LIMIT = 6, // Change to 3 when trending search is ready
    win = window,
    doc = win.document,
    _wml = win._wml = win._wml || {},
    SESSION_STORAGE = win.sessionStorage,
    CLASSLIST = "classList",
    utilElement = doc.createElement("a"),
    preventDefault = function (ev) {
      ev.preventDefault();
    };

  // DOM util
  function $util(selector, context) {
    if (!selector) {
      return null;
    }

    if (selector.nodeType) {
      return selector;
    } else {
      return (context || doc).querySelector(selector);
    }
  }

  $util.matches = function (el, selector) {
    return (el.matches || el.webkitMatchesSelector || el.msMatchesSelector).call(el, selector);
  };

  $util.closest = function (el, selector) {
    if (el.closest) {
      return el.closest.call(el, selector);
    }

    while (el) {
      if ($util.matches(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };

  $util.on = function (el, eventName, callback) {
    $util.each(eventName.split(" "), function (evt) {
      el.addEventListener(evt, callback);
    });
  };

  $util.off = function (el, eventName, callback) {
    $util.each(eventName.split(" "), function (evt) {
      el.removeEventListener(evt, callback);
    });
  };

  $util.fire = function (el, event, data) {
    var ev = doc.createEvent("HTMLEvents");
    ev.initEvent(event, true, true);
    ev.data = data;
    el.dispatchEvent(ev);
  };

  $util.escapeReg = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  };

  // escape html entities
  $util.escapeHTML = function (s) {
    utilElement.innerHTML = "";
    utilElement.textContent = s;
    return utilElement.innerHTML;
  };

  // a shortened version based on _.debounce
  $util.debounce = function (fn, wait) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;

      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        fn.apply(context, args);
      }, wait);
    };
  };

  $util.each = function (obj, iterator, context) {
    if (!obj) {
      return;
    }

    if (Array.isArray(obj)) {
      obj.forEach(iterator, context);
    } else {
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          iterator.call(context, obj[i], i);
        }
      }
    }
  };

  $util.urlParam = function (url, param) {
    // param is not escaped here since in current usage, all param is defined under control
    var ret = new RegExp("[\?&]" + param + "=([^&#]*)").exec(url);
    return ret ? decodeURIComponent(ret[1]) : ret;
  };

  /**
   * Typeahead
   * @param option.input Input node/selector
   * @param option.menu Menu suggest node/selector
   * @param option.adapter Typeahead service adapter instance
   * @param option.rate User type debounceRate
   * @example
   * var typeahead = new Typeahead({
   *   input: ".js-typeahead-wrapper .js-typeahead-input",
   *   menu: ".js-typeahead-list-suggest",
   *   adapter: this.dataAdapter,
   *   rate: 100
   * });
   * @todo: suppressed template engine for now in favor of js html generation for the smaller file
   * size consideration and safety consideration. Will need a further exploration if have more use
   * case for this lib
   */
  function Typeahead(option) {
    option = option || {};
    this.input = $util(option.input);
    this.menu = $util(option.menu);
    this.adapter = option.adapter;
    this.rate = option.rate || SERVICE_DEBOUNCE_RATE;
    this.query = this.getVal();
    this.typed = "";

    // event handler
    $util.on(this.input, "input", $util.debounce(this.get.bind(this), this.rate));
    $util.on(this.menu, "click", this.onMenuClick.bind(this));
    // record what user typed for analytics
    $util.on(this.input, "keyup", this.onType.bind(this));
  }

  Typeahead.prototype = {
    // UI interacts directly with this method, which fires the adapter's get method
    get: function (ev, query) {
      var self = this,
        adapter = self.adapter,
        value = query || self.getVal();

      // if same, non-empty query then do nothing
      if (self.query && self.query === value) {
        return;
      }

      self.query = value;

      if (value) {
        adapter.get({ term: value }, function (data) {
          $util.fire(self.input, "TA.render");
          self.render(data);
        });
      } else {
        self.clear();
        $util.fire(self.input, "TA.empty");
      }
    },

    // captures user typing, fired by 'keyup' event
    onType: function (ev) {
      this.typed = ev.target.value;
    },

    // menu refers the a user clicking clicking on search suggestions
    onMenuClick: function (ev) {
      preventDefault(ev);
      $util.fire(this.input, "TA.select", { event: ev });
    },

    // sets input value
    setVal: function (val) {
      var input = this.input;

      input.value = val;
      $util.fire(input, "input");
      input.focus();
    },

    // gets input value
    getVal: function () {
      return this.input.value.trim();
    },

    // clears all suggestions and saved suggestions
    clear: function () {
      this.menu.innerHTML = "";
    },

    // creates the search suggestions markup
    render: function (data) {
      var self = this,
        menuHtml = "",
        displayText,
        catName,
        href,
        value,
        query = self.getVal();

      self.menu[CLASSLIST].remove("hide-content");
      self.clear();

      $util.each(data, function (item) {
        // sanitize data for use in html
        $util.each(item, function (value, key) {
          item[key] = $util.escapeHTML(value);
        });
        value = item.val;
        catName = item.cName;
        href = WMTutil.buildURL(value, item.cId);
        displayText = self.highlight(value, query);
        menuHtml +=
          "<li class='" + (catName ? "" : "list") + "'>" +
          "<a href=\"" + href + "\">" + displayText +
          (catName ? "<b class='list-cat'> in " + catName + "</b>" :
            "<b class='list-fill'></b>") +
          "</a></li>";
      });

      self.menu.innerHTML = menuHtml;
    },

    // highlights letters in search suggestions of terms
    highlight: function (text, query) {
      return text.replace(new RegExp($util.escapeReg(query), "gi"), "<b>$&</b>");
    }
  };

  /**
   * DataAdapter
   * @param option.url URL root of typeahead service
   * @param option.timeout Typeahead service timeout ms
   * @param option.transform Transform funciton for the typeahead data
   * @example
   * var dataAdapter = new DataAdapter({
   *   url: "/search/autocomplete/v3/?",
   *   transform: function(data){ return data; }
   * });
   */
  function DataAdapter(option) {
    var self = this;
    option = option || {};
    self.url = option.url || SERVICE_ENDPOINT;
    self.transform = option.transform;
  }

  DataAdapter.prototype = {
    // param builder with custom uri encoding
    buildParam: function (params) {
      var ret = [];

      $util.each(params, function (value, key) {
        var encodedValue = encodeURIComponent(value);
        // if param is term, add walmart typeahead specific character handling
        if (key === "term") {
          encodedValue = encodedValue
            .replace(/\./g, "%2E")
            .replace(/'/g, "%27")
            .replace(/\//g, "%2F")
            .replace(/%/g, "_");
        }
        ret.push("/0/" + encodedValue); // currently replacing 'term=' with '0/'
      });
      return ret.join("&");
    },

    // makes request for suggestion data
    get: function (params, success) {
      var self = this,
        url = self.url + self.buildParam(params);

      // _lload is the little-loader module. Uses jsonp design for fetching
      window._lload(url);
      // jsonp looking for this method
      window.typeaheadResult = function(data) { success(self.transform(data)) };
    }
  };

  // WMT typeahead util
  var WMTutil = {
    // url builder for UI route
    buildURL: function (query, catId) {
      var url = SEARCH_ROOT + SEARCH_PARAM_QUERY + "=" + encodeURIComponent(query);

      if (catId) {
        url += "&" + SEARCH_PARAM_CATEGORY + "=" + catId;
      }
      return url;
    },

    // relocates page
    go: function (href, query, catId) {
      // TODO: currently. searchEvenbus is null because since _wml.ATLAS_SEARCH_BRIDGE
      // hasn't been introduced to electrode yet
      var searchEventbus = _wml.ATLAS_SEARCH_BRIDGE,
        typeahead = _wml[ENTRY_ATLAS].typeahead;

      if (!href) {
        return;
      }

      catId = catId || CATEGORY_ALL_ID;
      query = query || $util.urlParam(href, SEARCH_PARAM_QUERY);

      if (searchEventbus) { // on search page: pjax
        searchEventbus.trigger("headerQueryUpdated", {
          "query": query,
          "catId": catId,
          "source": "search-input"
        });
        typeahead.setVal(query);
        _wml[ENTRY_ATLAS].$headerInput.value = query;
        this.hide();
        WMTutil.hideKeyboard();
      } else { // non-search page: full load
        if (typeahead.typed) { // add typeahead param for analytics
          href += "&typeahead=" + encodeURIComponent(typeahead.typed);
        }
        win.location.href = href;
      }
    },

    // hide keyboard
    hideKeyboard: function (ev) {
      if (ev) {
        preventDefault(ev);
        $util.off(_wml[ENTRY_ATLAS].$searchLists, "touchmove", WMTutil.hideKeyboard);
      }

      doc.activeElement.blur();
    },

    // hide mobile typeahead content
    hide: function () {
      _wml[ENTRY_ATLAS].$typeahead[CLASSLIST].add("hide-content");
      _wml[ENTRY_ATLAS].$typeaheadRecent[CLASSLIST].add("hide-content");
    },

    // show mobile typeahead
    show: function () {
      _wml[ENTRY_ATLAS].$typeahead[CLASSLIST].remove("hide-content");
    },

    // parse data from v1 endpoint for rendering purposes
    transform: function (data) {
      var ret = [];

      if (data.R) {
        $util.each(data.R, function (item, index) {
          if (Array.isArray(item)) { // suggest with category
            // only handle 1st item as subcat
            if (index === 0) {
              var query = item[0],
                catList = item[1];
              if (query && catList) {
                // insert default suggest "in all Departments"
                ret.push({
                  val: query,
                  cName: CATEGORY_ALL_TEXT,
                  cId: CATEGORY_ALL_ID
                });
                // iterate category
                $util.each(catList, function (catItem) {
                  var catName = catItem[0],
                    catId = catItem[1];
                  ret.push({
                    val: query,
                    cName: catName,
                    cId: catId + ""
                  });
                });
              }
            }
          } else { // suggest without category
            ret.push({
              val: item,
              cName: ""
            });
          }
        });
      }
      return ret;
    },

    // helper for setHistory
    parseJSON: function (data) {
      try {
        data = JSON.parse(data);
      } catch (ex) {
        data = null;
      }
      return data;
    },

    // helper for session storage
    sessionSetItem: function (value) {
      // handle localStorage QUOTA_EXCEEDED_ERR error in private mode
      try {
        value = value ? JSON.stringify(value) : "";
        SESSION_STORAGE.setItem(HISTORY_KEY, value);
      } catch (err) {
        if (err.name === "QuotaExceededError") {
          SESSION_STORAGE.clear();
        } else {
          throw err;
        }
      }
    },

    // handles session storage
    setHistory: function (text, url) {
      if (!text || !url) { return; }

      var recent = SESSION_STORAGE.getItem(HISTORY_KEY),
        item = {
          query: text,
          url: url
        };

      if (!recent) { // first time
        recent = [];
        recent.push(item);
      } else {
        recent = this.parseJSON(recent);
        // if already exist return
        if (this.inHistory(recent, text) >= 0) {
          return;
        }
        // if exceeds max length remove last item
        if (recent.length >= HISTORY_LIMIT) {
          recent.pop();
        }
        recent.unshift(item);
      }

      this.sessionSetItem(recent);
    },

    // helper for clearHistory
    inHistory: function (history, query) {
      var pos = -1;

      $util.each(history, function (item, index) {
        if (item.query === query) {
          pos = index;
          return;
        }
      });
      return pos;
    },

    // clears history
    clearHistory: function (query) {
      var num = 0,
        recent = "";

      if (query) { // clear item
        recent = SESSION_STORAGE.getItem(HISTORY_KEY);

        if (recent) {
          recent = this.parseJSON(recent);
          var pos = this.inHistory(recent, query);

          if (recent && pos >= 0) { // exist
            num = recent.length - 1;
            if (num === 0) {
              recent = "";
            } else {
              recent.splice(pos, 1);
            }
          }
        }
      }

      this.sessionSetItem(recent);

      return num;
    }
  };

  _wml[ENTRY_ATLAS] = {
    $: $util,
    Typeahead: Typeahead,
    DataAdapter: DataAdapter,
    WMTutil: WMTutil,

    init: function () {
      var self = this,
        $typeahead = self.$typeahead = $util(".mweb-Typeahead"),
        $headerInput = self.$headerInput = $util(".header-GlobalSearch-input"),
        $searchLists = self.$searchLists = $util(".mweb-Typeahead-list", $typeahead),
        $typeaheadRecent = self.$typeaheadRecent = $util(".mweb-Typeahead-recent", $searchLists),
        $typeaheadSuggest = $util(".mweb-Typeahead-suggest", $searchLists),
        $searchInput = $util(".mweb-Typeahead-input", $typeahead),
        $headerClear = $util(".mweb-Typeahead-clear"),
        headerInputValue = $headerInput ? $headerInput.value : "";

      // exit on non-supported browser feature
      // exit https pages e.g. /cart since ssl service is not integrated w service now, same as prod
      // https://jira.walmart.com/browse/CDSFE-2167
      if (!(Function.prototype.bind && CLASSLIST in doc.body && SESSION_STORAGE) ||
        win.location.protocol === "https:") {
        return;
      }

      var typeahead = this.typeahead = new Typeahead({
        input: $searchInput,
        menu: $typeaheadSuggest,
        adapter: new DataAdapter({ transform: WMTutil.transform })
      });

      // prefetch data on initial page load if headerInput already has value
      if (headerInputValue) {
        typeahead.get(null, headerInputValue);
      }

      // atlas header input UI hook
      $util.on($headerInput, "focus touchstart", function (ev) {
        preventDefault(ev);
        // prevent from other handler
        ev.stopImmediatePropagation();

        WMTutil.show();
        typeahead.setVal(this.value);
      });

      $util.on($headerClear, "click", function (ev) {
        preventDefault(ev);

        WMTutil.show();
        $typeaheadSuggest[CLASSLIST].add("hide-content");
        typeahead.setVal("");
        $headerInput.value = "";
      });

      // mweb typeahead UI hook
      $util.on($util(".mweb-Typeahead-cancel", $typeahead), "click", function (ev) {
        preventDefault(ev);

        WMTutil.hide();

        // clear menu only when mweb typeahead value is different from header input
        if ($headerInput.value !== typeahead.getVal()) {
          typeahead.clear();
        }
        // hide clear btn if header input value is empty
        if (!$headerInput.value) {
          $headerClear[CLASSLIST].remove("display-block");
        }
      });

      $util.on($util(".mweb-Typeahead-clear", $typeahead), "click", function (ev) {
        preventDefault(ev);
        typeahead.setVal("");
      });

      $util.on($searchInput, "TA.select", function (ev) {
        var event = ev.data.event,
          target = event.target,
          a = $util.closest(target, "a"),
          url = a.search,
          query = $util.urlParam(url, SEARCH_PARAM_QUERY),
          catId = $util.urlParam(url, SEARCH_PARAM_CATEGORY);
        if ($util.matches(target, ".list-fill")) {
          // handle click autofill
          typeahead.setVal(query);
        } else {
          // handle click link
          WMTutil.setHistory(a.textContent, a.href);
          WMTutil.go(a.href, query, catId);
        }
      });

      $util.on($searchInput, "TA.render", function () {
        $typeaheadRecent[CLASSLIST].add("hide-content");
        $headerClear[CLASSLIST].add("display-block");
      });

      $util.on($searchInput, "TA.empty", function () {
        $headerClear[CLASSLIST].remove("display-block");

        // render recent searches
        var recent = SESSION_STORAGE.getItem(HISTORY_KEY),
          $menu = $util("div", $typeaheadRecent),
          html = "";

        if (!recent) {
          return;
        }

        $menu.innerHTML = "";
        recent = WMTutil.parseJSON(recent);

        $util.each(recent, function (item) {
          html += "<a href=\"" + item.url + "\">" + item.query +
            "<i class='wmicon wmicon-add'></i>" + "</a>";
        });

        if (html) {
          $menu.innerHTML = html;
          $typeaheadRecent[CLASSLIST].remove("hide-content");
        }
      });

      // handle mobile submit & go
      $util.on($util(".mweb-Typeahead-form", $typeahead), "submit", function (ev) {
        preventDefault(ev);

        var query = typeahead.getVal(),
          url;

        if (query) {
          url = WMTutil.buildURL(query);
          WMTutil.setHistory(query, url);
          WMTutil.go(url, query);
        }
      });

      // handle mobile hide keyboard on touch once move
      $util.on($searchInput, "focus", function () {
        $util.on($searchLists, "touchmove", WMTutil.hideKeyboard);
      });

      // handle recent search clear
      $util.on($util(".mweb-Typeahead-recentClear", $typeaheadRecent), "click", function () {
        WMTutil.clearHistory();
        $typeaheadRecent[CLASSLIST].add("hide-content");
      });

      $util.on($typeaheadRecent, "click", function (ev) {
        preventDefault(ev);

        var target = ev.target;

        if ($util.matches(target, ".mweb-Typeahead-recentClear")) {
          // handle click clear all
          WMTutil.clearHistory();
          $typeaheadRecent[CLASSLIST].add("hide-content");
        } else if ($util.matches(target, ".wmicon-add")) {
          // handle click clear one
          var a = $util.closest(target, "a");
          a.parentNode.removeChild(a);

          var num = WMTutil.clearHistory(a.textContent);
          if (!num) {
            $typeaheadRecent[CLASSLIST].add("hide-content");
          }
        } else if ($util.matches(target, "a")) {
          // handle link
          WMTutil.go(target.href);
        }
      });

      // record perf metrix
      if (_wml.perfMetric) {
        this.time = new Date().getTime() - _wml.perfMetric.ttfb;
      }
    }
  };

  // make this a module for testing
  if (typeof exports !== "undefined" &&
    typeof module !== "undefined" && module.exports) {
    var methods = {
      WMTutil: WMTutil,
      DataAdapter: DataAdapter,
      Typeahead: Typeahead
    };
    module.exports = methods;
  } else {
    _wml.MWEB_TYPEAHEAD.init();
  }
})();
