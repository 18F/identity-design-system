---
title: Accordions
lead: >
  Accordions are a list of headers that can be clicked to hide or reveal additional content.
---

Before using an accordion, consider if their use would hinder usability. If there is not enough content to warrant condensing or if visitors need to see most or all of the information on a page, use well-formatted text instead.

{% capture example %}
<div class="usa-accordion usa-accordion--bordered" data-test="accordion">
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="true" aria-controls="unique-id-1">
      How do I make an accordion’s content shown by default?
    </button>
  </h2>
  <div id="unique-id-1" class="usa-accordion__container">
    <div class="usa-accordion__content usa-prose">
      <p>Follow this example! Mark the <code>.usa-accordion__button</code> with <code>aria-expanded="true"</code> to indicate that the content referenced with the ID listed in <code>aria-controls</code> is expanded by default, and omit the <code>hidden</code> attribute on the related <code>.usa-accordion__content</code>.</p>
    </div>
    <button class="usa-accordion__close-button">Close</button>
  </div>

  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="unique-id-2">
      How do I make an accordion’s content hidden by default?
    </button>
  </h2>
  <div id="unique-id-2" class="usa-accordion__container">
    <div class="usa-accordion__content usa-prose">
      <p>Do not mark any attributes, other than linking a header and content body by <code>aria-controls="unique-id"</code> and <code>id="unique-id"</code>. This ensures the content is accessible should JavaScript fail to load.</p>
    </div>
    <button class="usa-accordion__close-button">Close</button>
  </div>

  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="unique-id-3">
      How can I allow more than one accordion item to be open simultaneously?
    </button>
  </h2>
  <div id="unique-id-3" class="usa-accordion__container">
    <div class="usa-accordion__content usa-prose">
      <p>On the wrapping <code>.usa-accordion</code>, add the <code>aria-multiselectable="true"</code> attribute.</p>
    </div>
    <button class="usa-accordion__close-button">Close</button>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
