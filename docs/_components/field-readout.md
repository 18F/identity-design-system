---
title: Field readout
lead: >
  Use a read-only text input for generated values that users can select and
  copy but never edit. Use the inline readout for a short value in a sentence.
---

## Field readout

The first two examples use the [Text input]({{ site.baseurl }}/text-input/)
component with native `readonly`, not `disabled`. The field stays focusable
so users can select and copy its value.

{% assign setup_code = 'ARUNJAYMZEMMHNXIFVSJCINMMLKFD' %}
{% capture example %}
{% include helpers/text-input.html id="fr1" label="Setup code" attributes="readonly" value=setup_code %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

### With a copy action

Use the input's trailing action for the [Clipboard button]({{ site.baseurl }}/clipboard-button/).
After a successful copy, the icon briefly changes to a checkmark.

{% capture copy_action %}
<button type="button" class="usa-input__toggle" aria-label="Copy setup code" aria-controls="fr2">
  <span class="clipboard-label" aria-hidden="true">
    <span><svg class="usa-icon display-block" focusable="false" width="20" height="20"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#copy"></use></svg></span>
    <span data-copy-confirmation hidden><svg class="usa-icon display-block" focusable="false" width="20" height="20"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#checkmark"></use></svg></span>
  </span>
</button>
{% endcapture %}
{% capture example %}
<lg-clipboard-button class="display-block" data-nds-copy clipboard-text="{{ setup_code }}">
  {% include helpers/text-input.html id="fr2" label="Setup code" attributes="readonly" value=setup_code trailing_action=copy_action %}
  <span role="status" data-copy-status></span>
</lg-clipboard-button>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Inline

Add `.field-readout--inline` to hug a value inside running text — for example an
error code mid-sentence. The inline variant is label-less and takes no action.

{% capture example %}
<p>Please provide the error code <span class="field-readout field-readout--inline"><span class="field-readout__value">EFGHI</span></span>.</p>
{% endcapture %}
{% include helpers/code-example.html code=example %}
