---
title: One-time code input
lead: >
  A one-time code input lets users enter a short verification code into
  individual character slots.
---

## One-time code input

Each character of the code appears in its own slot. The visible slots mirror a
single input that holds the full value, so users can type, paste, and edit the
code as one field while seeing it laid out one character at a time.

### Empty

Slots are 80px tall on desktop and 64px on narrow screens, with a 12px gap.

{% capture example %}
<lg-nds-input-otp data-enhanced="true">
  <div class="input-otp">
    <label class="input-otp__label" for="otp-empty">One-time code</label>
    <div class="input-otp__shell">
      <input
        id="otp-empty"
        class="input-otp__input usa-input__control"
        type="text"
        inputmode="numeric"
        autocomplete="one-time-code"
        name="otp-empty"
        maxlength="6"
        value=""
      >
      <div class="input-otp__slots" aria-hidden="true">
        <div class="input-otp__group">
          <div class="input-otp__slot"></div>
          <div class="input-otp__slot"></div>
          <div class="input-otp__slot"></div>
          <div class="input-otp__slot"></div>
          <div class="input-otp__slot"></div>
          <div class="input-otp__slot"></div>
        </div>
      </div>
    </div>
  </div>
</lg-nds-input-otp>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Filled

{% capture example %}
<lg-nds-input-otp data-enhanced="true">
  <div class="input-otp">
    <label class="input-otp__label" for="otp-filled">One-time code</label>
    <div class="input-otp__shell">
      <input
        id="otp-filled"
        class="input-otp__input usa-input__control"
        type="text"
        inputmode="numeric"
        autocomplete="one-time-code"
        name="otp-filled"
        maxlength="6"
        value="123456"
      >
      <div class="input-otp__slots" aria-hidden="true">
        <div class="input-otp__group">
          <div class="input-otp__slot">1</div>
          <div class="input-otp__slot">2</div>
          <div class="input-otp__slot">3</div>
          <div class="input-otp__slot">4</div>
          <div class="input-otp__slot">5</div>
          <div class="input-otp__slot">6</div>
        </div>
      </div>
    </div>
  </div>
</lg-nds-input-otp>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Typing

While focused, the active slot gets a darker stroke and a blinking caret.

{% capture example %}
<lg-nds-input-otp data-enhanced="true">
  <div class="input-otp">
    <label class="input-otp__label" for="otp-demo">One-time code</label>
    <div class="input-otp__shell">
      <input
        id="otp-demo"
        class="input-otp__input usa-input__control"
        type="text"
        inputmode="numeric"
        autocomplete="one-time-code"
        name="otp-demo"
        maxlength="6"
        value="123"
      >
      <div class="input-otp__slots" aria-hidden="true">
        <div class="input-otp__group">
          <div class="input-otp__slot">1</div>
          <div class="input-otp__slot">2</div>
          <div class="input-otp__slot">3</div>
          <div class="input-otp__slot input-otp__slot--active input-otp__slot--caret"></div>
          <div class="input-otp__slot"></div>
          <div class="input-otp__slot"></div>
        </div>
      </div>
    </div>
  </div>
</lg-nds-input-otp>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Grouped with a separator

Split longer codes into groups with a separator to make them easier to read.

{% capture example %}
<lg-nds-input-otp data-enhanced="true">
  <div class="input-otp">
    <label class="input-otp__label" for="otp-grouped">Verification code</label>
    <div class="input-otp__shell">
      <input
        id="otp-grouped"
        class="input-otp__input usa-input__control"
        type="text"
        inputmode="numeric"
        autocomplete="one-time-code"
        name="otp-grouped"
        maxlength="6"
        value="4826"
      >
      <div class="input-otp__slots" aria-hidden="true">
        <div class="input-otp__group">
          <div class="input-otp__slot">4</div>
          <div class="input-otp__slot">8</div>
          <div class="input-otp__slot">2</div>
        </div>
        <span class="input-otp__separator input-otp__separator--text">–</span>
        <div class="input-otp__group">
          <div class="input-otp__slot">6</div>
          <div class="input-otp__slot input-otp__slot--active input-otp__slot--caret"></div>
          <div class="input-otp__slot"></div>
        </div>
      </div>
    </div>
    <p class="input-otp__hint">Enter the 6-digit code we sent to your phone.</p>
  </div>
</lg-nds-input-otp>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Error state

Set `aria-invalid="true"` on the real input to mark the field invalid — the
`:has()` selector turns every slot red. Pair it with a `.usa-error-message`
that describes the problem, associate it via `aria-describedby`, and give it
`role="alert"` so assistive technology announces the error.

{% capture example %}
<lg-nds-input-otp data-enhanced="true">
  <div class="input-otp">
    <label class="input-otp__label" for="otp-error">One-time code</label>
    <div class="input-otp__shell">
      <input
        id="otp-error"
        class="input-otp__input usa-input__control"
        type="text"
        inputmode="numeric"
        autocomplete="one-time-code"
        name="otp-error"
        maxlength="6"
        value="123456"
        aria-invalid="true"
        aria-describedby="otp-error-message"
      >
      <div class="input-otp__slots" aria-hidden="true">
        <div class="input-otp__group">
          <div class="input-otp__slot">1</div>
          <div class="input-otp__slot">2</div>
          <div class="input-otp__slot">3</div>
          <div class="input-otp__slot">4</div>
          <div class="input-otp__slot">5</div>
          <div class="input-otp__slot">6</div>
        </div>
      </div>
    </div>
    <span class="usa-error-message" id="otp-error-message" role="alert">
      <svg class="usa-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M13.2 18h-2.4v-7.2h2.4zm.24-10.56c0 .795-.36 1.44-1.44 1.44s-1.44-.645-1.44-1.44S10.92 6 12 6s1.44.645 1.44 1.44"/><path fill="currentColor" fill-rule="evenodd" d="M12 1.2C6 1.2 1.2 6 1.2 12S6 22.8 12 22.8 22.8 18 22.8 12 18 1.2 12 1.2m0 2.4c4.68 0 8.4 3.72 8.4 8.4s-3.72 8.4-8.4 8.4-8.4-3.72-8.4-8.4S7.32 3.6 12 3.6" clip-rule="evenodd"/></svg>
      Error message
    </span>
  </div>
</lg-nds-input-otp>
{% endcapture %}
{% include helpers/code-example.html code=example %}
