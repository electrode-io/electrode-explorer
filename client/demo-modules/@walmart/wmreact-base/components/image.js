"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMPTY_PIXEL = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint prefer-const:0, react/prop-types: 0 */


var EMPTY_PIXEL = exports.EMPTY_PIXEL = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

/**
Image component that conforms to our standard sizings.
@examples
```jsx
<Image src="foo.jpg" size={50} />
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Image
@import {Image}
@playground
```
<div>
  <Image src="http://placehold.it/1000x1000" size={30}/>
  <Image src="http://placehold.it/1000x1000" size={45}/>
  <Image src="http://placehold.it/1000x1000" size={50}/>
  <Image src="http://placehold.it/1000x1000" size={60}/>
  <Image src="http://placehold.it/1000x1000" size={100}/>
  <Image src="http://placehold.it/1000x1000" size={125}/>
  <Image src="http://placehold.it/1000x1000" size={150}/>
  <Image src="http://placehold.it/1000x1000" size={180}/>
</div>
```
*/

var Image = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));

    _this.state = {
      mounted: false
    };
    return _this;
  }
  /*
    We do this on did mount because
    we want this to run only _after_
    the client has taken over. Generally,
    you do not want to set start in didMount
    because then the client will see the wrong
    behavior. However, this is exactly what we want
    here.
  */
  /* eslint-disable react/no-did-mount-set-state */


  _createClass(Image, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        mounted: true
      });
    }

    /* eslint-enable */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var size = _props.size;
      var onClick = _props.onClick;
      var className = _props.className;
      var hidden = _props.hidden;
      var children = _props.children;
      var src = _props.src;
      var lazy = _props.lazy;

      var other = _objectWithoutProperties(_props, ["size", "onClick", "className", "hidden", "children", "src", "lazy"]);
      // size: number, other: object

      var _onClick = function _onClick(event) {
        (0, _wmreactAnalytics.fireStatelessUIEvent)(_this2.props, _this2.context, event);
        onClick(event);
      };

      var extras = {};
      if (size) {
        extras["img-" + size] = true;
      }
      var loadSrc = !lazy || this.state.mounted ? src : EMPTY_PIXEL;
      return _react2.default.createElement(
        "img",
        _extends({}, other, {
          src: loadSrc,
          onClick: _onClick,
          className: (0, _classnames2.default)(extras, className, hidden ? "hide-content" : "")
        }),
        children
      );
    }
  }]);

  return Image;
}(_react.Component);

var validateDimension = function validateDimension(props, propName) {
  if (props.lazy && !props.size) {
    return new Error(propName + " or size is recommended if you use `lazy`\n  so that they don’t force layout once downloaded");
  }
};

Image.propTypes = {
  lazy: _react.PropTypes.bool,
  size: _react.PropTypes.number,
  height: validateDimension,
  width: validateDimension,
  onClick: _react.PropTypes.func,
  className: _react.PropTypes.string,
  src: _react.PropTypes.string.isRequired
};

Image.defaultProps = {
  lazy: false,
  onClick: function onClick() {},
  className: "",
  hidden: false
};

Image.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

exports.default = Image;