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

var _swatch = require("./swatch");

var _swatch2 = _interopRequireDefault(_swatch);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _flyoutTrigger = require("./flyout-trigger");

var _flyoutTrigger2 = _interopRequireDefault(_flyoutTrigger);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@private
*/

var SwatchSelector = function (_Component) {
  (0, _inherits3.default)(SwatchSelector, _Component);

  function SwatchSelector(props) {
    (0, _classCallCheck3.default)(this, SwatchSelector);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      selectedIndex: null,
      lastIndex: null
    };
    return _this;
  }

  SwatchSelector.prototype._onSwatchClick = function _onSwatchClick(redirectUrl) {
    this.props.onSwatchClick(redirectUrl);
  };

  SwatchSelector.prototype._setIndex = function _setIndex(index) {
    var _this2 = this;

    var self = this;
    this.setState({
      selectedIndex: index,
      lastIndex: index
    }, function () {
      var imageSrc = _this2.props.swatches[index].product_image_url; // eslint-disable-line
      (0, _wmreactAnalytics.fireDataEvent)(_this2, "setIndex", { imageSrc: imageSrc });
      if (self.props.onChange) {
        self.props.onChange(imageSrc);
      }
    });
  };

  SwatchSelector.prototype._setHover = function _setHover(index, leave) {
    var self = this;
    if (leave === true) {
      var imageSrc = this.props.swatches[this.state.lastIndex] && this.props.swatches[this.state.lastIndex].product_image_url || this.props.imageUrl;
      if (self.props.onChange) {
        self.props.onChange(imageSrc);
      }
    } else {
      var _imageSrc = this.props.swatches[index].product_image_url;
      if (self.props.onChange) {
        self.props.onChange(_imageSrc);
      }
    }
  };

  SwatchSelector.prototype._renderFlyout = function _renderFlyout() {
    var _this3 = this;

    var self = this;
    var swatches = this.props.swatches.map(function (swatch, index) {
      if (index >= _this3.props.maxSwatchCount) {
        return _react2.default.createElement(_swatch2.default, {
          onClick: function onClick() {
            self._setIndex(index);self._onSwatchClick(swatch.productPageUrl);
          },
          onMouseOver: function onMouseOver() {
            self._setHover(index, false);
          },
          onMouseOut: function onMouseOut() {
            self._setHover(index, true);
          },
          key: index,
          active: self.state.selectedIndex === index,
          title: swatch.display_name,
          image: swatch.swatch_image_url });
      }
    });
    return _react2.default.createElement(
      _flyout2.default,
      {
        trigger: _react2.default.createElement(_flyoutTrigger2.default, null),
        direction: "bottom",
        size: "narrow" },
      swatches
    );
  };

  SwatchSelector.prototype.render = function render() {
    var _this4 = this;

    var self = this;
    return _react2.default.createElement(
      "div",
      { className: "swatch-selector" },
      this.props.swatches.map(function (swatch, index) {
        if (index < _this4.props.maxSwatchCount) {
          return _react2.default.createElement(_swatch2.default, {
            onClick: function onClick() {
              self._setIndex(index);self._onSwatchClick(swatch.productPageUrl);
            },
            onMouseOver: function onMouseOver() {
              self._setHover(index, false);
            },
            onMouseOut: function onMouseOut() {
              self._setHover(index, true);
            },
            key: index,
            active: self.state.selectedIndex === index,
            title: swatch.display_name,
            image: swatch.swatch_image_url });
        }
      }),
      this.props.swatches.length > this.props.maxSwatchCount ? this._renderFlyout() : null
    );
  };

  return SwatchSelector;
}(_react.Component);

exports.default = SwatchSelector;


SwatchSelector.displayName = "SwatchSelector";

SwatchSelector.propTypes = {
  swatches: _react2.default.PropTypes.array.isRequired,
  imageUrl: _react2.default.PropTypes.string,
  maxSwatchCount: _react2.default.PropTypes.number,
  onChange: _react2.default.PropTypes.func,
  onSwatchClick: _react2.default.PropTypes.func
};

SwatchSelector.defaultProps = {
  swatches: [],
  imageUrl: null,
  maxSwatchCount: 4,
  onSwatchClick: function onSwatchClick() {}
};