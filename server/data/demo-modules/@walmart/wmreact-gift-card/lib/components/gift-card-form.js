"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _validatedField = require("./form/validated-field");

var _validatedField2 = _interopRequireDefault(_validatedField);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GiftCardForm = function (_React$Component) {
  (0, _inherits3.default)(GiftCardForm, _React$Component);

  function GiftCardForm(props) {
    (0, _classCallCheck3.default)(this, GiftCardForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {
      localError: null,
      number: "",
      pin: "",
      label: props.showNickName ? "e.g., Sam's allowance" : null
    };
    return _this;
  }

  GiftCardForm.prototype.componentDidMount = function componentDidMount() {
    var scrollIntoViewOnMount = this.props.scrollIntoViewOnMount;


    _reactDom2.default.findDOMNode(this.refs.number).querySelector("input").focus();

    if (scrollIntoViewOnMount) {
      _reactDom2.default.findDOMNode(this).scrollIntoView({ behavior: "smooth" });
    }
  };

  GiftCardForm.prototype._validate = function _validate() {
    return [this.refs.number, this.refs.pin].map(function (field) {
      return field.validate();
    }).every(function (valid) {
      return valid;
    });
  };

  GiftCardForm.prototype._save = function _save() {
    if (!this._validate()) {
      this.setState({
        localError: {
          message: "Please correct below errors"
        }
      });
      return;
    }
    this.setState({
      localError: null
    });
    var _state = this.state;
    var localError = _state.localError;
    var serialized = (0, _objectWithoutProperties3.default)(_state, ["localError"]);

    if (!serialized.label) {
      delete serialized.label;
    }

    this.props.onSave(serialized);
  };

  GiftCardForm.prototype.renderError = function renderError() {
    var error = this.props.error;
    var localError = this.state.localError;

    var renderedError = localError || error;

    if (renderedError) {
      return _react2.default.createElement(_alert2.default, (0, _extends3.default)({}, renderedError, {
        isBlock: true,
        className: "js-alert-message" }));
    } else {
      return null;
    }
  };

  GiftCardForm.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var isInitial = _props.isInitial;
    var tealeafIds = _props.tealeafIds;
    var showActionsLeft = _props.showActionsLeft;
    var saveBtnPrimary = _props.saveBtnPrimary;
    var loading = _props.loading;
    var floatingLabels = _props.floatingLabels;
    /*eslint-disable max-len*/

    var imgUri = "//i5.walmartimages.com/dfw/63fd9f59-dbdb/k2-_ef8759be-bb04-49cc-9850-59f4f3e462a5.v1.png";
    /*eslint-enable max-len*/
    return _react2.default.createElement(
      "div",
      { className: "add-form js-gift-card-form" },
      _react2.default.createElement(
        "form",
        {
          className: (0, _classnames2.default)("add-form-wrapper", {
            "u-borderNone": isInitial,
            "show-actions-left": showActionsLeft
          }),
          ref: "theForm" },
        this.renderError(),
        _react2.default.createElement(
          _layout2.default,
          { medium: 2, "x-small": 1, padded: true },
          _react2.default.createElement(
            "div",
            { className: "edit-form-wrapper" },
            _react2.default.createElement(
              _layout2.default,
              { "small-sizes": [8, 4], "x-small": 1, padded: true },
              _react2.default.createElement(_validatedField2.default, {
                ref: "number",
                value: this.state.number,
                onChange: function onChange(ev) {
                  return _this2.setState({ number: ev.target.value });
                },
                "data-automation-id": "enter-gift-card-number",
                "data-tl-id": tealeafIds.number,
                label: "Gift card number",
                maxLength: "16",
                floating: floatingLabels,
                errorLabel: "Please enter a valid gift card number.",
                validationType: "exactdigitlength",
                validationParams: 16,
                name: "number" }),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_validatedField2.default, {
                  ref: "pin",
                  value: this.state.pin,
                  onChange: function onChange(ev) {
                    return _this2.setState({ pin: ev.target.value });
                  },
                  "data-automation-id": "enter-gift-card-pin",
                  "data-tl-id": tealeafIds.pin,
                  label: "PIN",
                  floating: floatingLabels,
                  instructions: "(4 digits)",
                  errorLabel: "Please enter a valid pin.",
                  validationType: "exactdigitlength",
                  validationParams: 4,
                  maxLength: "4",
                  name: "pin" }),
                _react2.default.createElement(
                  "div",
                  { className: "copy-mini" },
                  _react2.default.createElement(
                    "a",
                    { target: "_blank", href: "http://help.walmart.com/app/answers/detail/a_id/176" },
                    "Don't have a PIN?"
                  )
                )
              )
            ),
            this.props.showNickName && _react2.default.createElement(_validatedField2.default, {
              ref: "label",
              value: this.state.label,
              onChange: function onChange(ev) {
                return _this2.setState({ label: ev.target.value });
              },
              "data-automation-id": "enter-gift-card-nickname",
              "data-tl-id": "enter-gift-card-nickname",
              label: "Gift card nickname",
              floating: floatingLabels,
              instructions: "(optional)",
              isRequiredField: false,
              name: "label" })
          ),
          _react2.default.createElement(
            "div",
            { className: "gift-card-example" },
            _react2.default.createElement(_image2.default, {
              className: "sample-card",
              alt: "sample Gift card",

              src: imgUri })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "add-form-actions" },
          _react2.default.createElement(
            _button2.default,
            {
              primary: saveBtnPrimary,
              className: "submit-save-gift-card",
              onClick: function onClick() {
                return !loading && _this2._save();
              },
              spinner: loading,
              disabled: loading,
              "data-automation-id": "submit-apply-gift-card",
              "data-tl-id": tealeafIds.submit },
            this.props.saveGiftCardActionLabel
          ),
          !isInitial && _react2.default.createElement(
            _button2.default,
            {
              fakelink: true,
              className: "cancel-save-gift-card",
              "data-automation-id": "cancel-apply-gift-card",
              "data-tl-id": tealeafIds.cancel,
              onClick: function onClick() {
                return !loading && _this2.props.onCancel();
              } },
            "Cancel"
          )
        )
      )
    );
  };

  return GiftCardForm;
}(_react2.default.Component);

