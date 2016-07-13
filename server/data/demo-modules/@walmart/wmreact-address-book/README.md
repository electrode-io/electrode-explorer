Address Book
============

<img src="http://icdn4.digitaltrends.com/image/address-book-600x600.png?ver=2" width="100px" height="100px">

> Before getting started, please make sure you read the [React Developer Guide](https://gecgithub01.walmart.com/react/react-dev-guide)!

Address Book presentatonal and components.

# Usage

See an Address Book and Address Book Container demo [here](https://gecgithub01.walmart.com/react/address-book)

## What It Looks Like

![Address Book](./docs/address-book.png)

## How To Use It

Address Book is a set of presentational (dumb) components representing the address book layout, 
address tile, address form and also address validation message. 

 - `<AddressBook />`
 - `<AddressForm />`
 - `<AddressTile />`
 - `<AddressValidationMessage />`
 - `<AddressBookActionButtons />`
 
Redux container is implemented separately from the components.

# Installation

1. If you want to use `builder` as a CLI tool (recommended), follow the instructions [here](https://github.com/formidablelabs/builder#local-install)

2. Install Address Book

  ```sh
  git clone git@gecgithub01.walmart.com:react/address-book.git
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
    "address-book": "git+ssh://git@gecgithub01.walmart.com:react/address-book#your-dev-branch"
  }
  ```

2. Install Address Book dependency:

  ```sh
  npm install
  ```

3. Build the Address Book:

  ```sh
  cd node_modules/@walmart/wmreact-address-book
  npm run build
  ```

4. Run your app.

## Issues

Before submitting an issue, please see the [Issue Submission Guidelines](https://gecgithub01.walmart.com/react/react-dev-guide#submitting-issues)

## Contributing

If you're interested in contributing, see the [React Developer Guide's Contribution Guide](https://gecgithub01.walmart.com/react/react-dev-guide#contributing)
