Address Book Container
======================

<img src="http://icdn4.digitaltrends.com/image/address-book-600x600.png?ver=2" width="100px" height="100px">

> Before getting started, please make sure you read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide)!

Address Book Redux container and infrastructure.

# Usage

The [redux](http://redux.js.org/)-based Address Book Container wraps the [Address Book](https://gecgithub01.walmart.com/react/address-book)
into a high-order component, provides it with action creators and binds it to the host application store.
It supports the entire Address Book workflow, including an interaction with the backend services. 

The [Demo](https://gecgithub01.walmart.com/redux/address-book/blob/master/demo/address-book-container/app.jsx) shows how to use it with the Address Book presentational components.

## API

```js
const AddressBookContainer = createAddressBook(AddressBook, store, options);

```

`AddressBook` is a presentational Address Book component,
 
`store` is a host app store to attach the Address Book container,

`options` is a plain JS object with the following attributes:
 
  - `addressValidationApiUrlPrefix` - a string allowing to specify AVS API url or a path part of the url, assuming
    the endpoint lives on the same domain/port as the main app;
  - `addressBoolApiUrlPrefix` - a string allowing to specify Address Book API url or a path part of the url, assuming
    the endpoint lives on the same domain/port as the main app; 
  - `i18n` - a function receiving the token as an argument and returning the properly localized copy. Should be implemented
    in the application that hosts the address book;
  - `addressApi` - allows to override the internal implementation of the address book API. See the example of API
    [here](https://gecgithub01.walmart.com/redux/address-book/blob/master/demo/address-book-container/mocked-api.jsx)
  - `addressValidationApi` - allows to override the internal implementation of the AVS API. See the example of API
    [here](https://gecgithub01.walmart.com/redux/address-book/blob/master/demo/address-book-container/mocked-api.jsx)

See an **example** of the Address Book app options [here](https://gecgithub01.walmart.com/redux/address-book/blob/master/demo/address-book-container/address-book-options.js)

# Installation

1. If you want to use `builder` as a CLI tool (recommended), follow the instructions [here](https://github.com/formidablelabs/builder#local-install)

2. Install Address Book

  ```sh
  git clone git@gecgithub01.walmart.com:redux/address-book.git
  cd address-book/
  ```
  
3. Run Demo
  
  ```sh
  npm install
  builder run demo
  ```

4. Navigate to http://localhost:4000/

To run tests:

```sh
builder run test
```

# Development

## Linked Repository

For now there's no good way of using `npm link` since the webpack build doesn't play well with linked modules. Instead,
the possible way of playing with or debugging the Address Book in the context of your app is the following:

1. Reference the Address Book in `dependencies` section of `package.json` of your app as following:

  ```json
  
  "dependencies": {
    "@walmart/redux-address-book": "git+ssh://git@gecgithub01.walmart.com:redux/address-book#your-dev-branch"
  }
  ```

2. Install Address Book dependency:

  ```sh
  npm install
  ```

3. Build the Address Book:

  ```sh
  cd node_modules/@walmart/redux-address-book
  npm run build
  ```

4. Run your app.


## Issues

Before submitting an issue, please see the [Issue Submission Guidelines](https://gecgithub01.walmart.com/react/react-dev-guide#submitting-issues)

## Contributing

If you're interested in contributing, see the [React Developer Guide's Contribution Guide](https://gecgithub01.walmart.com/react/react-dev-guide#contributing)
