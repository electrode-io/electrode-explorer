"use strict";

exports.__esModule = true;
exports.Carousel = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _nukaCarousel = require("nuka-carousel");

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

var _carouselDecorators = require("./carousel-decorators");

var _carouselDecorators2 = _interopRequireDefault(_carouselDecorators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BREAKPOINT_MAPPING = {
  extraSmall: "x-small",
  small: "small",
  medium: "medium",
  large: "large",
  extraLarge: "x-large"
};

/**
Responsive Carousel component base on [Nuka Carousel](http://kenwheeler.github.io/nuka-carousel/)
@examples
```jsx
<Carousel style={{marginBottom: 40}}
  framePadding="40"
  cellSpacing={20}>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>A</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>B</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>C</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>D</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>E</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>F</div>
</Carousel>
```

And something a bit more complex that adjusts settings based on media selectors:

```jsx
<Carousel style={{marginBottom: 40}}
  framePadding="40"
  cellSpacing={20}
  responsive={[
    {
      selectors: ['x-small', 'small'],
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      selectors: ['medium', 'large'],
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      selectors: ['x-large', 'xx-large'],
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]}>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>A</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>B</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>C</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>D</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>E</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>F</div>
</Carousel>
```

If you want products in your carousel you should check out
the `ProductsCarousel` in the `products` library.
@component Carousel
@import Carousel
@playground
Carousel
```
<Carousel style={{marginBottom: 40}}
  framePadding="40"
  cellSpacing={20}
  responsive={[
    {
      selectors: ['x-small', 'small'],
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      selectors: ['medium', 'large'],
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      selectors: ['x-large', 'xx-large'],
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]}>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>A</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>B</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>C</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>D</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>E</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>F</div>
</Carousel>
```
*/

var Carousel = exports.Carousel = function (_React$Component) {
  (0, _inherits3.default)(Carousel, _React$Component);

  function Carousel(props) {
    (0, _classCallCheck3.default)(this, Carousel);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    var breakpoint = _this._getBreakpoint(props.breakpoint);
    _this.state = { breakpoint: breakpoint };
    _this._resizeHandler = _this._resizeHandler.bind(_this);
    return _this;
  }

  Carousel.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var respondTo = this.props.respondTo;


    if (respondTo === "slider") {
      _clientWidth2.default._setClientWidthGetter(function () {
        return _reactDom2.default.findDOMNode(_this2).offsetWidth;
      });
    }

    window.addEventListener("resize", this._resizeHandler);
    //reconcile with actual screen size. Server may not know the exact breakpoint.
    this._resizeHandler();
  };

  Carousel.prototype._getBreakpoint = function _getBreakpoint(breakpoint) {
    breakpoint = breakpoint || _clientWidth2.default.getCurrentBreakpoint();
    return BREAKPOINT_MAPPING[breakpoint] || breakpoint;
  };

  Carousel.prototype._resizeHandler = function _resizeHandler() {
    var screenWidth = this.props.screenWidth;

    if (screenWidth) {
      return;
    } // Don't handle the cases when screenWidth is present.

    var breakpoint = this._getBreakpoint();

    if (this.state.breakpoint !== breakpoint) {
      this.setState({ breakpoint: breakpoint });
    }
  };

  Carousel.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this._resizeHandler);
  };

  Carousel.prototype._getResponsiveSettings = function _getResponsiveSettings(responsive, breakpoint, screenWidth) {
    return responsive.reduce(function (result, current) {
      if (current.selectors && current.selectors.indexOf(breakpoint) > -1 || screenWidth >= current.widerThan) {
        result = current.settings;
      }

      return result;
    }, null);
  };

  Carousel.prototype.render = function render() {
    var _props = this.props;
    var hidden = _props.hidden;
    var children = _props.children;
    var responsive = _props.responsive;
    var screenWidth = _props.screenWidth;
    var originalProps = (0, _objectWithoutProperties3.default)(_props, ["hidden", "children", "responsive", "screenWidth"]);
    var breakpoint = this.state.breakpoint;


    var classes = hidden ? "hide-content" : "";
    var settings = this._getResponsiveSettings(responsive, breakpoint, screenWidth);

    return _react2.default.createElement(
      _nukaCarousel2.default,
      (0, _extends3.default)({ className: classes }, originalProps, settings),
      children
    );
  };

  return Carousel;
}(_react2.default.Component);

Carousel.propTypes = {
  /**
   * Child components to be rendered as slides in carousel
   */
  children: _react.PropTypes.node,
  /**
   * Decorators containing React components and styles to display over the carousel.
   */
  decorators: _react.PropTypes.array,
  /**
   * Responsive settings for different breakpoints
   */
  responsive: _react.PropTypes.array,
  /**
   * For hiding the component
   */
  hidden: _react.PropTypes.bool,
  /**
   * Current active breakpoint whose settings to be used
   */
  breakpoint: _react.PropTypes.string,
  /**
  * Current screen width for for responsive settings to be used
  */
  screenWidth: _react.PropTypes.number,
  /**
   * Responds to window or slider width
   */
  respondTo: _react.PropTypes.string
};

Carousel.defaultProps = {
  decorators: _carouselDecorators2.default,
  responsive: [{
    selectors: ["x-small", "small", "medium", "large", "x-large"],
    settings: {}
  }],
  breakpoint: "",
  screenWidth: null,
  hidden: false,
  respondTo: "window"
};

exports.default = Carousel;