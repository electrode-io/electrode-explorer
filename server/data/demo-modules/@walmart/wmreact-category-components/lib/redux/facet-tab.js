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

var _reactRedux = require("react-redux");

var _facetTab = require("../react/components/facet-tab");

var _facetTab2 = _interopRequireDefault(_facetTab);

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var moduleUiState = state.ui[ownProps.moduleId];
  var active = moduleUiState ? moduleUiState.active : 0;
  var tabsToLoad = moduleUiState ? moduleUiState.loadedTabs : [0];

  return { active: active, tabsToLoad: tabsToLoad };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChange: function onChange(id) {
      return dispatch((0, _actions.onFacetTabChange)(ownProps.moduleId, parseInt(id, 10)));
    },
    onLoad: function onLoad() {
      return dispatch((0, _actions.onFacetTabLoad)(ownProps.moduleId));
    }
  };
};

/* Wrapper component to create initial state for given module. */

var FacetTabWrapper = function (_React$Component) {
  (0, _inherits3.default)(FacetTabWrapper, _React$Component);

  function FacetTabWrapper(props) {
    (0, _classCallCheck3.default)(this, FacetTabWrapper);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    props.onLoad();
    return _this;
  }

  FacetTabWrapper.prototype.render = function render() {
    return _react2.default.createElement(_facetTab2.default, this.props);
  };

  return FacetTabWrapper;
}(_react2.default.Component);

FacetTabWrapper.propTypes = {
  onLoad: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FacetTabWrapper);