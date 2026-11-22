const selector = 'button.animated-media__toggle[data-label-play][data-label-pause]';
/** @type {Set<HTMLButtonElement>} */
const buttons = new Set();

/** @param {Event} event */
function toggle(event) {
  const button = /** @type {HTMLButtonElement} */ (event.currentTarget);
  const media = button.closest('.animated-media');
  if (!media) return;
  const playing = media.getAttribute('data-playing') !== 'true';
  media.setAttribute('data-playing', String(playing));
  button.setAttribute(
    'aria-label',
    button.getAttribute(playing ? 'data-label-pause' : 'data-label-play') || '',
  );
  button.querySelector('.animated-media__icon--play')?.toggleAttribute('hidden', playing);
  button.querySelector('.animated-media__icon--pause')?.toggleAttribute('hidden', !playing);
}

export default {
  /** @param {ParentNode} root */
  on(root = document) {
    root.querySelectorAll(selector).forEach((element) => {
      const button = /** @type {HTMLButtonElement} */ (element);
      button.addEventListener('click', toggle);
      buttons.add(button);
    });
  },
  off() {
    buttons.forEach((button) => button.removeEventListener('click', toggle));
    buttons.clear();
  },
};
