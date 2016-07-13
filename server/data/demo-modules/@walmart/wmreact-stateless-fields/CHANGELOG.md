# Changelog

## v2.0.0

Updated to latest component archetype, using Lithe to pull in base styles and variables.

## v1.0.0-alpha.1

Initial alpha release. Includes support for the foundational form components to build an
application. Philosophically these component are intended to behave as idiomatic React forms do.
Specifically, anything you have read or learned from http://facebook.github.io/react/docs/forms.html
or any other idiomatic React work should behave as expected. They are intended to be a minimally
opinionated implementation of our public [Style Guide’s forms](http://walmartlabs.github.io/web-style-guide/#form-control).

Regarding the styles, the intent is that these do not carry outer layout constraints and opinions.
Layout concerns such as margins or external dimensions are left to the consumer to implement.
Additionally, these are not meant to cover *every* component that the style guide does. For example,
[Radio Option Tile](http://walmartlabs.github.io/web-style-guide/#radio-option-tile) and the
[Chooser](http://walmartlabs.github.io/web-style-guide/#chooser) are intentionally not implemented
at this point in time, because they both have much more scope than a standard form element.

These forms were written with [redux-forms](http://facebook.github.io/react/docs/forms.html)
in mind, but this is not required.

Components:

* `<Field />`: the most simplistic, foundational form element.
* `<FloatingField />`: UX’s recommended form element for common usage.
* `<MaskedField />`: A `<Field />` with support for masked characters like phone numbers or dates.
* `<PasswordField />`: A `<Field type="password" />` with support for the user to toggle between text and password mode to verify their password.
* `<CheckboxField />`: The [`Option`](http://walmartlabs.github.io/web-style-guide/#option) from the style guide.
* `<RadioField />`: The [`Radio`](http://walmartlabs.github.io/web-style-guide/#radio) from the style guide.
* `<SelectField />`: A standard `<select />` field with some basic styling to fit our UX style.

This alpha release is intended for early adopters to catch any edge cases, or situations of an
overly opinionated implementation. It is expected that the external PropType interface is finalized
at this point and potentially only base styling will change. Note that is the *expectation*. The
alpha release is to ensure that expectation is valid, at which point we will finalize documentation
and officially publish our 1.0.0 release.

