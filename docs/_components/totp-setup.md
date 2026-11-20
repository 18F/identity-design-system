---
title: Authentication app setup
lead: >
  The authentication app (TOTP) setup layout walks a user through adding
  Login.gov to an authenticator app in four numbered steps.
---

## Authentication app setup

The layout is a form page built from shared components. Each step is a
`.card.stack.stack--gap-24` inside a `.nds-totp-setup__steps` list, headed by a
single-item `<ol start="N">` with `.nds-totp-setup__step-heading` so the step
number hangs outside wrapped heading text. Step 3 pairs the
`.nds-totp-setup__qrcode` block with a [field readout]({{ site.baseurl }}/field-readout/)
copy action inside [`lg-clipboard-button`]({{ site.baseurl }}/clipboard-button/).
The steps are followed by a [flat checkbox]({{ site.baseurl }}/checkbox-flat/)
card and the page actions.

The QR code is 220px wide, or 180px on small viewports. The step list gap
narrows from 16px to 12px on small viewports.

### Empty

Until the nickname and temporary code are entered, Continue is disabled.

{% capture example %}
<form class="auth auth--form-page" action="#" onsubmit="return false">
  <div class="auth__header">
    <div class="stack stack--align-center auth__intro">
      <h1>Set up an authentication app</h1>
    </div>
  </div>
  <div class="auth__form-page-body">
    <div class="stack stack--gap-16 stack--align-stretch">
      <ol class="nds-totp-setup__steps">
        <li>
          <div class="card stack stack--gap-24">
            <ol class="usa-list nds-totp-setup__step-heading" start="1">
              <li class="text-body-emphasis" id="totp1-step-1-label">Enter a nickname</li>
            </ol>
            <div class="usa-form-group usa-input-group--floating">
              <input class="usa-input" id="totp1-name" name="totp1-name" type="text" placeholder=" " maxlength="20" required aria-labelledby="totp1-step-1-label">
              <label class="usa-label" for="totp1-name">App nickname</label>
            </div>
          </div>
        </li>
        <li>
          <div class="card stack stack--gap-24">
            <ol class="usa-list nds-totp-setup__step-heading" start="2">
              <li class="text-body-emphasis">Open your preferred authentication app</li>
            </ol>
          </div>
        </li>
        <li>
          <div class="card stack stack--gap-24">
            <ol class="usa-list nds-totp-setup__step-heading" start="3">
              <li class="text-body-emphasis">Scan the QR code or enter the set up code manually in your authentication app</li>
            </ol>
            <div class="nds-totp-setup__qrcode">
              <img src="{{ site.baseurl }}/assets/img/material-icons/qr_code_2.svg" width="220" height="220" alt="QR code for authentication app">
            </div>
            <lg-clipboard-button class="display-block width-full" clipboard-text="ARUNJAYMZEMMHNXIFVSJCINMMLKFD" tooltip-text="Copied!">
              <div class="field-readout">
                <span class="field-readout__body">
                  <span class="field-readout__label" id="totp1-code-label">Setup code</span>
                  <span class="field-readout__value font-mono-sm" aria-labelledby="totp1-code-label">ARUNJAYMZEMMHNXIFVSJCINMMLKFD</span>
                </span>
                <button type="button" class="field-readout__action" aria-label="Copy setup code">
                  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#content_copy"></use></svg>
                </button>
              </div>
            </lg-clipboard-button>
          </div>
        </li>
        <li>
          <div class="card stack stack--gap-24">
            <ol class="usa-list nds-totp-setup__step-heading" start="4">
              <li class="text-body-emphasis">Enter the temporary code from your app</li>
            </ol>
            <div class="usa-form-group usa-input-group--floating margin-0">
              <input class="usa-input" id="totp1-code" name="totp1-code" type="text" placeholder=" " inputmode="numeric" autocomplete="one-time-code" maxlength="6" required>
              <label class="usa-label" for="totp1-code">Code</label>
            </div>
          </div>
        </li>
      </ol>
      <div class="card">
        <div class="checkbox-group">
          <div class="checkbox">
            <input class="checkbox__input" id="totp1-remember" name="totp1-remember" type="checkbox" aria-describedby="totp1-remember-description">
            <label class="checkbox__label" for="totp1-remember">
              <span class="checkbox__label-text">Remember this browser</span>
              <span class="checkbox__label-description" id="totp1-remember-description">Select this to skip authentication on supported sites. Do not select this if you are on a public or shared device.</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="auth__actions">
    <div class="actions actions--align-stretch">
      <button type="submit" class="usa-button usa-button--lg" disabled>Continue</button>
      <a href="#" class="usa-button usa-button--tertiary usa-button--lg">Choose another method</a>
    </div>
  </div>
