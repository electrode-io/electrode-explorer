"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _zeroResults = require("./zero-results");

var _zeroResults2 = _interopRequireDefault(_zeroResults);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZeroResultsNoMatch = function ZeroResultsNoMatch(_ref) {
  var searchQuery = _ref.searchQuery;
  var postalCode = _ref.postalCode;
  return _react2.default.createElement(
    _zeroResults2.default,
    null,
    _react2.default.createElement(
      "strong",
      null,
      "Sorry, no products matched \"",
      searchQuery,
      "\""
    ),
    _react2.default.createElement(
      "ul",
      null,
      _react2.default.createElement(
        "li",
        null,
        "Check your spelling"
      ),
      _react2.default.createElement(
        "li",
        null,
        "Use different keywords and try again"
      ),
      _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement(
          _link2.default,
          { href: "/store/finder?location=" + postalCode },
          "Contact your local store"
        )
      )
    )
  );
};

ZeroResultsNoMatch.displayName = "ZeroResults.NoMatch";

ZeroResultsNoMatch.propTypes = {
  searchQuery: _react2.default.PropTypes.string.isRequired,
  postalCode: _react2.default.PropTypes.string
};

ZeroResultsNoMatch.defaultProps = {
  searchQuery: "",
  postalCode: ""
};

exports.default = ZeroResultsNoMatch;