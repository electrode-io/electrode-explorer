"use strict";

exports.__esModule = true;
exports.mapFooterDispatchToProps = exports.mapFooterStateToProps = exports.Footer = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _tempoAnalyticsCollector = require("@walmart/wmreact-tempo-analytics-utils/lib/components/tempo-analytics-collector");

var _tempoAnalyticsCollector2 = _interopRequireDefault(_tempoAnalyticsCollector);

var _tempoCore = require("../tempo-core");

var _globalEmailSignup = require("./global-email-signup");

var _globalEmailSignup2 = _interopRequireDefault(_globalEmailSignup);

var _globalFooter = require("./global-footer");

var _globalFooter2 = _interopRequireDefault(_globalFooter);

var _footerCopyright = require("./footer-copyright");

var _footerCopyright2 = _interopRequireDefault(_footerCopyright);

var _globalSocialIcons = require("./global-social-icons");

var _globalSocialIcons2 = _interopRequireDefault(_globalSocialIcons);

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleTypeComponentMap = {
  GlobalEmailSignup: _globalEmailSignup2.default,
  GlobalSocialIcons: _globalSocialIcons2.default,
  GlobalFooter: _globalFooter2.default
};
var ANALYTICS_PAGE_CONTEXT = "Footer";

/**
This component displays the footer on page

@import {Footer}
@flags noVisibleRender
@component Footer
@playground
Footer
```
<Footer
  copyrightText="© Walmart Stores, Inc."
  emailSignup= {{showModal: false, loading: false, didInvalidate: false, emailId: ""}}
  referenceId="ASWEDF123W"
/>
```
*/

var Footer = exports.Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Footer.prototype.componentDidMount = function componentDidMount() {
    this.props.onBootstrap();
  };

  Footer.prototype._renderEmailSignupZone = function _renderEmailSignupZone(_ref) {
    var emailSignup = _ref.emailSignup;
    var _onEmailSubmitted = _ref.onEmailSubmitted;
    var emailSignupUrl = _ref.emailSignupUrl;
    var _onModalClose = _ref.onModalClose;
    var isMobile = _ref.isMobile;

    return _react2.default.createElement(_tempoCore.TempoZone, (0, _extends3.default)({
      zoneName: "footerZone1",
      isMobile: isMobile,
      onEmailSubmitted: function onEmailSubmitted(emailId) {
        _onEmailSubmitted(emailId, emailSignupUrl);
      },
      onModalClose: function onModalClose() {
        _onModalClose();
      },
      autoId: "footer-GlobalEmailSignup"
    }, emailSignup));
  };

  Footer.prototype._renderSocialIconsZone = function _renderSocialIconsZone(_ref2) {
    var isMobile = _ref2.isMobile;

    return _react2.default.createElement(_tempoCore.TempoZone, {
      isMobile: isMobile,
      zoneName: "footerZone2",
      autoId: "footer-GlobalSocialIcons" });
  };

  Footer.prototype._renderGlobalFooterZone = function _renderGlobalFooterZone(_ref3) {
    var isMobile = _ref3.isMobile;
    var pathToAssets = _ref3.pathToAssets;

    return _react2.default.createElement(_tempoCore.TempoZone, {
      isMobile: isMobile,
      zoneName: "footerZone3",
      pathToAssets: pathToAssets,
      autoId: "footer-GlobalFooter" });
  };

  Footer.prototype._renderFooterCopyright = function _renderFooterCopyright(_ref4) {
    var copyrightText = _ref4.copyrightText;
    var referenceId = _ref4.referenceId;
    var isMobile = _ref4.isMobile;

    return _react2.default.createElement(_footerCopyright2.default, {
      text: copyrightText,
      referenceId: referenceId,
      isMobile: isMobile,
      autoId: "footer-FooterCopyright" });
  };

  Footer.prototype.render = function render() {
    return _react2.default.createElement(
      _collectorContext2.default,
      { pageContext: ANALYTICS_PAGE_CONTEXT },
      _react2.default.createElement(
        "footer",
        { className: "footer-Footer" },
        _react2.default.createElement(
          _tempoCore.TempoWrapper,
          {
            zoneNameModuleMap: (0, _tempoCore.mapQuimbyStateToProps)(this.props.quimbyData),
            moduleTypeComponentMap: moduleTypeComponentMap
          },
          _react2.default.createElement(_tempoAnalyticsCollector2.default, null),
          _react2.default.createElement(
            "div",
            { className: "ResponsiveContainer" },
            _react2.default.createElement(
              "div",
              null,
              this._renderEmailSignupZone(this.props),
              this._renderSocialIconsZone(this.props)
            ),
            this._renderGlobalFooterZone(this.props)
          ),
          this._renderFooterCopyright(this.props)
        )
      )
    );
  };

  return Footer;
}(_react.Component);

Footer.displayName = "Footer";

Footer.propTypes = {
  /**
   check mobile device
   */
  isMobile: _react.PropTypes.bool,
  /**
   Copyright text
   */
  copyrightText: _react.PropTypes.string.isRequired,
  /**
   Customer reference Id
   */
  referenceId: _react.PropTypes.string,
  /**
   Emailsignup info
  */
  emailSignup: _react.PropTypes.shape({
    loading: _react.PropTypes.bool,
    emailId: _react.PropTypes.string,
    didInvalidate: _react.PropTypes.bool,
    showModal: _react.PropTypes.bool
  }),
  /**
   The first action dispatched
  */
  onBootstrap: _react.PropTypes.func,
  onEmailSubmitted: _react.PropTypes.func,
  onModalClose: _react.PropTypes.func,
  /**
  quimbyData is the result of tempo-core calls to quimby stored in redux
  */
  quimbyData: _react.PropTypes.object,
  /**
  Path to opinion lab assets
  */
  pathToAssets: _react.PropTypes.string,
  /**
  Url for email signup
  */
  emailSignupUrl: _react.PropTypes.string
};

Footer.defaultProps = {
  isMobile: false,
  copyrightText: "© Walmart Stores, Inc.",
  referenceId: "",
  emailSignup: {
    loading: false,
    emailId: "",
    didInvalidate: false,
    showModal: false
  },
  onEmailSubmitted: function onEmailSubmitted() {},
  onModalClose: function onModalClose() {},
  onBootstrap: function onBootstrap() {},
  pathToAssets: "",
  emailSignupUrl: "/ajax/footer-email"
};

var mapFooterStateToProps = exports.mapFooterStateToProps = function mapFooterStateToProps(state) {
  var isMobile = state.isMobile;
  var footer = state.footer;
  return (0, _extends3.default)({
    isMobile: isMobile
  }, footer);
};

var mapFooterDispatchToProps = exports.mapFooterDispatchToProps = function mapFooterDispatchToProps(dispatch) {
  return {
    onBootstrap: function onBootstrap() {
      dispatch((0, _actions.setFooterReferenceId)());
    },

    onEmailSubmitted: function onEmailSubmitted(emailId, emailSignupUrl) {
      dispatch((0, _actions.sendSignupRequest)(emailId, emailSignupUrl));
    },

    onModalClose: function onModalClose() {
      dispatch((0, _actions.emailSignupModalClose)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapFooterStateToProps, mapFooterDispatchToProps)(Footer);