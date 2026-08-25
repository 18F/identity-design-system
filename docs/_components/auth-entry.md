---
title: Auth entry
lead: >
  The auth entry layout pairs a marketing column with the sign-in card on the
  entry page.
---

## Auth entry

The full `auth-entry` layout is a two-column entry page composed by the page
shell: a marketing column beside the sign-in card, reflowing to a single column
on narrow viewports. The full-width layout is not shown here; the examples below
demonstrate the self-contained pieces that render on their own.

## Callout

The `auth-entry__whats-new` callout is a link with an intro label and a nested
link label.

{% capture example %}
<a class="auth-entry__whats-new" href="#">
  <span class="auth-entry__whats-new-intro">Passkeys are here.</span>
  <span class="auth-entry__whats-new-link">See what's new</span>
</a>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Marketing copy

The marketing column pairs a headline with body copy.

{% capture example %}
<div class="auth-entry__copy">
  <h1 class="auth-entry__headline">Sign in or create an account</h1>
  <p class="auth-entry__body">One account gives you secure access to participating government agencies.</p>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Card

The `auth-entry__card` is the sign-in surface. It styles the layout primitives
placed inside it.

{% capture example %}
<div class="auth-entry__card">
  <div class="auth">
    <div class="auth__intro">
      <h1>Sign in</h1>
    </div>
    <div class="copy copy--muted">
      <p>Enter your email address and password to continue.</p>
    </div>
    <hr class="divider">
    <div class="actions">
      <a class="usa-button" href="#">Continue</a>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
