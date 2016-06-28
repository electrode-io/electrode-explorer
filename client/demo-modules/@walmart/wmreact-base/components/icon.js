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

var _iconValidationMarker = require("./icon-validation-marker");

var _iconValidationMarker2 = _interopRequireDefault(_iconValidationMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Icon component
@examples
You can specify the name if you like:

```jsx
<Icon name="truck" />
```

Or you can reference it with a shortcut:

```jsx
<Icon.Truck />
```
@return {ReactElement} - React element
@param {object} props Properties
@component Icon
@import {Icon}
@playground
By Object
```
<Icon.Truck />
```
@playground
By Name
```
<div>
  <Icon name="truck" size={1}/>
  <Icon name="list" size={1}/>
  <Icon name="pin" size={1}/>
  <Icon name="search" size={1}/>
  <Icon name="help" size={1}/>
  <Icon name="zoom" size={1}/>
  <Icon name="zoom-out" size={1}/>
  <Icon name="menu" size={1}/>
  <Icon name="grid" size={1}/>
  <Icon name="lock" size={1}/>
  <Icon name="package" size={1}/>
  <Icon name="print" size={1}/>
  <Icon name="mail" size={1}/>
  <Icon name="twitter" size={1}/>
  <Icon name="pinterest" size={1}/>
  <Icon name="facebook" size={1}/>
  <Icon name="youtube" size={1}/>
  <Icon name="google-plus" size={1}/>
  <Icon name="vudu" size={1}/>
  <Icon name="mobile" size={1}/>
  <Icon name="add-to-cart" size={1}/>
  <Icon name="add-to-list" size={1}/>
  <Icon name="store" size={1}/>
  <Icon name="add" size={1}/>
  <Icon name="weekly-ad" size={1}/>
  <Icon name="angle-left" size={1}/>
  <Icon name="angle-right" size={1}/>
  <Icon name="ok" size={1}/>
  <Icon name="exclamation-circle" size={1}/>
  <Icon name="caret-down" size={1}/>
  <Icon name="caret-up" size={1}/>
  <Icon name="remove" size={1}/>
  <Icon name="play" size={1}/>
  <Icon name="ban-circle" size={1}/>
  <Icon name="spark" size={1}/>
  <Icon name="trophy" size={1}/>
  <Icon name="star" size={1}/>
  <Icon name="user" size={1}/>
  <Icon name="thumbs-up" size={1}/>
  <Icon name="comment" size={1}/>
  <Icon name="play-circle" size={1}/>
  <Icon name="new-window" size={1}/>
  <Icon name="thumbs-alt-up" size={1}/>
  <Icon name="thumbs-alt-down" size={1}/>
  <Icon name="flag" size={1}/>
  <Icon name="modal" size={1}/>
  <Icon name="clock" size={1}/>
  <Icon name="savings-catcher" size={1}/>
  <Icon name="gift-card" size={1}/>
  <Icon name="credit-card" size={1}/>
  <Icon name="membership" size={1}/>
</div>
```
*/
var Icon = function Icon(props) {
  var extras = {};
  var className = props.className;
  var other = (0, _objectWithoutProperties3.default)(props, ["className"]);


  if (props.size) {
    extras["wmicon-" + props.size] = true;
  }

  return _react2.default.createElement("i", (0, _extends3.default)({ className: (0, _classnames2.default)("wmicon", "wmicon-" + props.name, extras, props.hidden ? "hide-content" : "", className) }, other));
};
/* eslint prefer-const:0, react/prop-types: 0 */


var icons = {
  Truck: "truck",
  Cart: "list",
  Pin: "pin",
  Search: "search",
  Help: "help",
  Zoom: "zoom",
  ZoomOut: "zoom-out",
  Menu: "menu",
  Grid: "grid",
  Lock: "lock",
  Package: "package",
  Print: "print",
  Mail: "mail",
  Twitter: "twitter",
  Pinterest: "pinterest",
  Facebook: "facebook",
  Youtube: "youtube",
  GooglePlus: "google-plus",
  Vudu: "vudu",
  Mobile: "mobile",
  AddToCart: "add-to-cart",
  AddToList: "add-to-list",
  Store: "store",
  Add: "add",
  WeeklyAd: "weekly-ad",
  AngleLeft: "angle-left",
  AngleRight: "angle-right",
  Ok: "ok",
  ExclamationCircle: "exclamation-circle",
  CaretDown: "caret-down",
  CaretUp: "caret-up",
  Remove: "remove",
  Play: "play",
  BanCircle: "ban-circle",
  Spark: "spark",
  Trophy: "trophy",
  Star: "star",
  User: "user",
  ThumbsUp: "thumbs-up",
  Comment: "comment",
  PlayCircle: "play-circle",
  NewWindow: "new-window",
  ThumbsAltUp: "thumbs-alt-up",
  ThumbsAltDown: "thumbs-alt-down",
  Flag: "flag",
  Modal: "modal",
  Clock: "clock",
  SavingsCatcher: "savings-catcher",
  GiftCard: "gift-card",
  CreditCard: "credit-card",
  Pharmacy: "pharmacy",
  Membership: "membership"
};

var _createIcon = function _createIcon(name) {
  return function (props) {
    var extras = {};
    if (props.size) {
      extras["wmicon-" + props.size] = true;
    }
    return _react2.default.createElement("i", (0, _extends3.default)({ className: (0, _classnames2.default)("wmicon", "wmicon-" + name, extras, props.className)
    }, props));
  };
};

for (var k in icons) {
  Icon[k] = _createIcon(icons[k]);
}

Icon.ValidationMarker = _iconValidationMarker2.default;

exports.default = Icon;