---
title: Text input
lead: A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.
---

{% include helpers/base-component.html component="text-input" stylesheet="usa-input" %}

## Text Input

### Default

{% capture example %}
<label for="fd85" class="usa-label">Text input</label>
<input id="fd85" type="text" class="usa-input">
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Big

{% capture example %}
<label for="tlkx" class="usa-label">Text input</label>
<input id="tlkx" type="text" class="usa-input usa-input--big">
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Textarea

### Default

{% capture example %}
<label for="e8c5" class="usa-label">Textarea (multiline) input</label>
<textarea id="e8c5" type="text" class="usa-textarea"></textarea>
{% endcapture %}
{% include helpers/code-example.html code=example %}

#### Big

{% capture example %}
<label for="p8n0" class="usa-label">Textarea (multiline) input</label>
<textarea id="p8n0" type="text" class="usa-textarea usa-textarea--big"></textarea>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Format constraints

When enforcing a specific text input pattern, provide a hint in the form of an example.

{% capture example %}
<label for="kvgx" class="usa-label">Social Security number</label>
<div id="kvgx-hint" class="usa-hint">Example: 000-123-4567</div>
<input id="kvgx" type="text" class="usa-input" aria-describedby="kvgx-hint" pattern="^\d{3}-?\d{2}-?\d{4}$">
{% endcapture %}
{% include helpers/code-example.html code=example %}
