import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import * as libraryScope from "../src/index";

export default class Index extends React.Component {
  render() {
    const localScope = assign({ React }, this.props.scope || {}, libraryScope);
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
  {
    title: "Stack",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/stack.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Arrange",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/arrange.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Grid",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/grid.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Collapsable",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/example1.example"),
        noRender: false
      }
    ]
  },
  {
    title: "Fixie",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/example2.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Layout",
    examples: [
      {
        title: "Two Column",
        type: "playground",
        code: require("raw!./examples/example3.example"),
        noRender: true
      },
      {
        title: "Three Column",
        type: "playground",
        code: require("raw!./examples/example5.example"),
        noRender: true
      }
    ],
    options: {
      synonyms: ["responsive"]
    }
  },
  {
    title: "MediaSelector",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/example4.example"),
        noRender: true
      }
    ],
    options: {
      synonyms: ["responsive"]
    }
  },
  {
    title: "CSSMediaSelector",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/example6.example"),
        noRender: true
      }
    ],
    options: {
      synonyms: ["responsive"]
    }
  }
];
