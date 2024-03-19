---
title: Banner
lead: Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.
---

{% include helpers/base-component.html component="banner" %}

## Default

{% capture example %}
{% include banner.html id="gov-banner-default" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Centered

{% capture example %}
{% include banner.html centered=true id="gov-banner-centered" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}
