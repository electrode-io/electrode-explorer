"use strict";

exports.__esModule = true;
exports.EMPTY_PIXEL = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/* eslint prefer-const:0, react/prop-types: 0 */

var Image = function (_Component) {
  (0, _inherits3.default)(Image, _Component);

  function Image() {
    (0, _classCallCheck3.default)(this, Image);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));

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


  Image.prototype.componentDidMount = function componentDidMount() {
    var ondemand = this.props.ondemand;


    if (!ondemand) {
      this.setState({
        mounted: true
      });
    }
  };

  Image.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var ondemand = nextProps.ondemand;
    var src = nextProps.src;
    var mounted = this.state.mounted;


    if (!mounted && ondemand && src !== this.props.src) {
      this.setState({ mounted: true });
    }
  };

  /* eslint-enable */

  Image.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var size = _props.size;
    var onClick = _props.onClick;
    var className = _props.className;
    var hidden = _props.hidden;
    var children = _props.children;
    var src = _props.src;
    var lazy = _props.lazy;
    var ondemand = _props.ondemand;
    var other = (0, _objectWithoutProperties3.default)(_props, ["size", "onClick", "className", "hidden", "children", "src", "lazy", "ondemand"]);
    // size: number, other: object

    var _onClick = function _onClick(event) {
      (0, _wmreactAnalytics.fireStatelessUIEvent)(_this2.props, _this2.context, event);
      onClick(event);
    };

    var extras = {};
    if (size) {
      extras["img-" + size] = true;
    }
    var loadSrc = !ondemand && !lazy || this.state.mounted ? src : EMPTY_PIXEL;
    return _react2.default.createElement(
      "img",
      (0, _extends3.default)({}, other, {
        src: loadSrc,
        onClick: _onClick,
        className: (0, _classnames2.default)(extras, className, hidden ? "hide-content" : "")
      }),
      children
    );
  };

  return Image;
}(_react.Component);

var validateDimension = function validateDimension(props) {
  if (props.lazy && !props.size && !props.width && !props.height) {
    return new Error("If you use lazy (set to " + props.lazy + " ) you should\n      also supply size(" + props.size + ") or height &\n      width (" + props.height + " & " + props.width + ").");
  }
};

Image.propTypes = {
  lazy: _react.PropTypes.bool,
  size: _react.PropTypes.number,
  height: validateDimension,
  width: validateDimension,
  onClick: _react.PropTypes.func,
  className: _react.PropTypes.string,
  src: _react.PropTypes.string,
  ondemand: _react.PropTypes.bool
};

Image.defaultProps = {
  lazy: false,
  onClick: function onClick() {},
  className: "",
  hidden: false,
  ondemand: false
};

Image.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

exports.default = Image;