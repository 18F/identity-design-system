---
title: Account
lead: >
  The account layout arranges a user's account dashboard into sections and panels.
---

## Account

The `.account` layout is a page-level dashboard that stacks `.account__section`
groups, each with an `.account__heading` and one or more `.account__panel`
cards. A panel holds an `.account__rows` list, where each `.account__row` pairs
descriptive text (`.account__row-text`, with `.account__row-text--strong` and
`.account__row-value` for emphasis and values), an optional `.account__badge`,
and `.account__row-actions`.

This is a page-level layout constrained to a fixed content width and centered.
The preview below is shown inside the documentation's content column, so it may
appear narrower than it would on a full account page.

{% capture example %}
<div class="account">
  <section class="account__section">
    <h2 class="account__heading">Your account</h2>
    <div class="account__panel">
      <ul class="account__rows">
        <li class="account__row">
          <div class="account__row-main">
            <p class="account__row-text">
              <span class="account__row-text--strong">Email address</span>
              <span class="account__row-value">user@example.com</span>
            </p>
          </div>
          <div class="account__row-actions">
            <a href="#" class="usa-button usa-button--outline">Edit</a>
          </div>
        </li>
        <li class="account__row">
          <div class="account__row-main">
            <p class="account__row-text">
              <span class="account__row-text--strong">Phone number</span>
              <span class="account__badge account__badge--warning">Unverified</span>
            </p>
          </div>
          <div class="account__row-actions">
            <a href="#" class="usa-button usa-button--outline">Edit</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="account__section">
    <h2 class="account__heading">Delete account</h2>
    <div class="account__panel">
      <p class="account__row-text">Deleting your account is permanent and cannot be undone.</p>
      <div class="account__panel-action">
        <a href="#" class="usa-button usa-button--unstyled account__danger-action">Delete your account</a>
      </div>
    </div>
  </section>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
