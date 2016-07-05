/* eslint complexity:0 */
import React from "react";
import Playground from "component-playground";
import assign from "object-assign";
/// start imports
import example0 from "raw!./examples/footer.example";
import quimbyData from "./samsData";
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
  }
];
