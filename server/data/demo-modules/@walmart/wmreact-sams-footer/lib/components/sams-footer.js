"use strict";

exports.__esModule = true;
exports.mapFooterDispatchToProps = exports.mapFooterStateToProps = exports.SamsFooter = undefined;

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

var _tempoCore = require("@walmart/wmreact-footer/lib/tempo-core");

var _globalEmailSignup = require("./global-email-signup");

var _globalEmailSignup2 = _interopRequireDefault(_globalEmailSignup);

var _globalFooter = require("./global-footer");

var _globalFooter2 = _interopRequireDefault(_globalFooter);

var _samsCopyright = require("./sams-copyright");

var _samsCopyright2 = _interopRequireDefault(_samsCopyright);

var _actions = require("@walmart/wmreact-footer/lib/actions");

var _legalLinks = require("./legal-links");

var _legalLinks2 = _interopRequireDefault(_legalLinks);

var _modal = require("@walmart/wmreact-containers/lib/components/modal");

var _modal2 = _interopRequireDefault(_modal);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleTypeComponentMap = {
  GlobalEmailSignup: _globalEmailSignup2.default,
  GlobalFooter: _globalFooter2.default,
  LegalLinks: _legalLinks2.default,
  Copyright: _samsCopyright2.default
};
var ANALYTICS_PAGE_CONTEXT = "Footer";

/**
This component displays the footer on page
*/

var SamsFooter = exports.SamsFooter = function (_Component) {
  (0, _inherits3.default)(SamsFooter, _Component);

  function SamsFooter(props) {
    (0, _classCallCheck3.default)(this, SamsFooter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      modalToggle: false
    };
    return _this;
  }

  SamsFooter.prototype.componentDidMount = function componentDidMount() {
    this.props.onBootstrap();
  };

  SamsFooter.prototype._signup = function _signup() {
    if (this.state.modalToggle) {
      this.setState({ modalToggle: false });
    } else {
      this.setState({ modalToggle: true });
    }
  };

  SamsFooter.prototype._renderEmailSignupZone = function _renderEmailSignupZone(_ref) {
    var _this2 = this;

    var emailSignup = _ref.emailSignup;
    var isMobile = _ref.isMobile;

    return _react2.default.createElement(_tempoCore.TempoZone, (0, _extends3.default)({
      zoneName: "signup_zone",
      isMobile: isMobile,
      onEmailSubmitted: function onEmailSubmitted() {
        _this2._signup();
      },
      autoId: "footer-GlobalEmailSignup"
    }, emailSignup));
  };

  SamsFooter.prototype._renderSocialIconsZone = function _renderSocialIconsZone(_ref2) {
    var isMobile = _ref2.isMobile;

    return _react2.default.createElement(_tempoCore.TempoZone, {
      isMobile: isMobile,
      zoneName: "copyright_zone",
      autoId: "footer-GlobalSocialIcons" });
  };

  SamsFooter.prototype._renderGlobalFooterZone = function _renderGlobalFooterZone(_ref3) {
    var isMobile = _ref3.isMobile;
    var pathToAssets = _ref3.pathToAssets;

    return _react2.default.createElement(_tempoCore.TempoZone, (0, _extends3.default)({
      isMobile: isMobile,
      zoneName: "footer_links_zone",
      pathToAssets: pathToAssets,
      autoId: "footer-GlobalFooter"
    }, _globalFooter2.default));
  };

  SamsFooter.prototype._renderLegalLinksZone = function _renderLegalLinksZone(_ref4) {
    var isMobile = _ref4.isMobile;

    return _react2.default.createElement(_tempoCore.TempoZone, (0, _extends3.default)({
      isMobile: isMobile,
      zoneName: "legal_links_zone",
      autoId: "footer-GlobalFooter"
    }, _legalLinks2.default));
  };

  SamsFooter.prototype.render = function render() {
    var _this3 = this;

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
            moduleTypeComponentMap: moduleTypeComponentMap },
          _react2.default.createElement(_tempoAnalyticsCollector2.default, null),
          _react2.default.createElement(
            "div",
            { className: "ResponsiveContainer" },
            this._renderEmailSignupZone(this.props),
            _react2.default.createElement("div", { className: "divider hide-content display-inline-block-l" }),
            this._renderGlobalFooterZone(this.props),
            _react2.default.createElement("div", { className: "divider hide-content display-inline-block-l" }),
            this._renderLegalLinksZone(this.props),
            this._renderSocialIconsZone(this.props)
          )
        ),
        _react2.default.createElement(
          _modal2.default,
          { active: this.state.modalToggle, fixed: true, className: "modal-confirm" },
          _react2.default.createElement(
            "div",
            { className: "user-message" },
            "Thanks! You're subscribed to our email"
          ),
          _react2.default.createElement(
            _button2.default,
            {
              onClick: function onClick() {
                _this3._signup();
              } },
            "Continue shopping"
          )
        )
      )
    );
  };

  return SamsFooter;
}(_react.Component);

SamsFooter.displayName = "Footer";

SamsFooter.propTypes = {
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
    showModal: _react.PropTypes.bool,
    emailExclusions: _react.PropTypes.string,
    emailInfoText: _react.PropTypes.string
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

SamsFooter.defaultProps = {
  isMobile: false,
  copyrightText: "© SamsClub, Inc.",
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

exports.default = (0, _reactRedux.connect)(mapFooterStateToProps, mapFooterDispatchToProps)(SamsFooter);