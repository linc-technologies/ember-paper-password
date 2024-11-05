import Component from '@glimmer/component';
import { A } from '@ember/array';
import { assert } from '@ember/debug';
import zxcvbn from 'zxcvbn';

export default class PaperPassword extends Component {
  constructor() {
    super(...arguments);

    assert(
      '<PaperPassword> requires an `onChange` action or null for no action.',
      this.args.onChange !== undefined
    );

    // configure defaults
    this.customValidations = this.args.customValidations || A([]);
    this.errors = this.args.errors || A([]);
    this.minStrength = this.args.minStrength || 3;
    this.onChange = this.args.onChange || null;
    this.passwordErrorMessage =
      this.args.passwordErrorMessage || 'Please enter a stronger password.';
    this.strengthLabel = this.args.strengthLabel || 'Password strength: ';
    this.strengthLevels =
      this.args.strengthLevels ||
      A(['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent']);
  }

  get passwordStrength() {
    let password = this.args.value || '';
    if (password) {
      return zxcvbn(password);
    } else {
      return { score: 0 };
    }
  }

  get strengthValue() {
    return (this.passwordStrength.score / 4) * 100;
  }

  get strengthLevel() {
    return this.strengthLevels[this.passwordStrength.score];
  }

  get strengthWarning() {
    return this.passwordStrength.score < this.minStrength;
  }

  get inputErrors() {
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
}
