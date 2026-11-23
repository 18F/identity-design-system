---
title: Text input
lead: A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.
---

{% include helpers/base-component.html component="text-input" stylesheet="usa-input" %}

## Text Input

### Default

{% capture example %}
{% include helpers/text-input-variant.html state="Default" id="fd85" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Filled

{% capture example %}
{% include helpers/text-input-variant.html state="Filled" id="tlkx" %}
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

## Input with format hint

When enforcing a specific text input pattern, provide a hint in the form of an example.

{% capture example %}
<label for="kvgx" class="usa-label">Social Security number</label>
<div id="kvgx-hint" class="usa-hint">Enter 9 digits, with or without dashes (for example, 123-45-6789).</div>
<input id="kvgx" type="text" class="usa-input" aria-describedby="kvgx-hint" pattern="[0-9]{9}|[0-9]{3}-[0-9]{2}-[0-9]{4}">
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Text input states

The Error examples show the field's appearance and how its message is linked.
To try submitting and correcting errors across fields, use the [Validation form]({{ site.baseurl }}/validation/).

Hover and focus specimens show their styling without needing a pointer or
moving keyboard focus. In the icon examples, activate the eye button to show
or hide the password. Read-only fields remain focusable so their value can be
read or copied. Disabled fields and their password buttons are skipped by Tab.

{% assign states = "Default,Hovered,Focused,Focused filled,Filled,Read only,Disabled,Error" | split: "," %}
{% for icon in (0..1) %}
{% for state in states %}
{% if icon == 0 %}
{% if state == "Default" or state == "Filled" %}{% continue %}{% endif %}
{% endif %}

### {{ state }}{% if icon == 1 %} with icon{% endif %}

{% capture field_id %}text-input-{{ state | slugify }}-{{ icon }}{% endcapture %}
{% capture example %}
{% if icon == 1 %}
{% include helpers/text-input-variant.html state=state id=field_id icon=true %}
{% else %}
{% include helpers/text-input-variant.html state=state id=field_id %}
{% endif %}
{% endcapture %}
{% include helpers/code-example.html code=example %}
{% endfor %}
{% endfor %}
