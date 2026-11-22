/** @type {Map<Element, () => void>} */
const cleanups = new Map();

export default {
  /** @param {ParentNode} root */
  on(root = document) {
    root.querySelectorAll('form.nds-totp-setup').forEach((form) => {
      if (cleanups.has(form)) return;
      const nickname = form.querySelector('[data-totp-nickname]');
      const code = form.querySelector('[data-totp-code]');
      const submit = form.querySelector('button[type="submit"]');
      if (
        !(nickname instanceof HTMLInputElement) ||
        !(code instanceof HTMLInputElement) ||
        !(submit instanceof HTMLButtonElement)
      )
        return;
      const update = () => {
        submit.disabled = !nickname.value.trim() || !code.validity.valid;
      };
      const toast = form.querySelector('.toast');
      const message = toast?.querySelector('.toast__text');
      const error = form.querySelector('[data-copy-error]');
      let timer = 0;
      const close = () => {
        window.clearTimeout(timer);
        toast?.setAttribute('data-open', 'false');
        if (message) message.textContent = '';
      };
      const copied = () => {
        close();
        if (error) error.textContent = '';
        if (message) message.textContent = 'Setup code copied';
        toast?.setAttribute('data-open', 'true');
        timer = window.setTimeout(close, 3000);
      };
      const failed = () => {
        close();
        if (error)
          error.textContent = 'Copy unavailable. Select the setup code and copy it manually.';
      };
      update();
      form.addEventListener('input', update);
      form.addEventListener('nds:copied', copied);
      form.addEventListener('nds:copy-error', failed);
      cleanups.set(form, () => {
        close();
        form.removeEventListener('input', update);
        form.removeEventListener('nds:copied', copied);
        form.removeEventListener('nds:copy-error', failed);
      });
    });
  },
  off() {
    cleanups.forEach((cleanup) => cleanup());
    cleanups.clear();
  },
};
