"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _some = require("lodash/some");

var _some2 = _interopRequireDefault(_some);

var _assign = require("lodash/assign");

var _assign2 = _interopRequireDefault(_assign);

var _includes = require("lodash/includes");

var _includes2 = _interopRequireDefault(_includes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global document setTimeout */

var Iframe = function (_React$Component) {
  _inherits(Iframe, _React$Component);

  function Iframe() {
    _classCallCheck(this, Iframe);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Iframe).apply(this, arguments));
  }

  _createClass(Iframe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var iframe = this.refs.iframe;

      if (!iframe) {
        return;
      }

      var iframeId = "iframe-" + this.props.iframeId;
      iframe.childNodes[0].id = iframeId;

      var iframeDoc = iframe.childNodes[0].contentDocument || iframe.childNodes[0].contentWindow.document;
      this.setIFrameContent(iframeDoc);

      var images = iframeDoc.body.getElementsByTagName("img");

      this.loadImages(images).then(function () {
        // update height
        iframe.childNodes[0].style.height = iframeDoc.body.offsetHeight + "px";

        /**
         * Typekit doesn't support iframes without a src, so we have to inject
         * the font CSS from the parent page into the iframe. We do this by
         * grabbing the href of the Typekit stylesheet and linking to it in the
         * iframe's head.
         */

        if ((0, _includes2.default)(document.getElementsByTagName("html")[0].classList, "wf-active")) {
          var font = _this2.fetchTypekitHref();
          if (font) {
            iframeDoc.head.appendChild(font);
          }
        }
      });

      iframeDoc.addEventListener("toggle_modal", function (e) {
        iframe.childNodes[0].style.height = e.detail.height;
      });
    }
  }, {
    key: "setIFrameContent",
    value: function setIFrameContent(iframeDoc) {
      var htmlData = "\n      <!DOCTYPE html>\n      <!--[if lt IE 7]> <html class=\"no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7 main-html-body\">\n      <![endif]-->\n      <!--[if IE 7]> <html class=\"no-js lt-ie10 lt-ie9 lt-ie8 main-html-body\"> <![endif]-->\n      <!--[if IE 8]> <html class=\"no-js lt-ie10 lt-ie9 main-html-body\"> <![endif]-->\n      <!--[if IE 9]> <html class=\"no-js lt-ie10 main-html-body\"> <![endif]-->\n      <!--[if gt IE 9]><!--> <html class=\"no-js main-html-body\"> <!--<![endif]-->\n      </html>\n      " + this.props.markup + "\n    ";

      if (this.isNativeIframe) {
        var frame = document.implementation.createHTMLDocument("frame");
        frame.documentElement.innerHTML = this.props.markup;
        htmlData = frame.body.childNodes[0].innerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      }

      iframeDoc.open();
      iframeDoc.write(htmlData);
      iframeDoc.close();

      if (!this.isNativeIframe) {
        var headData = "\n        <base target=\"_parent\">\n        <meta charset=\"utf-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        " + (this.props.css || "") + "\n      ";

        iframeDoc.head.innerHTML = headData;

        (0, _assign2.default)(iframeDoc.body.style, {
          height: "auto",
          "background-color": "transparent"
        });

        iframeDoc.body.className += " align-center tempo-module";
      }
    }
  }, {
    key: "fetchTypekitHref",
    value: function fetchTypekitHref() {
      var ret = void 0;
      (0, _some2.default)(document.getElementsByTagName("link"), function (link) {
        if (link.href.indexOf("fonts.walmart.com") > -1) {
          ret = link.cloneNode(true);
          return true;
        }
      });

      return ret;
    }
  }, {
    key: "loadImages",
    value: function loadImages(images) {
      var IFRAME_TIMEOUT = 1000;
      var totalImages = images.length;
      var imagesLoaded = 0;

      return new Promise(function (resolve) {
        if (totalImages > 0) {
          (0, _map2.default)(images, function (image) {
            image.onload = function () {
              imagesLoaded += 1;
              if (imagesLoaded >= totalImages) {
                resolve();
              }
            };
          });
        } else {
          setTimeout(resolve, IFRAME_TIMEOUT);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var ret = null;

      if (this.props.markup) {
        var classes = (0, _classnames2.default)("js-custom-html align-center tempo-module", "js-custom-html-" + this.props.iframeId);

        this.isNativeIframe = this.props.markup.indexOf("<iframe") === 0;
        if (this.isNativeIframe) {
          ret = _react2.default.createElement("div", { ref: "iframe",
            className: classes,
            "data-module": this.props.moduleType,
            "data-module-id": this.props.moduleId,
            dangerouslySetInnerHTML: { __html: this.props.markup } });
        } else {
          var iframeHtml = "<iframe scrolling=\"no\" frameborder=\"0\"\n            width=\"100%\" allowTransparency=\"true\" marginheight=\"0\"\n            style=\"border: 0px none; vertical-align: bottom; height: auto;\"></iframe>\n        ";

          ret = _react2.default.createElement("div", { ref: "iframe",
            className: classes,
            "data-module": this.props.moduleType,
            "data-module-id": this.props.moduleId,
            dangerouslySetInnerHTML: { __html: iframeHtml } });
        }
      }
      return ret;
    }
  }]);

  return Iframe;
}(_react2.default.Component);

exports.default = Iframe;


Iframe.propTypes = {
  iframeId: _react2.default.PropTypes.string,
  markup: _react2.default.PropTypes.string,
  css: _react2.default.PropTypes.string,
  moduleId: _react2.default.PropTypes.string,
  moduleType: _react2.default.PropTypes.string
};