"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getItemClass = function getItemClass(numberSections) {
  return "list-item size-1-" + numberSections + " display-inline-block";
};

/**
List of images.
@param {object} props - React properties
@returns {ReactElement} The rendered component
@examples
```jsx
<ImageList separator={(<span>&amp;,</span>)}>
  <div>Item 1</div>
  <div>Item 2</div>
</ImageList>
```
@component ImageList
@import {ImageList}
@playground
ImageList
```
<ImageList separator={(<span>&amp;,</span>)}>
  <div>Item 1</div>
  <div>Item 2</div>
</ImageList>
```
*/
var ImageList = function ImageList(props) {
  var separator = props.separator;
  var children = props.children;
  var rest = (0, _objectWithoutProperties3.default)(props, ["separator", "children"]);


  return _react2.default.createElement(
    "div",
    { className: "bundle-image-list static-list" },
    _react.Children.map(children, function (child, index) {
      return [index ? _react2.default.createElement(
        "div",
        { className: "list-separator display-inline-block",
          key: "separator-" + index },
        separator
      ) : null, _react2.default.createElement(
        "div",
        { className: getItemClass(children.length),
          key: "item-" + index },
        child
      )];
    })
  );
};

ImageList.propTypes = {
  separator: _react.PropTypes.element
};

ImageList.defaultProps = {
  separator: _react2.default.createElement(
    "span",
    { className: "plus-sign display-inline-block" },
    "+"
  )
};

exports.default = ImageList;