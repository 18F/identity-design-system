---
title: Cards
lead: >
  Use cards to organize feeds
---

## Cards

Cards provide a way to separate data in a feed.

{% capture example %}
<div class='lg-card'>
  <div class='grid-row flex-row flex-align-end'>
    <div class='mobile:grid-col-10'>
      <h1 class='margin-bottom-05'>A card header!</h1>
      <p class='margin-top-05'>Some content for this card!</p>
    </div>
    <div class='mobile:grid-col-2 text-right'>
      <a href='#' class='usa-button usa-button--outline'>Action</a>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
