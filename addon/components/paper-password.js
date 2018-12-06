import Component from '@ember/component';
import { computed } from '@ember/object';
import { A } from '@ember/array';
import { assert } from '@ember/debug';
import strength from 'password-strength';
import layout from '../templates/components/paper-password';

export default Component.extend({
  layout,
  minStrength: 3,
  strengthLabel: 'Password strength: ',
  strengthLevels: ['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent'],
  passwordErrorMessage: 'Please enter a stronger password.',
  errors: [],
  customValidations: [],

  passwordStrength: computed('value', function() {
    let password = this.get('value');
    if (password) {
      return strength(password);
    } else {
      return {score: 0};
    }
  }),
  strengthValue: computed('value', function() {
    return (this.get('passwordStrength').score / 4) * 100;
  }),
  strengthLevel: computed('value', function() {
    return this.get('strengthLevels')[this.get('passwordStrength').score];
  }),
  strengthWarning: computed('value', function() {
    return this.get('passwordStrength').score < this.get('minStrength');
  }),

  inputErrors: computed('errors.[]', 'value', function() {
    let myErrors = A().pushObjects(this.get('errors'));
    let passwordStrength = this.get('passwordStrength');
    let password = this.get('value');

    if (password && passwordStrength.score < this.get('minStrength')) {
      myErrors.pushObject({
        message: this.get('passwordErrorMessage')
      });
    }

    return myErrors;
  }),

  didReceiveAttrs() {
    this._super(...arguments);
    assert('{{paper-password}} requires an `onChange` action or null for no action.', this.get('onChange') !== undefined);
  }
});
