"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _flagProptype = require("./flag-proptype");

var _flagProptype2 = _interopRequireDefault(_flagProptype);

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _flagList = require("@walmart/wmreact-product-descriptors/lib/components/flag-list");

var _flagList2 = _interopRequireDefault(_flagList);

var _flag = require("@walmart/wmreact-product-descriptors/lib/components/flag");

var _flag2 = _interopRequireDefault(_flag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays product image

```jsx
<div style={{height: 100}}>
  <ProductCardFlagList
    flags={[{text: "Rollback", type: "rollback"},
     {text: "Clearance", type: "clearance"}]} />
</div>
```

@import {ProductCardFlagList}
@flags noVisibleRender
@component ProductCardFlagList
@playground
FlagList
```
<div style={{height: 100}}>
  <ProductCardFlagList
    flags={[{text: "Rollback", type: "rollback"},
     {text: "Clearance", type: "clearance"}]} />
</div>
```
*/

var _renderFlags = function _renderFlags() {
  var flags = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var maxFlags = arguments[1];

  if (!(0, _isEmpty2.default)(flags)) {
    flags = flags.slice(0, maxFlags);
  }

  return (0, _map2.default)(flags, function (flag, index) {
    return _react2.default.createElement(
      "div",
      { className: "prod-FlagListItem", key: "flag-" + index },
      _react2.default.createElement(_flag2.default, flag)
    );
  });
};

var ProductCardFlagList = function ProductCardFlagList(props) {
  var flags = props.flags;
  var className = props.className;
  var maxFlags = props.maxFlags;

  return _react2.default.createElement(
    _flagList2.default,
    { className: className },
    _renderFlags(flags, maxFlags)
  );
};

ProductCardFlagList.displayName = "ProductFlagList";

ProductCardFlagList.propTypes = {
  /**
    Price flags displayed on the image
  */
  "flags": _react2.default.PropTypes.arrayOf(_flagProptype2.default),

  /**
    Additional class names
  */
  "className": _react2.default.PropTypes.string,

  /**
    Maximum number of flags to render
  */
  "maxFlags": _react2.default.PropTypes.number
};

exports.default = ProductCardFlagList;