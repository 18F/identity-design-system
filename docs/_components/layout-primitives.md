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
  <h2>Before you continue</h2>
  <p>Review the details below. You can change this later in your account settings.</p>
  <p>Need help? <a href="#">Contact support</a>.</p>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Centered

{% capture example %}
<div class="copy copy--centered">
  <h2>All set</h2>
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

Use `heading-s` for a standalone section heading.

{% capture example %}
<p class="heading-s">Account details</p>
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
<p>Call <span class="nowrap">1-844-555-0100</span> for help.</p>
{% endcapture %}
{% include helpers/code-example.html code=example %}
