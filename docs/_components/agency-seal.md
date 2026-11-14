---
title: Agency seal
lead: >
  An agency seal is a circular partner-agency seal or logo, shown in the
  header, in agency rows, and above page headings.
---

## Agency seal

Apply `.agency-seal` to a wrapper around an `.agency-seal__image`, or directly
to an `<img>`. The seal crops the image to a circle and scales it to cover the
circle. The default size is 48px, which is the size used in consent and agency
rows.

{% capture example %}
<span class="agency-seal agency-seal--bordered">
  <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-dark.svg" alt="Sample Agency">
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Sizes

Add a size modifier to match where the seal is used.

### 24px

Use `.agency-seal--24` in the header, next to the Login.gov logo.

{% capture example %}
<span class="agency-seal agency-seal--24" style="--nds-agency-seal-bg: #151038">
  <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="Sample Agency">
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### 48px

Use `.agency-seal--48` (or no size modifier) in consent and agency rows.

{% capture example %}
<span class="agency-seal agency-seal--48" style="--nds-agency-seal-bg: #151038">
  <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="Sample Agency">
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### 100px

Use `.agency-seal--100` for the hero seal above a page heading, such as
identity verification welcome, "Identity verified", and "Login.gov account
created".

{% capture example %}
<span class="agency-seal agency-seal--100" style="--nds-agency-seal-bg: #151038">
  <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="Sample Agency">
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### 180px

Use `.agency-seal--180` in the dashboard welcome modal collage.

{% capture example %}
<span class="agency-seal agency-seal--180 agency-seal--bordered">
  <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-dark.svg" alt="Sample Agency">
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Background color

Seals that don't fill their circle show a background color behind the image.
The color depends on the agency, so set it with the `--nds-agency-seal-bg`
custom property instead of adding a class per agency. The default is white.
Add `.agency-seal--bordered` to give a white or light seal a hairline edge
against a white page.

{% capture example %}
<span class="agency-seal agency-seal--100" style="--nds-agency-seal-bg: #151038">
  <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="Sample Agency">
</span>
<span class="agency-seal agency-seal--100 agency-seal--bordered margin-top-2">
  <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-dark.svg" alt="Sample Agency">
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Single image

When there is no need for a wrapper, apply the classes directly to the `<img>`.

{% capture example %}
<img class="agency-seal agency-seal--48 agency-seal--bordered" src="{{ site.baseurl }}/img/sample-agency-seal-dark.svg" alt="Sample Agency">
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Accessibility

- **Decorative:** if the agency name is visible next to the seal, for example in
  a consent row or in a heading that names the agency, use `alt=""` so screen
  readers don't announce the name twice.
- **Informative:** if the seal is the only thing that identifies the agency,
  for example the 24px seal in the header, set `alt` to the agency name (for
  example `alt="U.S. Department of Veterans Affairs"`). Don't add words like
  "seal" or "logo".
- Don't rely on the background color to convey meaning.
