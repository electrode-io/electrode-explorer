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

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _modal = require("@walmart/wmreact-containers/lib/components/modal");

var _modal2 = _interopRequireDefault(_modal);

var _slidepanel = require("@walmart/wmreact-containers/lib/components/slidepanel");

var _slidepanel2 = _interopRequireDefault(_slidepanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CancelModal = function (_React$Component) {
  (0, _inherits3.default)(CancelModal, _React$Component);

  function CancelModal() {
    (0, _classCallCheck3.default)(this, CancelModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

    _this.state = { active: false };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  CancelModal.prototype.toggle = function toggle() {
    this.setState({ active: !this.state.active });
  };

  CancelModal.prototype._renderContent = function _renderContent() {
    var _props = this.props;
    var logo = _props.logo;
    var renewalDate = _props.renewalDate;


    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "dl",
        { className: "dl-emphasize" },
        _react2.default.createElement(
          "dt",
          null,
          "Are you sure you want to lose these FREE ",
          _react2.default.createElement(_image2.default, { className: "sp-logo", src: logo }),
          ' ',
          "benefits?"
        ),
        _react2.default.createElement(
          "dd",
          null,
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              null,
              "FREE 2-day shipping on over a million ",
              _react2.default.createElement(_image2.default, { className: "sp-logo", src: logo }),
              ' ',
              "eligible items"
            ),
            _react2.default.createElement(
              "li",
              null,
              "FREE value shipping on regular Walmart items"
            ),
            _react2.default.createElement(
              "li",
              null,
              "No minimum orders"
            )
          )
        )
      ),
      _react2.default.createElement(
        "dl",
        { className: "dl-emphasize" },
        _react2.default.createElement(
          "dt",
          null,
          "Canceling anyway?"
        ),
        _react2.default.createElement(
          "dd",
          null,
          "Use ",
          _react2.default.createElement(_image2.default, { className: "sp-logo", src: logo }),
          " until ",
          renewalDate,
          ' ',
          "and we won't charge your card!"
        )
      )
    );
  };

  CancelModal.prototype._renderButtons = function _renderButtons(block) {
    var _this2 = this;

    var trialStatus = this.props.trialStatus;


    var ContinueButton = function ContinueButton() {
      return _react2.default.createElement(
        _button2.default,
        {
          block: block,
          className: "button-spacing",
          "data-automation-id": "continueButton",
          inverse: true,
          onClick: _this2.toggle
        },
        trialStatus ? _react2.default.createElement(
          "span",
          null,
          "Continue"
        ) : _react2.default.createElement(
          "span",
          null,
          "Cancel"
        )
      );
    };

    var CancelButton = function CancelButton() {
      return _react2.default.createElement(
        _button2.default,
        {
          block: block,
          "data-automation-id": "yesCancelButton",
          onClick: function onClick() {
            _this2.props.cancel();_this2.toggle();
          }
        },
        trialStatus ? _react2.default.createElement(
          "span",
          null,
          "Yes, Cancel"
        ) : _react2.default.createElement(
          "span",
          null,
          "Confirm"
        )
      );
    };

    return _react2.default.createElement(
      "div",
      { className: "l-margin-top" },
      block ? _react2.default.createElement(CancelButton, null) : _react2.default.createElement(ContinueButton, null),
      block ? _react2.default.createElement(ContinueButton, null) : _react2.default.createElement(CancelButton, null)
    );
  };

  CancelModal.prototype._renderSlidePanel = function _renderSlidePanel() {
    return _react2.default.createElement(
      _slidepanel2.default,
      {
        active: this.state.active,
        className: "hide-content-s",
        direction: "left",
        onClose: this.toggle,
        ref: "slidePanel"
      },
      this._renderContent(),
      this._renderButtons(true)
    );
  };

  CancelModal.prototype._renderModal = function _renderModal() {
    return _react2.default.createElement(
      "div",
      { className: "hide-content-max-s" },
      _react2.default.createElement(
        _modal2.default,
        {
          active: this.state.active,
          className: "cancel-modal-body",
          fixed: this.props.fixed,
          onClose: this.toggle,
          padded: this.props.padded,
          ref: "cancelModal"
        },
        this._renderContent(),
        _react2.default.createElement(
          "div",
          { className: "pull-right" },
          this._renderButtons()
        )
      )
    );
  };

  CancelModal.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      null,
      this.state.active && this._renderSlidePanel(),
      this._renderModal()
    );
  };

  return CancelModal;
}(_react2.default.Component);

CancelModal.propTypes = {
  cancel: _react2.default.PropTypes.func,
  fixed: _react2.default.PropTypes.bool,
  logo: _react2.default.PropTypes.any,
  padded: _react2.default.PropTypes.bool,
  renewalDate: _react2.default.PropTypes.string,
  trialStatus: _react2.default.PropTypes.bool
};

exports.default = CancelModal;