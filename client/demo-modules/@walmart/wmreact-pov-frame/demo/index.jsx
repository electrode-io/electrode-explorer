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
    title: "POV Frame",
    examples: [
      {
        title: "Simple POV Frame",
        type: "playground",
        code: require("raw!./examples/pov-frame1.example"),
        noRender: true
      },
      {
        title: "POV Frame with theme button",
        type: "playground",
        code: require("raw!./examples/pov-frame2.example"),
        noRender: true
      },
      {
        title: "POV Frame with overlay buttons",
        type: "playground",
        code: require("raw!./examples/pov-frame3.example"),
        noRender: true
      },
      {
        title: "POV Frame with overlay and theme buttons",
        type: "playground",
        code: require("raw!./examples/pov-frame4.example"),
        noRender: true
      },
      {
        title: "Shorter POV Frame with overlay and theme buttons",
        type: "playground",
        code: require("raw!./examples/pov-frame5.example"),
        noRender: true
      },
      {
        title: "Image maps on POV Images",
        type: "playground",
        code: require("raw!./examples/pov-frame6.example"),
        noRender: true
      }
    ]
  }
];
