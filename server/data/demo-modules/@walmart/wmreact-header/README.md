# header
> Before getting started, please make sure you read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide)!

This is a React component that displays and manages refinements.

## Installation

```
npm install @walmart/wmreact-header
```

## Polyfills

- Promise (`core-js/fn/promise` - needed by `tempo-core`)

## Scripts

If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)


To run the demo:

```
builder run demo
```

To view the demo, navigate to `http://localhost:8081`

To view the demo with hot reload enabled, navigate to `http://localhost:8081/webpack-dev-server/`


To run the typeahead demo for *desktop*:

```
builder run demo-typeahead
```

To view the demo, navigate to `http://localhost:4000`

Global search typeahead is native JS and does not have hot reload feature


To run the typeahead demo for *mobile*:

```
builder run demo-typeahead-mobile
```

To view the demo, navigate to `http://localhost:4000/index-mobile.html`

Global search typeahead is native JS and does not have hot reload feature

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
