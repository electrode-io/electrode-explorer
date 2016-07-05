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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LazyContainer = function (_Component) {
  (0, _inherits3.default)(LazyContainer, _Component);

  function LazyContainer(props) {
    (0, _classCallCheck3.default)(this, LazyContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      isLoaded: false
    };
    _this._scrollHandler = _this._scrollHandler.bind(_this);
    return _this;
  }

  LazyContainer.prototype._scrollHandler = function _scrollHandler() {
    window.removeEventListener("scroll", this._scrollHandler);
    this.setState({
      isLoaded: true
    });
  };

  LazyContainer.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this._scrollHandler);
  };

  LazyContainer.prototype.render = function render() {
    return this.state.isLoaded ? _react2.default.createElement(
      "span",
      null,
      this.props.children
    ) : null;
  };

  return LazyContainer;
}(_react.Component);

exports.default = LazyContainer;


LazyContainer.displayName = "LazyContainer";

LazyContainer.propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
};