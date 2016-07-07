"use strict";

exports.__esModule = true;

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

var _field = require("@walmart/wmreact-stateless-fields/lib/components/field");

var _field2 = _interopRequireDefault(_field);

var _validators = require("@walmart/wmreact-validation/lib/validators");

var _arrange = require("@walmart/wmreact-layout/lib/components/arrange");

var _arrange2 = _interopRequireDefault(_arrange);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _storeFinderUtils = require("../utils/store-finder-utils");

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VALIDATION_MESSAGE = "Please enter a valid city, state or zip code";

/**
This component is used to find stores near your specified location

@import {StoreFinderField}
@flags noVisibleRender
@component StoreFinderField
@playground
StoreFinderField
```
<StoreFinderField />
```
*/

var StoreFinderField = function (_Component) {
  (0, _inherits3.default)(StoreFinderField, _Component);

  function StoreFinderField(props) {
    (0, _classCallCheck3.default)(this, StoreFinderField);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      location: "",
      showError: false
    };
    _this._handleLocationSubmit = _this._handleLocationSubmit.bind(_this);
    return _this;
  }

  StoreFinderField.prototype._renderLocationField = function _renderLocationField(dataAutomationId) {
    var _this2 = this;

    return _react2.default.createElement(_field2.default, (0, _extends3.default)({
      value: this.state.location,
      className: "header-StoreFinderField-location",
      inputName: "storeFinder",
      shouldDisplayError: function shouldDisplayError() {
        return _this2.state.showError;
      },
      placeholder: "Enter city, state or zip code",
      error: VALIDATION_MESSAGE,
      onChange: function onChange(e) {
        return _this2.setState({ location: e.target.value });
      }
    }, (0, _automationIdUtils.getDataAutomationIdPair)("locationText", dataAutomationId)));
  };

  StoreFinderField.prototype._renderFindButton = function _renderFindButton(dataAutomationId) {
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: "header-StoreFinderField-button"
      }, (0, _automationIdUtils.getDataAutomationIdPair)("findStoreButton", dataAutomationId)),
      _react2.default.createElement(
        _button2.default,
        { type: "submit", compact: true },
        "Find"
      )
    );
  };

  StoreFinderField.prototype._getWindow = function _getWindow() {
    return window;
  };

  StoreFinderField.prototype._handleLocationSubmit = function _handleLocationSubmit(ev) {
    ev.preventDefault();
    var location = this.state.location;
    var currentWindow = this._getWindow();
    var isValid = _validators.userLocation.validate(location);
    if (location && isValid) {
      currentWindow.location.href = (0, _storeFinderUtils.getStoreFinderUrl)(location);
    }
    this.setState({ showError: !isValid });
  };

  StoreFinderField.prototype.render = function render() {
    var _props = this.props;
    var dataAutomationId = _props.dataAutomationId;
    var className = _props.className;

    return _react2.default.createElement(
      "div",
      { className: className },
      _react2.default.createElement(
        "p",
        null,
        "Find another store "
      ),
      _react2.default.createElement(
        "div",
        { className: "header-StoreFinderField-form" },
        _react2.default.createElement(
          "form",
          { onSubmit: this._handleLocationSubmit },
          _react2.default.createElement(
            _arrange2.default,
            null,
            _react2.default.createElement(
              _arrange2.default.Fill,
              null,
              this._renderLocationField(dataAutomationId)
            ),
            _react2.default.createElement(
              _arrange2.default.Fit,
              null,
              this._renderFindButton(dataAutomationId)
            )
          )
        )
      )
    );
  };

  return StoreFinderField;
}(_react.Component);

exports.default = StoreFinderField;


StoreFinderField.displayName = "StoreFinderField";

StoreFinderField.propTypes = {
  /**
  Automation id for testing
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  Additional class names
  */
  className: _react.PropTypes.string
};

StoreFinderField.defaultProps = {
  dataAutomationId: "storeFinderField",
  className: ""
};