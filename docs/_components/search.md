---
title: Search
subnav:
  - text: Default
    href: "#default"
  - text: Big variant
    href: "#big-variant"
lead: >
  Search allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation.
---

{% include helpers/base-component.html component="search" %}

## Default

Search should be easily found. For the default search version, consider displaying in the header and/or side navigation.

{% capture example %}
{% include helpers/search.html id="tkBH" landmark="Site" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Big variant

If searching is a primary action of the site, consider adding the big variant version to the primary hero section to reinforce that action.

{% capture example %}
{% include helpers/search.html id="V3Nn" landmark="Featured content" big=true %}
{% endcapture %}
{% include helpers/code-example.html code=example %}
