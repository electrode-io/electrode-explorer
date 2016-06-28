'use strict';

exports.__esModule = true;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _exenv = require('exenv');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orchestrate = function orchestrate(root) {
  var OOo = {
    __detectBrowser: function __detectBrowser(ua) {
      var isOpera = Object.prototype.toString.call(window.opera) === '[object Opera]',
          isIE /*@cc_on = parseFloat((/MSIE[\s]*([\d\.]+)/).exec(navigator.appVersion)[1])@*/
      ,
          browser = {
        IE: !!isIE,
        Opera: isOpera,
        WebKit: ua.indexOf('AppleWebKit/') > -1,
        Chrome: ua.indexOf('Chrome') > -1,
        Gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
        MobileSafari: /Apple.*Mobile.*Safari/.test(ua),
        iOs: ua.indexOf('iPad') > -1 || ua.indexOf('iPhone') > -1 || ua.indexOf('iPod') > -1,
        iOS67: ua.search(/OS 6(.*)|7(.*) like Mac OS/i) > -1,
        PalmPre: ua.indexOf('Pre/') > -1,
        BlackBerry: ua.indexOf('BlackBerry') > -1,
        Fennec: ua.indexOf('Fennec') > -1,
        IEMobile: ua.indexOf('IEMobile') > -1,
        OperaMobile: ua.search(/Opera (?:Mobi|Mini)/) > -1,
        Kindle: ua.search(/[ ](Kindle|Silk)/) > -1,
        isChromeIOS: /crios/i.test(navigator.userAgent),
        ua: ua
      },
          unknown = false;

      browser.isMobile = browser.MobileSafari || browser.PalmPre || browser.BlackBerry || browser.Fennec || browser.IEMobile || browser.OperaMobile || browser.Kindle;
      browser.isMobileNonIOS = browser.isMobile && (!browser.MobileSafari || ua.search('Android') !== -1);
      return browser;
    }
  };

  OOo.Browser = OOo.__detectBrowser(navigator.userAgent);
  OOo.Cache = {};
  OOo.instanceCount = 0;
  OOo.K = function () {};

  var OnlineOpinion = OnlineOpinion || OOo;

  (function () {
    function $(id) {
      return document.getElementById(id);
    }

    function extend(destination, source) {
      var p;
      for (p in source) {
        if (source.hasOwnProperty(p)) {
          destination[p] = source[p];
        }
      }
      return destination;
    }

    function addEventListener(target, type, callback, captures) {
      if (target.addEventListener) {
        target.addEventListener(type, callback, captures);
      } else if (target.attachEvent) {
        target.attachEvent('on' + type, callback);
      }
    }

    function removeEventListener(target, type, callback, captures) {
      if (target.removeEventListener) {
        target.removeEventListener(type, callback, captures);
      } else if (target.detachEvent) {
        target.detachEvent('on' + type, callback);
      }
    }

    function toQueryString(object) {
      var strOut = [],
          p;
      for (p in object) {
        if (object.hasOwnProperty(p)) {
          strOut.push(p + '=' + (encodeURIComponent(object[p]) || ''));
        }
      }
      return strOut.join('&');
    }

    function getFormParams(opt) {
      var params = toQueryString(opt.metrics),
          prependCustomVar = opt.tealeafId + '|' + opt.clickTalePID + '/' + opt.clickTaleUID + '/' + opt.clickTaleSID;

      params += '&custom_var=' + OOo.createLegacyVars(opt.legacyVariables, prependCustomVar);

      if (opt.metrics.type === 'OnPage') {
        params += '|iframe';
      }
      if (opt.asm) {
        params += '&asm=2';
      }
      params += "&_" + 'rev=2';
      if (opt.customVariables) {
        params += '&customVars=' + encodeURIComponent(OOo.serialize(opt.customVariables));
      }
      return params;
    }

    function appendOOForm(opt, frameName) {
      var d = document,
          form = d.createElement('form'),
          input = d.createElement('input'),
          rewrite = opt.referrerRewrite;

      opt.metrics.referer = location.href;
      if (rewrite) {
        opt.metrics.referer = OOo.referrerRewrite(rewrite);
      }

      form.style.display = 'none';
      form.method = 'post';
      form.target = frameName || 'OnlineOpinion';
      form.action = opt.onPageCard ? 'https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp?r=' + location.href : 'https://secure.opinionlab.com/ccc01/comment_card_d.asp';
      if (opt.commentCardUrl) {
        form.action = opt.commentCardUrl;
        if (opt.onPageCard) {
          form.action += '?r=' + location.href;
        }
      }
      input.name = 'params';
      input.value = getFormParams(opt);
      form.appendChild(input);
      d.body.appendChild(form);

      return form;
    }

    function createMetrics() {
      return {
        width: screen.width,
        height: screen.height,
        referer: location.href,
        prev: document.referrer,
        time1: new Date().getTime(),
        time2: null,
        currentURL: location.href,
        ocodeVersion: '5.9.0'
      };
    }

    function truncateMetric(metric) {
      var newPath = '';
      if (metric && metric.search('://') > -1) {
        var pathArray = metric.split('/');
        for (var i = 3; i < pathArray.length; i++) {
          newPath += "/";
          newPath += pathArray[i];
        }
      }
      return newPath;
    }

    function createLegacyVars(legacyVarObj, prepend) {
      legacyVarObj = legacyVarObj || {};
      if (typeof legacyVarObj === 'string') {
        return prepend + '|' + legacyVarObj;
      }
      return legacyVarObj.override ? legacyVarObj.vars : prepend + (legacyVarObj.vars ? '|' + legacyVarObj.vars : '');
    }

    function referrerRewrite(rewriteObj, loc) {
      if (!loc) {
        loc = location;
      }
      if (typeof rewriteObj === "string") return rewriteObj;
      return rewriteObj.searchPattern ? loc.href.replace(rewriteObj.searchPattern, rewriteObj.replacePattern) : rewriteObj.replacePattern;
    }

    function metaNameExists(name) {
      'use strict';

      var i,
          exists = false,
          metaTags = document.getElementsByTagName('meta');

      if (metaTags !== 'undefined') {
        for (i = 0; i < metaTags.length; i += 1) {
          if (metaTags[i].getAttribute('name') === name) {
            exists = true;
          }
        }
      }
      return exists;
    }

    var DYNAMIC_FRAME_NAME_IS_BUGGY = function () {
      if (navigator.appName === "Microsoft Internet Explorer" && navigator.userAgent.search("MSIE 6") !== -1) {
        return true;
      }
      var container = document.body,
          el,
          isSupported;
      if (document.createElement && container && container.appendChild && container.removeChild) {
        el = document.createElement('iframe');
        isSupported = false;
        el.setAttribute('name', 'oo_test');
        el.style.display = 'none';
        container.appendChild(el);

        isSupported = !!!document.getElementsByName('oo_test')[0];
        container.removeChild(el);
        return isSupported;
      } else {
        return null;
      }
    }();

    function hideWaypoint(e, lf) {
      var evt = e || window.event;
      if (evt.preventDefault && evt.stopPropagation) {
        evt.preventDefault();
        evt.stopPropagation();
      } else {
        evt.returnValue = false;
      }

      var wpContainer = OOo.$('oo_waypoint_container'),
          parent = wpContainer.parentNode;
      parent.removeChild(wpContainer);

      if (lf) {
        lf.focus();
      }
    }

    function getWaypoint() {
      var prompt = OOo.$('oo_waypoint_prompt');
      if (prompt) {
        var container = OOo.$('oo_waypoint_container');
        this.showWaypoint(container);
        return;
      }
      var thisObj = this,
          styles = document.createElement('link'),
          head;

      var resp = '<div id=\"oo_waypoint_prompt\" role=\"dialogue\" aria-describedby=\"' + 'oo_waypoint_message\"><div id=\"oo_company_logo\"></div><div id=\"oo_waypoint_content\">' + '<p id=\"oo_waypoint_message\"><span class=\"top\">Give us your feedback</span><br />' + 'so we can serve you better.</p><p id=\"waypoint_icons\"></p><p id=\"ol_brand_logo\">' + '<a href=\"//www.opinionlab.com/company/\" target=\"_blank\" aria-label=\"' + 'Powered by OpinionLab. This will open a new window\"></a></p></div>' + '<a id=\"oo_close_prompt\" href=\"#\" aria-label=\"Close dialog\">' + '<div class=\"screen_reader\">Close dialogue</div>' + '<span aria-hidden=\"true\">&#10006;</span></a></div>';
      thisObj.showWaypoint(resp);
    }

    function showWaypoint(markup) {
      var d = document,
          linkCounter = 0,
          container = typeof markup === 'string' ? d.createElement('div') : markup,
          overlay = d.createElement('div'),
          headImage,
          imageText,
          footImage,
          waypointLinks,
          opt = this.options,
          categories = opt.categories,
          closePrompt,
          firstLink,
          lastFocused = d.activeElement;

      overlay.id = 'oo_waypoint_overlay';
      container.id = 'oo_waypoint_container';
      container.style.visibility = 'hidden';

      if (typeof markup === 'string') {
        container.innerHTML = markup;
        d.body.appendChild(container);
      }

      container.appendChild(overlay);

      if (opt.companyLogo && opt.companySlogan) {
        headImage = new Image();
        headImage.src = opt.companyLogo;
        headImage.alt = opt.companySlogan;
        OOo.$('oo_company_logo').appendChild(headImage);

        OOo.$('oo_waypoint_prompt').setAttribute('aria-label', opt.companySlogan);
      }

      footImage = new Image();
      footImage.src = opt.pathToAssets
      /* oo_opinionlab_logo */
       + '/4ff9c6c9-ede3/k2-_da118d68-709b-453e-8b90-aa94c71b6226.v1.png';
      footImage.alt = 'powered by OpinionLab';
      OOo.$('ol_brand_logo').children[0].appendChild(footImage);

      closePrompt = OOo.$('oo_close_prompt');

      for (var key in categories) {
        if (categories.hasOwnProperty(key)) {
          var newLink = document.createElement('a'),
              icon = opt.categories[key].icon;

          newLink.className = 'waypoint_icon';
          newLink.href = '#';
          newLink.innerHTML = String(key).replace(/_/g, ' ') + '<span class="screen_reader">This will open a new window</span>';

          if (icon && d.addEventListener) {
            newLink.style.backgroundImage = 'url(' + opt.pathToAssets + icon + ')';
            newLink.style.backgroundRepeat = 'no-repeat';
            newLink.style.backgroundPosition = 'left center';
            newLink.style.backgroundSize = '70px 50px';
            newLink.style.textAlign = 'left';
            newLink.style.paddingLeft = '90px';
          }

          if (typeof opt.categories[key].oCode === 'string') {
            OOo.addEventListener(newLink, 'click', function (key) {
              return function (e) {
                var evt = e || window.event;
                window.open(opt.categories[key].oCode, '_blank', 'scrollbars=yes,location=yes,menubar=yes,resizable=yes');
                OOo.hideWaypoint(evt, lastFocused);
              };
            }(key), false);

            newLink.onkeyup = function (key) {
              return function (e) {
                var evt = e || window.event;
                if (evt.keyCode !== 13) {
                  return;
                }
                window.open(opt.categories[key].oCode, '_blank', 'scrollbars=yes,location=yes,menubar=yes,resizable=yes');
                OOo.hideWaypoint(evt, lastFocused);
              };
            }(key);
          } else {
            OOo.addEventListener(newLink, 'click', function (key) {
              return function (e) {
                var evt = e || window.event;
                OOo.Waypoint[key].show(evt);
                OOo.hideWaypoint(evt, lastFocused);
              };
            }(key), false);

            newLink.onkeyup = function (key) {
              return function (e) {
                var evt = e || window.event;
                if (evt.keyCode !== 13) {
                  return;
                }
                OOo.Waypoint[key].show(evt);
                OOo.hideWaypoint(evt, lastFocused);
              };
            }(key);
          }

          linkCounter++;

          OOo.$('waypoint_icons').appendChild(newLink);
        }
      }

      OOo.addEventListener(closePrompt, 'click', function (e) {
        var evt = e || window.event;
        OOo.hideWaypoint(evt, lastFocused);
      }, false);

      waypointLinks = OOo.$('waypoint_icons').children;
      firstLink = waypointLinks[0];

      firstLink.onkeydown = function (e) {
        var evt = e || window.event;
        if (evt.keyCode === 9) {
          if (evt.shiftKey) {
            closePrompt.focus();
            return false;
          }
        }
      };

      closePrompt.onkeyup = function (e) {
        var evt = e || window.event;
        if (evt.keyCode !== 13) {
          return;
        }
        OOo.hideWaypoint(evt, lastFocused);
      };

      closePrompt.onkeydown = function (e) {
        var evt = e || window.event;
        if (evt.keyCode === 9) {
          if (!evt.shiftKey) {
            firstLink.focus();
            return false;
          }
        }
      };

      waypointLinks[linkCounter - 1].className = 'waypoint_icon last';

      container.style.visibility = 'visible';
      container.style.display = 'block';
      overlay.className = 'no_loading';

      firstLink.focus();
    }

    function hidePrompt(e, lf) {
      var evt = e || window.event;
      if (evt.preventDefault && evt.stopPropagation) {
        evt.preventDefault();
        evt.stopPropagation();
      } else {
        evt.returnValue = false;
      }

      OOo.$('oo_container').style.display = 'none';

      if (lf) {
        lf.focus();
      }
    }

    function getPrompt() {
      var prompt = OOo.$('oo_invitation_prompt');
      if (prompt) {
        var container = OOo.$('oo_container');
        this.showPrompt(container);
        return;
      }
      var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP"),
          thisObj = this,
          styles = document.createElement('link'),
          head;

      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState !== 4) {
          return;
        }
        thisObj.showPrompt(xmlhttp.responseText);
      };
      xmlhttp.open("GET", this.options.pathToAssets + this.options.promptMarkup, true);
      xmlhttp.send(null);
    }

    function showPrompt(markup, launchFunc) {
      var d = document,
          container = typeof markup === 'string' ? d.createElement('div') : markup,
          overlay = d.createElement('div'),
          image,
          imageText,
          footImage,
          neverShowEl,
          opt = this.options,
          promptLauncher,
          noThanks,
          closePrompt,
          logo,
          lastFocused = d.activeElement;

      overlay.id = 'oo_invitation_overlay';
      container.id = 'oo_container';
      container.style.visibility = 'hidden';
      if (typeof markup === 'string') {
        container.innerHTML = markup;
        d.body.appendChild(container);
      }
      container.appendChild(overlay);

      promptLauncher = OOo.$('oo_launch_prompt');
      noThanks = OOo.$('oo_no_thanks');
      closePrompt = OOo.$('oo_close_prompt');
      logo = OOo.$('oo_company_logo');

      if (opt.companyLogo && opt.companySlogan) {
        image = new Image();
        image.src = opt.companyLogo;
        image.alt = opt.companySlogan;
        logo.appendChild(image);

        OOo.$('oo_invitation_prompt').setAttribute('aria-label', opt.companySlogan);
      }

      footImage = new Image();
      footImage.src = opt.pathToAssets + 'oo_opinionlab_logo.png';
      footImage.alt = 'powered by OpinionLab';
      OOo.$('ol_brand_logo').children[0].appendChild(footImage);

      if (opt.callBacks) {
        if (typeof opt.callBacks.prompt === 'function') {
          opt.callBacks.prompt();
        }
        if (typeof opt.callBacks.yesClick === 'function') {
          OOo.addEventListener(promptLauncher, 'click', function () {
            opt.callBacks.yesClick();
          }, false);
        }
        if (typeof opt.callBacks.noClick === 'function') {
          OOo.addEventListener(noThanks, 'click', function () {
            opt.callBacks.noClick();
          }, false);
        }
        if (typeof opt.callBacks.closeClick === 'function') {
          OOo.addEventListener(closePrompt, 'click', function () {
            opt.callBacks.closeClick();
          }, false);
        }
      }

      OOo.addEventListener(promptLauncher, 'click', launchFunc.bind(this), false);
      OOo.addEventListener(noThanks, 'click', function (e) {
        var evt = e || window.event;
        OOo.hidePrompt(evt, lastFocused);
      }, false);
      OOo.addEventListener(closePrompt, 'click', function (e) {
        var evt = e || window.event;
        OOo.hidePrompt(evt, lastFocused);
      }, false);

      promptLauncher.onkeyup = function (e) {
        var evt = e || window.event;
        if (evt.keyCode !== 13) {
          return;
        }
        launchFunc.bind(this);
      }.bind(this);

      promptLauncher.onkeydown = function (e) {
        var evt = e || window.event;
        if (evt.keyCode === 9) {
          if (evt.shiftKey) {
            closePrompt.focus();
            return false;
          }
        }
      };

      noThanks.onkeyup = function (e) {
        var evt = e || window.event;
        if (evt.keyCode !== 13) {
          return;
        }
        OOo.hidePrompt(evt, lastFocused);
      };

      closePrompt.onkeyup = function (e) {
        var evt = e || window.event;
        if (evt.keyCode !== 13) {
          return;
        }
        OOo.hidePrompt(evt, lastFocused);
      };

      closePrompt.onkeydown = function (e) {
        var evt = e || window.event;
        if (evt.keyCode === 9) {
          if (!evt.shiftKey) {
            promptLauncher.focus();
            return false;
          }
        }
      };

      container.style.visibility = 'visible';
      container.style.display = 'block';
      overlay.className = 'no_loading';

      lastFocused.blur();
      promptLauncher.focus();
    }

    extend(OOo, {
      extend: extend,
      toQueryString: toQueryString,
      addEventListener: addEventListener,
      $: $,
      appendOOForm: appendOOForm,
      removeEventListener: removeEventListener,
      createMetrics: createMetrics,
      truncateMetric: truncateMetric,
      createLegacyVars: createLegacyVars,
      DYNAMIC_FRAME_NAME_IS_BUGGY: DYNAMIC_FRAME_NAME_IS_BUGGY,
      getFormParams: getFormParams,
      referrerRewrite: referrerRewrite,
      hidePrompt: hidePrompt,
      getPrompt: getPrompt,
      showPrompt: showPrompt,
      hideWaypoint: hideWaypoint,
      getWaypoint: getWaypoint,
      showWaypoint: showWaypoint
    });
  })();
  (function () {
    function serialize(obj) {
      if (!obj) {
        return null;
      }
      switch (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) {
        case 'number':
        case 'boolean':
        case 'function':
          return obj;
        case 'string':
          return '\'' + obj + '\'';
        case 'object':
          var str, i, len, key;
          if (obj.constructor === Array || typeof obj.callee !== 'undefined') {
            str = '[';
            len = obj.length;
            for (i = 0; i < len - 1; i += 1) {
              str += serialize(obj[i]) + ',';
            }
            str += serialize(obj[i]) + ']';
          } else {
            str = '{';
            for (key in obj) {
              if (obj.hasOwnProperty(key)) {
                str += key + ':' + serialize(obj[key]) + ',';
              }
            }
            str = str.replace(/\,$/, '') + '}';
          }
          return str;
        default:
          return null;
      }
    }

    OOo.extend(OOo, { serialize: serialize });
  })();
  (function () {
    function checkTunnel(path, tunnel, cookieName) {
      var previousStep;
      if (path.search(tunnel[0]) !== -1) {
        OOo.createCookie(cookieName, 0);
        return false;
      } else if (OOo.readCookie(cookieName)) {
        // see if the tunnel was started
        previousStep = parseInt(OOo.readCookie(cookieName), 10);
        if (path.search(tunnel[previousStep + 1]) !== -1 && previousStep + 1 !== tunnel.length - 1) {
          OOo.createCookie(cookieName, previousStep + 1);
          return false;
        } else if (path.search(tunnel[previousStep]) !== -1) {
          return false;
        } else if (previousStep + 1 === tunnel.length - 1 && path.search(tunnel.pop()) !== -1) {
          OOo.eraseCookie(cookieName);
          return true;
        } else {
          OOo.eraseCookie(cookieName);
          return false;
        }
      } else {
        return false;
      } // we are not even in the tunnel
    }

    OOo.extend(OOo, {
      checkTunnel: checkTunnel
    });
  })();
  (function () {
    function hex(num) {
      var str = "",
          j;
      for (j = 7; j >= 0; j -= 1) {
        str += '0123456789abcdef'.charAt(num >> j * 4 & 0x0F);
      }
      return str;
    }

    function str2blks_SHA1(str) {
      var nblk = (str.length + 8 >> 6) + 1,
          blks = new Array(nblk * 16),
          i;
      for (i = 0; i < nblk * 16; i += 1) {
        blks[i] = 0;
      }
      for (i = 0; i < str.length; i += 1) {
        blks[i >> 2] |= str.charCodeAt(i) << 24 - i % 4 * 8;
      }
      blks[i >> 2] |= 0x80 << 24 - i % 4 * 8;
      blks[nblk * 16 - 1] = str.length * 8;
      return blks;
    }

    function safe_add(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF),
          msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xFFFF;
    }

    function rol(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }

    function ft(t, b, c, d) {
      if (t < 20) {
        return b & c | ~b & d;
      }
      if (t < 40) {
        return b ^ c ^ d;
      }
      if (t < 60) {
        return b & c | b & d | c & d;
      }
      return b ^ c ^ d;
    }

    function kt(t) {
      return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
    }

    function calcSHA1(str) {
      var x = str2blks_SHA1(str),
          w = new Array(80),
          a = 1732584193,
          b = -271733879,
          c = -1732584194,
          d = 271733878,
          e = -1009589776,
          olda,
          oldb,
          oldc,
          oldd,
          olde,
          t,
          i,
          j;

      for (i = 0; i < x.length; i += 16) {
        olda = a;
        oldb = b;
        oldc = c;
        oldd = d;
        olde = e;

        for (j = 0; j < 80; j += 1) {
          if (j < 16) {
            w[j] = x[i + j];
          } else {
            w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
          }
          t = safe_add(safe_add(rol(a, 5), ft(j, b, c, d)), safe_add(safe_add(e, w[j]), kt(j)));
          e = d;
          d = c;
          c = rol(b, 30);
          b = a;
          a = t;
        }

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
        e = safe_add(e, olde);
      }
      return hex(a) + hex(b) + hex(c) + hex(d) + hex(e);
    }

    OOo.extend(OOo, { sha1: calcSHA1 });
  })();
  (function () {
    function checkAbandonment(abandonmentObject, loc) {
      if (!loc) {
        loc = location;
      }
      var cookieName = abandonmentObject.cookieName || 'oo_abandon',
          cookie = OOo.readCookie(cookieName),
          startPage = abandonmentObject.startPage,
          endPage = abandonmentObject.endPage,
          middle = abandonmentObject.middle;

      if (!cookie) {
        if (loc.pathname.indexOf(startPage) !== -1) {
          OOo.createCookie(cookieName);
        }
        return false;
      } else if (loc.pathname.indexOf(endPage) !== -1) {
        OOo.eraseCookie(cookieName);
        return false;
      } else if (loc.pathname.search(middle) !== -1) {
        return false;
      } else {
        OOo.eraseCookie(cookieName);
        return true;
      }
    }

    OOo.extend(OOo, {
      checkAbandonment: checkAbandonment
    });
  })();
  (function () {
    function checkThirdPartyCookies(cArray) {
      var i, cookieValue;
      for (i = cArray.length - 1; i >= 0; i -= 1) {
        if (cArray[i].read) {
          cookieValue = OOo.readCookie(cArray[i].name);
          if (!!cookieValue && cookieValue === cArray[i].value) {
            return true;
          } else if (typeof cArray[i].value === 'undefined' && !!OOo.readCookie(cArray[i].name)) {
            return true;
          }
        }
      }
      return false;
    }

    function setThirdPartyCookies(cArray) {
      var i;
      for (i = cArray.length - 1; i >= 0; i -= 1) {
        if (cArray[i].set) {
          OOo.createCookie(cArray[i].name, cArray[i].value, cArray[i].expiration);
        }
      }
    }

    OOo.extend(OOo, {
      checkThirdPartyCookies: checkThirdPartyCookies,
      setThirdPartyCookies: setThirdPartyCookies
    });
  })();

  OOo.extend(Function.prototype, function () {
    if (typeof Function.prototype.bind !== "undefined") {
      return;
    }
    var slice = Array.prototype.slice;

    function update(array, args) {
      var arrayLength = array.length,
          length = args.length;
      while (length) {
        length -= 1;
        array[arrayLength + length] = args[length];
      }
      return array;
    }

    function merge(array, args) {
      array = slice.call(array, 0);
      return update(array, args);
    }

    function bind(context) {
      if (arguments.length < 2 && typeof context === "undefined") {
        return this;
      }
      var self = this,
          args = slice.call(arguments, 1);
      return function () {
        var a = merge(args, arguments);
        return self.apply(context, a);
      };
    }

    return {
      bind: bind
    };
  }());

  (function () {
    function getCookieDomain(loc) {
      if (!loc) {
        loc = location;
      }

      var domain;
      if (loc.host.search(/\.[a-z]+/) !== -1) {
        domain = loc.host.split('.').reverse();
        if (domain.length > 3) {
          return loc.host;
        }
        domain = '.' + domain[1] + '.' + domain[0];
      } else {
        domain = loc.host;
      }
      return domain;
    }

    function createCookie(name, value, seconds) {
      var date = '',
          expires = '';
      if (seconds) {
        date = new Date();
        date.setTime(date.getTime() + seconds * 1000);
        expires = "; expires=" + date.toGMTString();
      }
      if (location.host !== getCookieDomain()) {
        document.cookie = name + "=" + value + expires + "; path=/; domain=" + getCookieDomain() + ";";
      } else {
        document.cookie = name + "=" + value + expires + "; path=/;";
      }
    }

    function readCookie(name) {
      var nameEQ = name + "=",
          ca = document.cookie.split(';'),
          c,
          i;
      for (i = 0; i < ca.length; i += 1) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    }

    function eraseCookie(name) {
      createCookie(name, "", -1);
    }

    OOo.extend(OOo, {
      getCookieDomain: getCookieDomain,
      createCookie: createCookie,
      readCookie: readCookie,
      eraseCookie: eraseCookie
    });
  })();
  OOo.Ocode = function (options) {
    var browser = OOo.Browser,
        opt,
        rewrite;
    if (options.disableMobile && browser.isMobile) {
      return;
    }
    if (options.disableNoniOS && browser.isMobileNonIOS) {
      return;
    }
    OOo.instanceCount += 1;

    this.options = {
      tealeafCookieName: 'TLTSID'
    };

    OOo.extend(this.options, options);

    opt = this.options;
    opt.metrics = OOo.createMetrics();

    this.frameName = opt.onPageCard ? 'OnlineOpinion' + OOo.instanceCount : 'OnlineOpinion';
    if (opt.cookie && OOo.Ocode.matchUrl(opt.cookie, location)) {
      return;
    }

    if (opt.thirdPartyCookies && OOo.checkThirdPartyCookies(opt.thirdPartyCookies)) {
      return;
    }

    if (opt.abandonment && !OOo.checkAbandonment(opt.abandonment)) {
      return;
    }

    if (opt.tunnel && !OOo.checkTunnel(location.pathname, opt.tunnel.path, opt.tunnel.cookieName)) {
      return;
    }

    if (opt.events && opt.events.onSingleClick) {
      this.singProbability = Math.random() < 1 - opt.events.onSingleClick / 100;
    }

    opt.tealeafId = OOo.readCookie(opt.tealeafCookieName) || OOo.readCookie(opt.sessionCookieName);

    if (opt.events) {
      this.setupEvents();
      if (opt.events.disableLinks || opt.events.disableFormElements) {
        this.setupDisableElements();
      }
    }

    if (opt.floating) {
      this.floating();
    } else if (opt.bar) {
      this.bar();
    } else if (opt.tab) {
      this.tab();
    }
  };

  OOo.Ocode.prototype = {
    show: function show(e, trigger) {

      var evt = e || window.event;

      if (trigger !== 'exit' && trigger !== 'entry') {
        if (evt.preventDefault && evt.stopPropagation) {
          evt.preventDefault();
          evt.stopPropagation();
        } else {
          evt.returnValue = false;
        }
      }

      if (this.onPageCardVisible) {
        return;
      }
      var opt = this.options,
          uiElement;
      if (opt.events && opt.events.prompt) {
        if (opt.cookie) OOo.eraseCookie(opt.cookie.name || 'oo_r');
        OOo.hidePrompt();
      }
      if (this.interruptShow) {
        return;
      }
      if (!this.floatingLogo && opt.cookie && OOo.Ocode.matchUrl(opt.cookie)) {
        return;
      }
      if (!opt.floating && opt.events && this.singProbability) {
        return;
      }
      if (opt.events && opt.events.onSingleClick) {
        this.singProbability = true;
      }

      if (opt.cookie) {
        OOo.Ocode.tagUrl(opt.cookie);
      }

      if (opt.thirdPartyCookies) {
        if (OOo.checkThirdPartyCookies(opt.thirdPartyCookies)) {
          return;
        }
        OOo.setThirdPartyCookies(opt.thirdPartyCookies);
      }

      if (this.floatingLogo) {
        this.floatingLogo.children[0].blur();
      }

      if (this.floatingLogo && opt.disappearOnClick) {
        this.floatingLogo.style.display = 'none';
      }

      if (opt.clickTalePID && typeof window.ClickTale === 'function') {
        opt.clickTaleUID = window.ClickTaleGetUID();
        opt.clickTaleSID = window.ClickTaleGetSID();
      }
      if (opt.onPageCard && !OOo.Browser.isMobile) {
        this.setupOnPageCC();
      } else {
        this.launchOOPopup();
      }

      uiElement = opt.floating || opt.tab || opt.bar;
      if (uiElement && typeof uiElement.onClickCallback === 'function') {
        uiElement.onClickCallback();
      }
    }
  };

  OOo.extend(OOo.Ocode, {
    tagUrl: function tagUrl(cookie, loc) {
      if (!loc) {
        loc = location;
      }
      var cookieName = cookie.name || 'oo_r',
          url = cookie.type === 'page' ? loc.href : loc.hostname,
          prevValue = OOo.readCookie(cookieName) || '';

      if (OOo.Ocode.matchUrl(cookie, loc)) {
        return;
      }

      OOo.createCookie(cookieName, prevValue + OOo.sha1(url), cookie.expiration);
    },
    matchUrl: function matchUrl(cookie, loc) {
      if (!loc) {
        loc = location;
      }
      var cookieVal = OOo.readCookie(cookie.name || 'oo_r'),
          url;
      if (!cookieVal) {
        return false;
      }
      url = cookie.type === 'page' ? loc.href : loc.hostname;
      return cookieVal.search(OOo.sha1(url)) !== -1;
    }
  });

  (function () {
    var windowCount = 0;

    function launchOOPopup() {
      var opt = this.options,
          popupDimensions = opt.newWindowSize || [545, 325],
          popupCoordinates = [parseInt((opt.metrics.height - popupDimensions[1]) / 2, 10), parseInt((opt.metrics.width - popupDimensions[0]) / 2, 10)],
          form,
          win,
          popupOptions = 'resizable=yes,location=no,status=no,scrollbars=1,width=' + popupDimensions[0] + ',height=' + popupDimensions[1] + ',top=' + popupCoordinates[0] + ',left=' + popupCoordinates[1],
          windowName = 'OnlineOpinion';

      if (opt.newWindow) {
        windowName = windowName + windowCount++;
      }

      opt.metrics.time2 = new Date().getTime();
      opt.metrics.type = 'Popup';

      form = OOo.appendOOForm(opt, windowName);

      var winUrl = 'https://secure.opinionlab.com/ccc01/comment_card_d.asp?' + form.children[0].value;

      if (opt.commentCardUrl) {
        winUrl = opt.commentCardUrl;
      }

      if (OOo.Browser.isChromeIOS) {
        windowName = '_blank';
      }

      if (OOo.Browser.isMobile && OOo.Browser.ua.search('Android') !== -1) {
        form.submit();
      } else {
        win = window.open(winUrl, windowName, popupOptions);
        if (win && !OOo.Browser.isChromeIOS) {
          form.submit();
        }
      }
    }

    OOo.extend(OOo.Ocode.prototype, {
      launchOOPopup: launchOOPopup
    });
  })();
  (function () {
    function setupEvents() {
      var events = this.options.events,
          addEvent = [false, false],
          eventTypes = ['onExit', 'onEntry'],
          exitEvent = 'beforeunload',
          eventType,
          interval,
          j,
          eventObj,
          i;

      if (OOo.Browser.Opera) {
        exitEvent = 'unload';
      }

      if (OOo.Browser.iOs) {
        exitEvent = 'pagehide';
      }

      if (events.prompt) {
        OOo.extend(this.options, {
          promptMarkup: events.prompt.promptMarkup || 'oo_event_prompt.html',
          neverShowAgainButton: false,
          pathToAssets: events.prompt.pathToAssets
        });
      }

      for (j = eventTypes.length - 1; j >= 0; j -= 1) {
        eventType = eventTypes[j];

        if (events[eventType] instanceof Array) {
          eventObj = events[eventType];
          i = eventObj.length;
          while (i && !addEvent[j]) {
            i -= 1;
            if (window.location.href.search(eventObj[i].url) !== -1 && Math.random() >= 1 - eventObj[i].p / 100) {
              addEvent[j] = true;
            }
          }
        } else if (events[eventType] && Math.random() >= 1 - events[eventType] / 100) {
          addEvent[j] = true;
        }
      }

      if (addEvent[0]) {
        OOo.addEventListener(window, exitEvent, function (e) {
          var evt = e || window.event;
          this.show(evt, 'exit');
        }.bind(this), false);
      }
      if (addEvent[1]) {
        if (events.delayEntry) {
          window.setTimeout(function (e) {
            var evt = e || window.event;
            if (events.prompt) {
              this.getPrompt();
            } else {
              this.show(evt, 'entry');
            }
          }.bind(this), events.delayEntry * 1000);
        } else {
          if (events.prompt) {
            this.getPrompt();
          } else {
            (function (e) {
              var evt = e || window.event;
              this.show(evt, 'entry');
            }).bind(this)();
          }
        }
      }
    }

    function disableElements(e) {
      var evt = e || window.event,
          tar = e.target || e.srcElement,
          events = this.options.events,
          parent = tar.parentNode,
          MAXDEPTH = 5,
          depth = 0;
      while (parent && (tar.nodeName !== 'A' || tar.nodeName !== 'INPUT') && depth !== MAXDEPTH) {
        if (parent.nodeName === 'A') {
          tar = parent;
        }
        parent = parent.parentNode;
        depth += 1;
      }
      if (events.disableFormElements && (tar.tagName === "INPUT" || tar.tagName === "BUTTON") && (tar.type === 'submit' || tar.type === 'image' || tar.type === 'reset' || tar.type === 'button')) {
        this.interruptShow = true;
      }
      if (events.disableLinks && (tar.nodeName === 'A' || tar.nodeName === 'AREA') && tar.href.substr(0, 4) === 'http' && tar.href.search(events.disableLinks) !== -1) {
        this.interruptShow = true;
      }
    }

    function disableForms(e) {
      this.interruptShow = true;
    }

    function setupDisableElements() {
      OOo.addEventListener(document.body, 'mousedown', disableElements.bind(this));
      if (!this.options.events.disableFormElements) {
        return;
      }
      var forms = document.getElementsByTagName('form'),
          i;
      for (i = forms.length - 1; i >= 0; i -= 1) {
        OOo.addEventListener(forms[i], 'submit', disableForms.bind(this));
      }
    }

    OOo.extend(OOo.Ocode.prototype, {
      setupEvents: setupEvents,
      setupDisableElements: setupDisableElements,
      getPrompt: function getPrompt() {
        OOo.getPrompt.call(this);
      },
      showPrompt: function showPrompt(markup) {
        if (this.options.cookie) {
          OOo.Ocode.tagUrl(this.options.cookie);
        }
        OOo.showPrompt.call(this, markup, this.show);
      }
    });
  })();

  OOo.extend(OOo.Ocode.prototype, {
    floating: function floating() {
      var d = document,
          wrapper = this.floatingLogo = document.createElement('div'),
          up = d.createElement('div'),
          floatingBg = d.createElement('div'),
          hover = d.createElement('div'),
          hoverText = d.createElement('span'),
          opt = this.options.floating,
          //options for rendering floating logo
      contentEl = OOo.$(opt.contentId),
          logoOffset = '10px',
          wrapperId = opt.id,
          screenReader = d.createElement('span'),
          evt,
          initialHeight,
          amount,
          spacer,
          scrollEl,
          adjustLogo,
          wrapperHeight,
          safariLogo,
          touches = 0;

      function getRightOfContent(el) {
        return el.offsetLeft + el.offsetWidth;
      }

      function adjustSpacer(e) {
        spacer.style.left = getRightOfContent(contentEl) + 'px';
      }

      screenReader.innerHTML = "Screen reader users: Please switch to forms mode for this link.";

      screenReader.className = "screen_reader";
      if (wrapperId) {
        wrapper.id = wrapperId;
      }
      wrapper.className = 'oo_feedback_float';
      floatingBg.className = 'oo_transparent';
      up.className = 'olUp';
      hover.className = 'olOver';

      up.tabIndex = 0;
      up.onkeyup = function (e) {
        evt = e || window.event;
        if (evt.keyCode !== 13) {
          return;
        }
        this.show(evt);
      }.bind(this);

      up.innerHTML = opt.caption || 'Feedback';
      wrapper.appendChild(screenReader);
      wrapper.appendChild(up);
      hoverText.innerHTML = opt.hoverCaption || 'Click here to<br>rate this page';
      hover.appendChild(hoverText);
      wrapper.appendChild(hover);

      wrapper.appendChild(floatingBg);

      function ieLogo(e) {
        var scrollTop = d.documentElement.scrollTop || d.body.scrollTop,
            clientHeight = d.documentElement.clientHeight || document.body.clientHeight;

        wrapper.style.top = scrollTop + clientHeight - (wrapperHeight || 0) - 10 + 'px';
      }

      if (OOo.Browser.MobileSafari) {
        if (OOo.Browser.ua.search('OS 4') !== -1) {
          initialHeight = window.innerHeight;
          wrapper.style.bottom = null;
          wrapper.style.top = window.pageYOffset + window.innerHeight - 60 + 'px';
          safariLogo = function safariLogo(e) {
            amount = window.pageYOffset - (initialHeight - window.innerHeight);
            wrapper.style.webkitTransform = 'translateY(' + amount + 'px)';
          };
          OOo.addEventListener(window, 'scroll', safariLogo, false);
          setTimeout(safariLogo, 100);
        }
      }

      /*attach any special floating behavior to floating icon*/
      if (opt.position && opt.position.search(/Content/) && contentEl) {
        spacer = this.spacer = d.createElement('div');
        scrollEl = OOo.Browser.WebKit ? d.body : d.documentElement;

        spacer.id = 'oo_feedback_fl_spacer';
        spacer.style.left = getRightOfContent(contentEl) + 'px';
        d.body.appendChild(spacer);

        switch (opt.position) {
          case 'rightOfContent':
            adjustLogo = function adjustLogo(e) {
              wrapper.style.left = getRightOfContent(contentEl) - scrollEl.scrollLeft + 'px';
            };
            break;
          case 'fixedPreserveContent':
            adjustLogo = function adjustLogo(e) {
              var winWidth = OOo.Browser.IE ? d.body.clientWidth : window.innerWidth,
                  scroll = scrollEl.scrollLeft;
              if (winWidth <= getRightOfContent(contentEl) + wrapper.offsetWidth + parseInt(logoOffset, 10)) {
                wrapper.style.left = getRightOfContent(contentEl) - scroll + 'px';
              } else {
                wrapper.style.left = '';
                wrapper.style.right = logoOffset;
              }
            };
            break;
          case 'fixedContentMax':
            adjustLogo = function adjustLogo(e) {
              var winWidth = OOo.Browser.IE ? d.body.clientWidth : window.innerWidth;
              if (winWidth <= getRightOfContent(contentEl) + wrapper.offsetWidth + parseInt(logoOffset, 10)) {
                wrapper.style.left = '';
                wrapper.style.right = logoOffset;
              } else {
                wrapper.style.left = getRightOfContent(contentEl) - scrollEl.scrollLeft + 'px';
                wrapper.style.right = '';
              }
            };
            break;
        }
        window.setTimeout(adjustLogo, 0);

        OOo.addEventListener(window, 'scroll', adjustLogo, false);
        OOo.addEventListener(window, 'resize', adjustLogo, false);

        OOo.addEventListener(window, 'resize', adjustSpacer, false);
      } else {
        wrapper.style.right = logoOffset;
      }

      var handleTouchStart = function handleTouchStart(e) {
        var evt = e || window.event;
        if (evt.preventDefault && evt.stopPropagation) {
          evt.preventDefault();
          evt.stopPropagation();
        } else {
          evt.returnValue = false;
        }

        touches++;
      };

      var handleTouchEnd = function (e) {
        var evt = e || window.event;
        if (touches >= 2) {
          this.show(evt);
          touches = 0;
        }
      }.bind(this);

      if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
        OOo.addEventListener(wrapper, 'touchstart', handleTouchStart, false);
        OOo.addEventListener(wrapper, 'touchend', handleTouchEnd, false);
      } else {
        OOo.addEventListener(wrapper, 'click', function (e) {
          var evt = e || window.event;
          this.show(evt);
        }.bind(this), false);
      }

      d.body.appendChild(wrapper);
    },
    removeFloatingLogo: function removeFloatingLogo() {
      document.body.removeChild(this.floatingLogo);
      if (this.spacer) {
        document.body.removeChild(this.spacer);
      }
    }
  });

  OOo.extend(OOo.Ocode.prototype, {
    bar: function bar() {
      var d = document,
          wrapper = this.floatingLogo = d.createElement('a'),
          adjustBar,
          initialHeight,
          amount,
          currentScroll = d.documentElement.scrollTop || d.body.scrollTop,
          screenReaderEl = d.createElement('span'),
          opt = this.options,
          touches = 0,
          ieSpan = d.createElement('span');

      function findPos(el) {
        var curleft = 0,
            curtop = 0;

        if (el.offsetParent) {
          do {
            curleft += el.offsetLeft;
            curtop += el.offsetTop;
          } while (el == el.offsetParent);

          return [curleft, curtop];
        }
      }

      function checkTabThrough(e) {
        var activeElement = document.activeElement,
            offset;
        if (!activeElement) return;
        offset = findPos(activeElement);
        if (!offset) return;
        if (offset[1] + activeElement.clientHeight > (window.innerHeight || document.body.clientHeight) + (window.pageYOffset || document.body.scrollTop) - wrapper.clientHeight) {
          if (navigator.appVersion.indexOf("MSIE 7.") !== -1) {
            window.scrollBy(0, 0);
          } else {
            window.scrollBy(0, activeElement.clientHeight + 20);
          }
        }
      }

      screenReaderEl.innerHTML = 'Launches comment card in new window';
      screenReaderEl.className = 'screen_reader';
      ieSpan.className = 'icon';
      this.reflowBar = OOo.K;
      wrapper.id = 'oo_bar';
      wrapper.href = '#';
      wrapper.innerHTML = opt.bar.caption || 'Feedback';
      wrapper.appendChild(screenReaderEl);
      wrapper.appendChild(ieSpan);

      if (typeof opt.tabIndex === 'number') {
        wrapper.tabIndex = opt.tabIndex;
      } else {
        wrapper.tabIndex = 0;
      }

      wrapper.onkeyup = function (e) {
        var evt = e || window.event;
        if (evt.keyCode !== 13) {
          return;
        }
        this.show(evt);
      }.bind(this);

      var handleTouchStart = function handleTouchStart(e) {
        var evt = e || window.event;
        if (evt.preventDefault && evt.stopPropagation) {
          evt.preventDefault();
          evt.stopPropagation();
        } else {
          evt.returnValue = false;
        }

        touches++;
      };

      var handleTouchEnd = function (e) {
        var evt = e || window.event;
        if (touches >= 2) {
          this.show(evt);
          touches = 0;
        }
      }.bind(this);

      if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
        OOo.addEventListener(wrapper, 'touchstart', handleTouchStart, false);
        OOo.addEventListener(wrapper, 'touchend', handleTouchEnd, false);
      } else {
        OOo.addEventListener(wrapper, 'click', function (e) {
          var evt = e || window.event;
          this.show(evt);
        }.bind(this), false);
      }

      document.body.className += document.body.className < 1 ? 'oo_bar' : ' oo_bar';
      document.body.appendChild(wrapper);

      if (OOo.Browser.MobileSafari && OOo.Browser.ua.search('OS 4') !== -1) {
        initialHeight = window.innerHeight;
        wrapper.style.bottom = null;
        wrapper.style.top = window.pageYOffset + window.innerHeight - 37 + 'px';
        adjustBar = function adjustBar(e) {
          amount = window.pageYOffset - (initialHeight - window.innerHeight);
          wrapper.style.webkitTransform = 'translateY(' + amount + 'px)';
        };
        OOo.addEventListener(window, 'scroll', adjustBar, false);

        setTimeout(adjustBar, 100);
      }

      OOo.addEventListener(document.body, 'keyup', checkTabThrough, false);
    }
  });

  OOo.extend(OOo.Ocode.prototype, {
    tab: function tab() {
      /*
       Legacy Tab markup
       <div class="oo_tab_right" id="oo_tab"><a href="#"><span></span></a></div>
        New WCAG tab markup
       <a id="oo_tab_1" class="oo_tab_right_1 small" tabindex="1">
        Feedback<span class="screen_reader">Launch comment card</span></a>
       */
      var d = document,
          wrapper = this.floatingLogo = d.createElement('div'),
          spanScreenReader = d.createElement('div'),
          div = d.createElement('div'),
          span = d.createElement('span'),
          opt = this.options.tab,
          a = d.createElement('a'),
          verbiage = 'Feedback',
          tabType = opt.tabType,
          position = 'right',
          touches = 0;

      function ios4Logo(e) {
        wrapper.style.top = pageYOffset + (innerHeight / 2 - wrapper.clientHeight / 2) + 'px';
        wrapper.style.right = document.documentElement.clientWidth - window.innerWidth - window.pageXOffset - 15 + 'px';
      }

      switch (tabType) {
        case 1:

          var ieSpan = d.createElement('span');
          wrapper = this.floatingLogo = d.createElement('a');
          spanScreenReader = d.createElement('span');

          wrapper.href = '#';

          wrapper.id = 'oo_tab_' + tabType;

          if (opt.position) {
            position = opt.position;
          }

          wrapper.className = tabClass = 'oo_tab_' + position + '_' + tabType;
          spanScreenReader.className = 'screen_reader';
          ieSpan.className = 'icon';

          if (typeof opt.tabIndex === 'number') {
            wrapper.tabIndex = opt.tabIndex;
          } else {
            wrapper.tabIndex = 0;
          }

          if (opt.verbiage) {
            verbiage = opt.verbiage;
          }

          wrapper.innerHTML = verbiage;
          spanScreenReader.innerHTML = 'Launches comment card in new window';

          wrapper.appendChild(spanScreenReader);
          wrapper.appendChild(ieSpan);

          setTimeout(function () {
            wrapper.className += ' small';
          }, 2500);

          break;
        default:

          wrapper.id = 'oo_tab';
          wrapper.className = 'oo_tab_' + (opt.position || position);

          if (opt.wcagBasePath) {
            wrapper.className += ' wcag';
          }

          if (typeof opt.tabIndex === 'number') {
            wrapper.tabIndex = opt.tabIndex;
          } else if (typeof opt.tabIndex === 'undefined') {
            wrapper.tabIndex = 0;
          }

          div.appendChild(a);
          wrapper.appendChild(div);
          div.appendChild(span);
          wrapper.appendChild(div);

          if (spanScreenReader) {
            spanScreenReader.className = 'screen_reader';
            spanScreenReader.innerHTML = 'Activate to launch comment card';
            wrapper.appendChild(spanScreenReader);
          }

          if (OOo.Browser.MobileSafari && OOo.Browser.ua.search('OS 4') !== -1) {
            wrapper.style.position = 'absolute';
            OOo.addEventListener(window, 'scroll', ios4Logo, false);
            setTimeout(ios4Logo, 100);
          }
      }

      wrapper.onkeyup = function (e) {
        var evt = e || window.event;
        if (evt.keyCode !== 13) {
          return;
        }
        this.show(evt);
      }.bind(this);

      var handleTouchStart = function handleTouchStart(e) {
        var evt = e || window.event;
        if (evt.preventDefault && evt.stopPropagation) {
          evt.preventDefault();
          evt.stopPropagation();
        } else {
          evt.returnValue = false;
        }

        touches++;
      };

      var handleTouchEnd = function (e) {
        var evt = e || window.event;
        if (touches >= 2) {
          this.show(evt);
          touches = 0;
        }
      }.bind(this);

      if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
        OOo.addEventListener(wrapper, 'touchstart', handleTouchStart, false);
        OOo.addEventListener(wrapper, 'touchend', handleTouchEnd, false);
      } else {
        OOo.addEventListener(wrapper, 'click', function (e) {
          var evt = e || window.event;
          this.show(evt);
        }.bind(this), false);
      }

      d.body.appendChild(wrapper);
    }
  });

  OOo.extend(OOo.Ocode.prototype, {
    setupOnPageCC: function setupOnPageCC() {
      var d = document,
          overlay = OOo.Cache.overlay || d.createElement('div'),
          wrapper = this.wrapper = d.createElement('div'),
          close = d.createElement('a'),
          iwrapper = d.createElement('div'),
          iclose = d.createElement('span'),
          frameName = this.frameName,
          frame = d.createElement(OOo.DYNAMIC_FRAME_NAME_IS_BUGGY ? '<iframe name="' + frameName + '">' : 'iframe'),
          tempContainer = d.createDocumentFragment(),
          thisOpt = this.options,
          opt = thisOpt.onPageCard,
          ONPAGE_REQ = 'https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp',
          form,
          interval,
          boundFunction,
          repeatBreaker = false,
          self = this,
          bodyShadow,
          topShadow,
          bottomShadow,
          shadows,
          postMessageHandler,
          width,
          offsetTop,
          description = d.createElement('span');

      function destroyOnPageCC(e) {
        if (e && e.preventDefault) {
          e.preventDefault();
        }
        document.body.focus();
        frame.tabIndex = -1;
        frame.title = "empty";
        frame['aria-hidden'] = 'true';
        overlay.style.display = 'none';
        overlay.className = '';
        d.body.removeChild(wrapper);
        if (window.postMessage) {
          OOo.removeEventListener(window, 'message', postMessageHandler);
        } else {
          window.clearInterval(interval);
        }
        repeatBreaker = false;
        self.onPageCardVisible = false;
        return false;
      }

      postMessageHandler = OOo.Ocode.postMessageHandler(function (message) {
        var height = parseInt(message, 10),
            innerHeight,
            frameHeight;
        if (height > 0) {
          if (repeatBreaker) {
            return;
          }
          repeatBreaker = true;
          innerHeight = window.innerHeight || d.documentElement.clientHeight || d.body.clientHeight;
          frameHeight = height;
          offsetTop = wrapper.offsetTop;

          if (frameHeight + offsetTop > innerHeight) {
            frameHeight = innerHeight - 40 - offsetTop;
          }

          frame.style.width = '555px';
          iwrapper.style.width = '555px';

          frame.style.height = frameHeight + 'px';
          wrapper.style.visibility = 'visible';
          if (iclose.clientHeight < 20) {
            iclose.style.height = wrapper.offsetHeight + 'px';
          }
          overlay.className = "no_loading";
          self.onPageCardVisible = true;
          form && d.body.removeChild(form);
        } else if (message === 'submitted') {
          destroyOnPageCC();
        }

        if (OOo.Browser.IE && d.compatMode === "BackCompat") {
          window.scrollTo(0, 0);
        }
      }, self.options.commentCardUrl);

      thisOpt.metrics.type = 'OnPage';
      OOo.Cache.overlay = overlay;

      overlay.id = 'oo_overlay';
      overlay.style.display = 'block'; //may have been hidden by previous invocation of an onPageCard
      overlay.className = '';
      iwrapper.className = 'iwrapper';
      wrapper.className = 'oo_cc_wrapper';
      wrapper.setAttribute('role', 'alert');
      wrapper.setAttribute('aria-describedby', 'comment_card_description');
      description.className = 'screen_reader';
      description.id = 'comment_card_description';
      description.innerHTML = 'Please leave your feedback in the comment card you just activated';
      wrapper.appendChild(description);
      close.className = 'oo_cc_close';
      close.innerHTML = '<span class="screen_reader">' + 'Close dialog</span><span aria-hidden="true">&#10006;</span>';

      close.title = thisOpt.closeTitle ? thisOpt.closeTitle : 'Close dialog';

      if (!d.addEventListener) {
        iwrapper.style.outline = '1px solid #cdcdcd';
      }

      wrapper.style.visibility = 'hidden'; //hide the frame till it's ready

      close.tabIndex = 0;
      close.onkeyup = function (e) {
        var event = e || window.event;
        if (event.keyCode !== 13) {
          return;
        }
        destroyOnPageCC();
      };

      if (OOo.Browser.IE) {
        frame.frameBorder = '0';
        if (!window.XMLHttpRequest || d.compatMode === "BackCompat") {
          width = Math.max(d.documentElement.clientWidth, d.body.offsetWidth);
          overlay.style.position = 'absolute';
          overlay.style.width = d.compatMode === "BackCompat" ? width - 21 + 'px' : width + 'px';
          overlay.style.height = Math.max(d.documentElement.clientHeight, d.body.offsetHeight) + 'px';
          wrapper.style.position = 'absolute';
          OOo.addEventListener(window, 'scroll', function () {
            overlay.style.top = d.body.scrollTop + document.body.clientHeight - overlay.clientHeight + 'px';
            wrapper.style.top = d.body.scrollTop + offsetTop + 25 + 'px';
          });
        }
      }

      OOo.addEventListener(close, 'click', destroyOnPageCC);
      if (opt.closeWithOverlay && !OOo.Browser.isMobile) {
        wrapper.appendChild(iclose);
        iclose.onclick = destroyOnPageCC;
        overlay.onclick = destroyOnPageCC;
      }

      frame.src = ' ';
      frame.name = frameName;
      frame.title = 'Comment Card';

      iwrapper.appendChild(close);
      iwrapper.appendChild(frame);
      wrapper.appendChild(iwrapper);
      tempContainer.appendChild(wrapper);
      tempContainer.appendChild(overlay);
      d.body.appendChild(tempContainer);

      if (window.postMessage) {
        OOo.addEventListener(window, "message", postMessageHandler);
      } else {
        interval = setInterval(postMessageHandler, 500);
      }

      thisOpt.metrics.time2 = new Date().getTime();

      form = OOo.appendOOForm(thisOpt, frameName);
      form.submit();
    }
  });

  OOo.extend(OOo.Ocode, {
    postMessageHandler: function postMessageHandler(callback, commentCardUrl, loc) {
      return function (e) {
        var messageURL = 'https://secure.opinionlab.com',
            message;
        if (!loc) {
          loc = location;
        }
        if (e && !(e.origin === messageURL || e.origin.indexOf(commentCardUrl) !== 0) || !e && loc.hash.search('OL=') === -1) {
          return false;
        }
        message = e ? e.data : loc.hash.split('=').pop();
        if (!e && location.hash) {
          location.hash = '';
        }
        callback(message);
        return message;
      };
    }
  });

  OOo.Invitation = function (options) {
    this.options = {
      tunnelCookie: 'oo_inv_tunnel',
      repromptTime: 604800,
      responseRate: 50,
      repromptCookie: 'oo_inv_reprompt',
      promptMarkup: 'oo_inv_prompt.html',
      promptStyles: 'oo_inverstitial_style.css',
      percentageCookie: 'oo_inv_percent',
      pagesHitCookie: 'oo_inv_hit',
      popupType: 'popunder',
      promptDelay: 0,
      neverShowAgainButton: false,
      loadPopupInBackground: false,
      truncatePrevCurrentMetrics: false,
      disablePrevCurrentMetrics: false,
      tealeafCookieName: 'TLTSID',
      monitorWindow: 'oo_inv_monitor.html',
      companySlogan: 'We value your opinion',
      beforePrompt: OOo.K,
      callBacks: {
        prompt: '',
        yesClick: '',
        noClick: '',
        closeClick: ''
      }
    };
    this.popupShown = false;
    OOo.extend(this.options, options);

    var opt = this.options,
        pagesHit = parseInt(OOo.readCookie(opt.pagesHitCookie), 10) || 0;

    OOo.Invitation.friendlyDomains = opt.friendlyDomains || null;

    var cookieOODynamicRewrite = {
      weight: Number(OOo.readCookie('oo_OODynamicRewrite_weight')),
      searchPattern: OOo.readCookie('oo_OODynamicRewrite_searchPattern'),
      replacePattern: OOo.readCookie('oo_OODynamicRewrite_replacePattern')
    };
    OOo.eraseCookie('oo_OODynamicRewrite_weight');
    OOo.eraseCookie('oo_OODynamicRewrite_searchPattern');
    OOo.eraseCookie('oo_OODynamicRewrite_replacePattern');

    if (!window.OOoDynamicRewrite || window.OOoDynamicRewrite.weight < cookieOODynamicRewrite.weight) {
      window.OOoDynamicRewrite = cookieOODynamicRewrite;
    }

    if (window.OOoDynamicRewrite && 'number' === typeof window.OOoDynamicRewrite.weight && !isNaN(window.OOoDynamicRewrite.weight)) {
      OOo.createCookie('oo_OODynamicRewrite_weight', window.OOoDynamicRewrite.weight);
      if (window.OOoDynamicRewrite.searchPattern) {
        OOo.createCookie('oo_OODynamicRewrite_searchPattern', window.OOoDynamicRewrite.searchPattern);
      }
      if (window.OOoDynamicRewrite.replacePattern) {
        OOo.createCookie('oo_OODynamicRewrite_replacePattern', window.OOoDynamicRewrite.replacePattern);
      }
    }

    if (location.search.search('evs') !== -1 || OOo.readCookie('oo_evs_friendly') === 'yes') {
      OOo.eraseCookie('oo_evs_friendly');
      opt.loadPopupInBackground = true;
      this.launchPopup();
      OOo.createCookie(opt.repromptCookie, 1, opt.repromptTime === -1 ? 0 : opt.repromptTime);
    }
    setTimeout(function () {
      if (!window.oo_inv_monitor) {
        return;
      }
      if (opt.area && location.href.search(opt.area) === -1) {
        this.options.popupType = 'popup';
        this.launchPopup();
      } else if (opt.goal && location.href.search(opt.goal) !== -1) {
        window.oo_inv_monitor.close();
      }
    }.bind(this), 1600);

    if (OOo.readCookie(opt.repromptCookie)) {
      return;
    }

    if (opt.thirdPartyCookies && OOo.checkThirdPartyCookies(opt.thirdPartyCookies)) {
      return;
    }

    if (!OOo.readCookie(opt.percentageCookie)) {
      OOo.createCookie(opt.percentageCookie, Math.random() > 1 - opt.responseRate / 100 ? "1" : "0");
    }
    if (typeof opt.promptTrigger !== 'undefined') {
      if (opt.promptTrigger instanceof RegExp) {
        if (!window.location.href.match(opt.promptTrigger)) {
          return;
        }
      } else if (opt.promptTrigger instanceof Array) {
        if (!OOo.checkTunnel(location.pathname, opt.promptTrigger, opt.tunnelCookie)) {
          return;
        }
      }
    }
    pagesHit += 1;
    OOo.createCookie(opt.pagesHitCookie, pagesHit);
    if (opt.pagesHit && pagesHit < opt.pagesHit) {
      return;
    }
    OOo.eraseCookie(opt.tunnelCookie);
    if (OOo.readCookie(opt.percentageCookie) === '1') {
      window.setTimeout(function () {
        OOo.createCookie(opt.repromptCookie, 1, opt.repromptTime);
        this.options.beforePrompt();
        this.getPrompt();
      }.bind(this), opt.promptDelay * 1000);
    }
  };

  OOo.Invitation.notifyFriendlyLocationChange = function (url) {
    if (window.oo_inv_monitor) {
      OOo.createCookie('oo_evs_friendly', 'yes');
    }
  };

  OOo.Invitation.prototype = {
    getPrompt: function getPrompt() {
      OOo.getPrompt.call(this);
    },

    showPrompt: function showPrompt(markup) {
      OOo.showPrompt.call(this, markup, this.launchPopup);
    },

    launchPopup: function launchPopup(e) {
      if (this.popupShown) {
        return;
      }
      this.popupShown = true;

      var evt = e || window.event;
      if (evt.preventDefault && evt.stopPropagation) {
        evt.preventDefault();
        evt.stopPropagation();
      } else {
        evt.returnValue = false;
      }

      var opt = this.options,
          referrer = window.location.href,
          url = opt.popupType === 'popup' ? 'https://secure.opinionlab.com/ccc01/comment_card.asp?' : opt.pathToAssets + opt.monitorWindow + '?time1=' + new Date().getTime() + '&',
          urlParams,
          customVars = [],
          popupDimensions = opt.asm ? [555, 500] : OOo.Browser.Chrome ? [400, 400] : [400, 350],
          popup,
          metrics = OOo.createMetrics(),
          prependCustomVar = OOo.readCookie(opt.tealeafCookieName),
          popupOptions;

      if (opt.clickTalePID && window.ClickTaleGetUID && window.ClickTaleGetSID) {
        prependCustomVar += '|' + [opt.clickTalePID, window.ClickTaleGetUID(), window.ClickTaleGetSID()].join('/');
      }

      popupDimensions = opt.newWindowSize || popupDimensions;
      popupOptions = 'scrollbars=1,resizable=1,location=no,status=no,width=' + popupDimensions[0] + ',height=' + popupDimensions[1];

      if (opt.referrerRewrite) {
        metrics.referer = OOo.referrerRewrite(opt.referrerRewrite);
      }

      if (opt.truncatePrevCurrentMetrics) {
        metrics.prev = OOo.truncateMetric(metrics.prev);
        metrics.currentURL = OOo.truncateMetric(metrics.currentURL);
      }

      if (opt.disablePrevCurrentMetrics) {
        metrics.prev = '';
        metrics.currentURL = '';
      }

      if (opt.thirdPartyCookies) {
        OOo.setThirdPartyCookies(opt.thirdPartyCookies);
      }

      urlParams = OOo.toQueryString(metrics) + '&type=Invitation';
      if (opt.customVariables) {
        urlParams += '&customVars=' + encodeURIComponent(OOo.serialize(opt.customVariables));
      }
      urlParams += '&custom_var=' + OOo.createLegacyVars(opt.legacyVariables, prependCustomVar);
      if (opt.asm) {
        urlParams += '&asm=2';
        popupOptions += ',scrollbars=1';
      }
      url += urlParams;
      if (url.match(/\?/g).length === 2) url = url.replace(/\?([^?]*)$/, '&$1');

      this.popup = popup = window.open(url, 'OnlineOpinionInvitation', popupOptions);

      if (!opt.loadPopupInBackground && OOo.$('oo_container')) {
        OOo.hidePrompt(evt);
      }

      if (opt.chromeSurveyPrompt) {
        setTimeout(function (e) {
          popup.postMessage(opt.chromeSurveyPrompt, "*");
        }, 500);
      }
    },

    killPrompt: function killPrompt(e) {
      var evt = e || window.event;
      if (this.options.callBacks && typeof this.options.callBacks.noClick === 'function') {
        this.options.callBacks.noClick();
      }
      OOo.createCookie(this.options.repromptCookie, 1, 157680000); // Don't show again for 5 years
      OOo.hidePrompt(evt);
    }
  };

  OOo.extend(OOo.Invitation, {
    navigateToFriendlyDomain: function navigateToFriendlyDomain(url) {
      location.href = url;
    }
  });

  OOo.Waypoint = function (options) {
    var browser = OOo.Browser;

    if (options.disableMobile && browser.isMobile) {
      return;
    }
    if (options.disableNoniOS && browser.isMobileNonIOS) {
      return;
    }

    this.options = {
      pathToAssets: '/static/img/onlineopinion/',
      waypointMarkup: 'oo_waypoint.html',
      companySlogan: 'Give us feedback',
      companyLogo: 'waypoint_logo.png',
      categories: {
        website: {
          tealeafCookieName: 'TLTSID',
          waypointIcon: 'waypoint_icon.png'
        },
        store: {
          referrerRewrite: {
            searchPattern: /:\/\//,
            replacePattern: '://store.'
          },
          tealeafCookieName: 'TLTSID',
          waypointIcon: 'waypoint_icon.png'
        },
        product: {
          referrerRewrite: {
            searchPattern: /:\/\//,
            replacePattern: '://product.'
          },
          tealeafCookieName: 'TLTSID',
          waypointIcon: 'waypoint_icon.png'
        },
        other: {
          referrerRewrite: {
            searchPattern: /:\/\//,
            replacePattern: '://other.'
          },
          tealeafCookieName: 'TLTSID',
          waypointIcon: 'waypoint_icon.png'
        }
      }
    };

    OOo.extend(this.options, options);

    var opt = this.options,
        categories = opt.categories;

    for (var key in categories) {
      if (categories.hasOwnProperty(key)) {
        if ((0, _typeof3.default)(opt.categories[key].oCode) === 'object') {
          var extension = {};
          extension[key] = new OOo.Ocode(categories[key].oCode);
          OOo.extend(OOo.Waypoint, extension);
        }
      }
    }

    OOo.extend(OOo.Waypoint, {
      getWaypoint: function () {
        this.getWaypoint();
      }.bind(this)
    });
  };

  OOo.Waypoint.prototype = {
    getWaypoint: function getWaypoint() {
      OOo.getWaypoint.call(this);
    },
    showWaypoint: function showWaypoint(markup) {
      OOo.showWaypoint.call(this, markup);
    },
    killWaypoint: function killWaypoint(e) {
      var evt = e || window.event;
      OOo.hideWaypoint(evt);
    }
  };

  OOo.extend(OOo, {
    appendWaypoint: function appendWaypoint(id) {
      var el = OOo.$(id);
      if (!!el) {
        OOo.addEventListener(el, 'click', function (e) {
          var evt = e || window.event;
          if (evt.preventDefault && evt.stopPropagation) {
            evt.preventDefault();
            evt.stopPropagation();
          } else {
            evt.returnValue = false;
          }
          OOo.Waypoint.getWaypoint();
        }, false);
        OOo.addEventListener(el, 'keydown', function (e) {
          var evt = e || window.event;
          if (evt.preventDefault && evt.stopPropagation) {
            evt.preventDefault();
            evt.stopPropagation();
          } else {
            evt.returnValue = false;
          }
          if (evt.keyCode !== 13) {
            return;
          }
          OOo.Waypoint.getWaypoint();
        }, false);
      }
    }
  });
  return OOo;
}; /*
    OnlineOpinion v5.9.0
    Released: 11/17/2014. Compiled 11/17/2014 01:01:01 PM -0600
    Branch: master 7cffc7b9a0b11594d56b71ca0cb042d9b0fc24f5
    Components: Full
    UMD: disabled
    The following code is Copyright 1998-2014 Opinionlab, Inc. All rights reserved.
    Unauthorized use is prohibited. This product and other products of OpinionLab, Inc.
    are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending.
    http://www.opinionlab.com
    */
/*eslint-disable */


var waypointEngine = void 0;
if (_exenv.canUseDOM) {
  waypointEngine = orchestrate(window);
} else {
  waypointEngine = {};
}

exports.default = waypointEngine;
/*eslint-enable */