</form>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Filled

Once both fields hold a value, Continue is enabled.

{% capture example %}
<form class="auth auth--form-page" action="#" onsubmit="return false">
  <div class="auth__header">
    <div class="stack stack--align-center auth__intro">
      <h1>Set up an authentication app</h1>
    </div>
  </div>
  <div class="auth__form-page-body">
    <div class="stack stack--gap-16 stack--align-stretch">
      <ol class="nds-totp-setup__steps">
        <li>
          <div class="card stack stack--gap-24">
            <ol class="usa-list nds-totp-setup__step-heading" start="1">
              <li class="text-body-emphasis" id="totp2-step-1-label">Enter a nickname</li>
            </ol>
            <div class="usa-form-group usa-input-group--floating">
              <input class="usa-input" id="totp2-name" name="totp2-name" type="text" placeholder=" " maxlength="20" value="Passwords App" required aria-labelledby="totp2-step-1-label">
              <label class="usa-label" for="totp2-name">App nickname</label>
            </div>
          </div>
        </li>
        <li>
          <div class="card stack stack--gap-24">
            <ol class="usa-list nds-totp-setup__step-heading" start="2">
              <li class="text-body-emphasis">Open your preferred authentication app</li>
            </ol>
          </div>
        </li>
        <li>
          <div class="card stack stack--gap-24">
            <ol class="usa-list nds-totp-setup__step-heading" start="3">
              <li class="text-body-emphasis">Scan the QR code or enter the set up code manually in your authentication app</li>
            </ol>
            <div class="nds-totp-setup__qrcode">
              <img src="{{ site.baseurl }}/assets/img/material-icons/qr_code_2.svg" width="220" height="220" alt="QR code for authentication app">
            </div>
            <lg-clipboard-button class="display-block width-full" clipboard-text="ARUNJAYMZEMMHNXIFVSJCINMMLKFD" tooltip-text="Copied!">
              <div class="field-readout">
                <span class="field-readout__body">
                  <span class="field-readout__label" id="totp2-code-label">Setup code</span>
                  <span class="field-readout__value font-mono-sm" aria-labelledby="totp2-code-label">ARUNJAYMZEMMHNXIFVSJCINMMLKFD</span>
                </span>
                <button type="button" class="field-readout__action" aria-label="Copy setup code">
                  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#content_copy"></use></svg>
                </button>
              </div>
            </lg-clipboard-button>
          </div>
        </li>
        <li>
          <div class="card stack stack--gap-24">
            <ol class="usa-list nds-totp-setup__step-heading" start="4">
              <li class="text-body-emphasis">Enter the temporary code from your app</li>
            </ol>
            <div class="usa-form-group usa-input-group--floating margin-0">
              <input class="usa-input" id="totp2-code" name="totp2-code" type="text" placeholder=" " inputmode="numeric" autocomplete="one-time-code" maxlength="6" value="492050" required>
              <label class="usa-label" for="totp2-code">Code</label>
            </div>
          </div>
        </li>
      </ol>
      <div class="card">
        <div class="checkbox-group">
          <div class="checkbox">
            <input class="checkbox__input" id="totp2-remember" name="totp2-remember" type="checkbox" aria-describedby="totp2-remember-description">
            <label class="checkbox__label" for="totp2-remember">
              <span class="checkbox__label-text">Remember this browser</span>
              <span class="checkbox__label-description" id="totp2-remember-description">Select this to skip authentication on supported sites. Do not select this if you are on a public or shared device.</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="auth__actions">
    <div class="actions actions--align-stretch">
      <button type="submit" class="usa-button usa-button--lg">Continue</button>
      <a href="#" class="usa-button usa-button--tertiary usa-button--lg">Choose another method</a>
    </div>
  </div>
</form>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Setup code copied

Copying the setup code shows a text-only [toast]({{ site.baseurl }}/toast/).
The example shows its open state. On the page the toast is pinned to the
viewport; here an inline style places it in the document flow so it doesn't
cover the examples above.

{% capture example %}
<div class="toast" data-open="true" style="position: static; transform: none;">
  <span class="toast__announcement">
    <p class="toast__text">Setup code copied</p>
  </span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
