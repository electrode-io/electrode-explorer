import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import StateChooser from "../src/components/state-chooser.jsx";

import stateChooserExample from "raw!./examples/state-chooser.example";

const Index = React.createClass({
  propTypes: {
    scope: React.PropTypes.object
  },
  render() {
    return (
      <div className="component-documentation">

        <h3>State Chooser</h3>
        <Playground
          codeText={stateChooserExample}
          scope={assign({React, StateChooser}, this.props.scope || {})}
          noRender={true}/>

      </div>
    );
  }
});

module.exports = Index;
