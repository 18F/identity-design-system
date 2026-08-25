---
title: Personal key
lead: Displays a recovery code (personal key) in a centered, stacked layout.
---

## Personal key

The `.personal-key-display` component presents a recovery code with supporting
text. The code sits in `.personal-key-display__code`, and helper text uses
`.personal-key-display__meta`. Wrap the display in an element with
`.personal-key` to apply the form gap spacing.

{% capture example %}
<div class="personal-key">
  <div class="personal-key-display">
    <p class="personal-key-display__meta">Save this recovery code in a safe place.</p>
    <div class="personal-key-display__code">
      <code aria-label="Personal key: 1234 ABCD 5678 EFGH">
        <span class="personal-key-display__word">1234</span>
        <span class="personal-key-display__word">ABCD</span>
        <span class="personal-key-display__word">5678</span>
        <span class="personal-key-display__word">EFGH</span>
      </code>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
