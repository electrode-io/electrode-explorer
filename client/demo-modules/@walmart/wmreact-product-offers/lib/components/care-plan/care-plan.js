"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _helpFlyoutButton = require("./help-flyout-button");

var _helpFlyoutButton2 = _interopRequireDefault(_helpFlyoutButton);

var _price = require("../price");

var _price2 = _interopRequireDefault(_price);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _toArray = require("lodash/toArray");

var _toArray2 = _interopRequireDefault(_toArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HEADING = _react2.default.createElement(
  "span",
  { className: "CarePlan-heading CarePlan-font CarePlan-margin-right" },
  "Protect your purchase with a ",
  _react2.default.createElement(
    "span",
    { className: "font-semibold" },
    " Care Plan"
  )
);
var HELP_TEXT = "Get protected: cover costly repairs with a Product Care Plan.\n    Our plans protect above and beyond the manufacturer’s warranty and cover failures,\n    including those due to normal wear and tear.";

var _renderHelpText = function _renderHelpText(learnMoreLink) {
  return _react2.default.createElement(
    "p",
    { className: "no-margin CarePlan-help-text copy-small" },
    HELP_TEXT,
    _react2.default.createElement(
      _link2.default,
      { className: "CarePlan-link", href: learnMoreLink, target: "_blank" },
      "Learn more"
    )
  );
};

var _renderHeader = function _renderHeader(_ref) {
  var flyoutPosition = _ref.flyoutPosition;
  var flyoutSize = _ref.flyoutSize;
  var learnMoreLink = _ref.learnMoreLink;

  var flyoutProps = {
    position: flyoutPosition || "left",
    size: flyoutSize || "wide"
  };
  return _react2.default.createElement(
    "div",
    { className: "CarePlan-header margin-bottom" },
    HEADING,
    _react2.default.createElement(
      _helpFlyoutButton2.default,
      (0, _extends3.default)({ className: "CarePlan-help" }, flyoutProps),
      _renderHelpText(learnMoreLink)
    )
  );
};

var _renderUnselectedExperience = function _renderUnselectedExperience(carePlans, onCarePlanSelected) {
  return carePlans.map(function (carePlan, index) {
    return _react2.default.createElement(
      "div",
      { key: index, className: "CarePlan-option CarePlan-font" },
      _react2.default.createElement(
        "span",
        { className: "CarePlan-add CarePlan-link",
          onClick: function onClick() {
            return onCarePlanSelected(carePlan.offerId);
          } },
        _react2.default.createElement("i", { className: "wmicon font-bold wmicon-16 wmicon-add" })
      ),
      _react2.default.createElement(
        "span",
        null,
        "Add ",
        _react2.default.createElement(
          "span",
          { className: "font-semibold" },
          carePlan.duration,
          "-Year"
        ),
        " Protection",
        _react2.default.createElement(_price2.default, { className: "font-semibold CarePlan-margin-left",
          price: carePlan.price.price,
          currency: carePlan.price.currencyUnitSymbol })
      )
    );
  });
};

var _renderSelectedExperience = function _renderSelectedExperience(selectedPlan, onCarePlanUnselected) {
  return _react2.default.createElement(
    "div",
    { className: "CarePlan-font CarePlan-selection" },
    _react2.default.createElement(
      "span",
      { className: "CarePlan-margin-right CarePlan-selected" },
      _react2.default.createElement("i", { className: "wmicon font-semibold wmicon-16 wmicon-ok" })
    ),
    _react2.default.createElement(
      "span",
      null,
      _react2.default.createElement(
        "span",
        { className: "font-semibold" },
        selectedPlan.duration,
        "-Year"
      ),
      " Protection +",
      _react2.default.createElement(_price2.default, { className: "font-semibold CarePlan-margin-left",
        price: selectedPlan.price.price,
        currency: "$" }),
      _react2.default.createElement(
        _link2.default,
        {
          className: "CarePlan-link CarePlan-remove",
          onClick: function onClick() {
            return onCarePlanUnselected();
          } },
        "Remove"
      )
    )
  );
};

var _renderCarePlans = function _renderCarePlans(props) {
  var carePlans = props.carePlans;
  var selectedPlan = props.selectedPlan;
  var onCarePlanSelected = props.onCarePlanSelected;
  var onCarePlanUnselected = props.onCarePlanUnselected;

  return !(0, _isEmpty2.default)(selectedPlan) && !(0, _isEmpty2.default)(carePlans[selectedPlan]) ? _renderSelectedExperience(carePlans[selectedPlan], onCarePlanUnselected) : _renderUnselectedExperience((0, _toArray2.default)(carePlans), onCarePlanSelected);
};

var CarePlan = function CarePlan(props) {
  var styles = "CarePlan " + props.className;
  return _react2.default.createElement(
    "div",
    { className: styles },
    _renderHeader(props),
    _renderCarePlans(props)
  );
};

CarePlan.displayName = "CarePlan";

CarePlan.propTypes = {
  /**
  Position of the help flyout
  */
  flyoutPosition: _react.PropTypes.string,
  /**
  Size of the help flyout
  */
  flyoutSize: _react.PropTypes.string,
  className: _react.PropTypes.string,
  /**
  Url to care plan details page
  */
  learnMoreLink: _react.PropTypes.string,
  /**
  offerId of the care plan selected
  */
  selectedPlan: _react.PropTypes.string,
  /**
  Care plan options to be rendered
  */
  carePlans: _react.PropTypes.object,
  /**
  callback executed when a care plan is selected
  */
  onCarePlanSelected: _react.PropTypes.func,
  /**
  callback executed when a care plan is unselected
  */
  onCarePlanUnselected: _react.PropTypes.func
};

CarePlan.defaultProps = {
  learnMoreLink: "#",
  onCarePlanSelected: function onCarePlanSelected() {},
  onCarePlanUnselected: function onCarePlanUnselected() {},
  status: "UNSELECTED",
  flyoutPosition: "left",
  flyoutSize: "wide",
  className: ""
};

exports.default = CarePlan;