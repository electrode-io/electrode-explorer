"use strict";

exports.__esModule = true;
exports.COMPONENT_CLASSES = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_CLASSES = exports.COMPONENT_CLASSES = ["prod-LegalBadge", "text-center", "display-inline-block", "prod-PaddingRight--xs", "prod-PaddingLeft--xs", "copy-mini"];

/**
The legal badge component.
@examples
```
<ProductLegalBadge badgeLabel="PG-13" className="foo" />
```
@return {ReactElement} Element tree
@param {object} props Props
@component ProductLegalBadge
@import {ProductLegalBadge}
@playground
ProductLegalBadge
```
<ProductLegalBadge badgeLabel="PG-13" className="foo" />
```
*/

var ProductLegalBadge = function ProductLegalBadge(props) {
  var className = props.className;
  var _props$badgeLabel = props.badgeLabel;
  var badgeLabel = _props$badgeLabel === undefined ? "" : _props$badgeLabel;

  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)(COMPONENT_CLASSES, className) },
    badgeLabel
  );
};

ProductLegalBadge.propTypes = {
  /**
   The legal badge label.
  */
  badgeLabel: _react.PropTypes.string,
  /**
   Any additional style classes
  */
  className: _react.PropTypes.string
};

exports.default = ProductLegalBadge;