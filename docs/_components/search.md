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

## Default
Search should be easily found. For the default search version, consider displaying in the header and/or side navigation. 

{% capture example %}
<form accept-charset="UTF-8" action="https://search.usa.gov/search" class="usa-search usa-search--smalldisplay-flex flex-justify-center" method="get" role="search">
  <input name="utf8" type="hidden" value="&#x2713;"/>
  <input name="affiliate" type="hidden" value="login.gov"/>
  <label class="usa-sr-only" for="search-field-header-nav">Search</label>
  <input class="usa-input" id="search-field-header-nav" name="query" type="search">
  <button class="usa-button" type="submit">
    <span class="usa-search__submit-text">Search</span>
  </button>
</form>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Big variant
If searching is a primary action of the site, consider adding the big variant version to the primary hero section to reinforce that action.

{% capture example %}
<form accept-charset="UTF-8" action="https://search.usa.gov/search" class="usa-search usa-search--big display-flex flex-justify-center" method="get" role="search">
  <input name="utf8" type="hidden" value="&#x2713;"/>
  <input name="affiliate" type="hidden" value="login.gov"/>
  <label class="usa-sr-only" for="search-field-{{ include.id }}">Search</label>
  <input class="usa-input" id="search-field-{{ include.id }}" name="query" type="search">
  <button class="usa-button" type="submit">
    <span class="usa-search__submit-text">Search</span>
  </button>
</form>
{% endcapture %}
{% include helpers/code-example.html code=example %}