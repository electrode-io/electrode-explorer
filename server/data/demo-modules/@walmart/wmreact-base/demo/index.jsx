import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import * as libraryScope from "../src/index.js";

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
    title: "Body",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/body.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Body.png")
    }
  },
  {
    title: "Copy",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/copy.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Copy.png")
    }
  },
  {
    title: "Descriptions",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/descriptions.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Descriptions.png")
    }
  },
  {
    title: "Heading",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/heading.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Heading.png")
    }
  },
  {
    title: "Icon",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/icon.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Icon.png")
    }
  },
  {
    title: "Image",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/image.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Image.png")
    }
  },
  {
    title: "Link",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/link.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Link.png")
    }
  }
];
