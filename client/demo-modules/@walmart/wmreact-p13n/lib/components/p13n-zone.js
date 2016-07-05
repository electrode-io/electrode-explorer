"use strict";

exports.__esModule = true;
exports.mapDispatchToProps = exports.mapStateToProps = exports.P13NZone = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _p13nRecommendation = require("./p13n-recommendation");

var _p13nRecommendation2 = _interopRequireDefault(_p13nRecommendation);

var _p13nRvi = require("./p13n-rvi");

var _p13nRviNoRec = require("./p13n-rvi-no-rec");

var _p13nRviNoRec2 = _interopRequireDefault(_p13nRviNoRec);

var _p13nzoneAdapter = require("../adapters/p13nzone-adapter");

var _p13nzoneAdapter2 = _interopRequireDefault(_p13nzoneAdapter);

var _index = require("../actions/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P13NZone = exports.P13NZone = function (_Component) {
  (0, _inherits3.default)(P13NZone, _Component);

  function P13NZone(props) {
    (0, _classCallCheck3.default)(this, P13NZone);
    return (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));
  }

  P13NZone.prototype._renderP13NModules = function _renderP13NModules(props) {
    switch (props.irsData.htmlTemplateId) {
      case "P13NRecommendation":
        return _react2.default.createElement(_p13nRecommendation2.default, props);
      case "P13NRecommendationRvi":
        return _react2.default.createElement(_p13nRvi.P13NRecommendationRvi, props);
      case "P13NRecommendationRviNoRec":
        return _react2.default.createElement(_p13nRviNoRec2.default, props);
    }
  };

  P13NZone.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      null,
      this._renderP13NModules(this.props)
    );
  };

  return P13NZone;
}(_react.Component);

P13NZone.contextTypes = {
  getTempoConfigByZone: _react.PropTypes.func,
  getModuleTypeComponentMap: _react.PropTypes.func,
  allModules: _react.PropTypes.object,
  getIrsDataByPlacement: _react.PropTypes.func,
  irsDataMap: _react.PropTypes.object
};

P13NZone.propTypes = {
  page: _react.PropTypes.string,
  isMobile: _react.PropTypes.bool,
  placementId: _react.PropTypes.string,
  irsData: _react.PropTypes.object,
  products: _react.PropTypes.array
};

P13NZone.defaultProps = {};

P13NZone.displayName = "P13NZone";

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state, ownProps) {
  var p13NZoneAdapter = new _p13nzoneAdapter2.default(state, ownProps);
  return p13NZoneAdapter.adapt();
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onDataFetchComplete: function onDataFetchComplete() {/*no-op*/},
    handleClick: function handleClick() {
      dispatch((0, _index.p13nTileClicked)());
    }
  };
};

var StatefulP13NZone = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(P13NZone);

exports.default = StatefulP13NZone;