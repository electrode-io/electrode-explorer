"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = _react2.default.PropTypes;

/**
 This is a clickable button that specifies a store.

 ```jsx
 <ProductStoreInfoLabel
  storeName="Mountain View"
 />
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductStoreInfoLabel}
 @component ProductStoreInfoLabel
 @playground
 ProductStoreInfoLabel
 ```
 <div>
  <ProductStoreInfoLabel
    storeName="Mountain View"
  />
 </div>
 ```
 */

var ProductStoreInfoLabel = function ProductStoreInfoLabel(props) {
  return _react2.default.createElement(
    "span",
    { className: "font-bold copy-mini display-block-xs" },
    "at ",
    _react2.default.createElement(
      _button2.default,
      { className: "copy-small", fakelink: true },
      props.storeName
    )
  );
};

ProductStoreInfoLabel.propTypes = {
  storeName: PropTypes.string.isRequired
};

exports.default = ProductStoreInfoLabel;