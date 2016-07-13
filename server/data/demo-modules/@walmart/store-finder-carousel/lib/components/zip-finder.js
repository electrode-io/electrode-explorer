"use strict";

exports.__esModule = true;

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _field = require("@walmart/wmreact-forms/lib/components/field");

var _field2 = _interopRequireDefault(_field);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("../common/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZipFinder = function ZipFinder(_ref) {
  var zip = _ref.zip;
  var onSearch = _ref.onSearch;
  var toggleSearching = _ref.toggleSearching;
  var isSearching = _ref.isSearching;

  var zipInputNode = void 0;

  var _onSearch = function _onSearch(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    var newZip = zipInputNode.getValue();
    onSearch(newZip);
  };

  // --------------------------------------------------------------------------

  var _renderZip = function _renderZip() {
    return _react2.default.createElement(
      _button2.default,
      {
        fakelink: true,
        onClick: toggleSearching,
        className: "StoreCarousel-toggleZipSearch"
      },
      zip
    );
  };

  var _renderSearchUI = function _renderSearchUI() {
    return _react2.default.createElement(
      "form",
      { onSubmit: _onSearch },
      _react2.default.createElement(_field2.default, {
        showLabel: false,
        ref: function ref(input) {
          zipInputNode = input;
        },
        defaultValue: zip
      }),
      _react2.default.createElement(
        _button2.default,
        {
          className: "StoreCarousel-searchZip",
          onClick: _onSearch
        },
        "Find"
      )
    );
  };

  // --------------------------------------------------------------------------

  return _react2.default.createElement(
    "div",
    { className: "StoreCarousel-zipControls pull-left" },
    "Stores near ",
    isSearching ? _renderSearchUI() : _renderZip()
  );
};

ZipFinder.propTypes = {
  toggleSearching: _react.PropTypes.func,
  isSearching: _react.PropTypes.bool,
  zip: _react.PropTypes.string,
  onSearch: _react.PropTypes.func
};

ZipFinder.defaultProps = {
  toggleSearching: (0, _utils.noop)(),
  isSearching: false,
  zip: "",
  onSearch: (0, _utils.noop)()
};

exports.default = ZipFinder;