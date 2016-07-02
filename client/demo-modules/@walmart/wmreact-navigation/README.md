# navigation

## Installation

```
npm install @walmart/wmreact-navigation
```

## Scripts

If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)


To run the demo:

```
$ builder run demo
```

To view the demo, navigate to `http://localhost:4000`

To view the demo with hot reload enabled, navigate to `http://localhost:4000/webpack-dev-server/`

To run tests:

```
$ builder run test
```

To build /lib:

```
$ builder run build-lib
```

##npm link

When using npm link, you must delete react from `zeus-components-layout/node_modules/`. This is because npm link is just a symlink, not a proper `npm install`.

You must also run `$ builder run build-lib`

##Contributing

See contributing guide here: [https://gecgithub01.walmart.com/react/react-style-guide/blob/master/contributors.md](https://gecgithub01.walmart.com/react/react-style-guide/blob/master/contributors.md)

