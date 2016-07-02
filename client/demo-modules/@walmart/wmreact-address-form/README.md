# The AddressForm Component

> Before getting started, please make sure you read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide)  !

`AddressForm` gives you a standard `form` for dealing with addresses. It includes fields for zip-code, city, all address lines, and also includes the `state-chooser` component ( See the state-chooser [here](https://gecgithub01.walmart.com/react/state-chooser) ). For example:

```
<AddressForm
  ref='addressForm'
  validationUrl={[String Value]}
  onValidationStart={[Function]}
  successHandler={[Function]}
  errorHandler={[Function]}
  address1={[String Value]}
  address2={[String Value]}
  zipCode={[String Value]}
  city={[String Value]}
  state={[String Value]}/>
```

# Validation

All validation is handled within the component itself. If server validation is required, you must supply the url for the service's endpoint to the `validationUrl` prop. You can supply your own custom success and error handlers via the `successHandler` and `errorHandler` props.

If no server validation is required, then exclude the following props: `validationUrl`, `successHandler` and `errorHandler`. The validation method will then return a boolean value depending upon whether the form fields are valid.

If you would like specific events, animations, or values to update/trigger prior to starting the validation, pass in a function to `onValidationStart`. This function will trigger before server validation begins.

To begin validation, just call the method `validateForm`.

# Convenience Methods

* getAddress - returns an object with the values of all the address fields
  * This will return an object like so:
    ```
    {
      address1: this.refs.address1.getValue(),
      address2: this.refs.address2.getValue(),
      city: this.refs.city.getValue(),
      state: this.refs.state.getValue(),
      zipCode: this.refs.zipCode.getValue()
    }
    ```

* invalidateFields - marks specific fields as invalid
  * Requires an object with the following format
    ```
    {
      cityIsValid: bool,
      stateIsValid: bool,
      postalCodeIsValid: bool,
      streetNumberIsValid: bool
    }
    ```

# Notes

* If any of the field props are supplied (address1, address2, city, etc) the form will populate the form with them.
* If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)


# Example Images

This is an image of the mobile AddressForm:

![AddressForm Mobile](/images/address-form-mobile.png)

This is an image of the desktop AddressForm:

![AddressForm Desktop](/images/address-form-desktop.png)

This is an image of the AddressForm when a field is invalid:

![AddressForm Invalidated](/images/address-form-invalid.png)

# Installation

Layout React Components

To run the demo:

```
npm run demo
```

To view the demo, navigate to `http://localhost:4000`

To view the demo with hot reload enabled, navigate to `http://localhost:4000/webpack-dev-server/`

To run tests:

```
npm run test
```

To build /lib:

```
npm run build
```

##npm link

When using npm link, you must delete react from `zeus-components-layout/node_modules/`. This is because npm link is just a symlink, not a proper `npm install`.

You must also run `npm run build`

##fetch polyfill

Due to `fetch` being an experimental function, for proper browser support your application will need to use a polyfill. Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), use [https://github.com/github/fetch](https://github.com/github/fetch).

## Issues

Before submitting an issue, please see the [Issue Submission Guidelines](https://gecgithub01.walmart.com/react/react-dev-guide#submitting-issues)

## Contributing

If you're interested in contributing, see the [React Developer Guide's Contribution Guide](https://gecgithub01.walmart.com/react/react-dev-guide#contributing)
