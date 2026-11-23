/** @type {Map<Element, () => void>} */
const cleanups = new Map();

/** @param {File} file @param {string[]} types */
function accepts(file, types) {
  return !types.length || types.some((type) => {
    if (type.startsWith('.')) return file.name.toLowerCase().endsWith(type);
    const mime = file.type.toLowerCase();
    return type.endsWith('/*') ? mime.startsWith(type.slice(0, -1)) : mime === type;
  });
}

/** @param {Element} field */
function bind(field) {
  if (cleanups.has(field)) return;
  const input = field.querySelector('input');
  const target = field.querySelector('.usa-file-input__target');
  const instructions = field.querySelector('.usa-file-input__instructions');
  const result = field.querySelector('[data-file-result]');
  const status = field.querySelector('[role="status"]');
  if (!input || !target || !(instructions instanceof HTMLElement) || !result || !status) return;
  const originalName = input.dataset.chooseLabel || input.getAttribute('aria-label');
  const error = input.dataset.errormessage || 'This file type is not accepted';
  const listeners = new AbortController();
  const options = { signal: listeners.signal };

  const render = (invalid = false) => {
    const names = Array.from(input.files || [], (file) => file.name);
    const action = names.length > 1 ? 'Change files' : 'Change file';
    const description = invalid ? error : names.length ? `Selected: ${names.join(', ')}` : 'No file selected.';
    result.replaceChildren();
    instructions.hidden = invalid || names.length > 0;
    target.classList.toggle('has-invalid-file', invalid);
    target.classList.remove('usa-file-input--drag');
    if (invalid) {
      const message = document.createElement('div');
      message.className = 'usa-file-input__accepted-files-message';
      message.textContent = error;
      result.append(message);
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
      if (names.length) {
        const heading = document.createElement('div');
        heading.className = 'usa-file-input__preview-heading';
        heading.append(names.length === 1 ? 'Selected file ' : `${names.length} files selected `);
        const change = document.createElement('span');
        change.className = 'usa-file-input__choose';
        change.textContent = action;
        heading.append(change);
        result.append(heading);
        for (const name of names) {
          const preview = document.createElement('div');
          preview.className = 'usa-file-input__preview';
          preview.textContent = name;
          result.append(preview);
        }
      }
    }
    input.setCustomValidity(invalid ? error : '');
    input.setAttribute('aria-label', names.length ? action : originalName || 'Choose from folder');
    status.textContent = description;
  };

  input.addEventListener('change', () => {
    const types = input.accept.toLowerCase().split(',').map((s) => s.trim()).filter(Boolean);
    const invalid = Array.from(input.files || []).some((file) => !accepts(file, types));
    if (invalid) input.value = '';
    render(invalid);
  }, options);
  if (input.getAttribute('aria-invalid') === 'true') input.setCustomValidity(error);
  input.ownerDocument.addEventListener('reset', (event) => {
    // Native reset buttons may run microtasks before the browser clears files.
    if (event.target === input.form) setTimeout(() => {
      if (!event.defaultPrevented && !listeners.signal.aborted) render();
    }, 0);
  }, options);
  target.addEventListener('dragover', () => {
    if (!input.matches(':disabled')) target.classList.add('usa-file-input--drag');
  }, options);
  for (const type of ['dragleave', 'drop']) {
    target.addEventListener(type, () => target.classList.remove('usa-file-input--drag'), options);
  }
  cleanups.set(field, () => listeners.abort());
}

// Own only pre-rendered NDS fields; ordinary USWDS inputs retain their enhancer.
export default {
  /** @param {ParentNode} root */
  on(root = document) {
    if (root instanceof Element && root.matches('[data-nds-file-input]')) bind(root);
    root.querySelectorAll('[data-nds-file-input]').forEach(bind);
  },
  off() {
    cleanups.forEach((cleanup) => cleanup());
    cleanups.clear();
  },
};
