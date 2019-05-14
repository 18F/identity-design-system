---
title: Accordions
lead: >
  Accordions are a list of headers that can be clicked to hide or reveal additional content.
---

Before using an accordion, consider if their use would hinder usability. If there is not enough content to warrant condensing or if visitors need to see most or all of the information on a page, use well-formatted text instead.

{% capture example %}
<h6>Bordered</h6>

<div class="usa-accordion usa-accordion--bordered">
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="true"
      aria-controls="b-a1">
      How do I make an accordion’s content shown by default?
    </button>
  </h2>
  <div id="b-a1" class="usa-accordion__content usa-prose">
    <p>Follow this example! Mark the <code>.usa-accordion-button</code> with <code>aria-expanded="true"</code> to indicate that the content referenced with the ID listed in <code>aria-controls</code> is expanded by default, and omit the <code>hidden</code> attribute on the related <code>.usa-accordion__content</code>.</p>

  </div>
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a2">
      How do I make an accordion’s content hidden by default?
    </button>
  </h2>
  <div id="b-a2" class="usa-accordion__content usa-prose">
    <p>Do not mark any attributes, other than linking a header and content body by <code>aria-controls="unique-id"</code> and <code>id="unique-id"</code>. This ensures the content is accessible should JavaScript fail to load.</p>

  </div>
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a3">
      How can I allow more than one accordion item to be open simultaneously?
    </button>
  </h2>
  <div id="b-a3" class="usa-accordion__content usa-prose">
    <p>On the wrapping <code>.usa-accordion</code>, add the <code>aria-multiselectable="true"</code> attribute.</p

  </div>
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a4">
      Fourth Amendment
    </button>
  </h2>
  <div id="b-a4" class="usa-accordion__content usa-prose">
    <p>The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.</p>

  </div>
  
  <!-- Use the accurate heading level to maintain the document outline -->
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a5">
      Fifth Amendment
    </button>
  </h2>
  <div id="b-a5" class="usa-accordion__content usa-prose">
    <p>No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.</p>

  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
