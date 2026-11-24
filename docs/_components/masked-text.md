---
title: Masked text
lead: Displays sensitive information in a read-only review. A value can stay masked or offer a reveal control.
---

## Social Security number

On a verification review, let the user check their number without editing it.
This example uses a fictitious SSN. The checkbox reveals or masks it without
JavaScript. Masking is for visual privacy; the revealed value is in the page.

{% capture example %}
<span class="masked-text masked-text--toggleable">
  <span class="masked-text__value masked-text__value--numeric" id="review-ssn">
    <span class="masked-text__concealed"><span aria-hidden="true">{% for i in (1..3) %}<span class="masked-text__digit">•</span>{% endfor %}-{% for i in (1..2) %}<span class="masked-text__digit">•</span>{% endfor %}-6789</span><span class="usa-sr-only">Ending in 6789</span></span>
    <span class="masked-text__revealed">{% for i in (1..3) %}<span class="masked-text__digit">0</span>{% endfor %}-{% for i in (1..2) %}<span class="masked-text__digit">0</span>{% endfor %}-6789</span>
  </span>
  {% include helpers/masked-text-toggle.html id="reveal-secret" controls="review-ssn" label="Show Social Security number" %}
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Email address

On an account review, a partially masked address can help someone recognize
the account. Use the eye control to check the full example address or mask it again.

{% capture example %}
<span class="masked-text masked-text--toggleable">
  <span class="masked-text__value masked-text__value--wrappable" id="review-email">
    <span class="masked-text__concealed"><span aria-hidden="true">j••••@example.com</span><span class="usa-sr-only">Masked email address starting with j at example.com</span></span>
    <span class="masked-text__revealed">jamie.alexander+account-notifications@example.com</span>
  </span>
  {% include helpers/masked-text-toggle.html id="reveal-email" controls="review-email" label="Show email address" %}
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
