"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chooser = require("@walmart/wmreact-chooser/lib/components/chooser");

var _chooser2 = _interopRequireDefault(_chooser);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders chooser from given options
 * @param {Array} options values to be displayed as option
 * @param {Number} value current selected value
 * @param {Function} onChange function to be triggered when chooser value is changed.
 * @return {ReactElement} Chooser component
 */
var _renderChooser = function _renderChooser(options, value, onChange) {
  return _react2.default.createElement(
    _chooser2.default,
    {
      chooserName: options.join("-"),
      defaultValue: "" + value,
      onChange: onChange,
      __self: undefined
    },
    options.map(function (option, index) {
      return _react2.default.createElement(
        _chooser2.default.Option,
        { value: "" + index, key: index, __self: undefined
        },
        option
      );
    })
  );
};

/**
 * Renders button groups
 * @param {Array} options values to be displayed on each button
 * @param {Number} value current selected value
 * @param {Function} onChange function to be triggered when button is clicked
 * @return {ReactElement} tab buttons component
 */
var _renderButtonGroup = function _renderButtonGroup(options, value, onChange) {
  return _react2.default.createElement(
    "div",
    { className: "Tab-buttons", __self: undefined
    },
    options.map(function (option, index) {
      return _react2.default.createElement(
        _button2.default,
        {
          key: index,
          badge: true,
          badgeAlt: true,
          active: index === value,
          onClick: function onClick() {
            return onChange(index);
          },
          __self: undefined
        },
        option
      );
    })
  );
};

/**
 * Tab Navigation component. It will act as navigation for Tabbed content.
 * It is capable of rendering based on device width.
 * It renders a Chooser component for smaller breakpoints and Button groups
 * for higher breakpoints
 *
 * @param {Object} passed in props
 * @return {ReactElement} TabNavigation content
 *
 * @component TabNavigation
 * @import {TabNavigation}
 * @playground
 * TabNavigation
 * ```
 * <TabNavigation
 *  options={[ " Tab1", "Tab2"]}
 *  value={1}
 * />
 * ```
 */

var TabNavigation = function TabNavigation(_ref) {
  var moduleType = _ref.moduleType;
  var onChange = _ref.onChange;
  var options = _ref.options;
  var value = _ref.value;
  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({ className: "Tab-navigation"
    }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process), {
      __self: undefined
    }),
    _react2.default.createElement(
      "span",
      { className: "hide-content-m", __self: undefined
      },
      _renderChooser(options, value, onChange)
    ),
    _react2.default.createElement(
      "span",
      { className: "hide-content-max-m", __self: undefined
      },
      _renderButtonGroup(options, value, onChange)
    )
  );
};

TabNavigation.displayName = "TabNavigation";

TabNavigation.propTypes = {
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  callback when chooser value is changed or any button is clicked in
  case of button group.
  */
  onChange: _react.PropTypes.func,
  /**
  options to be rendered as chooser or as in individual buttons
  */
  options: _react.PropTypes.array.isRequired,
  /**
  current active selection
  */
  value: _react.PropTypes.number.isRequired
};

TabNavigation.defaultProps = {
  moduleType: "TabNavigation",
  onChange: function onChange() {}
};

exports.default = TabNavigation;