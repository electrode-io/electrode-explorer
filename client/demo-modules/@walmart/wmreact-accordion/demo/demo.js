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

var _electrodeDemoIndex = require("@walmart/electrode-demo-index");

var _electrodeDemoIndex2 = _interopRequireDefault(_electrodeDemoIndex);

var _index = require("../bundle.min");

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

var components = [{
  title: "Accordion",
  examples: [{
    title: "Simple",
    type: "playground",
    code: require("raw!./examples/example1.example"),
    noRender: true
  }, {
    title: "Complete",
    type: "playground",
    code: require("raw!./examples/example2.example"),
    noRender: true
  }],
  options: {
    image: require("./images/Accordion.png"),
    ux: function ux() {
      return _react2.default.createElement("div", null, _react2.default.createElement("h4", null, "Usage (from UX)"), _react2.default.createElement("ul", null, _react2.default.createElement("li", null, "Use when you want the benefits of a normal sidebar menu, but do not have the space to list all options."), _react2.default.createElement("li", null, "Use when there are more than 2 main sections on a website each with 2 or more subsections."), _react2.default.createElement("li", null, "Use when you have less than 10 main sections"), _react2.default.createElement("li", null, "Use when you only have two levels to show in the main navigation.")), _react2.default.createElement("h4", null, "Specifications (from UX)"), _react2.default.createElement("ul", null, _react2.default.createElement("li", null, "Each headline / section has a panel, which upon clicking can be expanded either vertically or horizontally into showing its subsections."), _react2.default.createElement("li", null, "The transition from showing no options of a headline to showing a headline’s list of options can be done either with a page refresh or with a javascript DHTML animation."), _react2.default.createElement("li", null, "When one panel is clicked it is expanded, while other panels are collapsed.")));
    }
  }
}];

var Index = function (_ElectrodeDemoIndex) {
  (0, _inherits3.default)(Index, _ElectrodeDemoIndex);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);
    return (0, _possibleConstructorReturn3.default)(this, _ElectrodeDemoIndex.call(this, props));
  }

  Index.prototype.componentDidMount = function componentDidMount() {
    this._setDemoContext(libraryScope, components);
  };

  return Index;
}(_electrodeDemoIndex2.default);

exports.default = Index;
