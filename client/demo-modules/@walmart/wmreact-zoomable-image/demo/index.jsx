import React, { PropTypes, Component } from "react";
import Playground from "component-playground";
import assign from "object-assign";

import PannableContainerExample from "raw!./examples/pannable-container.example";
import SpinnerImageExample from "raw!./examples/spinner-image.example";
import ZoomableImageExample from "raw!./examples/zoomable-image.example";
import ZoomControlButtonsExample from "raw!./examples/zoom-control-buttons.example";

import * as libraryScope from "../src/index";

export default class Index extends Component {
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
  scope: PropTypes.object
};

Index.Components = [
  {
    title: "SpinnerImage",
    examples: [
      {
        type: "playground",
        code: SpinnerImageExample,
        noRender: true
      }
    ]
  },
  {
    title: "PannableContainer",
    examples: [
      {
        type: "playground",
        code: PannableContainerExample,
        noRender: true
      }
    ]
  },
  {
    title: "ZoomControlButtons",
    examples: [
      {
        type: "playground",
        code: ZoomControlButtonsExample,
        noRender: true
      }
    ]
  },
  {
    title: "ZoomableImage",
    examples: [
      {
        type: "playground",
        code: ZoomableImageExample,
        noRender: true
      }
    ]
  }
];
