---
title: Authentication methods
lead: >
  The authentication methods layout lists a user's sign-in methods and their actions.
methods:
  - title: Passkey
    action: Manage
    footer: Add passkey
    entries:
      - Safari 25 on macOS · Created on April 27, 2026
      - Safari 25 on macOS · Created on February 21, 2026
  - title: Authentication app
    action: Manage
    footer: Add app
    entries:
      - Apple Passwords · Created on March 23, 2025
      - 1Password · Created on March 4, 2025
  - title: Backup codes
    action: Delete
    footer: Get new codes
    entries:
      - Generated June 29, 2026 at 10:23 PM
  - title: Security key
    action: Manage
    footer: Add key
    entries:
      - The Little Silver Key · Created on April 27, 2026
  - title: Government employee ID
    action: Delete
    footer: Add ID
    entries:
      - News PIV Card · Added on March 23, 2025
---

## Authentication methods

The `.auth-methods` layout is a page-level list of the ways a user can sign in.
It stacks `.auth-methods__section` groups, each with an `.auth-methods__heading`
and an `.auth-methods__panel`. A panel holds an `.auth-methods__rows` list where
each `.auth-methods__row` describes a method with `.auth-methods__row-text` and
offers `.auth-methods__row-actions`.

This is a page-level layout constrained to a fixed content width and centered.
The preview below is shown inside the documentation's content column, so it may
appear narrower than it would on a full page.

{% capture example %}
<div class="auth-methods">
  {% for method in page.methods %}
  <section class="auth-methods__section">
    <h2 class="auth-methods__heading">{{ method.title }}</h2>
    <div class="auth-methods__panel">
      <ul class="auth-methods__rows">
        {% for entry in method.entries %}
        <li class="auth-methods__row">
          <p class="auth-methods__row-text">{{ entry }}</p>
          <div class="auth-methods__row-actions">
            <button type="button" class="usa-button usa-button--tertiary usa-button--flexible-width" aria-label="{{ method.action }} {{ method.title }}: {{ entry }}">{{ method.action }}</button>
          </div>
        </li>
        {% endfor %}
      </ul>
      <div class="auth-methods__footer">
        <button type="button" class="usa-button usa-button--secondary">{{ method.footer }}</button>
      </div>
    </div>
  </section>
  {% endfor %}
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
