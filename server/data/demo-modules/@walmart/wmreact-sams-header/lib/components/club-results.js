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

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _wmreactForms = require("@walmart/wmreact-forms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClubResults = function (_React$Component) {
  (0, _inherits3.default)(ClubResults, _React$Component);

  function ClubResults(props) {
    (0, _classCallCheck3.default)(this, ClubResults);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { show: "cr-filter-panel",
      icon: "cr-arrow-down-icon" };
    return _this;
  }

  ClubResults.prototype._toggleServices = function _toggleServices(evt) {
    evt.preventDefault();
    this.setState({
      show: this.state.show === "cr-filter-panel" ? "cr-filter-panel" + " active" : "cr-filter-panel",
      icon: this.state.icon === "cr-arrow-down-icon" ? "cr-arrow-down-icon" + " flip" : "cr-arrow-down-icon"
    });
  };

  ClubResults.prototype._renderfilterOptions = function _renderfilterOptions() {
    var _props = this.props;
    var filterOptions = _props.filterOptions;
    var btnCancel = _props.btnCancel;
    var btnApply = _props.btnApply;
    var onApplyFilterServices = _props.onApplyFilterServices;
    var automation = _props.automation;
    var onSelectFilterServices = _props.onSelectFilterServices;
    var tealeaf = _props.tealeaf;


    var optionService = [];

    filterOptions.items.map(function (option) {

      optionService.push({ label: option, checked: false });

      return optionService;
    });

    return _react2.default.createElement(
      "section",
      { className: "cr-filter-section" },
      _react2.default.createElement(
        "a",
        { className: "refine-service-link", href: "#", onClick: this._toggleServices.bind(this) },
        "Refine by services ",
        _react2.default.createElement(_icon2.default, { name: "caret-down", size: 1 })
      ),
      _react2.default.createElement(
        "div",
        { className: this.state.show },
        _react2.default.createElement(
          "div",
          { className: "cr-filter-options" },
          _react2.default.createElement(_wmreactForms.Options, {
            choices: optionService
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "cr-option-buttons" },
          _react2.default.createElement(
            _button2.default,
            {
              onClick: onSelectFilterServices,
              className: "cr-cancel-button",
              automationId: automation.cancelBtn,
              tealeafId: tealeaf.cancelBtn },
            btnCancel
          ),
          _react2.default.createElement(
            _button2.default,
            {
              onClick: onApplyFilterServices,
              className: "cr-apply-button",
              automationId: automation.applyBtn,
              tealeafId: tealeaf.applyBtn },
            btnApply
          )
        )
      )
    );
  };

  ClubResults.prototype.handleClosePopup = function handleClosePopup(e) {
    e.preventDefault();
    this.setState({ showClubResult: false });
  };

  ClubResults.prototype._renderHeader = function _renderHeader() {
    var _props2 = this.props;
    var _props2$headerInfo = _props2.headerInfo;
    var headerInfo = _props2$headerInfo === undefined ? {} : _props2$headerInfo;
    var onChangeLocation = _props2.onChangeLocation;
    var titleText = _props2.titleText;
    var automation = _props2.automation;
    var tealeaf = _props2.tealeaf;
    var nearbyStores = _props2.nearbyStores;
    var close = _props2.close;

    return _react2.default.createElement(
      "div",
      { className: "cr-header" },
      _react2.default.createElement(
        "h2",
        null,
        titleText
      ),
      _react2.default.createElement(
        "a",
        { href: "#", onClick: close, className: "cr-icon-close" },
        "X"
      ),
      _react2.default.createElement(
        "div",
        { className: "cr-header-section" },
        _react2.default.createElement(
          "h3",
          null,
          nearbyStores.length,
          " clubs near"
        ),
        _react2.default.createElement(
          "label",
          null,
          headerInfo.clubCity
        ),
        _react2.default.createElement(
          "a",
          {
            href: "#",
            className: "cr-change-link",
            onClick: onChangeLocation,
            automationId: automation.changeLocationLink,
            tealeafId: tealeaf.changeLocationLink },
          headerInfo.changeLocation
        )
      )
    );
  };

  ClubResults.prototype._renderYourClubIcon = function _renderYourClubIcon() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_icon2.default, { name: "ok", size: 1 }),
      _react2.default.createElement(
        "span",
        { className: "cr-your-club" },
        "Your club"
      )
    );
  };

  ClubResults.prototype._renderMakeThisYourClubLink = function _renderMakeThisYourClubLink() {
    return _react2.default.createElement(
      "a",
      { href: "#" },
      "Make this your club"
    );
  };

  ClubResults.prototype._renderClubInfo = function _renderClubInfo(nearbyStores, singleLineAddr) {
    var noOfClubs = nearbyStores.length;

    var stores = nearbyStores.map(function (club, i) {
      return _react2.default.createElement(
        "section",
        { key: "cr-club-info-" + i, className: "cr-club-info" },
        _react2.default.createElement(
          "div",
          { className: "cr-location" },
          _react2.default.createElement(
            "label",
            {
              className: "cr-club-name" },
            club.displayName
          ),
          _react2.default.createElement(
            "label",
            { className: "cr-club-address" },
            club.address.address1.trim() + " " + club.address.city.trim() + ",\n           " + club.address.state.trim() + " " + club.address.postalCode.trim()
          )
        ),
        " ",
        _react2.default.createElement(
          "div",
          { className: "cr-distance" },
          _react2.default.createElement(_icon2.default, { name: "angle-right", size: 1 }),
          _react2.default.createElement(
            "label",
            null,
            club.distance,
            " miles"
          ),
          club.clubChoice,
          i === 0 ? this._renderYourClubIcon() : this._renderMakeThisYourClubLink()
        ),
        _react2.default.createElement("hr", { className: "separate-line" })
      );
    }, this);

    var filterOptions = this._renderfilterOptions();

    return _react2.default.createElement(
      "div",
      { className: "club-results" },
      _react2.default.createElement(
        "div",
        { className: "cr-header" },
        _react2.default.createElement(
          "h2",
          null,
          "Club Results"
        ),
        _react2.default.createElement(
          "span",
          { onClick: this.props.close, className: "cr-icon-close" },
          "X"
        ),
        _react2.default.createElement(
          "div",
          { className: "cr-header-section" },
          _react2.default.createElement(
            "h3",
            null,
            noOfClubs,
            " clubs near ",
            singleLineAddr
          )
        ),
        _react2.default.createElement("hr", { className: "separate-line" }),
        filterOptions,
        _react2.default.createElement("hr", { className: "separate-line" }),
        stores
      )
    );
  };

  ClubResults.prototype.render = function render() {
    var _props3 = this.props;
    var _props3$nearbyStores = _props3.nearbyStores;
    var nearbyStores = _props3$nearbyStores === undefined ? [] : _props3$nearbyStores;
    var singleLineAddr = _props3.singleLineAddr;


    var results = null;
    if (nearbyStores.length) {
      results = this._renderClubInfo(nearbyStores, singleLineAddr);
    }

    return _react2.default.createElement(
      "div",
      null,
      results
    );
  };

  ClubResults.prototype.renderClubList = function renderClubList() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "section",
        { className: "club-results" },
        this._renderHeader(),
        _react2.default.createElement("hr", { className: "separate-line" }),
        this._renderfilterOptions(),
        _react2.default.createElement("hr", { className: "separate-line" }),
        this._renderClubInfo()
      )
    );
  };

  return ClubResults;
}(_react2.default.Component);

