"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays the mobile version of typeahead

@import {TypeaheadMobile}
@playground
TypeaheadMobile
```
<TypeaheadMobile  />
/>
```
*/

var TypeaheadMobile = function TypeaheadMobile() {
  return _react2.default.createElement(
    "div",
    { className: "mweb-Typeahead hide-content" },
    _react2.default.createElement(
      "form",
      { className: "mweb-Typeahead-form", name: "typeahead",
        action: "/search/", method: "get", role: "search" },
      _react2.default.createElement(
        "div",
        { className: "mweb-Typeahead-searchbar arrange u-bgBlue" },
        _react2.default.createElement(
          "div",
          { className: "arrange-fill pos-relative" },
          _react2.default.createElement("input", { className: "mweb-Typeahead-input",
            type: "text", name: "query", placeholder: "Search", autoComplete: "off",
            autoCorrect: "off", autoCapitalize: "off", accessKey: "s",
            role: "combobox", "aria-haspopup": "true" }),
          _react2.default.createElement(
            _button2.default,
            (0, _extends3.default)({ className: "mweb-Typeahead-clear btn-link absolute-center-v",
              type: "reset"
            }, (0, _automationIdUtils.getDataAutomationIdPair)("mweb-typeahead-clear", "")),
            _react2.default.createElement(_icon2.default, { name: "add" }),
            _react2.default.createElement(
              "span",
              { className: "visuallyhidden" },
              "Clear search field"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "arrange-fit" },
          _react2.default.createElement(
            _button2.default,
            (0, _extends3.default)({
              className: "mweb-Typeahead-submit",
              type: "submit"
            }, (0, _automationIdUtils.getDataAutomationIdPair)("mweb-typeahead-submit", "")),
            _react2.default.createElement(_icon2.default, { name: "search" }),
            _react2.default.createElement(
              "span",
              { className: "visuallyhidden" },
              "Search"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "arrange-fit" },
          _react2.default.createElement(
            _button2.default,
            (0, _extends3.default)({ className: "mweb-Typeahead-cancel btn-fake-link u-textWhite",
              type: "button"
            }, (0, _automationIdUtils.getDataAutomationIdPair)("mweb-typeahead-cancel", "")),
            "Cancel"
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "mweb-Typeahead-list" },
        _react2.default.createElement(
          "div",
          { className: "hide-content mweb-Typeahead-recent" },
          _react2.default.createElement(
            "h6",
            { className: "mweb-Typeahead-listHead font-normal no-margin" },
            "Recent searches",
            _react2.default.createElement(
              "span",
              { className: "mweb-Typeahead-recentClear pull-right u-textBlue" },
              "Clear All"
            )
          ),
          _react2.default.createElement("div", { className: "mweb-Typeahead-listHolder" })
        ),
        _react2.default.createElement(
          "div",
          { className: "hide-content mweb-Typeahead-trend" },
          _react2.default.createElement(
            "h6",
            { className: "mweb-Typeahead-listHead font-normal no-margin" },
            "Trending searches"
          ),
          _react2.default.createElement("div", { className: "mweb-Typeahead-listHolder" })
        ),
        _react2.default.createElement("ul", { className: "mweb-Typeahead-suggest block-list" })
      )
    )
  );
};

TypeaheadMobile.displayName = "TypeaheadMobile";

exports.default = TypeaheadMobile;