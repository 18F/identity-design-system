---
title: File input
lead: >
  The file input lets users upload one or more files from their device.
---

## File input

The file input uses a labeled `input` of type `file`. Once enhanced, it renders
a drop target with instructions, a choose link, and a preview list.
The surrounding form supplies any visible label or heading. These standalone
examples name the control using the action in the drop target instead.
Use the `data-nds-file-input` markup below with the design-system auto bundle
(or initialize `ndsFileInput` explicitly) for validation, status updates, and
form reset support. A bare USWDS input uses the upstream behavior instead.

### Default

{% capture example %}
{% include helpers/file-input.html id="file-input-single" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Hovered

The drop target changes while a file is dragged over it. The system provides
the drag cursor and file thumbnail; they are not part of the component.

{% capture example %}
{% include helpers/file-input.html id="file-input-hovered" state="hovered" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Uploading

This status-only example does not start an upload or allow another selection.

{% capture example %}
<div class="usa-form-group">
  <div class="usa-file-input" data-enhanced="true">
    <div class="usa-file-input__target">
      <div id="file-upload-status" class="usa-file-input__loading-message" aria-live="polite">Uploading</div>
      <div class="usa-file-input__box"></div>
      <input id="file-input-uploading" class="usa-file-input__input" type="file" disabled aria-label="File upload" aria-describedby="file-upload-status">
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Error

Set `accept` to restrict file types and `data-errormessage` for the rejection
message. When a disallowed file is dropped, the component adds the error state
and shows the message.

{% capture example %}
{% include helpers/file-input.html id="file-input-error" state="error" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Selected file

The initial filename illustrates an existing attachment, not a prefilled local
file. Choose a PDF to replace it. File type checks here provide feedback;
the receiving application must validate uploads separately.

{% capture example %}
{% include helpers/file-input.html id="file-input-preview" state="selected" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Disabled

{% capture example %}
<div class="usa-form-group">
  <div class="usa-file-input usa-file-input--disabled" data-enhanced="true" aria-disabled="true">
    <div class="usa-file-input__target">
      <div class="usa-file-input__instructions" aria-hidden="true">
        Drag files here or <span class="usa-file-input__choose">choose from folder</span>
      </div>
      <div class="usa-file-input__box"></div>
      <input id="file-input-disabled" class="usa-file-input__input" type="file" name="file-input-disabled" aria-label="Choose from folder" disabled>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
