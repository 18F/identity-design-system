---
title: Field readout
lead: >
  A field readout presents a labeled, read-only value that mirrors the filled
  state of a floating-label input without being a form control. Use it to
  display generated values (setup codes, keys) that users copy but never edit.
---

## Field readout

The readout emits plain text, not an `<input>`, so assistive technology
announces the label and value instead of an editable field. Wrap the label and
value in `.field-readout__body` and associate the value with its label via
`aria-labelledby`.

{% capture example %}
<div class="field-readout">
  <span class="field-readout__body">
    <span class="field-readout__label" id="fr1-label">Setup code</span>
    <span class="field-readout__value font-mono-sm" aria-labelledby="fr1-label">ARUNJAYMZEMMHNXIFVSJCINMMLKFD</span>
  </span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### With a copy action

Render a `.field-readout__action` button after the body to place a bare icon
action (such as copy) on the trailing edge. Pair it with
[`lg-clipboard-button`]({{ site.baseurl }}/components/clipboard-button/) to copy
the value.

{% capture example %}
<lg-clipboard-button clipboard-text="ARUNJAYMZEMMHNXIFVSJCINMMLKFD" tooltip-text="Copied!">
  <div class="field-readout">
    <span class="field-readout__body">
      <span class="field-readout__label" id="fr2-label">Setup code</span>
      <span class="field-readout__value font-mono-sm" aria-labelledby="fr2-label">ARUNJAYMZEMMHNXIFVSJCINMMLKFD</span>
    </span>
    <button type="button" class="field-readout__action" aria-label="Copy">
      <svg class="usa-icon" aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"/></svg>
    </button>
  </div>
</lg-clipboard-button>
{% endcapture %}
{% include helpers/code-example.html code=example %}
