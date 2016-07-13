import ElectrodeDemoIndex from "@walmart/electrode-demo-index";

import * as libraryScope from "../src/index";

const components = [
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

export default class Index extends ElectrodeDemoIndex {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._setDemoContext(libraryScope, components);
  }

}

