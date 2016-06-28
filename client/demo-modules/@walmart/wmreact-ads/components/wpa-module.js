"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = exports.mapStateToProps = exports.WpaModule = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WpaModule = exports.WpaModule = function (_React$Component) {
  _inherits(WpaModule, _React$Component);

  function WpaModule() {
    _classCallCheck(this, WpaModule);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(WpaModule).apply(this, arguments));
  }

  _createClass(WpaModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((0, _wpaUtils.ajaxRenderComponent)(this.props)) {
        this.props.onAjaxRender(this.props);
      }
    }
  }, {
    key: "_renderWpaModule",
    value: function _renderWpaModule(props) {
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
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.adaptedData.hasOwnProperty("adUnits") ? _react2.default.createElement(
        "div",
        { className: "module-wpa" },
        this._renderWpaModule(this.props)
      ) : null;
    }
  }]);

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