import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import Supports from "../src/components/supports.jsx";

export default class Index extends React.Component {
  render() {
    const localScope = assign({ React, Supports }, this.props.scope || {});
    return (
      <div className="component-documentation">
        {Index.Components.map((component, index) => (
          <div key={index}>
            <h3 id={component.title}>{component.title}</h3>
            {component.examples.map((example, subindex) => (
              <div key={subindex}>
                {example.title ? <h4>{example.title}</h4> : null}
                <Playground codeText={example.code}
                  scope={localScope}
                  noRender={example.noRender}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

Index.propTypes = {
  scope: React.PropTypes.object
};

Index.Components = [
{ title: "Supports",
  examples: [
    {
      type: "playground",
      code: require("raw!./examples/supports.example"),
      noRender: true
    }
  ]
}
];
