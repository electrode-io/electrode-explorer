# usertiming

A full shim / polyfill of User Timing API

> Before getting started, please make sure you read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide)!

## Description

This component is for safe usage of the performance user timing API. It contains three levels of compatible APIs for all kinds of browsers that are out there.

For browsers that are fully compliant with the User Timing APIs (i.e. most modern ones), it will return a class that simply pass all calls through to the native implementation.

For browsers that only implement `performance.now()` (mostly Safari / iOS Safari), it provides a complete polyfill for all user timing methods implemented using pure JS and `performance.now()`

For browsers that don't implement any of these, it simply returns a safe shim that no-ops and returns empty default values for all calls.

## Usage

```javascript
  const performanceFactory = require("@walmart/usertiming");
  const perf = performanceFactory(window.performance);

  perf.mark("my mark");
  perf.measure("time from navigation.start to my mark", "my mark");
  if (perf.isImplemented()) { // returns true for native, and polyfill
    const marks = perf.getEntriesByName("my mark");
    // send to analytics or something
  }
  //or equivalently
  const marks = perf.getEntriesByName("my mark");
  if(marks.length > 0) {
    //send to analytics or something
  }
```

## Installation

```
npm install @walmart/usertiming
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
