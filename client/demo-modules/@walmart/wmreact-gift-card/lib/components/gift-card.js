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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _stack = require("@walmart/wmreact-layout/lib/components/stack");

var _stack2 = _interopRequireDefault(_stack);

var _spinner = require("@walmart/wmreact-containers/lib/components/spinner");

var _spinner2 = _interopRequireDefault(_spinner);

var _modal = require("@walmart/wmreact-containers/lib/components/modal");

var _modal2 = _interopRequireDefault(_modal);

var _priceBase = require("@walmart/wmreact-product-offers/lib/components/price/price-base");

var _priceBase2 = _interopRequireDefault(_priceBase);

var _historyDetails = require("./history-details");

var _historyDetails2 = _interopRequireDefault(_historyDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GiftCard = function (_React$Component) {
  (0, _inherits3.default)(GiftCard, _React$Component);

  function GiftCard() {
    (0, _classCallCheck3.default)(this, GiftCard);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  GiftCard.prototype.componentDidUpdate = function componentDidUpdate(_ref) {
    var historyLoaded = _ref.historyLoaded;

    if (!historyLoaded && this.props.historyLoaded) {
      this.refs.modal.show();
      this.props.onShowGiftCardHistory();
    }
  };

  GiftCard.prototype._toggleDeleteMode = function _toggleDeleteMode() {
    var _props = this.props;
    var onDeleteModeChanged = _props.onDeleteModeChanged;
    var onRequestDeleteMode = _props.onRequestDeleteMode;


    onDeleteModeChanged(!this.props.deleteMode);
    onRequestDeleteMode(!this.props.deleteMode);
  };

  GiftCard.prototype._delete = function _delete() {
    this.props.onDelete();
  };

  GiftCard.prototype._hasHistory = function _hasHistory() {
    return this.props.history && this.props.history.length > 0;
  };

  GiftCard.prototype.renderHistoryModal = function renderHistoryModal() {
    var _this2 = this;

    return this._hasHistory() && _react2.default.createElement(
      _modal2.default,
      { ref: "modal", fixed: true, className: "history-modal-gc" },
      _react2.default.createElement(_historyDetails2.default, (0, _extends3.default)({}, this.props, { onClose: function onClose() {
          _this2.refs.modal.hide();
        } }))
    );
  };

  GiftCard.prototype._renderCommonInformation = function _renderCommonInformation() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "div",
        {
          className: "gift-card-fullname",
          "data-automation-id": "gift-card-fullname-" + this.props.index },
        this.props.label
      ),
      _react2.default.createElement(
        "div",
        {
          className: "gift-card-last-four",
          "data-automation-id": "gift-card-last-four-label-" + this.props.index },
        "Gift card ending",
        _react2.default.createElement("br", null),
        _react2.default.createElement(
          "span",
          null,
          "in "
        ),
        _react2.default.createElement(
          "span",
          {
            className: "font-semibold",
            "data-automation-id": "gift-card-last-four-" + this.props.index },
          this.props.lastFour
        )
      )
    );
  };

  GiftCard.prototype._deleteConfirmation = function _deleteConfirmation() {
    var _this3 = this;

    var _props2 = this.props;
    var tealeafIds = _props2.tealeafIds;
    var tealeafIndex = _props2.tealeafIndex;
    var loading = _props2.loading;

    var className = (0, _classnames2.default)("gift-card js-gift-card-tile confirm-delete", this.props.className);

    return _react2.default.createElement(
      "div",
      { className: className },
      "Are you sure you want to delete this gift card?",
      this._renderCommonInformation(),
      this._renderBalance(),
      _react2.default.createElement(
        "div",
        { className: "gift-card-actions" },
        _react2.default.createElement(
          _button2.default,
          {
            disabled: loading,
            spinner: loading,
            mini: true,
            automationId: "submit-delete-gift-card-" + this.props.index,
            tealeafId: "" + tealeafIds.deleteConfirmDelete + tealeafIndex,
            onClick: function onClick() {
              return _this3._delete();
            },
            ref: "confirm-delete" },
          "Delete"
        ),
        _react2.default.createElement(
          _button2.default,
          {
            fakelink: true,
            disabled: loading,
            automationId: "cancel-delete-gift-card-" + this.props.index,
            tealeafId: "" + tealeafIds.deleteConfirmCancel + tealeafIndex,
            onClick: function onClick() {
              return _this3._toggleDeleteMode();
            } },
          "Cancel"
        )
      )
    );
  };

  GiftCard.prototype._renderActions = function _renderActions() {
    var _this4 = this;

    var _props3 = this.props;
    var tealeafIds = _props3.tealeafIds;
    var tealeafIndex = _props3.tealeafIndex;

    return _react2.default.createElement(
      "div",
      { className: "pull-right m-margin-top" },
      this.props.onDelete && _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          automationId: "delete-gift-card-" + this.props.index,
          tealeafId: "" + tealeafIds.delete + tealeafIndex,
          onClick: function onClick() {
            return _this4._toggleDeleteMode();
          },
          ref: "delete-action" },
        "Delete"
      )
    );
  };

  GiftCard.prototype._renderBalance = function _renderBalance() {
    return _react2.default.createElement(
      "div",
      {
        "data-automation-id": "gift-card-balance-label-" + this.props.index,
        className: (0, _classnames2.default)({ "zero-balance": this.props.balance === 0 }) },
      _react2.default.createElement(
        "span",
        null,
        "Balance "
      ),
      _react2.default.createElement(_priceBase2.default, { price: this.props.balance,
        className: "balance",
        "data-automation-id": "gift-card-balance-" + this.props.index })
    );
  };

  GiftCard.prototype._showModal = function _showModal() {
    if (!this._hasHistory()) {
      this.props.onFetchCardHistory();
    } else {
      this.refs.modal.show();
    }
  };

  GiftCard.prototype._viewMode = function _viewMode() {
    var _this5 = this;

    /*eslint-disable max-len*/
    var imgUri = "//i5.walmartimages.com/dfw/63fd9f59-1dc2/k2-_11ab371b-85f0-4439-a979-9d401ed07429.v1.png";
    var _props4 = this.props;
    var onFetchCardHistory = _props4.onFetchCardHistory;
    var loading = _props4.loading;
    /*eslint-enable max-len*/

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("gift-card js-gift-card-tile", this.props.className) },
      loading && _react2.default.createElement(_spinner2.default, { loading: true }),
      this.renderHistoryModal(),
      _react2.default.createElement(_image2.default, {
        alt: "Gift card",
        className: "payment-option",
        src: imgUri }),
      _react2.default.createElement(
        "div",
        { className: "card-body" },
        this._renderCommonInformation(),
        this.props.showBalance && this._renderBalance(),
        this.props.children,
        _react2.default.createElement(
          _stack2.default,
          null,
          _react2.default.createElement(
            _stack2.default.Fill,
            null,
            onFetchCardHistory && _react2.default.createElement(
              "div",
              { className: "gift-card-history" },
              _react2.default.createElement(
                _button2.default,
                {
                  fakelink: true,
                  automationId: "open-gift-card-history",
                  onClick: function onClick() {
                    return _this5._showModal();
                  },
                  ref: "view-history" },
                "View card history"
              )
            )
          ),
          _react2.default.createElement(
            _stack2.default.Fit,
            null,
            this._renderActions()
          )
        )
      )
    );
  };

  GiftCard.prototype.render = function render() {
    return !this.props.loading && this.props.deleteMode ? this._deleteConfirmation() : this._viewMode();
  };

  return GiftCard;
}(_react2.default.Component);

