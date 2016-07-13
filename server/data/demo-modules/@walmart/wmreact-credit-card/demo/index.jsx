import React from "react";
import Playground from "component-playground";
import assign from "object-assign";
import CreditCard from "../src/components/credit-card";
import CreditCards from "../src/components/credit-cards";

import ExampleForm from "./example-form";
import ExampleActions from "./example-actions";

export default class Index extends React.Component {

  render() {
    const localScope = assign({ React, CreditCard, CreditCards, ExampleForm, ExampleActions }, this.props.scope || {});
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
    title: "Credit card",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/credit-card.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Loading credit card",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/loading-credit-card.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Deleting credit card",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/deleting-credit-card.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Loading credit cards",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/loading-credit-cards.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Credit cards",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/credit-cards.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Saving credit card",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/saving-edit-credit-cards.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Deleting credit card when editing",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/deleting-edit-credit-cards.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Saving Credit card avs",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/saving-credit-card-avs.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Error from save credit card",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/credit-card-error.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Override form",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/override-address-form.example"),
        noRender: true
      }
    ]
  }
];
