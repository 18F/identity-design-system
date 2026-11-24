---
title: Process List
lead: A process list displays the steps or stages of important instructions or processes.
---

{% include helpers/base-component.html component="process-list" %}

Choose the step heading level to fit the surrounding page. These examples use
`h3` beneath each variant’s `h2`; the `.usa-process-list__heading` class controls its appearance.

## Default

{% capture example %}
<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Start a process</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Proceed to the second step</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
      lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula
      volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
      facilisi. Nulla libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Complete the step-by-step process</h3>
    <p>
      Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
      condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
      libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
</ol>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Connected

{% capture example %}
<ol class="usa-process-list usa-process-list--connected">
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Start a process</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Proceed to the second step</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
      lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula
      volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
      facilisi. Nulla libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Complete the step-by-step process</h3>
    <p>
      Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
      condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
      libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
</ol>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Big

{% capture example %}
<ol class="usa-process-list usa-process-list--big">
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Start a process</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Proceed to the second step</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
      lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula
      volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
      facilisi. Nulla libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Complete the step-by-step process</h3>
    <p>
      Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
      condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
      libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
</ol>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Big, Connected

{% capture example %}
<ol class="usa-process-list usa-process-list--big usa-process-list--connected">
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Start a process</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Proceed to the second step</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
      lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula
      volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
      facilisi. Nulla libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Complete the step-by-step process</h3>
    <p>
      Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
      condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
      libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
</ol>
{% endcapture %}
{% include helpers/code-example.html code=example %}
