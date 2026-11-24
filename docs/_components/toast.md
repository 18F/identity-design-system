---
title: Toast
lead: >
  Toasts show a brief, transient confirmation message.
---

## Toast

The `.toast` component is a compact notification pinned to the viewport. It is
shown by setting `data-open="true"` and hidden by removing that attribute.
In NDS it is centered 40px from the viewport's top edge on desktop or bottom
edge on mobile, above other page components. It slides and fades in, then fades out in place. With reduced motion
it appears and disappears immediately. Use **Show toast** to try each example.

Keep the visual toast `aria-hidden="true"` in both states. Provide a separate,
initially empty `role="status"` region before the action occurs. On success,
put the message in that region and open the visual toast without moving focus.
On dismissal, close the toast and clear the region. The `toast__announcement`
class controls layout only; it does not announce a message by itself.

With the design system's auto bundle loaded, `data-show-toast` selects the
toast by ID and `data-toast-status` selects its status region by ID. This
button example dismisses after three seconds; if your application drives the
notification directly, use the same status and visibility pattern. For actions
inside a native modal, keep the toast and status in that dialog, not behind
it in the page. The bundled behavior presents a fixed modal toast as a manual
popover so its position still follows the viewport rather than the dialog.

### With icon

{% capture example %}
<button type="button" class="usa-button usa-button--secondary usa-button--md" data-show-toast="saved-toast">Show toast</button>
<span class="usa-sr-only" id="saved-status" role="status"></span>
<div class="toast" id="saved-toast" data-toast-status="saved-status" aria-hidden="true">
  <div class="toast__announcement">
    <span class="toast__icon">
      <svg width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#checkmark"></use></svg>
    </span>
    <p class="toast__text">Your changes have been saved.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Text only

{% capture example %}
<button type="button" class="usa-button usa-button--secondary usa-button--md" data-show-toast="copied-toast">Show toast</button>
<span class="usa-sr-only" id="copied-status" role="status"></span>
<div class="toast" id="copied-toast" data-toast-status="copied-status" aria-hidden="true">
  <div class="toast__announcement">
    <p class="toast__text">Link copied to your clipboard.</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
