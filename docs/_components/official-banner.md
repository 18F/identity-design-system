---
title: Official website banner
lead: >
  The official website banner tells visitors they are on an official government
  website.
---

The banner sits at the very top of the page. It shows a flag, a short
statement that this is an official government site, and a link to more
information.

## Default

{% capture example %}
<section class="official-banner" aria-label="Official government website">
  <div class="official-banner__content">
    <span class="official-banner__flag" aria-hidden="true"></span>
    <p class="official-banner__text">
      An official website of the United States government.
      <a href="#" class="official-banner__how link">Here's how you know</a>
    </p>
  </div>
</section>
{% endcapture %}
{% include helpers/code-example.html code=example %}
