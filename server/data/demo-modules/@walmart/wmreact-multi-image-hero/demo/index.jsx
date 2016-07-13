import React, { PropTypes, Component } from "react";
import Playground from "component-playground";
import assign from "object-assign";

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
    "name": "BundleImage",
    "examples": [
      require("raw!./examples/bundle-image.example")
    ]
  },
  {
    "name": "ImageList",
    "examples": [
      require("raw!./examples/image-list.example")
    ]
  },
  {
    "name": "CarouselList",
    "examples": [
      require("raw!./examples/carousel-image-list.example")
    ]
  },
  {
    "name": "MultiImageHero",
    "examples": [
      require("raw!./examples/multi-image-hero.example")
    ]
  }
];
