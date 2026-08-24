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
  <div class="usa-file-input">
    <div class="usa-file-input__target">
      <div class="usa-file-input__instructions" aria-hidden="true">
        Drag file here or <span class="usa-file-input__choose">choose from folder</span>
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
  <div class="usa-file-input">
    <div class="usa-file-input__target">
      <div class="usa-file-input__preview-heading">
        Selected file <span class="usa-file-input__choose">Change file</span>
      </div>
      <div class="usa-file-input__preview" aria-hidden="true">
        document.pdf
      </div>
      <div class="usa-file-input__box"></div>
      <input id="file-input-preview" class="usa-file-input__input" type="file" name="file-input-preview">
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Error

Use `usa-form-group--error` on the group and
`usa-file-input__accepted-files-message` to describe the accepted file types.

{% capture example %}
<div class="usa-form-group usa-form-group--error">
  <label class="usa-label" for="file-input-error">Upload a file</label>
  <div class="usa-file-input">
    <div class="usa-file-input__target">
      <div class="usa-file-input__accepted-files-message">This file type is not accepted.</div>
      <div class="usa-file-input__instructions" aria-hidden="true">
        Drag file here or <span class="usa-file-input__choose">choose from folder</span>
      </div>
      <div class="usa-file-input__box"></div>
      <input id="file-input-error" class="usa-file-input__input" type="file" name="file-input-error">
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Disabled

{% capture example %}
<div class="usa-form-group">
  <label class="usa-label" for="file-input-disabled">Upload a file</label>
  <div class="usa-file-input usa-file-input--disabled">
    <div class="usa-file-input__target">
      <div class="usa-file-input__instructions" aria-hidden="true">
        Drag file here or <span class="usa-file-input__choose">choose from folder</span>
      </div>
      <div class="usa-file-input__box"></div>
      <input id="file-input-disabled" class="usa-file-input__input" type="file" name="file-input-disabled" disabled>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