ClubResults.propTypes = {
  nbrOfStores: _react2.default.PropTypes.number,
  headerInfo: _react2.default.PropTypes.shape({
    clubCity: _react2.default.PropTypes.string,
    changeLocation: _react2.default.PropTypes.string
  }).isRequired,
  onSelectFilterServices: _react2.default.PropTypes.func,
  onCancelFilterServices: _react2.default.PropTypes.func,
  onApplyFilterServices: _react2.default.PropTypes.func,
  onSelectClubChoice: _react2.default.PropTypes.func,
  onChangeLocation: _react2.default.PropTypes.func,
  filterOptions: _react2.default.PropTypes.object,
  stores: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    displayName: _react2.default.PropTypes.string,
    address: _react2.default.PropTypes.shape({
      postalCode: _react2.default.PropTypes.string,
      address1: _react2.default.PropTypes.string,
      city: _react2.default.PropTypes.string,
      state: _react2.default.PropTypes.string
    }).isRequired,
    distance: _react2.default.PropTypes.string,
    clubChoice: _react2.default.PropTypes.node
  })).isRequired,
  btnCancel: _react2.default.PropTypes.string,
  btnApply: _react2.default.PropTypes.string,
  titleText: _react2.default.PropTypes.string,
  //Automation id's
  automation: _react2.default.PropTypes.shape({
    changeLocationLink: _react2.default.PropTypes.string,
    cancelBtn: _react2.default.PropTypes.string,
    applyBtn: _react2.default.PropTypes.string
  }),
  //Tealeaf id's
  tealeaf: _react2.default.PropTypes.shape({
    changeLocationLink: _react2.default.PropTypes.string,
    cancelBtn: _react2.default.PropTypes.string,
    applyBtn: _react2.default.PropTypes.string
  }),
  nearbyStores: _react2.default.PropTypes.array,
  singleLineAddr: _react2.default.PropTypes.string,
  close: _react2.default.PropTypes.func
};

ClubResults.defaultProps = {
  titleText: "Club results",
  nbrOfStores: 20,
  headerInfo: {
    clubCity: "San Francisco, CA",
    changeLocation: "Change location"
  },
  filterOptions: { items: ["Pharmacy", "Business Center", "Cafe", "Tires & Batteries", "Mobile Wireless", "Liquor", "Bakery", "One Hour Photo", "Optical", "Floral", "Gas", "Hearing Center", "Meat"] },
  btnCancel: "Cancel",
  btnApply: "Apply",
  stores: [],
  automation: {
    changeLocationLink: "cr-change-location-link",
    cancelBtn: "cr-cancel-button",
    applyBtn: "cr-apply-button"
  },
  tealeaf: {
    changeLocationLink: "cr-change-location-link",
    cancelBtn: "cr-cancel-button",
    applyBtn: "cr-apply-button"
  }
};

exports.default = ClubResults;