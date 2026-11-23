---
title: Page shell
lead: >
  The page shell provides the full-width chrome and layout for a page.
---

## Page shell

The `.auth-page` shell owns page-level layout: a sticky top chrome with a logo
banner and a centered progress slot, a flexible `.auth-page__main` content area,
and a footer slot. It also sets the `--nds-*` custom properties that other
components read.

The shell is a **full-width, page-level** element. The preview below is shown
inside the documentation's constrained content column, so it appears inset
rather than spanning the full viewport; in a real page it fills the browser
width and its top chrome sticks to the top of the screen.

Modifiers on `.auth-page` adjust alignment, density, surface, and content width:

- **Alignment** — `.auth-page--align-start` (top-aligns the main content instead
  of centering it), `.auth-page--align-stretch`, and `.auth-page--align-mobile-start`.
- **Density** — controls the vertical spacing around and between the main
  content. `.auth-page--density-spacious` increases the gap between stacked
  content blocks; `.auth-page--density-fullscreen` removes the surrounding
  padding so the content fills the shell; `.auth-page--density-mobile-compact`
  tightens spacing on small screens.
- **Surface** — `.auth-page--surface-overlay` renders the shell on an overlay
  background rather than the default page surface.
- **Content width** — `.auth-page--width-wide` and `.auth-page--width-form`
  set the maximum width of the main content column.

<div class="margin-y-3">
<iframe id="page-shell-preview" class="width-full border-0" src="{{ site.baseurl }}/embeds/page-shell/" title="Sign-in page shell example" height="560"></iframe>
</div>
<script>
  if (new URLSearchParams(location.search).get('ui_test_bucket') === 'legacy') {
    document.getElementById('page-shell-preview').src += '?ui_test_bucket=legacy';
  }
</script>

{% capture example %}{% include helpers/page-shell-example.html %}{% endcapture %}
```html
{{ example | replace: site.baseurl, '' | strip }}
```

## Agency co-branding

On screens a partner agency sends the user to (sign in, MFA, identity
verification), the top chrome shows the agency's seal after the Login.gov logo,
separated by a thin vertical rule. Add an `.auth-page__logo-banner-agency`
wrapper after the logo link, inside `.auth-page__logo-banner`, holding a 24px
[agency seal]({{ site.baseurl }}/agency-seal/) (`.agency-seal--24`).
The wrapper draws the rule, so no extra markup is needed for it.

Give the seal image the agency's name as its alt text, because the seal is the
only place on the page that tells the user which agency they came from. Set the
agency's seal fill with `--nds-agency-seal-bg`.

On desktop the logo and seal sit at the start of the top chrome. On small
screens they're centered. The previews below show only the top chrome, so they
set `min-height: auto` on the shell; real pages leave it out.

{% capture example %}
<div class="auth-page" style="min-height: auto">
  <header class="auth-page__top-chrome">
    <div class="auth-page__logo-banner">
      <a class="auth-page__logo-banner-link" href="#" aria-label="Login.gov home">
        <img class="auth-page__logo-banner-image" src="{{ site.baseurl }}/assets/img/login-gov-logo.svg" alt="">
      </a>
      <span class="auth-page__logo-banner-agency">
        <span class="agency-seal agency-seal--24" style="--nds-agency-seal-bg: #151038">
          <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal.webp" width="24" height="24" alt="U.S. General Services Administration">
        </span>
      </span>
    </div>
  </header>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### With progress

The agency group composes with the top chrome progress slot. On desktop the
logo and seal stay at the start and the stepper is centered in the viewport
while both fit. On mobile, or whenever a centered stepper would crowd the
branding, the header switches to two rows with progress below the centered logo and seal.

{% capture example %}
<div class="auth-page" style="min-height: auto">
  <header class="auth-page__top-chrome">
    <div class="auth-page__logo-banner">
      <a class="auth-page__logo-banner-link" href="#" aria-label="Login.gov home">
        <img class="auth-page__logo-banner-image" src="{{ site.baseurl }}/assets/img/login-gov-logo.svg" alt="">
      </a>
      <span class="auth-page__logo-banner-agency">
        <span class="agency-seal agency-seal--24" style="--nds-agency-seal-bg: #151038">
          <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal.webp" width="24" height="24" alt="U.S. General Services Administration">
        </span>
      </span>
    </div>
    <div class="auth-page__top-chrome-progress">
      <div class="progress">
        <div class="progress__scroll">
          <ol class="progress__stepper" aria-label="Identity verification">
            <li>
              <div class="progress__step" data-complete="true">
                <span class="progress__step-surface">
                  <span class="progress__step-check usa-icon">
                    <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#checkmark"></use></svg>
                  </span>
                  Account<span class="usa-sr-only">, completed</span>
                </span>
              </div>
            </li>
            <li>
              <div class="progress__step" data-complete="true">
                <span class="progress__step-surface">
                  <span class="progress__step-check usa-icon">
                    <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#checkmark"></use></svg>
                  </span>
                  Security<span class="usa-sr-only">, completed</span>
                </span>
              </div>
            </li>
            <li>
              <div class="progress__step" aria-current="step">
                <span class="progress__step-surface">
                  {% include helpers/progress-ring.html %}
                  <span class="progress__step-counter">3</span>
                  Verification
                </span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </header>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
