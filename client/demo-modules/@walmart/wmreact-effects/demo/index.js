"use strict";

var _addons = require("react/addons");

var _addons2 = _interopRequireDefault(_addons);

var _componentPlayground = require("component-playground");

var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _wmreactInteractive = require("@walmart/wmreact-interactive");

var _particles = require("../src/components/particles.jsx");

var _particles2 = _interopRequireDefault(_particles);

var _particles3 = require("raw!./examples/particles.example");

var _particles4 = _interopRequireDefault(_particles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = _addons2.default.createClass({
  displayName: "Index",

  propTypes: {
    scope: _addons2.default.PropTypes.object
  },
  render: function render() {
    return _addons2.default.createElement(
      "div",
      { className: "component-documentation" },
      _addons2.default.createElement(
        "h3",
        { id: "Arrange" },
        "Particles"
      ),
      _addons2.default.createElement(_componentPlayground2.default, {
        codeText: _particles4.default,
        scope: (0, _objectAssign2.default)({ React: _addons2.default, Particles: _particles2.default, Button: _wmreactInteractive.Button }, this.props.scope || {}),
        noRender: true })
    );
  }
});

module.exports = Index;