Getting Started With React
==========================

Welcome to the React project at Walmart Labs.

If you haven't yet, please read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide), which provides information on how to submit issues, how to contribute, best practices and the React code style guide.

After looking over the Developer Guide, you should probably have a look at our [showcase](http://showcase.coreweb.walmartlabs.com/showcase) for examples of the components we offer.

## Application Overview

This repo is also a working application that you can use as a starting point for your own React application. It is based on Ryan Roemer's [Converter React](https://github.com/FormidableLabs/converter-react) project.

## Prerequisites

- Use `nvm` [nvm installation instructions](https://github.com/creationix/nvm#installation)
- Use `node@4.2.x`: `nvm use node@4.2.x`
- Use `npm@3.x`

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

## Notes

### Size

To test out how optimized the build is, here are some useful curl commands:

```
# Run production build
$ builder run build
# Minified size
$ curl -so /dev/null -w '%{size_download}\n' \
  http://127.0.0.1:3000/js/$(node -e "console.log(require('./dist/server/stats.json').assetsByChunkName.main[0]);")
148660

# Minified gzipped size
$ curl -so /dev/null -w '%{size_download}\n' --compressed \
  http://127.0.0.1:3000/js/$(node -e "console.log(require('./dist/server/stats.json').assetsByChunkName.main[0]);")
41591
```

## Development

Want to see all the tasks available to run? Run `builder help electrode-archetype-react-app` or visit [electrode-archetype-react-app's tasks](https://gecgithub01.walmart.com/electrode/electrode-archetype-react-app#tasks).

### Dev Mode

Install, setup.

```
$ npm install
```

If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)

Run the watchers, dev and source maps servers for the real production build:

Note: `builder run server` is the same as running `node server/index.js`, which by convention is just `node server`.  Please notice that after you run `node server` and `<Control-c>`, there will be a `.ccm/snapshot.json` file path in the top-level of the getting-started repository, which stores the current CCM configuration pulled from CCM web. If you set CCM `autoLoad` to `false` in the `default.json` it will not load the electrode ccm module in the server.

```
$ HOST=dev.walmart.com builder run build && builder run server
```

Run the watchers and the Webpack dev server:

```
$ HOST=dev.walmart.com builder run dev
```

Run the watchers and the Webpack dev server w/ React hot loader:

```
$ HOST=dev.walmart.com builder run hot
```

URLS to test things out:

* [`dev.walmart.com:3000/electrode-gs`](http://dev.walmart.com:3000/electrode-gs): Server-side bootstrap, then JS.
* [`dev.walmart.com:3000/electrode-gs?__mode=noss`](http://dev.walmart.com:3000/electrode-gs?__mode=noss): Pure JS.
* [`dev.walmart.com:3000/electrode-gs?__mode=nojs`](http://dev.walmart.com:3000/electrode-gs?__mode=nojs): Pure
  server-side. Note that while some links may work (e.g. clicking on a note
  title in list), many things do not since there are absolutely no JS libraries.
  This is intended to just be a small demo of SEO / "crawlable" content.

### Production

Install, setup.

```
$ npm install --production
$ builder run build
```

Pronto publish, if you enabled CDN. (See [here](https://gecgithub01.walmart.com/electrode-ops/install/tree/master/pronto-js) for more details on pronto)

```
$ npm run publish-static
```

If you don't have `pronto-js` installed:

```
npm install -g @walmart/pronto-js
```

Or you can choose to disable CDN in your [config](https://gecgithub01.walmart.com/electrode/getting-started/blob/master/config/production.json#L9)

Run the server.

```
$ NODE_ENV=production node server/index.js
```

[react]: http://facebook.github.io/react/
[cjs]: http://wiki.commonjs.org/wiki/CommonJS
[webpack]: http://webpack.github.io/
