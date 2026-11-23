---
title: Connected services
lead: Connected and suggested agency services for a signed-in account.
---

## Connected services

Connected services use elevated panels; suggested services use a flat panel.
Each row uses the shared Agency Seal component. [Dashboard home]({{ site.baseurl }}/dashboard-home/)
shows these same lists below the page greeting. Both examples use sample account data.

{% capture example %}
<div class="dashboard-home connected-services-page">
  {% include helpers/connected-services.html %}
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
