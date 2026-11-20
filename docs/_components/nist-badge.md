---
title: NIST badge
lead: >
  A NIST badge is a centered trust mark shown below the main card on
  confirmation screens, such as account created and identity verified.
---

## NIST badge

Wrap the seal and copy in `.nist-badge`. Use the `nist-badge/nist-seal.svg` image with
`.nist-badge__seal`, and put the copy inside `.nist-badge__copy`, using
`.nist-badge__title` for the first line and `.nist-badge__subtitle` for the
second. The seal reads "NIST compliant", so give the image matching
alternative text.

{% capture example %}
<div class="nist-badge">
  <img class="nist-badge__seal" src="{{ site.baseurl }}/assets/img/nist-badge/nist-seal.svg" width="72" height="72" alt="NIST compliant">
  <div class="nist-badge__copy">
    <p class="nist-badge__title">Encrypted. Protected. Proven.</p>
    <p class="nist-badge__subtitle">National Institute of Standards and Technology</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
