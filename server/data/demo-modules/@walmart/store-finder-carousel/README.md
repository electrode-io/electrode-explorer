# store-finder-carousel

Carousel for finding nearby stores

> Before getting started, please make sure you read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide)!

## Installation

```
npm install @walmart/store-finder-carousel
```

## Usage

```
import StoreFinderCarousel from "@walmart/store-finder-carousel/lib/components/store-finder-carousel";
import "@walmart/store-finder-carousel/src/styles/store-finder-carousel";
// ^ If you'd like to use the component's default styles, import them directly
```

## Development Guide

We have an ever-green guide to our development practices with this archetype. 
[Click here](https://gecgithub01.walmart.com/electrode/electrode-archetype-react-component/blob/master/DEVELOPMENT.md) 
before starting development on a component library. 

## Scripts

If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)

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
