"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderAsGroup = function renderAsGroup(cols, children, groupRender) {
  var group = [];
  var out = [];
  _react2.default.Children.forEach(children, function (child, index) {
    group.push(child);
    if (group.length % cols === 0 && index > 0) {
      out.push(groupRender(group, index));
      group = [];
    }
  });
  if (group.length > 0) {
    // -1 is a key that's outside the [0,...] range we use above.
    out.push(groupRender(group, -1));
  }
  return out;
};

/**
Groups children into rows with a set number of columns.

This example organizes the children into rows of 2 columns where each row
is given the `className` of `my-column`.
@examples
```jsx
<Grid.GroupChildren classes="my-column" columns={2}>
  <div>A</div><div>B</div><div>C</div>
</Grid.GroupChildren>
```
@import {Grid}
@component Grid.GroupChildren
@param {object} props object with following properties classes, columns.
@returns {ReactElement} A React Element
*/
var GroupChildren = function GroupChildren(props) {
  var columns = props.columns;
  var classes = props.classes;
  var other = (0, _objectWithoutProperties3.default)(props, ["columns", "classes"]);

  return _react2.default.createElement(
    "div",
    other,
    renderAsGroup(props.columns, props.children, function (children, key) {
      return _react2.default.createElement(
        "div",
        { className: props.classes, key: key },
        children
      );
    })
  );
};

GroupChildren.propTypes = {
  /**
   The classes to apply to the row div
   */
  classes: _react2.default.PropTypes.string.isRequired,
  /**
   The number of columns in a row
   */
  columns: _react2.default.PropTypes.number.isRequired
};

exports.default = GroupChildren;