GiftCard.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,
  index: _react2.default.PropTypes.number.isRequired,
  label: _react2.default.PropTypes.string.isRequired,
  lastFour: _react2.default.PropTypes.string.isRequired,
  balance: _react2.default.PropTypes.number.isRequired,
  currency: _react2.default.PropTypes.string.isRequired,
  className: _react2.default.PropTypes.string,
  history: _react2.default.PropTypes.array,
  historyLoaded: _react2.default.PropTypes.bool,
  loading: _react2.default.PropTypes.bool,
  onDelete: _react2.default.PropTypes.func,
  onFetchCardHistory: _react2.default.PropTypes.func,
  onShowGiftCardHistory: _react2.default.PropTypes.func.isRequired,
  /* deprecated, this state should be used from the reducer instead */
  onDeleteModeChanged: _react2.default.PropTypes.func,
  onRequestDeleteMode: _react2.default.PropTypes.func,
  showBalance: _react2.default.PropTypes.bool,
  tealeafIndex: _react2.default.PropTypes.number,
  tealeafIds: _react2.default.PropTypes.shape({
    delete: _react2.default.PropTypes.string,
    deleteConfirmDelete: _react2.default.PropTypes.string,
    deleteConfirmCancel: _react2.default.PropTypes.string
  }),
  deleteMode: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.node
};

GiftCard.defaultProps = {
  tealeafIds: {
    delete: "delete",
    deleteConfirmDelete: "confirm-delete",
    deleteConfirmCancel: "confirm-cancel"
  },
  onDeleteModeChanged: function onDeleteModeChanged() {},
  onRequestDeleteMode: function onRequestDeleteMode() {},
  showBalance: true
};
exports.default = GiftCard;