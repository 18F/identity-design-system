---
title: Animated media
lead: Media with a play and pause toggle overlay.
---

## Animated media

The `.animated-media` component overlays a `.animated-media__toggle` button on
an image or animated frame. The `data-playing` attribute selects whether the
`--play` or `--pause` icon shows. The `--desktop` and `--mobile` modifiers swap
sources at the 768px breakpoint.

In the NDS stylesheet the media fills an 864 by 400 frame with square corners
and is cropped to cover it. The examples below use still frames of the library
animations; in production, use the animation itself.

{% capture example %}
<div class="animated-media" data-playing="true">
  <img class="animated-media__image" src="{{ site.baseurl }}/img/animated-media/security-key-desktop.jpg" alt="A security key next to a laptop">
  <button class="animated-media__toggle" type="button" aria-label="Pause animation">
    <span class="animated-media__icon animated-media__icon--play" aria-hidden="true">&#9654;</span>
    <span class="animated-media__icon animated-media__icon--pause" aria-hidden="true">&#10074;&#10074;</span>
  </button>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Types

The library has two animations, each with a desktop and a mobile version.

### Security key, desktop

{% capture example %}
<div class="animated-media">
  <img class="animated-media__image" src="{{ site.baseurl }}/img/animated-media/security-key-desktop.jpg" alt="A security key next to a laptop">
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Security key, mobile

{% capture example %}
<div class="animated-media">
  <img class="animated-media__image" src="{{ site.baseurl }}/img/animated-media/security-key-mobile.jpg" alt="A security key next to a phone">
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### PIV/CAC, desktop

{% capture example %}
<div class="animated-media">
  <img class="animated-media__image" src="{{ site.baseurl }}/img/animated-media/piv-cac-desktop.jpg" alt="A PIV/CAC card next to a laptop">
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### PIV/CAC, mobile

{% capture example %}
<div class="animated-media">
  <img class="animated-media__image" src="{{ site.baseurl }}/img/animated-media/piv-cac-mobile.jpg" alt="A PIV/CAC card and a card reader next to a phone">
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Desktop and mobile

Pair an `.animated-media--desktop` and an `.animated-media--mobile` to show the
desktop version at 768px and wider, and the mobile version below that. Resize
the window to see the swap.

{% capture example %}
<div class="animated-media animated-media--desktop">
  <img class="animated-media__image" src="{{ site.baseurl }}/img/animated-media/security-key-desktop.jpg" alt="A security key next to a laptop">
</div>
<div class="animated-media animated-media--mobile">
  <img class="animated-media__image" src="{{ site.baseurl }}/img/animated-media/security-key-mobile.jpg" alt="A security key next to a phone">
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
