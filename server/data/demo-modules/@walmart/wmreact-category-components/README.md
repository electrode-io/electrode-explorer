Category components
=========
A set of react components used to display category components (tempo modules)

> Before getting started, please make sure you read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide)!  

> If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)


## Component Documentation

Complete component documentation can be found [Here](components.md)

## Developing
See the instructions of `builder` at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)

- Installing dependencies: `npm install`
- Running a demo: `builder run demo` (then navigate to `http://localhost:4000/`)
- Linting: `builder run lint`
- Running unit tests: `builder run test` (this run's the lint task first)

## Installation
```
npm install @walmart/wmreact-category-components
```

## Usage
To know what you can import please look at `lib/index.js`.
```
import BreadCrumb as module from "@walmart/wmreact-category-components"
```

## Common Development Workflow
- Pull latest `master`
- Create a new branch off `master`
- Add your UI component along with your unit tests
- Run `builder run generate` this generates demo and documentation.
- Run `builder run hot` this creates the demo server with hot reload.
- Ensure your component works as expected by visiting the [demo page](http://localhost:4000/)
- Run `builder run test` and ensure it passes. This will lint your js code and runt unit tests.
- Commit and open a PR against master
- Wait for ci build to pass, address any review comments as needed.
- Merge your PR
- And finally publish using these [guidelines](https://gecgithub01.walmart.com/react/react-dev-guide#version-bumping-and-publishing)


## Version Locking

### Updating a subdependency, e.g., ensuring that `wmreact-product-card` updates to a latest minor `wmreact-product-variants`
```
$ rm npm-shrinkwrap.json

# Before you make your final commit or PR.
$ npm run lock
```

### Installing a new dependency or updating a dependency version in package.json
```
$ rm npm-shrinkwrap.json

# delete node modules
$ rm -Rf ./node_moduels

# if installing a new dependency
$ npm install --save <MY_NEW_PACKAGE_DEPENDENCY>

# if updating a dependency
$ npm update <MY_NEW_PACKAGE_DEPENDENCY>

# Before you make your final commit or PR.
$ npm run lock
```

## Quick Start

Run `builder run hot` from the terminal and visit [`http://localhost:4000/`](http://localhost:4000/) to see some electrode goodness.
To view the demo with hot reload enabled, navigate to `http://localhost:4000/webpack-dev-server/`

## Issues

Before submitting an issue, please see the [Issue Submission Guidelines](https://gecgithub01.walmart.com/react/react-dev-guide#submitting-issues)

## Contributing

If you're interested in contributing, see the [React Developer Guide's Contribution Guide](https://gecgithub01.walmart.com/react/react-dev-guide#contributing)

## Publishing

For publishing your component to npm, see the [Version Bumping and Publishing Guide](https://gecgithub01.walmart.com/react/react-dev-guide#version-bumping-and-publishing)

## CSS Conventions

When writing component specific css, please follow these [naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md#components).
