---
title: Link
lead: >
  Links style inline text links, full-row block links, and grouped
  troubleshooting options.
---

## Inline link

Apply `.link` to an anchor or button for an inline text link. External links
(`target="_blank"`) show a trailing icon automatically.

{% capture example %}
<p>
  Read the <a class="link" href="#">account setup guide</a> before you begin, or
  <a class="link" href="#" target="_blank" rel="noopener">open the help center<span class="sr-only"> (opens in a new tab)</span></a>.
</p>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### No-wrap

Use `.link--nowrap` to keep a link on a single line.

{% capture example %}
<p>Call <a class="link link--nowrap" href="tel:18005551234">1-800-555-1234</a> for help.</p>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Block link

Use `.block-link` for a full-row link, typically in a list. Add
`.block-link__icon` for a trailing chevron. Stacked rows share a single divider.

{% capture example %}
<ul class="usa-list usa-list--unstyled">
  <li>
    <a class="block-link" href="#">
      Use a different phone number
      <svg class="block-link__icon usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#navigate_next"></use>
      </svg>
    </a>
  </li>
  <li>
    <a class="block-link" href="#">
      Enter a backup code instead
      <svg class="block-link__icon usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#navigate_next"></use>
      </svg>
    </a>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Troubleshooting options

Group related recovery links under a heading with `.troubleshooting-options`.
The `--cards` modifier renders each option as a bordered card.

{% capture example %}
<div class="troubleshooting-options troubleshooting-options--cards">
  <h2 class="troubleshooting-options__heading">Having trouble?</h2>
  <ul class="troubleshooting-options__options usa-list usa-list--unstyled">
    <li>
      <a class="block-link" href="#">
        Try another authentication method
        <svg class="block-link__icon usa-icon" aria-hidden="true" role="img">
          <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#navigate_next"></use>
        </svg>
      </a>
    </li>
    <li>
      <a class="block-link" href="#">
        Contact support
        <svg class="block-link__icon usa-icon" aria-hidden="true" role="img">
          <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#navigate_next"></use>
        </svg>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
