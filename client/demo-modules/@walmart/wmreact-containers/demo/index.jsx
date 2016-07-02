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
    title: "Expander",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/expander.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Expander.png")
    }
  },
  {
    title: "Flyout",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/flyout.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Flyout.png")
    }
  },
  {
    title: "Magic Flyout",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/magic-flyout.example"),
        noRender: true
      }
    ]
  },
  {
    title: "SlidePanel",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/slidepanel.example"),
        noRender: false
      }
    ]
  },
  {
    title: "Responsive Flyout Slidepanel",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/responsive-flyout-slidepanel.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Spinner",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/spinner.example"),
        noRender: false
      }
    ],
    options: {
      synonyms: ["loading"],
      image: require("./images/Spinner.gif")
    }
  },
  {
    title: "Meter",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/meter.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Meter.png")
    }
  },
  {
    title: "Modal",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/modal.example"),
        noRender: false
      }
    ],
    options: {
      synonyms: ["dialog"]
    }
  },
  {
    title: "Separator",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/separator.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Shelf",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/shelf.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Tray",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/tray.example"),
        noRender: false
      }
    ],
    options: {
      image: require("./images/Tray.png")
    }
  },
  {
    title: "Well",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/well.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Well.png")
    }
  }
];
