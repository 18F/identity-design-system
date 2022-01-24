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
<form class="usa-search" role="search">
  <label class="usa-sr-only" for="tkBH">Search</label>
  <input class="usa-input" id="tkBH" type="search">
  <button class="usa-button" type="submit">
    <span class="usa-search__submit-text">Search</span>
  </button>
</form>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Big variant

If searching is a primary action of the site, consider adding the big variant version to the primary hero section to reinforce that action.

{% capture example %}
<form class="usa-search usa-search--big" role="search">
  <label class="usa-sr-only" for="V3Nn">Search</label>
  <input class="usa-input" id="V3Nn" type="search">
  <button class="usa-button" type="submit">
    <span class="usa-search__submit-text">Search</span>
  </button>
</form>
{% endcapture %}
{% include helpers/code-example.html code=example %}
