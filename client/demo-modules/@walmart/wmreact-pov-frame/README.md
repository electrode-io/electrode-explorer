# POVFrame

POVFrame component which represents a single Frame in our POV Modules.

> Before getting started, please make sure you read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide)!

# POV Frame Component

`POVFrame` abstracts a single frame of POV modules. It will be a Image Link and decorations like
Image Maps, Themed Button, Pricing Bubbles etc. For example, this code:

```
<POVFrame
  url: "/some-url",
  image: {
    src: "/some-image-source",
    alt: "alt text",
    title: "title text",
    height: 300,
    width: 1364
  },
/>
```
builds a responsive frame without any decorators like button, overlays etc.

![Variations of POV Frames](./images/pov-frames.gif)

POV Frame Responsiveness across all the breakpoint.

![Responsiveness](./images/pov-frames-responsiveness.gif)

## Installation

```
npm install @walmart/wmreact-pov-frame
```

## Scripts


If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)

Anywhere you see `builder run`, if you do not use the builder cli, you can use `npm run` instead.

To run the demo:

```
builder run demo
```

To view the demo, navigate to `http://localhost:4000`

To view the demo with hot reload enabled, navigate to `http://localhost:4000/webpack-dev-server/`

To run tests:

```
builder run test
```

To build /lib:

```
builder run build
```

##npm link

When using npm link, you must delete react from `zeus-components-layout/node_modules/`. This is because npm link is just a symlink, not a proper `npm install`.

You must also run `builder run build`
## Issues

Before submitting an issue, please see the [Issue Submission Guidelines](https://gecgithub01.walmart.com/react/react-dev-guide#submitting-issues)

## Contributing

If you're interested in contributing, see the [React Developer Guide's Contribution Guide](https://gecgithub01.walmart.com/react/react-dev-guide#contributing)
