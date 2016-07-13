import React from "react";
import ElectrodeDemoIndex from "@walmart/electrode-demo-index";

import * as libraryScope from "../src/index";

const components = [{
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
}];

export default class Index extends ElectrodeDemoIndex {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._setDemoContext(libraryScope, components);
  }

}

