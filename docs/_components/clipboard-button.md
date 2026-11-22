---
title: Clipboard button
lead: >
  Use a Primary button to copy a value to the clipboard.
---

## Clipboard button

Use the shared Primary `.usa-button` without a clipboard style modifier.
After a successful copy, the label briefly reads “Copied!” before returning to “Copy to clipboard”.

{% capture example %}
<lg-clipboard-button data-nds-copy clipboard-text="1234-5678">
  <button type="button" class="usa-button">
    <span class="clipboard-label">
      <span>Copy to clipboard</span>
      <span data-copy-confirmation hidden>Copied!</span>
    </span>
  </button>
  <span role="status" data-copy-status></span>
</lg-clipboard-button>
{% endcapture %}
{% include helpers/code-example.html code=example %}
