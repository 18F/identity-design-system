---
title: Spinner
lead: >
  A spinner is a small rotating glyph that shows content or an action is
  loading.
---

## Spinner

Use `.nds-spinner` on an empty `<span>` for a 20px radial loading indicator.
The glyph takes the current text color, so it reads as midnight in body text
and white inside a primary button. It does not rotate when the user prefers
reduced motion.

The spinner is decorative. Always pair it with text that says what is
loading, and announce that text in a live region:

- **No visible text:** put the spinner and visually hidden text
  (`.usa-sr-only`) inside an element with `role="status"`.
- **Visible text next to the spinner:** mark the spinner `aria-hidden="true"`
  and put the text in the `role="status"` element.

Render the `role="status"` element on page load (it can start empty) and add
the loading text when loading begins, so screen readers announce the change.

{% capture example %}
<span role="status">
  <span class="nds-spinner" aria-hidden="true"></span>
  <span class="usa-sr-only">Loading</span>
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### With visible text

{% capture example %}
<div role="status">
  <span class="nds-spinner margin-right-1" aria-hidden="true"></span>
  Searching for Post Offices
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### In a button

A button in its loading state can replace its label with the spinner. Keep the
label as visually hidden text so the button keeps an accessible name, and
announce progress in a separate `role="status"` element. The button keeps its
primary style (as in the Figma Post Office search); ignore repeat clicks in
script rather than disabling it.

{% capture example %}
<button type="button" class="usa-button usa-button--big usa-button--full-width">
  <span class="nds-spinner" aria-hidden="true"></span>
  <span class="usa-sr-only">Search</span>
</button>
<div class="usa-sr-only" role="status">Searching for Post Offices</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
