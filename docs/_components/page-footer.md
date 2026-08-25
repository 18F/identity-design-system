---
title: Page footer
lead: >
  The page footer is a full-width bar at the bottom of the page showing the
  agency identifier and footer actions — a language switcher, a help link, and
  a destination menu.
---

## Page footer

The page footer is a page-level, full-width element, so it spans the whole
viewport in the application. In these examples it appears within the
documentation content column.

The `.page-footer` bar holds an agency identifier (`.page-footer__agency` with
`.page-footer__agency-name`) on one side and `.page-footer__actions` on the
other. Actions contain two `.page-footer__control` select controls (a language
switcher and a destination menu) flanking a `.page-footer__help` button.

Each `.page-footer__control` layers a real `<select class="page-footer__select">`
transparently over a visible `.page-footer__select-face` button, and pairs
them with a visually hidden `.page-footer__select-label`. The real select
remains the accessible control; the visible face is marked `aria-hidden` and
`tabindex="-1"`.

{% capture example %}
<lg-nds-page-footer>
  <footer class="page-footer">
    <a class="page-footer__agency" href="#">
      <img src="{{ site.baseurl }}/assets/img/gsa-logo.svg" width="20" height="20" alt="" aria-hidden="true">
      <span class="page-footer__agency-name">General Services Administration</span>
    </a>
    <div class="page-footer__actions">
      <div class="page-footer__control">
        <label class="page-footer__select-label" for="footer-language-1">Language</label>
        <div class="page-footer__select-face" aria-hidden="true">
          <button type="button" tabindex="-1" class="usa-button usa-button--quaternary usa-button--sm usa-button--icon-right">
            English
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
              <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use>
            </svg>
          </button>
        </div>
        <select id="footer-language-1" name="locale" class="page-footer__select">
          <option value="en" lang="en" selected>English</option>
          <option value="es" lang="es">Español</option>
          <option value="fr" lang="fr">Français</option>
        </select>
      </div>

      <a href="#" class="page-footer__help usa-button usa-button--quaternary usa-button--sm">Help</a>

      <div class="page-footer__control">
        <label class="page-footer__select-label" for="footer-destination-1">More</label>
        <div class="page-footer__select-face" aria-hidden="true">
          <button type="button" tabindex="-1" class="usa-button usa-button--quaternary usa-button--sm usa-button--icon-right">
            More
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
              <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use>
            </svg>
          </button>
        </div>
        <select id="footer-destination-1" name="footer_destination" class="page-footer__select">
          <option value="" selected disabled>More</option>
          <option value="about">About</option>
          <option value="privacy">Privacy</option>
          <option value="accessibility">Accessibility</option>
          <option value="contact">Contact</option>
        </select>
      </div>
    </div>
  </footer>
</lg-nds-page-footer>
{% endcapture %}
{% include helpers/code-example.html code=example %}
