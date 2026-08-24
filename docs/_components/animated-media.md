---
title: Animated media
lead: Media with a play and pause toggle overlay.
---

## Animated media

The `.animated-media` component overlays a `.animated-media__toggle` button on
an image or animated frame. The `data-playing` attribute selects whether the
`--play` or `--pause` icon shows. The `--desktop` and `--mobile` modifiers swap
sources at the 768px breakpoint.

{% capture example %}
<div class="animated-media" data-playing="true">
  <img class="animated-media__image" src="{{ site.baseurl }}/img/fingerprint-icon.svg" alt="Fingerprint demonstration">
  <button class="animated-media__toggle" type="button" aria-label="Pause animation">
    <span class="animated-media__icon animated-media__icon--play" aria-hidden="true">&#9654;</span>
    <span class="animated-media__icon animated-media__icon--pause" aria-hidden="true">&#10074;&#10074;</span>
  </button>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
