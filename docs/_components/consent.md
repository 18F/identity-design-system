---
title: Consent
lead: >
  The America.gov delegation consent layout, where a user reviews the agency
  services America.gov can use on their behalf and allows access.
---

## Consent

The `.consent` layout stacks a header, a `.consent__services` card of agency
rows, a bordered "remember my selection" checkbox, and the Allow and Cancel
actions. Each row is a `.consent-service` built from a native
`<details>`/`<summary>` disclosure, so it opens and closes without JavaScript.
The summary shows a 48px [agency seal]({{ site.baseurl }}/agency-seal/),
the agency name, a short description, and a chevron that flips when the row is
open. The open row adds a rule and the About, "What America.gov can do for you",
and "Information shared with America.gov" sections, followed by a "Learn more"
link.

Buttons, the checkbox, and the seal are the standard components; the layout
only arranges them. The agency name truncates to one line and the description
wraps.

## Single service, collapsed

{% capture example %}
<div class="consent">
  <div class="consent__header">
    <h2 class="consent__heading">Connect to America.gov</h2>
    <p class="consent__description">America.gov only uses agency services you approve and doesn't store your personal information. Your selection lasts one year and can be changed anytime in your Login.gov account.</p>
  </div>
  <div class="consent__selections">
    <ul class="consent__services">
      <li>
        <details class="consent-service">
          <summary class="consent-service__summary">
            <span class="agency-seal" style="--nds-agency-seal-bg: #151038">
              <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="">
            </span>
            <span class="consent-service__content">
              <span class="consent-service__title">Department of State</span>
              <span class="consent-service__description">Apply for your passport</span>
            </span>
            <svg class="usa-icon consent-service__chevron" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
          </summary>
          <div class="consent-service__details">
            <div class="consent-service__section">
              <h3 class="consent-service__label">About</h3>
              <p class="consent-service__text">Use Travel.State.Gov to apply for, renew, or track a U.S. passport online.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">What America.gov can do for you</h3>
              <p class="consent-service__text">Apply, renew and monitor your passport application. See your uploaded documents (but not change them).</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">Information shared with America.gov</h3>
              <p class="consent-service__text">Full name, date of birth, Social Security number, mailing address.</p>
            </div>
            <a class="usa-link consent-service__link" href="#">Learn more</a>
          </div>
        </details>
      </li>
      <li class="consent__add">
        <button type="button" class="usa-button usa-button--tertiary">Add more services</button>
      </li>
    </ul>
    <div class="usa-checkbox consent__remember">
      <input id="consent-remember-single-collapsed" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="consent-remember-single-collapsed" checked>
      <label for="consent-remember-single-collapsed" class="usa-checkbox__label">
        Remember my selection for a year
        <span class="usa-checkbox__label-description">You can change this anytime in your Login.gov account.</span>
      </label>
    </div>
  </div>
  <div class="consent__actions">
    <button type="submit" class="usa-button usa-button--lg usa-button--full-width">Allow</button>
    <a class="usa-button usa-button--tertiary usa-button--lg usa-button--full-width" href="#">Cancel and return to America.gov</a>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Single service, expanded

Add the `open` attribute to show the row's details on load.

