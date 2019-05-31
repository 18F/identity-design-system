---
title: Spinner
lead: >
  Spinners are used to help convey that the user should wait for the system to resolve.
---

Spinners can be helpful to signal to a user that the current process may require a few seconds.

**Before using a spinner** Consider if there is  a way to improve the performance of the sign to mitigate the use of a spinner.

## Example of a spinner

{% capture example %}
<div class="lg-spinner">
  <div>
    <img src="{{ site.baseurl }}/assets/img/spinner.gif" srcset="{{ site.baseurl }}/assets/img/spinner@2x.gif" width="144" height="144" class="text-middle" alt="Spinner" />
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Using a button click to launch a spinner

We may want to start with a hidden spinner and then remove it with a button click will the page transition resolves. 

{% capture example %}
<button class="usa-button__lg-invokeSpinner">Hide Button and trigger a spinner</button>
<div class="lg-spinner lg-spinner--hidden" id="spinner-id">
  <div>
    <img src="{{ site.baseurl }}/assets/img/spinner.gif" srcset="{{ site.baseurl }}/assets/img/spinner@2x.gif" width="144" height="144" class="text-middle" alt="Spinner" />
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
