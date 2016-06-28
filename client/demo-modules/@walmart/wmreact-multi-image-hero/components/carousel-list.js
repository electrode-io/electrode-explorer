"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _carousel = require("@walmart/wmreact-carousel/lib/components/carousel");

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Carousel of images.
@param {object} props - React properties
@returns {ReactElement} The rendered component
@examples
```jsx
<CarouselList separator={(<span>&amp;,</span>)}
  slidesToShow={2}
  slidesToScroll={1}>
  <div>Item 1</div>
  <div>Item 2</div>
</CarouselList>
```
@component CarouselList
@import {CarouselList}
@playground
CarouselList
```
<CarouselList separator={(<span>&amp;,</span>)}
  slidesToShow={2}
  slidesToScroll={1}>
  <div>Item 1</div>
  <div>Item 2</div>
</CarouselList>
```
*/
var CarouselList = function CarouselList(props) {
  var children = props.children;
  var separator = props.separator;
  var rest = (0, _objectWithoutProperties3.default)(props, ["children", "separator"]);


  var getItemClass = function getItemClass(numberSections) {
    return "list-item size-1-" + numberSections + " display-inline-block";
  };

  return _react2.default.createElement(
    "div",
    { className: "bundle-image-list carousel-list" },
    _react2.default.createElement(
      _carousel2.default,
      rest,
      _react.Children.map(children, function (child, index) {
        return _react2.default.createElement(
          "div",
          { className: "carousel-item", key: index },
          index ? _react2.default.createElement(
            "div",
            { className: "list-separator display-inline-block" },
            separator
          ) : null,
          _react2.default.createElement(
            "div",
            { className: getItemClass(children.length) },
            child
          )
        );
      })
    )
  );
};

CarouselList.propTypes = {
  separator: _react.PropTypes.element,
  slidesToShow: _react.PropTypes.number,
  slidesToScroll: _react.PropTypes.number,
  responsive: _react.PropTypes.object,
  children: _react.PropTypes.arrayOf(_react.PropTypes.element).isRequired
};

CarouselList.defaultProps = {
  separator: _react2.default.createElement(
    "span",
    { className: "plus-sign display-inline-block" },
    "+"
  ),
  slidesToShow: 2.25,
  slidesToScroll: 2,
  responsive: [{
    selectors: ["small", "x-small"],
    settings: {
      slidesToShow: 2
    }
  }, {
    // Visibility at all breakpoints
    selectors: ["medium", "large", "x-large", "xx-large"]
  }]
};

exports.default = CarouselList;