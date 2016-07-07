# credit-card

This is the redux code that wraps [react/credit-card](https://gecgithub01.walmart.com/react/credit-card)

> Before getting started, please make sure you read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide)!

You can use this component as a stand alone widget like component by using CreditCardsWidget.

If you have your own provider you might want to look at ConnectedCreditCards instead.

The default endpoints are built to be usable with [lapetus/user](https://gecgithub01.walmart.com/lapetus/user)

You could also point the endpoint towards [www.walmart.com/api](www.walmart.com/api) if you don't want/need a local setup locally

## Redux middlewares
 * [redux-multi](https://github.com/ashaffer/redux-multi]) - return array of actions to dispatch all of them
 * [redux-effects-fetch](https://github.com/redux-effects/redux-effects-fetch) - used to make web requests
 * [bind-effect](https://github.com/redux-effects/bind-effect) - used to bind the result from other effects
 * [redux-thunk](https://github.com/gaearon/redux-thunk) - used to be able to dispatch result from async non-effect based actions

## Configuration
In order for this component to work correctly you need to add some configuration on your end.

```
import {config} from "@walmart/redux-credit-card";
config.configure({});
```

 * __voltageEnv__ set to "production" to use production voltage key, defaults to the QA environment
 
 
If you want to use your own middlewares (to deal with unauthorized users for example) you need to create your own store

```
import {createStore} from "@walmart/redux-credit-card";
const store = createStore.default(createStore.defaultMiddleware.concat(myOwnMiddlewares));
...
export default () => {
  return <CreditCardsWidget store={store} fetchInitialData/>
}
```

## Events
Events are sent from the actionCreators for the app to deal with as needed

 * __UNAUTHORIZED_ERROR__ sent when a request fails due to the user being unauthorized

## Installation

```
npm install @walmart/redux-credit-card
```

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
