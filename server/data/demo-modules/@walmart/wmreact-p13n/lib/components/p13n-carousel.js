"use strict";

exports.__esModule = true;
exports.P13NCarousel = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactCarousel = require("@walmart/wmreact-carousel");

var _wmreactCarousel2 = _interopRequireDefault(_wmreactCarousel);

var _p13nTile = require("./p13n-tile");

var _p13nTile2 = _interopRequireDefault(_p13nTile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P13NCarousel = exports.P13NCarousel = function (_Component) {
  (0, _inherits3.default)(P13NCarousel, _Component);

  function P13NCarousel(props) {
    (0, _classCallCheck3.default)(this, P13NCarousel);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      currentSlide: 0
    };

    _this._setCurrentSlide = _this._setCurrentSlide.bind(_this);
    return _this;
  }

  P13NCarousel.prototype._setCurrentSlide = function _setCurrentSlide(currentSlide) {
    this.setState({
      currentSlide: currentSlide
    });
  };

  P13NCarousel.prototype._renderModuleTitle = function _renderModuleTitle(moduleTitle) {
    return moduleTitle ? _react2.default.createElement(
      "div",
      { className: "tempo-module-header u-paddedRow" },
      _react2.default.createElement(
        "h5",
        { className: "tempo-module-heading" },
        moduleTitle
      )
    ) : null;
  };

  P13NCarousel.prototype.render = function render() {
    var _this2 = this;

    var p13nProducts = this.props.products;
    var _props = this.props;
    var moduleTitle = _props.moduleTitle;
    var isRVI = _props.isRVI;
    var isTrending = _props.isTrending;
    var handleClick = _props.handleClick;
    var responsive = _props.responsive;

    return p13nProducts && p13nProducts.length > 0 ? _react2.default.createElement(
      "div",
      { className: "p13n-carousel-container" },
      this._renderModuleTitle(moduleTitle),
      _react2.default.createElement(
        "div",
        { className: "js-carousel-n-up carousel-n-up-responsive carousel-hotspot carousel-loading carousel carousel-p13n" },
        _react2.default.createElement(
          _wmreactCarousel2.default,
          { className: "p13n-carousel",
            initialSlideWidth: 200,
            slideIndex: this.state.currentSlide,
            afterSlide: this._setCurrentSlide,
            responsive: responsive },
          p13nProducts.map(function (product, index) {
            var boundClick = handleClick ? handleClick.bind(_this2) : null;
            return _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(_p13nTile2.default, {
                index: index,
                product: product,
                onClick: boundClick,
                isRVI: isRVI,
                isTrending: isTrending
              })
            );
          })
        )
      )
    ) : null;
  };

  return P13NCarousel;
}(_react.Component);

P13NCarousel.propTypes = {
  "products": _react.PropTypes.array,
  "moduleTitle": _react.PropTypes.string,
  "responsive": _react.PropTypes.array,
  "handleClick": _react.PropTypes.func,
  "isRVI": _react.PropTypes.bool,
  "isTrending": _react.PropTypes.bool
};

P13NCarousel.defaultProps = {
  "isRVI": false,
  "isTrending": false,
  "responsive": [{
    selectors: ["x-small"],
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      cellSpacing: 8
    }
  }, {
    selectors: ["small"],
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      cellSpacing: 8
    }
  }, {
    selectors: ["medium"],
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      cellSpacing: 8
    }
  }, {
    selectors: ["large"],
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6,
      cellSpacing: 8
    }
  }, {
    selectors: ["x-large"],
    settings: {
      slidesToShow: 7,
      slidesToScroll: 7,
      cellSpacing: 12,
      initialSlideWidth: 280
    }
  }, {
    selectors: ["xx-large"],
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6,
      cellSpacing: 20
    }
  }]
};

P13NCarousel.displayName = "P13NCarousel";

exports.default = P13NCarousel;