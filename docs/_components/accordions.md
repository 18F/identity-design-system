---
title: Accordions
lead: >
  Accordions are a list of headers that can be clicked to hide or reveal additional content.
---

{% include helpers/base-component.html component="accordion" %}

Before using an accordion, consider if their use would hinder usability. If there is not enough content to warrant condensing or if visitors need to see most or all of the information on a page, use well-formatted text instead.

In the examples below, replace `<h2>` with the appropriate heading level to maintain the document's outline.

## Default

{% include helpers/embed.html embed="accordions/default" %}

## Bordered

{% capture example %}
<div class="usa-accordion usa-accordion--bordered">
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="true" aria-controls="unique-id-4">
      First Amendment
    </button>
  </h2>
  <div id="unique-id-4" class="usa-accordion__content usa-prose">
    <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
  </div>

  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="unique-id-5">
      Second Amendment
    </button>
  </h2>
  <div id="unique-id-5" class="usa-accordion__content usa-prose">
    <p>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
