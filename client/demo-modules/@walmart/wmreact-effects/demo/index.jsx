import React from "react/addons";
import Playground from "component-playground";
import assign from "object-assign";

import {Button} from "@walmart/wmreact-interactive";

import Particles from "../src/components/particles.jsx";

import particlesExample from "raw!./examples/particles.example";

const Index = React.createClass({
  propTypes: {
    scope: React.PropTypes.object
  },
  render() {
    return (
      <div className="component-documentation">
        <h3 id={"Arrange"}>Particles</h3>
        <Playground
          codeText={particlesExample}
          scope={assign({React, Particles, Button}, this.props.scope || {})}
          noRender={true}/>
      </div>
    );
  }
});

module.exports = Index;
