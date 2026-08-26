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
and form controls placed inside it.

{% capture example %}
<div class="auth-entry__card">
  <div class="auth">
    <div class="auth__intro">
      <h1>Sign in</h1>
    </div>
    <form class="usa-form margin-top-3">
      <label class="usa-label" for="auth-entry-email">Email</label>
      <input class="usa-input" id="auth-entry-email" name="email" type="email" autocomplete="username">
      <label class="usa-label" for="auth-entry-password">Password</label>
      <input class="usa-input" id="auth-entry-password" name="password" type="password" autocomplete="current-password">
      <p class="margin-top-2"><a class="link" href="#">Forgot password?</a></p>
    </form>
    <div class="actions display-flex flex-column margin-top-4" style="gap:0.75rem;">
      <button type="submit" class="usa-button">Sign in</button>
      <a class="usa-button usa-button--secondary" href="#">Create an account</a>
    </div>
    <hr class="divider margin-top-4">
    <p class="copy copy--muted margin-top-3"><a class="link" href="#">Sign in with your government employee ID</a></p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Card with seal

Add an `auth__media` image inside `auth__header--with-media` above the intro to
show an agency seal at the top of the card.

{% capture example %}
<div class="auth-entry__card">
  <div class="auth">
    <div class="auth__header auth__header--with-media">
      <img class="auth__media" src="{{ site.baseurl }}/assets/img/login-gov-logo.svg" alt="">
      <div class="auth__intro">
        <h1>Sign in</h1>
      </div>
    </div>
    <form class="usa-form margin-top-3">
      <label class="usa-label" for="auth-entry-seal-email">Email</label>
      <input class="usa-input" id="auth-entry-seal-email" name="email" type="email" autocomplete="username">
      <label class="usa-label" for="auth-entry-seal-password">Password</label>
      <input class="usa-input" id="auth-entry-seal-password" name="password" type="password" autocomplete="current-password">
      <p class="margin-top-2"><a class="link" href="#">Forgot password?</a></p>
    </form>
    <div class="actions display-flex flex-column margin-top-4" style="gap:0.75rem;">
      <button type="submit" class="usa-button">Sign in</button>
      <a class="usa-button usa-button--secondary" href="#">Create an account</a>
    </div>
    <hr class="divider margin-top-4">
    <p class="copy copy--muted margin-top-3"><a class="link" href="#">Sign in with your government employee ID</a></p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
