"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global requestAnimationFrame */


var colors = ["#029DAF", "#E5D599", "#FFC219", "#F07C19", "#E32551"];
var gravity = 0.04;

var Particle = function (_React$Component) {
  _inherits(Particle, _React$Component);

  function Particle(props) {
    _classCallCheck(this, Particle);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Particle).call(this, props));

    _this.state = {
      x: 0.5,
      y: 0.5,
      vx: -2 + Math.random() * 4,
      vy: Math.random() * -3,
      size: 5 + Math.random() * 5,
      color: colors[_this.props.index % colors.length],
      opacity: 0.5 + Math.random() * 0.5,
      shouldReset: true
    };
    return _this;
  }

  _createClass(Particle, [{
    key: "reset",
    value: function reset() {
      this._reset(true);
    }
  }, {
    key: "_reset",
    value: function _reset(shouldReset) {
      this.setState({
        x: 0.5,
        y: 0.5,
        opacity: 0.5 + Math.random() * 0.5,
        vx: -2 + Math.random() * 4,
        vy: Math.random() * -3,
        shouldReset: shouldReset
      });
    }
  }, {
    key: "update",
    value: function update() {
      var opacity = this.state.opacity;
      if (opacity - 0.005 > 0) {
        opacity -= 0.005 * (Math.random() * 3);

        var vy = this.state.vy;
        vy += gravity;
        this.setState({
          opacity: opacity,
          vy: vy,
          x: this.state.x + this.state.vx * 0.005,
          y: this.state.y + vy * 0.01
        });
      } else if (this.state.shouldReset) {
        this._reset(this.props.onReset());
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("ellipse", {
        key: this.props.index,
        cx: this.state.x * 100.0 + "%",
        cy: this.state.y * 100.0 + "%",
        rx: this.state.size,
        ry: this.state.size,
        style: {
          fill: this.state.color,
          opacity: this.state.opacity
        }
      });
    }
  }]);

  return Particle;
}(_react2.default.Component);

Particle.propTypes = {
  index: _react2.default.PropTypes.number,
  onReset: _react2.default.PropTypes.func
};

var Particles = function (_React$Component2) {
  _inherits(Particles, _React$Component2);

  function Particles(props) {
    _classCallCheck(this, Particles);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Particles).call(this, props));

    _this2.state = {
      particles: _this2.createParticles(),
      completed: 0,
      running: props.autoRun
    };
    return _this2;
  }

  _createClass(Particles, [{
    key: "createParticles",
    value: function createParticles() {
      var particles = [];
      for (var j = 0; j < this.props.count; j++) {
        particles.push(j);
      }
      return particles;
    }
  }, {
    key: "update",
    value: function update() {
      for (var i in this.refs) {
        this.refs[i].update();
      }
      if (this.state.running) {
        requestAnimationFrame(this.update.bind(this));
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.setState({
        running: true,
        completed: 0
      });
      for (var i in this.refs) {
        this.refs[i].reset();
      }
      requestAnimationFrame(this.update.bind(this));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.running) {
        requestAnimationFrame(this.update.bind(this));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        running: false
      });
    }
  }, {
    key: "onReset",
    value: function onReset() {
      this.state.completed++;
      this.setState({
        completed: this.state.completed
      });
      return this.state.completed < this.props.cycles;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        "svg",
        { style: { width: this.props.width, height: this.props.height } },
        this.state.particles.map(function (j) {
          return _react2.default.createElement(Particle, {
            index: j,
            onReset: _this3.onReset.bind(_this3),
            ref: "particle-" + j });
        })
      );
    }
  }]);

  return Particles;
}(_react2.default.Component);

Particles.propTypes = {
  count: _react2.default.PropTypes.number,
  cycles: _react2.default.PropTypes.number,
  autoRun: _react2.default.PropTypes.bool,
  width: _react2.default.PropTypes.string,
  height: _react2.default.PropTypes.string
};

Particles.defaultProps = {
  count: 100,
  cycles: 300,
  autoRun: true,
  width: "100%",
  height: "200"
};

exports.default = Particles;