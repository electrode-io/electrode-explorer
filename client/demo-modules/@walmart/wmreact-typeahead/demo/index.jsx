import React from "react";
import Playground from "component-playground";

import Typeahead from "../src/components/typeahead.jsx";

import typeaheadExample from "raw!./examples/typeahead.example";
import asyncExample from "raw!./examples/async.example";

const Index = React.createClass({
  render() {
    return (
      <div className="component-documentation">
        <h4>Simple typeahead</h4>
        <Playground codeText={typeaheadExample} scope={{React, Typeahead}}/>
        <h4>Manual typeahead with async</h4>
        <Playground codeText={asyncExample} scope={{React, Typeahead}}/>
      </div>
    );
  }
});

module.exports = Index;
