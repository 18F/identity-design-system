---
title: Status badges
lead: >
  Status badges label an item with a short, color-coded status.
---

## Status badges

The `.badge` component is a small inline pill that labels an item with a short
status. Pair the base `.badge` class with a color level, and optionally the
`.badge--md` size, the `.badge--dark` surface variant, or the square
`.badge--icon-only` form.

{%- assign badge_levels = "primary,secondary,tertiary,info,success,warning,error" | split: "," -%}
{%- capture badge_icon -%}<svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#add"></use></svg>{%- endcapture %}

### Color levels

Small is the default size: 20px tall with an 8px radius.

{% capture example %}
{%- for level in badge_levels %}
<span class="badge badge--{{ level }}">{{ level | capitalize }}</span>
{%- endfor %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Medium

Add `.badge--md` for the 36px pill.

{% capture example %}
{%- for level in badge_levels %}
<span class="badge badge--{{ level }} badge--md">{{ level | capitalize }}</span>
{%- endfor %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Icon only

Use `.badge--icon-only` for a square badge that contains a single 16px icon: 20px
by default, 36px and round with `.badge--md`. Provide an accessible label so the
meaning is announced to assistive technology.

{% capture example %}
{%- for level in badge_levels %}
<span class="badge badge--{{ level }} badge--icon-only" role="img" aria-label="{{ level | capitalize }}">{{ badge_icon }}</span>
{%- endfor %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

{% capture example %}
{%- for level in badge_levels %}
<span class="badge badge--{{ level }} badge--icon-only badge--md" role="img" aria-label="{{ level | capitalize }}">{{ badge_icon }}</span>
{%- endfor %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Dark surface

Add `.badge--dark` to any level when the badge sits on a dark background.

{% capture example %}
<span class="badge badge--primary badge--dark">Primary</span>
<span class="badge badge--secondary badge--dark">Secondary</span>
<span class="badge badge--success badge--dark">Success</span>
<span class="badge badge--tertiary badge--dark">Tertiary</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### With icon

{% capture example %}
<span class="badge badge--success">
  <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
  Verified
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
