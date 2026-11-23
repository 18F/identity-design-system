---
title: Duplicate profiles
lead: A layout for reviewing accounts that may be duplicates.
---

## Duplicate profiles

Show the signed-in account first. For other accounts, supply an already-masked
email address; do not put the full address in the markup. The comparison is
read-only. The product flow can supply a footer action; this example links to
Login.gov support.

{% assign variants = 'With recovery action,Comparison only' | split: ',' %}
{% for variant in variants %}
### {{ variant }}

{% capture example %}
<div class="duplicate-profiles">
  <div class="duplicate-profiles__accounts">
    <div class="duplicate-profiles__account">
      <span class="badge badge--success">Signed in</span>
      <div class="duplicate-profiles__details">
        <h3 class="duplicate-profiles__email">john@email.com</h3>
        <div class="duplicate-profiles__meta">
          <p>Created: April 15, 2025 at 8:18 PM</p>
          <p>Connected agencies: 5</p>
        </div>
      </div>
    </div>
    <hr class="duplicate-profiles__account-divider" />
    <div class="duplicate-profiles__account">
      <span class="badge badge--warning">Duplicate</span>
      <div class="duplicate-profiles__details">
        <h3 class="duplicate-profiles__email">j******l@email.com</h3>
        <div class="duplicate-profiles__meta">
          <p>Created: April 15, 2025 at 8:18 PM</p>
          <p>Last sign in: September 2, 2026</p>
        </div>
      </div>
    </div>
    {% if variant == 'With recovery action' %}
    <div class="duplicate-profiles__footer">
      <a class="usa-button usa-button--tertiary usa-button--lg" href="https://www.login.gov/contact/" target="_top" data-example-navigate>I don't recognize an account above</a>
    </div>
    {% endif %}
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
{% endfor %}
