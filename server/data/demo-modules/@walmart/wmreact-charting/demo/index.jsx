import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import CircleChart from "../src/components/circle-chart.jsx";

import circleChartExample from "raw!./examples/circle-chart.example";

const Index = React.createClass({
  propTypes: {
    scope: React.PropTypes.object
  },
  render() {
    return (
      <div className="component-documentation">
        <Playground codeText={circleChartExample}
          scope={assign({ React, CircleChart }, this.props.scope || {})}
          noRender={false}/>
      </div>
    );
  }
});

module.exports = Index;
