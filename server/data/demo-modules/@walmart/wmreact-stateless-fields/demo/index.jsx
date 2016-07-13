import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import * as libraryScope from "../lib/index.js";
import ControlledFloatingMask from "./controlled-floating-mask";

import visaImage from "./images/Visa.svg";

export default class Index extends React.Component {
  render() {
    const localScope = assign({
      React,
      ControlledFloatingMask,
      visaImage
    }, this.props.scope || {}, libraryScope);
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
    title: "Field",
    examples: [
      {
        title: "Field",
        type: "playground",
        code: require("raw!./examples/field.example"),
        noRender: true
      }
    ]
  },
  {
    title: "FloatingField",
    examples: [
      {
        title: "FloatingField",
        type: "playground",
        code: require("raw!./examples/floating-field.example"),
        noRender: true
      }
    ]
  },
  {
    title: "MaskedField",
    examples: [
      {
        title: "MaskedField",
        type: "playground",
        code: require("raw!./examples/masked-field.example"),
        noRender: true
      }
    ]
  },
  {
    title: "PasswordField",
    examples: [
      {
        title: "PasswordField",
        type: "playground",
        code: require("raw!./examples/password-field.example"),
        noRender: true
      }
    ]
  },
  {
    title: "CheckboxField",
    examples: [
      {
        title: "CheckboxField",
        type: "playground",
        code: require("raw!./examples/checkbox-field.example"),
        noRender: true
      },
      {
        title: "CheckboxField with type=\"form\"",
        type: "playground",
        code: require("raw!./examples/checkbox-field-type-form.example"),
        noRender: true
      },
      {
        title: "CheckboxField with type=\"checkout\"",
        type: "playground",
        code: require("raw!./examples/checkbox-field-type-checkout.example"),
        noRender: true
      },
      {
        title: "CheckboxField with isSmall",
        type: "playground",
        code: require("raw!./examples/checkbox-field-small.example"),
        noRender: true
      }
    ]
  },
  {
    title: "RadioField",
    examples: [
      {
        title: "RadioField",
        type: "playground",
        code: require("raw!./examples/radio-field.example"),
        noRender: true
      },
      {
        title: "RadioField with type=\"alt\"",
        type: "playground",
        code: require("raw!./examples/radio-field-alt.example"),
        noRender: true
      },
      {
        title: "RadioField with type=\"hero\"",
        type: "playground",
        code: require("raw!./examples/radio-field-hero.example"),
        noRender: true
      }
    ]
  },
  {
    title: "SelectField",
    examples: [
      {
        title: "SelectField",
        type: "playground",
        code: require("raw!./examples/select-field.example"),
        noRender: true
      }
    ]
  }
];