GiftCardForm.propTypes = {
  error: _react2.default.PropTypes.shape({
    message: _react2.default.PropTypes.string.isRequired,
    type: _react2.default.PropTypes.oneOf(["warn", "error"])
  }),
  tealeafIds: _react2.default.PropTypes.shape({
    number: _react2.default.PropTypes.string,
    pin: _react2.default.PropTypes.string,
    label: _react2.default.PropTypes.string,
    submit: _react2.default.PropTypes.string,
    cancel: _react2.default.PropTypes.string
  }),
  onSave: _react2.default.PropTypes.func.isRequired,
  onCancel: _react2.default.PropTypes.func.isRequired,
  showNickName: _react2.default.PropTypes.bool,
  isInitial: _react2.default.PropTypes.bool,
  loading: _react2.default.PropTypes.bool,
  saveBtnPrimary: _react2.default.PropTypes.bool,
  showActionsLeft: _react2.default.PropTypes.bool,
  saveGiftCardActionLabel: _react2.default.PropTypes.string,
  scrollIntoViewOnMount: _react2.default.PropTypes.bool,
  floatingLabels: _react2.default.PropTypes.bool
};

GiftCardForm.defaultProps = {
  tealeafIds: {
    number: "number",
    pin: "pin",
    label: "label",
    submit: "submit",
    cancel: "cancel"
  },
  showNickName: true,
  saveBtnPrimary: true,
  showActionsLeft: false,
  scrollIntoViewOnMount: true,
  saveGiftCardActionLabel: "Save"
};

exports.default = GiftCardForm;