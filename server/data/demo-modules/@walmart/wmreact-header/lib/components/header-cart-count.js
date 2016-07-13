"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// default props

// props

var DEFAULT_CLASS_NAMES = ["header-Cart-count", "u-borderRadiusFull", "display-block"];

/**
 A header cart count indicator component.
 @examples
 ```jsx
<HeaderCartCount totalItemsCount={100}/>
 ```
 @component HeaderCartCount
 @import {HeaderCartCount}
 @references HeaderCartCount
 @playground
 HeaderCartCount
 ```
 <HeaderCartCount totalItemsCount={100}/>
 ```
 */

var HeaderCartCount = function HeaderCartCount(props) {
  var totalItemsCount = props.totalItemsCount;
  var maxCountThreshold = props.maxCountThreshold;
  var className = props.className;
  var rest = (0, _objectWithoutProperties3.default)(props, ["totalItemsCount", "maxCountThreshold", "className"]);

  var isHidden = totalItemsCount < 1;
  var classNameStr = (0, _classnames2.default)(DEFAULT_CLASS_NAMES, className, { "hide-content": isHidden });
  var displayValue = "" + totalItemsCount;

  if (totalItemsCount > maxCountThreshold) {
    displayValue = maxCountThreshold + "+";
  }

  return _react2.default.createElement(
    "b",
    (0, _extends3.default)({ className: classNameStr }, rest),
    displayValue
  );
};

HeaderCartCount.displayName = "HeaderCartCount";

HeaderCartCount.propTypes = {
  /**
    Total number of items.
   */
  totalItemsCount: _react.PropTypes.number,
  /**
    The max count value. After totalItemsCount reaches maxCountThreshold,
    the HeaderCartCount would start displaying the value as
    (maxCountThreshold+) instead of actual totalItemsCount, for e.g. if maxCountThreshold is 99
    and totalItemsCount is 100, the component would display the total as 99+ instead of 100.
    Default value for this is 99.
   */
  maxCountThreshold: _react.PropTypes.number,
  /**
    Any additional style classes.
   */
  className: _react.PropTypes.string
};

HeaderCartCount.defaultProps = {
  totalItemsCount: 0,
  maxCountThreshold: 99,
  className: ""
};

exports.default = HeaderCartCount;