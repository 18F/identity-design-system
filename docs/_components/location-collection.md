---
title: Location collection
lead: >
  A scrollable list of nearby locations with address and hours.
---

## Location collection

The `.location-collection` component is a scrollable list of locations. Each
`.location-collection__item` shows a distance heading, address, and hours, with
room for an action button. The list scrolls on its own with soft fade edges and
can be used on its own or inside a modal.

{% capture example %}
<ul class="location-collection" aria-label="Nearby locations">
  <li class="location-collection__item">
    <div class="location-collection__top">
      <div class="location-collection__details">
        <p class="location-collection__distance">0.4 miles away</p>
        <p class="location-collection__address">
          <strong>Downtown Post Office</strong><br>
          123 Main Street, Suite 100
        </p>
        <p class="location-collection__hours">
          <strong>Open today</strong> until 5:00 PM
        </p>
      </div>
      <a href="#" class="usa-button">Select</a>
    </div>
  </li>
  <li class="location-collection__item">
    <div class="location-collection__top">
      <div class="location-collection__details">
        <p class="location-collection__distance">1.2 miles away</p>
        <p class="location-collection__address">
          <strong>Riverside Branch</strong><br>
          456 River Road
        </p>
        <p class="location-collection__hours">
          <strong>Open today</strong> until 6:00 PM
        </p>
      </div>
      <a href="#" class="usa-button">Select</a>
    </div>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}
