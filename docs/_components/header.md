---
title: Header
lead: >
  A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.
---

{% include helpers/base-component.html component="header" %}

## Default

How it works, Partners, Help, and the language selector sit beside the wordmark as Medium Ghost buttons. English is selected by default. Choosing another language updates the selection without translating this component preview. Search and Sign in use Medium Secondary buttons at the opposite edge on desktop.

<div><div class="margin-y-3">
<iframe class="width-full border-0" src="{{ site.baseurl }}/embeds/header/mobile/" title="Responsive primary header" height="320"></iframe>
</div></div>

## Mobile

In NDS, the 24px-high wordmark is centered between the Menu and Search Ghost icon buttons. The open menu uses Heading/M text links for How it works, Partners, and Help. As the viewport grows taller, the extra space goes above the language selector. Sign in stays 24px from the bottom, with 12px between the two controls.

<div><div class="margin-y-3">
<iframe class="width-full maxw-mobile-lg border-0" src="{{ site.baseurl }}/embeds/header/mobile/" title="Mobile primary header" style="height: 80dvh"></iframe>
</div></div>

<script>
  // Each preview owns its navigation focus trap; keep its theme in sync with the docs.
  if (new URLSearchParams(location.search).get('ui_test_bucket') === 'legacy') {
    document.querySelectorAll('iframe[src*="/embeds/header/mobile/"]').forEach(frame => {
      frame.src += '?ui_test_bucket=legacy';
    });
  }
</script>

## Markup

{% capture example %}{% include helpers/site-header.html markup_only=true %}{% endcapture %}
```html
{{ example | replace: site.baseurl, '' | strip }}
```
