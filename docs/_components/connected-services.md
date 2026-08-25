---
title: Connected services
lead: The account page layout listing applications connected to an account.
---

## Connected services

The `.connected-services` layout lists each connected application as a
`.connected-service` entry inside a `.connected-services__list` panel. Each entry
shows a mark or logo, title, and metadata, plus a per-item actions menu built
from a native `<details>` disclosure.

{% capture example %}
<div class="connected-services">
  <div class="connected-services__header">
    <h2 class="connected-services__heading">Your connected accounts</h2>
    <p class="connected-services__description">These services are linked to your account.</p>
  </div>
  <div class="connected-services__list">
    <ul class="connected-services__rows">
      <li class="connected-service">
        <div class="connected-service__row">
          <span class="connected-service__mark" aria-hidden="true">SA</span>
          <div class="connected-service__content">
            <p class="connected-service__title">Sample Agency</p>
            <p class="connected-service__meta">Connected on March 4, 2024</p>
            <p class="connected-service__email">alex@example.com</p>
          </div>
          <div class="connected-service__actions">
            <details class="connected-service__menu">
              <summary class="connected-service__menu-button">
                <span class="usa-sr-only">Actions for Sample Agency</span>
                <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#more_vert"></use></svg>
              </summary>
              <div class="connected-service__menu-panel">
                <a class="connected-service__menu-item--danger" href="#">Disconnect</a>
              </div>
            </details>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
