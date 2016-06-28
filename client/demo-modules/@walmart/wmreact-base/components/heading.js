"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headerMapping = {
  h1: "heading-a",
  h2: "heading-b",
  h3: "heading-c",
  h4: "heading-d",
  h5: "heading-e",
  h6: "heading-f"
};

var headingComponents = {};

var createClass = function createClass(h) {
  return _react2.default.createClass({
    displayName: "Heading",
    propTypes: {
      className: _react2.default.PropTypes.string,
      children: _react2.default.PropTypes.node,
      hidden: _react2.default.PropTypes.bool
    },
    mixins: [_react2.default.PureRenderMixin],
    render: function render() {
      var headerClass = headerMapping[h];
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var headingProps = (0, _objectWithoutProperties3.default)(_props, ["className", "children"]);

      var classes = (0, _classnames2.default)(className, headerClass, this.props.hidden ? "hide-content" : "");
      var propsToAssign = (0, _objectAssign2.default)({ className: classes }, headingProps);
      return _react2.default.createElement(h, propsToAssign, children);
    }
  });
};

for (var h in headerMapping) {
  headingComponents[h.toUpperCase()] = createClass(h);
}

exports.default = headingComponents;