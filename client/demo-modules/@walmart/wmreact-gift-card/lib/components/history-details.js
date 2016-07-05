"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _priceBase = require("@walmart/wmreact-product-offers/lib/components/price/price-base");

var _priceBase2 = _interopRequireDefault(_priceBase);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tranxType = {
  redemption: "Purchase made",
  refund: "Value added",
  create: "Card purchased",
  activate: "Activated",
  cancel: "Value added",
  reload: "Value added"
};

var HistoryDetails = function (_React$Component) {
  (0, _inherits3.default)(HistoryDetails, _React$Component);

  function HistoryDetails() {
    (0, _classCallCheck3.default)(this, HistoryDetails);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  HistoryDetails.prototype._renderHistoryRows = function _renderHistoryRows(tranx, idx) {
    var info = tranx.info === "9115" ? "Walmart.com" : "Walmart store# " + tranx.info;
    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("Grid row", { "even": idx % 2 === 0 }) },
      _react2.default.createElement(
        "div",
        { className: "Grid-col u-size-1-6-m" },
        _react2.default.createElement(
          "span",
          { className: "font-semibold hide-content-l" },
          "Date: "
        ),
        _react2.default.createElement(
          "span",
          null,
          _moment2.default.utc(tranx.date, "x").format("MM/DD/YYYY")
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "Grid-col u-size-2-6-m" },
        _react2.default.createElement(
          "span",
          { className: "font-semibold hide-content-l" },
          "Description: "
        ),
        _react2.default.createElement(
          "span",
          null,
          tranxType[tranx.type] + " : " + info
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "Grid-col u-size-1-4-m" },
        _react2.default.createElement(
          "span",
          { className: "font-semibold hide-content-l" },
          "Transaction: "
        ),
        _react2.default.createElement(
          "span",
          null,
          _react2.default.createElement(_priceBase2.default, { className: "pull-right-l balance", price: tranx.amount })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "Grid-col u-size-1-5-m" },
        _react2.default.createElement(
          "span",
          { className: "font-semibold hide-content-l" },
          "Balance: "
        ),
        _react2.default.createElement(
          "span",
          null,
          _react2.default.createElement(_priceBase2.default, { className: "pull-right-l balance", price: tranx.balance })
        )
      )
    );
  };

  HistoryDetails.prototype._closeModal = function _closeModal() {
    this.props.onClose();
  };

  HistoryDetails.prototype.render = function render() {
    var _this2 = this;

    var isZeroBalance = this.props.balance === 0;
    return _react2.default.createElement(
      "div",
      { ref: "history-modal-gc" },
      _react2.default.createElement(
        "div",
        { className: "hide-content-l m-header-gc" },
        _react2.default.createElement(
          _button2.default,
          {
            fakelink: true,
            automationId: "close-gift-card-history",
            onClick: function onClick() {
              return _this2._closeModal();
            } },
          _react2.default.createElement(
            "span",
            null,
            "Back"
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "modal-wrapper-gc" },
        _react2.default.createElement(
          _heading2.default.H2,
          null,
          "Gift card history"
        ),
        _react2.default.createElement(
          "div",
          { className: "gift-card-info" },
          _react2.default.createElement(
            "div",
            { className: "gift-card-fullname" },
            this.props.label
          ),
          _react2.default.createElement(
            _layout2.default,
            { medium: 2, "x-small": 1, padding: true },
            _react2.default.createElement(
              "div",
              { className: "gift-card-info" },
              _react2.default.createElement(
                "span",
                { className: "font-semibold" },
                "Ending in: "
              ),
              this.props.lastFour
            ),
            _react2.default.createElement(
              "div",
              { className: (0, _classnames2.default)("pull-right-l gift-card-info", { "zero-balance": isZeroBalance }) },
              _react2.default.createElement(
                "span",
                { className: "font-semibold" },
                "Balance: "
              ),
              _react2.default.createElement(_priceBase2.default, { className: (0, _classnames2.default)({
                  "balance": !isZeroBalance
                }), price: this.props.balance })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "Grid" },
          _react2.default.createElement(
            "div",
            { className: "history-grid-header hide-content-max-m" },
            _react2.default.createElement(
              "div",
              { className: "Grid-col u-size-1-6-m" },
              _react2.default.createElement(
                "span",
                { className: "font-semibold" },
                "Date"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "Grid-col u-size-2-6-m" },
              _react2.default.createElement(
                "span",
                { className: "font-semibold" },
                "Description"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "Grid-col u-size-1-4-m" },
              _react2.default.createElement(
                "span",
                { className: "font-semibold pull-right" },
                "Transaction"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "Grid-col u-size-1-5-m" },
              _react2.default.createElement(
                "span",
                { className: "font-semibold pull-right" },
                "Balance"
              )
            )
          ),
          this.props.history.map(function (t, idx) {
            return _this2._renderHistoryRows(t, idx);
          })
        )
      )
    );
  };

  return HistoryDetails;
}(_react2.default.Component);

HistoryDetails.propTypes = {
  label: _react2.default.PropTypes.string.isRequired,
  lastFour: _react2.default.PropTypes.string.isRequired,
  balance: _react2.default.PropTypes.number.isRequired,
  history: _react2.default.PropTypes.array,
  currency: _react2.default.PropTypes.string.isRequired,
  onClose: _react2.default.PropTypes.func
};

exports.default = HistoryDetails;