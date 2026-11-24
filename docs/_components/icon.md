---
title: Icon
lead: >
  Interface icons use NDS catalog artwork in both themes. The `usa-icon`
  classes control size and alignment, not the source of the drawing.
---

## Icon

For NDS components, choose the drawing from the [NDS icon catalog]({{ site.baseurl }}/assets/img/nds-icons/library/catalog.json).
Look up the icon's `key`, then the `variants` entry for the specified size and
background. Its `asset` names the SVG in `assets/img/nds-icons/library/`.
Equivalent sizes share a master; size-specific drawings and multicolor
artwork retain their own files. Outline and filled icons are separate entries.
Keys with a Figma node suffix distinguish designs with the same library name.

{% capture example %}
<span class="display-flex flex-align-center flex-justify-center">
  <svg class="usa-icon usa-icon--size-3" aria-hidden="true" focusable="false">
    <use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#lock"></use>
  </svg>
  <span class="margin-left-1">Secure</span>
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

The NDS lock symbol inherits the label's text color in both themes, including
forced colors. For single-color catalog icons not in the sprite, the NDS
theme also supports the mask form:

```html
<span class="usa-icon usa-icon--size-3" data-nds-icon aria-hidden="true"
  style="--nds-icon-source: url('/assets/img/nds-icons/library/lock.svg')"></span>
```

For multicolor artwork (`ink: null`),
use an `<img>` with its intrinsic aspect ratio instead. Give icon-only controls
an accessible name; keep decorative icons hidden from assistive technology.
Previously shipped SVG URLs remain available for compatibility; do not use
them as sources for new interface icons.

Use this catalog for all NDS interface icons, including control backgrounds
and loading indicators. Do not copy a path from another library. If the
catalog has no suitable drawing, use a text label or request a library icon.
Logos, agency seals, and illustrations are separate brand assets.

`make build-images` generates the shared symbols and NDS copies of filenames
requested internally by USWDS. For components that need embedded Sass images,
regenerate the catalog-backed partial with `node scripts/build-nds-icons.mjs --sass`.
Run `npm run lint:icons` to check references and detect stale generated Sass.
