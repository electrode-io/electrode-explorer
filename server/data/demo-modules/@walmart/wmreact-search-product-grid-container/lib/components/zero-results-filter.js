"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _zeroResults = require("./zero-results");

var _zeroResults2 = _interopRequireDefault(_zeroResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderFilterMessage = function renderFilterMessage(priceFilter, storeFilter) {
  var message = "";
  /* eslint-disable no-lonely-if */
  if (priceFilter && storeFilter) {
    message = "Price and Store Filter";
  } else {
    if (priceFilter) {
      message = "Price Filter";
    } else if (storeFilter) {
      message = "Store Filter";
    }
  }
  /* eslint-enable no-lonely-if */
  return message;
};

var ZeroResultsFilter = function ZeroResultsFilter(_ref) {
  var searchQuery = _ref.searchQuery;
  var priceFilter = _ref.priceFilter;
  var storeFilter = _ref.storeFilter;

  var filterMessage = renderFilterMessage(priceFilter, storeFilter);

  return _react2.default.createElement(
    _zeroResults2.default,
    null,
    _react2.default.createElement(
      "span",
      null,
      "We didn't find any results ",
      searchQuery && "for <strong> \"" + searchQuery + "\" </strong> ",
      "with the ",
      filterMessage + " ",
      "you selected. Showing results without the",
      _react2.default.createElement(
        "strong",
        null,
        " ",
        filterMessage,
        "."
      )
    )
  );
};

ZeroResultsFilter.displayName = "ZeroResults.Filter";

ZeroResultsFilter.propTypes = {
  searchQuery: _react2.default.PropTypes.string.isRequired,
  priceFilter: _react2.default.PropTypes.bool,
  storeFilter: _react2.default.PropTypes.bool
};

ZeroResultsFilter.defaultProps = {
  searchQuery: "",
  priceFilter: false,
  storeFilter: false
};

exports.default = ZeroResultsFilter;