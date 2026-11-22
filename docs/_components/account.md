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

### Email addresses

{% capture example %}
<div class="account">
  <section class="account__section" aria-label="Email addresses">
    <div class="account__panel">
      <ul class="account__rows">
        {% assign addresses = "john@email.com,john@gmail.com,john@yahoo.com,john@icloud.com" | split: "," %}
        {% for address in addresses %}
        <li class="account__row">
          <div class="account__row-main">
            <p class="account__row-text">{{ address }}</p>
            {% if forloop.index == 1 %}
            <span class="badge badge--primary">Primary</span>
            {% elsif forloop.index == 2 %}
            <span class="badge badge--warning">Unconfirmed</span>
            {% endif %}
          </div>
          <div class="account__row-actions">
            <button type="button" class="usa-button usa-button--tertiary" aria-label="Delete {{ address }}">Delete</button>
          </div>
        </li>
        {% endfor %}
      </ul>
      <div class="account__panel-action">
        <button type="button" class="usa-button usa-button--secondary">Add email address</button>
      </div>
    </div>
  </section>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Account settings

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
            <button type="button" class="usa-button usa-button--outline">Edit</button>
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
            <button type="button" class="usa-button usa-button--outline">Edit</button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Delete account

{% capture delete_section %}
  <section class="account__section">
    <h2 class="account__heading">Delete account</h2>
    <div class="account__panel account__row">
      <p class="account__row-text">All associated data, settings, and activity will be erased.</p>
      <div class="account__row-actions">
        <button type="button" class="usa-button usa-button--tertiary account__danger-action" aria-label="Delete account">Delete</button>
      </div>
    </div>
  </section>
{% endcapture %}
{% capture example %}
<div class="account">
  {{ delete_section }}
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Complete settings

{% capture example %}
<div class="account">
  <section class="account__section">
    <h2 class="account__heading">Email preferences</h2>
    <div class="account__panel">
      <ul class="account__rows">
        {% assign emails = "john@email.com,john@gmail.com" | split: "," %}
        {% for email in emails %}
        <li class="account__row">
          <div class="account__row-main">
            <p class="account__row-text">{{ email }}</p>
            {% if forloop.first %}<span class="badge badge--primary">Primary</span>{% endif %}
          </div>
          <div class="account__row-actions">
            <button type="button" class="usa-button usa-button--tertiary" aria-label="Delete {{ email }}">Delete</button>
          </div>
        </li>
        {% endfor %}
      </ul>
      <div class="account__panel-action">
        <button type="button" class="usa-button usa-button--secondary">Add email address</button>
      </div>
    </div>
    <div class="account__panel account__row">
      <p class="account__row-text">English</p>
      <div class="account__row-actions">
        <button type="button" class="usa-button usa-button--tertiary" aria-label="Change email language">Change</button>
      </div>
    </div>
  </section>
  <section class="account__section">
    <h2 class="account__heading">Password</h2>
    <div class="account__panel account__row">
      <p class="account__row-text"><span aria-hidden="true">••••••••••••••••••</span><span class="usa-sr-only">Password is hidden</span></p>
      <div class="account__row-actions">
        <button type="button" class="usa-button usa-button--tertiary" aria-label="Change password">Change</button>
      </div>
    </div>
  </section>
  <section class="account__section">
    <h2 class="account__heading">Phone number</h2>
    <div class="account__panel">
      <ul class="account__rows">
        <li class="account__row">
          <div class="account__row-main">
            <p class="account__row-text">+1 (602) 906-5822</p>
            <span class="badge badge--primary">Primary</span>
          </div>
          <div class="account__row-actions">
            <button type="button" class="usa-button usa-button--tertiary" aria-label="Manage phone number">Manage</button>
          </div>
        </li>
      </ul>
      <div class="account__panel-action">
        <button type="button" class="usa-button usa-button--secondary">Add phone number</button>
      </div>
    </div>
  </section>
  <section class="account__section">
    <h2 class="account__heading">Personal key</h2>
    <div class="account__panel account__row">
      <p class="account__row-text">Reset your personal key if you don’t have it. You’ll need this personal key if you forget your password.</p>
      <div class="account__row-actions">
        <button type="button" class="usa-button usa-button--tertiary" aria-label="Reset personal key">Reset</button>
      </div>
    </div>
  </section>
  {{ delete_section }}
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
