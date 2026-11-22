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
<div class="animated-media" data-playing="false">
  <div class="animated-media__frame bg-primary-lighter" style="aspect-ratio: 16 / 9" aria-hidden="true"></div>
  <button class="animated-media__toggle usa-button usa-button--secondary usa-button--sm usa-button--icon-only"
    type="button" data-label-play="Play animation" data-label-pause="Pause animation" aria-label="Play animation">
    <span class="animated-media__icon animated-media__icon--play" aria-hidden="true"><svg class="usa-icon" aria-hidden="true"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#play-icon-20"></use></svg></span>
    <span class="animated-media__icon animated-media__icon--pause" aria-hidden="true" hidden><svg class="usa-icon" aria-hidden="true"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#pause"></use></svg></span>
  </button>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
