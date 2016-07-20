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

var _componentPlayground = require("component-playground");

var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _index = require("../bundle.min.js");

var libraryScope = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Index.prototype.render = function render() {
    var localScope = (0, _objectAssign2.default)({ React: _react2.default }, libraryScope, this.props.scope || {});
    return _react2.default.createElement("div", { className: "component-documentation" }, Index.Components.map(function (component, index) {
      return _react2.default.createElement("div", { key: index }, _react2.default.createElement("h3", { id: component.title }, component.title), component.examples.map(function (example, subindex) {
        return _react2.default.createElement("div", { key: subindex }, example.title ? _react2.default.createElement("h4", null, example.title) : null, _react2.default.createElement(_componentPlayground2.default, { codeText: example.code,
          scope: localScope,
          noRender: example.noRender }));
      }));
    }));
  };

  return Index;
}(_react2.default.Component);

exports.default = Index;

Index.propTypes = {
  scope: _react2.default.PropTypes.object
};

Index.Components = [{
  title: "Body",
  examples: [{
    type: "playground",
    code: require("raw!./examples/body.example"),
    noRender: true
  }],
  options: {
    image: require("./images/Body.png")
  }
}, {
  title: "Copy",
  examples: [{
    type: "playground",
    code: require("raw!./examples/copy.example"),
    noRender: true
  }],
  options: {
    image: require("./images/Copy.png")
  }
}, {
  title: "Descriptions",
  examples: [{
    type: "playground",
    code: require("raw!./examples/descriptions.example"),
    noRender: true
  }],
  options: {
    image: require("./images/Descriptions.png")
  }
}, {
  title: "Heading",
  examples: [{
    type: "playground",
    code: require("raw!./examples/heading.example"),
    noRender: true
  }],
  options: {
    image: require("./images/Heading.png")
  }
}, {
  title: "Icon",
  examples: [{
    type: "playground",
    code: require("raw!./examples/icon.example"),
    noRender: true
  }],
  options: {
    image: require("./images/Icon.png")
  }
}, {
  title: "Image",
  examples: [{
    type: "playground",
    code: require("raw!./examples/image.example"),
    noRender: true
  }],
  options: {
    image: require("./images/Image.png")
  }
}, {
  title: "Link",
  examples: [{
    type: "playground",
    code: require("raw!./examples/link.example"),
    noRender: true
  }],
  options: {
    image: require("./images/Link.png")
  }
}];
