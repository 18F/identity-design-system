/* eslint-disable prefer-destructuring */
const behavior = require('uswds/src/js/utils/behavior');
const zxcvbn = require('zxcvbn');


// zxcvbn returns a strength score from 0 to 4
// we map those scores to:
// 1. a CSS class to the pw strength module
// 2. text describing the score

const scale = {
  0: ['lg-password-strength--very-weak', 'Very weak'],
  1: ['lg-password-strength--weak', 'Weak'],
  2: ['lg-password-strength--so-so', 'So - so'],
  3: ['lg-password-strength--good', 'Good'],
  4: ['lg-password-strength--great', 'Great!'],
};

// fallback if zxcvbn lookup fails / field is empty
const fallback = ['lg-password-strength--na', '...'];

const getStrength = (z) => {
  // override the strength value to 2 if the password is < 12
  if (!(z && z.password.length && z.password.length >= 12)) {
    if (z.score >= 3) {
      // eslint-disable-next-line no-param-reassign
      z.score = 2;
    }
  }
  return z && z.password.length ? scale[z.score] : fallback;
};

const getExplanation = (z) => {
  if (!z || z.score > 2) return '&nbsp;';

  const { warning, suggestions } = z.feedback;

  if (!warning && !suggestions.length) return '&nbsp;';
  if (warning) return warning;

  return suggestions;
};

const toggleSubmitInput = (submitEl, length = 0, score = 0) => {
  if (!submitEl) return;

  if (score < 3 || length < 12) {
    submitEl.setAttribute('disabled', true);
  } else {
    submitEl.removeAttribute('disabled');
  }
};


const checkPasswordStrength = (e, submit, forbiddenPasswords) => {
  const passwordStrengthResponse = zxcvbn(e.target.value, JSON.parse(forbiddenPasswords));
  const [strengthClass, strength] = getStrength(passwordStrengthResponse);
  const explanation = getExplanation(passwordStrengthResponse);
  toggleSubmitInput(submit,
    passwordStrengthResponse.password.length,
    passwordStrengthResponse.score);
  return { strengthClass, strength, explanation };
};


const updatePasswordStrength = (e, submit) => {
  const forbiddenPasswordsElement = document.querySelector('[data-forbidden-passwords]');
  const forbiddenPasswords = forbiddenPasswordsElement.dataset.forbiddenPasswords;

  // the pw strength module is hidden by default ("hide" CSS class)
  // (so that javascript disabled browsers won't see it)
  // thus, first step is unhiding it
  const passwordContainer = document.querySelector('#lg-password-strength--container');
  passwordContainer.className = '';

  const { strengthClass, strength, explanation } = checkPasswordStrength(e, submit,
    forbiddenPasswords);

  passwordContainer.className = strengthClass;
  document.querySelector('.lg-password--summary').innerHTML = strength;
  document.querySelector('.lg-password--explanation').innerHTML = explanation;
};

const inputPasswordMeter = behavior({
  click: {
    '.usa-input--lg-password': function keyPress(event) {
      const submit = document.querySelector('input[type="submit"]');
      event.preventDefault();
      updatePasswordStrength(event, submit);
    },
  },
});

module.exports = inputPasswordMeter;
