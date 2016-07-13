"use strict";

exports.__esModule = true;
exports.mapDispatchToProps = exports.mapStateToProps = exports.WpaModule = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _isFunction = require("lodash/isFunction");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _wpaCarousel = require("./wpa-carousel");

var _wpaAdapter = require("../adapters/wpa-adapter");

var _reactRedux = require("react-redux");

var _index = require("../actions/index");

var _wpaUtils = require("../utils/wpa-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WpaModule = exports.WpaModule = function (_React$Component) {
  (0, _inherits3.default)(WpaModule, _React$Component);

  function WpaModule() {
    (0, _classCallCheck3.default)(this, WpaModule);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  WpaModule.prototype.componentDidMount = function componentDidMount() {
    if ((0, _wpaUtils.ajaxRenderComponent)(this.props)) {
      this.props.onAjaxRender(this.props);
    }
  };

  WpaModule.prototype._renderWpaModule = function _renderWpaModule(props) {
    var queryString = typeof window === "undefined" ? "" : window.location.search;
    var onRenderParams = {
      queryString: queryString,
      adaptedData: props.adaptedData,
      wpaData: props.wpaData
    };

    props.onRendered(onRenderParams);

    if ((0, _isFunction2.default)(props.onRenderCallback)) {
      props.onRenderCallback.apply(null, [onRenderParams]);
    }

    return _react2.default.createElement(
      "div",
      { className: "slick-module ResponsiveContainer module-sponsored-products" },
      _react2.default.createElement(_wpaCarousel.WpaCarousel, {
        responsive: props.responsive,
        moduleTitle: props.adaptedData.moduleTitle,
        products: props.adaptedData.adUnits,
        pageBeacons: props.adaptedData.pageBeacons,
        bucketId: props.adaptedData.bucketId,
        details: props.adaptedData.details,
        adModule: props.adaptedData.adModule,
        uuid: props.adaptedData.uuid,
        relUuid: props.adaptedData.relUuid
      })
    );
  };

  WpaModule.prototype.render = function render() {
    return this.props.adaptedData.hasOwnProperty("adUnits") ? _react2.default.createElement(
      "div",
      { className: "module-wpa" },
      this._renderWpaModule(this.props)
    ) : null;
  };

  return WpaModule;
}(_react2.default.Component);

WpaModule.propTypes = {
  responsive: _react2.default.PropTypes.array,
  adaptedData: _react2.default.PropTypes.object.isRequired,
  onRendered: _react2.default.PropTypes.func,
  onAjaxRender: _react2.default.PropTypes.func,
  onRenderCallback: _react2.default.PropTypes.func
};

WpaModule.defaultProps = {
  "responsive": (0, _wpaUtils.getDefaultResponsiveProperty)()
};

WpaModule.displayName = "WpaModule";

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  var results = (0, _get2.default)(state, "result", null);
  return (0, _wpaAdapter.adapt)(results);
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAjaxRender: function onAjaxRender(props) {
      dispatch((0, _index.ajaxRender)(props));
    },
    onRendered: function onRendered(onRenderParams) {
      dispatch((0, _index.wpaRendered)(onRenderParams));
    }
  };
};

var StatefulWpaModule = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WpaModule);

exports.default = StatefulWpaModule;