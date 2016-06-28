"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var heading = function heading(text, color) {
  var extraClass = arguments.length <= 2 || arguments[2] === undefined ? "" : arguments[2];

  if (typeof text !== "string") {
    return null;
  }

  return _react2.default.createElement(
    "span",
    { className: (0, _classnames2.default)("Banner-heading", extraClass), style: { color: color }, __self: undefined
    },
    text
  );
};

/**
 A component for displaying a multi-heading banner that is responsive
 @examples
 ```jsx
 const data = {
  "headerText1": "Black Friday",
  "backgroundColor": "#000",
  "headerColor1": "#9ed6fa",
  "headerText3": null,
  "headerText2": "Deals",
  "headerColor3": "#222",
  "headerColor2": "#f47421",
  "secondaryText1": "Your hottest offers for today.",
  "secondaryColor1": "#fff",
  "secondaryText2": null,
  "secondaryColor2": "#f47421",
  "secondaryText3": null,
  "secondaryColor3": "#222"
};
 React.render(<Banner {...data} />, mountNode);
 ```
 @component Banner
 @import {Banner}
 @playground
 ```
 const data = {
  "headerText1": "Black Friday",
  "backgroundColor": "#000",
  "headerColor1": "#9ed6fa",
  "headerText3": null,
  "headerText2": "Deals",
  "headerColor3": "#222",
  "headerColor2": "#f47421",
  "secondaryText1": "Your hottest offers for today.",
  "secondaryColor1": "#fff",
  "secondaryText2": null,
  "secondaryColor2": "#f47421",
  "secondaryText3": null,
  "secondaryColor3": "#222"
};
 React.render(<Banner {...data} />, mountNode);
 ```
 */

var BannerMessage = function BannerMessage(_ref) {
  var backgroundColor = _ref.backgroundColor;
  var headerText1 = _ref.headerText1;
  var headerText2 = _ref.headerText2;
  var headerText3 = _ref.headerText3;
  var headerColor1 = _ref.headerColor1;
  var headerColor2 = _ref.headerColor2;
  var headerColor3 = _ref.headerColor3;
  var moduleType = _ref.moduleType;
  var secondaryText1 = _ref.secondaryText1;
  var secondaryText2 = _ref.secondaryText2;
  var secondaryText3 = _ref.secondaryText3;
  var secondaryColor1 = _ref.secondaryColor1;
  var secondaryColor2 = _ref.secondaryColor2;
  var secondaryColor3 = _ref.secondaryColor3;

  var inlineClass = "display-inline-block";
  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({ className: "Banner",
      style: { backgroundColor: backgroundColor }
    }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process), {
      __self: undefined
    }),
    _react2.default.createElement(
      "div",
      { className: "Banner-header display-inline-block-m font-semibold", __self: undefined
      },
      heading(headerText1, headerColor1, inlineClass),
      heading(headerText2, headerColor2, inlineClass),
      heading(headerText3, headerColor3, inlineClass)
    ),
    _react2.default.createElement(
      "div",
      { className: "Banner-subHeader display-inline-block-m font-normal", __self: undefined
      },
      heading(secondaryText1, secondaryColor1),
      heading(secondaryText2, secondaryColor2),
      heading(secondaryText3, secondaryColor3)
    )
  );
};

BannerMessage.displayName = "Banner.Message";

BannerMessage.propTypes = {
  "backgroundColor": _react.PropTypes.string,
  "headerColor1": _react.PropTypes.string,
  "headerColor2": _react.PropTypes.string,
  "headerColor3": _react.PropTypes.string,
  "headerText1": _react.PropTypes.string,
  "headerText2": _react.PropTypes.string,
  "headerText3": _react.PropTypes.string,
  "moduleType": _react.PropTypes.string,
  "secondaryColor1": _react.PropTypes.string,
  "secondaryColor2": _react.PropTypes.string,
  "secondaryColor3": _react.PropTypes.string,
  "secondaryText1": _react.PropTypes.string,
  "secondaryText2": _react.PropTypes.string,
  "secondaryText3": _react.PropTypes.string
};

BannerMessage.defaultProps = {
  "backgroundColor": "",
  "headerColor1": "",
  "headerColor2": "",
  "headerColor3": "",
  "headerText1": "",
  "headerText2": "",
  "headerText3": "",
  "moduleType": _categoryUtils.moduleTypes.VALUE_OF_DAY_MESSAGING,
  "secondaryColor1": "",
  "secondaryColor2": "",
  "secondaryColor3": "",
  "secondaryText1": "",
  "secondaryText2": "",
  "secondaryText3": ""
};

exports.default = BannerMessage;