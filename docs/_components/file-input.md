---
title: File input
lead: >
  The file input lets users upload one or more files from their device.
---

## File input

The file input uses a labeled `input` of type `file`. Once enhanced, it renders
a drop target with instructions, a choose link, and a preview list.

### Default

{% capture example %}
<div class="usa-form-group">
  <label class="usa-label" for="file-input-single">Upload a file</label>
  <div class="usa-file-input" data-enhanced="true">
    <div class="usa-file-input__target">
      <div class="usa-file-input__instructions" aria-hidden="true">
        Drag files here or <span class="usa-file-input__choose">choose from folder</span>
      </div>
      <div class="usa-file-input__box"></div>
      <input id="file-input-single" class="usa-file-input__input" type="file" name="file-input-single">
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### With a selected file

{% capture example %}
<div class="usa-form-group">
  <label class="usa-label" for="file-input-preview">Upload a file</label>
  <div class="usa-file-input" data-enhanced="true">
    <div class="usa-file-input__target">
      <div class="usa-file-input__preview-heading">Selected file <span class="usa-file-input__choose">Change file</span></div>
      <div class="usa-file-input__preview" aria-hidden="true"><img class="usa-file-input__preview-image usa-file-input__preview-image--pdf" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt=""/>document.pdf</div>
      <div class="usa-file-input__box"></div>
      <input id="file-input-preview" class="usa-file-input__input" type="file" name="file-input-preview">
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Uploading

{% capture example %}
<div class="usa-form-group">
  <label class="usa-label" for="file-input-uploading">Upload a file</label>
  <div class="usa-file-input" data-enhanced="true">
    <div class="usa-file-input__target">
      <div class="usa-file-input__loading-message" aria-live="polite">Uploading</div>
      <div class="usa-file-input__box"></div>
      <input id="file-input-uploading" class="usa-file-input__input" type="file" name="file-input-uploading">
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
<div class="usa-form-group usa-form-group--error">
  <label class="usa-label" for="file-input-error">Upload a file</label>
  <input id="file-input-error" class="usa-file-input" type="file" name="file-input-error" accept="image/*" data-errormessage="This file type is not accepted">
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Disabled

{% capture example %}
<div class="usa-form-group">
  <label class="usa-label" for="file-input-disabled">Upload a file</label>
  <div class="usa-file-input usa-file-input--disabled" data-enhanced="true">
    <div class="usa-file-input__target">
      <div class="usa-file-input__instructions" aria-hidden="true">
        Drag files here or <span class="usa-file-input__choose">choose from folder</span>
      </div>
      <div class="usa-file-input__box"></div>
      <input id="file-input-disabled" class="usa-file-input__input" type="file" name="file-input-disabled" disabled>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
