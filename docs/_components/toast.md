---
title: Toast
lead: >
  Toasts show a brief, transient confirmation message.
---

## Toast

The `.toast` component is a compact notification pinned to the viewport. It is
normally shown and hidden by JavaScript and fades out on its own, so it is
transient by nature. The examples below show its resting, painted state (the
`data-open="true"` state) so the layout is visible in the documentation.

A toast is made up of an optional icon chip (`.toast__icon`), an announcement
region (`.toast__announcement`), and its text (`.toast__text`).

### With icon

{% capture example %}
<div class="toast" data-open="true">
  <span class="toast__announcement">
    <span class="toast__icon">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
    </span>
    <p class="toast__text">Your changes have been saved.</p>
  </span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Text only

{% capture example %}
<div class="toast" data-open="true">
  <span class="toast__announcement">
    <p class="toast__text">Link copied to your clipboard.</p>
  </span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
