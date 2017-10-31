# ember-paper-password

A password input for [Ember Paper](https://github.com/miguelcobain/ember-paper) which integrates strength checking from (ember-cli-password-strength)[https://github.com/elwayman02/ember-cli-password-strength].

## Installation

* `ember install ember-paper-password`

## Usage
`paper-password` passes most parameters through to the underlying `paper-input`.  See the [paper-input documentation](http://miguelcobain.github.io/ember-paper/#/components/input) for more information on which parameters are supported.

In addition to `paper-input` parameters, `paper-password` supports the following parameters:
* `minStrength`: Integer, defaults to `3`.  Minimum strength required for this field to pass validation; also sets the point at which `md-warn` is applied to / removed from the progress bar.
* `strengthLabel`: String, defaults to `Password strength: `.  Label shown below the input to indicate password strength.
* `strengthLevels`: Array, defaults to `['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent']`.  Array of 5 strings which map to `zxcvbn`'s strength levels 0-4.
* `passwordErrorMessage`: String, defaults to `Please enter a stronger password.`.  Error message when a password is specified but does not meet the field's `minStrength`.

```hbs
{{paper-password label="Password" type="password" value=password onChange=(action (mut password))}}
````
