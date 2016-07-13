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

var _copy = require("@walmart/wmreact-base/lib/components/copy");

var _copy2 = _interopRequireDefault(_copy);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _separator = require("@walmart/wmreact-containers/lib/components/separator");

var _separator2 = _interopRequireDefault(_separator);

var _well = require("@walmart/wmreact-containers/lib/components/well");

var _well2 = _interopRequireDefault(_well);

var _infoModal = require("./info-modal");

var _infoModal2 = _interopRequireDefault(_infoModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoWell = function (_React$Component) {
  (0, _inherits3.default)(InfoWell, _React$Component);

  function InfoWell() {
    (0, _classCallCheck3.default)(this, InfoWell);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  InfoWell.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var getModalInfo = _props.getModalInfo;
    var modalContent = _props.modalContent;
    var url = _props.url;


    return _react2.default.createElement(
      _well2.default,
      { padded: true },
      _react2.default.createElement(
        "h1",
        { className: "heading-d well-heading" },
        "Your ",
        _react2.default.createElement(_image2.default, { className: "sp-logo", src: this.props.logo }),
        " benefits"
      ),
      _react2.default.createElement(
        _copy2.default,
        null,
        "Use it as often as you want. There's no maximum number of deliveries."
      ),
      _react2.default.createElement(
        _copy2.default,
        null,
        "Use it whenever you want, too. There are no minimum order sizes."
      ),
      _react2.default.createElement(
        _copy2.default,
        null,
        "Use it to get over a million ",
        _react2.default.createElement(_image2.default, { className: "sp-logo", src: this.props.logo }),
        " items."
      ),
      _react2.default.createElement(
        "div",
        { className: "hide-content-m" },
        _react2.default.createElement(_separator2.default, null)
      ),
      _react2.default.createElement(
        _button2.default,
        {
          className: "s-margin-top more-info-button",
          "data-automation-id": "infoModalButton",
          fakelink: true,
          onClick: function onClick() {
            return _this2.refs.infoModal.toggle();
          }
        },
        _react2.default.createElement(
          "span",
          null,
          "More info"
        )
      ),
      _react2.default.createElement(_infoModal2.default, {
        fixed: true,
        getModalInfo: getModalInfo,
        modalContent: modalContent,
        padded: true,
        ref: "infoModal",
        url: url
      })
    );
  };

  return InfoWell;
}(_react2.default.Component);

InfoWell.propTypes = {
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node]),
  getModalInfo: _react2.default.PropTypes.func,
  logo: _react2.default.PropTypes.any,
  modalContent: _react2.default.PropTypes.object,
  url: _react2.default.PropTypes.string
};

exports.default = InfoWell;