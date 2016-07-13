import ElectrodeDemoIndex from "@walmart/electrode-demo-index";

import * as libraryScope from "../src/index";

const components = [
  {
    title: "Button",
    examples: [
      {
        title: "Basic",
        type: "playground",
        code: require("raw!./examples/button.example"),
        noRender: true
      },
      {
        title: "Fake Link",
        type: "playground",
        code: require("raw!./examples/button-fake-link.example"),
        noRender: true
      },
      {
        title: "Badge",
        type: "playground",
        code: require("raw!./examples/button-badge.example"),
        noRender: true
      },
      {
        title: "Arrow Link",
        type: "playground",
        code: require("raw!./examples/button-arrow-link.example"),
        noRender: true
      },
      {
        title: "Dropdown",
        type: "playground",
        code: require("raw!./examples/button-dropdown.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Button.png")
    }
  },
  {
    title: "Paginator",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/paginator.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Paginator.png")
    }
  },
  {
    title: "Zoom",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/zoom.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Zoom.png")
    }
  },
  {
    title: "Revealer",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/revealer.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Revealer.png")
    }
  },
  {
    title: "Revealer with ToggleButton",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/revealer-toggle-button.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Revealer.png")
    }
  },
  {
    title: "Tabber",
    examples: [
      {
        title: "Basic Tabber",
        type: "playground",
        code: require("raw!./examples/tabber.example"),
        noRender: true
      },
      {
        title: "Simple Tabber",
        type: "playground",
        code: require("raw!./examples/tabber-simple.example"),
        noRender: true
      },
      {
        title: "vertical Sampel",
        type: "playground",
        code: require("raw!./examples/vert-simple.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Tabber.png")
    }
  }
];

export default class Index extends ElectrodeDemoIndex {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._setDemoContext(libraryScope, components);
  }

}

