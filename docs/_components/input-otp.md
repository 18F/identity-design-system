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
In the slotted control, click a digit or use the arrow keys to select it.
Typing replaces the selected digit and advances. Clicking an empty slot
continues at the end of the code. Pasting a complete code replaces the field;
shorter pastes edit the current selection. These examples accept digits only.
Leave `data-enhanced` off the markup: the script sets it when the slots are ready.

{% capture example %}
<lg-nds-input-otp>
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
        pattern="[0-9]*"
        maxlength="6"
        value="123"
      >
      <div class="input-otp__slots" aria-hidden="true">
        <div class="input-otp__group">
          <div class="input-otp__slot">1</div>
          <div class="input-otp__slot">2</div>
          <div class="input-otp__slot">3</div>
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

### Grouped with a separator

Split longer codes into groups with a separator to make them easier to read.

{% capture example %}
<lg-nds-input-otp>
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
        pattern="[0-9]*"
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
          <div class="input-otp__slot"></div>
          <div class="input-otp__slot"></div>
        </div>
      </div>
    </div>
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
<lg-nds-input-otp>
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
        pattern="[0-9]*"
        maxlength="6"
        value="123"
        aria-invalid="true"
        aria-describedby="otp-error-message"
      >
      <div class="input-otp__slots" aria-hidden="true">
        <div class="input-otp__group">
          <div class="input-otp__slot">1</div>
          <div class="input-otp__slot">2</div>
          <div class="input-otp__slot">3</div>
          <div class="input-otp__slot"></div>
          <div class="input-otp__slot"></div>
          <div class="input-otp__slot"></div>
        </div>
      </div>
    </div>
    <span class="usa-error-message" id="otp-error-message" role="alert">
      <svg class="usa-icon" viewBox="0 0 24 24" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#info"></use></svg>
      Enter the one-time code without spaces or special characters.
    </span>
  </div>
</lg-nds-input-otp>
{% endcapture %}
{% include helpers/code-example.html code=example %}