{% capture example %}
<div class="consent">
  <div class="consent__header">
    <h2 class="consent__heading">Connect to America.gov</h2>
    <p class="consent__description">America.gov only uses agency services you approve and doesn't store your personal information. Your selection lasts one year and can be changed anytime in your Login.gov account.</p>
  </div>
  <div class="consent__selections">
    <ul class="consent__services">
      <li>
        <details class="consent-service" open>
          <summary class="consent-service__summary">
            <span class="agency-seal" style="--nds-agency-seal-bg: #151038">
              <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="">
            </span>
            <span class="consent-service__content">
              <span class="consent-service__title">Department of State</span>
              <span class="consent-service__description">Apply for your passport</span>
            </span>
            <svg class="usa-icon consent-service__chevron" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
          </summary>
          <div class="consent-service__details">
            <div class="consent-service__section">
              <h3 class="consent-service__label">About</h3>
              <p class="consent-service__text">Use Travel.State.Gov to apply for, renew, or track a U.S. passport online.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">What America.gov can do for you</h3>
              <p class="consent-service__text">Apply, renew and monitor your passport application. See your uploaded documents (but not change them).</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">Information shared with America.gov</h3>
              <p class="consent-service__text">Full name, date of birth, Social Security number, mailing address.</p>
            </div>
            <a class="usa-link consent-service__link" href="#">Learn more</a>
          </div>
        </details>
      </li>
      <li class="consent__add">
        <button type="button" class="usa-button usa-button--tertiary">Add more services</button>
      </li>
    </ul>
    <div class="usa-checkbox consent__remember">
      <input id="consent-remember-single-expanded" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="consent-remember-single-expanded" checked>
      <label for="consent-remember-single-expanded" class="usa-checkbox__label">
        Remember my selection for a year
        <span class="usa-checkbox__label-description">You can change this anytime in your Login.gov account.</span>
      </label>
    </div>
  </div>
  <div class="consent__actions">
    <button type="submit" class="usa-button usa-button--lg usa-button--full-width">Allow</button>
    <a class="usa-button usa-button--tertiary usa-button--lg usa-button--full-width" href="#">Cancel and return to America.gov</a>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Multiple services, collapsed

Rules between collapsed rows are inset to the row padding.

{% capture example %}
<div class="consent">
  <div class="consent__header">
    <h2 class="consent__heading">Connect to America.gov</h2>
    <p class="consent__description">America.gov only uses agency services you approve and doesn't store your personal information. Your selection lasts one year and can be changed anytime in your Login.gov account.</p>
  </div>
  <div class="consent__selections">
    <ul class="consent__services">
      <li>
        <details class="consent-service">
          <summary class="consent-service__summary">
            <span class="agency-seal" style="--nds-agency-seal-bg: #151038">
              <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="">
            </span>
            <span class="consent-service__content">
              <span class="consent-service__title">Department of State</span>
              <span class="consent-service__description">Apply for your passport</span>
            </span>
            <svg class="usa-icon consent-service__chevron" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
          </summary>
          <div class="consent-service__details">
            <div class="consent-service__section">
              <h3 class="consent-service__label">About</h3>
              <p class="consent-service__text">Use Travel.State.Gov to apply for, renew, or track a U.S. passport online.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">What America.gov can do for you</h3>
              <p class="consent-service__text">Apply, renew and monitor your passport application. See your uploaded documents (but not change them).</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">Information shared with America.gov</h3>
              <p class="consent-service__text">Full name, date of birth, Social Security number, mailing address.</p>
            </div>
            <a class="usa-link consent-service__link" href="#">Learn more</a>
          </div>
        </details>
      </li>
      <li>
        <details class="consent-service">
          <summary class="consent-service__summary">
            <span class="agency-seal agency-seal--bordered">
              <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-dark.svg" alt="">
            </span>
            <span class="consent-service__content">
              <span class="consent-service__title">Medicare</span>
              <span class="consent-service__description">Find and enroll in Medicare plans</span>
            </span>
            <svg class="usa-icon consent-service__chevron" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
          </summary>
          <div class="consent-service__details">
            <div class="consent-service__section">
              <h3 class="consent-service__label">About</h3>
              <p class="consent-service__text">The official U.S. government website for managing federal health insurance.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">What America.gov can do for you</h3>
              <p class="consent-service__text">View your current benefits and help you compare other qualifying Medicare plans.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">Information shared with America.gov</h3>
              <p class="consent-service__text">Full name, date of birth, Social Security number, mailing address.</p>
            </div>
            <a class="usa-link consent-service__link" href="#">Learn more</a>
          </div>
        </details>
      </li>
      <li>
        <details class="consent-service">
          <summary class="consent-service__summary">
            <span class="agency-seal agency-seal--bordered">
              <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-dark.svg" alt="">
            </span>
            <span class="consent-service__content">
              <span class="consent-service__title">Small Business Administration</span>
              <span class="consent-service__description">Apply for small business grants</span>
            </span>
            <svg class="usa-icon consent-service__chevron" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
          </summary>
          <div class="consent-service__details">
            <div class="consent-service__section">
              <h3 class="consent-service__label">About</h3>
              <p class="consent-service__text">Use Small Business Administration services online.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">What America.gov can do for you</h3>
              <p class="consent-service__text">See and update your applications on your behalf.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">Information shared with America.gov</h3>
              <p class="consent-service__text">Full name, date of birth, Social Security number, mailing address.</p>
            </div>
            <a class="usa-link consent-service__link" href="#">Learn more</a>
          </div>
        </details>
      </li>
      <li>
        <details class="consent-service">
          <summary class="consent-service__summary">
            <span class="agency-seal" style="--nds-agency-seal-bg: #151038">
              <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="">
            </span>
            <span class="consent-service__content">
              <span class="consent-service__title">Social Security Administration</span>
              <span class="consent-service__description">Make changes to assistance programs</span>
            </span>
            <svg class="usa-icon consent-service__chevron" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
          </summary>
          <div class="consent-service__details">
            <div class="consent-service__section">
              <h3 class="consent-service__label">About</h3>
              <p class="consent-service__text">Use Social Security Administration services online.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">What America.gov can do for you</h3>
              <p class="consent-service__text">See and update your applications on your behalf.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">Information shared with America.gov</h3>
              <p class="consent-service__text">Full name, date of birth, Social Security number, mailing address.</p>
            </div>
            <a class="usa-link consent-service__link" href="#">Learn more</a>
          </div>
        </details>
      </li>
      <li class="consent__add">
        <button type="button" class="usa-button usa-button--tertiary">Add more services</button>
      </li>
    </ul>
    <div class="usa-checkbox consent__remember">
      <input id="consent-remember-multiple-collapsed" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="consent-remember-multiple-collapsed" checked>
      <label for="consent-remember-multiple-collapsed" class="usa-checkbox__label">
        Remember my selection for a year
        <span class="usa-checkbox__label-description">You can change this anytime in your Login.gov account.</span>
      </label>
    </div>
  </div>
  <div class="consent__actions">
    <button type="submit" class="usa-button usa-button--lg usa-button--full-width">Allow</button>
    <a class="usa-button usa-button--tertiary usa-button--lg usa-button--full-width" href="#">Cancel and return to America.gov</a>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Multiple services, expanded

