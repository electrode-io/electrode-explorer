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

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _separator = require("@walmart/wmreact-containers/lib/components/separator");

var _separator2 = _interopRequireDefault(_separator);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoreFinderPanel = function (_React$Component) {
  (0, _inherits3.default)(StoreFinderPanel, _React$Component);

  function StoreFinderPanel(props) {
    (0, _classCallCheck3.default)(this, StoreFinderPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.tempoZone = "club_locator_zone";
    return _this;
  }

  StoreFinderPanel.prototype.renderCurrentClub = function renderCurrentClub() {
    var preferredStores = this.props.preferredStores;


    var preferredStore = preferredStores[0];

    return _react2.default.createElement(
      "div",
      { className: "myclub-current" },
      _react2.default.createElement(
        "div",
        { className: "myclub-title" },
        preferredStore.displayName
      ),
      _react2.default.createElement(
        "div",
        { className: "myclub-style" },
        preferredStore.operationalHours.hours
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "div",
        { className: "myclub-style" },
        preferredStore.phone,
        _react2.default.createElement("br", null),
        " ",
        preferredStore.address.address1,
        _react2.default.createElement("br", null),
        " ",
        (0, _classnames2.default)(preferredStore.address.city, ", ", preferredStore.address.state, " ", preferredStore.address.postalCode)
      ),
      _react2.default.createElement(
        "div",
        { className: "myclub-footer" },
        _react2.default.createElement(
          "span",
          null,
          _react2.default.createElement(
            _link2.default,
            {
              className: "myclub-footer-link",
              href: (0, _classnames2.default)("/club/info/", preferredStore.id) },
            "Club info"
          )
        ),
        "  |  ",
        _react2.default.createElement(
          "span",
          null,
          _react2.default.createElement(
            _link2.default,
            {
              className: "myclub-footer-link",
              href: (0, _classnames2.default)("/club/directions/", preferredStore.id) },
            "Get directions"
          )
        )
      )
    );
  };

  StoreFinderPanel.prototype.renderNearbyClubsTitle = function renderNearbyClubsTitle(postalCode) {
    return _react2.default.createElement(
      "div",
      { className: "Grid nearby-club-title" },
      _react2.default.createElement(
        "span",
        { className: "Grid-col u-size-1-3 club-near-zip" },
        "Club near ",
        postalCode
      ),
      _react2.default.createElement("span", { className: "Grid-col u-size-1-3" }),
      _react2.default.createElement(
        "span",
        { className: "Grid-col u-size-1-3" },
        _react2.default.createElement(
          _link2.default,
          { className: "find-other-clubs", href: "#" },
          "Find other clubs"
        )
      )
    );
  };

  StoreFinderPanel.prototype.renderNearbyClubs = function renderNearbyClubs(nearbyStores, postalCode) {
    return _react2.default.createElement(
      "div",
      { className: "nearby-clubs" },
      this.renderNearbyClubsTitle(postalCode),
      nearbyStores.map(function (nearbyClub) {
        return _react2.default.createElement(
          "div",
          { className: "nearby-club-line-item" },
          _react2.default.createElement(_separator2.default, null),
          _react2.default.createElement(
            "div",
            { className: "Grid" },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "span",
                { className: "Grid-col u-size-1-2 nearby_club_title_ele_left" },
                nearbyClub.displayName
              ),
              _react2.default.createElement("span", { className: "Grid-col u-size-1-6" }),
              _react2.default.createElement(
                "span",
                { className: "Grid-col u-size-2-6 nearby_ele_right" },
                _react2.default.createElement(
                  _link2.default,
                  { href: "#" },
                  _react2.default.createElement(_icon2.default, { name: "angle-right", size: 1 })
                )
              )
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "span",
                { className: "Grid-col u-size-1-2 nearby_ele_left" },
                nearbyClub.address.address1
              ),
              _react2.default.createElement("span", { className: "Grid-col u-size-1-6" }),
              _react2.default.createElement(
                "span",
                { className: "Grid-col u-size-2-6 nearby_ele_right" },
                nearbyClub.displayDistance
              )
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "span",
                { className: "Grid-col u-size-1-2 nearby_ele_left" },
                (0, _classnames2.default)(nearbyClub.address.city, ", ", nearbyClub.address.state, " ", nearbyClub.address.postalCode)
              ),
              _react2.default.createElement("span", { className: "Grid-col u-size-1-6" }),
              _react2.default.createElement(
                "span",
                { className: "Grid-col u-size-2-6" },
                _react2.default.createElement(
                  _link2.default,
                  {
                    className: "make_your_club_ele_right",
                    href: (0, _classnames2.default)("/club/makeYourClub/", nearbyClub.id) },
                  "Make this your club"
                )
              )
            )
          )
        );
      })
    );
  };

  StoreFinderPanel.prototype.renderFindOtherClubs = function renderFindOtherClubs() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _button2.default,
        {
          inverse: true,
          className: "find-other-clubs-without-nearby-list",
          automationId: this.props.automation.findOtherClubsBtn,
          tealeafId: this.props.tealeaf.findOtherClubsBtn },
        "Find other clubs"
      )
    );
  };

  StoreFinderPanel.prototype.render = function render() {
    var _props = this.props;
    var preferredStores = _props.preferredStores;
    var nearbyStores = _props.nearbyStores;


    var preferredStore = preferredStores[0];
    return _react2.default.createElement(
      "div",
      { className: "store-finder-panel" },
      _react2.default.createElement(
        "div",
        { className: "yourclub-label" },
        "Your Club"
      ),
      _react2.default.createElement(_separator2.default, null),
      this.renderCurrentClub(),
      _react2.default.createElement("br", null),
      nearbyStores && nearbyStores.length > 0 ? this.renderNearbyClubs(nearbyStores, preferredStore.address.postalCode) : this.renderFindOtherClubs()
    );
  };

  return StoreFinderPanel;
}(_react2.default.Component);

StoreFinderPanel.propTypes = {
  type: _react.PropTypes.string,
  moduleId: _react.PropTypes.string,
  configs: _react.PropTypes.shape({ options: _react.PropTypes.array.isRequired }),
  preferredStores: _react.PropTypes.shape({
    displayName: _react.PropTypes.string,
    timing: _react.PropTypes.string,
    phone: _react.PropTypes.string,
    address: _react.PropTypes.string,
    city: _react.PropTypes.string
  }),

  nearbyStores: _react.PropTypes.array,
  //Automation
  automation: _react.PropTypes.shape({
    findOtherClubsBtn: _react.PropTypes.string
  }),
  //Releaf
  tealeaf: _react.PropTypes.shape({
    findOtherClubsBtn: _react.PropTypes.string
  })
};

StoreFinderPanel.defaultProps = {
  automation: {
    findOtherClubsBtn: "find-other-clubs-btn"
  },
  tealeaf: {
    findOtherClubsBtn: "find-other-clubs-btn"
  }
};

exports.default = StoreFinderPanel;