/* eslint complexity:0 */
import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import * as libraryScope from "../src/index";

export default class Index extends React.Component {
  render() {
    const localScope = assign({ React }, libraryScope, this.props.scope || {});
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
    title: "Alt Image Carousel with Video",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/alt-image-carousel-with-video.example"),
        noRender: false
      }
    ]
  },
  {
    title: "Alt Image Carousel without Video",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/alt-image-carousel-without-video.example"),
        noRender: false
      }
    ]
  }, {
    title: "Image with primary image prop set",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/image-with-primary-image-prop.example"),
        noRender: false
      }
    ]
  }
];
