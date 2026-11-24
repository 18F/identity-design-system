---
title: Modal
lead: >
  Modals focus the user on a single task or piece of information without leaving
  the page.
---

## Modal

A modal is a native `<dialog>` with the `modal` class. Set `data-open-modal`
on the opener to the dialog's ID, and `data-close-modal` on its dismissal
buttons. Associate the dialog with its title using `aria-labelledby`. Put
`autofocus` on the dialog itself so opening it does not select a button.

Small and Large fit their content up to the viewport limit. Both become a full-width
bottom sheet on mobile. The centered title and Close button stay visible while the
content scrolls. Scrollbars are hidden. A fade appears only at an edge with
more content to scroll to; when everything fits, neither edge fades.
The actions below are examples; they do not change an account.

For a Small modal in context, see the government website explainer in the
[Banner component]({{ site.baseurl }}/banner/).

### Small

{% capture example %}
<button type="button" class="usa-button" data-open-modal="modal-default">Open modal</button>
<dialog id="modal-default" class="modal" aria-labelledby="modal-default-title" autofocus>
  <div class="modal__body">
    {% include helpers/modal-header.html id="modal-default" title="The neighborhood map" %}
    <div class="modal__content">
      {% include helpers/modal-sample-content.html %}
    </div>
  </div>
</dialog>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Large

Use `modal--large` for a wider content area. `modal--wide` remains an alias.

{% capture example %}
<button type="button" class="usa-button" data-open-modal="modal-wide">Open large modal</button>
<dialog id="modal-wide" class="modal modal--large" aria-labelledby="modal-wide-title" autofocus>
  <div class="modal__body">
    {% include helpers/modal-header.html id="modal-wide" title="The neighborhood map" %}
    <div class="modal__content">
      {% include helpers/modal-sample-content.html %}
    </div>
  </div>
</dialog>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Media

The 240px-high placeholder shows where media can go. It spans the dialog;
the content below keeps its own padding.

{% capture example %}
<button type="button" class="usa-button" data-open-modal="modal-media">Open media modal</button>
<dialog id="modal-media" class="modal" aria-labelledby="modal-media-title" autofocus>
  <div class="modal__body modal__body--media">
    {% include helpers/modal-close.html %}
    <div class="modal__media-scroll" data-modal-scroll>
    <div class="modal__media media-placeholder" aria-hidden="true"></div>
    <div class="modal__body-inner">
      <div class="modal__heading">
        <h2 id="modal-media-title" class="modal__title">The neighborhood map</h2>
      </div>
      {% include helpers/modal-sample-content.html %}
    </div>
    </div>
  </div>
</dialog>
{% endcapture %}
{% include helpers/code-example.html code=example %}
