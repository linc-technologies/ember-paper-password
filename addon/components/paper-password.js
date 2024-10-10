import Component from '@ember/component';
import { computed } from '@ember/object';
import { A } from '@ember/array';
import { assert } from '@ember/debug';
import zxcvbn from 'zxcvbn';
import layout from '../templates/components/paper-password';

export default Component.extend({
  layout,
  minStrength: 3,
  strengthLabel: 'Password strength: ',
  strengthLevels: A(['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent']),
  passwordErrorMessage: 'Please enter a stronger password.',
  errors: A([]),
  customValidations: A([]),

  passwordStrength: computed('value', function () {
    let password = this.value;
    if (password) {
      return zxcvbn(password);
    } else {
      return { score: 0 };
    }
  }),
  strengthValue: computed('passwordStrength.score', function () {
    return (this.passwordStrength.score / 4) * 100;
  }),
  strengthLevel: computed(
    'passwordStrength.score',
    'strengthLevels',
    function () {
      return this.strengthLevels[this.passwordStrength.score];
    }
  ),
  strengthWarning: computed(
    'minStrength',
    'passwordStrength.score',
    function () {
      return this.passwordStrength.score < this.minStrength;
    }
  ),

  inputErrors: computed(
    'errors.[]',
    'minStrength',
    'passwordErrorMessage',
    'passwordStrength.score',
    'value',
    function () {
      let myErrors = A().pushObjects(this.errors);
      let passwordStrength = this.passwordStrength.score;
      let password = this.value;

      if (password && passwordStrength < this.minStrength) {
        myErrors.pushObject({
          message: this.passwordErrorMessage,
        });
      }

      return myErrors;
    }
  ),

  didReceiveAttrs() {
    this._super(...arguments);
    assert(
      '{{paper-password}} requires an `onChange` action or null for no action.',
      this.onChange !== undefined
    );
  },
});
