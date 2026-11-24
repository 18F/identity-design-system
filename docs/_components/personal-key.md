---
title: Personal key
lead: Displays a personal recovery key with actions to copy, download, or print it.
---

## Personal key

Use the surrounding layout to set the card width. Supply the generation date
and key as text, preserving leading zeros. All three actions use the displayed
key. Without JavaScript, the key remains available to select and copy manually.
The date and recovery key below are examples only.

{% capture example %}
<div class="personal-key" data-personal-key>
  <div class="personal-key-display">
    <p class="personal-key-display__meta">Generated on <time datetime="2026-06-25">June 25, 2026</time></p>
    <div class="personal-key-display__code">
      <code>0193 - 0039 - 4739 - 9920</code>
    </div>
    <div class="personal-key-display__actions" hidden>
      {% assign actions = "Copy,Download,Print" | split: "," %}
      {% for label in actions %}
      {% assign action = label | downcase %}
      <button type="button" class="usa-button usa-button--tertiary usa-button--md" data-key-action="{{ action }}">
        <svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#{{ action }}"></use></svg>
        {% if action == "copy" %}<span class="clipboard-label"><span>Copy</span><span data-copy-confirmation hidden>Copied</span></span>{% else %}<span>{{ label }}</span>{% endif %}
      </button>
      {% endfor %}
    </div>
  </div>
  <div role="status" data-copy-status></div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
