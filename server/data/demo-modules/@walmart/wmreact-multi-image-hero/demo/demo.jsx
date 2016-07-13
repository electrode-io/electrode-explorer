/*global document:false*/
import React from "react";
import assign from "object-assign";
import Playground from "component-playground";
import * as libraryScope from "../src/index";

export default class Demo extends React.Component {
  render() {
    const scope = assign({React}, libraryScope, this.props.scope);
    return (
      <div className="demo">
        {Demo.Components.map((component, index) => (
          <div key={index}>
            <h3>{component.name}</h3>
            {component.examples.map((example, i) => (
              <Playground scope={scope} codeText={example} key={i} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

Demo.propTypes = {
  scope: React.PropTypes.object
};

Demo.Components = [
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
