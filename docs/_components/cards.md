---
title: Cards
lead: >
  Use cards to organize feeds
---

## Cards

Cards provide a way to separate data in a feed.

{% capture example %}
<div class='lg-card'>
  <div class='grid-row flex-row flex-align-end'>
    <div class='tablet:grid-col-10'>
      <h1 class='margin-bottom-05'>A card header!</h1>
      <p class='margin-top-05'>Some content for this card!</p>
    </div>
    <div class='tablet:grid-col-2 text-right'>
      <a href='#' class='usa-button usa-button--outline'>Action</a>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Card variants

The flat `.card` component is a single surface where the link, button, or `div`
is the card itself. Combine the root class with modifiers and elements to build
richer layouts.

### Default

{% capture example %}
<div class="card">
  <div class="card__body">
    <p class="card__title">Account created</p>
    <p class="card__description">Your account is ready to use.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### With badge

{% capture example %}
<div class="card">
  <span class="card__badge">New</span>
  <div class="card__body">
    <p class="card__title">Face or touch unlock</p>
    <p class="card__description">Sign in faster on supported devices.</p>
  </div>
</div>
<div class="card">
  <span class="card__badge card__badge--success">Enabled</span>
  <div class="card__body">
    <p class="card__title">Authentication app</p>
    <p class="card__description">One-time codes are set up on this account.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Compact

{% capture example %}
<div class="card card--compact">
  <div class="card__body">
    <p class="card__title">Account created</p>
    <p class="card__description">Your account is ready to use.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Spacious

{% capture example %}
<div class="card card--spacious">
  <div class="card__body">
    <p class="card__title">Account created</p>
    <p class="card__description">Your account is ready to use.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Elevated

{% capture example %}
<div class="card card--elevated">
  <div class="card__body">
    <p class="card__title">Account created</p>
    <p class="card__description">Your account is ready to use.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Centered

{% capture example %}
<div class="card card--centered">
  <div class="card__body">
    <p class="card__title">Account created</p>
    <p class="card__description">Your account is ready to use.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Interactive

{% capture example %}
<a href="#" class="card card--interactive">
  <div class="card__inner">
    <div class="card__body">
      <p class="card__title">Add a phone number</p>
      <p class="card__description">Use a text message or phone call to sign in.</p>
    </div>
    <span class="card__trailing">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#navigate_next"></use></svg>
    </span>
  </div>
</a>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Authentication method

{% capture example %}
<div class="card card--mfa">
  <div class="card__inner">
    <div class="card__body">
      <div class="card__row">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#lock"></use></svg>
        <div class="card__stack">
          <p class="card__title">Authentication app</p>
          <p class="card__description">Use an app to generate one-time codes.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
