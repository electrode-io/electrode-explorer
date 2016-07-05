import React from "react";
import Playground from "component-playground";
import assign from "object-assign";
import GiftCards from "./demo-cards";

export default class Index extends React.Component {
  render() {
    const localScope = assign({ React, GiftCards }, this.props.scope || {});
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
    title: "Init spinner",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/gc-init-spinner.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Loading",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/gc-loading.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Add form props",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/add-form-props.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Add form props default",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/nocards.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Gift cards",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/gift-cards.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Gift cards error",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/gift-cards-error.example"),
        noRender: true
      }
    ]
  }
];
