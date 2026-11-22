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
`.nds-totp-setup__qrcode` block with a [read-only text input]({{ site.baseurl }}/text-input/)
and a copy action inside [`lg-clipboard-button`]({{ site.baseurl }}/clipboard-button/).
The steps are followed by a [flat checkbox]({{ site.baseurl }}/checkbox-flat/)
card and the page actions.

The QR code is 220px wide, or 180px on small viewports. The step list gap
narrows from 16px to 12px on small viewports.

The QR artwork is a non-scannable illustration; this preview does not enroll an
account or verify a code. Copy the sample setup code to see the confirmation toast.

### Empty

Continue becomes available after a nonblank nickname and six digits are entered.

{% capture example %}
{% include helpers/totp-setup.html prefix="totp1" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Filled

Both examples use the same form. Edit either field to check its state.

{% capture example %}
{% include helpers/totp-setup.html prefix="totp2" filled=true %}
{% endcapture %}
{% include helpers/code-example.html code=example %}
