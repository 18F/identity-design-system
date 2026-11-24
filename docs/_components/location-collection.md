---
title: Location collection
lead: >
  A list of nearby locations with distance, postal address, weekly hours, and a selection action.
---

## Location collection

Each result shows its address and weekly hours. In a narrow layout, the Select
button spans the row below the hours; in a wider layout, it sits beside the address.
Set the width on the surrounding layout; the collection fills the available space.
The standalone panel grows with its content. Inside a locations modal, the list
can scroll independently. Each button submits a distinct location identifier.

{% capture example %}
<form data-location-example>
<ul class="location-collection" aria-label="Nearby locations">
  {% assign distances = "2.4,4.2" | split: "," %}
  {% for distance in distances %}
  <li class="location-collection__item">
    <div class="location-collection__details">
      <p class="location-collection__distance">{{ distance }} miles away</p>
      <p class="location-collection__address">4163 E Camelback Road<br>Phoenix, AZ, 85017-8993</p>
    </div>
    <div class="location-collection__hours">
      <strong>Hours</strong>
      <div>Monday to Friday: 9:00 AM - 12:00 PM<br>Saturday: 8:30 AM - 5:00 PM<br>Sunday: Closed</div>
    </div>
    <button type="submit" name="location" value="location-{{ forloop.index }}" class="usa-button usa-button--md" aria-label="Select location {{ distance }} miles away">Select</button>
  </li>
  {% endfor %}
</ul>
</form>
{% endcapture %}
{% include helpers/code-example.html code=example %}
