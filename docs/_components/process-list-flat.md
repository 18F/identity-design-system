---
title: Process list (flat)
lead: A numbered step list with a connecting line between markers.
---

## Flat process list

The `.process-list` component displays sequential steps. Each
`.process-list__item` pairs a numbered `.process-list__marker` with a
`.process-list__body` that holds a `.process-list__heading` and its content. The
step number is generated automatically. This is a flat alternative to the USWDS
`.usa-process-list`, which remains available.

{% capture example %}
<ol class="process-list">
  <li class="process-list__item">
    <span class="process-list__marker" aria-hidden="true"></span>
    <div class="process-list__body">
      <h3 class="process-list__heading">Enter your email address</h3>
      <p>We will send a confirmation link to verify your account.</p>
    </div>
  </li>
  <li class="process-list__item">
    <span class="process-list__marker" aria-hidden="true"></span>
    <div class="process-list__body">
      <h3 class="process-list__heading">Create a password</h3>
      <p>Choose a strong password that you have not used elsewhere.</p>
    </div>
  </li>
  <li class="process-list__item">
    <span class="process-list__marker" aria-hidden="true"></span>
    <div class="process-list__body">
      <h3 class="process-list__heading">Set up authentication</h3>
      <p>Add a second layer of security to protect your account.</p>
    </div>
  </li>
</ol>
{% endcapture %}
{% include helpers/code-example.html code=example %}
