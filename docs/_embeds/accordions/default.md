---
title: Default Accordion
---

<div class="usa-accordion">
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="true" aria-controls="unique-id-1">
      How do I make an accordion’s content shown by default?
    </button>
  </h2>
  <div id="unique-id-1" class="usa-accordion__content usa-prose">
    <p>Follow this example! Mark the <code>.usa-accordion__button</code> with <code>aria-expanded="true"</code> to indicate that the content referenced with the ID listed in <code>aria-controls</code> is expanded by default.</p>
  </div>

  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="unique-id-2">
      How do I make an accordion’s content hidden by default?
    </button>
  </h2>
  <div id="unique-id-2" class="usa-accordion__content usa-prose">
    <p>Mark the <code>.usa-accordion__button</code> with <code>aria-expanded="false"</code> to indicate that the content referenced with the ID listed in <code>aria-controls</code> is collapsed by default.</p>
  </div>

  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="unique-id-3">
      How can I allow more than one accordion item to be open simultaneously?
    </button>
  </h2>
  <div id="unique-id-3" class="usa-accordion__content usa-prose">
    <p>On the wrapping <code>.usa-accordion</code>, add the <code>aria-multiselectable="true"</code> attribute.</p>
  </div>
</div>
