---
title: Clipboard button
lead: >
  A clipboard button copies a value to the clipboard and plays a brief
  confirmation when the copy succeeds.
---

## Clipboard button

Wrap a `.usa-button` in the `lg-clipboard-button` element. When the element
gains the `data-copied` attribute after a successful copy, the button plays a
short confirmation animation.

{% capture example %}
<lg-clipboard-button>
  <button type="button" class="usa-button">Copy backup code</button>
</lg-clipboard-button>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Confirmation state

The `data-copied` attribute is applied by the component after a copy and drives
the confirmation animation.

{% capture example %}
<lg-clipboard-button data-copied>
  <button type="button" class="usa-button">Copied</button>
</lg-clipboard-button>
{% endcapture %}
{% include helpers/code-example.html code=example %}
