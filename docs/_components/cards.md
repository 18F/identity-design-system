---
title: Cards
lead: >
  Use cards to group related content or present a single action.
---

## Appearance

The flat `.card` component is a single surface where the link, button, or `div`
is the card itself. Combine the root class with modifiers and elements to build
richer layouts.

Use `card__stack` for a title and its description. Use `card__body` to
separate larger blocks, such as a badge, a copy stack, or a form.

### Default

{% capture example %}
<div class="card">
  <div class="card__stack">
    <p class="card__title">Account created</p>
    <p class="card__description">Your account is ready to use.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Compact

{% capture example %}
<div class="card card--compact">
  <div class="card__stack">
    <p class="card__title">Account created</p>
    <p class="card__description">Your account is ready to use.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Spacious

{% capture example %}
<div class="card card--spacious">
  <div class="card__stack">
    <p class="card__title">Account created</p>
    <p class="card__description">Your account is ready to use.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Elevated

{% capture example %}
<div class="card card--elevated">
  <div class="card__stack">
    <p class="card__title">Account created</p>
    <p class="card__description">Your account is ready to use.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Centered

{% capture example %}
<div class="card card--centered">
  <div class="card__stack">
    <p class="card__title">Account created</p>
    <p class="card__description">Your account is ready to use.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Bleed

Use bleed when the card surface should extend into the page gutters.

{% capture example %}
<div class="padding-x-3">
  <div class="card card--bleed">
    <div class="card__stack">
      <p class="card__title">Account created</p>
      <p class="card__description">Your account is ready to use.</p>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Interactive

### Whole-card link

{% capture example %}
<a href="{{ site.baseurl }}/phone-input/#default" class="card card--interactive">
  <div class="card__inner">
    <div class="card__stack">
      <p class="card__title">Try the phone number input</p>
      <p class="card__description">Choose a country and enter a number.</p>
    </div>
    <span class="card__trailing">
      <svg class="usa-icon" aria-hidden="true"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#chevron-right-16"></use></svg>
    </span>
  </div>
</a>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Disabled action

{% capture example %}
<button type="button" class="card card--interactive" disabled>
  <span class="card__stack">
    <span class="card__title">Add a phone number</span>
    <span class="card__description">Verify your email address first.</span>
  </span>
</button>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Compositions

### With badge

{% capture example %}
<div class="card card--with-badge">
  <div class="card__body">
    <span class="badge badge--primary">New</span>
    <div class="card__stack">
      <p class="card__title">Face or touch unlock</p>
      <p class="card__description">Sign in faster on supported devices.</p>
    </div>
  </div>
</div>
<div class="card card--with-badge">
  <div class="card__body">
    <span class="badge badge--success">Enabled</span>
    <div class="card__stack">
      <p class="card__title">Authentication app</p>
      <p class="card__description">One-time codes are set up on this account.</p>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Authentication method

{% capture example %}
<a href="{{ site.baseurl }}/totp-setup/" class="card card--mfa card--interactive">
  <div class="card__inner">
    <div class="card__body">
      <span class="badge badge--primary">Recommended</span>
      <div class="card__stack">
        <div class="card__row">
          <svg class="usa-icon" aria-hidden="true"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#lock"></use></svg>
          <p class="card__title">Authentication app</p>
        </div>
        <p class="card__description">Use an app to generate one-time codes.</p>
      </div>
    </div>
    <span class="card__trailing">
      <svg class="usa-icon" aria-hidden="true"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#chevron-right-16"></use></svg>
    </span>
  </div>
</a>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Legacy

### Feed card

{% capture example %}
<div class='lg-card'>
  <div class='grid-row flex-row flex-align-end'>
    <div class='tablet:grid-col-10'>
      <h1 class='margin-bottom-05'>A card header!</h1>
      <p class='margin-top-05'>Some content for this card!</p>
    </div>
    <div class='tablet:grid-col-2 text-right'>
      <button type="button" class='usa-button usa-button--outline'>Action</button>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
