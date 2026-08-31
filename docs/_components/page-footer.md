---
title: Page footer
lead: >
  The page footer is a full-width bar at the bottom of the page showing the
  "Powered by" agency identifier and a row of footer actions — a language menu,
  a privacy link, a help link, and an overflow menu.
---

## Page footer

The page footer is a page-level, full-width element, so it spans the whole
viewport in the application. In these examples it appears within the
documentation content column.

The `.page-footer` bar holds the agency identifier (`.page-footer__agency` with
`.page-footer__agency-name`) on one side and `.page-footer__actions` on the
other. Actions are a row of text buttons built on `.usa-button--quaternary`:
a language menu (`English`), a `Privacy & Security` link, a `.page-footer__help`
link, and an overflow menu (`More`).

The two menu triggers (`English` and `More`) are `<button>`s marked
`aria-haspopup="menu"` and `aria-expanded="false"`, each with an accessible
name and a trailing chevron. The chevrons are decorative, so they carry
`aria-hidden="true"`. Below the `768px` breakpoint the footer stacks and the
`.page-footer__help` link is hidden.

{% capture example %}
<lg-nds-page-footer>
  <footer class="page-footer">
    <div class="page-footer__agency">
      <img src="{{ site.baseurl }}/assets/img/gsa-logo.svg" width="20" height="20" alt="" aria-hidden="true">
      <span class="page-footer__agency-name">Powered by the U.S. General Services Administration</span>
    </div>
    <div class="page-footer__actions">
      <button type="button" class="usa-button usa-button--quaternary usa-button--icon-right" aria-haspopup="menu" aria-expanded="false">
        English
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
          <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use>
        </svg>
      </button>
      <a href="#" class="usa-button usa-button--quaternary">Privacy &amp; Security</a>
      <a href="#" class="page-footer__help usa-button usa-button--quaternary">Help</a>
      <button type="button" class="usa-button usa-button--quaternary usa-button--icon-right" aria-haspopup="menu" aria-expanded="false">
        More
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
          <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use>
        </svg>
      </button>
    </div>
  </footer>
</lg-nds-page-footer>
{% endcapture %}
{% include helpers/code-example.html code=example %}
