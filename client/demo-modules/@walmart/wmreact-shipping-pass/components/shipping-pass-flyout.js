"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShippingPassFlyout = function (_Component) {
  _inherits(ShippingPassFlyout, _Component);

  function ShippingPassFlyout(props) {
    _classCallCheck(this, ShippingPassFlyout);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShippingPassFlyout).call(this, props));

    _this.state = {
      flyoutOpen: false
    };
    _this.onClickSeeDetailsLaunchModal = _this.onClickSeeDetailsLaunchModal.bind(_this);
    return _this;
  }

  _createClass(ShippingPassFlyout, [{
    key: "renderTrigger",
    value: function renderTrigger() {
      return _react2.default.createElement("div", { className: "ShippingPass-tile" });
    }
  }, {
    key: "renderSpBody",
    value: function renderSpBody() {
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
    }
  }, {
    key: "renderSpFooter",
    value: function renderSpFooter() {
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
    }
  }, {
    key: "onClickSeeDetailsLaunchModal",
    value: function onClickSeeDetailsLaunchModal() {
      this.setState({
        flyoutOpen: false
      });
      this.props.onClickSeeDetails();
    }
  }, {
    key: "render",
    value: function render() {
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
    }
  }]);

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