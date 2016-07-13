"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShippingPassFlyout = function (_Component) {
  (0, _inherits3.default)(ShippingPassFlyout, _Component);

  function ShippingPassFlyout(props) {
    (0, _classCallCheck3.default)(this, ShippingPassFlyout);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      flyoutOpen: false
    };
    _this.onClickSeeDetailsLaunchModal = _this.onClickSeeDetailsLaunchModal.bind(_this);
    return _this;
  }

  ShippingPassFlyout.prototype.renderTrigger = function renderTrigger() {
    return _react2.default.createElement("div", { className: "ShippingPass-tile" });
  };

  ShippingPassFlyout.prototype.renderSpBody = function renderSpBody() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement("div", { className: "ShippingPassFlyout-logo" }),
      _react2.default.createElement(
        "div",
        { className: "ShippingPassFlyout-body" },
        _react2.default.createElement(
          "span",
          { className: "message" },
          this.props.spTrialText,
          _react2.default.createElement(
            "span",
            { className: "font-semibold" },
            " ",
            this.props.spNumberOfShipDays,
            " "
          ),
          this.props.spFulfillmentText
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "span",
            { className: "message font-semibold margin-bottom" },
            this.props.spPromotionText
          )
        )
      )
    );
  };

  ShippingPassFlyout.prototype.renderSpFooter = function renderSpFooter() {
    return _react2.default.createElement(
      "div",
      { className: "ShippingPassFlyout-footer" },
      _react2.default.createElement(
        _button2.default,
        { className: "button-ship",
          onClick: this.onClickSeeDetailsLaunchModal,
          fakelink: true },
        this.props.seeDetailsText
      ),
      _react2.default.createElement(
        "span",
        { className: " ShippingPassFlyout-divider display-inline-block margin-left margin-right divider" },
        "|"
      ),
      _react2.default.createElement(
        _link2.default,
        { href: this.props.signUpUrl },
        this.props.signUpText
      )
    );
  };

  ShippingPassFlyout.prototype.onClickSeeDetailsLaunchModal = function onClickSeeDetailsLaunchModal() {
    this.setState({
      flyoutOpen: false
    });
    this.props.onClickSeeDetails();
  };

  ShippingPassFlyout.prototype.render = function render() {
    if (this.props.showShippingPassFlyout) {
      return _react2.default.createElement(
        _flyout2.default,
        {
          trigger: this.renderTrigger(),
          direction: "right",
          className: "ShippingPassFlyout-container",
          size: "narrow",
          active: this.state.flyoutOpen,
          closeButton: true },
        this.renderSpBody(this.props),
        this.renderSpFooter(this.props)
      );
    } else {
      return _react2.default.createElement("div", { className: "ShippingPassFlyout-logo" });
    }
  };

  return ShippingPassFlyout;
}(_react.Component);

ShippingPassFlyout.displayName = "ShippingPassFlyout";

ShippingPassFlyout.propTypes = {

  /**
   * Sp prop types for text on flyout
   */
  spTrialText: _react.PropTypes.string,
  spNumberOfShipDays: _react.PropTypes.string,
  spFulfillmentText: _react.PropTypes.string,
  spPromotionText: _react.PropTypes.string,

  seeDetailsText: _react.PropTypes.string,

  signUpUrl: _react.PropTypes.string,

  signUpText: _react.PropTypes.string,
  /**
   * Conditions to be fulfilled to display SP flyout
   */
  showShippingPassFlyout: _react.PropTypes.bool,
  /**
   * What to do if See details is clicked and you want to extend onClick behavior
   */
  onClickSeeDetails: _react.PropTypes.func
};

ShippingPassFlyout.defaultProps = {
  spTrialText: "",
  spNumberOfShipDays: "",
  spFulfillmentText: "",
  spPromotionText: "",
  seeDetailsText: "",
  signUpUrl: "",
  signUpText: "",
  onClickSeeDetails: function onClickSeeDetails() {/*no-op*/},
  showShippingPassFlyout: false
};

exports.default = ShippingPassFlyout;