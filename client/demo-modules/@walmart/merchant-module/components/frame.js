"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global setTimeout, document */

var Frame = function (_Component) {
  (0, _inherits3.default)(Frame, _Component);

  function Frame() {
    (0, _classCallCheck3.default)(this, Frame);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Frame.prototype.componentDidMount = function componentDidMount() {
    this.renderFrameContents();
    this.updateIframeHeight();
  };

  Frame.prototype.createIframe = function createIframe(doc) {
    var _props = this.props;
    var children = _props.children;
    var styleUrl = _props.styleUrl;
    var contentDidMount = _props.contentDidMount;
    var contentDidUpdate = _props.contentDidUpdate;


    var contents = _react2.default.createElement("div", undefined, children);
    var initialRender = !this._setInitialContent;

    if (!this._setInitialContent) {
      var style = styleUrl ? "<link rel=\"stylesheet\" type=\"text/css\" href=" + styleUrl + ">" : "";
      var shell = "<html><head>" + style + "<base target=\"_parent\"></head><body><div></div></body></html>";
      doc.open();
      doc.write(shell);
      doc.close();
      this._setInitialContent = true;
    }

    // unstable_renderSubtreeIntoContainer allows us to pass this component as
    // the parent, which exposes context to any child components.
    var callback = initialRender ? contentDidMount : contentDidUpdate;

    _reactDom2.default.unstable_renderSubtreeIntoContainer(this, contents, doc.body.children[0], callback);
  };

  Frame.prototype.renderFrameContents = function renderFrameContents() {
    var doc = _reactDom2.default.findDOMNode(this).contentDocument;

    if (doc && doc.readyState === "complete") {
      this.createIframe(doc);
    } else {
      setTimeout(this.renderFrameContents, 0);
    }
  };

  Frame.prototype.updateIframeHeight = function updateIframeHeight() {
    /*
     Atlas implementation, it looks for the height values from global,
     but in demo application, we do not access to the height value.
     see below for details
     https://gecgithub01.walmart.com/GlobalProducts/
     atlas-common/blob/master/static/src/main/webapp/vanilla/custom-html-merchmodule.js#L14
     */
    // let height = '605';  // test in demo with this code here
    var height = void 0;
    if (window._WML) {
      if (window._WML.plCustomHtml) {
        if (window._WML.plCustomHtml.height) {
          height = window._WML.plCustomHtml.height;
        }
      }
    }

    if (!height) {
      return;
    }

    var iframe = document.querySelector("iframe.merchant-module-iframe");
    iframe.setAttribute("height", height + "px");
  };

  Frame.prototype.componentDidUpdate = function componentDidUpdate() {
    this.renderFrameContents();
  };

  Frame.prototype.componentWillUnmount = function componentWillUnmount() {
    var doc = _reactDom2.default.findDOMNode(this).contentDocument;
    if (doc) {
      _reactDom2.default.unmountComponentAtNode(doc.body);
    }
  };

  Frame.prototype.render = function render() {
    return _react2.default.createElement("iframe", (0, _assign2.default)({
      scrolling: "no",
      frameBorder: "0",
      width: "100%",
      className: "merchant-module-iframe",
      allowTransparency: "true",
      height: this.props.height
    }, this.props, { children: undefined }));
  };

  return Frame;
}(_react.Component);

exports.default = Frame;


Frame.displayName = "Frame";

Frame.propTypes = {
  height: _react.PropTypes.string,
  styleUrl: _react.PropTypes.string,
  contentDidMount: _react.PropTypes.func,
  contentDidUpdate: _react.PropTypes.func,
  children: _react.PropTypes.node
};