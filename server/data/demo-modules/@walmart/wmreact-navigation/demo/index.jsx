import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import libraryScope from "../src/index";

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
{ title: "Breadcrumbs",
  examples: [
    {
      type: "playground",
      code: require("raw!./examples/breadcrumbs.example"),
      noRender: true
    }
  ],
  options: {
    image: require("./images/Breadcrumbs.png")
  }
},
{ title: "Subnav",
  examples: [
    {
      type: "playground",
      code: require("raw!./examples/subnav.example"),
      noRender: true
    }
  ],
  options: {
    image: require("./images/Subnav.png")
  }
},
{ title: "Tabs",
  examples: [
    {
      type: "playground",
      code: require("raw!./examples/tabs.example"),
      noRender: true
    }
  ],
  options: {
    image: require("./images/Tabs.png")
  }
},
{ title: "BackLink",
  examples: [
    {
      type: "playground",
      code: require("raw!./examples/back-link.example"),
      noRender: true
    }
  ]
}
];
