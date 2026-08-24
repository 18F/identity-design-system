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
