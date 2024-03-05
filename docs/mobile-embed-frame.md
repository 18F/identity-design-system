---
title: Mobile Embed
layout: base
load_script: false
---

<div id="preview"></div>
<script>
window.addEventListener('message', (event) => {
  if (event.origin !== window.location.origin) {
    return;
  }

  let markup;
  try {
    markup = JSON.parse(event.data).markup;
  } catch {
    return;
  }

  const preview = document.getElementById('preview');
  preview.innerHTML = markup;
  preview.querySelectorAll('script').forEach((script) => {
    const replacement = document.createElement('script');
    replacement.innerHTML = script.innerHTML;
    script.parentNode.replaceChild(replacement, script);
  });

  const { scriptSrc } = document.querySelector('[data-script-src]').dataset;
  const script = document.createElement('script');
  script.src = scriptSrc;
  document.body.appendChild(script);

  script.addEventListener('load', () => {
    window.dispatchEvent(new CustomEvent('preview-load'));
  });
});
</script>
