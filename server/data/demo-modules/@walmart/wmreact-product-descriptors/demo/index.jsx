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
                  scope={assign(localScope, example.extraScope || {})}
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
    title: "Rating Selector",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/rating-selector.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Stars",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/stars.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Stars.png")
    }
  },
  {
    title: "Flag",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/flag.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Flag.png")
    }
  },
  {
    title: "Flag List",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/flag-list.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Short description",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/short-description.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Specification",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/specification.example"),
        noRender: true
      }
    ]
  },
  {
    title: "ReviewHelpfulness",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/review-helpfulness.example"),
        noRender: true
      }
    ]
  }
];
