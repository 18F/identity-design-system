---
title: Toast
lead: >
  Toasts show a brief, transient confirmation message.
---

## Toast

The `.toast` component is a compact notification pinned to the viewport. It is
normally shown and hidden by JavaScript and fades out on its own, so it is
transient by nature. Add `data-open="true"` to show it. The previews below are
taken out of the fixed viewport position (with inline styles that are not part
of the component) so each example appears where it is described.

A toast is made up of an announcement region (`.toast__announcement`) and its
text (`.toast__text`), with an optional icon chip (`.toast__icon`).

### Text only

This is the library's toast: a 52px black pill with 20px inline padding.

<div class="margin-y-3">
  <div class="toast" data-open="true" style="position: relative; left: auto; top: auto; bottom: auto; transform: none;">
    <span class="toast__announcement">
      <p class="toast__text">Toast message</p>
    </span>
  </div>
</div>

```html
<div class="toast" data-open="true">
  <span class="toast__announcement">
    <p class="toast__text">Toast message</p>
  </span>
</div>
```

### With icon

The icon chip is a Login.gov extension: the library's toast only has an
`Icon=off` variant. With an icon, the leading padding is 16px.

<div class="margin-y-3">
  <div class="toast" data-open="true" style="position: relative; left: auto; top: auto; bottom: auto; transform: none;">
    <span class="toast__announcement">
      <span class="toast__icon">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
      </span>
      <p class="toast__text">Your changes have been saved.</p>
    </span>
  </div>
</div>

```html
<div class="toast" data-open="true">
  <span class="toast__announcement">
    <span class="toast__icon">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="/assets/img/sprite.svg#check"></use></svg>
    </span>
    <p class="toast__text">Your changes have been saved.</p>
  </span>
</div>
```
