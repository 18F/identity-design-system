---
title: NIST badge
lead: >
  A NIST badge is a trust mark shown below the main card on confirmation
  screens. It is centered in NDS and left-aligned in the legacy theme.
---

## NIST badge

Wrap the seal and copy in `.nist-badge`. Use the `nist-badge/nist-seal.svg` image with
`.nist-badge__seal`, and put the copy inside `.nist-badge__copy`, using
`.nist-badge__title` for the first line and `.nist-badge__subtitle` for the
second. Show “NIST compliant” as visible text so readers do not need to
read the lettering inside the seal. Use `alt=""` on the seal to avoid
repeating the same words to screen readers.

{% capture example %}
<div class="nist-badge">
  <img class="nist-badge__seal" src="{{ site.baseurl }}/assets/img/nist-badge/nist-seal.svg" width="72" height="72" alt="">
  <div class="nist-badge__copy">
    <p class="nist-badge__title">NIST compliant</p>
    <p class="nist-badge__subtitle">National Institute of Standards and Technology</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
