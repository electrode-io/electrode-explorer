"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _searchbarWrapper = require("@walmart/wmreact-header/lib/components/searchbar-wrapper");

var _searchbarWrapper2 = _interopRequireDefault(_searchbarWrapper);

var _arrange = require("@walmart/wmreact-layout/lib/components/arrange");

var _arrange2 = _interopRequireDefault(_arrange);

var _tempoCore = require("@walmart/wmreact-header/lib/tempo-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SamsSearch = function (_SearchbarWrapper) {
  (0, _inherits3.default)(SamsSearch, _SearchbarWrapper);

  function SamsSearch(props) {
    (0, _classCallCheck3.default)(this, SamsSearch);
    return (0, _possibleConstructorReturn3.default)(this, _SearchbarWrapper.call(this, props));
  }

  SamsSearch.prototype.render = function render() {
    var open = this.state.open;


    return _react2.default.createElement(
      _arrange2.default.Fill,
      { className: this._getClassName(open) },
      _react2.default.createElement(_tempoCore.TempoZone, (0, _extends3.default)({
        zoneName: "search_zone"
      }, this.props))
    );
  };

  return SamsSearch;
}(_searchbarWrapper2.default);

exports.default = SamsSearch;