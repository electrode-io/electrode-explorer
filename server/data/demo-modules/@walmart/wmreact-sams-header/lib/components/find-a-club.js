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

var _geolocate = require("@walmart/geolocate");

var _validators = require("@walmart/wmreact-validation/lib/validators");

var _validators2 = _interopRequireDefault(_validators);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userLocation = _validators2.default.userLocation;

var FindClub = function (_Component) {
  (0, _inherits3.default)(FindClub, _Component);

  function FindClub(props) {
    (0, _classCallCheck3.default)(this, FindClub);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.geolocate = new _geolocate.Geolocate();
    _this.extractLatLong = _this.extractLatLong.bind(_this);
    _this.findStores = _this.findStores.bind(_this);
    _this.onStoreFinderActive = props.onStoreFinderActive.bind(_this);
    _this.state = {
      zipCode: "",
      errorMessage: ""
    };
    return _this;
  }

  FindClub.prototype.validateZipCode = function validateZipCode(inputZipCode) {
    var nearbyStores = this.props.nearbyStores;
    var nearbyDistance = this.props.nearbyDistance || 150;
    var validateObject = {
      isValidZipCode: false,
      withinProximity: false
    };

    if (!inputZipCode || !nearbyStores) {
      return validateObject;
    }

    if (userLocation.validate(inputZipCode)) {
      validateObject.isValidZipCode = true;

      for (var i = 0; i < nearbyStores.length; ++i) {
        var nearbyClub = nearbyStores[i];
        if (nearbyClub && nearbyClub.address && nearbyClub.distance <= nearbyDistance) {
          validateObject.withinProximity = true;
          break;
        }
      }
    }

    return validateObject;
  };

  FindClub.prototype.onZipCodeChange = function onZipCodeChange(event) {
    var value = event.target.value;

    this.setState({
      zipCode: value
    });
  };

  FindClub.prototype.handleSubmit = function handleSubmit(e) {
    e.preventDefault();
  };

  FindClub.prototype.onFindClick = function onFindClick(e) {
    var zipCode = this.fcinput.value;

    var _validateZipCode = this.validateZipCode(zipCode);

    var isValidZipCode = _validateZipCode.isValidZipCode;
    var withinProximity = _validateZipCode.withinProximity;

    if (!isValidZipCode) {
      this.setState({
        errorMessage: "Please check your ZIP code"
      });
    } else if (isValidZipCode && withinProximity) {
      this.onStoreFinderActive({ singleLineAddr: zipCode });
      this.props.close(e);
      this.props.openClubList(e);
    } else if (!withinProximity) {
      this.renderNoClubsFound();
    }
  };

  FindClub.prototype.closeModal = function closeModal() {
    this.refs.modal.hide();
  };

  FindClub.prototype.renderErrorNotifications = function renderErrorNotifications() {
    if (this.state.errorMessage) {
      return _react2.default.createElement(
        "div",
        { className: "error-message" },
        this.state.errorMessage
      );
    }
    return null;
  };

  FindClub.prototype.extractLatLong = function extractLatLong(geo) {
    var _geo$coords = geo.coords;
    var latitude = _geo$coords.latitude;
    var longitude = _geo$coords.longitude;

    return {
      latitude: latitude,
      longitude: longitude
    };
  };

  FindClub.prototype.findStores = function findStores(singleLineAddr) {
    this.onStoreFinderActive({ singleLineAddr: singleLineAddr });
  };

  FindClub.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      null,
      this.renderFindAClub()
    );
  };

  FindClub.prototype.renderFindAClub = function renderFindAClub() {
    var _this2 = this;

    var inputClass = (0, _classnames2.default)({
      "fc-input-on-blur": !this.props.onFocus,
      "fc-input-on-focus": this.props.onFocus
    });
    var zipErrorClass = (0, _classnames2.default)({
      "fc-zip-error": this.state.errorMessage,
      "fc-zip-success": !this.state.errorMessage
    });
    var inputErrorClass = (0, _classnames2.default)({
      "fc-input-error fc-find-club": this.props.zipError,
      "fc-input-success fc-find-club": !this.props.zipError
    });

    return _react2.default.createElement(
      "div",
      { className: "find-a-club" },
      _react2.default.createElement(
        "div",
        { className: "modal-header" },
        _react2.default.createElement(
          "a",
          { href: "#", onClick: this.props.close, className: "fc-icon-close" },
          "x"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "modal-body" },
        _react2.default.createElement(
          "label",
          { className: "fc-notification" },
          this.props.notification
        ),
        _react2.default.createElement(
          "label",
          { className: "fc-user-message" },
          this.props.userMessage
        ),
        _react2.default.createElement(
          "div",
          { className: zipErrorClass },
          this.state.errorMessage
        ),
        _react2.default.createElement(
          "form",
          { className: "myForm",
            onSubmit: this.handleSubmit },
          _react2.default.createElement(
            "div",
            { className: "formFieldElement" },
            _react2.default.createElement(
              "label",
              { className: inputClass },
              this.props.labelText
            ),
            _react2.default.createElement("input", { className: inputErrorClass,
              type: "text",
              ref: function ref(inputField) {
                _this2.fcinput = inputField;
              } }),
            _react2.default.createElement(
              "div",
              { className: "modal-footer" },
              _react2.default.createElement(
                _button2.default,
                { className: "fc-cancel-btn",
                  onClick: this.props.close,
                  type: "button",
                  disabled: this.props.submitting,
                  automationId: this.props.automation.cancelBtn,
                  tealeafId: this.props.tealeaf.cancelBtn },
                this.props.cancelBtn
              ),
              _react2.default.createElement(
                _button2.default,
                { className: "fc-find-btn",
                  onClick: this.onFindClick.bind(this),
                  type: "button",
                  disabled: this.props.submitting,
                  automationId: this.props.automation.findBtn,
                  tealeafId: this.props.tealeaf.findBtn },
                this.props.findBtn
              )
            )
          )
        )
      )
    );
  };

  return FindClub;
}(_react.Component);

FindClub.propTypes = {
  notification: _react.PropTypes.string.isRequired,
  userMessage: _react.PropTypes.string.isRequired,
  findBtn: _react.PropTypes.string.isRequired,
  titleText: _react.PropTypes.string.isRequired,
  cancelBtn: _react.PropTypes.string.isRequired,
  changeLocationBtn: _react.PropTypes.string.isRequired,
  submitting: _react.PropTypes.bool,
  tealeaf: _react.PropTypes.object,
  automation: _react.PropTypes.object,
  close: _react.PropTypes.func,
  btnMessage: _react.PropTypes.string,
  onStoreFinderActive: _react.PropTypes.func,
  nearbyStores: _react.PropTypes.array,
  nearbyDistance: _react.PropTypes.number,
  openClubList: _react.PropTypes.func,
  zipError: _react.PropTypes.string,
  onFocus: _react.PropTypes.string,
  labelText: _react.PropTypes.string
};
FindClub.defaultProps = {
  submitting: false,
  notification: "Find a club",
  userMessage: "Choose your club to see pricing and availability",
  findBtn: "Find",
  cancelBtn: "Cancel",
  automation: { // for testing
    submitBtn1: "Find-a-club-cancel-submit-btn",
    submitBtn2: "Find-a-club-find-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtn1: "Find-a-club-cancel-submit-btn",
    submitBtn2: "Find-a-club-find-submit-btn"
  }
};

exports.default = FindClub;