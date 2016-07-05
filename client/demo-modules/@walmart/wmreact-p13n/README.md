
P13N
=========
P13N common react components and modules used to place recommendation components on various pages.

> Before getting started, please make sure you read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide)!  

> If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)
  

## Component Documentation

Complete component documentation can be found [Here](components.md)

### dev.walmart.com Setup

To avoid inconsistencies in domain names, you should setup `dev.walmart.com` to point to `127.0.0.1`.

To do that:

```
sudo vi /etc/hosts
```

Add this line to the file:

```
127.0.0.1       dev.walmart.com
```

## Developing
See the instructions of `builder` at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)

- Installing dependencies: `npm install`
- Running a demo: `builder run demo-iso` (then navigate to `http://dev.walmart.com:4000/`)
- Linting: `builder run lint`
- Running unit tests: `builder run test` (this run's the lint task first)

## Installation
```
npm install @walmart/wmreact-p13n
```

## Usage
To know what you can import please look at `lib/index.js`.


## Common Development Workflow
- Pull latest `master`
- Create a new branch off `master`
- Add your UI component along with your unit tests
- Run `builder run generate` this generates demo and documentation.
- Run `builder run hot` this creates the demo server with hot reload.
- Ensure your component works as expected by visiting the [demo page](http://localhost:3000/)
- Run `builder run test` and ensure it passes. This will lint your js code and runt unit tests.
- Commit and open a PR against master
- Wait for ci build to pass, address any review comments as needed.
- Merge your PR
- And finally publish using these [guidelines](https://gecgithub01.walmart.com/react/react-dev-guide#version-bumping-and-publishing)


## Issues

Before submitting an issue, please see the [Issue Submission Guidelines](https://gecgithub01.walmart.com/react/react-dev-guide#submitting-issues)

## Contributing

If you're interested in contributing, see the [React Developer Guide's Contribution Guide](https://gecgithub01.walmart.com/react/react-dev-guide#contributing)

## Publishing

For publishing your component to npm, see the [Version Bumping and Publishing Guide](https://gecgithub01.walmart.com/react/react-dev-guide#version-bumping-and-publishing)

## CSS Conventions

When writing component specific css, please follow these [naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md#components).
