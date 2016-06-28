"use strict";

exports.__esModule = true;
exports.CustomHtml = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _frame = require("./frame");

var _frame2 = _interopRequireDefault(_frame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The custom html merchant module component.
 For example this is how we use this component.
 ```jsx
 <CustomHtml
   fontLib={fontLib}
   MERCH_RULE_ID={MERCH_RULE_ID}
   MERCH_RULE_CONTENT_HEIGHT={MERCH_RULE_CONTENT_HEIGHT}
   HTML={HTML}
 />
 ```
 @import {CustomHtml}
 @component CustomHtml
 @playground
CustomHtml
 ```
 <CustomHtml
   fontLib={fontLib}
   MERCH_RULE_ID={MERCH_RULE_ID}
   MERCH_RULE_CONTENT_HEIGHT={MERCH_RULE_CONTENT_HEIGHT}
   HTML={HTML}
 />
 ```
 */

var CustomHtml = exports.CustomHtml = function CustomHtml(_ref) {
  var fontLib = _ref.fontLib;
  var MERCH_RULE_ID = _ref.MERCH_RULE_ID;
  var MERCH_RULE_CONTENT_HEIGHT = _ref.MERCH_RULE_CONTENT_HEIGHT;
  var HTML = _ref.HTML;
  // eslint-disable max-params
  return _react2.default.createElement(
    "div",
    { className: "merchant-module-container" },
    _react2.default.createElement(
      "div",
      { className: "merchant-module merchant-module-html clearfix width-full",
        "data-rule-id": MERCH_RULE_ID },
      _react2.default.createElement(
        _frame2.default,
        { height: MERCH_RULE_CONTENT_HEIGHT, styleUrl: fontLib },
        _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: HTML } })
      )
    )
  );
};

CustomHtml.displayName = "MerchantModuleCustomHtml";

CustomHtml.defaultProps = {
  fontLib: "",
  MERCH_RULE_ID: "",
  MERCH_RULE_CONTENT_HEIGHT: "",
  HTML: ""
};

CustomHtml.propTypes = {
  fontLib: _react2.default.PropTypes.string,
  MERCH_RULE_ID: _react2.default.PropTypes.string,
  MERCH_RULE_CONTENT_HEIGHT: _react2.default.PropTypes.string,
  HTML: _react2.default.PropTypes.string
};