---
title: Page footer
lead: >
  The page footer is a full-width bar at the bottom of the page showing the
  agency identifier and footer actions.
---

## Page footer

The page footer is a page-level, full-width element, so it spans the whole
viewport in the application. In these examples it appears within the
documentation content column.

The `.page-footer` bar holds an agency identifier (`.page-footer__agency` with
`.page-footer__agency-name`) on one side and `.page-footer__actions` on the
other.

{% capture example %}
<lg-nds-page-footer>
  <div class="page-footer">
    <a class="page-footer__agency" href="#">
      <img src="{{ site.baseurl }}/assets/img/gsa-logo.svg" alt="">
      <span class="page-footer__agency-name">General Services Administration</span>
    </a>
    <div class="page-footer__actions">
      <a class="usa-button usa-button--unstyled" href="#">Privacy</a>
      <a class="usa-button usa-button--unstyled" href="#">Accessibility</a>
    </div>
  </div>
</lg-nds-page-footer>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### With a select control

Footer actions can include a select control. A native `.page-footer__select`
sits on top of a visible `.page-footer__select-face`, with a visually hidden
`.page-footer__select-label` naming it.

{% capture example %}
<lg-nds-page-footer>
  <div class="page-footer">
    <a class="page-footer__agency" href="#">
      <img src="{{ site.baseurl }}/assets/img/gsa-logo.svg" alt="">
      <span class="page-footer__agency-name">General Services Administration</span>
    </a>
    <div class="page-footer__actions">
      <div class="page-footer__control">
        <span class="page-footer__select-face usa-button usa-button--unstyled">English</span>
        <label class="page-footer__select-label" for="footer-language">Language</label>
        <select id="footer-language" class="page-footer__select">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </div>
  </div>
</lg-nds-page-footer>
{% endcapture %}
{% include helpers/code-example.html code=example %}