An open row can end with a full-width secondary "Remove" button, shown here
on a service the user added (the service that started the request has none).
The rules next to an open row run edge to edge.

{% capture example %}
<div class="consent">
  <div class="consent__header">
    <h2 class="consent__heading">Connect to America.gov</h2>
    <p class="consent__description">America.gov only uses agency services you approve and doesn't store your personal information. Your selection lasts one year and can be changed anytime in your Login.gov account.</p>
  </div>
  <div class="consent__selections">
    <ul class="consent__services">
      <li>
        <details class="consent-service" open>
          <summary class="consent-service__summary">
            <span class="agency-seal" style="--nds-agency-seal-bg: #151038">
              <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="">
            </span>
            <span class="consent-service__content">
              <span class="consent-service__title">Department of State</span>
              <span class="consent-service__description">Apply for your passport</span>
            </span>
            <svg class="usa-icon consent-service__chevron" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
          </summary>
          <div class="consent-service__details">
            <div class="consent-service__section">
              <h3 class="consent-service__label">About</h3>
              <p class="consent-service__text">Use Travel.State.Gov to apply for, renew, or track a U.S. passport online.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">What America.gov can do for you</h3>
              <p class="consent-service__text">Apply, renew and monitor your passport application. See your uploaded documents (but not change them).</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">Information shared with America.gov</h3>
              <p class="consent-service__text">Full name, date of birth, Social Security number, mailing address.</p>
            </div>
            <a class="usa-link consent-service__link" href="#">Learn more</a>
          </div>
        </details>
      </li>
      <li>
        <details class="consent-service" open>
          <summary class="consent-service__summary">
            <span class="agency-seal agency-seal--bordered">
              <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-dark.svg" alt="">
            </span>
            <span class="consent-service__content">
              <span class="consent-service__title">Medicare</span>
              <span class="consent-service__description">Find and enroll in Medicare plans</span>
            </span>
            <svg class="usa-icon consent-service__chevron" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
          </summary>
          <div class="consent-service__details">
            <div class="consent-service__section">
              <h3 class="consent-service__label">About</h3>
              <p class="consent-service__text">The official U.S. government website for managing federal health insurance.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">What America.gov can do for you</h3>
              <p class="consent-service__text">View your current benefits and help you compare other qualifying Medicare plans.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">Information shared with America.gov</h3>
              <p class="consent-service__text">Full name, date of birth, Social Security number, mailing address.</p>
            </div>
            <a class="usa-link consent-service__link" href="#">Learn more</a>
            <button type="button" class="usa-button usa-button--secondary usa-button--full-width">Remove<span class="usa-sr-only"> Medicare</span></button>
          </div>
        </details>
      </li>
      <li>
        <details class="consent-service">
          <summary class="consent-service__summary">
            <span class="agency-seal agency-seal--bordered">
              <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-dark.svg" alt="">
            </span>
            <span class="consent-service__content">
              <span class="consent-service__title">Small Business Administration</span>
              <span class="consent-service__description">Apply for small business grants</span>
            </span>
            <svg class="usa-icon consent-service__chevron" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
          </summary>
          <div class="consent-service__details">
            <div class="consent-service__section">
              <h3 class="consent-service__label">About</h3>
              <p class="consent-service__text">Use Small Business Administration services online.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">What America.gov can do for you</h3>
              <p class="consent-service__text">See and update your applications on your behalf.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">Information shared with America.gov</h3>
              <p class="consent-service__text">Full name, date of birth, Social Security number, mailing address.</p>
            </div>
            <a class="usa-link consent-service__link" href="#">Learn more</a>
          </div>
        </details>
      </li>
      <li>
        <details class="consent-service">
          <summary class="consent-service__summary">
            <span class="agency-seal" style="--nds-agency-seal-bg: #151038">
              <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="">
            </span>
            <span class="consent-service__content">
              <span class="consent-service__title">Social Security Administration</span>
              <span class="consent-service__description">Make changes to assistance programs</span>
            </span>
            <svg class="usa-icon consent-service__chevron" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
          </summary>
          <div class="consent-service__details">
            <div class="consent-service__section">
              <h3 class="consent-service__label">About</h3>
              <p class="consent-service__text">Use Social Security Administration services online.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">What America.gov can do for you</h3>
              <p class="consent-service__text">See and update your applications on your behalf.</p>
            </div>
            <div class="consent-service__section">
              <h3 class="consent-service__label">Information shared with America.gov</h3>
              <p class="consent-service__text">Full name, date of birth, Social Security number, mailing address.</p>
            </div>
            <a class="usa-link consent-service__link" href="#">Learn more</a>
          </div>
        </details>
      </li>
      <li class="consent__add">
        <button type="button" class="usa-button usa-button--tertiary">Add more services</button>
      </li>
    </ul>
    <div class="usa-checkbox consent__remember">
      <input id="consent-remember-multiple-expanded" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="consent-remember-multiple-expanded" checked>
      <label for="consent-remember-multiple-expanded" class="usa-checkbox__label">
        Remember my selection for a year
        <span class="usa-checkbox__label-description">You can change this anytime in your Login.gov account.</span>
      </label>
    </div>
  </div>
  <div class="consent__actions">
    <button type="submit" class="usa-button usa-button--lg usa-button--full-width">Allow</button>
    <a class="usa-button usa-button--tertiary usa-button--lg usa-button--full-width" href="#">Cancel and return to America.gov</a>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Accessibility

- The `<summary>` is the row's toggle. Its accessible name is the agency name
  and description, and browsers expose the open or closed state.
- The seal sits next to the agency name, so give it `alt=""`. The chevron is
  decorative (`aria-hidden="true"`).
- Use a heading level for the section labels (`.consent-service__label`) that
  fits the page outline. On a page whose `<h1>` is "Connect to America.gov",
  use `<h2>`.
- Give each "Remove" button a visually hidden agency name so the buttons are
  distinguishable out of context.
