import React from "react";
import Color from "color";
import tweenState from "react-tween-state";

const PathGroup = React.createClass({
  mixins: [tweenState.Mixin],

  propTypes: {
    path: React.PropTypes.string,
    percentage: React.PropTypes.number,
    color: React.PropTypes.string,
    strokeWidth: React.PropTypes.number,
    size: React.PropTypes.number
  },

  getInitialState() {
    const pathArray = this.props.path.split(",");
    const dashArray = ((100 - pathArray[6]) * 100) -
      (pathArray[1].split(" ")[0] * (pathArray[7] - pathArray[1].split(" ")[0]));
    return {
      dashArray,
      dashOffset: dashArray - 1
    };
  },
  componentDidMount() {
    this.tweenState("dashOffset", {
      easing: tweenState.easingTypes.easeOutSine,
      duration: 500,
      endValue: this.state.dashArray * this._getInversePercentage()
    });
  },
  componentWillReceiveProps() {
    this.tweenState("dashOffset", {
      easing: tweenState.easingTypes.easeOutSine,
      duration: 500,
      endValue: this.state.dashArray * this._getInversePercentage()
    });
  },
  _getInversePercentage() {
    let percentage = this.props.percentage;

    if (percentage === 0) {
      percentage = 1;
    }

    if (percentage === 100) {
      percentage = 99;
    }

    return (100 - percentage) * 0.01;
  },
  render() {
    const background = new Color(this.props.color);
    const foreground = new Color(this.props.color);

    const backgroundStyle = {
      fill: "none",
      stroke: background.darken(0.3).hexString(),
      strokeWidth: this.props.strokeWidth
    };

    const foregroundStyle = {
      fill: "none",
      stroke: foreground.hexString(),
      strokeLinecap: "round",
      strokeWidth: this.props.strokeWidth - 5,
      strokeDasharray: this.state.dashArray,
      strokeDashoffset: this.getTweeningValue("dashOffset")
    };

    return (
      <g>
        <circle
          cx="100"
          cy="100"
          r={this.props.size}
          style={backgroundStyle}/>
        <path
          d={this.props.path}
          style={foregroundStyle}/>
      </g>
    );
  }
});

class CircleChart extends React.Component {
  /* eslint-disable max-params */
  /* Requires refactor, max-params should be 3, this is 4 */
  _generatePath(size, value, total, R) {
    const alpha = 360 / total * value;
    const a = (90 - alpha) * Math.PI / 180;
    const x = size + R * Math.cos(a);
    const y = size - R * Math.sin(a);
    let center;
    let path;

    if (total === value) {
      path = "M" + size + "," + (size - R) + " A" + R + "," + R + "," + 0 + ","
        + 1 + "," + 1 + "," + (size - 0.01) + "," + size - R;
    } else {
      if (alpha > 180) {
        center = 1;
      } else {
        center = 0;
      }
      path = "M" + size + "," + (size - R) + " A" + R + "," + R + "," + 0 + ","
        + center + "," + 1 + "," + x + "," + y;
    }
    return path;
  }
  /* eslint-enable max-params */
  renderData() {
    const self = this;
    let circleSize = 74;
    const strokeWidth = 60 / this.props.data.length;
    return (
      <svg height={this.props.height} width={this.props.width} viewBox="0 0 200 200">
        {this.props.data.map((d, index) => {
          const path = (
            <PathGroup
              key={index}
              path={self._generatePath(100, 99, 100, circleSize)}
              percentage={d.percentage}
              size={circleSize}
              color={d.color}
              strokeWidth={strokeWidth}
            />
          );

          circleSize -= strokeWidth + 2;

          return path;

        })}
      </svg>
    );
  }
  render() {
    return (
      <div className="circle-chart">
        {this.renderData()}
      </div>
    );
  }
}

CircleChart.displayName = "CircleChart";

CircleChart.propTypes = {
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  height: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  data: React.PropTypes.array.isRequired
};

CircleChart.defaultProps = {
  width: 200,
  height: 200,
  data: []
};

module.exports = CircleChart;
