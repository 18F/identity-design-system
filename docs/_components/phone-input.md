---
title: Phone number input
lead: >
  A phone number input pairs a country selector with a floating-label
  telephone field inside a single pill-shaped control.
---

The country selector is a `<details>` disclosure whose open panel is a styled
`.popover-menu` of radio options. Use `.popover-menu-disclosure` on the
`<details>` so the shared popover behavior can shift or flip it at viewport edges.
Style the native `<summary>` with the shared Secondary / Small button classes.
Start with a named native country select and a hidden disclosure. The select
owns the submitted country and remains visible without JavaScript. Give each
radio group a unique name and an unowned `form` ID so it does not submit a
second value. `phoneInput.on()` reveals the disclosure and mirrors its choice
to the select. To set the country from application code, update the select's
value and dispatch `change`; the trigger, checked option and formatter follow.
In enhanced mode the country is included during `formdata` only if its telephone
field is enabled. Read-only fields still submit both values.
Arrow keys change country without closing; Enter, Space or a
pointer choice closes it. Escape closes without undoing the selected radio.
The number field uses the
floating-label pattern:
render the input BEFORE its `.usa-phone-input__label` (the label must be the
input's next sibling) and give the input `placeholder=" "` so
`:placeholder-shown` tracks emptiness.

With United States selected (`value="US"`), the national number groups as you
type or paste: `6029019304` becomes `(602) 901 - 9304`. The telephone field
submits its displayed value. Other countries use free-form telephone entry;
formatting is not validation.

The option list is supplied by the consuming app (login.gov renders it from its
supported-country data), one `.usa-phone-input__country-option` per country.

{% assign states = 'Default,Filled,Read only,Disabled,Error' | split: ',' %}
{% for state in states %}
## {{ state }}

{% assign id = forloop.index | prepend: 'pi' %}
{% assign number = 'phone-number' %}
{% assign country = 'phone-country' %}
{% unless forloop.first %}
{% assign number = number | append: '-' | append: forloop.index %}
{% assign country = country | append: '-' | append: forloop.index %}
{% endunless %}
{% capture example %}
{% include helpers/phone-input.html id=id state=state number=number country=country %}
{% endcapture %}
{% include helpers/code-example.html code=example %}
{% endfor %}
