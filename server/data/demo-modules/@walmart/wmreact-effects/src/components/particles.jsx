/* global requestAnimationFrame */
import React from "react";

const colors = ["#029DAF", "#E5D599", "#FFC219", "#F07C19", "#E32551"];
const gravity = 0.04;

class Particle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0.5,
      y: 0.5,
      vx: -2 + Math.random() * 4,
      vy: Math.random() * -3,
      size: 5 + Math.random() * 5,
      color: colors[this.props.index % colors.length],
      opacity: 0.5 + Math.random() * 0.5,
      shouldReset: true
    };
  }
  reset() {
    this._reset(true);
  }
  _reset(shouldReset) {
    this.setState({
      x: 0.5,
      y: 0.5,
      opacity: 0.5 + Math.random() * 0.5,
      vx: -2 + Math.random() * 4,
      vy: Math.random() * -3,
      shouldReset
    });
  }
  update() {
    let opacity = this.state.opacity;
    if (opacity - 0.005 > 0) {
      opacity -= 0.005 * (Math.random() * 3);

      let vy = this.state.vy;
      vy += gravity;
      this.setState({
        opacity,
        vy,
        x: this.state.x + (this.state.vx * 0.005),
        y: this.state.y + (vy * 0.01)
      });
    } else if (this.state.shouldReset) {
      this._reset(this.props.onReset());
    }
  }
  render() {
    return (
      <ellipse
        key={this.props.index}
        cx={(this.state.x * 100.0) + "%"}
        cy={(this.state.y * 100.0) + "%"}
        rx={this.state.size}
        ry={this.state.size}
        style={{
          fill: this.state.color,
          opacity: this.state.opacity
        }}
        />
    );
  }
}

Particle.propTypes = {
  index: React.PropTypes.number,
  onReset: React.PropTypes.func
};

class Particles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      particles: this.createParticles(),
      completed: 0,
      running: props.autoRun
    };
  }
  createParticles() {
    const particles = [];
    for (let j = 0; j < this.props.count; j++) {
      particles.push(
        j
      );
    }
    return particles;
  }
  update() {
    for (const i in this.refs) {
      this.refs[i].update();
    }
    if (this.state.running) {
      requestAnimationFrame(this.update.bind(this));
    }
  }
  start() {
    this.setState({
      running: true,
      completed: 0
    });
    for (const i in this.refs) {
      this.refs[i].reset();
    }
    requestAnimationFrame(this.update.bind(this));
  }
  componentDidMount() {
    if (this.state.running) {
      requestAnimationFrame(this.update.bind(this));
    }
  }
  componentWillUnmount() {
    this.setState({
      running: false
    });
  }
  onReset() {
    this.state.completed++;
    this.setState({
      completed: this.state.completed
    });
    return (this.state.completed < this.props.cycles);
  }
  render() {
    return (
      <svg style={{width: this.props.width, height: this.props.height}}>
        {this.state.particles.map((j) => {
          return (
            <Particle
              index={j}
              onReset={this.onReset.bind(this)}
              ref={"particle-" + j} />
          );
        })}
      </svg>
    );
  }
}

Particles.propTypes = {
  count: React.PropTypes.number,
  cycles: React.PropTypes.number,
  autoRun: React.PropTypes.bool,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};

Particles.defaultProps = {
  count: 100,
  cycles: 300,
  autoRun: true,
  width: "100%",
  height: "200"
};

export default Particles;
