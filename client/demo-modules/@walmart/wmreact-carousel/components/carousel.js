"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _nukaCarousel = require("nuka-carousel");

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _mediaSelector = require("@walmart/wmreact-layout/lib/components/media-selector");

var _mediaSelector2 = _interopRequireDefault(_mediaSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Decorators = require("./carousel-decorators").default;

/**
 * Renders the carousel with MediaSelector.
 * @returns {ReactElement}  MediaSelector driven carousel component
 */
var _renderWithMediaSelector = function _renderWithMediaSelector(_ref) {
  var children = _ref.children;
  var responsive = _ref.responsive;
  var originalProps = (0, _objectWithoutProperties3.default)(_ref, ["children", "responsive"]);
  return _react2.default.createElement(
    _mediaSelector2.default,
    null,
    responsive.map(function (r, index) {
      var newProps = (0, _objectAssign2.default)({}, originalProps, { visibleWidths: r.selectors }, r.settings);
      return _react2.default.createElement(
        _nukaCarousel2.default,
        (0, _extends3.default)({}, newProps, { key: index }),
        children
      );
    })
  );
};

/**
 * Renders a carousel component for a given breakpoint or screenWidth.
 * Should be used with a redux container to manage the active breakpoint state.
 * @returns {ReactElement}  Carousel component
 */
var _renderWithoutMediaSelector = function _renderWithoutMediaSelector(_ref2) {
  var breakpoint = _ref2.breakpoint;
  var screenWidth = _ref2.screenWidth;
  var children = _ref2.children;
  var responsive = _ref2.responsive;
  var originalProps = (0, _objectWithoutProperties3.default)(_ref2, ["breakpoint", "screenWidth", "children", "responsive"]);

  var settings = void 0;

  if (screenWidth === null) {
    settings = responsive.reduce(function (result, current) {
      if (current.selectors && current.selectors.indexOf(breakpoint) > -1) {
        result = current.settings;
      }
      return result;
    }, null);
  } else {
    settings = responsive.reduce(function (result, current) {
      if (screenWidth >= current.widerThan) {
        result = current.settings;
      }
      return result;
    }, null);
  }

  return _react2.default.createElement(
    _nukaCarousel2.default,
    (0, _extends3.default)({}, originalProps, settings),
    children
  );
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
@returns {ReactElement} returns Stateless Carousel component.
*/
var Carousel = function Carousel(_ref3) {
  var hidden = _ref3.hidden;
  var originalProps = (0, _objectWithoutProperties3.default)(_ref3, ["hidden"]);
  var breakpoint = originalProps.breakpoint;
  var screenWidth = originalProps.screenWidth;

  return _react2.default.createElement(
    "span",
    { className: hidden ? "hide-content" : "" },
    breakpoint !== "" || screenWidth !== null ? _renderWithoutMediaSelector(originalProps) : _renderWithMediaSelector(originalProps)
  );
};

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
  screenWidth: _react.PropTypes.number

};

Carousel.defaultProps = {
  decorators: Decorators,
  responsive: [{
    selectors: ["x-small", "small", "medium", "large", "x-large", "xx-large"],
    settings: {}
  }],
  breakpoint: "",
  screenWidth: null,
  hidden: false
};

exports.default = Carousel;