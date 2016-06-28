"use strict";

exports.__esModule = true;
exports.TopNonItem = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The top non item merchant module component.
 For example this is how we use this component.
 ```jsx
 <TopNonItem
   size={"60"}
   TEXT={TEXT}
   URL={URL}
   TITLE={TITLE}
   IMAGE={IMAGE}
   URL2={URL2}
   TITLE2={TITLE2}
   URL3={URL3}
   TITLE3={TITLE3}
 />
 ```
 @import {TopNonItem}
 @component TopNonItem
 @playground
TopNonItem
 ```
 <TopNonItem
   size={"60"}
   TEXT={TEXT}
   URL={URL}
   TITLE={TITLE}
   IMAGE={IMAGE}
   URL2={URL2}
   TITLE2={TITLE2}
   URL3={URL3}
   TITLE3={TITLE3}
 />
 ```
 */

var TopNonItem = exports.TopNonItem = function TopNonItem(_ref) {
  var size = _ref.size;
  var TEXT = _ref.TEXT;
  var URL = _ref.URL;
  var TITLE = _ref.TITLE;
  var IMAGE = _ref.IMAGE;
  var URL2 = _ref.URL2;
  var TITLE2 = _ref.TITLE2;
  var URL3 = _ref.URL3;
  var TITLE3 = _ref.TITLE3;
  // eslint-disable max-params
  return _react2.default.createElement(
    "div",
    { className: "merchant-module-container" },
    _react2.default.createElement(
      "div",
      { className: "merchant-module merchant-module-top-non-item arrange" },
      IMAGE ? _react2.default.createElement(
        "div",
        { className: "arrange-fit arrange-media-object top-non-item-image" },
        _react2.default.createElement(
          "a",
          { href: URL },
          _react2.default.createElement("img", { alt: TITLE, src: IMAGE, width: size, height: size })
        )
      ) : null,
      _react2.default.createElement(
        "div",
        { className: "top-non-item-content" },
        _react2.default.createElement(
          "div",
          { className: "top-non-item-title font-semibold" },
          TITLE ? _react2.default.createElement(
            "a",
            { href: URL },
            TITLE
          ) : null,
          TITLE2 ? _react2.default.createElement(
            "span",
            null,
            "and ",
            _react2.default.createElement(
              "a",
              { href: URL2 },
              TITLE2
            )
          ) : null,
          TITLE3 ? _react2.default.createElement(
            "span",
            null,
            "and ",
            _react2.default.createElement(
              "a",
              { href: URL3 },
              TITLE3
            )
          ) : null
        ),
        _react2.default.createElement(
          "div",
          { className: "top-non-item-text" },
          TEXT
        )
      )
    )
  );
};

TopNonItem.displayName = "MerchantModuleTopNonItem";

TopNonItem.defaultProps = {
  TEXT: "",
  URL: "",
  TITLE: "",
  IMAGE: "",
  URL2: "",
  TITLE2: "",
  URL3: "",
  TITLE3: ""
};

TopNonItem.propTypes = {
  size: _react2.default.PropTypes.string,
  TEXT: _react2.default.PropTypes.string,
  URL: _react2.default.PropTypes.string,
  TITLE: _react2.default.PropTypes.string,
  IMAGE: _react2.default.PropTypes.string,
  URL2: _react2.default.PropTypes.string,
  TITLE2: _react2.default.PropTypes.string,
  URL3: _react2.default.PropTypes.string,
  TITLE3: _react2.default.PropTypes.string
};