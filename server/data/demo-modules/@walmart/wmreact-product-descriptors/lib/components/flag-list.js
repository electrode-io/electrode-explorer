"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays a list of flags

```jsx
<div style={{height: 100}}>
  <FlagList>
    <Flag type="rollback" text="Rollback" />
    <Flag text="Clearance" align="right" />
    <Flag text="New flag" outline={true}/>
  </FlagList>
</div>

```

@import {FlagList}
@flags noVisibleRender
@component FlagList
@playground
FlagList
```
<div style={{height: 100}}>
  <FlagList>
    <Flag type="rollback" text="Rollback" />
    <Flag text="Clearance" align="right" />
    <Flag text="New flag" outline={true}/>
  </FlagList>
</div>

```
*/

var FlagList = function FlagList(props) {
  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)("prod-FlagList-container", props.className) },
    props.children
  );
};

FlagList.propTypes = {
  /**
  An additional classes passed in
  */
  className: _react2.default.PropTypes.string,
  /**
  All the children
  */
  children: _react2.default.PropTypes.array
};

FlagList.defaultProps = {
  "outline": false
};

FlagList.displayName = "FlagList";

exports.default = FlagList;