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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _mapColumns = require("./utils/map-columns");

var _mapColumns2 = _interopRequireDefault(_mapColumns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A layout manager that makes it easy to build responsive layouts with different
numbers of columns at different breakpoints.
@examples
This layout is one column in `x-small` media size, and three columns
in `medium` and above.

```jsx
<Layout x-small={1} medium={3}>
  <div>A</div><div>B</div><div>C</div>
</Layout>
```

And this layout is one column in `x-small` media size, and three columns
in `medium` where the columns are 2, 8 and 2 wide (using the 12 grid layout
sizing).

```jsx
<Layout x-small={1} medium-sizes={[2,8,2]}>
  <div>A</div><div>B</div><div>C</div>
</Layout>
```
@import {Layout}
@component Layout
@flags noVisibleRender
@synonym responsive
@playground
Layout
```
<Layout large={4} medium={3} small={2} x-small={1} padded={true}>
  <div style={{background:'#ccc',padding:'1rem'}}>A</div>
  <div style={{background:'#aaa',padding:'1rem'}}>B</div>
  <div style={{background:'#ccc',padding:'1rem'}}>C</div>
</Layout>
```
*/

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Layout.prototype.layoutChildren = function layoutChildren(children, options, className) {
    var cMap = (0, _mapColumns2.default)(options, "sizes");
    var coMap = (0, _mapColumns2.default)(options, "offsets");

    var wrappedChildren = _react2.default.Children.map(children, function (child, index) {
      var classes = className ? [className] : [];
      classes.push("Grid-col");
      for (var k in cMap) {
        if (cMap[k][index % cMap[k].length] === 12) {
          classes.push("u-size-1" + k); // there is no 12-12 class
        } else {
            classes.push("u-size-" + cMap[k][index % cMap[k].length] + "-12" + k);
          }
      }
      for (var _k in coMap) {
        classes.push("u-offset-" + coMap[_k][index % coMap[_k].length] + "-12" + _k);
      }
      classes.push((0, _classnames2.default)({
        "valign-top": options.vertical === "top",
        "valign-middle": options.vertical === "middle",
        "valign-bottom": options.vertical === "bottom"
      }));
      return _react2.default.createElement(
        "div",
        { className: classes.join(" ") },
        child
      );
    });

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)({
          "Grid--gutters": options.padded,
          "text-left": options.align === "left",
          "text-center": options.align === "center",
          "text-right": options.align === "right"
        }, "Grid", this.props.hidden ? "hide-content" : "")
      },
      wrappedChildren
    );
  };

  Layout.prototype.render = function render() {
    return this.layoutChildren(this.props.children, this.props, this.props.className);
  };

  return Layout;
}(_react.Component);

Layout.displayName = "Layout";

Layout.propTypes = {
  /**
   The number of columns for the x-small media size.
   */
  "x-small": _react.PropTypes.number,
  /**
   The number of columns for the small media size.
   */
  small: _react.PropTypes.number,
  /**
   The number of columns for the medium media size.
   */
  medium: _react.PropTypes.number,
  /**
   The number of columns for the large media size.
   */
  large: _react.PropTypes.number,
  /**
   The number of columns for the x-large media size.
   */
  "x-large": _react.PropTypes.number,
  /**
   An array of column sizes (based on a 12-grid layout) for the x-small media size.
   */
  "x-small-sizes": _react.PropTypes.array,
  /**
   An array of column sizes (based on a 12-grid layout) for the small media size.
   */
  "small-sizes": _react.PropTypes.array,
  /**
   An array of column sizes (based on a 12-grid layout) for the medium media size.
   */
  "medium-sizes": _react.PropTypes.array,
  /**
   An array of column sizes (based on a 12-grid layout) for the large media size.
   */
  "large-sizes": _react.PropTypes.array,
  /**
   An array of column sizes (based on a 12-grid layout) for the x-large media size.
   */
  "x-large-sizes": _react.PropTypes.array,
  /**
   True if the grid should be padded.
   */
  padded: _react.PropTypes.bool,
  /**
   * Horizontal alignment for the container.
   */
  align: _react.PropTypes.oneOf(["left", "center", "right"]),
  /**
   Vertical alignment for the container.
   */
  vertical: _react.PropTypes.oneOf(["top", "middle", "bottom"]),
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  hidden: _react.PropTypes.string
};

Layout.defaultProps = {
  align: "left"
};

exports.default = Layout;