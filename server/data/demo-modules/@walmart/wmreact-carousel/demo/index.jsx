import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import Carousel from "../src/components/carousel.jsx";
import FeaturedElementCarousel from "../src/components/featured-element-carousel.jsx";

export default class Index extends React.Component {
  render() {
    const localScope = assign({ React, Carousel, FeaturedElementCarousel }, this.props.scope || {});
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
{ title: "Carousel",
  examples: [
    {
      type: "playground",
      code: require("raw!./examples/carousel.example"),
      noRender: true
    }
  ],
  options: {
    image: require("./images/Carousel.png")
  }
},
{ title: "Carousel using Screen Width",
  examples: [
    {
      type: "playground",
      code: require("raw!./examples/carousel-screen-width.example"),
      noRender: true
    }
  ],
  options: {
    image: require("./images/Carousel.png")
  }
},
{ title: "FeaturedElementCarousel",
  examples: [
    {
      type: "playground",
      code: require("raw!./examples/featured-element-carousel.example"),
      noRender: true
    }
  ],
  options: {
    image: require("./images/Carousel.png")
  }
}
];
