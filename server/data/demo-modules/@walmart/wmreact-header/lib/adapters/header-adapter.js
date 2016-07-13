"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _storesAdapter = require("./stores-adapter");

var _storesAdapter2 = _interopRequireDefault(_storesAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storesAdapter = new _storesAdapter2.default();

var HeaderAdapter = function () {
  function HeaderAdapter() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? { header: {} } : arguments[0];
    (0, _classCallCheck3.default)(this, HeaderAdapter);

    this.isMobile = state.isMobile;
    this.isBot = state.isBot;
    this.header = state.header;
    this._adaptStores = this._adaptStores.bind(this);
  }

  HeaderAdapter.prototype.adapt = function adapt() {
    var isMobile = this.isMobile;
    var isBot = this.isBot;
    var _header = this.header;
    var storeFinder = _header.storeFinder;
    var rest = (0, _objectWithoutProperties3.default)(_header, ["storeFinder"]);

    var stores = storeFinder && this._adaptStores(storeFinder.response);
    var loading = (0, _get2.default)(storeFinder, "loading", false);
    var didInvalidate = (0, _get2.default)(storeFinder, "didInvalidate", false);
    return (0, _extends3.default)({
      isMobile: isMobile,
      isBot: isBot,
      storeFinderResponse: {
        stores: stores,
        loading: loading,
        didInvalidate: didInvalidate
      }
    }, rest);
  };

  HeaderAdapter.prototype._adaptStores = function _adaptStores(storesData) {
    return storesAdapter.adapt(storesData);
  };

  return HeaderAdapter;
}();

exports.default = HeaderAdapter;