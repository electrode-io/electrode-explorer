import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import Infograph from "../src/components/infograph.jsx";
import StaticInfograph from "../src/components/static-infograph";

export default class Index extends React.Component {
  render() {
    const localScope = assign({React, Infograph, StaticInfograph}, this.props.scope || {});
    return (
      <div className="component-documentation">
        {Index.Components.map((component, index) => (
          <div key={index}>
            <h3 id={component.title}>{component.title}</h3>
            {component.examples.map((example, subindex) => (
              <div key={subindex}>
                {example.title ? <h4>{example.title}</h4> : null}
                <Playground
                  codeText={example.code}
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
  {
    title: "Static Infograph",
    examples: [
      {
        title: "Simple",
        type: "playground",
        code: require("raw!./examples/static-infograph.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Infograph",
    examples: [
      {
        title: "Simple",
        type: "playground",
        code: require("raw!./examples/infograph.example"),
        noRender: true
      },
      {
        title: "Animated",
        type: "playground",
        code: require("raw!./examples/infograph-percent.example"),
        noRender: false
      }
    ],
    options: {
      synonyms: ["progress"],
      image: require("./images/Infograph.png")
    }
  }
];
