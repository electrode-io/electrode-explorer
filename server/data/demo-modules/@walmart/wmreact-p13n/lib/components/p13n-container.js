"use strict";

exports.__esModule = true;
exports.mapDispatchToProps = exports.mapStateToProps = exports.P13NContainer = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _reactRedux = require("react-redux");

var _p13nZone = require("./p13n-zone");

var _p13nZone2 = _interopRequireDefault(_p13nZone);

var _index = require("../actions/index");

var _p13nUtils = require("../utils/p13n-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var placementOrder = ["t1", "t2", "t3", "m1", "m2", "m3", "b1", "b2", "b3"];

/**
 P13N container sends single request to p13n web service and retrieves
 all placements data for the page in one shot and stored in
 irsDataMap prop. Each P13N zone get its irs data by placementId.
 Note that this module needs to be as children of TempoWrapper.
 ```
 <P13NContainer
 page="Homepage",
 parentItemId="1234"
 />
 ```
 */

var P13NContainer = exports.P13NContainer = function (_Component) {
  (0, _inherits3.default)(P13NContainer, _Component);

  function P13NContainer(props) {
    (0, _classCallCheck3.default)(this, P13NContainer);
    return (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));
  }

  P13NContainer.prototype.componentDidMount = function componentDidMount() {
    if ((0, _p13nUtils.ajaxRenderComponent)(this.props)) {
      this._renderSpinner();
      this.props.onAjaxRender(this.props.page, this.props.parentItemId, this.props.queryParams);
    }
  };

  P13NContainer.prototype._renderSpinner = function _renderSpinner() {
    /* eslint-disable no-undef */
    var spinnerContainer = document.querySelector(".spinner-container");
    _reactDom2.default.render(_react2.default.createElement(
      "div",
      { className: "spinner-backdrop js-p13n-spinner-backdrop" },
      _react2.default.createElement("div", { className: "spinner" })
    ), spinnerContainer);
  };

  P13NContainer.prototype._renderP13NZones = function _renderP13NZones() {
    var _props = this.props;
    var irsDataMap = _props.irsDataMap;
    var page = _props.page;

    return (0, _map2.default)(placementOrder, function (placementId) {
      if (irsDataMap && irsDataMap.hasOwnProperty(placementId)) {
        var irsData = (0, _get2.default)(irsDataMap, placementId);
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_p13nZone2.default, { key: placementId, page: page, placementId: placementId, irsData: irsData })
        );
      }
    });
  };

  P13NContainer.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      {
        className: "module-p13n-recommendations js-module-p13n-recommendations",
        "data-automation-id": this.props.dataAutomationId
      },
      _react2.default.createElement("div", { className: "spinner-container" }),
      this._renderP13NZones()
    );
  };

  return P13NContainer;
}(_react.Component);

// Tempo wrapper context


P13NContainer.contextTypes = {
  getTempoConfigByZone: _react.PropTypes.func,
  getModuleTypeComponentMap: _react.PropTypes.func,
  allModules: _react.PropTypes.object
};

P13NContainer.childContextTypes = {
  getIrsDataByPlacement: _react.PropTypes.func,
  irsDataMap: _react.PropTypes.object
};

P13NContainer.propTypes = {
  page: _react.PropTypes.string,
  parentItemId: _react.PropTypes.string,
  irsDataMap: _react.PropTypes.object,
  resultDetail: _react.PropTypes.object,
  visitorId: _react.PropTypes.string,
  tempoModules: _react.PropTypes.object,
  isMobile: _react.PropTypes.bool,
  placementIds: _react.PropTypes.arrayOf(_react.PropTypes.string),
  queryParams: _react.PropTypes.object,
  onAjaxRender: _react.PropTypes.func,
  onDataFetchComplete: _react.PropTypes.func,
  onDataFetchFailed: _react.PropTypes.func,
  dataAutomationId: _react.PropTypes.string
};

P13NContainer.defaultProps = {
  isMobile: false,
  dataAutomationId: ""
};

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  var irsDataMap = (0, _get2.default)(state, "recommendationMap.irsDataMap", {});
  var resultDetail = (0, _get2.default)(state, "recommendationMap.resultDetail", {});
  var visitorId = (0, _get2.default)(state, "recommendationMap.visitorId", "");
  var tempoModules = (0, _get2.default)(state, "quimbyData.collections", {});
  var isMobile = (0, _get2.default)(state, "isMobile", false);
  return {
    irsDataMap: irsDataMap,
    resultDetail: resultDetail,
    visitorId: visitorId,
    tempoModules: tempoModules,
    isMobile: isMobile
  };
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAjaxRender: function onAjaxRender(page, parentItemId, options) {
      dispatch((0, _index.ajaxRequest)(page, parentItemId, options));
    },
    onDataFetchComplete: function onDataFetchComplete(data) {
      dispatch((0, _index.receiveIrsDataMap)(data));
    },
    onDataFetchFailed: function onDataFetchFailed(err) {
      dispatch((0, _index.invalidateRecommendation)(err));
    }
  };
};

var StatefulP13NContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(P13NContainer);

exports.default = StatefulP13NContainer;