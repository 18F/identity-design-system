---
title: Authentication methods
lead: >
  The authentication methods layout lists a user's sign-in methods and their actions.
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
  <section class="auth-methods__section">
    <h2 class="auth-methods__heading">Authentication methods</h2>
    <div class="auth-methods__panel">
      <div class="auth-methods__rows">
        <div class="auth-methods__row">
          <p class="auth-methods__row-text">Authentication application</p>
          <div class="auth-methods__row-actions">
            <a href="#" class="usa-button usa-button--outline">Manage</a>
          </div>
        </div>
        <div class="auth-methods__row">
          <p class="auth-methods__row-text">Security key</p>
          <div class="auth-methods__row-actions">
            <a href="#" class="usa-button usa-button--outline">Manage</a>
          </div>
        </div>
        <div class="auth-methods__row">
          <p class="auth-methods__row-text">Backup codes</p>
          <div class="auth-methods__row-actions">
            <a href="#" class="usa-button usa-button--outline">Manage</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
