import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import * as libraryScope from "../src/index";

export default class Index extends React.Component {
  render() {
    const localScope = assign({ React }, this.props.scope || {}, libraryScope);
    return (
      <div className="component-documentation">
        {Index.Components.map((component, index) => {
          const ux = component.options && component.options.ux ? component.options.ux() : null;
          return (
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
              {index === 0 && ux ? ux : ""}
            </div>
          );
        })}
      </div>
    );
  }
}

Index.propTypes = {
  scope: React.PropTypes.object
};

Index.Components = [
  {
    title: "Accordion",
    examples: [
      {
        title: "Simple",
        type: "playground",
        code: require("raw!./examples/example1.example"),
        noRender: true
      },
      {
        title: "Complete",
        type: "playground",
        code: require("raw!./examples/example2.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Accordion.png"),
      ux: () => (
        <div>
          <h4>Usage (from UX)</h4>
          <ul>
          <li>Use when you want the benefits of a normal sidebar menu, but do not have the space to list all options.</li>
          <li>Use when there are more than 2 main sections on a website each with 2 or more subsections.</li>
          <li>Use when you have less than 10 main sections</li>
          <li>Use when you only have two levels to show in the main navigation.</li>
          </ul>
          <h4>Specifications (from UX)</h4>
          <ul>
          <li>Each headline / section has a panel, which upon clicking can be expanded either vertically or horizontally into showing its subsections.</li>
          <li>The transition from showing no options of a headline to showing a headline’s list of options can be done either with a page refresh or with a javascript DHTML animation.</li>
          <li>When one panel is clicked it is expanded, while other panels are collapsed.</li>
          </ul>
        </div>
      )
    }
  }
];
