# ember-paper-password

A password input for [Ember Paper](https://github.com/miguelcobain/ember-paper) which integrates strength checking from [ember-cli-password-strength](https://github.com/elwayman02/ember-cli-password-strength).

[Demo](https://pauln.github.io/ember-paper-password/)

## Installation

* `ember install ember-paper-password`

## Compatibility

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

## Usage

`paper-password` passes most parameters through to the underlying `paper-input`.  See the [paper-input documentation](http://miguelcobain.github.io/ember-paper/#/components/input) for more information on which parameters are supported.

In addition to `paper-input` parameters, `paper-password` supports the following parameters:
* `minStrength`: Integer, defaults to `3`.  Minimum strength required for this field to pass validation; also sets the point at which `md-warn` is applied to / removed from the progress bar.
* `strengthLabel`: String, defaults to `'Password strength: '`.  Label shown below the input to indicate password strength.
* `strengthLevels`: Array, defaults to `['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent']`.  Array of 5 strings which map to `zxcvbn`'s strength levels 0-4.
* `passwordErrorMessage`: String, defaults to `'Please enter a stronger password.'`.  Error message when a password is specified but does not meet the field's `minStrength`.
* `inputClass`: String, defaults to `null`.  Additional CSS class(es) to be added to the underlying `paper-input`.

```hbs
{{paper-password label="Password" type="password" value=password onChange=(action (mut password))}}
````

## TODO

Potential improvements include:
* Displaying the feedback from zxcvbn (problems and/or suggestions)

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
