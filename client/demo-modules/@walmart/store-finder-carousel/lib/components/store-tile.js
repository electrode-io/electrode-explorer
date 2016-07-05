"use strict";

exports.__esModule = true;

var _copy = require("@walmart/wmreact-base/lib/components/copy");

var _copy2 = _interopRequireDefault(_copy);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("../common/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoreTile = function StoreTile(_ref) {
  var store = _ref.store;
  var shouldLink = _ref.shouldLink;
  var isMyStore = _ref.isMyStore;
  var onClick = _ref.onClick;
  var id = store.id;
  var address = store.address;


  var _onClick = function _onClick(storeId, ev) {
    ev.preventDefault();
    ev.stopPropagation();

    onClick(storeId);
  };

  // --------------------------------------------------------------------------

  var _renderTileBody = function _renderTileBody() {
    return _react2.default.createElement(
      "div",
      { className: "StoreCarousel-addressBlock" },
      _react2.default.createElement(
        _copy2.default,
        { className: "StoreCarousel-storeName StoreCarousel--truncated" },
        isMyStore && _react2.default.createElement(_icon2.default, { size: 14, name: "star" }),
        address.city
      ),
      _react2.default.createElement(
        "div",
        { className: "StoreCarousel-storeAddress StoreCarousel--truncated" },
        address.address1
      )
    );
  };

  return _react2.default.createElement(
    "div",
    { className: "StoreCarousel-tile" },
    shouldLink ? _react2.default.createElement(
      _link2.default,
      { href: "/store/" + id, onClick: _onClick.bind(null, id) },
      _renderTileBody()
    ) : _renderTileBody()
  );
};

StoreTile.propTypes = {
  onClick: _react.PropTypes.func,
  shouldLink: _react.PropTypes.bool,
  isMyStore: _react.PropTypes.bool,
  store: _react.PropTypes.shape({
    id: _react.PropTypes.number,
    address: _react.PropTypes.shape({
      city: _react.PropTypes.string,
      address1: _react.PropTypes.string
    })
  }).isRequired
};

StoreTile.defaultProps = {
  onClick: (0, _utils.noop)(),
  shouldLink: true,
  isMyStore: false
};

exports.default = StoreTile;