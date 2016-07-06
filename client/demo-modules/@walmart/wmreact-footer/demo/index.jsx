/* eslint complexity:0 */
import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

/// start imports
import example0 from "raw!./examples/footer.example";
import example1 from "raw!./examples/global-footer-item-1.example";
import example2 from "raw!./examples/global-footer-item-2.example";
import example3 from "raw!./examples/global-footer-item-3.example";
import example4 from "raw!./examples/global-footer-items-1.example";
import example5 from "raw!./examples/global-footer-items-2.example";
import example6 from "raw!./examples/global-footer.example";
import example7 from "raw!./examples/footer-copyright.example";
import example8 from "raw!./examples/global-email-signup.example";
import example9 from "raw!./examples/global-social-icons.example";

import quimbyData from "./mock-quimby-data";

import * as libraryScope from "../src/index";
/// end imports

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
    title: "Footer Integration with Tempo",
    examples: [
      {
        type: "playground",
        code: example0,
        noRender: true,
        extraScope: {
          quimbyData
        }
      }
    ]
  },
  {
    title: "Global Footer Link Item",
    examples: [
      {
        type: "playground",
        code: example1,
        noRender: true
      }
    ]
  },
  {
    title: "Global Footer Link Icon",
    examples: [
      {
        type: "playground",
        code: example2,
        noRender: true
      }
    ]
  },
  {
    title: "Global Footer Image Item",
    examples: [
      {
        type: "playground",
        code: example3,
        noRender: true
      }
    ]
  },
  {
    title: "GlobalFooter Items",
    examples: [
      {
        type: "playground",
        code: example4,
        noRender: true
      }
    ]
  },
  {
    title: "Global Footer Items Inline",
    examples: [
      {
        type: "playground",
        code: example5,
        noRender: true
      }
    ]
  },
  {
    title: "Global Footer",
    examples: [
      {
        type: "playground",
        code: example6,
        noRender: true
      }
    ]
  },
  {
    title: "Footer Copyright",
    examples: [
      {
        type: "playground",
        code: example7,
        noRender: true
      }
    ]
  },
  {
    title: "Global Email Signup",
    examples: [
      {
        type: "playground",
        code: example8,
        noRender: true
      }
    ]
  },
  {
    title: "Global Social Icons",
    examples: [
      {
        type: "playground",
        code: example9,
        noRender: true
      }
    ]
  }
];
