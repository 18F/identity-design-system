/* eslint-disable prefer-destructuring */
const zxcvbn = require('zxcvbn');
const behavior = require('uswds/src/js/utils/behavior');
const feedbackValues = require('./zxcvbn-feedback-en.json');

// zxcvbn returns a strength score from 0 to 4
// we map those scores to:
// 1. a CSS class to the pw strength module
// 2. text describing the score

const scale = {
  0: ['pw-very-weak', 'Very weak'],
  1: ['pw-weak', 'Weak'],
  2: ['pw-so-so', 'So - so'],
  3: ['pw-good', 'Good'],
  4: ['pw-great', 'Great!'],
};

// fallback if zxcvbn lookup fails / field is empty
const fallback = ['pw-na', '...'];

const getStrength = (z) => {
  // override the strength value to 2 if the password is < 12
  if (!(z && z.password.length && z.password.length >= 12)) {
    if (z.score >= 3) {
      z.score = 2;
    }
  }
  return z && z.password.length ? scale[z.score] : fallback;
};

const lookup = (key) => {
  return feedbackValues[key];
};

const getFeedback = (z) => {
  if (!z || z.score > 2) return '&nbsp;';

  const { warning, suggestions } = z.feedback;

  if (!warning && !suggestions.length) return '&nbsp;';
  if (warning) return lookup(warning);

  return `${suggestions.map(s => lookup(s)).join('')}`;
};

const disableSubmit = (submitEl, length = 0, score = 0) => {
  if (!submitEl) return;

  if (score < 3 || length < 12) {
    submitEl.setAttribute('disabled', true);
  } else {
    submitEl.removeAttribute('disabled');
  }
};

function checkPasswordStrength(e) {
  const z = zxcvbn(e.target.value, JSON.parse(forbiddenPasswords));
  const [cls, strength] = getStrength(z);
  const feedback = getFeedback(z);
  pwCntnr.className = cls;
  pwStrength.innerHTML = strength;
  pwFeedback.innerHTML = feedback;

  disableSubmit(submit, z.password.length, z.score);
}


const analyzePasswordStrength = () => {

  const pwCounter = document.querySelector('.lg-password-strength--counter');
  const pwStrength = document.querySelector('.lg-password-strength--text');
  const pwFeedback = document.querySelector('.lg-password-strength--feedback');
  const submit = document.querySelector('input[type="submit"]');
  const forbiddenPasswordsElement = document.querySelector('[data-forbidden-passwords]');
  const forbiddenPasswords = forbiddenPasswordsElement.dataset.forbiddenPasswords;

  disableSubmit(submit);

  // the pw strength module is hidden by default ("hide" CSS class)
  // (so that javascript disabled browsers won't see it)
  // thus, first step is unhiding it
  pwCounter.className = '';
};

const inputPasswordMeter = behavior({
  input: {
    '.usa-input--password': function checkPasswordStrength(event) {
      event.preventDefault();
      analyzePasswordStrength();
    },
  },
});

module.exports = inputPasswordMeter;
