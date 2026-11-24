---
title: Layout primitives
lead: >
  Content primitives compose page layouts: prose blocks, lists, section
  headings, dividers, and a labelled separator.
---

## Copy

The `copy` class styles a prose block. Add `copy--centered` to center the text
or `copy--muted` to soften the color.

{% capture example %}
<div class="copy">
  <h3 class="heading-s">Before you continue</h3>
  <p>Review the details below. You can change this later in your account settings.</p>
  <p>Need help? <a href="#">Contact support</a>.</p>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Centered

{% capture example %}
<div class="copy copy--centered">
  <h4 class="heading-s">All set</h4>
  <p>Your changes have been saved.</p>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Muted

{% capture example %}
<div class="copy copy--muted">
  <p>This step is optional and can be completed later.</p>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Section heading

Use `heading-s` on the appropriate heading level for the surrounding content.

{% capture example %}
<h3 class="heading-s">Account details</h3>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## List

{% capture example %}
<ul class="list">
  <li>Use a strong, unique password.</li>
  <li>Keep your recovery codes somewhere safe.</li>
  <li>Review your connected devices regularly.</li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Divider

A full-width horizontal rule.

{% capture example %}
<hr class="divider">
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Separator

A labelled separator, typically used between alternative actions.

{% capture example %}
<div class="separator">or</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## No wrap

Apply `nowrap` to keep text on a single line.

{% capture example %}
<div class="copy"><p>Call <span class="nowrap">1-844-555-0100</span> for help.</p></div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
