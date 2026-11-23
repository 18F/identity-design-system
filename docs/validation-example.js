// Docs-only: the full page and the isolated QA frame run the same example.
(() => {
  const form = document.querySelector('form[data-validation-example]');
  if (!(form instanceof HTMLFormElement)) return;
  const firstName = form.querySelector('#validation-first-name');
  const choices = Array.from(form.querySelectorAll('input')).filter(input => input.type === 'radio');
  const submit = form.querySelector('button[type="submit"]');
  const completion = form.querySelector('[data-completion]');
  const nameError = form.querySelector('#validation-name-error');
  const contactError = form.querySelector('#validation-contact-error');
  if (!(firstName instanceof HTMLInputElement) || !choices.length || !(completion instanceof HTMLElement) ||
      !(submit instanceof HTMLButtonElement) || !(nameError instanceof HTMLElement) ||
      !(contactError instanceof HTMLElement)) return;

  const fields = [
    { controls: [firstName], error: nameError, valid: () => Boolean(firstName.value.trim()) },
    { controls: choices, error: contactError, valid: () => choices.some(input => input.checked) },
  ];
  /** @param {typeof fields[number]} field @param {boolean} invalid */
  function showError({ controls, error }, invalid) {
    error.hidden = !invalid;
    controls.forEach(input => {
      // Native required radios can expose invalid=true before the first submit.
      input.setAttribute('aria-invalid', String(invalid));
      if (invalid) {
        input.setAttribute('aria-describedby', error.id);
      } else {
        input.removeAttribute('aria-describedby');
      }
      if (input === firstName) input.classList.toggle('usa-input--error', invalid);
    });
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const invalid = fields.filter(field => !field.valid());
    fields.forEach(field => showError(field, invalid.includes(field)));
    completion.hidden = invalid.length > 0;
    invalid[0]?.controls[0].focus();
  });
  form.addEventListener('input', () => {
    completion.hidden = true;
    fields.forEach(field => {
      if (!field.error.hidden && field.valid()) showError(field, false);
    });
  });
  form.addEventListener('reset', event => {
    // A later listener may cancel the browser's reset.
    setTimeout(() => {
      if (event.defaultPrevented) return;
      fields.forEach(field => showError(field, false));
      completion.hidden = true;
      firstName.focus();
    }, 0);
  });
  fields.forEach(field => showError(field, false));
  form.noValidate = true;
  submit.disabled = false;
})();
