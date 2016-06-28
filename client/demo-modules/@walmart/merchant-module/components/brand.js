"use strict";

exports.__esModule = true;
exports.Brand = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The brand merchant module component.
 For example this is how we use this component.
 ```jsx
 <Brand
   IMAGE={IMAGE}
   IMAGE_URL={IMAGE_URL}
   MERCH_RULE_TITLE={MERCH_RULE_TITLE}
   IMAGE_HEIGHT={IMAGE_HEIGHT}
 />
 ```
 @import {Brand}
 @component Brand
 @playground
brand
 ```
 <Brand
   IMAGE={IMAGE}
   IMAGE_URL={IMAGE_URL}
   MERCH_RULE_TITLE={MERCH_RULE_TITLE}
   IMAGE_HEIGHT={IMAGE_HEIGHT}
 />
 ```
 */

var Brand = exports.Brand = function Brand(_ref) {
  var IMAGE = _ref.IMAGE;
  var IMAGE_URL = _ref.IMAGE_URL;
  var MERCH_RULE_TITLE = _ref.MERCH_RULE_TITLE;
  var IMAGE_HEIGHT = _ref.IMAGE_HEIGHT;
  // eslint-disable max-params
  return _react2.default.createElement(
    "div",
    { className: "merchant-module-container" },
    _react2.default.createElement(
      "div",
      { className: "merchant-module merchant-module-brand" },
      IMAGE_URL ? _react2.default.createElement(
        "a",
        { href: IMAGE_URL },
        _react2.default.createElement("img", { alt: MERCH_RULE_TITLE, height: IMAGE_HEIGHT, src: IMAGE })
      ) : _react2.default.createElement("img", { alt: MERCH_RULE_TITLE, height: IMAGE_HEIGHT, src: IMAGE })
    )
  );
};

Brand.displayName = "MerchantModuleBrand";

Brand.defaultProps = {
  IMAGE: "",
  MERCH_RULE_TITLE: ""
};

Brand.propTypes = {
  IMAGE: _react2.default.PropTypes.string,
  IMAGE_URL: _react2.default.PropTypes.string,
  MERCH_RULE_TITLE: _react2.default.PropTypes.string,
  IMAGE_HEIGHT: _react2.default.PropTypes.string
};